import { common, ConfigurationConstant } from "@kit.AbilityKit";

@Component
export struct Setting {
  @Consume('NavPathStack') pageStack: NavPathStack;
  @StorageLink("enableAutoDarkMode") enableAutoDarkMode: boolean = true
  @StorageLink("enableSafeMode") enableSafeMode: boolean = false

  aboutToAppear(): void {
  }

  build() {
    NavDestination() {
      Column() {
        Row(){
          Text("跟随系统深色模式")
            .width("80%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          Toggle({type: ToggleType.Switch, isOn: this.enableAutoDarkMode})
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
        Row(){
          Text("启用安全模式")
            .width("80%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          Toggle({type: ToggleType.Switch, isOn: this.enableSafeMode})
            .onChange((isOn) => {
              this.enableSafeMode = isOn
            })
        }
        .height(40)
        .alignItems(VerticalAlign.Center)
      }
    }
    .title("设置")
  }
}