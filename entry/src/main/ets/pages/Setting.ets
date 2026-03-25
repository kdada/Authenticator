import { bundleManager, common, ConfigurationConstant } from '@kit.AbilityKit';
import { fileIo as fs, picker } from '@kit.CoreFileKit';
import { AuthDataStore, DefaultToastDuration, parseSteamExternalAuthData } from './Base';
import { ShowPrivacyView } from './PrivacyView';
import { proxyServer } from './proxy/Proxy';
import { IconPackManager } from '../components/IconPackManager';

@Component
export struct Setting {
  @StorageLink("enableAutoDarkMode") enableAutoDarkMode: boolean = true
  @StorageLink("enableSafeMode") enableSafeMode: boolean = false
  @StorageLink("hideToken") hideToken: boolean = false
  @StorageLink("enhanceNetwork") enhanceNetwork: boolean = false
  @StorageLink("privacyState") privacyState: string = "Unknown"
  @StorageLink("developmentMode") developmentMode: boolean = false
  @Consume("authDataStore") authDataStore: AuthDataStore
  private developmentCounter: number = 0
  private appInfo?: bundleManager.BundleInfo = undefined

  aboutToAppear(): void {
    this.appInfo = bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION)
  }

  getPrivacyState(): Resource {
    return this.privacyState == "Agreed" ? $r('app.string.setting_privacy_agreed') :
      $r('app.string.setting_privacy_disagreed')
  }

  build() {
    NavDestination() {
      RelativeContainer() {
        Column() {
          Row() {
            Text($r('app.string.setting_auto_dark'))
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
            Text($r('app.string.setting_auto_dark_desc'))
              .padding({ left: 30, right: 20 })
              .fontSize(12)
          }
          .width("100%")

          Row() {
            Text($r('app.string.setting_safe_mode'))
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
            Text($r('app.string.setting_safe_mode_desc'))
              .padding({ left: 30, right: 20 })
              .fontSize(12)
          }
          .width("100%")

          Row() {
            Text($r('app.string.setting_hide_token'))
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
            Text($r('app.string.setting_hide_token_desc'))
              .padding({ left: 30, right: 20 })
              .fontSize(12)
          }
          .width("100%")

          IconPackManager()
            .margin({ top: 12, bottom: 12 })
            .padding({ left: 20, right: 20 })

          if (proxyServer != "") {
            Row() {
              Text($r('app.string.setting_network'))
                .width("80%")
                .fontWeight(FontWeight.Bold)
                .textAlign(TextAlign.Start)
                .onClick(() => {
                  this.developmentCounter++
                  if (this.developmentCounter >= 10) {
                    this.developmentCounter = 0
                    this.developmentMode = !this.developmentMode
                    this.getUIContext().getPromptAction().showToast({
                      duration: DefaultToastDuration,
                      message: this.developmentMode ? $r('app.string.setting_network_enabled') :
                        $r('app.string.setting_network_disabled')
                    })
                  }
                })
              Toggle({ type: ToggleType.Switch, isOn: this.enhanceNetwork })
                .onChange((isOn) => {
                  this.enhanceNetwork = isOn
                })
            }
            .height(40)
            .alignItems(VerticalAlign.Center)

            Row() {
              Text($r('app.string.setting_network_desc'))
                .padding({ left: 30, right: 20 })
                .fontSize(12)
            }
            .width("100%")
          }

          Row() {
            Text($r('app.string.setting_privacy_policy'))
              .width("75%")
              .fontWeight(FontWeight.Bold)
              .textAlign(TextAlign.Start)
            Text(this.getPrivacyState())
              .width("15%")
              .fontWeight(FontWeight.Bold)
              .onClick(() => {
                ShowPrivacyView(this.getUIContext(), (state: string) => {
                  this.privacyState = state
                })
              })
          }
          .height(40)
          .alignItems(VerticalAlign.Center)

          Text($r('app.string.setting_privacy_desc_prefix', this.getPrivacyState()))
            .padding({ left: 30, right: 20 })


          Row() {
            Button($r('app.string.setting_export'))
              .onClick(() => {
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
                      duration: DefaultToastDuration,
                      message: $r('app.string.setting_export_pick_single')
                    })
                    return
                  }
                  let file = fs.openSync(uris[0], fs.OpenMode.READ_WRITE)
                  let data = JSON.stringify(this.authDataStore.items, (key: string, value: string | number) => {
                    if (key == "password" || key == "tokenIconPath"
                      || key == "uuid"||key=="order"||key=="id") {
                      return undefined;
                    }
                    // 使前面版本external的导出改变（如果打开过Detail页面，这里的external已经改变了）
                    if (key == "external" && value != "") {
                      let authdata = JSON.parse(value as string) as Record<string, Object>
                      return JSON.stringify(parseSteamExternalAuthData(authdata))
                    }
                    return value;
                  })
                  fs.writeSync(file.fd, data)
                  fs.close(file)
                  this.getUIContext().getPromptAction().showToast({
                    duration: DefaultToastDuration,
                    message: $r('app.string.setting_export_success')
                  })
                  return
                })
              })
              .margin({ top: 50, bottom: 10 })
          }
          .alignItems(VerticalAlign.Center)

          Row() {
            Text($r('app.string.setting_export_desc'))
              .padding({ left: 30, right: 20 })
              .fontSize(12)
          }
          .width("100%")
        }

        Column() {
          Text($r('app.string.setting_version_format', this.appInfo?.versionName, this.appInfo?.versionCode))
            .margin(5)
            .copyOption(CopyOptions.LocalDevice)
            .fontSize(12)
            .fontWeight(FontWeight.Bold)
          Text($r('app.string.setting_qq_group_format', '931132608'))
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
    .title($r('app.string.setting_title'))
  }
}
