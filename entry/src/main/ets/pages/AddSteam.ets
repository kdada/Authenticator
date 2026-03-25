import { AuthData, AuthDataStore, DefaultToastDuration, SteamAccountData, SteamAuthData } from './Base';
import { SteamClient } from './Steam';
import * as steamapi from './steamapi/custom';
import { uri, util } from '@kit.ArkTS';
import { systemDateTime } from '@kit.BasicServicesKit';

@Component
export struct AddSteamToken {
  @Consume("pageStack") pageStack: NavPathStack;

  build() {
    NavDestination() {
      RelativeContainer() {
        Column() {
          Text($r('app.string.steam_intro_title'))
            .fontWeight(FontWeight.Bold)
            .margin(10)
          Text($r('app.string.steam_intro_steps'))
            .copyOption(CopyOptions.LocalDevice)
            .fontSize(14)
          Text($r('app.string.steam_intro_note'))
            .copyOption(CopyOptions.LocalDevice)
            .fontSize(14)
            .margin(10)
        }
        .alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })

        Button($r('app.string.steam_start_now'))
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
          .onClick(() => {
            this.pageStack.pushPathByName("SteamLogin", undefined)
          })
      }
    }
    .title($r('app.string.add_steam_title'))
  }
}

@Component
export struct SteamLogin {
  @Consume("pageStack") pageStack: NavPathStack;
  @State steamAccount: string = "";
  @State steamPassword: string = "";
  @State loggingIn: boolean = false;
  @StorageProp("enhanceNetwork") enhanceNetwork: boolean = false
  private steamClient: SteamClient = new SteamClient(this.enhanceNetwork);
  private accountData: SteamAccountData = new SteamAccountData();

  build() {
    NavDestination() {
      RelativeContainer() {
        Column() {
          Row() {
            Text($r('app.string.steam_login_prompt'))
              .fontWeight(FontWeight.Bold)
          }
          .margin({ bottom: 10 })

          Row() {
            Text($r('app.string.steam_account_name'))
              .width("30%")
              .fontWeight(FontWeight.Bold)
              .textAlign(TextAlign.Start)
            TextInput({ text: this.steamAccount })
              .width("60%")
              .fontWeight(FontWeight.Bold)
              .textAlign(TextAlign.End)
              .maxLength(50)
              .onChange((v) => this.steamAccount = v.trim())
          }
          .margin({ bottom: 10 })

          Row() {
            Text($r('app.string.steam_password'))
              .width("30%")
              .fontWeight(FontWeight.Bold)
              .textAlign(TextAlign.Start)
            TextInput({ text: this.steamPassword })
              .type(InputType.Password)
              .width("60%")
              .fontWeight(FontWeight.Bold)
              .textAlign(TextAlign.End)
              .maxLength(50)
              .onChange((v) => this.steamPassword = v.trim())
          }
        }
        .alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })

        Button($r('app.string.common_login'))
          .enabled((!this.loggingIn) && (this.steamAccount != "") && (this.steamPassword != ""))
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
          .onClick(() => {
            this.getUIContext().getPromptAction().showToast({
              duration: DefaultToastDuration,
              message: $r('app.string.detail_steam_login_start')
            })
            this.loggingIn = true
            this.steamClient.login(this.steamAccount, this.steamPassword, (err, auth) => {
              this.loggingIn = false
              if (err) {
                this.getUIContext().getPromptAction().showToast({
                  duration: DefaultToastDuration,
                  message: $r('app.string.detail_steam_login_failed_format', err.message)
                })
                return
              }
              this.accountData.auth = auth
              this.accountData.confirmation = undefined
              for (let index = 0; index < auth!.allowedConfirmations.length; index++) {
                const element = auth!.allowedConfirmations[index]
                if (element.confirmationType == steamapi.EAuthSessionGuardType.k_EAuthSessionGuardType_EmailCode ||
                  element.confirmationType == steamapi.EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode ||
                  element.confirmationType ==
                  steamapi.EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceConfirmation ||
                  element.confirmationType ==
                  steamapi.EAuthSessionGuardType.k_EAuthSessionGuardType_EmailConfirmation) {
                  this.accountData.confirmation = element
                  break
                }
              }
              if (!this.accountData.confirmation) {
                this.getUIContext().getPromptAction().showToast({
                  duration: DefaultToastDuration,
                  message: $r('app.string.steam_login_fetching_auth')
                })
                this.loggingIn = true
                this.steamClient.pollTokens(auth!.clientId, auth!.requestId, (pollErr, tokens) => {
                  this.loggingIn = false
                  if (pollErr) {
                    this.getUIContext().getPromptAction().showToast({
                      duration: DefaultToastDuration,
                      message: $r('app.string.steam_auth_fetch_failed_format', pollErr.message)
                    })
                    return
                  }
                  this.accountData.tokens = tokens
                  this.pageStack.pushPathByName("SteamLink", this.accountData)
                })
              }
              this.pageStack.pushPathByName("SteamMFALogin", this.accountData)
            })
          })
      }
    }
    .title($r('app.string.steam_login_title'))
  }
}

@Component
export struct SteamMFALogin {
  @Consume("pageStack") pageStack: NavPathStack;
  @State loggingIn: boolean = false;
  @StorageProp("enhanceNetwork") enhanceNetwork: boolean = false
  private steamClient: SteamClient = new SteamClient(this.enhanceNetwork);
  public accountData: SteamAccountData = new SteamAccountData();
  private steamToken: string = "";

  build() {
    NavDestination() {
      RelativeContainer() {
        if (this.accountData.confirmation!.confirmationType ==
        steamapi.EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceConfirmation) {
          Column() {
            Text($r('app.string.steam_mfa_device_confirmation'))
              .fontWeight(FontWeight.Bold)
              .margin(10)
          }
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            center: { anchor: "__container__", align: VerticalAlign.Center }
          })
        } else if (this.accountData.confirmation!.confirmationType ==
        steamapi.EAuthSessionGuardType.k_EAuthSessionGuardType_EmailConfirmation) {
          Column() {
            Text($r('app.string.steam_mfa_email_confirmation'))
              .fontWeight(FontWeight.Bold)
              .margin(10)
          }
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            center: { anchor: "__container__", align: VerticalAlign.Center }
          })
        } else if (this.accountData.confirmation!.confirmationType ==
        steamapi.EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode) {
          Column() {
            Text($r('app.string.steam_mfa_device_code'))
              .fontWeight(FontWeight.Bold)
              .margin(10)
            TextInput()
              .margin(10)
              .onChange((v) => {
                this.steamToken = v
              })
          }
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            center: { anchor: "__container__", align: VerticalAlign.Center }
          })
        } else if (this.accountData.confirmation!.confirmationType ==
        steamapi.EAuthSessionGuardType.k_EAuthSessionGuardType_EmailCode) {
          Column() {
            Text($r('app.string.steam_mfa_email_code'))
              .fontWeight(FontWeight.Bold)
              .margin(10)
            TextInput()
              .margin(10)
              .onChange((v) => {
                this.steamToken = v
              })
          }
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            center: { anchor: "__container__", align: VerticalAlign.Center }
          })
        }

        Button($r('app.string.steam_complete_login'))
          .enabled(!this.loggingIn)
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
          .onClick(() => {
            let auth = this.accountData.auth!
            if (this.accountData.confirmation!.confirmationType ==
            steamapi.EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode ||
              this.accountData.confirmation!.confirmationType ==
              steamapi.EAuthSessionGuardType.k_EAuthSessionGuardType_EmailCode) {
              if (this.steamToken == "") {
                this.getUIContext().getPromptAction().showToast({
                  duration: DefaultToastDuration,
                  message: $r('app.string.common_enter_token_first')
                })
                return
              }

              this.loggingIn = true
              this.steamClient.submitLoginCode(auth.steamid, auth.clientId,
                this.accountData.confirmation!.confirmationType, this.steamToken, (err) => {
                  if (err) {
                    this.getUIContext().getPromptAction().showToast({
                      duration: DefaultToastDuration,
                      message: $r('app.string.detail_steam_login_failed_format', err.message)
                    })
                    return
                  }
                  this.getUIContext().getPromptAction().showToast({
                    duration: DefaultToastDuration,
                    message: $r('app.string.steam_login_fetching_auth')
                  })
                  this.loggingIn = true
                  this.steamClient.pollTokens(auth.clientId, auth.requestId, (pollErr, tokens) => {
                    this.loggingIn = false
                    if (pollErr) {
                      this.getUIContext().getPromptAction().showToast({
                        duration: DefaultToastDuration,
                        message: $r('app.string.steam_auth_fetch_failed_format', pollErr.message)
                      })
                      return
                    }
                    this.accountData.tokens = tokens
                    this.pageStack.pushPathByName("SteamLink", this.accountData)
                  })
                })
            } else {
              this.getUIContext().getPromptAction().showToast({
                duration: DefaultToastDuration,
                message: $r('app.string.steam_fetching_auth')
              })
              this.loggingIn = true
              this.steamClient.pollTokens(auth.clientId, auth.requestId, (err, tokens) => {
                this.loggingIn = false
                if (err) {
                  this.getUIContext().getPromptAction().showToast({
                    duration: DefaultToastDuration,
                    message: $r('app.string.steam_auth_fetch_failed_format', err.message)
                  })
                  return
                }
                this.accountData.tokens = tokens
                this.pageStack.pushPathByName("SteamLink", this.accountData)
              })
            }
          })
      }
    }
    .title($r('app.string.add_steam_title'))
  }
}

@Component
export struct SteamLink {
  @Consume("pageStack") pageStack: NavPathStack;
  @State linking: boolean = false;
  @StorageProp("enhanceNetwork") enhanceNetwork: boolean = false
  private steamClient: SteamClient = new SteamClient(this.enhanceNetwork);
  public accountData: SteamAccountData = new SteamAccountData();

  build() {
    NavDestination() {
      RelativeContainer() {
        Column() {
          Text($r('app.string.steam_link_success_format', this.accountData.tokens!.accountName))
            .fontWeight(FontWeight.Bold)
            .margin(10)
        }
        .alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })

        Button($r('app.string.common_add'))
          .enabled(!this.linking)
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
          .onClick(() => {
            if (this.accountData.deviceId == "") {
              this.accountData.deviceId = "android:" + util.generateRandomUUID()
            }
            let auth = this.accountData.auth!
            let tokens = this.accountData.tokens!
            this.linking = true
            this.steamClient.addAuthenticator(auth.steamid.toString(), tokens.refreshToken, this.accountData.deviceId,
              (err, authData) => {
                this.linking = false
                if (err) {
                  if (err.message == "DuplicateRequest") {
                    this.pageStack.pushPathByName("SteamTransferAuthenticator", this.accountData)
                    return
                  }
                  this.getUIContext().getPromptAction().showToast({
                    duration: DefaultToastDuration,
                    message: $r('app.string.steam_add_authenticator_failed_format', err.message)
                  })
                  return
                }

                this.accountData.authenticator = authData
                this.pageStack.pushPathByName("SteamConfirmLink", this.accountData)
              })
          })
      }
    }
    .title($r('app.string.add_steam_title'))
  }
}

@Component
export struct SteamConfirmLink {
  @Consume("pageStack") pageStack: NavPathStack;
  @Consume("authDataStore") authDataStore: AuthDataStore;
  @State linking: boolean = false;
  @StorageProp("enhanceNetwork") enhanceNetwork: boolean = false
  private steamClient: SteamClient = new SteamClient(this.enhanceNetwork);
  private steamToken: string = "";
  public accountData: SteamAccountData = new SteamAccountData();

  build() {
    NavDestination() {
      RelativeContainer() {
        if (this.accountData.authenticator!.confirmType == 1/*SMS*/) {
          Column() {
            Text($r('app.string.steam_confirm_link_sms'))
              .fontWeight(FontWeight.Bold)
              .margin(10)
            TextInput()
              .margin(10)
              .onChange((v) => {
                this.steamToken = v
              })
          }
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            center: { anchor: "__container__", align: VerticalAlign.Center }
          })
        } else if (this.accountData.authenticator!.confirmType == 3/*Email*/) {
          Column() {
            Text($r('app.string.steam_confirm_link_email'))
              .fontWeight(FontWeight.Bold)
              .margin(10)
            TextInput()
              .margin(10)
              .onChange((v) => {
                this.steamToken = v
              })
          }
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            center: { anchor: "__container__", align: VerticalAlign.Center }
          })
        }

        Button($r('app.string.steam_complete_add'))
          .enabled(!this.linking)
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
          .onClick(() => {
            if (this.steamToken == "") {
              this.getUIContext().getPromptAction().showToast({
                duration: DefaultToastDuration,
                message: $r('app.string.common_enter_code_first')
              })
              return
            }
            this.linking = true
            let auth = this.accountData.auth!
            let tokens = this.accountData.tokens!
            let authenticator = this.accountData.authenticator!

            let keyData: Uint8Array = authenticator.sharedSecret
            let seconds = systemDateTime.getTime(false) / 1000
            let token = AuthDataStore.calculatePassword(keyData, seconds, 5)

            this.steamClient.finalizeAuthenticator(auth.steamid.toString(), tokens.refreshToken, token, seconds,
              this.steamToken,
              (err, resp) => {
                this.linking = false
                if (err) {
                  this.getUIContext().getPromptAction().showToast({
                    duration: DefaultToastDuration,
                    message: $r('app.string.steam_finalize_failed_format', err.message)
                  })
                  return
                }
                if (resp!.wantMore) {
                  this.getUIContext().getPromptAction().showToast({
                    duration: DefaultToastDuration,
                    message: $r('app.string.steam_token_mismatch')
                  })
                  return
                }

                this.accountData.finalizeAuthenticator = resp
                let authURI = new uri.URI(authenticator.uri)
                let authData: AuthData = {
                  uuid: "",
                  order: 0,
                  alias: "Steam",
                  issuer: "Steam",
                  account: tokens.accountName,
                  secret: authURI.getQueryValue("secret"),
                  digits: 5,
                  password: token,
                  external: "",
                  tokenIconPath: ""
                }

                let helper = new util.Base64Helper()
                let steamAuthData: SteamAuthData = {
                  accountName: authenticator.accountName,
                  steamID: auth.steamid.toString(),
                  serialNumber: authenticator.serialNumber.toString(),
                  revocationCode: authenticator.revocationCode,
                  sharedSecret: helper.encodeToStringSync(authenticator.sharedSecret),
                  tokenGID: authenticator.tokenGid,
                  identitySecret: helper.encodeToStringSync(authenticator.identitySecret),
                  uri: authenticator.uri,
                  deviceID: this.accountData.deviceId,
                  secret1: helper.encodeToStringSync(authenticator.secret_1),
                  accessToken: tokens.accessToken,
                  refreshToken: tokens.refreshToken,
                }
                this.authDataStore.addOneAuthItem(authData, steamAuthData)
                this.getUIContext().getPromptAction().showToast({
                  duration: DefaultToastDuration,
                  message: $r('app.string.steam_add_success')
                })
                this.pageStack.clear()
              })
          })
      }
    }
    .title($r('app.string.add_steam_title'))
  }
}

@Component
export struct SteamTransferAuthenticator {
  @Consume("pageStack") pageStack: NavPathStack;
  @State linking: boolean = false;
  @StorageProp("enhanceNetwork") enhanceNetwork: boolean = false
  private steamClient: SteamClient = new SteamClient(this.enhanceNetwork);
  public accountData: SteamAccountData = new SteamAccountData();

  build() {
    NavDestination() {
      RelativeContainer() {
        Column() {
          Text($r('app.string.steam_transfer_prompt'))
            .fontWeight(FontWeight.Bold)
            .margin(10)

          Text($r('app.string.steam_transfer_note'))
            .fontWeight(FontWeight.Bold)
            .margin(10)
        }
        .alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })

        Button($r('app.string.steam_transfer_button'))
          .enabled(!this.linking)
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
          .onClick(() => {
            let auth = this.accountData.auth!
            let tokens = this.accountData.tokens!
            this.linking = true
            this.steamClient.transferAuthenticator(auth.steamid.toString(), tokens.refreshToken, (err) => {
              this.linking = false
              if (err) {
                this.getUIContext().getPromptAction().showToast({
                  duration: DefaultToastDuration,
                  message: $r('app.string.steam_transfer_failed_format', err.message)
                })
                return
              }
              this.pageStack.pushPathByName("SteamConfirmTransferAuthenticator", this.accountData)
            })
          })
      }
    }
    .title($r('app.string.add_steam_title'))
  }
}

@Component
export struct SteamConfirmTransferAuthenticator {
  @Consume("pageStack") pageStack: NavPathStack;
  @Consume("authDataStore") authDataStore: AuthDataStore;
  @State steamToken: string = "";
  @State linking: boolean = false;
  @StorageProp("enhanceNetwork") enhanceNetwork: boolean = false
  private steamClient: SteamClient = new SteamClient(this.enhanceNetwork);
  public accountData: SteamAccountData = new SteamAccountData();

  build() {
    NavDestination() {
      RelativeContainer() {
        Column() {
          Text($r('app.string.steam_transfer_sms'))
            .fontWeight(FontWeight.Bold)
            .margin(10)
          TextInput()
            .margin(10)
            .onChange((v) => {
              this.steamToken = v
            })
        }
        .alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })

        Button($r('app.string.steam_complete_transfer'))
          .enabled(!this.linking && this.steamToken != "")
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
          .onClick(() => {
            let auth = this.accountData.auth!
            let tokens = this.accountData.tokens!
            this.linking = true
            this.steamClient.submitSMSCode(auth.steamid.toString(), tokens.refreshToken, this.steamToken,
              (err, account) => {
                this.linking = false
                if (err || !account!.success) {
                  this.getUIContext().getPromptAction().showToast({
                    duration: DefaultToastDuration,
                    message: $r('app.string.steam_transfer_failed_format', `${err?.message}`)
                  })
                  return
                }
                let replacementToken = account!.replacementToken!
                let authURI = new uri.URI(replacementToken.uri!)
                let authData: AuthData = {
                  uuid: "",
                  order: 0,
                  alias: "Steam",
                  issuer: "Steam",
                  account: tokens.accountName,
                  secret: authURI.getQueryValue("secret"),
                  digits: 5,
                  password: "",
                  external: "",
                  tokenIconPath: ""
                }

                let helper = new util.Base64Helper()
                let steamAuthData: SteamAuthData = {
                  accountName: replacementToken.accountName!,
                  steamID: auth.steamid.toString(),
                  serialNumber: replacementToken.serialNumber!.toString(),
                  revocationCode: replacementToken.revocationCode!,
                  sharedSecret: helper.encodeToStringSync(replacementToken.sharedSecret),
                  tokenGID: replacementToken.tokenGid!,
                  identitySecret: helper.encodeToStringSync(replacementToken.identitySecret),
                  uri: replacementToken.uri!,
                  deviceID: "android:transfer",
                  secret1: helper.encodeToStringSync(replacementToken.secret_1),
                  accessToken: tokens.accessToken,
                  refreshToken: tokens.refreshToken,
                }
                this.authDataStore.addOneAuthItem(authData, steamAuthData)
                this.getUIContext().getPromptAction().showToast({
                  duration: DefaultToastDuration,
                  message: $r('app.string.steam_add_success')
                })
                this.pageStack.clear()
              })
          })
      }
    }
    .title($r('app.string.add_steam_title'))
  }
}

@Component
export struct SteamRefreshToken {
  public authData: AuthData = new AuthData()
  public steamAuthData: SteamAuthData = new SteamAuthData()
  @Consume("pageStack") pageStack: NavPathStack;
  @Consume("authDataStore") authDataStore: AuthDataStore;
  @State steamAccount: string = "";
  @State steamPassword: string = "";
  @State loggingIn: boolean = false;
  @StorageProp("enhanceNetwork") enhanceNetwork: boolean = false
  private steamClient: SteamClient = new SteamClient(this.enhanceNetwork);

  aboutToAppear(): void {
    this.steamAccount = this.steamAuthData.accountName
  }

  build() {
    NavDestination() {
      RelativeContainer() {
        Column() {
          Row() {
            Text($r('app.string.steam_refresh_prompt'))
              .fontWeight(FontWeight.Bold)
          }
          .margin({ bottom: 10 })

          Row() {
            Text($r('app.string.steam_account_name'))
              .width("30%")
              .fontWeight(FontWeight.Bold)
              .textAlign(TextAlign.Start)
            Text(this.steamAccount)
              .width("60%")
              .fontWeight(FontWeight.Bold)
              .textAlign(TextAlign.End)
          }
          .margin({ bottom: 10 })

          Row() {
            Text($r('app.string.steam_password'))
              .width("30%")
              .fontWeight(FontWeight.Bold)
              .textAlign(TextAlign.Start)
            TextInput({ text: this.steamPassword })
              .type(InputType.Password)
              .width("60%")
              .fontWeight(FontWeight.Bold)
              .textAlign(TextAlign.End)
              .maxLength(50)
              .onChange((v) => this.steamPassword = v.trim())
          }
        }
        .alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })

        Button($r('app.string.common_login'))
          .enabled((!this.loggingIn) && (this.steamAccount != "") && (this.steamPassword != ""))
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
          .onClick(() => {
            this.getUIContext().getPromptAction().showToast({
              duration: DefaultToastDuration,
              message: $r('app.string.detail_steam_login_start')
            })
            this.loggingIn = true
            this.steamClient.login(this.steamAccount, this.steamPassword, (err, auth) => {
              this.loggingIn = false
              if (err) {
                this.getUIContext().getPromptAction().showToast({
                  duration: DefaultToastDuration,
                  message: $r('app.string.detail_steam_login_failed_format', err.message)
                })
                return
              }
              let confirmation = steamapi.EAuthSessionGuardType.k_EAuthSessionGuardType_Unknown
              for (let index = 0; index < auth!.allowedConfirmations.length; index++) {
                const element = auth!.allowedConfirmations[index]
                if (element.confirmationType == steamapi.EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode) {
                  confirmation = element.confirmationType
                  break
                }
              }
              if (confirmation != steamapi.EAuthSessionGuardType.k_EAuthSessionGuardType_DeviceCode) {
                this.getUIContext().getPromptAction().showToast({
                  duration: DefaultToastDuration,
                  message: $r('app.string.steam_refresh_confirmation_type_error_format', confirmation)
                })
                return
              }

              this.getUIContext().getPromptAction().showToast({
                duration: DefaultToastDuration,
                message: $r('app.string.steam_refresh_submitting')
              })

              this.loggingIn = true
              this.steamClient.submitLoginCode(auth!.steamid, auth!.clientId,
                confirmation, this.authData.password, (submitErr) => {
                  this.loggingIn = false
                  if (submitErr) {
                    this.getUIContext().getPromptAction().showToast({
                      duration: DefaultToastDuration,
                      message: $r('app.string.steam_refresh_submit_failed_format', submitErr.message)
                    })
                    return
                  }
                  this.getUIContext().getPromptAction().showToast({
                    duration: DefaultToastDuration,
                    message: $r('app.string.steam_refresh_submit_success')
                  })
                  this.loggingIn = true
                  this.steamClient.pollTokens(auth!.clientId, auth!.requestId, (pollErr, tokens) => {
                    this.loggingIn = false
                    if (pollErr) {
                      this.getUIContext().getPromptAction().showToast({
                        duration: DefaultToastDuration,
                        message: $r('app.string.steam_auth_fetch_failed_format', pollErr.message)
                      })
                      return
                    }
                    this.steamAuthData.refreshToken = tokens!.refreshToken
                    this.steamAuthData.accessToken = tokens!.accessToken
                    this.authData.external = JSON.stringify(this.steamAuthData)
                    this.authDataStore.saveAuthItem(this.authData.uuid)
                    this.getUIContext().getPromptAction().showToast({
                      duration: DefaultToastDuration,
                      message: $r('app.string.steam_refresh_success')
                    })
                    this.pageStack.clear()
                  })
                })
            })
          })
      }
    }
    .title($r('app.string.steam_refresh_title'))
  }
}