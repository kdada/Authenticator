import { AuthData, AuthDataStore, PromptParams, SteamAuthData } from "./Base"
import { SymbolGlyphModifier } from "@kit.ArkUI";
import { JSON, util } from "@kit.ArkTS";
import { intl } from "@kit.LocalizationKit";
import { scanBarcode, scanCore } from "@kit.ScanKit";
import { SteamClient } from "./Steam";

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
      Text("输入 Steam 认证信息")
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
      Text("认证通过后可以使用 Steam 扫码登陆和交易确认功能")
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
        Button('取消').onClick(() => {
          params.close()
        })
        Button('确认').onClick(() => {
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
            data.shardSecret = authdata["shared_secret"] as string
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
                throw new Error(`缺少 ${pair[0]}`)
              }
            })

            let detail = params.data.detail!
            detail.item.external = JSON.stringify(data)
            detail.item.account = data.accountName
            params.close()
            detail.authDataStore.saveAuthItem(detail.item.id)
            params.data.detail?.loadSteamAuthData()

          } catch (e) {
            params.data.detail?.getUIContext().getPromptAction().showToast({
              message: `认证信息格式错误，请确保内容来自 maFile 文件，${e.toString()}`
            })
            return
          }
        })
      }.width("50%")
      .justifyContent(FlexAlign.SpaceEvenly)
    }.backgroundColor($r("app.color.2fa_dialog_background"))
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
  private steamClient = new SteamClient()
  @Consume("authDataStore") authDataStore: AuthDataStore
  @Consume("safe") safe: boolean;
  @Consume("pageStack") pageStack: NavPathStack;
  private timer?: number;

  aboutToAppear(): void {
    this.loadSteamAuthData()
    this.timer = setInterval(() => {
      let temp = this.item
      this.item = new AuthData()
      this.item = temp
    }, 500)
  }

  aboutToDisappear(): void {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  loadSteamAuthData(): void {
    if (this.item.issuer != "Steam" || this.item.external == "") {
      return
    }
    try {
      this.steamAuthData = JSON.parse(this.item.external) as SteamAuthData
      let parts = this.steamAuthData.refreshToken.split(".")
      let base64 = new util.Base64Helper()
      let data = base64.decodeSync(parts[1], util.Type.BASIC_URL_SAFE)
      let decoder = new util.TextDecoder()
      let jwt = decoder.decodeToString(data)
      let obj = JSON.parse(jwt) as Record<string, Object>
      let unixTimestamp = obj["exp"] as number
      this.steamExpirationTime = new Date(unixTimestamp * 1000)
    } catch (e) {
      this.getUIContext().getPromptAction().showToast({
        message: `认证信息格式错误，${e.toString()}, 内容：${this.item.external}`
      })
    }
  }

  onSteamButtonPressed() {
    let params = new PromptParams(this.getUIContext(), wrapBuilder(buildSteamInput), new SteamParams(this))
    params.open()
  }

  onSteamScanButtonPressed() {
    let options: scanBarcode.ScanOptions =
      { scanTypes: [scanCore.ScanType.ALL], enableMultiMode: true, enableAlbum: true };
    try {
      scanBarcode.startScanForResult(getContext(this), options).then((result: scanBarcode.ScanResult) => {
        this.steamClient.approveQRLogin(this.steamAuthData.steamID, this.steamAuthData.refreshToken,
          this.steamAuthData.shardSecret, false, result.originalValue,
          (err) => {
            if (err) {
              this.getUIContext().getPromptAction().showToast({
                message: `Steam 登录失败：${err}`
              })
              return
            }
            this.getUIContext().getPromptAction().showToast({
              message: "Steam 登录成功"
            })
          })
        this.getUIContext().getPromptAction().showToast({
          message: "开始登录 Steam..."
        })
      })
    } catch (error) {
      this.getUIContext().getPromptAction().showToast({
        message: `扫码失败：${error}`
      })
    }
  }

  onSteamQueryButtonPressed() {
    let params: Record<string, Object> = { "authData": this.steamAuthData, "client": this.steamClient }
    this.pageStack.pushPathByName("SteamConfirmationList", params)
  }

  @Builder
  buildExternalView() {
    if (this.item.issuer == "Steam") {
      Button("设置 Steam 认证信息")
        .onClick(() => this.onSteamButtonPressed())
      if (this.item.external != undefined && this.item.external.length > 0) {
        Row() {
          Text("Steam 账号")
            .width("30%")
            .textAlign(TextAlign.Start)
          Text(this.steamAuthData.accountName)
            .width("60%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Text("Steam ID")
            .width("30%")
            .textAlign(TextAlign.Start)
          Text(this.steamAuthData.steamID)
            .width("60%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Text("设备 ID")
            .width("30%")
            .textAlign(TextAlign.Start)
          Text(this.steamAuthData.deviceID.substring(this.steamAuthData.deviceID.indexOf(":") + 1))
            .width("60%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Text("过期时间")
            .width("30%")
            .textAlign(TextAlign.Start)
          Text(this.steamExpirationTime.toLocaleString((new intl.Locale()).toString(), { hour12: false }))
            .width("60%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)
      }
    }
  }

  build() {
    NavDestination() {
      Column() {
        Row() {
          Text(this.safe ? this.item.password : "******")
            .fontSize(40)
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Center)
            .copyOption(CopyOptions.LocalDevice)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)
        .margin(20)

        Row() {
          Text("别名")
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
                this.authDataStore.saveAuthItem(this.item.id)
              }
            })
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Text("账号")
            .width("30%")
            .textAlign(TextAlign.Start)
          Text(this.item.account)
            .width("60%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Text("发行商")
            .width("30%")
            .textAlign(TextAlign.Start)
          Text(this.item.issuer)
            .width("60%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Text("位数")
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
