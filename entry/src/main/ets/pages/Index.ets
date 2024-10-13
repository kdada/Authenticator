import { SymbolGlyphModifier } from "@ohos.arkui.modifier"
import { scanCore, scanBarcode } from '@kit.ScanKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError, systemDateTime } from '@kit.BasicServicesKit';
import { PromptActionClass } from './PromptActionClass ';
import { ComponentContent } from '@kit.ArkUI';
import { buffer, uri } from '@kit.ArkTS';
import { cryptoFramework } from '@kit.CryptoArchitectureKit';

class AuthData {
  alias: string = ""
  issuer: string = ""
  account: string = ""
  secret: string = ""
  password: string = ""
}

class Params {
  value: string = ""
  index: Index | null = null;

  constructor(value: string, index: Index) {
    this.value = value
    this.index = index
  }
}

@Builder
function buildText(params: Params) {
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
          PromptActionClass.closeDialog()
          params.index?.addAuthItem(params.value)
        })
      }.width("50%")
      .justifyContent(FlexAlign.SpaceEvenly)
    }.backgroundColor('#FFF0F0F0')
    .padding(10)
    .border({ radius: 5 })
  }
  .alignItems(VerticalAlign.Center)
}

@Entry
@Component
struct Index {
  @State items: AuthData[] = [];
  private ctx: UIContext = this.getUIContext();
  // otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example
  private params: Params =
    new Params("otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example", this);
  private contentNode: ComponentContent<Object> =
    new ComponentContent(this.ctx, wrapBuilder(buildText), this.params);

  aboutToAppear(): void {
    PromptActionClass.setContext(this.ctx);
    PromptActionClass.setContentNode(this.contentNode);
    PromptActionClass.setOptions(Object({ alignment: DialogAlignment.Center, offset: Object({ dx: 0, dy: 50 }) }));
  }

  build() {
    Column() {
      Navigation() {
        Column() {
          ForEach(this.items, (item: AuthData) => {
            Row() {
              SymbolGlyph($r("sys.symbol.person"))
                .fontSize(30)
                .margin(20)
              Column() {
                Text(item.alias)
                  .fontSize(20)
                  .fontWeight(FontWeight.Bold)
                Text(item.account)
                  .fontSize(10)
              }
              .alignItems(HorizontalAlign.Start)
              .width("50%")

              Text(item.password)
                .fontSize(20)
                .fontWeight(FontWeight.Bold)
            }
            .width("100%")
          }, (item: AuthData, index: number) => index.toString())
        }
      }
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
        { value: "setting", symbolIcon: new SymbolGlyphModifier($r('sys.symbol.gearshape')) },
      ])
      .title($r("app.string.EntryAbility_label"))
      .titleMode(NavigationTitleMode.Mini)
      .hideBackButton(true)
      .mode(NavigationMode.Auto)
    }
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

  generatePassword(secret: string): number {
    let keyData: Uint8Array = this.base32Decode(secret)
    let timeStep = Math.floor(systemDateTime.getTime(false) / 1000 / 30)
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
    return buf.readUInt32BE() % Math.pow(10, 6)
  }

  addAuthItem(data: string) {
    this.params.value = "otpauth://totp/Example:alice@google.com?secret=JBSWY3DPEHPK3PXP&issuer=Example"
    this.contentNode.update(this.params)
    hilog.info(0x0001, '[Auth Sample]', `auth value is ${data}`);

    try {
      let authURI = new uri.URI(data.trim())
      if (authURI.scheme != "otpauth" || authURI.host != "totp") {
        throw new Error("无效的协议");
      }
      let secret = authURI.getQueryValue("secret")
      let issuer = authURI.getQueryValue("issuer")
      let path = authURI.path
      if (path.startsWith("/")) {
        path = path.substring(1)
      }
      let colon = path.indexOf(":")
      let account = path.substring(colon + 1)
      if (colon > 0 && issuer == null) {
        issuer = path.substring(0, colon)
      }
      this.items.push({
        alias: account,
        issuer: issuer ?? "",
        account: account,
        secret: secret,
        password: this.generatePassword(secret).toString().padStart(6, "0"),
      })
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