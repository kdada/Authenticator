@Component
export struct AddSteam {
  @Consume("pageStack") pageStack: NavPathStack;

  build() {
    NavDestination() {

    }
    .title("添加 Steam 令牌")
  }
}
