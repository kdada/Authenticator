import { AuthData } from "./Base"
import { distributedKVStore } from "@kit.ArkData";
import { ComponentContent, promptAction } from "@kit.ArkUI";


class PromptParams<T> {
  private ctx?: UIContext
  private content?: ComponentContent<PromptParams<T>>
  public data: T

  constructor(ctx: UIContext, builder: WrappedBuilder<[PromptParams<T>]>, data: T) {
    this.ctx = ctx
    this.content = new ComponentContent(this.ctx, builder, this);
    this.data = data
  }

  open() {
    this.ctx?.getPromptAction().openCustomDialog(this.content, new Object(this))
  }

  close() {
    this.ctx?.getPromptAction().closeCustomDialog(this.content)
  }
}

class SteamData {
  public maFile: string = ""
  public detail?: Detail
}

@Builder
function buildSteamInput(params: PromptParams<SteamData>) {
  Row() {
    Column() {
      Text("输入 Steam 认证信息")
        .fontSize(30)
        .fontWeight(FontWeight.Bold)
      Text("认证通过后可以使用 Steam 交易确认功能")
        .fontSize(12)
        .fontWeight(FontWeight.Normal)
        .margin({ bottom: 20 })
      TextArea({ text: "" })
        .margin({ bottom: 20 })
        .height(300)
        .onChange((value) => {
          params.data.maFile = value
        })
      Row() {
        Button('取消').onClick(() => {
          params.close()
        })
        Button('确认').onClick(() => {
          let detail = params.data.detail!
          detail.item.external = params.data.maFile
          let authString = JSON.stringify(detail.item)
          detail.kvStore.put(`/data/auth/${detail.item.id}`, authString).finally(() => {
            params.close()
          })
        })
      }.width("50%")
      .justifyContent(FlexAlign.SpaceEvenly)
    }.backgroundColor($r("app.color.2fa_dialog_background"))
    .padding(10)
    .border({ radius: 5 })
  }
  .alignItems(VerticalAlign.Center)
}

@Component
export struct Detail {
  @State item: AuthData = new AuthData()
  @State progress: number = 0;
  @Consume("kvStore") kvStore: distributedKVStore.DeviceKVStore;
  private changed: boolean = false
  private timer?: number;

  aboutToAppear(): void {
    this.timer = setInterval(() => {
      let temp = this.item
      this.item = new AuthData()
      this.item = temp
    }, 1000)
  }

  aboutToDisappear(): void {
    if (this.timer) {
      clearInterval(this.timer)
    }
  }

  onSteamButtonPressed() {
    let data = new SteamData()
    data.detail = this

    let params = new PromptParams<SteamData>(this.getUIContext(), wrapBuilder(buildSteamInput), data)
    params.open()
  }

  @Builder
  buildExternalView() {
    if (this.item.issuer == "Steam") {
      Button("设置 Steam 认证信息")
        .onClick(() => this.onSteamButtonPressed())
      if (this.item.external != undefined && this.item.external.length > 0) {
        Row() {
          Text("认证信息")
            .width("20%")
            .textAlign(TextAlign.Start)
          Text(this.item.external)
            .width("70%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)
      }
    }
  }

  build() {
    NavDestination() {
      Column() {
        Row() {
          Text(this.item.password)
            .fontSize(40)
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Center)
            .copyOption(CopyOptions.LocalDevice)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)
        .margin(20)

        Row() {
          Text("别名")
            .width("20%")
            .textAlign(TextAlign.Start)
          TextInput({ text: this.item.alias })
            .width("70%")
            .textAlign(TextAlign.End)
            .type(InputType.Normal)
            .maxLength(20)
            .onChange((str) => {
              this.item.alias = str;
              this.changed = true
            })
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Text("账号")
            .width("20%")
            .textAlign(TextAlign.Start)
          Text(this.item.account)
            .width("70%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Text("发行商")
            .width("20%")
            .textAlign(TextAlign.Start)
          Text(this.item.issuer)
            .width("70%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Text("位数")
            .width("20%")
            .textAlign(TextAlign.Start)
          Text(this.item.digits.toString())
            .width("70%")
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        this.buildExternalView()
      }
    }
    .title(this.item.alias)

    //.onBackPressed(() => this.onSelfBackPress())
  }

  onSelfBackPress(): boolean {
    if (this.changed) {
      let authString = JSON.stringify(this.item)
      this.kvStore.put(`/data/auth/${this.item.id}`, authString)
    }
    return false
  }
}
