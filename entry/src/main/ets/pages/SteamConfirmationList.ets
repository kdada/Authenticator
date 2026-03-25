import { DefaultToastDuration, SteamAuthData } from './Base';
import { Confirmation, SteamClient } from './Steam';
import { SymbolGlyphModifier } from '@kit.ArkUI';
import { intl } from '@kit.LocalizationKit';

@Component
export struct SteamConfirmationList {
  public steamAuthData: SteamAuthData = new SteamAuthData()
  @StorageProp("enhanceNetwork") enhanceNetwork: boolean = false
  public steamClient: SteamClient = new SteamClient(this.enhanceNetwork)
  @State steamConfirmations: Confirmation[] = []
  @State loading: boolean = false
  @Consume("pageStack") pageStack: NavPathStack;

  aboutToAppear(): void {
    this.loadSteamConfirmations()
  }

  getType(conf: Confirmation): ResourceStr {
    switch (conf.type) {
      case 1:
        return $r('app.string.confirm_list_type_test')
      case 2:
        return $r('app.string.confirm_list_type_trade')
      case 3:
        return $r('app.string.confirm_list_type_sell')
      case 5:
        return $r('app.string.confirm_list_type_change_phone')
      case 6:
        return $r('app.string.confirm_list_type_remove_phone')
      case 9:
        return $r('app.string.confirm_list_type_create_key')
      default:
        return $r('app.string.confirm_list_type_unknown')
    }
  }

  getTitle(conf: Confirmation): string {
    let title = `${this.getType(conf)}`
    if (conf.headline && conf.headline.length > 0) {
      title += ` - ${conf.headline}`
    }
    return title
  }

  getDescription(conf: Confirmation): string {
    return conf.summary.join(", ")
  }

  loadSteamConfirmations(): void {
    this.loading = true
    this.steamClient.getConfirmations(this.steamAuthData.steamID, this.steamAuthData.refreshToken,
      this.steamAuthData.identitySecret, this.steamAuthData.deviceID, (err, info) => {
        this.loading = false
        if (err) {
          this.getUIContext().getPromptAction().showToast({
            duration: DefaultToastDuration,
            message: $r('app.string.confirm_list_query_failed_format', err.message)
          })
          return
        }
        this.steamConfirmations = info
        this.getUIContext().getPromptAction().showToast({
          duration: DefaultToastDuration,
          message: $r('app.string.confirm_list_query_success_format', info.length)
        })
      })
  }

  removeConfirmation(item: Confirmation) {
    let newArray: Confirmation[] = []
    for (const conf of this.steamConfirmations) {
      if (conf.id == item.id) {
        continue
      }
      newArray.push(conf)
    }
    this.steamConfirmations = newArray
  }

  allowAll() {
    this.getUIContext().getPromptAction().showActionMenu({
      title: $r('app.string.confirm_list_allow_all'),
      buttons: [{ text: $r('app.string.common_yes'), color: $r("app.color.item_confirm_background_color") }],
    }).then((value) => {
      if (value.index == 0) {
        this.steamClient.allow(this.steamAuthData.steamID, this.steamAuthData.refreshToken,
          this.steamAuthData.identitySecret, this.steamAuthData.deviceID, this.steamConfirmations, (err) => {
            if (err) {
              this.getUIContext().getPromptAction().showToast({
                duration: DefaultToastDuration,
                message: $r('app.string.confirm_list_allow_failed_format', err.message)
              })
              return
            }
            this.steamConfirmations = []
          })
      }
    })
  }

  denyAll() {
    this.getUIContext().getPromptAction().showActionMenu({
      title: $r('app.string.confirm_list_deny_all'),
      buttons: [{ text: $r('app.string.common_yes'), color: $r("app.color.item_delete_background_color") }],
    }).then((value) => {
      if (value.index == 0) {
        this.steamClient.deny(this.steamAuthData.steamID, this.steamAuthData.refreshToken,
          this.steamAuthData.identitySecret, this.steamAuthData.deviceID, this.steamConfirmations, (err) => {
            if (err) {
              this.getUIContext().getPromptAction().showToast({
                duration: DefaultToastDuration,
                message: $r('app.string.confirm_list_deny_failed_format', err.message)
              })
              return
            }
            this.steamConfirmations = []
          })
      }
    })
  }

  @Builder
  confirmationButtons(item: Confirmation) {
    Row() {
      Button() {
        SymbolGlyph($r("sys.symbol.checkmark"))
          .fontSize(35)
          .fontColor([$r("app.color.item_delete_icon_color")])
      }
      .backgroundColor($r("app.color.item_confirm_background_color"))
      .type(ButtonType.Normal)
      .width(60)
      .height("100%")
      .onClick((event) => {
        this.steamClient.allow(this.steamAuthData.steamID, this.steamAuthData.refreshToken,
          this.steamAuthData.identitySecret, this.steamAuthData.deviceID, [item], (err) => {
            if (err) {
              this.getUIContext().getPromptAction().showToast({
                duration: DefaultToastDuration,
                message: $r('app.string.confirm_list_allow_failed_format', err.message)
              })
              return
            }
            this.removeConfirmation(item)
          })
      })

      Button() {
        SymbolGlyph($r("sys.symbol.xmark"))
          .fontSize(35)
          .fontColor([$r("app.color.item_delete_icon_color")])
      }
      .backgroundColor($r("app.color.item_delete_background_color"))
      .type(ButtonType.Normal)
      .width(60)
      .height("100%")
      .onClick((event) => {
        this.steamClient.deny(this.steamAuthData.steamID, this.steamAuthData.refreshToken,
          this.steamAuthData.identitySecret, this.steamAuthData.deviceID, [item], (err) => {
            if (err) {
              this.getUIContext().getPromptAction().showToast({
                duration: DefaultToastDuration,
                message: $r('app.string.confirm_list_deny_failed_format', err.message)
              })
              return
            }
            this.removeConfirmation(item)
          })
      })
    }
  }

  build() {
    NavDestination() {
      if (this.loading) {
        Text($r('app.string.confirm_list_loading'))
      } else {
        List() {
          ForEach(this.steamConfirmations, (item: Confirmation) => {
            ListItem() {
              Row() {
                if (item.icon && item.icon.length > 0) {
                  Image(item.icon)
                    .width(40)
                    .height(40)
                    .padding(5)
                    .margin(10)
                    .backgroundColor($r("app.color.vendor_background_color"))
                    .borderRadius(5)
                } else {
                  SymbolGlyph($r("sys.symbol.ellipsis_message"))
                    .fontSize(30)
                    .padding(5)
                    .margin(10)
                    .fontColor([$r("app.color.vendor_icon_color")])
                    .backgroundColor($r("app.color.vendor_background_color"))
                    .borderRadius(5)
                }
                Column() {
                  Text(this.getTitle(item))
                    .fontSize(15)
                    .fontWeight(FontWeight.Bold)
                  Text(this.getDescription(item))
                    .fontSize(10)
                    .margin({ top: 2, bottom: 2 })
                  Text((new Date(item.creation_time * 1000)).toLocaleString((new intl.Locale()).toString(),
                    { hour12: false }))
                    .fontSize(10)
                }
                .alignItems(HorizontalAlign.Start)
              }
              .padding({ top: 5, bottom: 5 })
              .width("100%")
              .onClick(() => {
                this.pageStack.pushPathByName("SteamConfirmationDetail", item)
              })
            }
            .swipeAction({ end: this.confirmationButtons(item) })
            .borderColor($r("app.color.item_separator_color"))
            .borderWidth({ bottom: 1 })
          })
        }
      }
    }
    .title($r('app.string.confirm_list_title'))
    .menus([
      {
        value: "allow",
        isEnabled: !this.loading && this.steamConfirmations.length > 0,
        symbolIcon: new SymbolGlyphModifier($r('sys.symbol.checkmark')),
        action: () => this.allowAll()
      },
      {
        value: "deny",
        isEnabled: !this.loading && this.steamConfirmations.length > 0,
        symbolIcon: new SymbolGlyphModifier($r('sys.symbol.xmark')),
        action: () => this.denyAll()
      },
      {
        value: "refresh",
        isEnabled: !this.loading,
        symbolIcon: new SymbolGlyphModifier($r('sys.symbol.arrow_clockwise')),
        action: () => this.loadSteamConfirmations()
      },
    ])
  }
}
