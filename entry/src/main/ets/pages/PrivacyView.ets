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
    Text("隐私政策")
      .fontSize(20)
      .margin({ top: 10 })
    Scroll() {
      Text(`更新日期：2025/04/03
生效日期：2025/04/03
导言
千维验证器是一款由 郭维 （以下简称“我们”）提供的产品。 您在使用我们的服务时，我们不会收集和使用您的相关信息，我们希望通过本《隐私政策》向您说明。本《隐私政策》与您所使用的千维验证器服务息息相关，希望您仔细阅读，在需要时，按照本《隐私政策》的指引，作出您认为适当的选择。本《隐私政策》中涉及的相关技术词汇，我们尽量以简明扼要的表述，并提供进一步说明的链接，以便您的理解。

您使用或继续使用我们的服务，即意味着同意本《隐私政策》。

感谢您使用我们的服务！我们重视您的隐私，并承诺保护您的个人信息。在使用本服务时，我们希望向您明确声明，我们不会主动收集、存储或共享任何个人信息。请您在使用本服务前，仔细阅读本隐私政策。

1. 我们不收集个人信息
在您使用本服务的过程中，我们不会主动收集您的任何个人信息。无论您是匿名使用服务，还是以其他方式与我们进行互动，我们都不会要求或获取您的姓名、电子邮件地址、电话号码、住址、支付信息等个人身份信息。

2. 不涉及第三方数据共享
由于我们不收集任何个人信息，我们也不会将您的任何数据与第三方共享、出售或租赁。您的隐私安全对我们来说至关重要，我们不会向任何第三方提供与您身份相关的任何数据。

3. 技术数据收集
尽管我们不会收集您的个人信息，但我们可能会使用一些常见的技术手段来收集非个人信息，例如您的设备类型、浏览器类型、操作系统版本、访问日期和时间等。这些信息仅用于改善服务质量和用户体验，不会用于识别您个人身份。

4. 数据存储
由于我们不会收集个人信息，因此不会在服务器上存储任何与您身份相关的个人数据。任何与服务有关的日志数据都仅用于技术分析和系统维护，且不会用于任何身份识别。

5. 安全性
虽然我们不收集您的个人信息，但我们依然采取合理的安全措施来保护我们服务的数据安全。这些措施包括但不限于加密技术、服务器安全和网络防护，以确保我们的系统免受外部攻击或数据泄露。

6. 儿童隐私
我们的服务并不针对儿童，我们不会 knowingly 收集或请求未满18岁用户的个人信息。如果我们发现收集了未满18岁用户的个人信息，我们将尽快删除相关数据。

7. 政策变更
我们可能会根据法律、政策或服务改进的需要，适时更新或修改本隐私政策。如果本隐私政策发生重要变更，我们将在适当的地方进行通知，以确保您及时了解我们的隐私保护措施。

8. 联系我们
如果您对本隐私政策有任何疑问或需要更多信息，请随时联系我们。
`
      )
    }
    .backgroundColor("#00000000")
    .height(300)
    .padding(10)
    .margin({ top: 10, bottom: 10 })

    Column() {
      Row() {
        Button("不同意")
          .width("30%")
          .margin({ right: 20 })
          .onClick(() => {
            params.data.setState("Disagreed")
            params.close()
          })
        Button("同意")
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