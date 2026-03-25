import {
  AuthData,
  AuthDataStore,
  copyTextToClipboard,
  DefaultToastDuration,
  parseSteamExternalAuthData,
  PromptParams,
  SteamAuthData
} from './Base';
import { SymbolGlyphModifier } from '@kit.ArkUI';
import { JSON, util } from '@kit.ArkTS';
import { intl } from '@kit.LocalizationKit';
import { scanBarcode, scanCore } from '@kit.ScanKit';
import { SteamClient } from './Steam';
import { TokenIcon } from '../components/TokenIcon';
import { buildTokenIconPicker, TokenIconPickerData } from '../components/TokenIconPicker';
import { getLocalizedString } from '../entryability/EntryAbility';
import { systemDateTime } from '@kit.BasicServicesKit';


class SteamParams {
  public maFile: string = ""
  public detail?: Detail

  constructor(detail: Detail) {
    this.detail = detail
  }
}

@Builder
function buildSteamInput(params: PromptParams<SteamParams>) {
  Row() {
    Column() {
      Text($r('app.string.detail_steam_input_title'))
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
      Text($r('app.string.detail_steam_input_desc'))
        .fontSize(12)
        .fontWeight(FontWeight.Normal)
        .margin({ bottom: 20 })
      TextArea({ text: "" })
        .margin({ bottom: 20 })
        .height(300)
        .onChange((value) => {
          params.data.maFile = value
        })
      Row() {
        Button($r('app.string.common_cancel')).onClick(() => {
          params.close()
        })
        Button($r('app.string.common_confirm')).onClick(() => {
          try {
            let data = new SteamAuthData()
            let authdata = JSON.parse(params.data.maFile, (key: string, val: Object | undefined | null) => {
              if (key == "steam_id") {
                return (val as bigint).toString()
              }
              return val as object
            }, { bigIntMode: JSON.BigIntMode.ALWAYS_PARSE_AS_BIGINT, }) as Record<string, Object>
            data.accountName = authdata["account_name"] as string
            data.steamID = authdata["steam_id"] as string
            data.serialNumber = authdata["serial_number"] as string
            data.revocationCode = authdata["revocation_code"] as string
            data.sharedSecret = authdata["shared_secret"] as string
            data.tokenGID = authdata["token_gid"] as string
            data.identitySecret = authdata["identity_secret"] as string
            data.uri = authdata["uri"] as string
            data.deviceID = authdata["device_id"] as string
            data.secret1 = authdata["secret_1"] as string
            let tokens = authdata["tokens"] as Record<string, string>
            data.accessToken = tokens["access_token"]
            data.refreshToken = tokens["refresh_token"]
            Object.entries(data).forEach((pair: [string, string]) => {
              if (pair[1] == undefined) {
                throw new Error(getLocalizedString($r('app.string.base_missing_format'), pair[0]))
              }
            })

            let detail = params.data.detail!
            detail.item.external = JSON.stringify(data)
            detail.item.account = data.accountName
            params.close()
            detail.authDataStore.saveAuthItem(detail.item.uuid)
            params.data.detail?.loadSteamAuthData()
          } catch (e) {
            params.data.detail?.getUIContext().getPromptAction().showToast({
              duration: DefaultToastDuration,
              message: $r('app.string.detail_steam_input_error_format', `${e.toString()}`)
            })
            return
          }
        })
      }.width("50%")
      .justifyContent(FlexAlign.SpaceEvenly)
    }.backgroundColor($r("app.color.mfa_dialog_background"))
    .padding(10)
    .border({ radius: 5 })
  }
  .alignItems(VerticalAlign.Center)
  .width("90%")
}

@Component
export struct Detail {
  @State item: AuthData = new AuthData()
  @State progress: number = 0;
  @State steamAuthData: SteamAuthData = new SteamAuthData()
  @State steamExpirationTime: Date = new Date()
  @StorageProp("enhanceNetwork") enhanceNetwork: boolean = false
  private steamClient = new SteamClient(this.enhanceNetwork)
  @Consume("authDataStore") authDataStore: AuthDataStore
  @Consume("safe") safe: boolean;
  @Consume("pageStack") pageStack: NavPathStack;
  private timer?: number;
  private lastPasswordTimeStep: number = -1;
  private lastExternalInfo: string = "";

  aboutToAppear(): void {
    this.loadSteamAuthData()
    const now = systemDateTime.getTime(false) / 1000
    this.progress = now % 30
    this.lastPasswordTimeStep = Math.floor(now / 30)
    this.timer = setInterval(() => {
      const current = systemDateTime.getTime(false) / 1000
      this.progress = current % 30
      const currentTimeStep = Math.floor(current / 30)
      if (currentTimeStep != this.lastPasswordTimeStep) {
        this.lastPasswordTimeStep = currentTimeStep
        this.authDataStore.refreshAllPassword()
        const index = this.authDataStore.findAuthItem(this.item.uuid)
        if (index >= 0) {
          this.item = this.authDataStore.items[index]
        }
      }
    }, 1000)
  }

  aboutToDisappear(): void {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  loadSteamAuthData(): void {
    if (this.item.issuer.toLowerCase() != "steam" || this.item.external == "") {
      return
    }
    if (this.item.external == this.lastExternalInfo) {
      return
    }
    try {
      let authdata = JSON.parse(this.item.external) as Record<string, Object>
      this.steamAuthData = parseSteamExternalAuthData(authdata)

      let parts = this.steamAuthData.refreshToken.split(".")
      let base64 = new util.Base64Helper()
      let data = base64.decodeSync(parts[1], util.Type.BASIC_URL_SAFE)
      let decoder = new util.TextDecoder()
      let jwt = decoder.decodeToString(data)
      let obj = JSON.parse(jwt) as Record<string, Object>
      let unixTimestamp = obj["exp"] as number
      this.steamExpirationTime = new Date(unixTimestamp * 1000)
      this.lastExternalInfo = this.item.external
    } catch (e) {
      this.getUIContext().getPromptAction().showToast({
        duration: DefaultToastDuration,
        message: $r('app.string.detail_steam_invalid_error_format', `${e.toString()}`, this.item.external)
      })
    }
  }

  onSteamButtonPressed() {
    let params = new PromptParams(this.getUIContext(), wrapBuilder(buildSteamInput), new SteamParams(this))
    params.open()
  }

  onSteamRefreshButtonPressed() {
    let params: Record<string, Object> =
      { "baseAuthData": this.item, "authData": this.steamAuthData, "client": this.steamClient }
    this.pageStack.pushPathByName("SteamRefreshToken", params)
  }

  onSteamScanButtonPressed() {
    let options: scanBarcode.ScanOptions =
      { scanTypes: [scanCore.ScanType.ALL], enableMultiMode: true, enableAlbum: true };
    try {
      scanBarcode.startScanForResult(getContext(this), options).then((result: scanBarcode.ScanResult) => {
        this.steamClient.approveQRLogin(this.steamAuthData.steamID, this.steamAuthData.refreshToken,
          this.steamAuthData.sharedSecret, false, result.originalValue,
          (err) => {
            if (err) {
              this.getUIContext().getPromptAction().showToast({
                duration: DefaultToastDuration,
                message: $r('app.string.detail_steam_login_failed_format', err.message)
              })
              return
            }
            this.getUIContext().getPromptAction().showToast({
              duration: DefaultToastDuration,
              message: $r('app.string.detail_steam_login_success')
            })
          })
        this.getUIContext().getPromptAction().showToast({
          duration: DefaultToastDuration,
          message: $r('app.string.detail_steam_login_start')
        })
      })
    } catch (error) {
      this.getUIContext().getPromptAction().showToast({
        duration: DefaultToastDuration,
        message: $r('app.string.common_scan_failed_format', `${error}`)
      })
    }
  }

  onSteamQueryButtonPressed() {
    let params: Record<string, Object> = { "authData": this.steamAuthData, "client": this.steamClient }
    this.pageStack.pushPathByName("SteamConfirmationList", params)
  }

  showSafeModeToast(): void {
    this.getUIContext().getPromptAction().showToast({
      duration: DefaultToastDuration,
      message: $r('app.string.common_safe_mode_unlock_first')
    })
  }

  copyToken(password: string): void {
    copyTextToClipboard(password)
    this.getUIContext().getPromptAction().showToast({
      duration: DefaultToastDuration,
      message: $r('app.string.common_token_copied')
    })
  }

  openTokenIconPicker() {
    const data = new TokenIconPickerData()
    data.issuer = this.item.issuer
    data.currentIconPath = this.item.tokenIconPath
    let params: PromptParams<TokenIconPickerData>
    data.onConfirm = (path: string): void => {
      this.item.tokenIconPath = path
      this.authDataStore.updateTokenIconPath(this.item.uuid, path)
    }
    data.onClose = (): void => {
      params.close()
    }
    params = new PromptParams(this.getUIContext(), wrapBuilder(buildTokenIconPicker), data)
    params.open()
  }

  @Builder
  buildExternalView() {
    if (this.item.issuer.toLowerCase() == "steam") {
      if (this.item.external != undefined && this.item.external.length > 0) {
        Row() {
          Column() {
            Text($r('app.string.detail_steam_section_title'))
            Text($r('app.string.detail_steam_section_desc'))
              .padding({ left: 30, right: 30 })
              .fontSize(12)
          }
        }

        Row() {
          Text($r('app.string.detail_steam_account'))
            .width("30%")
            .textAlign(TextAlign.Start)
            .margin(5)
          Text(this.steamAuthData.accountName)
            .width("60%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Text($r('app.string.detail_steam_id'))
            .width("30%")
            .textAlign(TextAlign.Start)
          Text(this.steamAuthData.steamID)
            .width("60%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Text($r('app.string.detail_device_id'))
            .width("30%")
            .textAlign(TextAlign.Start)
          Text(this.steamAuthData.deviceID.substring(this.steamAuthData.deviceID.indexOf(":") + 1))
            .width("60%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Text($r('app.string.detail_expire_time'))
            .width("30%")
            .textAlign(TextAlign.Start)
          Text(this.steamExpirationTime.toLocaleString((new intl.Locale()).toString(), { hour12: false }))
            .width("60%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Button($r('app.string.detail_reset'))
            .onClick(() => this.onSteamButtonPressed())
            .width("40%")
            .margin(5)
          Button($r('app.string.detail_update_expire'))
            .onClick(() => this.onSteamRefreshButtonPressed())
            .width("40%")
            .margin(5)
        }
      } else {
        Button($r('app.string.detail_setup_steam'))
          .onClick(() => this.onSteamButtonPressed())
      }
    }
  }

  build() {
    NavDestination() {
      Column() {
        Progress({ value: this.progress, total: 29, type: ProgressType.Linear })
          .width("100%")
          .height(5)

        Row() {
          Stack() {
            TokenIcon({ issuer: this.item.issuer, iconPath: this.item.tokenIconPath })
          }
          .gesture(
            LongPressGesture()
              .onAction(() => {
                this.openTokenIconPicker()
              })
          )

          Text(this.safe ? this.item.password : "******")
            .fontSize(40)
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Center)
            .copyOption(CopyOptions.LocalDevice)
            .gesture(
              LongPressGesture()
                .onAction(() => {
                  if (!this.safe) {
                    this.showSafeModeToast()
                    return
                  }
                  this.copyToken(this.item.password)
                })
            )
        }
        .height(60)
        .alignItems(VerticalAlign.Center)
        .margin(20)

        Row() {
          Text($r('app.string.detail_alias'))
            .width("30%")
            .textAlign(TextAlign.Start)
          TextInput({ text: this.item.alias })
            .width("60%")
            .textAlign(TextAlign.End)
            .type(InputType.Normal)
            .maxLength(20)
            .onChange((str) => {
              if (str != this.item.alias) {
                this.item.alias = str;
                this.authDataStore.saveAuthItem(this.item.uuid)
              }
            })
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Text($r('app.string.detail_account'))
            .width("30%")
            .textAlign(TextAlign.Start)
          Text(this.item.account)
            .width("60%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Text($r('app.string.detail_issuer'))
            .width("30%")
            .textAlign(TextAlign.Start)
          Text(this.item.issuer)
            .width("60%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Text($r('app.string.detail_digits'))
            .width("30%")
            .textAlign(TextAlign.Start)
          Text(this.item.digits.toString())
            .width("60%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        this.buildExternalView()
      }
    }
    .title(this.item.alias)
    .menus(this.steamExpirationTime.getTime() > new Date().getTime() ? [
      {
        value: "scan",
        symbolIcon: new SymbolGlyphModifier($r('sys.symbol.line_viewfinder')),
        action: () => this.onSteamScanButtonPressed()
      },
      {
        value: "confirm",
        symbolIcon: new SymbolGlyphModifier($r('sys.symbol.list_checkmask')),
        action: () => this.onSteamQueryButtonPressed()
      }
    ] : [])
  }
}
