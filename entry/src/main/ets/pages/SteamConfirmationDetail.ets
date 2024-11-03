import { Confirmation } from "./Steam"
import { intl } from "@kit.LocalizationKit"

@Component
export struct SteamConfirmationDetail {
  public confirmation: Confirmation = new Confirmation()

  build() {
    NavDestination() {
      Scroll() {
        Column() {
          Row() {
            Text("标题")
              .width("30%")
              .textAlign(TextAlign.Start)
            Text(this.confirmation.headline)
              .width("60%")
              .textAlign(TextAlign.End)
          }
          .padding({ top: 5, bottom: 5 })
          .alignItems(VerticalAlign.Center)

          if (this.confirmation.summary.join(",").length > 0) {
            Row() {
              Text("描述")
                .width("30%")
                .textAlign(TextAlign.Start)
              Text(this.confirmation.summary.join(","))
                .width("60%")
                .textAlign(TextAlign.End)
            }
            .padding({ top: 5, bottom: 5 })
            .alignItems(VerticalAlign.Center)
          }

          Row() {
            Text("创建时间")
              .width("30%")
              .textAlign(TextAlign.Start)
            Text((new Date(this.confirmation.creation_time * 1000)).toLocaleString((new intl.Locale()).toString(),
              { hour12: false }))
              .width("60%")
              .textAlign(TextAlign.End)
          }
          .padding({ top: 5, bottom: 5 })
          .alignItems(VerticalAlign.Center)

          Row() {
            Text("创建者 ID")
              .width("30%")
              .textAlign(TextAlign.Start)
            Text(this.confirmation.creator_id)
              .width("60%")
              .textAlign(TextAlign.End)
          }
          .padding({ top: 5, bottom: 5 })
          .alignItems(VerticalAlign.Center)

          Row() {
            Text("类型编号")
              .width("30%")
              .textAlign(TextAlign.Start)
            Text(this.confirmation.type.toString())
              .width("60%")
              .textAlign(TextAlign.End)
          }
          .padding({ top: 5, bottom: 5 })
          .alignItems(VerticalAlign.Center)

          Row() {
            Text("类型名称")
              .width("30%")
              .textAlign(TextAlign.Start)
            Text(this.confirmation.type_name)
              .width("60%")
              .textAlign(TextAlign.End)
          }
          .padding({ top: 5, bottom: 5 })
          .alignItems(VerticalAlign.Center)

          Row() {
            Text("确认 ID")
              .width("30%")
              .textAlign(TextAlign.Start)
            Text(this.confirmation.id)
              .width("60%")
              .textAlign(TextAlign.End)
          }
          .padding({ top: 5, bottom: 5 })
          .alignItems(VerticalAlign.Center)


          Row() {
            Text("一次性编号")
              .width("30%")
              .textAlign(TextAlign.Start)
            Text(this.confirmation.nonce)
              .width("60%")
              .textAlign(TextAlign.End)
          }
          .padding({ top: 5, bottom: 5 })
          .alignItems(VerticalAlign.Center)


          if (this.confirmation.icon && this.confirmation.icon.length > 0) {
            Row() {
              Text("图标地址")
                .width("30%")
                .textAlign(TextAlign.Start)
              Text(this.confirmation.icon)
                .width("60%")
                .textAlign(TextAlign.End)
            }
            .padding({ top: 5, bottom: 5 })
            .alignItems(VerticalAlign.Center)
          }


        }
      }
    }
    .title("确认详情")
  }
}
