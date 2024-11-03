import { common, ConfigurationConstant } from "@kit.AbilityKit";

@Component
export struct Setting {
  @StorageLink("enableAutoDarkMode") enableAutoDarkMode: boolean = true
  @StorageLink("enableSafeMode") enableSafeMode: boolean = false

  aboutToAppear(): void {
  }

  build() {
    NavDestination() {
      Column() {
        Row() {
          Text("跟随系统深色模式")
            .width("80%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          Toggle({ type: ToggleType.Switch, isOn: this.enableAutoDarkMode })
            .onChange((isOn) => {
              this.enableAutoDarkMode = isOn
              let ctx = getContext(this) as common.UIAbilityContext
              if (this.enableAutoDarkMode) {
                ctx.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);
              } else {
                ctx.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_LIGHT)
              }
            })
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Row() {
          Text("启用安全模式")
            .width("80%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          Toggle({ type: ToggleType.Switch, isOn: this.enableSafeMode })
            .onChange((isOn) => {
              this.enableSafeMode = isOn
            })
        }
        .height(40)
        .alignItems(VerticalAlign.Center)

        Text("使用说明")
          .fontWeight(FontWeight.Bold)
          .margin(20)

        Scroll(new Scroller()) {
          Text(
            "（一）标准 2FA 添加方式\n" +
              "1. 点击 App 首页右上角扫码按钮，扫描 2FA 二维码\n" +
              "2. 如果无法扫码，则可以点击 App 首页右上角加号按钮，直接输入 2FA URI\n" +
              "\n" +
              "（二）Steam 添加方式\n" +
              "1. 在电脑上下载 steamguard-cli.exe，下载地址：https://github.com/dyc3/steamguard-cli/releases\n" +
              "2. 在 Windows 终端中执行 ./steamguard-cli.exe setup，登陆 Steam，根据提示在 Steam 中添加验证器。\n" +
              "2.1 如果在第 2 步中选择撤销之前的验证器，则 Steam 交易会被禁用 15 天。\n" +
              "2.2 如果在第 2 步中选择迁移之前的验证器，则 Steam 交易会被禁用 2 天，建议选择迁移。\n" +
              "3. 在 Windows 终端中运行 ./steamguard-cli.exe qr，即可显示二维码，再使用 App 扫码即可。\n" +
              "\n" +
              "（如果需要 Steam 扫码登陆以及交易确认功能，请继续按照下述步骤添加认证信息）\n" +
              "\n" +
              "4. 在 steamguard-cli 命令的同一个目录下找到名为 maFiles 的文件夹，进入文件夹。\n" +
              "5. 在 maFiles 文件夹中打开 {Steam 用户名}.maFile 文件，这是一个 JSON 文件，可以用任意文本编辑器打开。\n" +
              "6. 复制文件中的全部内容，通过微信或者其他工具发送到手机上。\n" +
              "7. 在 App 首页点击刚刚添加完成的 Steam 条目，进入详情页面。\n" +
              "8. 在详情页面，点击【设置 Steam 认证信息】按钮，在弹出框中将第 6 步复制的内容粘贴进去，确认即可。\n" +
              "9. 此时详情页面右上角会增加一个扫码按钮和一个列表按钮，可以进行 Steam 扫码登陆和交易确认。\n" +
              "\n" +
              "（特别说明：如果你的网络无法连接 Steam，扫码登陆和交易确认功能可能都无法正常工作）\n" +
              "\n"
          )
            .width("100%")
            .textAlign(TextAlign.Start)
            .padding({ left: 20 })
            .copyOption(CopyOptions.LocalDevice)
        }
        .scrollable(ScrollDirection.Vertical)
        .scrollBar(BarState.Auto)
        .edgeEffect(EdgeEffect.Spring)
        .height(400)
      }
    }
    .title("设置")
  }
}