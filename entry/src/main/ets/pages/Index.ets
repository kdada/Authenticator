import { SymbolGlyphModifier } from '@ohos.arkui.modifier';
import { scanBarcode, scanCore } from '@kit.ScanKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { BusinessError, systemDateTime } from '@kit.BasicServicesKit';
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { Setting } from './Setting';
import { userAuth } from '@kit.UserAuthenticationKit';
import { Detail } from './Detail';
import { AuthData, AuthDataStore, copyTextToClipboard, DefaultToastDuration, PromptParams, SteamAccountData } from './Base';
import { SteamConfirmationList } from './SteamConfirmationList';
import { SteamConfirmationDetail } from './SteamConfirmationDetail';
import { Confirmation } from './Steam';
import { Add, AddSecret, AddSteamSecret, AddUri } from './Add';
import {
  AddSteamToken,
  SteamConfirmLink,
  SteamConfirmTransferAuthenticator,
  SteamLink,
  SteamLogin,
  SteamMFALogin,
  SteamRefreshToken,
  SteamTransferAuthenticator
} from './AddSteam';
import { ShowPrivacyView } from './PrivacyView';
import { curves } from '@kit.ArkUI';
import { TokenIcon } from '../components/TokenIcon';
import { buildTokenIconPicker, TokenIconPickerData } from '../components/TokenIconPicker';
import { getLocalizedString } from '../entryability/EntryAbility';

@Entry
@Component
struct Index {
  @State items: AuthData[] = [];
  dragIndex: number = -1;
  @State dragItem?: AuthData = undefined;
  @State showTokens: Record<string, boolean> = {};
  @State progress: number = 0;
  @Provide("pageStack") pageStack: NavPathStack = new NavPathStack();
  @Provide("authDataStore") authDataStore: AuthDataStore = new AuthDataStore((items) => {
    this.items = items
  })
  @Provide("safe") safe: boolean = false;
  @StorageProp("enableSafeMode") enableSafeMode: boolean = false
  @StorageProp("hideToken") hideToken: boolean = false
  @StorageLink("privacyState") privacyState: string = "Unknown"
  private timer?: number;
  private lastPasswordTimeStep: number = -1;

  aboutToAppear(): void {
    this.items = this.authDataStore.items
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
      }
    }, 1000)

    if (this.privacyState == "Unknown") {
      ShowPrivacyView(this.getUIContext(), (state: string) => {
        this.privacyState = state
      })
    }
  }

  aboutToDisappear(): void {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  isAvailableAuthType(authType: userAuth.UserAuthType, authLevel: userAuth.AuthTrustLevel): boolean {
    try {
      userAuth.getAvailableStatus(authType, authLevel);
      return true
    } catch (error) {
      const err: BusinessError = error as BusinessError;
      hilog.error(0x0001, '[Auth Sample]',
        `Current auth trust level [${authType}/${authLevel}] is not supported. Code is ${err?.code}, message is ${err?.message}`);
    }
    return false
  }

  unlock(): void {
    // 获取认证状态
    if (!this.isAvailableAuthType(userAuth.UserAuthType.PIN, userAuth.AuthTrustLevel.ATL3) &&
      !this.isAvailableAuthType(userAuth.UserAuthType.FINGERPRINT, userAuth.AuthTrustLevel.ATL3) &&
      !this.isAvailableAuthType(userAuth.UserAuthType.FACE, userAuth.AuthTrustLevel.ATL3)) {
      this.safe = true
      return
    }
    this.onPageShow()
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
        title: getLocalizedString($r('app.string.index_auth_title')),
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

  showSafeModeToast() {
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

  openTokenIconPicker(item: AuthData) {
    const data = new TokenIconPickerData()
    data.issuer = item.issuer
    data.currentIconPath = item.tokenIconPath
    let params: PromptParams<TokenIconPickerData>
    data.onConfirm = (path: string): void => {
      this.authDataStore.updateTokenIconPath(item.uuid, path)
    }
    data.onClose = (): void => {
      params.close()
    }
    params = new PromptParams(this.getUIContext(), wrapBuilder(buildTokenIconPicker), data)
    params.open()
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
    } else if (name == "SteamRefreshToken") {
      SteamRefreshToken({ authData: param["baseAuthData"], steamAuthData: param["authData"] })
    } else if (name == "AddSteamSecret") {
      AddSteamSecret()
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
              Text($r('app.string.index_empty'))
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
            ForEach(this.items, (item: AuthData, index: number) => {
              ListItem() {
                Row() {
                  Stack() {
                    TokenIcon({ issuer: item.issuer, iconPath: item.tokenIconPath })
                  }
                  .gesture(
                    LongPressGesture()
                      .onAction(() => {
                        if (!this.safe) {
                          this.showSafeModeToast()
                          return
                        }
                        this.openTokenIconPicker(item)
                      })
                  )

                  Column() {
                    Text(item.alias)
                      .fontSize(20)
                      .fontWeight(FontWeight.Bold)
                    Text(this.safe ? item.account : "******")
                      .fontSize(10)
                  }
                  .alignItems(HorizontalAlign.Start)
                  .width("55%")

                  Text((this.safe && (!this.hideToken || this.showTokens[item.uuid])) ? item.password : "******")
                    .fontSize(20)
                    .fontWeight(FontWeight.Bold)
                    .gesture(
                      LongPressGesture()
                        .onAction(() => {
                          if (!this.safe) {
                            this.showSafeModeToast()
                            return
                          }
                          if (this.hideToken && !this.showTokens[item.uuid]) {
                            return
                          }
                          this.copyToken(item.password)
                        })
                    )
                    .onClick(() => {
                      if (!this.safe) {
                        this.showSafeModeToast()
                        return
                      }
                      if (!this.hideToken) {
                        this.pageStack.pushPathByName("Detail", item)
                        return
                      }
                      this.showTokens[item.uuid] = !!!this.showTokens[item.uuid]
                    })
                }
                .width("100%")
                .opacity(item.uuid == this.dragItem?.uuid ? 0 : 1)
                .onClick(() => {
                  if (!this.safe) {
                    this.showSafeModeToast()
                    return
                  }
                  this.pageStack.pushPathByName("Detail", item)
                })
              }
              .swipeAction({ end: this.deleteButton(item.uuid) })
              .borderColor($r("app.color.item_separator_color"))
              .borderWidth({ bottom: 1 })
              .onDragStart((event?: DragEvent, extraParams?: string) => {
                hilog.debug(0, "testa", `drag start: ${item.uuid}`)
                this.dragIndex = index
                this.dragItem = item
              })
              .onDragEnter((event?: DragEvent, extraParams?: string) => {
                if (!this.dragItem) {
                  return
                }
                if (item.uuid == this.dragItem?.uuid) {
                  return
                }
                hilog.debug(0, "testa", `drag enter: ${item.uuid}`)
                let currentIndex = this.items.findIndex((element) => element.uuid == this.dragItem!.uuid)
                let targetIndex = this.items.findIndex((element) => element.uuid == item.uuid)
                this.getUIContext()?.animateTo({
                  curve: curves.interpolatingSpring(0, 1, 400, 38)
                }, () => {
                  this.items.splice(currentIndex, 1)
                  this.items.splice(targetIndex, 0, this.dragItem!)
                })
              })
              .onDrop((dragEvent: DragEvent) => {
                hilog.debug(0, "testa", `drop: ${item.uuid}`)
                this.dragItem = undefined
                this.authDataStore.replaceAuthItems(this.items)
              })
              .onDragEnd(() => {
                if (!this.dragItem) {
                  return
                }
                hilog.debug(0, "testa", `drag cancel: ${item.uuid}`)
                let currentIndex = this.items.findIndex((element) => element.uuid == this.dragItem!.uuid)
                this.getUIContext()?.animateTo({
                  curve: curves.interpolatingSpring(0, 1, 400, 38)
                }, () => {
                  this.items.splice(currentIndex, 1)
                  this.items.splice(this.dragIndex, 0, this.dragItem!)
                  this.dragItem = undefined
                })
              })
            }, (item: AuthData) => item.uuid.toString() + "-" + item.alias + "-" + item.account + "-" + item.password +
              "-" + item.tokenIconPath)
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
              this.showSafeModeToast()
              return
            }
            this.pageStack.pushPathByName("Setting", undefined)
          }
        },
      ] : [
        {
          value: "unlock",
          symbolIcon: new SymbolGlyphModifier($r('sys.symbol.lock')),
          action: () => this.unlock()
        },
      ])
      .title($r("app.string.EntryAbility_label"))
      .titleMode(NavigationTitleMode.Mini)
      .hideBackButton(true)
      .mode(NavigationMode.Auto)
    }
  }

  @Builder
  deleteButton(uuid: string) {
    Button() {
      SymbolGlyph($r("sys.symbol.trash"))
        .fontSize(35)
        .fontColor([$r("app.color.item_delete_icon_color")])
    }
    .backgroundColor($r("app.color.item_delete_background_color"))
    .type(ButtonType.Normal)
    .width(60)
    .height("100%")
    .onClick(() => {
      if (!this.safe) {
        this.showSafeModeToast()
        return
      }
      this.authDataStore.removeAuthItem(uuid)
      this.items = this.authDataStore.items
    })
  }

  onAddButtonPressed() {
    if (!this.safe) {
      this.showSafeModeToast()
      return
    }
    this.pageStack.pushPathByName("Add", undefined)
  }

  onScanButtonPressed() {
    if (!this.safe) {
      this.showSafeModeToast()
      return
    }
    let options: scanBarcode.ScanOptions =
      { scanTypes: [scanCore.ScanType.ALL], enableMultiMode: true, enableAlbum: true };
    try {
      scanBarcode.startScanForResult(getContext(this), options).then((result: scanBarcode.ScanResult) => {
        try {
          if (result.originalValue.startsWith("https://s.team/q/")) {
            this.loginSteam(result.originalValue)
            return
          }
          this.authDataStore.addAuthItem(result.originalValue)
          this.getUIContext().getPromptAction().showToast({
            duration: DefaultToastDuration,
            message: $r('app.string.index_add_success')
          })
        } catch (error) {
          this.getUIContext().getPromptAction().showToast({
            duration: DefaultToastDuration,
            message: $r('app.string.common_scan_failed_format', `${error}`)
          })
        }
      })
    } catch (error) {
      this.getUIContext().getPromptAction().showToast({
        duration: DefaultToastDuration,
        message: $r('app.string.common_scan_failed_format', `${error}`)
      })
    }
  }

  loginSteam(url: String) {
    let steamTokenCount = 0;
    let steamAuthDataCount = 0;
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i]
      if (item.issuer == "Steam") {
        steamTokenCount++
        if (item.external != "") {
          steamAuthDataCount++
        }
      }
    }
    if (steamTokenCount <= 0) {
      this.getUIContext().getPromptAction().showToast({
        duration: DefaultToastDuration,
        message: $r('app.string.index_no_steam_token')
      })
      return
    }
    if (steamAuthDataCount <= 0) {
      this.getUIContext().getPromptAction().showToast({
        duration: DefaultToastDuration,
        message: $r('app.string.index_no_steam_auth')
      })
      return
    }
    this.getUIContext().getPromptAction().showToast({
      duration: DefaultToastDuration,
      message: $r('app.string.index_go_to_steam_detail')
    })
    return
  }
}
