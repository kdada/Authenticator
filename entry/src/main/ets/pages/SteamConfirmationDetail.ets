import { Confirmation } from './Steam'
import { intl } from '@kit.LocalizationKit'

@Component
export struct SteamConfirmationDetail {
  public confirmation: Confirmation = new Confirmation()

  build() {
    NavDestination() {
      Scroll() {
        Column() {
          Row() {
            Text($r('app.string.confirm_detail_headline'))
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
              Text($r('app.string.confirm_detail_summary'))
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
            Text($r('app.string.confirm_detail_created_at'))
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
            Text($r('app.string.confirm_detail_creator_id'))
              .width("30%")
              .textAlign(TextAlign.Start)
            Text(this.confirmation.creator_id)
              .width("60%")
              .textAlign(TextAlign.End)
          }
          .padding({ top: 5, bottom: 5 })
          .alignItems(VerticalAlign.Center)

          Row() {
            Text($r('app.string.confirm_detail_type_id'))
              .width("30%")
              .textAlign(TextAlign.Start)
            Text(this.confirmation.type.toString())
              .width("60%")
              .textAlign(TextAlign.End)
          }
          .padding({ top: 5, bottom: 5 })
          .alignItems(VerticalAlign.Center)

          Row() {
            Text($r('app.string.confirm_detail_type_name'))
              .width("30%")
              .textAlign(TextAlign.Start)
            Text(this.confirmation.type_name)
              .width("60%")
              .textAlign(TextAlign.End)
          }
          .padding({ top: 5, bottom: 5 })
          .alignItems(VerticalAlign.Center)

          Row() {
            Text($r('app.string.confirm_detail_confirm_id'))
              .width("30%")
              .textAlign(TextAlign.Start)
            Text(this.confirmation.id)
              .width("60%")
              .textAlign(TextAlign.End)
          }
          .padding({ top: 5, bottom: 5 })
          .alignItems(VerticalAlign.Center)

          Row() {
            Text($r('app.string.confirm_disposable_number'))
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
              Text($r('app.string.confirm_detail_icon_url'))
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
    .title($r('app.string.confirm_detail_title'))
  }
}
