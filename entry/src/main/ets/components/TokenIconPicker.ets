import { common } from '@kit.AbilityKit';
import { PromptParams } from '../pages/Base';
import { TokenIcon } from './TokenIcon';
import { IconPackRegistry, IconPackSection } from '../utils/IconPackUtils';
import { refreshInstalledIconPacks } from '../entryability/EntryAbility';

interface TokenIconPickerSectionState {
  key: string;
  title: string;
  isDefault: boolean;
}

class BasicDataSource implements IDataSource {
  private listeners: DataChangeListener[] = [];

  totalCount(): number {
    return 0;
  }

  getData(_index: number): string {
    return '';
  }

  registerDataChangeListener(listener: DataChangeListener): void {
    if (this.listeners.indexOf(listener) < 0) {
      this.listeners.push(listener);
    }
  }

  unregisterDataChangeListener(listener: DataChangeListener): void {
    const index = this.listeners.indexOf(listener);
    if (index >= 0) {
      this.listeners.splice(index, 1);
    }
  }

  notifyDataReload(): void {
    this.listeners.forEach((listener) => {
      listener.onDataReloaded();
    });
  }
}

class IconPathDataSource extends BasicDataSource {
  private readonly section: IconPackSection;

  constructor(section: IconPackSection) {
    super();
    this.section = section;
  }

  totalCount(): number {
    return this.section.count;
  }

  getData(index: number): string {
    return this.section.getPathAt(index);
  }
}

const EMPTY_ICON_SECTION: IconPackSection = {
  key: 'empty',
  title: '',
  count: 0,
  getPathAt: (_index: number): string => ''
};

export class TokenIconPickerData {
  issuer: string = '';
  currentIconPath: string = '';
  onConfirm: (path: string) => void = (_path: string): void => {
  };
  onClose: () => void = (): void => {
  };
}

@Component
struct TokenIconPickerContent {
  @Prop issuer: string = '';
  @Prop currentIconPath: string = '';
  onConfirm: (path: string) => void = (_path: string): void => {
  };
  onClose: () => void = (): void => {
  };
  @State suggestedPaths: string[] = [];
  @State sectionStates: TokenIconPickerSectionState[] = [];
  @State selectedPath: string = '';
  private sectionDataSources: Map<string, IconPathDataSource> = new Map();
  private readonly emptyDataSource: IconPathDataSource = new IconPathDataSource(EMPTY_ICON_SECTION);

  aboutToAppear(): void {
    this.selectedPath = this.currentIconPath ?? '';
    const context = getContext(this) as common.UIAbilityContext;
    refreshInstalledIconPacks(context).then((packs) => {
      const sections = IconPackRegistry.getIconSections(packs);
      const nextSources: Map<string, IconPathDataSource> = new Map();
      const nextStates: TokenIconPickerSectionState[] = [];
      sections.forEach((section) => {
        nextSources.set(section.key, new IconPathDataSource(section));
        nextStates.push({
          key: section.key,
          title: section.title,
          isDefault: section.key === IconPackRegistry.getDefaultPackKey()
        });
      });
      this.sectionDataSources = nextSources;
      this.suggestedPaths = IconPackRegistry.getSuggestedIconPaths(this.issuer, packs);
      this.sectionStates = nextStates;
    });
  }

  private getSectionDataSource(key: string): IconPathDataSource {
    return this.sectionDataSources.get(key) ?? this.emptyDataSource;
  }

  private closeDialog(): void {
    this.onClose();
  }

  private confirmSelection(): void {
    this.onConfirm(this.selectedPath);
    this.closeDialog();
  }

  private isSelected(path: string): boolean {
    return this.selectedPath === path;
  }

  @Builder
  private sectionTitle(title: ResourceStr | string) {
    Text(title)
      .fontSize(14)
      .fontWeight(FontWeight.Bold)
      .margin({ left: 4, top: 8, bottom: 8 })
      .width('100%')
      .textAlign(TextAlign.Start)
  }

  @Builder
  private fixedIconPreview(path: string) {
    if (path.startsWith('rawfile://')) {
      Image($rawfile(path.slice(10)))
        .width(40)
        .height(40)
        .objectFit(ImageFit.Contain)
        .draggable(false)
    } else if (path.length > 0) {
      Image(path)
        .width(40)
        .height(40)
        .objectFit(ImageFit.Contain)
        .draggable(false)
    } else {
      Text('?')
        .fontSize(20)
        .fontWeight(FontWeight.Bold)
        .fontColor('#FFFFFF')
    }
  }

  @Builder
  private iconItem(path: string, autoMode: boolean = false) {
    ListItem() {
      Column({ space: 6 }) {
        Stack() {
          if (autoMode) {
            TokenIcon({ issuer: this.issuer, iconPath: '' })
          } else {
            this.fixedIconPreview(path)
          }
        }
        .width(50)
        .height(50)
        .padding(5)
        .margin({ top: 4 })
        .backgroundColor($r('app.color.vendor_background_color'))
        .borderRadius(20)
        .borderWidth(this.isSelected(path) ? 2 : 0)
        .borderColor('#d9485f')

        if (autoMode) {
          Text($r('app.string.icon_picker_auto'))
            .fontSize(11)
            .maxLines(1)
        }
      }
      .width('100%')
      .justifyContent(FlexAlign.Center)
      .onClick(() => {
        this.selectedPath = path;
      })
    }
  }

  build() {
    Column() {
      Text($r('app.string.icon_picker_title'))
        .fontSize(18)
        .fontWeight(FontWeight.Bold)
        .margin({ bottom: 8 })

      List({ space: 8 }) {
        ListItemGroup({ header: this.sectionTitle($r('app.string.icon_picker_mode')) }) {
          this.iconItem('', true)
        }
        if (this.suggestedPaths.length > 0) {
          ListItemGroup({ header: this.sectionTitle($r('app.string.icon_picker_recommended')) }) {
            ForEach(this.suggestedPaths, (path: string) => {
              this.iconItem(path)
            }, (path: string) => `recommended_${path}`)
          }
        }
        ForEach(this.sectionStates, (section: TokenIconPickerSectionState) => {
          ListItemGroup({
            header: this.sectionTitle(section.isDefault ? $r('app.string.icon_pack_builtin') : section.title)
          }) {
            LazyForEach(this.getSectionDataSource(section.key), (path: string) => {
              this.iconItem(path)
            }, (path: string) => `${section.key}_${path}`)
          }
        }, (section: TokenIconPickerSectionState) => section.key)
      }
      .layoutWeight(1)
      .width('100%')
      .lanes({ minLength: 72, maxLength: 72 })
      .cachedCount(12)
      .scrollBar(BarState.Auto)

      Row() {
        Button($r('app.string.common_cancel'))
          .layoutWeight(1)
          .onClick(() => {
            this.closeDialog();
          })
          .margin({right:5})
        Button($r('app.string.common_confirm'))
          .layoutWeight(1)
          .onClick(() => {
            this.confirmSelection();
          })
          .margin({left:5})
      }
      .width('100%')
      .margin({ top: 8 })
    }
    .padding(16)
    .width('100%')
    .height('90%')
    .backgroundColor($r("app.color.icon_picker_background"))
  }
}

@Builder
export function buildTokenIconPicker(params: PromptParams<TokenIconPickerData>) {
  TokenIconPickerContent({
    issuer: params?.data?.issuer ?? '',
    currentIconPath: params?.data?.currentIconPath ?? '',
    onConfirm: params?.data?.onConfirm ?? ((_path: string): void => {
    }),
    onClose: params?.data?.onClose ?? (() => {
    })
  })
}



