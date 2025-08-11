import { AuthData, AuthDataStore, DefaultToastDuration } from "./Base"
import { picker, fileIo as fs } from "@kit.CoreFileKit";
import { util } from "@kit.ArkTS";

@Component
export struct Add {
  @Consume("pageStack") pageStack: NavPathStack;
  @Consume("authDataStore") authDataStore: AuthDataStore
  @StorageLink("developmentMode") developmentMode: boolean = false

  build() {
    NavDestination() {
      Scroll() {
        Column() {
          Column() {
            Row() {
              RelativeContainer() {
                Text("通过 TOTP 密钥添加")
                  .fontWeight(FontWeight.Bold)
                  .padding({ left: 10 })
                  .alignRules({
                    left: { anchor: "__container__", align: HorizontalAlign.Start },
                    center: { anchor: "__container__", align: VerticalAlign.Center },
                  })

                SymbolGlyph($r("sys.symbol.chevron_right"))
                  .fontSize(30)
                  .padding({ right: 10 })
                  .fontColor([$r("app.color.vendor_icon_color")])
                  .alignRules({
                    right: { anchor: "__container__", align: HorizontalAlign.End },
                    center: { anchor: "__container__", align: VerticalAlign.Center },
                  })
              }
            }
            .height(40)
            .width("100%")
            .onClick(() => {
              this.pageStack.pushPathByName("AddSecret", undefined)
            })

            Row() {
              Text("TOTP 密钥是由 A-Z，2-7 组成的字符串，例如：ABCDEFGHIJ234567")
                .padding({ left: 20 })
                .fontSize(12)
            }
            .width("100%")
          }
          .margin(10)

          Column() {
            Row() {
              RelativeContainer() {
                Text("通过 TOTP URI 添加")
                  .fontWeight(FontWeight.Bold)
                  .padding({ left: 10 })
                  .alignRules({
                    left: { anchor: "__container__", align: HorizontalAlign.Start },
                    center: { anchor: "__container__", align: VerticalAlign.Center },
                  })

                SymbolGlyph($r("sys.symbol.chevron_right"))
                  .fontSize(30)
                  .padding({ right: 10 })
                  .fontColor([$r("app.color.vendor_icon_color")])
                  .alignRules({
                    right: { anchor: "__container__", align: HorizontalAlign.End },
                    center: { anchor: "__container__", align: VerticalAlign.Center },
                  })
              }
            }
            .height(40)
            .width("100%")
            .onClick(() => {
              this.pageStack.pushPathByName("AddUri", undefined)
            })

            Row() {
              Text("TOTP URI 是一串以 otpauth://totp/ 开头的链接，例如：otpauth://totp/Example:alice@example.com?secret=ABCDEFGHIJ234567&issuer=Example")
                .padding({ left: 20 })
                .fontSize(12)
            }
            .width("100%")
          }
          .margin(10)

          Column() {
            Row() {
              RelativeContainer() {
                Text("从令牌密钥文件（*.atsf）恢复")
                  .fontWeight(FontWeight.Bold)
                  .padding({ left: 10 })
                  .alignRules({
                    left: { anchor: "__container__", align: HorizontalAlign.Start },
                    center: { anchor: "__container__", align: VerticalAlign.Center },
                  })

                SymbolGlyph($r("sys.symbol.chevron_right"))
                  .fontSize(30)
                  .padding({ right: 10 })
                  .fontColor([$r("app.color.vendor_icon_color")])
                  .alignRules({
                    right: { anchor: "__container__", align: HorizontalAlign.End },
                    center: { anchor: "__container__", align: VerticalAlign.Center },
                  })
              }
            }
            .height(40)
            .width("100%")
            .onClick(() => {
              let selectOptions = new picker.DocumentSelectOptions()
              selectOptions.maxSelectNumber = 1
              selectOptions.fileSuffixFilters = [".atsf"]
              let viewPicker = new picker.DocumentViewPicker(getContext(this))
              viewPicker.select(selectOptions).then((uris) => {
                if (uris.length <= 0) {
                  return
                }
                if (uris.length != 1) {
                  this.getUIContext().getPromptAction().showToast({
                    duration: DefaultToastDuration,
                    message: "请选择一个令牌密钥文件"
                  })
                  return
                }
                try {
                  let file = fs.openSync(uris[0], fs.OpenMode.READ_ONLY)
                  let fileStat = fs.statSync(file.fd)
                  let buffer = new ArrayBuffer(fileStat.size)
                  fs.readSync(file.fd, buffer)
                  fs.close(file)
                  let data = util.TextDecoder.create("utf-8").decodeToString(new Uint8Array(buffer))
                  this.authDataStore.recoverAuthItem(data)
                  this.getUIContext().getPromptAction().showToast({
                    duration: DefaultToastDuration,
                    message: "恢复完成"
                  })
                } catch (e) {
                  this.getUIContext().getPromptAction().showToast({
                    duration: DefaultToastDuration,
                    message: `恢复错误：${e}`
                  })
                }
                return
              })
            })

            Row() {
              Text("令牌密钥文件为 *.atsf，可以从当前 App 的设置中导出。对令牌密钥文件做任何更改都可能导致无法恢复。\n注意：恢复操作不会覆盖已添加到 App 的令牌密钥，请自行删除重复的条目")
                .padding({ left: 20 })
                .fontSize(12)
            }
            .width("100%")
          }
          .margin(10)

          Column() {
            Row() {
              RelativeContainer() {
                Text("添加 Steam 令牌")
                  .fontWeight(FontWeight.Bold)
                  .padding({ left: 10 })
                  .alignRules({
                    left: { anchor: "__container__", align: HorizontalAlign.Start },
                    center: { anchor: "__container__", align: VerticalAlign.Center },
                  })

                SymbolGlyph($r("sys.symbol.chevron_right"))
                  .fontSize(30)
                  .padding({ right: 10 })
                  .fontColor([$r("app.color.vendor_icon_color")])
                  .alignRules({
                    right: { anchor: "__container__", align: HorizontalAlign.End },
                    center: { anchor: "__container__", align: VerticalAlign.Center },
                  })
              }
            }
            .height(40)
            .width("100%")
            .onClick(() => {
              if (this.developmentMode || true) {
                this.pageStack.pushPathByName("AddSteamToken", undefined)
              } else {
                this.pageStack.pushPathByName("AddSteamSecret", undefined)
              }
            })

            Row() {
              Text("支持 5 位令牌，扫码登陆和交易确认")
                .padding({ left: 20 })
                .fontSize(12)
            }
            .width("100%")
          }
          .margin(10)
        }
      }
    }
    .title("添加")
  }
}


@Component
export struct AddSecret {
  @Consume("pageStack") pageStack: NavPathStack;
  @Consume("authDataStore") authDataStore: AuthDataStore;
  @State provider: string = "Github"
  @State isOtherProvider: boolean = false
  @State tokenLength: number = 6
  @State account: string = ""
  @State secret: string = ""

  build() {
    NavDestination() {
      Column() {
        Row() {
          Text("提供方")
            .width("30%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          Button(this.isOtherProvider ? "其他" : this.provider)
            .width("60%")
            .bindMenu([
              {
                value: "Github",
                action: () => {
                  this.isOtherProvider = false
                  this.provider = "Github"
                },
              },
              {
                value: "Gitlab",
                action: () => {
                  this.isOtherProvider = false
                  this.provider = "Gitlab"
                },
              },
              {
                value: "Google",
                action: () => {
                  this.isOtherProvider = false
                  this.provider = "Google"
                },
              },
              {
                value: "Microsoft",
                action: () => {
                  this.isOtherProvider = false
                  this.provider = "Microsoft"
                },
              },
              {
                value: "其他",
                action: () => {
                  if (!this.isOtherProvider) {
                    this.provider = ""
                  }
                  this.isOtherProvider = true
                },
              }
            ])
        }
        .height(40)
        .alignItems(VerticalAlign.Center)
        .margin({ bottom: 10 })

        if (this.isOtherProvider) {
          Row() {
            TextInput({ text: this.provider, placeholder: "请输入提供方名称" })
              .width("60%")
              .fontWeight(FontWeight.Bold)
              .textAlign(TextAlign.End)
              .maxLength(50)
              .onChange((v) => this.provider = v.trim())
          }
          .alignSelf(ItemAlign.End)
          .margin({ bottom: 10 })
        }

        Row() {
          Text("账号")
            .width("30%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          TextInput({ text: this.account, placeholder: "用户名或邮箱" })
            .width("60%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.End)
            .maxLength(50)
            .onChange((v) => this.account = v.trim())
        }
        .height(40)
        .alignItems(VerticalAlign.Center)
        .margin({ bottom: 10 })

        Row() {
          Text("密钥")
            .width("30%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          TextInput({ text: this.secret, placeholder: "由 A-Z，2-7 组成的字符串" })
            .width("60%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.End)
            .maxLength(50)
            .onChange((v) => this.secret = v.trim())
        }
        .margin({ bottom: 10 })

        Row() {
          Text("令牌位数")
            .width("30%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          Button(this.tokenLength.toString())
            .width("60%")
            .bindMenu([
              {
                value: "6",
                action: () => {
                  this.tokenLength = 6
                },
              },
              {
                value: "8",
                action: () => {
                  this.tokenLength = 8
                },
              }
            ])
        }
        .height(40)
        .alignItems(VerticalAlign.Center)
        .margin({ bottom: 10 })

        Row() {
          Button('添加')
            .onClick(() => {
              try {
                if (this.secret.length <= 1 || !this.secret.match(/^[A-Z2-7]+$/)) {
                  throw new Error("密钥只能由 A-Z，2-7 组成，至少 2 个字符")
                }
                let encodedProvider = encodeURIComponent(this.provider)
                let encodedAccount = encodeURIComponent(this.account)
                let uri =
                  `otpauth://totp/${encodedProvider}:${encodedAccount}?secret=${this.secret}&issuer=${encodedProvider}&digits=${this.tokenLength}`
                this.authDataStore.addAuthItem(uri)
                this.pageStack.clear()
              } catch (e) {
                this.getUIContext().getPromptAction().showToast({
                  duration: DefaultToastDuration,
                  message: `TOTP 错误：${e}`
                })
              }
            })
            .width(150)
            .enabled(this.provider != "" && this.account != "" && this.secret != "")
        }
      }
    }
    .title("通过 TOTP 密钥添加")
  }
}

@Component
export struct AddUri {
  @State uri: string = "";
  @Consume("pageStack") pageStack: NavPathStack;
  @Consume("authDataStore") authDataStore: AuthDataStore;

  build() {
    NavDestination() {
      Row() {
        Column() {
          Text("输入 TOTP URI")
            .fontSize(30)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
          Text("如果需要同时添加多个，每行一个 URI")
            .fontSize(14)
            .margin({ bottom: 20 })
          TextArea({ text: "", placeholder: "otpauth://totp/xxx?secret=yyy" })
            .height(150)
            .margin({ bottom: 20 })
            .onChange((value) => {
              this.uri = value
            })
          Row() {
            Button('添加')
              .onClick(() => {
                if (this.uri == "") {
                  return
                }

                let uris = this.uri.split("\n")
                let count = 0
                for (let i = 0; i < uris.length; i++) {
                  let uri = uris[i].trim()
                  if (uri == "") {
                    continue
                  }
                  try {
                    this.authDataStore.addAuthItem(uri)
                    count++
                  } catch (e) {
                    this.getUIContext().getPromptAction().showToast({
                      duration: DefaultToastDuration,
                      message: `已添加 ${count} 个，第 ${i + 1} 行的 TOTP URI 错误：${e}`
                    })
                    return
                  }
                }
                this.pageStack.clear()
              })
              .width(150)
              .enabled(this.uri != "")
          }
          .justifyContent(FlexAlign.SpaceEvenly)
        }
        .padding(10)
        .border({ radius: 5 })
      }
      .alignItems(VerticalAlign.Center)
      .width("90%")
      .height("90%")
    }
    .title("通过 TOTP URI 添加")
  }
}

@Component
export struct AddSteamSecret {
  @Consume("pageStack") pageStack: NavPathStack;
  @Consume("authDataStore") authDataStore: AuthDataStore;
  @State account: string = ""
  @State secret: string = ""

  build() {
    NavDestination() {
      Column() {
        Row() {
          Text("提供方")
            .width("30%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          Text("Steam")
            .width("60%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)
        .margin({ bottom: 10 })

        Row() {
          Text("账号")
            .width("30%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          TextInput({ text: this.account, placeholder: "用户名或邮箱" })
            .width("60%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.End)
            .maxLength(50)
            .onChange((v) => this.account = v.trim())
        }
        .height(40)
        .alignItems(VerticalAlign.Center)
        .margin({ bottom: 10 })

        Row() {
          Text("密钥")
            .width("30%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          TextInput({ text: this.secret, placeholder: "由 A-Z，2-7 组成的字符串" })
            .width("60%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.End)
            .maxLength(50)
            .onChange((v) => this.secret = v.trim())
        }
        .margin({ bottom: 10 })

        Row() {
          Text("令牌位数")
            .width("30%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          Text("5")
            .width("60%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.End)
        }
        .height(40)
        .alignItems(VerticalAlign.Center)
        .margin({ bottom: 10 })

        Row() {
          Button('添加')
            .onClick(() => {
              try {
                if (this.secret.length <= 1 || !this.secret.match(/^[A-Z2-7]+$/)) {
                  throw new Error("密钥只能由 A-Z，2-7 组成，至少 2 个字符")
                }
                let encodedProvider = encodeURIComponent("Steam")
                let encodedAccount = encodeURIComponent(this.account)
                let uri =
                  `otpauth://totp/${encodedProvider}:${encodedAccount}?secret=${this.secret}&issuer=${encodedProvider}&digits=5`
                this.authDataStore.addAuthItem(uri)
                this.pageStack.clear()
              } catch (e) {
                this.getUIContext().getPromptAction().showToast({
                  duration: DefaultToastDuration,
                  message: `TOTP 错误：${e}`
                })
              }
            })
            .width(150)
            .enabled(this.account != "" && this.secret != "")
        }
      }
    }
    .title("添加 Steam 令牌")
  }
}