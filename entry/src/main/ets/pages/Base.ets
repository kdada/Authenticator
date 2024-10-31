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
  public shardSecret: string = ""
  public tokenGID: string = ""
  public identitySecret: string = ""
  public uri: string = ""
  public deviceID: string = ""
  public secret1: string = ""
  public accessToken: string = ""
  public refreshToken: string = ""
}