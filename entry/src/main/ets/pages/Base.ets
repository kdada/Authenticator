import { systemDateTime } from '@kit.BasicServicesKit';
import { ComponentContent } from "@kit.ArkUI";
import { cryptoFramework } from '@kit.CryptoArchitectureKit';
import { buffer, JSON, uri } from '@kit.ArkTS';
import { distributedKVStore } from '@kit.ArkData';
import { kvManager } from '../entryability/EntryAbility';
import * as steamapi from './steamapi/custom'
import * as steam2faapi from './steamapi/service_twofactor'

export class AuthData {
  id: number = 0
  alias: string = ""
  issuer: string = ""
  account: string = ""
  secret: string = ""
  digits: number = 6
  password: string = ""
  external: string = ""
}

export class SteamAuthData {
  public accountName: string = ""
  public steamID: string = ""
  public serialNumber: string = ""
  public revocationCode: string = ""
  public sharedSecret: string = ""
  public tokenGID: string = ""
  public identitySecret: string = ""
  public uri: string = ""
  public deviceID: string = ""
  public secret1: string = ""
  public accessToken: string = ""
  public refreshToken: string = ""
}

export class SteamAccountData {
  auth?: steamapi.CAuthentication_BeginAuthSessionViaCredentials_Response
  confirmation?: steamapi.CAuthentication_AllowedConfirmation
  tokens?: steamapi.CAuthentication_PollAuthSessionStatus_Response
  deviceId: string = ""
  authenticator?: steam2faapi.CTwoFactor_AddAuthenticator_Response
  finalizeAuthenticator?: steam2faapi.CTwoFactor_FinalizeAddAuthenticator_Response
  status?: steam2faapi.CTwoFactor_Status_Response
  account?: steam2faapi.CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
}

export class AuthDataStore {
  public kvStore?: distributedKVStore.DeviceKVStore
  public items: AuthData[] = []
  private next: number = 0
  private onChanged: (items: AuthData[]) => void

  public constructor(onChanged: (items: AuthData[]) => void) {
    this.onChanged = onChanged
    kvManager.getKVStore("authdata", {
      createIfMissing: true,
      securityLevel: distributedKVStore.SecurityLevel.S2,
    }, (err: Error, store: distributedKVStore.DeviceKVStore) => {
      if (err) {
        throw err
      }
      this.kvStore = store
      this.kvStore.getEntries("/data/auth/", (err, data) => {
        for (let i = 0; i < data.length; i++) {
          let element = data[i];
          let authdata = JSON.parse(element.value.value as string) as AuthData
          authdata.password = this.generatePassword(authdata)
          this.items.push(authdata)
          if (authdata.id >= this.next) {
            this.next = authdata.id + 1
          }
        }
        this.items.sort((a, b) => a.id - b.id)
        this.onChanged(this.items)
      })
    })
  }

  static base32Decode(secret: string): Uint8Array {
    let base32Chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567'
    let base32Lookup: Record<string, number> = {}
    for (let i = 0; i < base32Chars.length; i++) {
      base32Lookup[base32Chars[i]] = i
    }
    let bits: string[] = []
    for (let i = 0; i < secret.length; i++) {
      let value = base32Lookup[secret[i].toUpperCase()]
      bits.push(value.toString(2).padStart(5, '0'))
    }
    let bitsString = bits.join('')
    let bytes: Uint8Array = new Uint8Array(bitsString.length / 8)
    for (let i = 0; i < bits.length; i++) {
      bytes[i] = parseInt(bitsString.slice(i * 8, i * 8 + 8), 2)
    }
    return bytes
  }

  static numToUint8Array(num: number): Uint8Array {
    let arr = new Uint8Array(8);
    for (let i = 7; i >= 0; i--) {
      arr[i] = num & 0xff;
      num = num >> 8;
    }
    return arr;
  }

  static calculatePassword(keyData: Uint8Array, seconds: number, digits: number): string {
    let timeStep = Math.floor(seconds / 30)
    let timeData: Uint8Array = AuthDataStore.numToUint8Array(timeStep)

    let hmac = cryptoFramework.createMac("SHA1")
    let key = cryptoFramework.createSymKeyGenerator("HMAC").convertKeySync({ data: keyData })
    hmac.initSync(key)
    hmac.updateSync({ data: timeData })
    let result = hmac.doFinalSync()
    let offset = result.data[result.data.length - 1] & 0x0f
    let buf = buffer.alloc(4)
    buf[0] = result.data[offset] & 0x7f
    buf[1] = result.data[offset+1] & 0xff
    buf[2] = result.data[offset+2] & 0xff
    buf[3] = result.data[offset+3] & 0xff
    let value = buf.readUInt32BE()
    if (digits != 5) {
      // TOTP 标准算法
      return (value % Math.pow(10, digits)).toString().padStart(digits, "0")
    }
    // Steam 算法
    // [50, 51, 52, 53, 54, 55, 56, 57, 66, 67, 68, 70, 71, 72, 74, 75, 77, 78, 80, 81, 82, 84, 86, 87, 88, 89]
    const codes = ["2", "3", "4", "5", "6", "7", "8", "9",
      "B", "C", "D", "F", "G", "H", "J", "K", "M", "N", "P", "Q", "R", "T", "V", "W", "X", "Y"]
    let steamResult = ""
    for (let i = 0; i < 5; i++) {
      const element = codes[value%codes.length];
      steamResult += element
      value = Math.floor(value / codes.length)
    }
    return steamResult
  }

  generatePassword(authdata: AuthData): string {
    let keyData: Uint8Array = AuthDataStore.base32Decode(authdata.secret)
    let seconds = systemDateTime.getTime(false) / 1000
    return AuthDataStore.calculatePassword(keyData, seconds, authdata.digits)
  }

  refreshAllPassword() {
    for (let i = 0; i < this.items.length; i++) {
      let item = this.items[i]
      item.password = this.generatePassword(item)
    }

    this.onChanged(this.items)
  }

  findAuthItem(id: number): number {
    let index = -1
    for (let i = 0; i < this.items.length; i++) {
      if (id == this.items[i].id) {
        index = i
        break
      }
    }
    return index

  }

  removeAuthItem(id: number) {
    let index = this.findAuthItem(id)
    if (index < 0) {
      return
    }
    let item = this.items[index]
    this.kvStore?.delete(`/data/auth/${item.id}`)
    this.items.splice(index, 1)
    this.onChanged(this.items)
  }

  saveAuthItem(id: number) {
    let index = this.findAuthItem(id)
    if (index < 0) {
      return
    }
    let item = this.items[index]
    let authString = JSON.stringify(item)
    this.kvStore?.put(`/data/auth/${item.id}`, authString)
    this.onChanged(this.items)
  }

  addAuthItem(data: string) {
    let authURI = new uri.URI(data.trim())
    if (authURI.scheme != "otpauth" || authURI.host != "totp") {
      throw new Error(`无效的协议：${authURI.scheme}://${authURI.host}`);
    }
    let secret = authURI.getQueryValue("secret")
    let issuer = authURI.getQueryValue("issuer")
    let digits = authURI.getQueryValue("digits")
    let path = authURI.path
    if (path.startsWith("/")) {
      path = path.substring(1)
    }
    let colon = path.indexOf(":")
    let account = path.substring(colon + 1)
    if (colon > 0 && issuer == null) {
      issuer = path.substring(0, colon)
    }
    let authdata: AuthData = {
      id: this.next,
      alias: issuer ?? account,
      issuer: issuer ?? "",
      account: account,
      secret: secret,
      digits: digits == "8" ? 8 : digits == "7" ? 7 : 6,
      password: "",
      external: "",
    }
    if (issuer == "Steam") {
      authdata.digits = 5
    }
    authdata.password = this.generatePassword(authdata)
    this.next++
    if (this.kvStore) {
      let authString = JSON.stringify(authdata)
      this.kvStore.put(`/data/auth/${authdata.id}`, authString)
    }
    this.items.push(authdata)
    this.onChanged(this.items)
  }

  recoverAuthItem(data: string) {
    let result = JSON.parse(data) as AuthData[]
    if (!result) {
      throw new Error("未知的文件格式")
    }
    for (let index = 0; index < result.length; index++) {
      const element = result[index];
      Object.entries(element).forEach((pair: [string, string]) => {
        if (pair[1] == undefined) {
          throw new Error(`第 ${index} 个令牌密钥缺少 ${pair[0]}`)
        }
      })
    }
    for (let index = 0; index < result.length; index++) {
      const element = result[index];
      if(element.issuer.toLowerCase()=='steam'){
        let authdata = JSON.parse(element.external) as Record<string, Object>
        // 兼容前面版本导出的备份文件
        if (authdata["sharedSecret"] == undefined){
          let data = new SteamAuthData()
          data.sharedSecret = authdata["shardSecret"] as string

          data.accountName = authdata["accountName"] as string
          data.steamID = authdata["steamID"] as string
          data.serialNumber = authdata["serialNumber"] as string
          data.revocationCode = authdata["revocationCode"] as string
          data.tokenGID = authdata["tokenGID"] as string
          data.identitySecret = authdata["identitySecret"] as string
          data.uri = authdata["uri"] as string
          data.deviceID = authdata["deviceID"] as string
          data.secret1 = authdata["secret1"] as string
          data.accessToken = authdata["accessToken"] as string
          data.refreshToken = authdata["refreshToken"] as string

          Object.entries(data).forEach((pair: [string, string]) => {
            if (pair[1] == undefined) {
              throw new Error(`缺少 ${pair[0]}`)
            }
          })
          element.external = JSON.stringify(data)
        }
      }
      element.id = this.next++
      if (this.kvStore) {
        let authString = JSON.stringify(element)
        this.kvStore.put(`/data/auth/${element.id}`, authString)
      }
      this.items.push(element)
    }
    this.onChanged(this.items)
  }

  addOneAuthItem(data: AuthData, externalObject?: Object) {
    data.id = this.next++
    if (externalObject) {
      data.external = JSON.stringify(externalObject)
    }
    if (this.kvStore) {
      let authString = JSON.stringify(data)
      this.kvStore.put(`/data/auth/${data.id}`, authString)
    }
    this.items.push(data)
    this.onChanged(this.items)
  }
}

export class PromptParams<T> {
  private ctx?: UIContext
  private content?: ComponentContent<PromptParams<T>>
  public data: T
  public autoCancel: boolean = true

  constructor(ctx: UIContext, builder: WrappedBuilder<[PromptParams<T>]>, data: T) {
    this.ctx = ctx
    this.content = new ComponentContent(this.ctx, builder, this);
    this.data = data
  }

  open() {
    this.ctx?.getPromptAction().openCustomDialog(this.content, new Object(this))
  }

  close() {
    this.ctx?.getPromptAction().closeCustomDialog(this.content)
  }
}