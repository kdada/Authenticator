import { SymbolGlyphModifier } from "@ohos.arkui.modifier"
import { scanCore, scanBarcode } from '@kit.ScanKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError, systemDateTime } from '@kit.BasicServicesKit';
import { PromptActionClass } from './PromptActionClass ';
import { ComponentContent } from '@kit.ArkUI';
import { buffer, JSON, uri } from '@kit.ArkTS';
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { distributedKVStore } from '@kit.ArkData';
import { kvManager } from '../entryability/EntryAbility';
import { Setting } from './Setting';
import { userAuth } from '@kit.UserAuthenticationKit';
import { Detail } from './Detail';
import { AuthData } from './Base';


class Params {
  value: string = ""
  enabled: boolean = true
  index: Index | null = null

  constructor(index: Index) {
    this.index = index
  }
}

@Builder
function buildAuthInput(params: Params) {
  Row() {
    Column() {
      Text("输入 2FA URI")
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
        .margin({ bottom: 20 })
      TextArea({ text: params.value, placeholder: "otpauth://totp/xxx?secret=yyy" })
        .margin({ bottom: 20 })
        .onChange((value) => {
          params.value = value
        })
      Row() {
        Button('取消').onClick(() => {
          PromptActionClass.closeDialog()
        })
        Button('添加').onClick(() => {
          if (!params.enabled) {
            return
          }
          params.enabled = false
          PromptActionClass.closeDialog()
          params.index?.addAuthItem(params.value)
        })
      }.width("50%")
      .justifyContent(FlexAlign.SpaceEvenly)
    }.backgroundColor($r("app.color.2fa_dialog_background"))
    .padding(10)
    .border({ radius: 5 })
  }
  .alignItems(VerticalAlign.Center)
}

@Entry
@Component
struct Index {
  @State items: AuthData[] = [];
  @State progress: number = 0;
  @Provide("NavPathStack") pageStack: NavPathStack = new NavPathStack();
  @StorageProp("enableSafeMode") enableSafeMode: boolean = false
  @State safe: boolean = false;
  private next: number = 0;
  private ctx: UIContext = this.getUIContext();
  // Example: otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example
  private params: Params = new Params(this);
  private contentNode: ComponentContent<Object> =
    new ComponentContent(this.ctx, wrapBuilder(buildAuthInput), this.params);
  @Provide("kvStore") kvStore?: distributedKVStore.DeviceKVStore = undefined;
  private timer?: number;
  private scroller: Scroller = new Scroller();

  aboutToAppear(): void {
    PromptActionClass.setContext(this.ctx);
    PromptActionClass.setContentNode(this.contentNode);
    PromptActionClass.setOptions(Object({ alignment: DialogAlignment.Center, offset: Object({ dx: 0, dy: 50 }) }));
    kvManager.getKVStore("authdata", {
      createIfMissing: true,
      securityLevel: distributedKVStore.SecurityLevel.S2,
    }, (err: Error, store: distributedKVStore.DeviceKVStore) => {
      if (err) {
        hilog.error(0x0001, '[KV Sample]',
          `Failed to get KVStore. Code: ${err.name}, message: ${err.message}`);
        return;
      }
      this.kvStore = store
      this.kvStore.getEntries("/data/auth/", (err, data) => {
        for (let i = 0; i < data.length; i++) {
          let element = data[i];
          let authdata = JSON.parse(element.value.value as string) as AuthData
          authdata.password = this.generatePassword(authdata)
          this.items.push(authdata)
          if (authdata.id >= this.next) {
            this.next = authdata.id + 1
          }
        }
        this.items.sort((a, b) => a.id - b.id)
      })
    })
    this.progress = systemDateTime.getTime(false) / 1000 % 30
    this.timer = setInterval(() => {
      this.progress = systemDateTime.getTime(false) / 1000 % 30
      for (let i = 0; i < this.items.length; i++) {
        let item = this.items[i]
        item.password = this.generatePassword(item)
      }
      let temp = this.items
      this.items = []
      this.items = temp
    }, 1000)
  }

  aboutToDisappear(): void {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  onPageShow(): void {
    if (!this.enableSafeMode) {
      this.safe = true
      return
    }
    // 设置认证参数
    let reuseUnlockResult: userAuth.ReuseUnlockResult = {
      reuseMode: userAuth.ReuseMode.AUTH_TYPE_RELEVANT,
      reuseDuration: userAuth.MAX_ALLOWABLE_REUSE_DURATION,
    }
    try {
      const rand = cryptoFramework.createRandom();
      const len: number = 16;
      const randData: Uint8Array = rand?.generateRandomSync(len)?.data;
      const authParam: userAuth.AuthParam = {
        challenge: randData,
        authType: [userAuth.UserAuthType.FACE, userAuth.UserAuthType.FINGERPRINT, userAuth.UserAuthType.PIN],
        authTrustLevel: userAuth.AuthTrustLevel.ATL3,
        reuseUnlockResult: reuseUnlockResult,
      };
      // 配置认证界面
      const widgetParam: userAuth.WidgetParam = {
        title: '请进行身份认证',
      };
      // 获取认证对象
      const userAuthInstance = userAuth.getUserAuthInstance(authParam, widgetParam);
      // 订阅认证结果
      let self = this
      userAuthInstance.on('result', {
        onResult(result) {
          // 可在认证结束或其他业务需要场景，取消订阅认证结果
          userAuthInstance.off('result');
          if (result.result == userAuth.UserAuthResultCode.SUCCESS) {
            self.safe = true
          } else {
            hilog.error(0x0001, '[Auth Sample]', `Failed to auth. Result: ${result.result}`);
          }
        }
      });
      userAuthInstance.start();
    } catch (error) {
      hilog.error(0x0001, '[Auth Sample]',
        `Failed to auth. Code: ${error.code}, message: ${error.message}`);
    }
  }

  onPageHide(): void {
    this.safe = false
  }

  @Builder
  PagesMap(name: string, param: object) {
    if (name == 'Setting') {
      Setting()
    }
    if (name == 'Detail') {
      Detail({ item: param as AuthData })
    }
  }

  @Builder
  Logo(issuer: string) {
    if (issuer == "Google") {
      Image($rawfile("Google.png"))
        .width(40)
        .padding(5)
        .margin(10)
        .backgroundColor($r("app.color.vendor_background_color"))
        .borderRadius(20)
    } else if (issuer == "Microsoft") {
      Image($rawfile("Microsoft.png"))
        .width(40)
        .padding(5)
        .margin(10)
        .backgroundColor($r("app.color.vendor_background_color"))
        .borderRadius(20)
    } else if (issuer == "GitHub") {
      Image($rawfile("Github.png"))
        .width(40)
        .padding(5)
        .margin(10)
        .backgroundColor($r("app.color.vendor_background_color"))
        .borderRadius(20)
    } else if (issuer == "Gitlab") {
      Image($rawfile("Gitlab.png"))
        .width(40)
        .padding(5)
        .margin(10)
        .backgroundColor($r("app.color.vendor_background_color"))
        .borderRadius(20)
    } else if (issuer == "Steam") {
      Image($rawfile("Steam.png"))
        .width(40)
        .padding(5)
        .margin(10)
        .backgroundColor($r("app.color.vendor_background_color"))
        .borderRadius(20)
    } else {
      SymbolGlyph($r("sys.symbol.person"))
        .fontSize(30)
        .padding(5)
        .margin(10)
        .fontColor([$r("app.color.vendor_icon_color")])
        .backgroundColor($r("app.color.vendor_background_color"))
        .borderRadius(20)
    }
  }

  build() {
    Column() {
      Navigation(this.pageStack) {
        Progress({ value: this.progress, total: 29, type: ProgressType.Linear })
          .width("100%").height(5)
        List() {
          ForEach(this.items, (item: AuthData) => {
            ListItem() {
              Row() {
                this.Logo(item.issuer)
                Column() {
                  Text(item.alias)
                    .fontSize(20)
                    .fontWeight(FontWeight.Bold)
                  Text(item.account)
                    .fontSize(10)
                }
                .alignItems(HorizontalAlign.Start)
                .width("55%")

                Text(this.safe ? item.password : "******")
                  .fontSize(20)
                  .fontWeight(FontWeight.Bold)
              }
              .width("100%")
              .onClick(() => this.pageStack.pushPathByName("Detail", item))
            }
            .swipeAction({ end: this.deleteButton(item.id) })
            .borderColor($r("app.color.item_separator_color"))
            .borderWidth({ bottom: 1 })
          }, (item: AuthData, index: number) => item.id.toString() + "-" + item.password)
        }
      }
      .navDestination(this.PagesMap)
      .menus([
        {
          value: "add",
          symbolIcon: new SymbolGlyphModifier($r('sys.symbol.plus')),
          action: () => this.onAddButtonPressed()
        },
        {
          value: "scan",
          symbolIcon: new SymbolGlyphModifier($r('sys.symbol.line_viewfinder')),
          action: () => this.onScanButtonPressed()
        },
        {
          value: "setting",
          symbolIcon: new SymbolGlyphModifier($r('sys.symbol.gearshape')),
          action: () => this.pageStack.pushPathByName("Setting", undefined)
        },
      ])
      .title($r("app.string.EntryAbility_label"))
      .titleMode(NavigationTitleMode.Mini)
      .hideBackButton(true)
      .mode(NavigationMode.Auto)
    }
  }

  @Builder
  deleteButton(id: number) {
    Button() {
      SymbolGlyph($r("sys.symbol.trash"))
        .fontSize(35)
        .fontColor([$r("app.color.item_delete_icon_color")])
    }
    .backgroundColor($r("app.color.item_delete_background_color"))
    .type(ButtonType.Normal)
    .width(60)
    .height("100%")
    .onClick((event) => {
      let item: AuthData | undefined = undefined
      let index = 0
      for (let i = 0; i < this.items.length; i++) {
        if (id == this.items[i].id) {
          item = this.items[i]
          index = i
          break
        }
      }
      if (!item) {
        return
      }
      this.kvStore?.delete(`/data/auth/${item.id}`)
      this.items.splice(index, 1)
    })
  }

  base32Decode(secret: string): Uint8Array {
    let base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'
    let base32Lookup: Record<string, number> = {}
    for (let i = 0; i < base32Chars.length; i++) {
      base32Lookup[base32Chars[i]] = i
    }
    let bits: string[] = []
    for (let i = 0; i < secret.length; i++) {
      let value = base32Lookup[secret[i].toUpperCase()]
      bits.push(value.toString(2).padStart(5, '0'))
    }
    let bitsString = bits.join('')
    let bytes: Uint8Array = new Uint8Array(bitsString.length / 8)
    for (let i = 0; i < bits.length; i++) {
      bytes[i] = parseInt(bitsString.slice(i * 8, i * 8 + 8), 2)
    }
    return bytes
  }

  numToUint8Array(num: number): Uint8Array {
    let arr = new Uint8Array(8);
    for (let i = 7; i >= 0; i--) {
      arr[i] = num & 0xff;
      num = num >> 8;
    }
    return arr;
  }

  generatePassword(authdata: AuthData): string {
    let keyData: Uint8Array = this.base32Decode(authdata.secret)
    let seconds = systemDateTime.getTime(false) / 1000
    let timeStep = Math.floor(seconds / 30)
    let timeData: Uint8Array = this.numToUint8Array(timeStep)

    let hmac = cryptoFramework.createMac("SHA1")
    let key = cryptoFramework.createSymKeyGenerator("HMAC").convertKeySync({ data: keyData })
    hmac.initSync(key)
    hmac.updateSync({ data: timeData })
    let result = hmac.doFinalSync()
    let offset = result.data[result.data.length - 1] & 0x0f
    let buf = buffer.alloc(4)
    buf[0] = result.data[offset] & 0x7f
    buf[1] = result.data[offset+1] & 0xff
    buf[2] = result.data[offset+2] & 0xff
    buf[3] = result.data[offset+3] & 0xff
    let value = buf.readUInt32BE()
    if (authdata.digits != 5) {
      // TOTP 标准算法
      return (value % Math.pow(10, authdata.digits)).toString().padStart(authdata.digits, "0")
    }
    // Steam 算法
    // [50, 51, 52, 53, 54, 55, 56, 57, 66, 67, 68, 70, 71, 72, 74, 75, 77, 78, 80, 81, 82, 84, 86, 87, 88, 89]
    const codes = ["2", "3", "4", "5", "6", "7", "8", "9",
      "B", "C", "D", "F", "G", "H", "J", "K", "M", "N", "P", "Q", "R", "T", "V", "W", "X", "Y"]
    let steamResult = ""
    for (let i = 0; i < 5; i++) {
      const element = codes[value%codes.length];
      steamResult += element
      value = Math.floor(value / codes.length)
    }
    return steamResult
  }

  addAuthItem(data: string) {
    hilog.info(0x0001, '[Auth Sample]', `auth value is ${data}`);

    try {
      let authURI = new uri.URI(data.trim())
      if (authURI.scheme != "otpauth" || authURI.host != "totp") {
        throw new Error("无效的协议");
      }
      let secret = authURI.getQueryValue("secret")
      let issuer = authURI.getQueryValue("issuer")
      let digits = authURI.getQueryValue("digits")
      let path = authURI.path
      if (path.startsWith("/")) {
        path = path.substring(1)
      }
      let colon = path.indexOf(":")
      let account = path.substring(colon + 1)
      if (colon > 0 && issuer == null) {
        issuer = path.substring(0, colon)
      }
      let authdata: AuthData = {
        id: this.next,
        alias: issuer ?? account,
        issuer: issuer ?? "",
        account: account,
        secret: secret,
        digits: digits == "8" ? 8 : digits == "7" ? 7 : 6,
        password: "",
        external: "",
      }
      if (issuer == "Steam") {
        authdata.digits = 5
      }
      authdata.password = this.generatePassword(authdata)
      this.next++
      if (this.kvStore) {
        let authString = JSON.stringify(authdata)
        this.kvStore.put(`/data/auth/${authdata.id}`, authString)
      }
      this.items.push(authdata)
    } catch (error) {
      AlertDialog.show({
        title: '无效的 2FA URI',
        subtitle: '',
        message: `${data}`,
        autoCancel: true,
        alignment: DialogAlignment.Center,
        gridCount: 4,
        offset: { dx: 0, dy: -20 },
        primaryButton: {
          value: '确认',
          action: () => {
          }
        },
      })
    }
  }

  onAddButtonPressed() {
    this.params.value = ""
    this.params.enabled = true
    this.contentNode.update(this.params)
    PromptActionClass.openDialog();
  }

  onScanButtonPressed() {
    let options: scanBarcode.ScanOptions =
      { scanTypes: [scanCore.ScanType.ALL], enableMultiMode: true, enableAlbum: true };
    try {
      scanBarcode.startScanForResult(getContext(this), options).then((result: scanBarcode.ScanResult) => {
        this.addAuthItem(result.originalValue)
        hilog.info(0x0001, '[Scan Sample]',
          `Succeeded in getting ScanResult by promise with options, result is ${JSON.stringify(result)}`);
      }).catch((error: BusinessError) => {
        hilog.error(0x0001, '[Scan Sample]',
          `Failed to get ScanResult by promise with options. Code: ${error.code}, message: ${error.message}`);
      });
    } catch (error) {
      hilog.error(0x0001, '[Scan Sample]',
        `Failed to startScanForResult. Code: ${error.code}, message: ${error.message}`);
    }
  }
}