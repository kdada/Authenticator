import { AuthData, AuthDataStore, SteamAccountData, SteamAuthData } from "./Base";
import { SteamClient } from "./Steam";
import * as steamapi from './steamapi/custom'
import * as steam2faapi from './steamapi/service_twofactor'
import { uri, util } from "@kit.ArkTS";
import { systemDateTime } from "@kit.BasicServicesKit";

@Component
export struct AddSteamToken {
  @Consume("pageStack") pageStack: NavPathStack;

  build() {
    NavDestination() {
      RelativeContainer() {
        Column() {
          Text("流程说明")
            .fontWeight(FontWeight.Bold)
            .margin(10)
          Text("1. 登录 Steam\n2. 向 Steam 中添加身份验证器")
            .copyOption(CopyOptions.LocalDevice)
            .fontSize(14)
          Text("注：期间需要输入 Steam 密码和验证码\n如遇问题请加 QQ 群咨询：931132608")
            .copyOption(CopyOptions.LocalDevice)
            .fontSize(14)
            .margin(10)
        }
        .alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })

        Button("立即开始")
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
    .title("添加 Steam 令牌")
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
            Text("请输入 Steam 账户名称和密码")
              .fontWeight(FontWeight.Bold)
          }
          .margin({ bottom: 10 })

          Row() {
            Text("账户名称")
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
            Text("密码")
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

        Button("登录")
          .enabled((!this.loggingIn) && (this.steamAccount != "") && (this.steamPassword != ""))
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
          .onClick(() => {
            this.getUIContext().getPromptAction().showToast({
              message: `开始登录 Steam...`
            })
            this.loggingIn = true
            this.steamClient.login(this.steamAccount, this.steamPassword, (err, auth) => {
              this.loggingIn = false
              if (err) {
                this.getUIContext().getPromptAction().showToast({
                  message: `Steam 登录失败：${err.message}`
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
                  message: `Steam 登录成功，正在获取认证信息...`
                })
                this.loggingIn = true
                this.steamClient.pollTokens(auth!.clientId, auth!.requestId, (err, tokens) => {
                  this.loggingIn = false
                  if (err) {
                    this.getUIContext().getPromptAction().showToast({
                      message: `Steam 认证信息获取失败：${err.message}`
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
    .title("登录 Steam")
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
            Text("Steam 启用了多重身份验证，请在其他设备上确认本次登录，确认完成后再点击【完成登录】")
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
            Text("Steam 启用了多重身份验证，确认邮件已发送，请点击邮件内的确认链接后再点击【完成登录】")
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
            Text("Steam 启用了多重身份验证，请从已绑定的身份验证器获取令牌并输入")
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
            Text("Steam 启用了多重身份验证，令牌已通过邮件发送，请输入令牌")
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

        Button("完成登录")
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
                  message: `请先输入令牌`
                })
                return
              }

              this.loggingIn = true
              this.steamClient.submitLoginCode(auth.steamid, auth.clientId,
                this.accountData.confirmation!.confirmationType, this.steamToken, (err) => {
                  if (err) {
                    this.getUIContext().getPromptAction().showToast({
                      message: `Steam 登录失败：${err.message}`
                    })
                    return
                  }
                  this.getUIContext().getPromptAction().showToast({
                    message: `Steam 登录成功，正在获取认证信息...`
                  })
                  this.loggingIn = true
                  this.steamClient.pollTokens(auth.clientId, auth.requestId, (err, tokens) => {
                    this.loggingIn = false
                    if (err) {
                      this.getUIContext().getPromptAction().showToast({
                        message: `Steam 认证信息获取失败：${err.message}`
                      })
                      return
                    }
                    this.accountData.tokens = tokens
                    this.pageStack.pushPathByName("SteamLink", this.accountData)
                  })
                })
            } else {
              this.getUIContext().getPromptAction().showToast({
                message: `正在获取 Steam 认证信息...`
              })
              this.loggingIn = true
              this.steamClient.pollTokens(auth.clientId, auth.requestId, (err, tokens) => {
                this.loggingIn = false
                if (err) {
                  this.getUIContext().getPromptAction().showToast({
                    message: `Steam 认证信息获取失败：${err.message}`
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
    .title("添加 Steam 令牌")
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
          Text(`${this.accountData.tokens!.accountName} 登录成功，请点击【添加】按钮将 Authenticator 添加到 Steam`)
            .fontWeight(FontWeight.Bold)
            .margin(10)
        }
        .alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })

        Button("添加")
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
              (err, auth) => {
                this.linking = false
                if (err) {
                  if (err.message == "DuplicateRequest") {
                    this.pageStack.pushPathByName("SteamTransferAuthenticator", this.accountData)
                    return
                  }
                  this.getUIContext().getPromptAction().showToast({
                    message: `添加 Authenticator 失败：${err.message}`
                  })
                  return
                }

                this.accountData.authenticator = auth
                this.pageStack.pushPathByName("SteamConfirmLink", this.accountData)
              })
          })
      }
    }
    .title("添加 Steam 令牌")
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
            Text("正在向 Steam 添加身份验证器，请输入短信验证码")
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
            Text("正在向 Steam 添加身份验证器，验证码已通过邮件发送，请输入验证码")
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

        Button("完成添加")
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
                message: `请先输入验证码`
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
                    message: `添加身份验证器失败：${err.message}`
                  })
                  return
                }
                if (resp!.wantMore) {
                  this.getUIContext().getPromptAction().showToast({
                    message: `动态生成的令牌和 Steam 不一致，请再点击一次【完成添加】`
                  })
                  return
                }

                this.accountData.finalizeAuthenticator = resp
                let authURI = new uri.URI(authenticator.uri)
                let authData: AuthData = {
                  id: 0,
                  alias: "Steam",
                  issuer: "Steam",
                  account: tokens.accountName,
                  secret: authURI.getQueryValue("secret"),
                  digits: 5,
                  password: token,
                  external: "",
                }

                let helper = new util.Base64Helper()
                let steamAuthData: SteamAuthData = {
                  accountName: authenticator.accountName,
                  steamID: auth.steamid.toString(),
                  serialNumber: authenticator.serialNumber.toString(),
                  revocationCode: authenticator.revocationCode,
                  shardSecret: helper.encodeToStringSync(authenticator.sharedSecret),
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
                  message: `添加成功`
                })
                this.pageStack.clear()
              })
          })
      }
    }
    .title("添加 Steam 令牌")
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
          Text("已经添加过其他身份验证器，是否迁移？")
            .fontWeight(FontWeight.Bold)
            .margin(10)

          Text("特别说明：请确保 Steam 账户已经绑定了手机号码，否则将无法进行迁移")
            .fontWeight(FontWeight.Bold)
            .margin(10)
        }
        .alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })

        Button("迁移")
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
                  message: `迁移身份验证器失败：${err.message}`
                })
                return
              }
              this.pageStack.pushPathByName("SteamConfirmTransferAuthenticator", this.accountData)
            })
          })
      }
    }
    .title("添加 Steam 令牌")
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
          Text("正在迁移 Steam 身份验证器，请输入短信验证码")
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

        Button("完成迁移")
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
                    message: `迁移身份验证器失败：${err?.message}`
                  })
                  return
                }
                let replacementToken = account!.replacementToken!
                let authURI = new uri.URI(replacementToken.uri!)
                let authData: AuthData = {
                  id: 0,
                  alias: "Steam",
                  issuer: "Steam",
                  account: tokens.accountName,
                  secret: authURI.getQueryValue("secret"),
                  digits: 5,
                  password: "",
                  external: "",
                }

                let helper = new util.Base64Helper()
                let steamAuthData: SteamAuthData = {
                  accountName: replacementToken.accountName!,
                  steamID: auth.steamid.toString(),
                  serialNumber: replacementToken.serialNumber!.toString(),
                  revocationCode: replacementToken.revocationCode!,
                  shardSecret: helper.encodeToStringSync(replacementToken.sharedSecret),
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
                  message: `添加成功`
                })
                this.pageStack.clear()
              })
          })
      }
    }
    .title("添加 Steam 令牌")
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
            Text("更新 Steam 认证信息过期时间需要重新登陆")
              .copyOption(CopyOptions.LocalDevice)
              .fontSize(14)
          }
          .margin({ bottom: 10 })

          Row() {
            Text("请输入 Steam 账户名称和密码")
              .fontWeight(FontWeight.Bold)
          }
          .margin({ bottom: 10 })

          Row() {
            Text("账户名称")
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
            Text("密码")
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

        Button("登录")
          .enabled((!this.loggingIn) && (this.steamAccount != "") && (this.steamPassword != ""))
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
          .onClick(() => {
            this.getUIContext().getPromptAction().showToast({
              message: `开始登录 Steam...`
            })
            this.loggingIn = true
            this.steamClient.login(this.steamAccount, this.steamPassword, (err, auth) => {
              this.loggingIn = false
              if (err) {
                this.getUIContext().getPromptAction().showToast({
                  message: `Steam 登录失败：${err.message}`
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
                  message: `Steam 登录成功，但确认类型错误：${confirmation}`
                })
                return
              }

              this.getUIContext().getPromptAction().showToast({
                message: `Steam 登录成功，正在提交令牌...`
              })

              this.loggingIn = true
              this.steamClient.submitLoginCode(auth!.steamid, auth!.clientId,
                confirmation, this.authData.password, (err) => {
                  this.loggingIn = false
                  if (err) {
                    this.getUIContext().getPromptAction().showToast({
                      message: `Steam 令牌提交失败：${err.message}`
                    })
                    return
                  }
                  this.getUIContext().getPromptAction().showToast({
                    message: `Steam 令牌提交成功，正在获取认证信息...`
                  })
                  this.loggingIn = true
                  this.steamClient.pollTokens(auth!.clientId, auth!.requestId, (err, tokens) => {
                    this.loggingIn = false
                    if (err) {
                      this.getUIContext().getPromptAction().showToast({
                        message: `Steam 认证信息获取失败：${err.message}`
                      })
                      return
                    }
                    this.steamAuthData.refreshToken = tokens!.refreshToken
                    this.steamAuthData.accessToken = tokens!.accessToken
                    this.authData.external = JSON.stringify(this.steamAuthData)
                    this.authDataStore.saveAuthItem(this.authData.id)
                    this.getUIContext().getPromptAction().showToast({
                      message: `更新 Steam 认证信息成功`
                    })
                    this.pageStack.clear()
                  })
                })
            })
          })
      }
    }
    .title("更新 Steam 认证信息过期时间")
  }
}