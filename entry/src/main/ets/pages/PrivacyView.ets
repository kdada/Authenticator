import { PromptParams } from './Base'

class PrivacyViewParams {
  setState: (state: string) => void

  constructor(setState: (state: string) => void) {
    this.setState = setState
  }
}

export function ShowPrivacyView(context: UIContext, setState: (state: string) => void) {
  const view = new PromptParams(context, wrapBuilder(PrivacyView), new PrivacyViewParams(setState))
  view.autoCancel = false
  view.open()
}

@Builder
function PrivacyView(params: PromptParams<PrivacyViewParams>) {
  Column() {
    Text($r('app.string.privacy_title'))
      .fontSize(20)
      .margin({ top: 10 })
    Scroll() {
      Text($r('app.string.privacy_content'))
    }
    .backgroundColor("#00000000")
    .height(300)
    .padding(10)
    .margin({ top: 10, bottom: 10 })

    Column() {
      Row() {
        Button($r('app.string.privacy_disagree'))
          .width("30%")
          .margin({ right: 20 })
          .onClick(() => {
            params.data.setState("Disagreed")
            params.close()
          })
        Button($r('app.string.privacy_agree'))
          .width("30%")
          .margin({ left: 20 })
          .onClick(() => {
            params.data.setState("Agreed")
            params.close()
          })
      }
    }
    .margin({ bottom: 10 })
  }
  .width("90%")
  .backgroundColor($r("app.color.mfa_dialog_background"))
  .borderRadius(10)
}