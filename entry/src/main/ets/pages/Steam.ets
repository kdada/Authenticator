import { http } from '@kit.NetworkKit'
import { cryptoFramework } from '@kit.CryptoArchitectureKit'
import { util } from '@kit.ArkTS'

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
        "Content-Type": contentType
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
      })
    })
  }
}