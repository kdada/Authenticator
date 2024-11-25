import { bundleManager, common, ConfigurationConstant } from "@kit.AbilityKit";
import { picker, fileIo as fs } from "@kit.CoreFileKit";
import { AuthDataStore } from "./Base";

@Component
export struct Setting {
  @StorageLink("enableAutoDarkMode") enableAutoDarkMode: boolean = true
  @StorageLink("enableSafeMode") enableSafeMode: boolean = false
  @StorageLink("hideToken") hideToken: boolean = false
  @Consume("authDataStore") authDataStore: AuthDataStore
  private appInfo?: bundleManager.BundleInfo = undefined

  aboutToAppear(): void {
    this.appInfo = bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION)
  }

  build() {
    NavDestination() {
      RelativeContainer() {
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
            Text("启用后，系统打开或关闭深色模式时，App 也跟随切换。")
              .padding({ left: 30, right: 20 })
              .fontSize(12)
          }
          .width("100%")

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

          Row() {
            Text("启用后，打开 App 时需要通过生物识别（人脸识别，指纹，密码）解锁，解锁成功后才能查看令牌。\n启用后会在下次打开 App 时生效。")
              .padding({ left: 30, right: 20 })
              .fontSize(12)
          }
          .width("100%")

          Row() {
            Text("隐藏令牌")
              .width("80%")
              .fontWeight(FontWeight.Bold)
              .textAlign(TextAlign.Start)
            Toggle({ type: ToggleType.Switch, isOn: this.hideToken })
              .onChange((isOn) => {
                this.hideToken = isOn
              })
          }
          .height(40)
          .alignItems(VerticalAlign.Center)

          Row() {
            Text("启用后，在 App 首页的令牌将显示为星号，点击星号显示令牌。\n详情页不受此设置影响，直接显示令牌。")
              .padding({ left: 30, right: 20 })
              .fontSize(12)
          }
          .width("100%")

          Row() {
            Button("导出令牌密钥文件（*.atsf）")
              .onClick((event: ClickEvent) => {
                let saveOptions = new picker.DocumentSaveOptions()
                saveOptions.newFileNames = ["authenticator.atsf"]
                saveOptions.fileSuffixChoices = [".atsf"]
                let viewPicker = new picker.DocumentViewPicker(getContext(this))
                viewPicker.save(saveOptions).then((uris) => {
                  if (uris.length <= 0) {
                    return
                  }
                  if (uris.length != 1) {
                    this.getUIContext().getPromptAction().showToast({
                      message: "请选择一个文件保存路径"
                    })
                    return
                  }
                  let file = fs.openSync(uris[0], fs.OpenMode.READ_WRITE)
                  let data = JSON.stringify(this.authDataStore.items)
                  fs.writeSync(file.fd, data)
                  fs.close(file)
                  this.getUIContext().getPromptAction().showToast({
                    message: "导出完成"
                  })
                  return
                })
              })
              .margin({ top: 20, bottom: 10 })
          }
          .alignItems(VerticalAlign.Center)

          Row() {
            Text("令牌密钥文件包含 App 内所有令牌的密钥，文件内容没有加密，请小心保存以免泄露。")
              .padding({ left: 30, right: 20 })
              .fontSize(12)
          }
          .width("100%")

          Text("使用说明")
            .fontWeight(FontWeight.Bold)
            .margin(20)

        }
        .id("setting")

        Scroll(new Scroller()) {
          Text(
            "（一）标准 2FA 添加方式\n" +
              "1. 点击 App 首页右上角扫码按钮，扫描 2FA 二维码\n" +
              "2. 如果无法扫码，则可以点击 App 首页右上角加号按钮，手动添加\n" +
              "\n" +
              "（二）Steam 添加方式\n" +
              "1. 在电脑上下载 steamguard.exe，下载地址：https://github.com/dyc3/steamguard-cli/releases\n" +
              "2. 在 Windows 终端中执行 ./steamguard.exe setup，登陆 Steam，根据提示在 Steam 中添加验证器\n" +
              "2.1 如果在第 2 步中选择撤销之前的验证器，则 Steam 交易会被禁用 15 天\n" +
              "2.2 如果在第 2 步中选择迁移之前的验证器，则 Steam 交易会被禁用 2 天，建议选择迁移\n" +
              "3. 在 Windows 终端中运行 ./steamguard.exe qr，即可显示二维码，再使用 App 扫码即可\n" +
              "\n" +
              "（如果需要 Steam 扫码登陆以及交易确认功能，请继续按照下述步骤添加认证信息）\n" +
              "\n" +
              "4. 在 Windows 终端中运行 ./steamguard.exe decrypt ，前往软件给出的目录，找到 {Steam 用户名}.mafile\n" +
              "5. 用任意文本编辑器打开 {Steam 用户名}.maFile 文件\n" +
              "6. 复制文件中的全部内容，通过微信或者其他工具发送到手机上\n" +
              "7. 在 App 首页点击刚刚添加完成的 Steam 条目，进入详情页面\n" +
              "8. 在详情页面，点击【设置 Steam 认证信息】按钮，在弹出框中将第 6 步复制的内容粘贴进去，确认即可\n" +
              "9. 此时详情页面右上角会增加一个扫码按钮和一个列表按钮，可以进行 Steam 扫码登陆和交易确认\n" +
              "\n" +
              "（特别说明：如果你的网络无法连接 Steam，扫码登陆和交易确认功能可能都无法正常工作）\n" +
              "\n"
          )
            .width("100%")
            .textAlign(TextAlign.Start)
            .padding({ left: 20, right: 20 })
            .copyOption(CopyOptions.LocalDevice)
        }
        .scrollable(ScrollDirection.Vertical)
        .scrollBar(BarState.Auto)
        .edgeEffect(EdgeEffect.Spring)
        .margin({ bottom: 20 })
        .alignRules({
          top: { anchor: "setting", align: VerticalAlign.Bottom },
          bottom: { anchor: "version", align: VerticalAlign.Top },
        })

        Column() {
          Text(`版本：${this.appInfo?.versionName}(${this.appInfo?.versionCode})`)
            .margin(5)
            .copyOption(CopyOptions.LocalDevice)
            .fontSize(12)
            .fontWeight(FontWeight.Bold)
          Text(`用户 QQ 群：931132608`)
            .margin(5)
            .copyOption(CopyOptions.LocalDevice)
            .fontSize(12)
            .fontWeight(FontWeight.Bold)
        }
        .width("100%")
        .alignItems(HorizontalAlign.Center)
        .alignRules({
          bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
        })
        .id("version")
      }
    }
    .title("设置")
  }
}