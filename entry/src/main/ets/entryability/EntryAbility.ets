import { AbilityConstant, bundleManager, common, ConfigurationConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { window } from '@kit.ArkUI';
import { distributedKVStore } from '@kit.ArkData';
import  resourceManager  from '@ohos.resourceManager';
import { AegisIconDefinition, AegisIconPack, IconPackRegistry } from '../utils/IconPackUtils';

export let kvManager: distributedKVStore.KVManager;

let appResourceManager: resourceManager.ResourceManager;

interface StoredIconPack {
  invalid: boolean;
  onDevicePath: string;
  uuid: string;
  name: string;
  version: number;
  icons: AegisIconDefinition[];
}

export function getLocalizedString(resource: Resource, ...args: Array<string | number>): string {
  try {
    return appResourceManager.getStringSync(resource.id, ...args)
  } catch (_) {
    return ""
  }
}

export function serializeInstalledIconPacks(packs: AegisIconPack[]): string {
  const stored = packs.map((pack): StoredIconPack => ({
    invalid: pack.invalid,
    onDevicePath: pack.onDevicePath,
    uuid: pack.uuid,
    name: pack.name,
    version: pack.version,
    icons: pack.icons
  }))
  return JSON.stringify(stored)
}

export function parseInstalledIconPacks(content: string): AegisIconPack[] {
  if (!content) {
    return []
  }

  try {
    const parsed = JSON.parse(content) as StoredIconPack[]
    return parsed.map((item) => {
      let pack = new AegisIconPack()
      pack.invalid = item.invalid ?? false
      pack.onDevicePath = item.onDevicePath ?? ''
      pack.uuid = item.uuid ?? ''
      pack.name = item.name ?? ''
      pack.version = item.version ?? 0
      pack.icons = item.icons ?? []
      pack.buildMap()
      return pack
    })
  } catch (_) {
    return []
  }
}

export async function refreshInstalledIconPacks(context: common.UIAbilityContext): Promise<AegisIconPack[]> {
  const packs = await IconPackRegistry.loadInstalledPacks(context)
  AppStorage.setOrCreate('installedIconPacksJson', serializeInstalledIconPacks(packs))
  return packs
}

export default class EntryAbility extends UIAbility {
  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam): void {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
    let context = this.context
    appResourceManager = context.resourceManager
    try {
      let bundleName =
        bundleManager.getBundleInfoForSelfSync(bundleManager.BundleFlag.GET_BUNDLE_INFO_WITH_APPLICATION).name
      kvManager = distributedKVStore.createKVManager({
        context: context,
        bundleName: bundleName,
      })
      hilog.info(0x0000, 'testTag', '%{public}s', 'Succeeded in creating KVManager');
    } catch (err) {
      hilog.error(0x0000, 'testTag', 'Failed to create KVManager. Cause: %{public}s', JSON.stringify(err) ?? '');
    }
  }

  onDestroy(): void {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage): void {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');

    windowStage.loadContent('pages/Index', (err) => {
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content.');
      PersistentStorage.persistProp("enableAutoDarkMode", true)
      PersistentStorage.persistProp("enableSafeMode", false)
      PersistentStorage.persistProp("hideToken", false)
      PersistentStorage.persistProp("enhanceNetwork", false)
      PersistentStorage.persistProp("developmentMode", false)
      PersistentStorage.persistProp("privacyState", "Unknown")
      PersistentStorage.persistProp("selectedIconPackKey", "default")
      PersistentStorage.persistProp("installedIconPacksJson", "[]")
      refreshInstalledIconPacks(this.context as common.UIAbilityContext).catch(() => {
      })
      if (AppStorage.get("enableAutoDarkMode")) {
        this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_NOT_SET);
      } else {
        this.context.getApplicationContext().setColorMode(ConfigurationConstant.ColorMode.COLOR_MODE_LIGHT)
      }
    });
  }

  onWindowStageDestroy(): void {
    // Main window is destroyed, release UI related resources
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
  }

  onForeground(): void {
    // Ability has brought to foreground
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
  }

  onBackground(): void {
    // Ability has back to background
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
  }
}
