import { common } from '@kit.AbilityKit';
import { AegisIconPack, IconPackRegistry } from '../utils/IconPackUtils';
import { DefaultToastDuration } from '../pages/Base';
import { parseInstalledIconPacks, refreshInstalledIconPacks } from '../entryability/EntryAbility';

@Component
export struct IconPackManager {
  @StorageLink('selectedIconPackKey') selectedIconPackKey: string = IconPackRegistry.getDefaultPackKey();
  @StorageLink('installedIconPacksJson') installedIconPacksJson: string = '[]';
  @State expanded: boolean = false;

  aboutToAppear(): void {
    this.reloadPacks();
  }

  private getInstalledPacks(): AegisIconPack[] {
    return parseInstalledIconPacks(this.installedIconPacksJson);
  }

  private async reloadPacks(): Promise<void> {
    const context = getContext(this) as common.UIAbilityContext;
    const packs = await refreshInstalledIconPacks(context);
    if (this.selectedIconPackKey !== IconPackRegistry.getDefaultPackKey()
      && !packs.some((pack) => pack.getKey() === this.selectedIconPackKey && !pack.invalid)) {
      this.selectedIconPackKey = IconPackRegistry.getDefaultPackKey();
    }
  }

  private showToast(message: ResourceStr | string): void {
    this.getUIContext().getPromptAction().showToast({
      duration: DefaultToastDuration,
      message
    });
  }

  private getInstalledCount(): number {
    return this.getInstalledPacks().filter((pack) => !pack.invalid).length;
  }

  private getPackName(pack: AegisIconPack): ResourceStr | string {
    if (pack.invalid) {
      return $r('app.string.icon_pack_invalid_name_format', pack.name);
    }
    return pack.name;
  }

  private getPackSubtitle(pack: AegisIconPack): ResourceStr | string {
    if (pack.invalid) {
      return $r('app.string.icon_pack_invalid_desc');
    }
    return $r('app.string.icon_pack_meta_format', pack.icons.length, `${pack.version}`);
  }

  private async onImportPressed(): Promise<void> {
    const context = getContext(this) as common.UIAbilityContext;
    try {
      const paths = await IconPackRegistry.pickZipFiles(context);
      if (paths.length === 0) {
        return;
      }
      for (const path of paths) {
        await IconPackRegistry.importFromZip(context, path);
      }
      await this.reloadPacks();
      this.showToast($r('app.string.icon_pack_import_success'));
    } catch (error) {
      this.showToast($r('app.string.icon_pack_import_failed_format',
        IconPackRegistry.formatImportError(error as Object)));
    }
  }

  private async onRemovePressed(pack: AegisIconPack): Promise<void> {
    try {
      await IconPackRegistry.removePack(pack);
      if (this.selectedIconPackKey === pack.getKey()) {
        this.selectedIconPackKey = IconPackRegistry.getDefaultPackKey();
      }
      await this.reloadPacks();
      this.showToast($r('app.string.icon_pack_remove_success'));
    } catch (error) {
      this.showToast($r('app.string.icon_pack_remove_failed_format',
        IconPackRegistry.formatImportError(error as Object)));
    }
  }

  @Builder
  private packRow(value: string, name: ResourceStr | string, subtitle: ResourceStr | string, selected: boolean,
    enabled: boolean, onSelect: () => void, onRemove?: () => void) {
    Row() {
      Radio({ value, group: 'icon-pack-group' })
        .checked(selected)
        .enabled(enabled)
        .onChange((checked) => {
          if (checked && enabled) {
            onSelect();
          }
        })

      Column() {
        Text(name)
          .fontWeight(FontWeight.Bold)
          .textAlign(TextAlign.Start)
        Text(subtitle)
          .fontSize(12)
          .textAlign(TextAlign.Start)
      }
      .alignItems(HorizontalAlign.Start)
      .layoutWeight(1)

      if (onRemove) {
        Button($r('app.string.icon_pack_remove'))
          .type(ButtonType.Capsule)
          .buttonStyle(ButtonStyleMode.TEXTUAL)
          .onClick(() => onRemove())
      }
    }
    .width('100%')
    .padding(12)
    .borderRadius(12)
    .backgroundColor($r("app.color.icon_pack_row_background"))
  }

  build() {
    Column() {
      Row() {
        Text($r('app.string.icon_pack_title'))
          .width('85%')
          .fontWeight(FontWeight.Bold)
          .textAlign(TextAlign.Start)
        Button(this.expanded ? $r('app.string.icon_pack_hide') : $r('app.string.icon_pack_manage'))
          .type(ButtonType.Capsule)
          .buttonStyle(ButtonStyleMode.TEXTUAL)
          .onClick(() => {
            this.expanded = !this.expanded;
          })
      }
      .width('100%')
      .alignItems(VerticalAlign.Center)

      Row() {
        Text($r('app.string.icon_pack_desc'))
          .padding({ left: 10 })
          .fontSize(12)
      }
      .width('100%')

      if (this.expanded) {
        Column({ space: 8 }) {
          this.packRow(
            IconPackRegistry.getDefaultPackKey(),
            $r('app.string.icon_pack_builtin'),
            $r('app.string.icon_pack_builtin_desc'),
            this.selectedIconPackKey === IconPackRegistry.getDefaultPackKey(),
            true,
            () => {
              this.selectedIconPackKey = IconPackRegistry.getDefaultPackKey();
            }
          )

          ForEach(this.getInstalledPacks(), (pack: AegisIconPack) => {
            this.packRow(
              pack.getKey(),
              this.getPackName(pack),
              this.getPackSubtitle(pack),
              this.selectedIconPackKey === pack.getKey(),
              !pack.invalid,
              () => {
                this.selectedIconPackKey = pack.getKey();
              },
              () => this.onRemovePressed(pack)
            )
          }, (pack: AegisIconPack) => pack.getKey())

          Row({ space: 12 }) {
            Button($r('app.string.icon_pack_import'))
              .type(ButtonType.Capsule)
              .onClick(() => this.onImportPressed())
            Text($r('app.string.icon_pack_installed_count_format', this.getInstalledCount()))
              .fontSize(12)
              .fontColor('#666666')
          }
          .margin({ top: 4 })
        }
        .width('100%')
        .margin({ top: 12, left: 30, right: 20 })
      }
    }
    .width('100%')
    .padding({ top: 8, bottom: 8 })
  }
}
