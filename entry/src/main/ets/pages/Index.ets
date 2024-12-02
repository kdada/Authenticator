import { SymbolGlyphModifier } from "@ohos.arkui.modifier"
import { scanCore, scanBarcode } from '@kit.ScanKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { systemDateTime } from '@kit.BasicServicesKit';
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { Setting } from './Setting';
import { userAuth } from '@kit.UserAuthenticationKit';
import { Detail } from './Detail';
import { AuthData, AuthDataStore, SteamAccountData } from './Base';
import { SteamConfirmationList } from './SteamConfirmationList';
import { SteamConfirmationDetail } from './SteamConfirmationDetail';
import { Confirmation } from './Steam';
import { Add, AddSecret, AddUri } from "./Add";
import {
  AddSteamToken,
  SteamConfirmLink,
  SteamConfirmTransferAuthenticator,
  SteamLink,
  SteamLogin,
  SteamMFALogin,
  SteamTransferAuthenticator
} from "./AddSteam";

@Entry
@Component
struct Index {
  @State items: AuthData[] = [];
  @State showTokens: Record<number, boolean> = [];
  @State progress: number = 0;
  @Provide("pageStack") pageStack: NavPathStack = new NavPathStack();
  @Provide("authDataStore") authDataStore: AuthDataStore = new AuthDataStore((items) => {
    this.items = items
  })
  @Provide("safe") safe: boolean = false;
  @StorageProp("enableSafeMode") enableSafeMode: boolean = false
  @StorageProp("hideToken") hideToken: boolean = false
  private timer?: number;

  aboutToAppear(): void {
    this.items = this.authDataStore.items
    this.progress = systemDateTime.getTime(false) / 1000 % 30
    this.timer = setInterval(() => {
      this.progress = systemDateTime.getTime(false) / 1000 % 30
      this.authDataStore.refreshAllPassword()
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
    try {
      const rand = cryptoFramework.createRandom();
      const len: number = 16;
      const randData: Uint8Array = rand?.generateRandomSync(len)?.data;
      const authParam: userAuth.AuthParam = {
        challenge: randData,
        authType: [userAuth.UserAuthType.FACE, userAuth.UserAuthType.FINGERPRINT, userAuth.UserAuthType.PIN],
        authTrustLevel: userAuth.AuthTrustLevel.ATL3,
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
    if (name == 'Add') {
      Add()
    } else if (name == "AddUri") {
      AddUri()
    } else if (name == "AddSecret") {
      AddSecret()
    } else if (name == "AddSteamToken") {
      AddSteamToken()
    } else if (name == "SteamLogin") {
      SteamLogin()
    } else if (name == "SteamMFALogin") {
      SteamMFALogin({ accountData: param as SteamAccountData })
    } else if (name == "SteamLink") {
      SteamLink({ accountData: param as SteamAccountData })
    } else if (name == "SteamConfirmLink") {
      SteamConfirmLink({ accountData: param as SteamAccountData })
    } else if (name == "SteamTransferAuthenticator") {
      SteamTransferAuthenticator({ accountData: param as SteamAccountData })
    } else if (name == "SteamConfirmTransferAuthenticator") {
      SteamConfirmTransferAuthenticator({ accountData: param as SteamAccountData })
    } else if (name == 'Setting') {
      Setting()
    } else if (name == 'Detail') {
      Detail({ item: param as AuthData })
    } else if (name == "SteamConfirmationList") {
      SteamConfirmationList({ steamAuthData: param["authData"], steamClient: param["client"] })
    } else if (name == "SteamConfirmationDetail") {
      SteamConfirmationDetail({ confirmation: param as Confirmation })
    }
  }

  @Builder
  Logo(issuer: string) {
    if (issuer.toLowerCase() == "google") {
      Image($rawfile("Google.png"))
        .width(40)
        .padding(5)
        .margin(10)
        .backgroundColor($r("app.color.vendor_background_color"))
        .borderRadius(20)
    } else if (issuer.toLowerCase() == "microsoft") {
      Image($rawfile("Microsoft.png"))
        .width(40)
        .padding(5)
        .margin(10)
        .backgroundColor($r("app.color.vendor_background_color"))
        .borderRadius(20)
    } else if (issuer.toLowerCase() == "github") {
      Image($rawfile("Github.png"))
        .width(40)
        .padding(5)
        .margin(10)
        .backgroundColor($r("app.color.vendor_background_color"))
        .borderRadius(20)
    } else if (issuer.toLowerCase() == "gitlab") {
      Image($rawfile("Gitlab.png"))
        .width(40)
        .padding(5)
        .margin(10)
        .backgroundColor($r("app.color.vendor_background_color"))
        .borderRadius(20)
    } else if (issuer.toLowerCase() == "steam") {
      Image($rawfile("Steam.png"))
        .width(40)
        .padding(5)
        .margin(10)
        .backgroundColor($r("app.color.vendor_background_color"))
        .borderRadius(20)
    } else if (issuer.toLowerCase() == "huawei") {
      Image($rawfile("Huawei.png"))
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
        if (this.items.length <= 0) {
          RelativeContainer() {
            Column() {
              SymbolGlyph($r("sys.symbol.info_shield"))
                .fontSize(35)
              Text("还没有添加过令牌密钥\n请点击右上角的加号或扫码按钮添加")
                .fontWeight(FontWeight.Bold)
                .padding(20)
                .textAlign(TextAlign.Center)
                .lineHeight(40)
            }
            .alignRules({
              center: { anchor: "__container__", align: VerticalAlign.Center },
              middle: { anchor: "__container__", align: HorizontalAlign.Center },
            })
          }
        } else {
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
                    Text(this.safe ? item.account : "******")
                      .fontSize(10)
                  }
                  .alignItems(HorizontalAlign.Start)
                  .width("55%")

                  Text((this.safe && (!this.hideToken || this.showTokens[item.id])) ? item.password : "******")
                    .fontSize(20)
                    .fontWeight(FontWeight.Bold)
                    .onClick(() => {
                      if (!this.safe) {
                        this.getUIContext().getPromptAction().showToast({
                          message: "已启用安全模式，请先解锁"
                        })
                        return
                      }
                      if (!this.hideToken) {
                        this.pageStack.pushPathByName("Detail", item)
                        return
                      }
                      this.showTokens[item.id] = !!!this.showTokens[item.id]
                    })
                }
                .width("100%")
                .onClick(() => {
                  if (!this.safe) {
                    this.getUIContext().getPromptAction().showToast({
                      message: "已启用安全模式，请先解锁"
                    })
                    return
                  }
                  this.pageStack.pushPathByName("Detail", item)
                })
              }
              .swipeAction({ end: this.deleteButton(item.id) })
              .borderColor($r("app.color.item_separator_color"))
              .borderWidth({ bottom: 1 })
            }, (item: AuthData) => item.id.toString() + "-" + item.alias + "-" + item.account + "-" + item.password)
          }
        }
      }
      .navDestination(this.PagesMap)
      .menus(this.safe ? [
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
          action: () => {
            if (!this.safe) {
              this.getUIContext().getPromptAction().showToast({
                message: "已启用安全模式，请先解锁"
              })
              return
            }
            this.pageStack.pushPathByName("Setting", undefined)
          }
        },
      ] : [
        {
          value: "unlock",
          symbolIcon: new SymbolGlyphModifier($r('sys.symbol.lock')),
          action: () => this.onPageShow()
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
      if (!this.safe) {
        this.getUIContext().getPromptAction().showToast({
          message: "已启用安全模式，请先解锁"
        })
        return
      }
      this.authDataStore.removeAuthItem(id)
      this.items = this.authDataStore.items
    })
  }

  onAddButtonPressed() {
    if (!this.safe) {
      this.getUIContext().getPromptAction().showToast({
        message: "已启用安全模式，请先解锁"
      })
      return
    }
    this.pageStack.pushPathByName("Add", undefined)
  }

  onScanButtonPressed() {
    if (!this.safe) {
      this.getUIContext().getPromptAction().showToast({
        message: "已启用安全模式，请先解锁"
      })
      return
    }
    let options: scanBarcode.ScanOptions =
      { scanTypes: [scanCore.ScanType.ALL], enableMultiMode: true, enableAlbum: true };
    try {
      scanBarcode.startScanForResult(getContext(this), options).then((result: scanBarcode.ScanResult) => {
        this.authDataStore.addAuthItem(result.originalValue)
        this.getUIContext().getPromptAction().showToast({
          message: "成功添加令牌"
        })
      })
    } catch (error) {
      this.getUIContext().getPromptAction().showToast({
        message: `扫码失败：${error}`
      })
    }
  }
}