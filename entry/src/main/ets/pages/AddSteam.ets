@Component
export struct AddSteamToken {
  @Consume("pageStack") pageStack: NavPathStack;

  build() {
    NavDestination() {
      RelativeContainer() {
        Column() {
          Text("流程说明")
            .fontWeight(FontWeight.Bold)
            .margin(10)
          Text("1. 登录 Steam\n2. 向 Steam 中添加令牌\n3. 将 Steam 令牌保存在当前 App 中")
        }
        .alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })

        Button("立即开始")
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
      }
    }
    .title("添加 Steam 令牌")
  }
}

@Component
export struct SteamLogin {
  @Consume("pageStack") pageStack: NavPathStack;

  build() {
    NavDestination() {
      RelativeContainer() {
        Column() {
          Text("用户名")
            .fontWeight(FontWeight.Bold)
            .margin(10)
        }
        .alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })

        Button("登录")
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
      }
    }
    .title("添加 Steam 令牌")
  }
}

@Component
export struct SteamMFALogin {
  @Consume("pageStack") pageStack: NavPathStack;

  build() {
    NavDestination() {
      RelativeContainer() {
        Column() {
          Text("Steam 启用了多重身份验证")
            .fontWeight(FontWeight.Bold)
            .margin(10)
        }
        .alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })

        Button("完成登录")
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
      }
    }
    .title("添加 Steam 令牌")
  }
}

@Component
export struct SteamLink {
  @Consume("pageStack") pageStack: NavPathStack;

  build() {
    NavDestination() {
      RelativeContainer() {
        Column() {
          Text("向 Steam 添加 Token")
            .fontWeight(FontWeight.Bold)
            .margin(10)
        }
        .alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })

        Button("添加")
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
      }
    }
    .title("添加 Steam 令牌")
  }
}

@Component
export struct SteamConfirmLink {
  @Consume("pageStack") pageStack: NavPathStack;

  build() {
    NavDestination() {
      RelativeContainer() {
        Column() {
          Text("向 Steam 添加 Token")
            .fontWeight(FontWeight.Bold)
            .margin(10)
        }
        .alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })

        Button("添加")
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
      }
    }
    .title("添加 Steam 令牌")
  }
}

@Component
export struct SteamTransferAuthenticator {
  @Consume("pageStack") pageStack: NavPathStack;

  build() {
    NavDestination() {
      RelativeContainer() {
        Column() {
          Text("向 Steam 添加 Token")
            .fontWeight(FontWeight.Bold)
            .margin(10)
        }
        .alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })

        Button("添加")
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
      }
    }
    .title("添加 Steam 令牌")
  }
}

@Component
export struct SteamRevokeAuthenticator {
  @Consume("pageStack") pageStack: NavPathStack;

  build() {
    NavDestination() {
      RelativeContainer() {
        Column() {
          Text("向 Steam 添加 Token")
            .fontWeight(FontWeight.Bold)
            .margin(10)
        }
        .alignRules({
          middle: { anchor: "__container__", align: HorizontalAlign.Center },
          center: { anchor: "__container__", align: VerticalAlign.Center }
        })

        Button("添加")
          .width(150)
          .margin({ bottom: 20 })
          .alignRules({
            middle: { anchor: "__container__", align: HorizontalAlign.Center },
            bottom: { anchor: "__container__", align: VerticalAlign.Bottom }
          })
      }
    }
    .title("添加 Steam 令牌")
  }
}