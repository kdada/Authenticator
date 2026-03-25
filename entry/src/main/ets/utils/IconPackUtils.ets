import { fileIo as fs, picker } from '@kit.CoreFileKit';
import { common } from '@kit.AbilityKit';
import { BusinessError, zlib } from '@kit.BasicServicesKit';
import { util } from '@kit.ArkTS';

export interface AegisIconDefinition {
  filename: string;
  name?: string;
  category?: string;
  issuer?: string[];
}

enum IconMatchType {
  NORMAL = 0,
  INVERSE = 1
}

export interface IconPackSection {
  key: string;
  title: string;
  count: number;
  getPathAt: (index: number) => string;
}

export class AegisIconPack {
  public invalid: boolean = false;
  public onDevicePath: string = '';
  public uuid: string = '';
  public name: string = '';
  public version: number = 0;
  public icons: AegisIconDefinition[] = [];
  private iconMap: Map<string, string> = new Map();

  buildMap(): void {
    this.iconMap.clear();
    this.icons.forEach((icon) => {
      (icon.issuer ?? []).forEach((issuer) => {
        this.iconMap.set(IconPackRegistry.normalizeIssuer(issuer), icon.filename);
      });
    });
  }

  getSuggestedIconPaths(issuer: string): string[] {
    if (!issuer) {
      return [];
    }

    const suggested: string[] = [];
    this.icons.forEach((icon) => {
      const matchType = IconPackRegistry.getMatchType(issuer, icon.issuer ?? []);
      if (matchType === undefined) {
        return;
      }

      const path = `file://${this.onDevicePath}/${icon.filename}`;
      if (matchType === IconMatchType.NORMAL) {
        suggested.unshift(path);
      } else {
        suggested.push(path);
      }
    });
    return suggested;
  }

  getIconPathByIssuer(issuer: string): string {
    const suggested = this.getSuggestedIconPaths(issuer);
    if (suggested.length > 0) {
      return suggested[0];
    }

    const filename = this.iconMap.get(IconPackRegistry.normalizeIssuer(issuer));
    if (!filename) {
      return '';
    }
    return `file://${this.onDevicePath}/${filename}`;
  }

  getIconPathAt(index: number): string {
    if (index < 0 || index >= this.icons.length) {
      return '';
    }
    return `file://${this.onDevicePath}/${this.icons[index].filename}`;
  }

  getAllIconPaths(): string[] {
    return this.icons.map((icon) => `file://${this.onDevicePath}/${icon.filename}`);
  }

  getKey(): string {
    return this.onDevicePath;
  }
}

export class IconPackRegistry {
  private static readonly DEFAULT_PACK_KEY = 'default';
  private static readonly DEFAULT_ISSUERS: string[] = ['aliyun', 'cloudflare', 'epic_games', 'github', 'gitlab',
    'google', 'huawei', 'jetbrains', 'microsoft', 'namecheap', 'neteasemail', 'nintendo', 'nvidia', 'steam',
    'twitter', 'ubisoft'];

  static normalizeIssuer(issuer: string): string {
    return issuer.trim().toLowerCase().replaceAll(' ', '_');
  }

  static getDefaultPackKey(): string {
    return IconPackRegistry.DEFAULT_PACK_KEY;
  }

  static getIconPackDirectory(context: common.UIAbilityContext): string {
    return `${context.filesDir}/icon_packs`;
  }

  static ensureIconPackDirectory(context: common.UIAbilityContext): string {
    const dir = IconPackRegistry.getIconPackDirectory(context);
    if (!fs.accessSync(dir)) {
      fs.mkdirSync(dir);
    }
    return dir;
  }

  static getDefaultIconPathByIssuer(issuer: string): string {
    const suggested = IconPackRegistry.getSuggestedDefaultIconPaths(issuer);
    if (suggested.length > 0) {
      return suggested[0];
    }
    return '';
  }

  static getIconPathByIssuer(issuer: string, selectedPackKey: string, installedPacks: AegisIconPack[]): string {
    if (!selectedPackKey || selectedPackKey === IconPackRegistry.DEFAULT_PACK_KEY) {
      return IconPackRegistry.getDefaultIconPathByIssuer(issuer);
    }

    const pack = installedPacks.find((item) => item.getKey() === selectedPackKey && !item.invalid);
    if (!pack) {
      return IconPackRegistry.getDefaultIconPathByIssuer(issuer);
    }

    const path = pack.getIconPathByIssuer(issuer);
    if (path) {
      return path;
    }
    return IconPackRegistry.getDefaultIconPathByIssuer(issuer);
  }

  static getDefaultIconPaths(): string[] {
    return IconPackRegistry.DEFAULT_ISSUERS.map((issuer) => `rawfile://icons/${issuer}.png`);
  }

  static getSuggestedDefaultIconPaths(issuer: string): string[] {
    if (!issuer) {
      return [];
    }

    const suggested: string[] = [];
    IconPackRegistry.DEFAULT_ISSUERS.forEach((candidate) => {
      const matchType = IconPackRegistry.getMatchType(issuer, [candidate, candidate.replaceAll('_', ' ')]);
      if (matchType === undefined) {
        return;
      }

      const path = `rawfile://icons/${candidate}.png`;
      if (matchType === IconMatchType.NORMAL) {
        suggested.unshift(path);
      } else {
        suggested.push(path);
      }
    });
    return suggested;
  }

  static getSuggestedIconPaths(issuer: string, installedPacks: AegisIconPack[]): string[] {
    const suggested: string[] = [];
    const seen = new Set<string>();
    const pushPath = (path: string) => {
      if (!path || seen.has(path)) {
        return;
      }
      seen.add(path);
      suggested.push(path);
    };

    IconPackRegistry.getSuggestedDefaultIconPaths(issuer).forEach(pushPath);
    installedPacks.filter((pack) => !pack.invalid)
      .forEach((pack) => pack.getSuggestedIconPaths(issuer).forEach(pushPath));
    return suggested;
  }

  static getIconSections(installedPacks: AegisIconPack[]): IconPackSection[] {
    const sections: IconPackSection[] = [
      {
        key: IconPackRegistry.DEFAULT_PACK_KEY,
        title: 'builtin',
        count: IconPackRegistry.DEFAULT_ISSUERS.length,
        getPathAt: (index: number): string => {
          if (index < 0 || index >= IconPackRegistry.DEFAULT_ISSUERS.length) {
            return '';
          }
          return `rawfile://icons/${IconPackRegistry.DEFAULT_ISSUERS[index]}.png`;
        }
      }
    ];

    installedPacks.filter((pack) => !pack.invalid).forEach((pack) => {
      sections.push({
        key: pack.getKey(),
        title: pack.name,
        count: pack.icons.length,
        getPathAt: (index: number): string => pack.getIconPathAt(index)
      });
    });

    return sections;
  }

  static getMatchType(issuer: string, candidates: string[]): IconMatchType | undefined {
    const normalizedIssuer = issuer.trim().toLowerCase();
    if (!normalizedIssuer) {
      return undefined;
    }

    let inverseMatch = false;
    for (const candidate of candidates) {
      const normalizedCandidate = candidate.trim().toLowerCase();
      if (!normalizedCandidate) {
        continue;
      }
      if (normalizedCandidate.includes(normalizedIssuer)) {
        return IconMatchType.NORMAL;
      }
      if (normalizedIssuer.includes(normalizedCandidate)) {
        inverseMatch = true;
      }
    }

    if (inverseMatch) {
      return IconMatchType.INVERSE;
    }
    return undefined;
  }

  static async loadInstalledPacks(context: common.UIAbilityContext): Promise<AegisIconPack[]> {
    const dir = IconPackRegistry.ensureIconPackDirectory(context);
    let folders: string[] = [];
    try {
      folders = await fs.listFile(dir);
    } catch (_) {
      return [];
    }

    const packs: AegisIconPack[] = [];
    for (const folder of folders) {
      const packPath = `${dir}/${folder}`;
      const pack = await IconPackRegistry.loadSinglePack(packPath);
      if (pack) {
        packs.push(pack);
      }
    }
    packs.sort((left, right) => left.name.localeCompare(right.name));
    return packs;
  }

  private static async loadSinglePack(packPath: string): Promise<AegisIconPack | undefined> {
    const packJsonPath = `${packPath}/pack.json`;
    if (!fs.accessSync(packJsonPath)) {
      const invalidPack = new AegisIconPack();
      invalidPack.invalid = true;
      invalidPack.onDevicePath = packPath;
      invalidPack.name = packPath.substring(packPath.lastIndexOf('/') + 1);
      return invalidPack;
    }

    try {
      const content = await IconPackRegistry.readTextFile(packJsonPath);
      const parsed = JSON.parse(content) as AegisIconPack;
      const pack = new AegisIconPack();
      pack.onDevicePath = packPath;
      pack.uuid = parsed.uuid ?? '';
      pack.name = parsed.name ?? packPath.substring(packPath.lastIndexOf('/') + 1);
      pack.version = parsed.version ?? 0;
      pack.icons = parsed.icons ?? [];
      pack.buildMap();
      return pack;
    } catch (_) {
      const invalidPack = new AegisIconPack();
      invalidPack.invalid = true;
      invalidPack.onDevicePath = packPath;
      invalidPack.name = packPath.substring(packPath.lastIndexOf('/') + 1);
      return invalidPack;
    }
  }

  static async importFromZip(context: common.UIAbilityContext, zipUri: string): Promise<void> {
    const dir = IconPackRegistry.ensureIconPackDirectory(context);
    const zipFile = fs.openSync(zipUri, fs.OpenMode.READ_ONLY);
    const zipPath = zipFile.path;
    const zipName = zipPath.substring(zipPath.lastIndexOf('/') + 1);
    await fs.close(zipFile.fd);

    const baseName = zipName.endsWith('.zip') ? zipName.substring(0, zipName.length - 4) : zipName;
    let targetDir = `${dir}/${baseName}`;
    let suffix = 1;
    while (fs.accessSync(targetDir)) {
      targetDir = `${dir}/${baseName}_${suffix++}`;
    }

    fs.mkdirSync(targetDir);
    try {
      await zlib.decompressFile(zipPath, targetDir);
    } catch (error) {
      IconPackRegistry.safeRemoveDir(targetDir);
      throw new Error(IconPackRegistry.formatImportError(error as Object));
    }

    const pack = await IconPackRegistry.loadSinglePack(targetDir);
    if (!pack || pack.invalid) {
      IconPackRegistry.safeRemoveDir(targetDir);
      throw new Error('Invalid icon pack');
    }
  }

  static async pickZipFiles(context: common.UIAbilityContext): Promise<string[]> {
    const options = new picker.DocumentSelectOptions();
    options.maxSelectNumber = 5;
    options.fileSuffixFilters = ['.zip'];
    const viewPicker = new picker.DocumentViewPicker(context);
    return viewPicker.select(options);
  }

  static async removePack(pack: AegisIconPack): Promise<void> {
    if (!pack.onDevicePath) {
      return;
    }
    try {
      await fs.rmdir(pack.onDevicePath);
    } catch (_) {
      IconPackRegistry.safeRemoveDir(pack.onDevicePath);
    }
  }

  private static safeRemoveDir(path: string): void {
    if (!fs.accessSync(path)) {
      return;
    }
    try {
      fs.rmdirSync(path);
    } catch (_) {
      try {
        const files = fs.listFileSync(path);
        files.forEach((name) => {
          const child = `${path}/${name}`;
          try {
            fs.unlinkSync(child);
          } catch (_) {
            IconPackRegistry.safeRemoveDir(child);
          }
        });
        fs.rmdirSync(path);
      } catch (_) {
      }
    }
  }

  private static async readTextFile(uri: string): Promise<string> {
    const file = await fs.open(uri, fs.OpenMode.READ_ONLY);
    try {
      const stat = fs.statSync(file.fd);
      const buffer = new ArrayBuffer(stat.size);
      const readBytes = fs.readSync(file.fd, buffer);
      return new util.TextDecoder().decodeToString(new Uint8Array(buffer.slice(0, readBytes)));
    } finally {
      await fs.close(file.fd);
    }
  }

  static formatImportError(error: Object): string {
    const businessError = error as BusinessError;
    if (businessError && businessError.message) {
      return businessError.message;
    }
    return `${error}`;
  }
}

