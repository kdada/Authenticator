import { AuthDataStore, DefaultToastDuration } from './Base';
import { fileIo as fs, picker } from '@kit.CoreFileKit';
import { util } from '@kit.ArkTS';


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
                Text($r('app.string.add_totp_secret_title'))
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
              Text($r('app.string.add_totp_secret_desc'))
                .padding({ left: 20 })
                .fontSize(12)
            }
            .width("100%")
          }
          .margin(10)

          Column() {
            Row() {
              RelativeContainer() {
                Text($r('app.string.add_totp_uri_title'))
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
              Text($r('app.string.add_totp_uri_desc'))
                .padding({ left: 20 })
                .fontSize(12)
            }
            .width("100%")
          }
          .margin(10)

          Column() {
            Row() {
              RelativeContainer() {
                Text($r('app.string.add_restore_title'))
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
                    message: $r('app.string.add_restore_pick_single')
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
                  let GeneratedDestructArray_1 = this.authDataStore.recoverAuthItem(data)
                  let hasExist = GeneratedDestructArray_1[0];
                  let total = GeneratedDestructArray_1[1];
                  this.getUIContext().getPromptAction().showToast({
                    duration: DefaultToastDuration,
                    message: $r('app.string.add_restore_success', total, hasExist)
                  })
                } catch (e) {
                  this.getUIContext().getPromptAction().showToast({
                    duration: DefaultToastDuration,
                    message: $r('app.string.add_restore_error_format', `${e}`)
                  })
                }
                return
              })
            })

            Row() {
              Text($r('app.string.add_restore_desc'))
                .padding({ left: 20 })
                .fontSize(12)
            }
            .width("100%")
          }
          .margin(10)

          Column() {
            Row() {
              RelativeContainer() {
                Text($r('app.string.add_steam_title'))
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
              Text($r('app.string.add_steam_desc'))
                .padding({ left: 20 })
                .fontSize(12)
            }
            .width("100%")
          }
          .margin(10)
        }
      }
    }
    .title($r('app.string.add_title'))
  }
}


@Component
export struct AddSecret {
  @Consume("pageStack") pageStack: NavPathStack;
  @Consume("authDataStore") authDataStore: AuthDataStore;
  @State provider: string = ""
  @State tokenLength: number = 6
  @State account: string = ""
  @State secret: string = ""

  build() {
    NavDestination() {
      Column() {
        Row() {
          Text($r('app.string.add_secret_provider'))
            .width("30%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          TextInput({ text: this.provider, placeholder: $r('app.string.add_secret_provider_placeholder') })
            .width("60%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.End)
            .maxLength(50)
            .onChange((v) => this.provider = v.trim())
        }
        .height(40)
        .alignItems(VerticalAlign.Center)
        .margin({ bottom: 10 })

        Row() {
          Text($r('app.string.add_secret_account'))
            .width("30%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          TextInput({ text: this.account, placeholder: $r('app.string.add_secret_account_placeholder') })
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
          Text($r('app.string.add_secret_secret'))
            .width("30%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          TextInput({ text: this.secret, placeholder: $r('app.string.add_secret_secret_placeholder') })
            .width("60%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.End)
            .maxLength(50)
            .onChange((v) => this.secret = v.trim())
        }
        .margin({ bottom: 10 })

        Row() {
          Text($r('app.string.add_secret_digits'))
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
          Button($r('app.string.common_add'))
            .onClick(() => {
              try {
                if (this.secret.length <= 1 || !this.secret.match(/^[A-Z2-7]+$/)) {
                  this.getUIContext().getPromptAction().showToast({
                    duration: DefaultToastDuration,
                    message: $r('app.string.add_secret_invalid_secret')
                  })
                  return
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
                  message: $r('app.string.add_secret_error_format', `${e}`)
                })
              }
            })
            .width(150)
            .enabled(this.provider != "" && this.account != "" && this.secret != "")
        }
      }
    }
    .title($r('app.string.add_secret_title'))
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
          Text($r('app.string.add_uri_heading'))
            .fontSize(30)
            .fontWeight(FontWeight.Bold)
            .margin({ bottom: 10 })
          Text($r('app.string.add_uri_desc'))
            .fontSize(14)
            .margin({ bottom: 20 })
          TextArea({ text: "", placeholder: "otpauth://totp/xxx?secret=yyy" })
            .height(150)
            .margin({ bottom: 20 })
            .onChange((value) => {
              this.uri = value
            })
          Row() {
            Button($r('app.string.common_add'))
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
                      message: $r('app.string.add_uri_partial_error_format', count, i + 1, `${e}`)
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
    .title($r('app.string.add_uri_title'))
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
          Text($r('app.string.add_secret_provider'))
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
          Text($r('app.string.add_secret_account'))
            .width("30%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          TextInput({ text: this.account, placeholder: $r('app.string.add_secret_account_placeholder') })
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
          Text($r('app.string.add_secret_secret'))
            .width("30%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.Start)
          TextInput({ text: this.secret, placeholder: $r('app.string.add_secret_secret_placeholder') })
            .width("60%")
            .fontWeight(FontWeight.Bold)
            .textAlign(TextAlign.End)
            .maxLength(50)
            .onChange((v) => this.secret = v.trim())
        }
        .margin({ bottom: 10 })

        Row() {
          Text($r('app.string.add_secret_digits'))
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
          Button($r('app.string.common_add'))
            .onClick(() => {
              try {
                if (this.secret.length <= 1 || !this.secret.match(/^[A-Z2-7]+$/)) {
                  this.getUIContext().getPromptAction().showToast({
                    duration: DefaultToastDuration,
                    message: $r('app.string.add_secret_invalid_secret')
                  })
                  return
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
                  message: $r('app.string.add_secret_error_format', `${e}`)
                })
              }
            })
            .width(150)
            .enabled(this.account != "" && this.secret != "")
        }
      }
    }
    .title($r('app.string.add_steam_secret_title'))
  }
}