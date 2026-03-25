import { fileIo as fs } from '@kit.CoreFileKit';
import { AegisIconPack, IconPackRegistry } from '../utils/IconPackUtils';
import { parseInstalledIconPacks } from '../entryability/EntryAbility';

@Component
export struct TokenIcon {
  @Prop issuer: string = '';
  @Prop iconPath: string = '';
  @StorageLink('selectedIconPackKey') selectedIconPackKey: string = IconPackRegistry.getDefaultPackKey();
  @StorageLink('installedIconPacksJson') installedIconPacksJson: string = '[]';

  private getInstalledPacks(): AegisIconPack[] {
    return parseInstalledIconPacks(this.installedIconPacksJson);
  }

  private resolveIconPath(): string {
    if (this.iconPath && this.isValidPath(this.iconPath)) {
      return this.iconPath;
    }
    return IconPackRegistry.getIconPathByIssuer(this.issuer, this.selectedIconPackKey, this.getInstalledPacks());
  }

  private isValidPath(path: string): boolean {
    if (path.startsWith('rawfile://')) {
      return true;
    }
    if (path.startsWith('file://')) {
      return fs.accessSync(path.slice(7));
    }
    return fs.accessSync(path);
  }

  private getImageSource(): ResourceStr | string | undefined {
    const path = this.resolveIconPath();
    if (!path) {
      return undefined;
    }
    if (path.startsWith('rawfile://')) {
      return $rawfile(path.slice(10));
    }
    return path;
  }

  private hasImageSource(): boolean {
    return this.getImageSource() !== undefined;
  }

  private stringToColor(input: string): string {
    let hash = 0;
    for (let index = 0; index < input.length; index++) {
      hash = input.charCodeAt(index) + ((hash << 5) - hash);
    }

    let color = '#';
    for (let index = 0; index < 3; index++) {
      const value = (hash >> (index * 8)) & 0xff;
      const hex = `00${value.toString(16)}`;
      color += hex.substring(hex.length - 2);
    }
    return color;
  }

  build() {
    Stack() {
      if (this.hasImageSource()) {
        Image(this.getImageSource())
          .width(40)
          .height(40)
          .objectFit(ImageFit.Contain)
          .draggable(false)
      } else {
        Text(this.issuer.length > 0 ? this.issuer.charAt(0).toUpperCase() : '?')
          .fontSize(20)
          .fontWeight(FontWeight.Bold)
          .fontColor('#FFFFFF')
      }
    }
    .width(50)
    .height(50)
    .padding(5)
    .margin(10)
    .backgroundColor(this.hasImageSource() ? $r('app.color.vendor_background_color') :
      this.stringToColor(this.issuer || 'k'))
    .borderRadius(20)
  }
}
