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
              .margin({ top: 50, bottom: 10 })
          }
          .alignItems(VerticalAlign.Center)

          Row() {
            Text("令牌密钥文件包含 App 内所有令牌的密钥，文件内容没有加密，请小心保存以免泄露。")
              .padding({ left: 30, right: 20 })
              .fontSize(12)
          }
          .width("100%")
        }

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