import { SteamAuthData } from "./Base";
import { Confirmation, SteamClient } from "./Steam";
import { SymbolGlyphModifier } from "@kit.ArkUI";

@Component
export struct SteamConfirmationList {
  public steamAuthData: SteamAuthData = new SteamAuthData()
  public steamClient: SteamClient = new SteamClient()
  @State steamConfirmations: Confirmation[] = []
  @State loading: boolean = false

  aboutToAppear(): void {
    this.loadSteamConfirmations()
  }

  loadSteamConfirmations(): void {
    this.loading = true
    this.steamClient.getConfirmations(this.steamAuthData.steamID, this.steamAuthData.refreshToken,
      this.steamAuthData.identitySecret, this.steamAuthData.deviceID, (err, info) => {
        this.loading = false
        if (err) {
          this.getUIContext().getPromptAction().showToast({
            message: `查询失败，错误：${err.message}`
          })
          return
        }
        this.steamConfirmations = info
        this.getUIContext().getPromptAction().showToast({
          message: `查询成功，共 ${info.length} 条待确认记录`
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

  @Builder
  confirmationButtons(item: Confirmation) {
    Button() {
      Text("确认")
    }
    .backgroundColor($r("app.color.item_confirm_background_color"))
    .type(ButtonType.Normal)
    .width(60)
    .height("100%")
    .onClick((event) => {
      this.steamClient.deny(this.steamAuthData.steamID, this.steamAuthData.refreshToken,
        this.steamAuthData.identitySecret, this.steamAuthData.deviceID, [item], (err) => {
          if (err) {
            this.getUIContext().getPromptAction().showToast({
              message: "确认失败"
            })
            return
          }
          this.removeConfirmation(item)
        })
    })

    Button() {
      Text("拒绝")
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
              message: "删除失败"
            })
            return
          }
          this.removeConfirmation(item)
        })
    })
  }

  build() {
    NavDestination() {
      if (this.loading) {
        Text("查询中...")
      } else {
        List() {
          ForEach(this.steamConfirmations, (item: Confirmation) => {
            ListItem() {
              Row() {
                Column() {
                  Text(item.type_name)
                    .fontSize(20)
                    .fontWeight(FontWeight.Bold)
                  Text(item.id)
                    .fontSize(10)
                }
                .alignItems(HorizontalAlign.Start)
                .width("55%")

                Text(item.creator_id)
                  .fontSize(20)
                  .fontWeight(FontWeight.Bold)
              }
              .width("100%")
            }
            .swipeAction({ end: this.confirmationButtons(item) })
            .borderColor($r("app.color.item_separator_color"))
            .borderWidth({ bottom: 1 })
          })
        }
      }
    }
    .title("Steam 确认列表")
    .menus([
      {
        value: "refresh",
        isEnabled: !this.loading,
        symbolIcon: new SymbolGlyphModifier($r('sys.symbol.arrow_clockwise')),
        action: () => this.loadSteamConfirmations()
      },
    ])
  }
}
