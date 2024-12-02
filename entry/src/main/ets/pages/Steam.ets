import { http } from '@kit.NetworkKit'
import { cryptoFramework } from '@kit.CryptoArchitectureKit'
import { url, util } from '@kit.ArkTS'
import { systemDateTime } from '@kit.BasicServicesKit'
import * as steamapi from './steamapi/custom'
import * as steam2faapi from './steamapi/service_twofactor'
import { EAuthSessionGuardType } from './steamapi/custom'
import Long from 'long'

export class Confirmation {
  // Test = 1
  /// Occurs when sending a trade offer or accepting a received trade offer, only when there is items on the user's side
  // Trade = 2
  /// Occurs when selling an item on the Steam community market
  // MarketSell = 3
  // FeatureOptOut = 4
  /// Occurs when changing the phone number associated with the account
  // PhoneNumberChange = 5
  /// Occurs when removing a phone number
  // AccountRecovery = 6
  /// Occurs when a new web API key is created via <https://steamcommunity.com/dev/apikey>
  // ApiKeyCreation = 9
  /// Occurs when a user is invited to join a Steam Family, and they have accepted the invitation. This is not used for accepting the initial invitation, just to confirm the acceptance.
  ///
  /// Triggered upon accepting invitation here: <https://store.steampowered.com/account/familymanagement>
  // JoinSteamFamily = 11
  public type: number = 0
  public type_name: string = ""
  public id: string = ""
  /// Trade offer ID or market transaction ID
  public creator_id: string = ""
  public nonce: string = ""
  public creation_time: number = 0
  public cancel: string = ""
  public accept: string = ""
  public icon: string | undefined | null = null
  public multi: boolean = false
  public headline: string = ""
  public summary: string[] = []
}

class AccountPublickKey {
  public publickey_mod: string = ""
  public publickey_exp: string = ""
  public timestamp: number = 0
}

let EResult: Record<string, string> = {
  "0": "Invalid",
  "1": "OK",
  "2": "Fail",
  "3": "NoConnection",
  "5": "InvalidPassword",
  "6": "LoggedInElsewhere",
  "7": "InvalidProtocolVer",
  "8": "InvalidParam",
  "9": "FileNotFound",
  "10": "Busy",
  "11": "InvalidState",
  "12": "InvalidName",
  "13": "InvalidEmail",
  "14": "DuplicateName",
  "15": "AccessDenied",
  "16": "Timeout",
  "17": "Banned",
  "18": "AccountNotFound",
  "19": "InvalidSteamID",
  "20": "ServiceUnavailable",
  "21": "NotLoggedOn",
  "22": "Pending",
  "23": "EncryptionFailure",
  "24": "InsufficientPrivilege",
  "25": "LimitExceeded",
  "26": "Revoked",
  "27": "Expired",
  "28": "AlreadyRedeemed",
  "29": "DuplicateRequest",
  "30": "AlreadyOwned",
  "31": "IPNotFound",
  "32": "PersistFailed",
  "33": "LockingFailed",
  "34": "LogonSessionReplaced",
  "35": "ConnectFailed",
  "36": "HandshakeFailed",
  "37": "IOFailure",
  "38": "RemoteDisconnect",
  "39": "ShoppingCartNotFound",
  "40": "Blocked",
  "41": "Ignored",
  "42": "NoMatch",
  "43": "AccountDisabled",
  "44": "ServiceReadOnly",
  "45": "AccountNotFeatured",
  "46": "AdministratorOK",
  "47": "ContentVersion",
  "48": "TryAnotherCM",
  "49": "PasswordRequiredToKickSession",
  "50": "AlreadyLoggedInElsewhere",
  "51": "Suspended",
  "52": "Cancelled",
  "53": "DataCorruption",
  "54": "DiskFull",
  "55": "RemoteCallFailed",
  "56": "PasswordUnset",
  "57": "ExternalAccountUnlinked",
  "58": "PSNTicketInvalid",
  "59": "ExternalAccountAlreadyLinked",
  "60": "RemoteFileConflict",
  "61": "IllegalPassword",
  "62": "SameAsPreviousValue",
  "63": "AccountLogonDenied",
  "64": "CannotUseOldPassword",
  "65": "InvalidLoginAuthCode",
  "66": "AccountLogonDeniedNoMail",
  "67": "HardwareNotCapableOfIPT",
  "68": "IPTInitError",
  "69": "ParentalControlRestricted",
  "70": "FacebookQueryError",
  "71": "ExpiredLoginAuthCode",
  "72": "IPLoginRestrictionFailed",
  "73": "AccountLockedDown",
  "74": "AccountLogonDeniedVerifiedEmailRequired",
  "75": "NoMatchingURL",
  "76": "BadResponse",
  "77": "RequirePasswordReEntry",
  "78": "ValueOutOfRange",
  "79": "UnexpectedError",
  "80": "Disabled",
  "81": "InvalidCEGSubmission",
  "82": "RestrictedDevice",
  "83": "RegionLocked",
  "84": "RateLimitExceeded",
  "85": "AccountLoginDeniedNeedTwoFactor",
  "86": "ItemDeleted",
  "87": "AccountLoginDeniedThrottle",
  "88": "TwoFactorCodeMismatch",
  "89": "TwoFactorActivationCodeMismatch",
  "90": "AccountAssociatedToMultiplePartners",
  "91": "NotModified",
  "92": "NoMobileDevice",
  "93": "TimeNotSynced",
  "94": "SMSCodeFailed",
  "95": "AccountLimitExceeded",
  "96": "AccountActivityLimitExceeded",
  "97": "PhoneActivityLimitExceeded",
  "98": "RefundToWallet",
  "99": "EmailSendFailure",
  "100": "NotSettled",
  "101": "NeedCaptcha",
  "102": "GSLTDenied",
  "103": "GSOwnerDenied",
  "104": "InvalidItemType",
  "105": "IPBanned",
  "106": "GSLTExpired",
  "107": "InsufficientFunds",
  "108": "TooManyPending",
  "109": "NoSiteLicensesFound",
  "110": "WGNetworkSendExceeded",
  "111": "AccountNotFriends",
  "112": "LimitedUserAccount",
  "113": "CantRemoveItem",
  "114": "AccountDeleted",
  "115": "ExistingUserCancelledLicense",
  "116": "CommunityCooldown",
  "117": "NoLauncherSpecified",
  "118": "MustAgreeToSSA",
  "119": "LauncherMigrated",
  "120": "SteamRealmMismatch",
  "121": "InvalidSignature",
  "122": "ParseFailure",
  "123": "NoVerifiedPhone",
  "124": "InsufficientBattery",
  "125": "ChargerRequired",
  "126": "CachedCredentialInvalid",
  "127": "PhoneNumberIsVOIP",
  "128": "NotSupported",
  "129": "FamilySizeLimitExceeded",
}

function isOK(eResult: string): boolean {
  return eResult == "1" || eResult == "OK"
}

function getEResultCode(eResult: string): string {
  let code = EResult[eResult]
  if (code == "") {
    code = eResult
  }
  return code
}

export class SteamClient {
  private accessToken: string = ""
  private accessTokenUnixTimestamp: number = 0

  generateAccessToken(steamID: string, refreshToken: string,
    callback: (err: Error | null, token: string) => void) {
    if (this.accessTokenUnixTimestamp - 120000 > (new Date()).getTime()) {
      callback(null, this.accessToken)
    }

    let url = "https://api.steampowered.com/IAuthenticationService/GenerateAccessTokenForApp/v1/"
    let contentType = "application/x-www-form-urlencoded"
    let data = `refresh_token=${refreshToken}&steamid=${steamID}&renewal_type=0`

    let req = http.createHttp()
    req.request(url, {
      method: http.RequestMethod.POST,
      header: {
        "Content-Type": contentType,
      },
      extraData: data,
      expectDataType: http.HttpDataType.OBJECT,
    }, (err, resp) => {
      if (err) {
        callback(err, "")
        return
      }
      let token = resp.result["response"]["access_token"] as string
      let parts = token.split(".")
      let base64 = new util.Base64Helper()
      let data = base64.decodeSync(parts[1], util.Type.BASIC_URL_SAFE)
      let decoder = new util.TextDecoder()
      let jwt = decoder.decodeToString(data)
      let obj = JSON.parse(jwt) as Record<string, Object>
      this.accessToken = token
      this.accessTokenUnixTimestamp = obj["exp"] as number
      callback(err, this.accessToken)
    })
  }

  numToUint8ArrayLE(num: bigint, count: number): Uint8Array {
    let arr = new Uint8Array(count);
    for (let i = 0; i < count; i++) {
      if (num == 0n) {
        break
      }
      arr[i] = Number(num % 256n)
      num /= 256n
    }
    return arr;
  }

  approveQRLogin(steamID: string, refreshToken: string, sharedSecret: string, persistence: boolean,
    challengeURL: string, callback: (err: Error) => void) {
    let url = "https://api.steampowered.com/IAuthenticationService/UpdateAuthSessionWithMobileConfirmation/v1/"
    let contentType = "application/x-www-form-urlencoded"
    const regexp = new RegExp("^https://s.team/q/(\\d+)/(\\d+)(\\?|$)");
    let matchResult = regexp.exec(challengeURL)
    if (!matchResult || matchResult.length != 4) {
      callback(new Error("无效的 Steam 登陆二维码"))
      return
    }
    let version = matchResult[1]
    let clientID = matchResult[2]

    let base64 = new util.Base64Helper()
    let keyData: Uint8Array = base64.decodeSync(sharedSecret)
    let hmac = cryptoFramework.createMac("SHA256")
    let key = cryptoFramework.createSymKeyGenerator("HMAC").convertKeySync({ data: keyData })
    hmac.initSync(key)
    hmac.updateSync({ data: this.numToUint8ArrayLE(BigInt(version), 2) })
    hmac.updateSync({ data: this.numToUint8ArrayLE(BigInt(clientID), 8) })
    hmac.updateSync({ data: this.numToUint8ArrayLE(BigInt(steamID), 8) })
    let result = hmac.doFinalSync()
    let signature = encodeURIComponent(base64.encodeToStringSync(result.data))

    let data = `steamid=${steamID}&confirm=true&persistence=${persistence ? 1 :
      0}&version=${version}&client_id=${clientID}&signature=${signature}`

    this.generateAccessToken(steamID, refreshToken, (err: Error | null, token: string) => {
      if (err) {
        callback(err)
        return
      }
      let req = http.createHttp()
      req.request(url + `?access_token=${token}`, {
        method: http.RequestMethod.POST,
        header: {
          "Content-Type": contentType
        },
        extraData: data,
        expectDataType: http.HttpDataType.STRING,
      }, (err, resp) => {
        callback(err)
        if (!resp.result["success"]) {
          callback(new Error(resp.result["message"]))
          return
        }
      })
    })
  }

  numToUint8Array(num: number): Uint8Array {
    let arr = new Uint8Array(8);
    for (let i = 7; i >= 0; i--) {
      arr[i] = num & 0xff;
      num = num >> 8;
    }
    return arr;
  }


  generateSignatureForURI(hashMethod: string, secret: string, data: Uint8Array[]): string {
    let base64 = new util.Base64Helper()
    let keyData: Uint8Array = base64.decodeSync(secret)
    let hmac = cryptoFramework.createMac(hashMethod)
    let key = cryptoFramework.createSymKeyGenerator("HMAC").convertKeySync({ data: keyData })
    hmac.initSync(key)
    for (let i = 0; i < data.length; i++) {
      hmac.updateSync({ data: data[i] })
    }
    let result = hmac.doFinalSync()
    return encodeURIComponent(base64.encodeToStringSync(result.data))
  }

  getConfirmations(steamID: string, refreshToken: string, identitySecret: string, deviceID: string,
    callback: (err: Error, confirmations: Confirmation[]) => void) {
    let url = "https://steamcommunity.com/mobileconf/getlist"

    let tag = "conf"
    let seconds = Math.floor(systemDateTime.getTime(false) / 1000)
    let signature = this.generateSignatureForURI("SHA1", identitySecret,
      [this.numToUint8Array(seconds), new util.TextEncoder().encodeInto(tag)])
    let data = `p=${deviceID}&a=${steamID}&t=${seconds}&m=react&tag=${tag}&k=${signature}`

    this.generateAccessToken(steamID, refreshToken, (err: Error | null, token: string) => {
      if (err) {
        callback(err, [])
        return
      }

      let req = http.createHttp()
      req.request(url + `?${data}`, {
        method: http.RequestMethod.GET,
        header: {
          "Cookie": `dob=;steamid=${steamID};steamLoginSecure=${steamID}||${token}`
        },
        expectDataType: http.HttpDataType.OBJECT,
      }, (err, resp) => {
        if (err) {
          callback(err, [])
          return
        }
        if (!resp.result["success"]) {
          callback(new Error(resp.result["message"]), [])
          return
        }
        callback(err, resp.result["conf"] as Confirmation[])
      })
    })
  }

  allow(steamID: string, refreshToken: string, identitySecret: string, deviceID: string,
    confirmations: Confirmation[], callback: (err: Error) => void) {
    this.confirm(steamID, refreshToken, identitySecret, deviceID, confirmations, "allow", callback)
  }

  deny(steamID: string, refreshToken: string, identitySecret: string, deviceID: string,
    confirmations: Confirmation[], callback: (err: Error) => void) {
    this.confirm(steamID, refreshToken, identitySecret, deviceID, confirmations, "cancel", callback)
  }

  confirm(steamID: string, refreshToken: string, identitySecret: string, deviceID: string,
    confirmations: Confirmation[], op: string, callback: (err: Error) => void) {
    let url = "https://steamcommunity.com/mobileconf/multiajaxop"
    let contentType = "application/x-www-form-urlencoded"

    let tag = "conf"
    let seconds = Math.floor(systemDateTime.getTime(false) / 1000)
    let signature = this.generateSignatureForURI("SHA1", identitySecret,
      [this.numToUint8Array(seconds), new util.TextEncoder().encodeInto(tag)])
    let data = `p=${deviceID}&a=${steamID}&t=${seconds}&m=react&tag=${tag}&k=${signature}&op=${op}`

    for (const confirmation of confirmations) {
      data += `&cid[]=${confirmation.id}&ck[]=${confirmation.nonce}`
    }

    this.generateAccessToken(steamID, refreshToken, (err: Error | null, token: string) => {
      if (err) {
        callback(err)
        return
      }

      let req = http.createHttp()
      req.request(url + `?${data}`, {
        method: http.RequestMethod.POST,
        header: {
          "Content-Type": contentType,
          "Cookie": `dob=;steamid=${steamID};steamLoginSecure=${steamID}||${token}`
        },
        extraData: data,
        expectDataType: http.HttpDataType.OBJECT,
      }, (err, resp) => {
        callback(err)
      })
    })
  }

  getAccountPublicKey(steamAccount: string, callback: (err?: Error, publicKey?: AccountPublickKey) => void) {
    let url =
      `https://api.steampowered.com/IAuthenticationService/GetPasswordRSAPublicKey/v1/?account_name=${steamAccount}`
    let req = http.createHttp()
    req.request(url, {
      method: http.RequestMethod.GET,
      expectDataType: http.HttpDataType.OBJECT,
    }, (err, resp) => {
      if (err) {
        callback(err)
        return
      }
      callback(err, resp.result["response"] as AccountPublickKey)
    })
  }


  login(steamAccount: string, steamPassword: string,
    callback: (err: Error, auth?: steamapi.CAuthentication_BeginAuthSessionViaCredentials_Response) => void) {
    this.getAccountPublicKey(steamAccount, (err, publicKey) => {
      if (err) {
        callback(err)
        return
      }
      let rsaSpec: cryptoFramework.RSAPubKeySpec = {
        algName: "RSA",
        specType: cryptoFramework.AsyKeySpecType.PUBLIC_KEY_SPEC,
        params: {
          algName: "RSA",
          specType: cryptoFramework.AsyKeySpecType.COMMON_PARAMS_SPEC,
          n: BigInt("0x" + publicKey!.publickey_mod)
        },
        pk: BigInt("0x" + publicKey!.publickey_exp),
      }
      let rsaPublicKey = cryptoFramework.createAsyKeyGeneratorBySpec(rsaSpec).generatePubKeySync()
      let cipher = cryptoFramework.createCipher('RSA1024|PKCS1');
      cipher.initSync(cryptoFramework.CryptoMode.ENCRYPT_MODE, rsaPublicKey, null)
      let dataToEncrypt: cryptoFramework.DataBlob =
        { data: (new util.TextEncoder()).encodeInto(steamPassword) }
      let result = cipher.doFinalSync(dataToEncrypt)
      let password = (new util.Base64Helper()).encodeToStringSync(result.data)
      let apiUrl = "https://api.steampowered.com/IAuthenticationService/BeginAuthSessionViaCredentials/v1/"
      let contentType = "application/x-www-form-urlencoded"
      let reqParams = steamapi.CAuthentication_BeginAuthSessionViaCredentials_Request_BinaryGuardData.create(
        {
          accountName: steamAccount,
          persistence: steamapi.ESessionPersistence.k_ESessionPersistence_Persistent,
          language: 0,
          qosLevel: 2,
          encryptionTimestamp: publicKey!.timestamp,
          encryptedPassword: password,
          deviceDetails: steamapi.CAuthentication_DeviceDetails.create({
            deviceFriendlyName: "Authenticator",
            platformType: steamapi.EAuthTokenPlatformType.k_EAuthTokenPlatformType_MobileApp,
            osType: -500,
            gamingDeviceType: 528,
          }),
        }
      )
      let data =
        steamapi.CAuthentication_BeginAuthSessionViaCredentials_Request_BinaryGuardData.encode(reqParams).finish()
      let pbData = (new util.Base64Helper()).encodeToStringSync(data)
      let params = new url.URLParams()
      params.append("input_protobuf_encoded", pbData)

      let req = http.createHttp()
      req.request(apiUrl, {
        method: http.RequestMethod.POST,
        header: {
          "Content-Type": contentType,
          "Accept-Type": "application/json"
        },
        extraData: params.toString(),
        expectDataType: http.HttpDataType.ARRAY_BUFFER,
      }, (err, resp) => {
        if (err) {
          callback(err)
          return
        }
        let eResult = resp.header["x-eresult"] as string
        if (!isOK(eResult)) {
          let code = getEResultCode(eResult)
          callback(new Error(code))
          return
        }
        let result =
          steamapi.CAuthentication_BeginAuthSessionViaCredentials_Response.decode(new Uint8Array(resp.result as ArrayBuffer))
        callback(err, result)
      })
    })
  }


  submitLoginCode(steamID: number | Long, clientID: number | Long, codeType: EAuthSessionGuardType, code: string,
    callback: (err?: Error) => void) {
    let apiUrl = "https://api.steampowered.com/IAuthenticationService/UpdateAuthSessionWithSteamGuardCode/v1/"
    let contentType = "application/x-www-form-urlencoded"
    let reqParams = steamapi.CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.create(
      {
        steamid: steamID,
        clientId: clientID,
        codeType: codeType,
        code: code,
      }
    )
    let data =
      steamapi.CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.encode(reqParams).finish()
    let pbData = (new util.Base64Helper()).encodeToStringSync(data)
    let params = new url.URLParams()
    params.append("input_protobuf_encoded", pbData)

    let req = http.createHttp()
    req.request(apiUrl, {
      method: http.RequestMethod.POST,
      header: {
        "Content-Type": contentType,
        "Accept-Type": "application/json"
      },
      extraData: params.toString(),
      expectDataType: http.HttpDataType.ARRAY_BUFFER,
    }, (err, resp) => {
      if (err) {
        callback(err)
        return
      }
      let eResult = resp.header["x-eresult"] as string
      if (!isOK(eResult)) {
        let code = getEResultCode(eResult)
        callback(new Error(code))
        return
      }
      callback()
    })
  }

  pollTokens(clientID: number | Long, requestID: Uint8Array,
    callback: (err?: Error, tokens?: steamapi.CAuthentication_PollAuthSessionStatus_Response) => void) {
    let apiUrl = "https://api.steampowered.com/IAuthenticationService/PollAuthSessionStatus/v1/"
    let contentType = "application/x-www-form-urlencoded"
    let reqParams = steamapi.CAuthentication_PollAuthSessionStatus_Request.create(
      {
        clientId: clientID,
        requestId: requestID,
      }
    )
    let data =
      steamapi.CAuthentication_PollAuthSessionStatus_Request.encode(reqParams).finish()
    let pbData = (new util.Base64Helper()).encodeToStringSync(data)
    let params = new url.URLParams()
    params.append("input_protobuf_encoded", pbData)

    let req = http.createHttp()
    req.request(apiUrl, {
      method: http.RequestMethod.POST,
      header: {
        "Content-Type": contentType,
        "Accept-Type": "application/json"
      },
      extraData: params.toString(),
      expectDataType: http.HttpDataType.ARRAY_BUFFER,
    }, (err, resp) => {
      if (err) {
        callback(err)
        return
      }
      let eResult = resp.header["x-eresult"] as string
      if (!isOK(eResult)) {
        let code = getEResultCode(eResult)
        callback(new Error(code))
        return
      }
      let result =
        steamapi.CAuthentication_PollAuthSessionStatus_Response.decode(new Uint8Array(resp.result as ArrayBuffer))
      callback(err, result)
    })
  }

  addAuthenticator(steamID: string, refreshToken: string, deviceID: string,
    callback: (err?: Error, auth?: steam2faapi.CTwoFactor_AddAuthenticator_Response) => void) {
    let apiUrl = "https://api.steampowered.com/ITwoFactorService/AddAuthenticator/v1/"
    let contentType = "application/x-www-form-urlencoded"
    let reqParams = steam2faapi.CTwoFactor_AddAuthenticator_Request.create({
      authenticatorType: 1,
      steamid: Long.fromString(steamID),
      smsPhoneId: "1",
      deviceIdentifier: deviceID,
      version: 1,
    })
    let data =
      steam2faapi.CTwoFactor_AddAuthenticator_Request.encode(reqParams).finish()
    let pbData = (new util.Base64Helper()).encodeToStringSync(data)
    let params = new url.URLParams()
    params.append("input_protobuf_encoded", pbData)
    this.generateAccessToken(steamID, refreshToken, (err: Error | null, token: string) => {
      if (err) {
        callback(err)
        return
      }
      let req = http.createHttp()
      req.request(apiUrl + `?access_token=${token}`, {
        method: http.RequestMethod.POST,
        header: {
          "Content-Type": contentType,
          "Accept-Type": "application/json"
        },
        extraData: params.toString(),
        expectDataType: http.HttpDataType.ARRAY_BUFFER,
      }, (err, resp) => {
        if (err) {
          callback(err)
          return
        }
        let eResult = resp.header["x-eresult"] as string
        if (!isOK(eResult)) {
          let code = getEResultCode(eResult)
          callback(new Error(code))
          return
        }
        let result =
          steam2faapi.CTwoFactor_AddAuthenticator_Response.decode(new Uint8Array(resp.result as ArrayBuffer))
        callback(err, result)
      })
    })
  }

  finalizeAuthenticator(steamID: string, refreshToken: string, authenticatorCode: string, authenticatorTime: number,
    activationCode: string,
    callback: (err?: Error, resp?: steam2faapi.CTwoFactor_FinalizeAddAuthenticator_Response) => void) {
    let apiUrl = "https://api.steampowered.com/ITwoFactorService/FinalizeAddAuthenticator/v1/"
    let contentType = "application/x-www-form-urlencoded"
    let reqParams = steam2faapi.CTwoFactor_FinalizeAddAuthenticator_Request.create({
      steamid: Long.fromString(steamID),
      authenticatorCode: authenticatorCode,
      authenticatorTime: authenticatorTime,
      activationCode: activationCode,
      validateSmsCode: true,
    })
    let data =
      steam2faapi.CTwoFactor_FinalizeAddAuthenticator_Request.encode(reqParams).finish()
    let pbData = (new util.Base64Helper()).encodeToStringSync(data)
    let params = new url.URLParams()
    params.append("input_protobuf_encoded", pbData)
    this.generateAccessToken(steamID, refreshToken, (err: Error | null, token: string) => {
      if (err) {
        callback(err)
        return
      }
      let req = http.createHttp()
      req.request(apiUrl + `?access_token=${token}`, {
        method: http.RequestMethod.POST,
        header: {
          "Content-Type": contentType,
          "Accept-Type": "application/json"
        },
        extraData: params.toString(),
        expectDataType: http.HttpDataType.ARRAY_BUFFER,
      }, (err, resp) => {
        if (err) {
          callback(err)
          return
        }
        let eResult = resp.header["x-eresult"] as string
        if (!isOK(eResult)) {
          let code = getEResultCode(eResult)
          callback(new Error(code))
          return
        }
        let data = new Uint8Array(resp.result as ArrayBuffer)
        let a = (new util.TextDecoder()).decodeToString(data)
        let b = (new util.Base64Helper()).encodeToStringSync(data)
        let result = steam2faapi.CTwoFactor_FinalizeAddAuthenticator_Response.decode(data)
        callback(err, result)
      })
    })
  }

  getAuthenticatorStatus(steamID: string, refreshToken: string,
    callback: (err?: Error, resp?: steam2faapi.CTwoFactor_Status_Response) => void) {
    let apiUrl = "https://api.steampowered.com/ITwoFactorService/QueryStatus/v1/"
    let contentType = "application/x-www-form-urlencoded"
    let reqParams = steam2faapi.CTwoFactor_Status_Request.create({
      steamid: Long.fromString(steamID),
    })
    let data =
      steam2faapi.CTwoFactor_Status_Request.encode(reqParams).finish()
    let pbData = (new util.Base64Helper()).encodeToStringSync(data)
    let params = new url.URLParams()
    params.append("input_protobuf_encoded", pbData)
    this.generateAccessToken(steamID, refreshToken, (err: Error | null, token: string) => {
      if (err) {
        callback(err)
        return
      }
      let req = http.createHttp()
      req.request(apiUrl + `?access_token=${token}`, {
        method: http.RequestMethod.POST,
        header: {
          "Content-Type": contentType,
          "Accept-Type": "application/json"
        },
        extraData: params.toString(),
        expectDataType: http.HttpDataType.ARRAY_BUFFER,
      }, (err, resp) => {
        if (err) {
          callback(err)
          return
        }
        let eResult = resp.header["x-eresult"] as string
        if (!isOK(eResult)) {
          let code = getEResultCode(eResult)
          callback(new Error(code))
          return
        }
        let result =
          steam2faapi.CTwoFactor_Status_Response.decode(new Uint8Array(resp.result as ArrayBuffer))
        callback(err, result)
      })
    })
  }

  transferAuthenticator(steamID: string, refreshToken: string, callback: (err?: Error) => void) {
    let apiUrl = "https://api.steampowered.com/ITwoFactorService/RemoveAuthenticatorViaChallengeStart/v1/"
    let contentType = "application/x-www-form-urlencoded"
    let params = new url.URLParams()
    params.append("input_protobuf_encoded", "")
    this.generateAccessToken(steamID, refreshToken, (err: Error | null, token: string) => {
      if (err) {
        callback(err)
        return
      }
      let req = http.createHttp()
      req.request(apiUrl + `?access_token=${token}`, {
        method: http.RequestMethod.POST,
        header: {
          "Content-Type": contentType,
          "Accept-Type": "application/json"
        },
        extraData: params.toString(),
        expectDataType: http.HttpDataType.ARRAY_BUFFER,
      }, (err, resp) => {
        if (err) {
          callback(err)
          return
        }
        let eResult = resp.header["x-eresult"] as string
        if (!isOK(eResult)) {
          let code = getEResultCode(eResult)
          callback(new Error(code))
          return
        }
        callback(err)
      })
    })
  }

  submitSMSCode(steamID: string, refreshToken: string, smsCode: string, callback: (err?: Error,
    account?: steam2faapi.CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response) => void) {
    let apiUrl = "https://api.steampowered.com/ITwoFactorService/RemoveAuthenticatorViaChallengeContinue/v1/"
    let contentType = "application/x-www-form-urlencoded"
    let reqParams = steam2faapi.CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.create(
      {
        smsCode: smsCode,
        generateNewToken: true,
      }
    )
    let data =
      steam2faapi.CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.encode(reqParams).finish()
    let pbData = (new util.Base64Helper()).encodeToStringSync(data)
    let params = new url.URLParams()
    params.append("input_protobuf_encoded", pbData)
    this.generateAccessToken(steamID, refreshToken, (err: Error | null, token: string) => {
      if (err) {
        callback(err)
        return
      }
      let req = http.createHttp()
      req.request(apiUrl + `?access_token=${token}`, {
        method: http.RequestMethod.POST,
        header: {
          "Content-Type": contentType,
          "Accept-Type": "application/json"
        },
        extraData: params.toString(),
        expectDataType: http.HttpDataType.ARRAY_BUFFER,
      }, (err, resp) => {
        if (err) {
          callback(err)
          return
        }
        let eResult = resp.header["x-eresult"] as string
        if (!isOK(eResult)) {
          let code = getEResultCode(eResult)
          callback(new Error(code))
          return
        }
        let result =
          steam2faapi.CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.decode(new Uint8Array(resp.result as ArrayBuffer))
        callback(err, result)
      })
    })
  }

  revokeAuthenticator(steamID: string, refreshToken: string, revocationCode: string, callback: (err?: Error) => void) {
    let apiUrl = "https://api.steampowered.com/ITwoFactorService/RemoveAuthenticator/v1/"
    let contentType = "application/x-www-form-urlencoded"
    let reqParams = steam2faapi.CTwoFactor_RemoveAuthenticator_Request.create(
      {
        revocationCode: revocationCode,
      }
    )
    let data =
      steam2faapi.CTwoFactor_RemoveAuthenticator_Request.encode(reqParams).finish()
    let pbData = (new util.Base64Helper()).encodeToStringSync(data)
    let params = new url.URLParams()
    params.append("input_protobuf_encoded", pbData)
    this.generateAccessToken(steamID, refreshToken, (err: Error | null, token: string) => {
      if (err) {
        callback(err)
        return
      }
      let req = http.createHttp()
      req.request(apiUrl + `?access_token=${token}`, {
        method: http.RequestMethod.POST,
        header: {
          "Content-Type": contentType,
          "Accept-Type": "application/json"
        },
        extraData: params.toString(),
        expectDataType: http.HttpDataType.ARRAY_BUFFER,
      }, (err, resp) => {
        if (err) {
          callback(err)
          return
        }
        let eResult = resp.header["x-eresult"] as string
        if (!isOK(eResult)) {
          let code = getEResultCode(eResult)
          callback(new Error(code))
          return
        }
        callback(err)
      })
    })
  }
}