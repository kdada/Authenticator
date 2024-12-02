import * as $protobuf from "@ohos/protobufjs";
import Long = require("long");
/** EAuthTokenPlatformType enum. */
export enum EAuthTokenPlatformType {
    k_EAuthTokenPlatformType_Unknown = 0,
    k_EAuthTokenPlatformType_SteamClient = 1,
    k_EAuthTokenPlatformType_WebBrowser = 2,
    k_EAuthTokenPlatformType_MobileApp = 3
}

/** EAuthSessionGuardType enum. */
export enum EAuthSessionGuardType {
    k_EAuthSessionGuardType_Unknown = 0,
    k_EAuthSessionGuardType_None = 1,
    k_EAuthSessionGuardType_EmailCode = 2,
    k_EAuthSessionGuardType_DeviceCode = 3,
    k_EAuthSessionGuardType_DeviceConfirmation = 4,
    k_EAuthSessionGuardType_EmailConfirmation = 5,
    k_EAuthSessionGuardType_MachineToken = 6,
    k_EAuthSessionGuardType_LegacyMachineAuth = 7
}

/** EAuthSessionSecurityHistory enum. */
export enum EAuthSessionSecurityHistory {
    k_EAuthSessionSecurityHistory_Invalid = 0,
    k_EAuthSessionSecurityHistory_UsedPreviously = 1,
    k_EAuthSessionSecurityHistory_NoPriorHistory = 2
}

/** ETokenRenewalType enum. */
export enum ETokenRenewalType {
    k_ETokenRenewalType_None = 0,
    k_ETokenRenewalType_Allow = 1
}

/** EAuthTokenRevokeAction enum. */
export enum EAuthTokenRevokeAction {
    k_EAuthTokenRevokeLogout = 0,
    k_EAuthTokenRevokePermanent = 1,
    k_EAuthTokenRevokeReplaced = 2,
    k_EAuthTokenRevokeSupport = 3,
    k_EAuthTokenRevokeConsume = 4,
    k_EAuthTokenRevokeNonRememberedLogout = 5,
    k_EAuthTokenRevokeNonRememberedPermanent = 6,
    k_EAuthTokenRevokeAutomatic = 7
}

/** EAuthTokenState enum. */
export enum EAuthTokenState {
    k_EAuthTokenState_Invalid = 0,
    k_EAuthTokenState_New = 1,
    k_EAuthTokenState_Confirmed = 2,
    k_EAuthTokenState_Issued = 3,
    k_EAuthTokenState_Denied = 4,
    k_EAuthTokenState_LoggedOut = 5,
    k_EAuthTokenState_Consumed = 6,
    k_EAuthTokenState_Revoked = 99
}

/** Represents a CAuthentication_GetPasswordRSAPublicKey_Request. */
export class CAuthentication_GetPasswordRSAPublicKey_Request implements ICAuthentication_GetPasswordRSAPublicKey_Request {

    /**
     * Constructs a new CAuthentication_GetPasswordRSAPublicKey_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_GetPasswordRSAPublicKey_Request);

    /** CAuthentication_GetPasswordRSAPublicKey_Request accountName. */
    public accountName: string;

    /**
     * Creates a new CAuthentication_GetPasswordRSAPublicKey_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_GetPasswordRSAPublicKey_Request instance
     */
    public static create(properties?: ICAuthentication_GetPasswordRSAPublicKey_Request): CAuthentication_GetPasswordRSAPublicKey_Request;

    /**
     * Encodes the specified CAuthentication_GetPasswordRSAPublicKey_Request message. Does not implicitly {@link CAuthentication_GetPasswordRSAPublicKey_Request.verify|verify} messages.
     * @param message CAuthentication_GetPasswordRSAPublicKey_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_GetPasswordRSAPublicKey_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_GetPasswordRSAPublicKey_Request message, length delimited. Does not implicitly {@link CAuthentication_GetPasswordRSAPublicKey_Request.verify|verify} messages.
     * @param message CAuthentication_GetPasswordRSAPublicKey_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_GetPasswordRSAPublicKey_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_GetPasswordRSAPublicKey_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_GetPasswordRSAPublicKey_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_GetPasswordRSAPublicKey_Request;

    /**
     * Decodes a CAuthentication_GetPasswordRSAPublicKey_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_GetPasswordRSAPublicKey_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_GetPasswordRSAPublicKey_Request;

    /**
     * Verifies a CAuthentication_GetPasswordRSAPublicKey_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_GetPasswordRSAPublicKey_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_GetPasswordRSAPublicKey_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_GetPasswordRSAPublicKey_Request;

    /**
     * Creates a plain object from a CAuthentication_GetPasswordRSAPublicKey_Request message. Also converts values to other types if specified.
     * @param message CAuthentication_GetPasswordRSAPublicKey_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_GetPasswordRSAPublicKey_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_GetPasswordRSAPublicKey_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_GetPasswordRSAPublicKey_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_GetPasswordRSAPublicKey_Response. */
export class CAuthentication_GetPasswordRSAPublicKey_Response implements ICAuthentication_GetPasswordRSAPublicKey_Response {

    /**
     * Constructs a new CAuthentication_GetPasswordRSAPublicKey_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_GetPasswordRSAPublicKey_Response);

    /** CAuthentication_GetPasswordRSAPublicKey_Response publickeyMod. */
    public publickeyMod: string;

    /** CAuthentication_GetPasswordRSAPublicKey_Response publickeyExp. */
    public publickeyExp: string;

    /** CAuthentication_GetPasswordRSAPublicKey_Response timestamp. */
    public timestamp: (number|Long);

    /**
     * Creates a new CAuthentication_GetPasswordRSAPublicKey_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_GetPasswordRSAPublicKey_Response instance
     */
    public static create(properties?: ICAuthentication_GetPasswordRSAPublicKey_Response): CAuthentication_GetPasswordRSAPublicKey_Response;

    /**
     * Encodes the specified CAuthentication_GetPasswordRSAPublicKey_Response message. Does not implicitly {@link CAuthentication_GetPasswordRSAPublicKey_Response.verify|verify} messages.
     * @param message CAuthentication_GetPasswordRSAPublicKey_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_GetPasswordRSAPublicKey_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_GetPasswordRSAPublicKey_Response message, length delimited. Does not implicitly {@link CAuthentication_GetPasswordRSAPublicKey_Response.verify|verify} messages.
     * @param message CAuthentication_GetPasswordRSAPublicKey_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_GetPasswordRSAPublicKey_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_GetPasswordRSAPublicKey_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_GetPasswordRSAPublicKey_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_GetPasswordRSAPublicKey_Response;

    /**
     * Decodes a CAuthentication_GetPasswordRSAPublicKey_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_GetPasswordRSAPublicKey_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_GetPasswordRSAPublicKey_Response;

    /**
     * Verifies a CAuthentication_GetPasswordRSAPublicKey_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_GetPasswordRSAPublicKey_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_GetPasswordRSAPublicKey_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_GetPasswordRSAPublicKey_Response;

    /**
     * Creates a plain object from a CAuthentication_GetPasswordRSAPublicKey_Response message. Also converts values to other types if specified.
     * @param message CAuthentication_GetPasswordRSAPublicKey_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_GetPasswordRSAPublicKey_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_GetPasswordRSAPublicKey_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_GetPasswordRSAPublicKey_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_DeviceDetails. */
export class CAuthentication_DeviceDetails implements ICAuthentication_DeviceDetails {

    /**
     * Constructs a new CAuthentication_DeviceDetails.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_DeviceDetails);

    /** CAuthentication_DeviceDetails deviceFriendlyName. */
    public deviceFriendlyName: string;

    /** CAuthentication_DeviceDetails platformType. */
    public platformType: EAuthTokenPlatformType;

    /** CAuthentication_DeviceDetails osType. */
    public osType: number;

    /** CAuthentication_DeviceDetails gamingDeviceType. */
    public gamingDeviceType: number;

    /** CAuthentication_DeviceDetails clientCount. */
    public clientCount: number;

    /** CAuthentication_DeviceDetails machineId. */
    public machineId: Uint8Array;

    /**
     * Creates a new CAuthentication_DeviceDetails instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_DeviceDetails instance
     */
    public static create(properties?: ICAuthentication_DeviceDetails): CAuthentication_DeviceDetails;

    /**
     * Encodes the specified CAuthentication_DeviceDetails message. Does not implicitly {@link CAuthentication_DeviceDetails.verify|verify} messages.
     * @param message CAuthentication_DeviceDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_DeviceDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_DeviceDetails message, length delimited. Does not implicitly {@link CAuthentication_DeviceDetails.verify|verify} messages.
     * @param message CAuthentication_DeviceDetails message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_DeviceDetails, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_DeviceDetails message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_DeviceDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_DeviceDetails;

    /**
     * Decodes a CAuthentication_DeviceDetails message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_DeviceDetails
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_DeviceDetails;

    /**
     * Verifies a CAuthentication_DeviceDetails message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_DeviceDetails message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_DeviceDetails
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_DeviceDetails;

    /**
     * Creates a plain object from a CAuthentication_DeviceDetails message. Also converts values to other types if specified.
     * @param message CAuthentication_DeviceDetails
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_DeviceDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_DeviceDetails to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_DeviceDetails
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_BeginAuthSessionViaQR_Request. */
export class CAuthentication_BeginAuthSessionViaQR_Request implements ICAuthentication_BeginAuthSessionViaQR_Request {

    /**
     * Constructs a new CAuthentication_BeginAuthSessionViaQR_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_BeginAuthSessionViaQR_Request);

    /** CAuthentication_BeginAuthSessionViaQR_Request deviceFriendlyName. */
    public deviceFriendlyName: string;

    /** CAuthentication_BeginAuthSessionViaQR_Request platformType. */
    public platformType: EAuthTokenPlatformType;

    /** CAuthentication_BeginAuthSessionViaQR_Request deviceDetails. */
    public deviceDetails?: (ICAuthentication_DeviceDetails|null);

    /** CAuthentication_BeginAuthSessionViaQR_Request websiteId. */
    public websiteId: string;

    /**
     * Creates a new CAuthentication_BeginAuthSessionViaQR_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_BeginAuthSessionViaQR_Request instance
     */
    public static create(properties?: ICAuthentication_BeginAuthSessionViaQR_Request): CAuthentication_BeginAuthSessionViaQR_Request;

    /**
     * Encodes the specified CAuthentication_BeginAuthSessionViaQR_Request message. Does not implicitly {@link CAuthentication_BeginAuthSessionViaQR_Request.verify|verify} messages.
     * @param message CAuthentication_BeginAuthSessionViaQR_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_BeginAuthSessionViaQR_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_BeginAuthSessionViaQR_Request message, length delimited. Does not implicitly {@link CAuthentication_BeginAuthSessionViaQR_Request.verify|verify} messages.
     * @param message CAuthentication_BeginAuthSessionViaQR_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_BeginAuthSessionViaQR_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_BeginAuthSessionViaQR_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_BeginAuthSessionViaQR_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_BeginAuthSessionViaQR_Request;

    /**
     * Decodes a CAuthentication_BeginAuthSessionViaQR_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_BeginAuthSessionViaQR_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_BeginAuthSessionViaQR_Request;

    /**
     * Verifies a CAuthentication_BeginAuthSessionViaQR_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_BeginAuthSessionViaQR_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_BeginAuthSessionViaQR_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_BeginAuthSessionViaQR_Request;

    /**
     * Creates a plain object from a CAuthentication_BeginAuthSessionViaQR_Request message. Also converts values to other types if specified.
     * @param message CAuthentication_BeginAuthSessionViaQR_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_BeginAuthSessionViaQR_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_BeginAuthSessionViaQR_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_BeginAuthSessionViaQR_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_AllowedConfirmation. */
export class CAuthentication_AllowedConfirmation implements ICAuthentication_AllowedConfirmation {

    /**
     * Constructs a new CAuthentication_AllowedConfirmation.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_AllowedConfirmation);

    /** CAuthentication_AllowedConfirmation confirmationType. */
    public confirmationType: EAuthSessionGuardType;

    /** CAuthentication_AllowedConfirmation associatedMessage. */
    public associatedMessage: string;

    /**
     * Creates a new CAuthentication_AllowedConfirmation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_AllowedConfirmation instance
     */
    public static create(properties?: ICAuthentication_AllowedConfirmation): CAuthentication_AllowedConfirmation;

    /**
     * Encodes the specified CAuthentication_AllowedConfirmation message. Does not implicitly {@link CAuthentication_AllowedConfirmation.verify|verify} messages.
     * @param message CAuthentication_AllowedConfirmation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_AllowedConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_AllowedConfirmation message, length delimited. Does not implicitly {@link CAuthentication_AllowedConfirmation.verify|verify} messages.
     * @param message CAuthentication_AllowedConfirmation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_AllowedConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_AllowedConfirmation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_AllowedConfirmation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_AllowedConfirmation;

    /**
     * Decodes a CAuthentication_AllowedConfirmation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_AllowedConfirmation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_AllowedConfirmation;

    /**
     * Verifies a CAuthentication_AllowedConfirmation message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_AllowedConfirmation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_AllowedConfirmation
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_AllowedConfirmation;

    /**
     * Creates a plain object from a CAuthentication_AllowedConfirmation message. Also converts values to other types if specified.
     * @param message CAuthentication_AllowedConfirmation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_AllowedConfirmation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_AllowedConfirmation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_AllowedConfirmation
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_BeginAuthSessionViaQR_Response. */
export class CAuthentication_BeginAuthSessionViaQR_Response implements ICAuthentication_BeginAuthSessionViaQR_Response {

    /**
     * Constructs a new CAuthentication_BeginAuthSessionViaQR_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_BeginAuthSessionViaQR_Response);

    /** CAuthentication_BeginAuthSessionViaQR_Response clientId. */
    public clientId: (number|Long);

    /** CAuthentication_BeginAuthSessionViaQR_Response challengeUrl. */
    public challengeUrl: string;

    /** CAuthentication_BeginAuthSessionViaQR_Response requestId. */
    public requestId: Uint8Array;

    /** CAuthentication_BeginAuthSessionViaQR_Response interval. */
    public interval: number;

    /** CAuthentication_BeginAuthSessionViaQR_Response allowedConfirmations. */
    public allowedConfirmations: ICAuthentication_AllowedConfirmation[];

    /** CAuthentication_BeginAuthSessionViaQR_Response version. */
    public version: number;

    /**
     * Creates a new CAuthentication_BeginAuthSessionViaQR_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_BeginAuthSessionViaQR_Response instance
     */
    public static create(properties?: ICAuthentication_BeginAuthSessionViaQR_Response): CAuthentication_BeginAuthSessionViaQR_Response;

    /**
     * Encodes the specified CAuthentication_BeginAuthSessionViaQR_Response message. Does not implicitly {@link CAuthentication_BeginAuthSessionViaQR_Response.verify|verify} messages.
     * @param message CAuthentication_BeginAuthSessionViaQR_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_BeginAuthSessionViaQR_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_BeginAuthSessionViaQR_Response message, length delimited. Does not implicitly {@link CAuthentication_BeginAuthSessionViaQR_Response.verify|verify} messages.
     * @param message CAuthentication_BeginAuthSessionViaQR_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_BeginAuthSessionViaQR_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_BeginAuthSessionViaQR_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_BeginAuthSessionViaQR_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_BeginAuthSessionViaQR_Response;

    /**
     * Decodes a CAuthentication_BeginAuthSessionViaQR_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_BeginAuthSessionViaQR_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_BeginAuthSessionViaQR_Response;

    /**
     * Verifies a CAuthentication_BeginAuthSessionViaQR_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_BeginAuthSessionViaQR_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_BeginAuthSessionViaQR_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_BeginAuthSessionViaQR_Response;

    /**
     * Creates a plain object from a CAuthentication_BeginAuthSessionViaQR_Response message. Also converts values to other types if specified.
     * @param message CAuthentication_BeginAuthSessionViaQR_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_BeginAuthSessionViaQR_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_BeginAuthSessionViaQR_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_BeginAuthSessionViaQR_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_BeginAuthSessionViaCredentials_Request. */
export class CAuthentication_BeginAuthSessionViaCredentials_Request implements ICAuthentication_BeginAuthSessionViaCredentials_Request {

    /**
     * Constructs a new CAuthentication_BeginAuthSessionViaCredentials_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_BeginAuthSessionViaCredentials_Request);

    /** CAuthentication_BeginAuthSessionViaCredentials_Request deviceFriendlyName. */
    public deviceFriendlyName: string;

    /** CAuthentication_BeginAuthSessionViaCredentials_Request accountName. */
    public accountName: string;

    /** CAuthentication_BeginAuthSessionViaCredentials_Request encryptedPassword. */
    public encryptedPassword: string;

    /** CAuthentication_BeginAuthSessionViaCredentials_Request encryptionTimestamp. */
    public encryptionTimestamp: (number|Long);

    /** CAuthentication_BeginAuthSessionViaCredentials_Request rememberLogin. */
    public rememberLogin: boolean;

    /** CAuthentication_BeginAuthSessionViaCredentials_Request platformType. */
    public platformType: EAuthTokenPlatformType;

    /** CAuthentication_BeginAuthSessionViaCredentials_Request persistence. */
    public persistence: ESessionPersistence;

    /** CAuthentication_BeginAuthSessionViaCredentials_Request websiteId. */
    public websiteId: string;

    /** CAuthentication_BeginAuthSessionViaCredentials_Request deviceDetails. */
    public deviceDetails?: (ICAuthentication_DeviceDetails|null);

    /** CAuthentication_BeginAuthSessionViaCredentials_Request guardData. */
    public guardData: string;

    /** CAuthentication_BeginAuthSessionViaCredentials_Request language. */
    public language: number;

    /** CAuthentication_BeginAuthSessionViaCredentials_Request qosLevel. */
    public qosLevel: number;

    /**
     * Creates a new CAuthentication_BeginAuthSessionViaCredentials_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_BeginAuthSessionViaCredentials_Request instance
     */
    public static create(properties?: ICAuthentication_BeginAuthSessionViaCredentials_Request): CAuthentication_BeginAuthSessionViaCredentials_Request;

    /**
     * Encodes the specified CAuthentication_BeginAuthSessionViaCredentials_Request message. Does not implicitly {@link CAuthentication_BeginAuthSessionViaCredentials_Request.verify|verify} messages.
     * @param message CAuthentication_BeginAuthSessionViaCredentials_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_BeginAuthSessionViaCredentials_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_BeginAuthSessionViaCredentials_Request message, length delimited. Does not implicitly {@link CAuthentication_BeginAuthSessionViaCredentials_Request.verify|verify} messages.
     * @param message CAuthentication_BeginAuthSessionViaCredentials_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_BeginAuthSessionViaCredentials_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_BeginAuthSessionViaCredentials_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_BeginAuthSessionViaCredentials_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_BeginAuthSessionViaCredentials_Request;

    /**
     * Decodes a CAuthentication_BeginAuthSessionViaCredentials_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_BeginAuthSessionViaCredentials_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_BeginAuthSessionViaCredentials_Request;

    /**
     * Verifies a CAuthentication_BeginAuthSessionViaCredentials_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_BeginAuthSessionViaCredentials_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_BeginAuthSessionViaCredentials_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_BeginAuthSessionViaCredentials_Request;

    /**
     * Creates a plain object from a CAuthentication_BeginAuthSessionViaCredentials_Request message. Also converts values to other types if specified.
     * @param message CAuthentication_BeginAuthSessionViaCredentials_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_BeginAuthSessionViaCredentials_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_BeginAuthSessionViaCredentials_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_BeginAuthSessionViaCredentials_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_BeginAuthSessionViaCredentials_Response. */
export class CAuthentication_BeginAuthSessionViaCredentials_Response implements ICAuthentication_BeginAuthSessionViaCredentials_Response {

    /**
     * Constructs a new CAuthentication_BeginAuthSessionViaCredentials_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_BeginAuthSessionViaCredentials_Response);

    /** CAuthentication_BeginAuthSessionViaCredentials_Response clientId. */
    public clientId: (number|Long);

    /** CAuthentication_BeginAuthSessionViaCredentials_Response requestId. */
    public requestId: Uint8Array;

    /** CAuthentication_BeginAuthSessionViaCredentials_Response interval. */
    public interval: number;

    /** CAuthentication_BeginAuthSessionViaCredentials_Response allowedConfirmations. */
    public allowedConfirmations: ICAuthentication_AllowedConfirmation[];

    /** CAuthentication_BeginAuthSessionViaCredentials_Response steamid. */
    public steamid: (number|Long);

    /** CAuthentication_BeginAuthSessionViaCredentials_Response weakToken. */
    public weakToken: string;

    /** CAuthentication_BeginAuthSessionViaCredentials_Response agreementSessionUrl. */
    public agreementSessionUrl: string;

    /** CAuthentication_BeginAuthSessionViaCredentials_Response extendedErrorMessage. */
    public extendedErrorMessage: string;

    /**
     * Creates a new CAuthentication_BeginAuthSessionViaCredentials_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_BeginAuthSessionViaCredentials_Response instance
     */
    public static create(properties?: ICAuthentication_BeginAuthSessionViaCredentials_Response): CAuthentication_BeginAuthSessionViaCredentials_Response;

    /**
     * Encodes the specified CAuthentication_BeginAuthSessionViaCredentials_Response message. Does not implicitly {@link CAuthentication_BeginAuthSessionViaCredentials_Response.verify|verify} messages.
     * @param message CAuthentication_BeginAuthSessionViaCredentials_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_BeginAuthSessionViaCredentials_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_BeginAuthSessionViaCredentials_Response message, length delimited. Does not implicitly {@link CAuthentication_BeginAuthSessionViaCredentials_Response.verify|verify} messages.
     * @param message CAuthentication_BeginAuthSessionViaCredentials_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_BeginAuthSessionViaCredentials_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_BeginAuthSessionViaCredentials_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_BeginAuthSessionViaCredentials_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_BeginAuthSessionViaCredentials_Response;

    /**
     * Decodes a CAuthentication_BeginAuthSessionViaCredentials_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_BeginAuthSessionViaCredentials_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_BeginAuthSessionViaCredentials_Response;

    /**
     * Verifies a CAuthentication_BeginAuthSessionViaCredentials_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_BeginAuthSessionViaCredentials_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_BeginAuthSessionViaCredentials_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_BeginAuthSessionViaCredentials_Response;

    /**
     * Creates a plain object from a CAuthentication_BeginAuthSessionViaCredentials_Response message. Also converts values to other types if specified.
     * @param message CAuthentication_BeginAuthSessionViaCredentials_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_BeginAuthSessionViaCredentials_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_BeginAuthSessionViaCredentials_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_BeginAuthSessionViaCredentials_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_PollAuthSessionStatus_Request. */
export class CAuthentication_PollAuthSessionStatus_Request implements ICAuthentication_PollAuthSessionStatus_Request {

    /**
     * Constructs a new CAuthentication_PollAuthSessionStatus_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_PollAuthSessionStatus_Request);

    /** CAuthentication_PollAuthSessionStatus_Request clientId. */
    public clientId: (number|Long);

    /** CAuthentication_PollAuthSessionStatus_Request requestId. */
    public requestId: Uint8Array;

    /** CAuthentication_PollAuthSessionStatus_Request tokenToRevoke. */
    public tokenToRevoke: (number|Long);

    /**
     * Creates a new CAuthentication_PollAuthSessionStatus_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_PollAuthSessionStatus_Request instance
     */
    public static create(properties?: ICAuthentication_PollAuthSessionStatus_Request): CAuthentication_PollAuthSessionStatus_Request;

    /**
     * Encodes the specified CAuthentication_PollAuthSessionStatus_Request message. Does not implicitly {@link CAuthentication_PollAuthSessionStatus_Request.verify|verify} messages.
     * @param message CAuthentication_PollAuthSessionStatus_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_PollAuthSessionStatus_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_PollAuthSessionStatus_Request message, length delimited. Does not implicitly {@link CAuthentication_PollAuthSessionStatus_Request.verify|verify} messages.
     * @param message CAuthentication_PollAuthSessionStatus_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_PollAuthSessionStatus_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_PollAuthSessionStatus_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_PollAuthSessionStatus_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_PollAuthSessionStatus_Request;

    /**
     * Decodes a CAuthentication_PollAuthSessionStatus_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_PollAuthSessionStatus_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_PollAuthSessionStatus_Request;

    /**
     * Verifies a CAuthentication_PollAuthSessionStatus_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_PollAuthSessionStatus_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_PollAuthSessionStatus_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_PollAuthSessionStatus_Request;

    /**
     * Creates a plain object from a CAuthentication_PollAuthSessionStatus_Request message. Also converts values to other types if specified.
     * @param message CAuthentication_PollAuthSessionStatus_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_PollAuthSessionStatus_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_PollAuthSessionStatus_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_PollAuthSessionStatus_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_PollAuthSessionStatus_Response. */
export class CAuthentication_PollAuthSessionStatus_Response implements ICAuthentication_PollAuthSessionStatus_Response {

    /**
     * Constructs a new CAuthentication_PollAuthSessionStatus_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_PollAuthSessionStatus_Response);

    /** CAuthentication_PollAuthSessionStatus_Response newClientId. */
    public newClientId: (number|Long);

    /** CAuthentication_PollAuthSessionStatus_Response newChallengeUrl. */
    public newChallengeUrl: string;

    /** CAuthentication_PollAuthSessionStatus_Response refreshToken. */
    public refreshToken: string;

    /** CAuthentication_PollAuthSessionStatus_Response accessToken. */
    public accessToken: string;

    /** CAuthentication_PollAuthSessionStatus_Response hadRemoteInteraction. */
    public hadRemoteInteraction: boolean;

    /** CAuthentication_PollAuthSessionStatus_Response accountName. */
    public accountName: string;

    /** CAuthentication_PollAuthSessionStatus_Response newGuardData. */
    public newGuardData: string;

    /** CAuthentication_PollAuthSessionStatus_Response agreementSessionUrl. */
    public agreementSessionUrl: string;

    /**
     * Creates a new CAuthentication_PollAuthSessionStatus_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_PollAuthSessionStatus_Response instance
     */
    public static create(properties?: ICAuthentication_PollAuthSessionStatus_Response): CAuthentication_PollAuthSessionStatus_Response;

    /**
     * Encodes the specified CAuthentication_PollAuthSessionStatus_Response message. Does not implicitly {@link CAuthentication_PollAuthSessionStatus_Response.verify|verify} messages.
     * @param message CAuthentication_PollAuthSessionStatus_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_PollAuthSessionStatus_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_PollAuthSessionStatus_Response message, length delimited. Does not implicitly {@link CAuthentication_PollAuthSessionStatus_Response.verify|verify} messages.
     * @param message CAuthentication_PollAuthSessionStatus_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_PollAuthSessionStatus_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_PollAuthSessionStatus_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_PollAuthSessionStatus_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_PollAuthSessionStatus_Response;

    /**
     * Decodes a CAuthentication_PollAuthSessionStatus_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_PollAuthSessionStatus_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_PollAuthSessionStatus_Response;

    /**
     * Verifies a CAuthentication_PollAuthSessionStatus_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_PollAuthSessionStatus_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_PollAuthSessionStatus_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_PollAuthSessionStatus_Response;

    /**
     * Creates a plain object from a CAuthentication_PollAuthSessionStatus_Response message. Also converts values to other types if specified.
     * @param message CAuthentication_PollAuthSessionStatus_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_PollAuthSessionStatus_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_PollAuthSessionStatus_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_PollAuthSessionStatus_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_GetAuthSessionInfo_Request. */
export class CAuthentication_GetAuthSessionInfo_Request implements ICAuthentication_GetAuthSessionInfo_Request {

    /**
     * Constructs a new CAuthentication_GetAuthSessionInfo_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_GetAuthSessionInfo_Request);

    /** CAuthentication_GetAuthSessionInfo_Request clientId. */
    public clientId: (number|Long);

    /**
     * Creates a new CAuthentication_GetAuthSessionInfo_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_GetAuthSessionInfo_Request instance
     */
    public static create(properties?: ICAuthentication_GetAuthSessionInfo_Request): CAuthentication_GetAuthSessionInfo_Request;

    /**
     * Encodes the specified CAuthentication_GetAuthSessionInfo_Request message. Does not implicitly {@link CAuthentication_GetAuthSessionInfo_Request.verify|verify} messages.
     * @param message CAuthentication_GetAuthSessionInfo_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_GetAuthSessionInfo_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_GetAuthSessionInfo_Request message, length delimited. Does not implicitly {@link CAuthentication_GetAuthSessionInfo_Request.verify|verify} messages.
     * @param message CAuthentication_GetAuthSessionInfo_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_GetAuthSessionInfo_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_GetAuthSessionInfo_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_GetAuthSessionInfo_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_GetAuthSessionInfo_Request;

    /**
     * Decodes a CAuthentication_GetAuthSessionInfo_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_GetAuthSessionInfo_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_GetAuthSessionInfo_Request;

    /**
     * Verifies a CAuthentication_GetAuthSessionInfo_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_GetAuthSessionInfo_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_GetAuthSessionInfo_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_GetAuthSessionInfo_Request;

    /**
     * Creates a plain object from a CAuthentication_GetAuthSessionInfo_Request message. Also converts values to other types if specified.
     * @param message CAuthentication_GetAuthSessionInfo_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_GetAuthSessionInfo_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_GetAuthSessionInfo_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_GetAuthSessionInfo_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_GetAuthSessionInfo_Response. */
export class CAuthentication_GetAuthSessionInfo_Response implements ICAuthentication_GetAuthSessionInfo_Response {

    /**
     * Constructs a new CAuthentication_GetAuthSessionInfo_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_GetAuthSessionInfo_Response);

    /** CAuthentication_GetAuthSessionInfo_Response ip. */
    public ip: string;

    /** CAuthentication_GetAuthSessionInfo_Response geoloc. */
    public geoloc: string;

    /** CAuthentication_GetAuthSessionInfo_Response city. */
    public city: string;

    /** CAuthentication_GetAuthSessionInfo_Response state. */
    public state: string;

    /** CAuthentication_GetAuthSessionInfo_Response country. */
    public country: string;

    /** CAuthentication_GetAuthSessionInfo_Response platformType. */
    public platformType: EAuthTokenPlatformType;

    /** CAuthentication_GetAuthSessionInfo_Response deviceFriendlyName. */
    public deviceFriendlyName: string;

    /** CAuthentication_GetAuthSessionInfo_Response version. */
    public version: number;

    /** CAuthentication_GetAuthSessionInfo_Response loginHistory. */
    public loginHistory: EAuthSessionSecurityHistory;

    /** CAuthentication_GetAuthSessionInfo_Response requestorLocationMismatch. */
    public requestorLocationMismatch: boolean;

    /** CAuthentication_GetAuthSessionInfo_Response highUsageLogin. */
    public highUsageLogin: boolean;

    /** CAuthentication_GetAuthSessionInfo_Response requestedPersistence. */
    public requestedPersistence: ESessionPersistence;

    /**
     * Creates a new CAuthentication_GetAuthSessionInfo_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_GetAuthSessionInfo_Response instance
     */
    public static create(properties?: ICAuthentication_GetAuthSessionInfo_Response): CAuthentication_GetAuthSessionInfo_Response;

    /**
     * Encodes the specified CAuthentication_GetAuthSessionInfo_Response message. Does not implicitly {@link CAuthentication_GetAuthSessionInfo_Response.verify|verify} messages.
     * @param message CAuthentication_GetAuthSessionInfo_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_GetAuthSessionInfo_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_GetAuthSessionInfo_Response message, length delimited. Does not implicitly {@link CAuthentication_GetAuthSessionInfo_Response.verify|verify} messages.
     * @param message CAuthentication_GetAuthSessionInfo_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_GetAuthSessionInfo_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_GetAuthSessionInfo_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_GetAuthSessionInfo_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_GetAuthSessionInfo_Response;

    /**
     * Decodes a CAuthentication_GetAuthSessionInfo_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_GetAuthSessionInfo_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_GetAuthSessionInfo_Response;

    /**
     * Verifies a CAuthentication_GetAuthSessionInfo_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_GetAuthSessionInfo_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_GetAuthSessionInfo_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_GetAuthSessionInfo_Response;

    /**
     * Creates a plain object from a CAuthentication_GetAuthSessionInfo_Response message. Also converts values to other types if specified.
     * @param message CAuthentication_GetAuthSessionInfo_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_GetAuthSessionInfo_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_GetAuthSessionInfo_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_GetAuthSessionInfo_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request. */
export class CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request implements ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Request {

    /**
     * Constructs a new CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Request);

    /** CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request version. */
    public version: number;

    /** CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request clientId. */
    public clientId: (number|Long);

    /** CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request steamid. */
    public steamid: (number|Long);

    /** CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request signature. */
    public signature: Uint8Array;

    /** CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request confirm. */
    public confirm: boolean;

    /** CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request persistence. */
    public persistence: ESessionPersistence;

    /**
     * Creates a new CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request instance
     */
    public static create(properties?: ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Request): CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request;

    /**
     * Encodes the specified CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message. Does not implicitly {@link CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.verify|verify} messages.
     * @param message CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message, length delimited. Does not implicitly {@link CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request.verify|verify} messages.
     * @param message CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request;

    /**
     * Decodes a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request;

    /**
     * Verifies a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request;

    /**
     * Creates a plain object from a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message. Also converts values to other types if specified.
     * @param message CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response. */
export class CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response implements ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Response {

    /**
     * Constructs a new CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Response);

    /**
     * Creates a new CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response instance
     */
    public static create(properties?: ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Response): CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response;

    /**
     * Encodes the specified CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message. Does not implicitly {@link CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.verify|verify} messages.
     * @param message CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message, length delimited. Does not implicitly {@link CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response.verify|verify} messages.
     * @param message CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response;

    /**
     * Decodes a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response;

    /**
     * Verifies a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response;

    /**
     * Creates a plain object from a CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response message. Also converts values to other types if specified.
     * @param message CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request. */
export class CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request implements ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Request {

    /**
     * Constructs a new CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Request);

    /** CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request clientId. */
    public clientId: (number|Long);

    /** CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request steamid. */
    public steamid: (number|Long);

    /** CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request code. */
    public code: string;

    /** CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request codeType. */
    public codeType: EAuthSessionGuardType;

    /**
     * Creates a new CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request instance
     */
    public static create(properties?: ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Request): CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request;

    /**
     * Encodes the specified CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message. Does not implicitly {@link CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.verify|verify} messages.
     * @param message CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message, length delimited. Does not implicitly {@link CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request.verify|verify} messages.
     * @param message CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request;

    /**
     * Decodes a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request;

    /**
     * Verifies a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request;

    /**
     * Creates a plain object from a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message. Also converts values to other types if specified.
     * @param message CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response. */
export class CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response implements ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Response {

    /**
     * Constructs a new CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Response);

    /** CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response agreementSessionUrl. */
    public agreementSessionUrl: string;

    /**
     * Creates a new CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response instance
     */
    public static create(properties?: ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Response): CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response;

    /**
     * Encodes the specified CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message. Does not implicitly {@link CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.verify|verify} messages.
     * @param message CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message, length delimited. Does not implicitly {@link CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response.verify|verify} messages.
     * @param message CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response;

    /**
     * Decodes a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response;

    /**
     * Verifies a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response;

    /**
     * Creates a plain object from a CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response message. Also converts values to other types if specified.
     * @param message CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_AccessToken_GenerateForApp_Request. */
export class CAuthentication_AccessToken_GenerateForApp_Request implements ICAuthentication_AccessToken_GenerateForApp_Request {

    /**
     * Constructs a new CAuthentication_AccessToken_GenerateForApp_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_AccessToken_GenerateForApp_Request);

    /** CAuthentication_AccessToken_GenerateForApp_Request refreshToken. */
    public refreshToken: string;

    /** CAuthentication_AccessToken_GenerateForApp_Request steamid. */
    public steamid: (number|Long);

    /** CAuthentication_AccessToken_GenerateForApp_Request renewalType. */
    public renewalType: ETokenRenewalType;

    /**
     * Creates a new CAuthentication_AccessToken_GenerateForApp_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_AccessToken_GenerateForApp_Request instance
     */
    public static create(properties?: ICAuthentication_AccessToken_GenerateForApp_Request): CAuthentication_AccessToken_GenerateForApp_Request;

    /**
     * Encodes the specified CAuthentication_AccessToken_GenerateForApp_Request message. Does not implicitly {@link CAuthentication_AccessToken_GenerateForApp_Request.verify|verify} messages.
     * @param message CAuthentication_AccessToken_GenerateForApp_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_AccessToken_GenerateForApp_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_AccessToken_GenerateForApp_Request message, length delimited. Does not implicitly {@link CAuthentication_AccessToken_GenerateForApp_Request.verify|verify} messages.
     * @param message CAuthentication_AccessToken_GenerateForApp_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_AccessToken_GenerateForApp_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_AccessToken_GenerateForApp_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_AccessToken_GenerateForApp_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_AccessToken_GenerateForApp_Request;

    /**
     * Decodes a CAuthentication_AccessToken_GenerateForApp_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_AccessToken_GenerateForApp_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_AccessToken_GenerateForApp_Request;

    /**
     * Verifies a CAuthentication_AccessToken_GenerateForApp_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_AccessToken_GenerateForApp_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_AccessToken_GenerateForApp_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_AccessToken_GenerateForApp_Request;

    /**
     * Creates a plain object from a CAuthentication_AccessToken_GenerateForApp_Request message. Also converts values to other types if specified.
     * @param message CAuthentication_AccessToken_GenerateForApp_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_AccessToken_GenerateForApp_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_AccessToken_GenerateForApp_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_AccessToken_GenerateForApp_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_AccessToken_GenerateForApp_Response. */
export class CAuthentication_AccessToken_GenerateForApp_Response implements ICAuthentication_AccessToken_GenerateForApp_Response {

    /**
     * Constructs a new CAuthentication_AccessToken_GenerateForApp_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_AccessToken_GenerateForApp_Response);

    /** CAuthentication_AccessToken_GenerateForApp_Response accessToken. */
    public accessToken: string;

    /** CAuthentication_AccessToken_GenerateForApp_Response refreshToken. */
    public refreshToken: string;

    /**
     * Creates a new CAuthentication_AccessToken_GenerateForApp_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_AccessToken_GenerateForApp_Response instance
     */
    public static create(properties?: ICAuthentication_AccessToken_GenerateForApp_Response): CAuthentication_AccessToken_GenerateForApp_Response;

    /**
     * Encodes the specified CAuthentication_AccessToken_GenerateForApp_Response message. Does not implicitly {@link CAuthentication_AccessToken_GenerateForApp_Response.verify|verify} messages.
     * @param message CAuthentication_AccessToken_GenerateForApp_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_AccessToken_GenerateForApp_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_AccessToken_GenerateForApp_Response message, length delimited. Does not implicitly {@link CAuthentication_AccessToken_GenerateForApp_Response.verify|verify} messages.
     * @param message CAuthentication_AccessToken_GenerateForApp_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_AccessToken_GenerateForApp_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_AccessToken_GenerateForApp_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_AccessToken_GenerateForApp_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_AccessToken_GenerateForApp_Response;

    /**
     * Decodes a CAuthentication_AccessToken_GenerateForApp_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_AccessToken_GenerateForApp_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_AccessToken_GenerateForApp_Response;

    /**
     * Verifies a CAuthentication_AccessToken_GenerateForApp_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_AccessToken_GenerateForApp_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_AccessToken_GenerateForApp_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_AccessToken_GenerateForApp_Response;

    /**
     * Creates a plain object from a CAuthentication_AccessToken_GenerateForApp_Response message. Also converts values to other types if specified.
     * @param message CAuthentication_AccessToken_GenerateForApp_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_AccessToken_GenerateForApp_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_AccessToken_GenerateForApp_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_AccessToken_GenerateForApp_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_RefreshToken_Enumerate_Request. */
export class CAuthentication_RefreshToken_Enumerate_Request implements ICAuthentication_RefreshToken_Enumerate_Request {

    /**
     * Constructs a new CAuthentication_RefreshToken_Enumerate_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_RefreshToken_Enumerate_Request);

    /**
     * Creates a new CAuthentication_RefreshToken_Enumerate_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_RefreshToken_Enumerate_Request instance
     */
    public static create(properties?: ICAuthentication_RefreshToken_Enumerate_Request): CAuthentication_RefreshToken_Enumerate_Request;

    /**
     * Encodes the specified CAuthentication_RefreshToken_Enumerate_Request message. Does not implicitly {@link CAuthentication_RefreshToken_Enumerate_Request.verify|verify} messages.
     * @param message CAuthentication_RefreshToken_Enumerate_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_RefreshToken_Enumerate_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_RefreshToken_Enumerate_Request message, length delimited. Does not implicitly {@link CAuthentication_RefreshToken_Enumerate_Request.verify|verify} messages.
     * @param message CAuthentication_RefreshToken_Enumerate_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_RefreshToken_Enumerate_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_RefreshToken_Enumerate_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_RefreshToken_Enumerate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_RefreshToken_Enumerate_Request;

    /**
     * Decodes a CAuthentication_RefreshToken_Enumerate_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_RefreshToken_Enumerate_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_RefreshToken_Enumerate_Request;

    /**
     * Verifies a CAuthentication_RefreshToken_Enumerate_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_RefreshToken_Enumerate_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_RefreshToken_Enumerate_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_RefreshToken_Enumerate_Request;

    /**
     * Creates a plain object from a CAuthentication_RefreshToken_Enumerate_Request message. Also converts values to other types if specified.
     * @param message CAuthentication_RefreshToken_Enumerate_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_RefreshToken_Enumerate_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_RefreshToken_Enumerate_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_RefreshToken_Enumerate_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_RefreshToken_Enumerate_Response. */
export class CAuthentication_RefreshToken_Enumerate_Response implements ICAuthentication_RefreshToken_Enumerate_Response {

    /**
     * Constructs a new CAuthentication_RefreshToken_Enumerate_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_RefreshToken_Enumerate_Response);

    /** CAuthentication_RefreshToken_Enumerate_Response refreshTokens. */
    public refreshTokens: CAuthentication_RefreshToken_Enumerate_Response.IRefreshTokenDescription[];

    /** CAuthentication_RefreshToken_Enumerate_Response requestingToken. */
    public requestingToken: (number|Long);

    /**
     * Creates a new CAuthentication_RefreshToken_Enumerate_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_RefreshToken_Enumerate_Response instance
     */
    public static create(properties?: ICAuthentication_RefreshToken_Enumerate_Response): CAuthentication_RefreshToken_Enumerate_Response;

    /**
     * Encodes the specified CAuthentication_RefreshToken_Enumerate_Response message. Does not implicitly {@link CAuthentication_RefreshToken_Enumerate_Response.verify|verify} messages.
     * @param message CAuthentication_RefreshToken_Enumerate_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_RefreshToken_Enumerate_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_RefreshToken_Enumerate_Response message, length delimited. Does not implicitly {@link CAuthentication_RefreshToken_Enumerate_Response.verify|verify} messages.
     * @param message CAuthentication_RefreshToken_Enumerate_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_RefreshToken_Enumerate_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_RefreshToken_Enumerate_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_RefreshToken_Enumerate_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_RefreshToken_Enumerate_Response;

    /**
     * Decodes a CAuthentication_RefreshToken_Enumerate_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_RefreshToken_Enumerate_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_RefreshToken_Enumerate_Response;

    /**
     * Verifies a CAuthentication_RefreshToken_Enumerate_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_RefreshToken_Enumerate_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_RefreshToken_Enumerate_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_RefreshToken_Enumerate_Response;

    /**
     * Creates a plain object from a CAuthentication_RefreshToken_Enumerate_Response message. Also converts values to other types if specified.
     * @param message CAuthentication_RefreshToken_Enumerate_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_RefreshToken_Enumerate_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_RefreshToken_Enumerate_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_RefreshToken_Enumerate_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CAuthentication_RefreshToken_Enumerate_Response {

    /** Properties of a TokenUsageEvent. */
    interface ITokenUsageEvent {

        /** TokenUsageEvent time */
        time?: (number|null);

        /** TokenUsageEvent ip */
        ip?: (ICMsgIPAddress|null);

        /** TokenUsageEvent locale */
        locale?: (string|null);

        /** TokenUsageEvent country */
        country?: (string|null);

        /** TokenUsageEvent state */
        state?: (string|null);

        /** TokenUsageEvent city */
        city?: (string|null);
    }

    /** Represents a TokenUsageEvent. */
    class TokenUsageEvent implements ITokenUsageEvent {

        /**
         * Constructs a new TokenUsageEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: CAuthentication_RefreshToken_Enumerate_Response.ITokenUsageEvent);

        /** TokenUsageEvent time. */
        public time: number;

        /** TokenUsageEvent ip. */
        public ip?: (ICMsgIPAddress|null);

        /** TokenUsageEvent locale. */
        public locale: string;

        /** TokenUsageEvent country. */
        public country: string;

        /** TokenUsageEvent state. */
        public state: string;

        /** TokenUsageEvent city. */
        public city: string;

        /**
         * Creates a new TokenUsageEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenUsageEvent instance
         */
        public static create(properties?: CAuthentication_RefreshToken_Enumerate_Response.ITokenUsageEvent): CAuthentication_RefreshToken_Enumerate_Response.TokenUsageEvent;

        /**
         * Encodes the specified TokenUsageEvent message. Does not implicitly {@link CAuthentication_RefreshToken_Enumerate_Response.TokenUsageEvent.verify|verify} messages.
         * @param message TokenUsageEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CAuthentication_RefreshToken_Enumerate_Response.ITokenUsageEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenUsageEvent message, length delimited. Does not implicitly {@link CAuthentication_RefreshToken_Enumerate_Response.TokenUsageEvent.verify|verify} messages.
         * @param message TokenUsageEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CAuthentication_RefreshToken_Enumerate_Response.ITokenUsageEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenUsageEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenUsageEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_RefreshToken_Enumerate_Response.TokenUsageEvent;

        /**
         * Decodes a TokenUsageEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenUsageEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_RefreshToken_Enumerate_Response.TokenUsageEvent;

        /**
         * Verifies a TokenUsageEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenUsageEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenUsageEvent
         */
        public static fromObject(object: { [k: string]: any }): CAuthentication_RefreshToken_Enumerate_Response.TokenUsageEvent;

        /**
         * Creates a plain object from a TokenUsageEvent message. Also converts values to other types if specified.
         * @param message TokenUsageEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CAuthentication_RefreshToken_Enumerate_Response.TokenUsageEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenUsageEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TokenUsageEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }

    /** Properties of a RefreshTokenDescription. */
    interface IRefreshTokenDescription {

        /** RefreshTokenDescription tokenId */
        tokenId?: (number|Long|null);

        /** RefreshTokenDescription tokenDescription */
        tokenDescription?: (string|null);

        /** RefreshTokenDescription timeUpdated */
        timeUpdated?: (number|null);

        /** RefreshTokenDescription platformType */
        platformType?: (EAuthTokenPlatformType|null);

        /** RefreshTokenDescription loggedIn */
        loggedIn?: (boolean|null);

        /** RefreshTokenDescription osPlatform */
        osPlatform?: (number|null);

        /** RefreshTokenDescription authType */
        authType?: (number|null);

        /** RefreshTokenDescription gamingDeviceType */
        gamingDeviceType?: (number|null);

        /** RefreshTokenDescription firstSeen */
        firstSeen?: (CAuthentication_RefreshToken_Enumerate_Response.ITokenUsageEvent|null);

        /** RefreshTokenDescription lastSeen */
        lastSeen?: (CAuthentication_RefreshToken_Enumerate_Response.ITokenUsageEvent|null);

        /** RefreshTokenDescription osType */
        osType?: (number|null);
    }

    /** Represents a RefreshTokenDescription. */
    class RefreshTokenDescription implements IRefreshTokenDescription {

        /**
         * Constructs a new RefreshTokenDescription.
         * @param [properties] Properties to set
         */
        constructor(properties?: CAuthentication_RefreshToken_Enumerate_Response.IRefreshTokenDescription);

        /** RefreshTokenDescription tokenId. */
        public tokenId: (number|Long);

        /** RefreshTokenDescription tokenDescription. */
        public tokenDescription: string;

        /** RefreshTokenDescription timeUpdated. */
        public timeUpdated: number;

        /** RefreshTokenDescription platformType. */
        public platformType: EAuthTokenPlatformType;

        /** RefreshTokenDescription loggedIn. */
        public loggedIn: boolean;

        /** RefreshTokenDescription osPlatform. */
        public osPlatform: number;

        /** RefreshTokenDescription authType. */
        public authType: number;

        /** RefreshTokenDescription gamingDeviceType. */
        public gamingDeviceType: number;

        /** RefreshTokenDescription firstSeen. */
        public firstSeen?: (CAuthentication_RefreshToken_Enumerate_Response.ITokenUsageEvent|null);

        /** RefreshTokenDescription lastSeen. */
        public lastSeen?: (CAuthentication_RefreshToken_Enumerate_Response.ITokenUsageEvent|null);

        /** RefreshTokenDescription osType. */
        public osType: number;

        /**
         * Creates a new RefreshTokenDescription instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RefreshTokenDescription instance
         */
        public static create(properties?: CAuthentication_RefreshToken_Enumerate_Response.IRefreshTokenDescription): CAuthentication_RefreshToken_Enumerate_Response.RefreshTokenDescription;

        /**
         * Encodes the specified RefreshTokenDescription message. Does not implicitly {@link CAuthentication_RefreshToken_Enumerate_Response.RefreshTokenDescription.verify|verify} messages.
         * @param message RefreshTokenDescription message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CAuthentication_RefreshToken_Enumerate_Response.IRefreshTokenDescription, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RefreshTokenDescription message, length delimited. Does not implicitly {@link CAuthentication_RefreshToken_Enumerate_Response.RefreshTokenDescription.verify|verify} messages.
         * @param message RefreshTokenDescription message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CAuthentication_RefreshToken_Enumerate_Response.IRefreshTokenDescription, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RefreshTokenDescription message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RefreshTokenDescription
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_RefreshToken_Enumerate_Response.RefreshTokenDescription;

        /**
         * Decodes a RefreshTokenDescription message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RefreshTokenDescription
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_RefreshToken_Enumerate_Response.RefreshTokenDescription;

        /**
         * Verifies a RefreshTokenDescription message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RefreshTokenDescription message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RefreshTokenDescription
         */
        public static fromObject(object: { [k: string]: any }): CAuthentication_RefreshToken_Enumerate_Response.RefreshTokenDescription;

        /**
         * Creates a plain object from a RefreshTokenDescription message. Also converts values to other types if specified.
         * @param message RefreshTokenDescription
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CAuthentication_RefreshToken_Enumerate_Response.RefreshTokenDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RefreshTokenDescription to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for RefreshTokenDescription
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CAuthentication_GetAuthSessionsForAccount_Request. */
export class CAuthentication_GetAuthSessionsForAccount_Request implements ICAuthentication_GetAuthSessionsForAccount_Request {

    /**
     * Constructs a new CAuthentication_GetAuthSessionsForAccount_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_GetAuthSessionsForAccount_Request);

    /**
     * Creates a new CAuthentication_GetAuthSessionsForAccount_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_GetAuthSessionsForAccount_Request instance
     */
    public static create(properties?: ICAuthentication_GetAuthSessionsForAccount_Request): CAuthentication_GetAuthSessionsForAccount_Request;

    /**
     * Encodes the specified CAuthentication_GetAuthSessionsForAccount_Request message. Does not implicitly {@link CAuthentication_GetAuthSessionsForAccount_Request.verify|verify} messages.
     * @param message CAuthentication_GetAuthSessionsForAccount_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_GetAuthSessionsForAccount_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_GetAuthSessionsForAccount_Request message, length delimited. Does not implicitly {@link CAuthentication_GetAuthSessionsForAccount_Request.verify|verify} messages.
     * @param message CAuthentication_GetAuthSessionsForAccount_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_GetAuthSessionsForAccount_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_GetAuthSessionsForAccount_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_GetAuthSessionsForAccount_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_GetAuthSessionsForAccount_Request;

    /**
     * Decodes a CAuthentication_GetAuthSessionsForAccount_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_GetAuthSessionsForAccount_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_GetAuthSessionsForAccount_Request;

    /**
     * Verifies a CAuthentication_GetAuthSessionsForAccount_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_GetAuthSessionsForAccount_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_GetAuthSessionsForAccount_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_GetAuthSessionsForAccount_Request;

    /**
     * Creates a plain object from a CAuthentication_GetAuthSessionsForAccount_Request message. Also converts values to other types if specified.
     * @param message CAuthentication_GetAuthSessionsForAccount_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_GetAuthSessionsForAccount_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_GetAuthSessionsForAccount_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_GetAuthSessionsForAccount_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_GetAuthSessionsForAccount_Response. */
export class CAuthentication_GetAuthSessionsForAccount_Response implements ICAuthentication_GetAuthSessionsForAccount_Response {

    /**
     * Constructs a new CAuthentication_GetAuthSessionsForAccount_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_GetAuthSessionsForAccount_Response);

    /** CAuthentication_GetAuthSessionsForAccount_Response clientIds. */
    public clientIds: (number|Long)[];

    /**
     * Creates a new CAuthentication_GetAuthSessionsForAccount_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_GetAuthSessionsForAccount_Response instance
     */
    public static create(properties?: ICAuthentication_GetAuthSessionsForAccount_Response): CAuthentication_GetAuthSessionsForAccount_Response;

    /**
     * Encodes the specified CAuthentication_GetAuthSessionsForAccount_Response message. Does not implicitly {@link CAuthentication_GetAuthSessionsForAccount_Response.verify|verify} messages.
     * @param message CAuthentication_GetAuthSessionsForAccount_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_GetAuthSessionsForAccount_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_GetAuthSessionsForAccount_Response message, length delimited. Does not implicitly {@link CAuthentication_GetAuthSessionsForAccount_Response.verify|verify} messages.
     * @param message CAuthentication_GetAuthSessionsForAccount_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_GetAuthSessionsForAccount_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_GetAuthSessionsForAccount_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_GetAuthSessionsForAccount_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_GetAuthSessionsForAccount_Response;

    /**
     * Decodes a CAuthentication_GetAuthSessionsForAccount_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_GetAuthSessionsForAccount_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_GetAuthSessionsForAccount_Response;

    /**
     * Verifies a CAuthentication_GetAuthSessionsForAccount_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_GetAuthSessionsForAccount_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_GetAuthSessionsForAccount_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_GetAuthSessionsForAccount_Response;

    /**
     * Creates a plain object from a CAuthentication_GetAuthSessionsForAccount_Response message. Also converts values to other types if specified.
     * @param message CAuthentication_GetAuthSessionsForAccount_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_GetAuthSessionsForAccount_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_GetAuthSessionsForAccount_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_GetAuthSessionsForAccount_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_MigrateMobileSession_Request. */
export class CAuthentication_MigrateMobileSession_Request implements ICAuthentication_MigrateMobileSession_Request {

    /**
     * Constructs a new CAuthentication_MigrateMobileSession_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_MigrateMobileSession_Request);

    /** CAuthentication_MigrateMobileSession_Request steamid. */
    public steamid: (number|Long);

    /** CAuthentication_MigrateMobileSession_Request token. */
    public token: string;

    /** CAuthentication_MigrateMobileSession_Request signature. */
    public signature: string;

    /**
     * Creates a new CAuthentication_MigrateMobileSession_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_MigrateMobileSession_Request instance
     */
    public static create(properties?: ICAuthentication_MigrateMobileSession_Request): CAuthentication_MigrateMobileSession_Request;

    /**
     * Encodes the specified CAuthentication_MigrateMobileSession_Request message. Does not implicitly {@link CAuthentication_MigrateMobileSession_Request.verify|verify} messages.
     * @param message CAuthentication_MigrateMobileSession_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_MigrateMobileSession_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_MigrateMobileSession_Request message, length delimited. Does not implicitly {@link CAuthentication_MigrateMobileSession_Request.verify|verify} messages.
     * @param message CAuthentication_MigrateMobileSession_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_MigrateMobileSession_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_MigrateMobileSession_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_MigrateMobileSession_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_MigrateMobileSession_Request;

    /**
     * Decodes a CAuthentication_MigrateMobileSession_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_MigrateMobileSession_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_MigrateMobileSession_Request;

    /**
     * Verifies a CAuthentication_MigrateMobileSession_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_MigrateMobileSession_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_MigrateMobileSession_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_MigrateMobileSession_Request;

    /**
     * Creates a plain object from a CAuthentication_MigrateMobileSession_Request message. Also converts values to other types if specified.
     * @param message CAuthentication_MigrateMobileSession_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_MigrateMobileSession_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_MigrateMobileSession_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_MigrateMobileSession_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_MigrateMobileSession_Response. */
export class CAuthentication_MigrateMobileSession_Response implements ICAuthentication_MigrateMobileSession_Response {

    /**
     * Constructs a new CAuthentication_MigrateMobileSession_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_MigrateMobileSession_Response);

    /** CAuthentication_MigrateMobileSession_Response refreshToken. */
    public refreshToken: string;

    /** CAuthentication_MigrateMobileSession_Response accessToken. */
    public accessToken: string;

    /**
     * Creates a new CAuthentication_MigrateMobileSession_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_MigrateMobileSession_Response instance
     */
    public static create(properties?: ICAuthentication_MigrateMobileSession_Response): CAuthentication_MigrateMobileSession_Response;

    /**
     * Encodes the specified CAuthentication_MigrateMobileSession_Response message. Does not implicitly {@link CAuthentication_MigrateMobileSession_Response.verify|verify} messages.
     * @param message CAuthentication_MigrateMobileSession_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_MigrateMobileSession_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_MigrateMobileSession_Response message, length delimited. Does not implicitly {@link CAuthentication_MigrateMobileSession_Response.verify|verify} messages.
     * @param message CAuthentication_MigrateMobileSession_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_MigrateMobileSession_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_MigrateMobileSession_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_MigrateMobileSession_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_MigrateMobileSession_Response;

    /**
     * Decodes a CAuthentication_MigrateMobileSession_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_MigrateMobileSession_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_MigrateMobileSession_Response;

    /**
     * Verifies a CAuthentication_MigrateMobileSession_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_MigrateMobileSession_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_MigrateMobileSession_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_MigrateMobileSession_Response;

    /**
     * Creates a plain object from a CAuthentication_MigrateMobileSession_Response message. Also converts values to other types if specified.
     * @param message CAuthentication_MigrateMobileSession_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_MigrateMobileSession_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_MigrateMobileSession_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_MigrateMobileSession_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_Token_Revoke_Request. */
export class CAuthentication_Token_Revoke_Request implements ICAuthentication_Token_Revoke_Request {

    /**
     * Constructs a new CAuthentication_Token_Revoke_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_Token_Revoke_Request);

    /** CAuthentication_Token_Revoke_Request token. */
    public token: string;

    /** CAuthentication_Token_Revoke_Request revokeAction. */
    public revokeAction: EAuthTokenRevokeAction;

    /**
     * Creates a new CAuthentication_Token_Revoke_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_Token_Revoke_Request instance
     */
    public static create(properties?: ICAuthentication_Token_Revoke_Request): CAuthentication_Token_Revoke_Request;

    /**
     * Encodes the specified CAuthentication_Token_Revoke_Request message. Does not implicitly {@link CAuthentication_Token_Revoke_Request.verify|verify} messages.
     * @param message CAuthentication_Token_Revoke_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_Token_Revoke_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_Token_Revoke_Request message, length delimited. Does not implicitly {@link CAuthentication_Token_Revoke_Request.verify|verify} messages.
     * @param message CAuthentication_Token_Revoke_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_Token_Revoke_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_Token_Revoke_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_Token_Revoke_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_Token_Revoke_Request;

    /**
     * Decodes a CAuthentication_Token_Revoke_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_Token_Revoke_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_Token_Revoke_Request;

    /**
     * Verifies a CAuthentication_Token_Revoke_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_Token_Revoke_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_Token_Revoke_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_Token_Revoke_Request;

    /**
     * Creates a plain object from a CAuthentication_Token_Revoke_Request message. Also converts values to other types if specified.
     * @param message CAuthentication_Token_Revoke_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_Token_Revoke_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_Token_Revoke_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_Token_Revoke_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_Token_Revoke_Response. */
export class CAuthentication_Token_Revoke_Response implements ICAuthentication_Token_Revoke_Response {

    /**
     * Constructs a new CAuthentication_Token_Revoke_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_Token_Revoke_Response);

    /**
     * Creates a new CAuthentication_Token_Revoke_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_Token_Revoke_Response instance
     */
    public static create(properties?: ICAuthentication_Token_Revoke_Response): CAuthentication_Token_Revoke_Response;

    /**
     * Encodes the specified CAuthentication_Token_Revoke_Response message. Does not implicitly {@link CAuthentication_Token_Revoke_Response.verify|verify} messages.
     * @param message CAuthentication_Token_Revoke_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_Token_Revoke_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_Token_Revoke_Response message, length delimited. Does not implicitly {@link CAuthentication_Token_Revoke_Response.verify|verify} messages.
     * @param message CAuthentication_Token_Revoke_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_Token_Revoke_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_Token_Revoke_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_Token_Revoke_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_Token_Revoke_Response;

    /**
     * Decodes a CAuthentication_Token_Revoke_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_Token_Revoke_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_Token_Revoke_Response;

    /**
     * Verifies a CAuthentication_Token_Revoke_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_Token_Revoke_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_Token_Revoke_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_Token_Revoke_Response;

    /**
     * Creates a plain object from a CAuthentication_Token_Revoke_Response message. Also converts values to other types if specified.
     * @param message CAuthentication_Token_Revoke_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_Token_Revoke_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_Token_Revoke_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_Token_Revoke_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_RefreshToken_Revoke_Request. */
export class CAuthentication_RefreshToken_Revoke_Request implements ICAuthentication_RefreshToken_Revoke_Request {

    /**
     * Constructs a new CAuthentication_RefreshToken_Revoke_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_RefreshToken_Revoke_Request);

    /** CAuthentication_RefreshToken_Revoke_Request tokenId. */
    public tokenId: (number|Long);

    /** CAuthentication_RefreshToken_Revoke_Request steamid. */
    public steamid: (number|Long);

    /** CAuthentication_RefreshToken_Revoke_Request revokeAction. */
    public revokeAction: EAuthTokenRevokeAction;

    /** CAuthentication_RefreshToken_Revoke_Request signature. */
    public signature: Uint8Array;

    /**
     * Creates a new CAuthentication_RefreshToken_Revoke_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_RefreshToken_Revoke_Request instance
     */
    public static create(properties?: ICAuthentication_RefreshToken_Revoke_Request): CAuthentication_RefreshToken_Revoke_Request;

    /**
     * Encodes the specified CAuthentication_RefreshToken_Revoke_Request message. Does not implicitly {@link CAuthentication_RefreshToken_Revoke_Request.verify|verify} messages.
     * @param message CAuthentication_RefreshToken_Revoke_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_RefreshToken_Revoke_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_RefreshToken_Revoke_Request message, length delimited. Does not implicitly {@link CAuthentication_RefreshToken_Revoke_Request.verify|verify} messages.
     * @param message CAuthentication_RefreshToken_Revoke_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_RefreshToken_Revoke_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_RefreshToken_Revoke_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_RefreshToken_Revoke_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_RefreshToken_Revoke_Request;

    /**
     * Decodes a CAuthentication_RefreshToken_Revoke_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_RefreshToken_Revoke_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_RefreshToken_Revoke_Request;

    /**
     * Verifies a CAuthentication_RefreshToken_Revoke_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_RefreshToken_Revoke_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_RefreshToken_Revoke_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_RefreshToken_Revoke_Request;

    /**
     * Creates a plain object from a CAuthentication_RefreshToken_Revoke_Request message. Also converts values to other types if specified.
     * @param message CAuthentication_RefreshToken_Revoke_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_RefreshToken_Revoke_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_RefreshToken_Revoke_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_RefreshToken_Revoke_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthentication_RefreshToken_Revoke_Response. */
export class CAuthentication_RefreshToken_Revoke_Response implements ICAuthentication_RefreshToken_Revoke_Response {

    /**
     * Constructs a new CAuthentication_RefreshToken_Revoke_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthentication_RefreshToken_Revoke_Response);

    /**
     * Creates a new CAuthentication_RefreshToken_Revoke_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthentication_RefreshToken_Revoke_Response instance
     */
    public static create(properties?: ICAuthentication_RefreshToken_Revoke_Response): CAuthentication_RefreshToken_Revoke_Response;

    /**
     * Encodes the specified CAuthentication_RefreshToken_Revoke_Response message. Does not implicitly {@link CAuthentication_RefreshToken_Revoke_Response.verify|verify} messages.
     * @param message CAuthentication_RefreshToken_Revoke_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthentication_RefreshToken_Revoke_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthentication_RefreshToken_Revoke_Response message, length delimited. Does not implicitly {@link CAuthentication_RefreshToken_Revoke_Response.verify|verify} messages.
     * @param message CAuthentication_RefreshToken_Revoke_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthentication_RefreshToken_Revoke_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthentication_RefreshToken_Revoke_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthentication_RefreshToken_Revoke_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthentication_RefreshToken_Revoke_Response;

    /**
     * Decodes a CAuthentication_RefreshToken_Revoke_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthentication_RefreshToken_Revoke_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthentication_RefreshToken_Revoke_Response;

    /**
     * Verifies a CAuthentication_RefreshToken_Revoke_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthentication_RefreshToken_Revoke_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthentication_RefreshToken_Revoke_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthentication_RefreshToken_Revoke_Response;

    /**
     * Creates a plain object from a CAuthentication_RefreshToken_Revoke_Response message. Also converts values to other types if specified.
     * @param message CAuthentication_RefreshToken_Revoke_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthentication_RefreshToken_Revoke_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthentication_RefreshToken_Revoke_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthentication_RefreshToken_Revoke_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthenticationSupport_QueryRefreshTokensByAccount_Request. */
export class CAuthenticationSupport_QueryRefreshTokensByAccount_Request implements ICAuthenticationSupport_QueryRefreshTokensByAccount_Request {

    /**
     * Constructs a new CAuthenticationSupport_QueryRefreshTokensByAccount_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthenticationSupport_QueryRefreshTokensByAccount_Request);

    /** CAuthenticationSupport_QueryRefreshTokensByAccount_Request steamid. */
    public steamid: (number|Long);

    /** CAuthenticationSupport_QueryRefreshTokensByAccount_Request includeRevokedTokens. */
    public includeRevokedTokens: boolean;

    /**
     * Creates a new CAuthenticationSupport_QueryRefreshTokensByAccount_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthenticationSupport_QueryRefreshTokensByAccount_Request instance
     */
    public static create(properties?: ICAuthenticationSupport_QueryRefreshTokensByAccount_Request): CAuthenticationSupport_QueryRefreshTokensByAccount_Request;

    /**
     * Encodes the specified CAuthenticationSupport_QueryRefreshTokensByAccount_Request message. Does not implicitly {@link CAuthenticationSupport_QueryRefreshTokensByAccount_Request.verify|verify} messages.
     * @param message CAuthenticationSupport_QueryRefreshTokensByAccount_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthenticationSupport_QueryRefreshTokensByAccount_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthenticationSupport_QueryRefreshTokensByAccount_Request message, length delimited. Does not implicitly {@link CAuthenticationSupport_QueryRefreshTokensByAccount_Request.verify|verify} messages.
     * @param message CAuthenticationSupport_QueryRefreshTokensByAccount_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthenticationSupport_QueryRefreshTokensByAccount_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthenticationSupport_QueryRefreshTokensByAccount_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthenticationSupport_QueryRefreshTokensByAccount_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthenticationSupport_QueryRefreshTokensByAccount_Request;

    /**
     * Decodes a CAuthenticationSupport_QueryRefreshTokensByAccount_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthenticationSupport_QueryRefreshTokensByAccount_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthenticationSupport_QueryRefreshTokensByAccount_Request;

    /**
     * Verifies a CAuthenticationSupport_QueryRefreshTokensByAccount_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthenticationSupport_QueryRefreshTokensByAccount_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthenticationSupport_QueryRefreshTokensByAccount_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthenticationSupport_QueryRefreshTokensByAccount_Request;

    /**
     * Creates a plain object from a CAuthenticationSupport_QueryRefreshTokensByAccount_Request message. Also converts values to other types if specified.
     * @param message CAuthenticationSupport_QueryRefreshTokensByAccount_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthenticationSupport_QueryRefreshTokensByAccount_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthenticationSupport_QueryRefreshTokensByAccount_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthenticationSupport_QueryRefreshTokensByAccount_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSupportRefreshTokenDescription. */
export class CSupportRefreshTokenDescription implements ICSupportRefreshTokenDescription {

    /**
     * Constructs a new CSupportRefreshTokenDescription.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSupportRefreshTokenDescription);

    /** CSupportRefreshTokenDescription tokenId. */
    public tokenId: (number|Long);

    /** CSupportRefreshTokenDescription tokenDescription. */
    public tokenDescription: string;

    /** CSupportRefreshTokenDescription timeUpdated. */
    public timeUpdated: number;

    /** CSupportRefreshTokenDescription platformType. */
    public platformType: EAuthTokenPlatformType;

    /** CSupportRefreshTokenDescription tokenState. */
    public tokenState: EAuthTokenState;

    /** CSupportRefreshTokenDescription ownerSteamid. */
    public ownerSteamid: (number|Long);

    /** CSupportRefreshTokenDescription osPlatform. */
    public osPlatform: number;

    /** CSupportRefreshTokenDescription osType. */
    public osType: number;

    /** CSupportRefreshTokenDescription authType. */
    public authType: number;

    /** CSupportRefreshTokenDescription gamingDeviceType. */
    public gamingDeviceType: number;

    /** CSupportRefreshTokenDescription firstSeen. */
    public firstSeen?: (CSupportRefreshTokenDescription.ITokenUsageEvent|null);

    /** CSupportRefreshTokenDescription lastSeen. */
    public lastSeen?: (CSupportRefreshTokenDescription.ITokenUsageEvent|null);

    /**
     * Creates a new CSupportRefreshTokenDescription instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSupportRefreshTokenDescription instance
     */
    public static create(properties?: ICSupportRefreshTokenDescription): CSupportRefreshTokenDescription;

    /**
     * Encodes the specified CSupportRefreshTokenDescription message. Does not implicitly {@link CSupportRefreshTokenDescription.verify|verify} messages.
     * @param message CSupportRefreshTokenDescription message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSupportRefreshTokenDescription, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSupportRefreshTokenDescription message, length delimited. Does not implicitly {@link CSupportRefreshTokenDescription.verify|verify} messages.
     * @param message CSupportRefreshTokenDescription message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSupportRefreshTokenDescription, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSupportRefreshTokenDescription message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSupportRefreshTokenDescription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSupportRefreshTokenDescription;

    /**
     * Decodes a CSupportRefreshTokenDescription message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSupportRefreshTokenDescription
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSupportRefreshTokenDescription;

    /**
     * Verifies a CSupportRefreshTokenDescription message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSupportRefreshTokenDescription message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSupportRefreshTokenDescription
     */
    public static fromObject(object: { [k: string]: any }): CSupportRefreshTokenDescription;

    /**
     * Creates a plain object from a CSupportRefreshTokenDescription message. Also converts values to other types if specified.
     * @param message CSupportRefreshTokenDescription
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSupportRefreshTokenDescription, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSupportRefreshTokenDescription to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSupportRefreshTokenDescription
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CSupportRefreshTokenDescription {

    /** Properties of a TokenUsageEvent. */
    interface ITokenUsageEvent {

        /** TokenUsageEvent time */
        time?: (number|null);

        /** TokenUsageEvent ip */
        ip?: (ICMsgIPAddress|null);

        /** TokenUsageEvent country */
        country?: (string|null);

        /** TokenUsageEvent state */
        state?: (string|null);

        /** TokenUsageEvent city */
        city?: (string|null);
    }

    /** Represents a TokenUsageEvent. */
    class TokenUsageEvent implements ITokenUsageEvent {

        /**
         * Constructs a new TokenUsageEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: CSupportRefreshTokenDescription.ITokenUsageEvent);

        /** TokenUsageEvent time. */
        public time: number;

        /** TokenUsageEvent ip. */
        public ip?: (ICMsgIPAddress|null);

        /** TokenUsageEvent country. */
        public country: string;

        /** TokenUsageEvent state. */
        public state: string;

        /** TokenUsageEvent city. */
        public city: string;

        /**
         * Creates a new TokenUsageEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TokenUsageEvent instance
         */
        public static create(properties?: CSupportRefreshTokenDescription.ITokenUsageEvent): CSupportRefreshTokenDescription.TokenUsageEvent;

        /**
         * Encodes the specified TokenUsageEvent message. Does not implicitly {@link CSupportRefreshTokenDescription.TokenUsageEvent.verify|verify} messages.
         * @param message TokenUsageEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CSupportRefreshTokenDescription.ITokenUsageEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TokenUsageEvent message, length delimited. Does not implicitly {@link CSupportRefreshTokenDescription.TokenUsageEvent.verify|verify} messages.
         * @param message TokenUsageEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CSupportRefreshTokenDescription.ITokenUsageEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TokenUsageEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TokenUsageEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSupportRefreshTokenDescription.TokenUsageEvent;

        /**
         * Decodes a TokenUsageEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TokenUsageEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSupportRefreshTokenDescription.TokenUsageEvent;

        /**
         * Verifies a TokenUsageEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TokenUsageEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TokenUsageEvent
         */
        public static fromObject(object: { [k: string]: any }): CSupportRefreshTokenDescription.TokenUsageEvent;

        /**
         * Creates a plain object from a TokenUsageEvent message. Also converts values to other types if specified.
         * @param message TokenUsageEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CSupportRefreshTokenDescription.TokenUsageEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TokenUsageEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for TokenUsageEvent
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Represents a CAuthenticationSupport_QueryRefreshTokensByAccount_Response. */
export class CAuthenticationSupport_QueryRefreshTokensByAccount_Response implements ICAuthenticationSupport_QueryRefreshTokensByAccount_Response {

    /**
     * Constructs a new CAuthenticationSupport_QueryRefreshTokensByAccount_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthenticationSupport_QueryRefreshTokensByAccount_Response);

    /** CAuthenticationSupport_QueryRefreshTokensByAccount_Response refreshTokens. */
    public refreshTokens: ICSupportRefreshTokenDescription[];

    /** CAuthenticationSupport_QueryRefreshTokensByAccount_Response lastTokenReset. */
    public lastTokenReset: number;

    /**
     * Creates a new CAuthenticationSupport_QueryRefreshTokensByAccount_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthenticationSupport_QueryRefreshTokensByAccount_Response instance
     */
    public static create(properties?: ICAuthenticationSupport_QueryRefreshTokensByAccount_Response): CAuthenticationSupport_QueryRefreshTokensByAccount_Response;

    /**
     * Encodes the specified CAuthenticationSupport_QueryRefreshTokensByAccount_Response message. Does not implicitly {@link CAuthenticationSupport_QueryRefreshTokensByAccount_Response.verify|verify} messages.
     * @param message CAuthenticationSupport_QueryRefreshTokensByAccount_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthenticationSupport_QueryRefreshTokensByAccount_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthenticationSupport_QueryRefreshTokensByAccount_Response message, length delimited. Does not implicitly {@link CAuthenticationSupport_QueryRefreshTokensByAccount_Response.verify|verify} messages.
     * @param message CAuthenticationSupport_QueryRefreshTokensByAccount_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthenticationSupport_QueryRefreshTokensByAccount_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthenticationSupport_QueryRefreshTokensByAccount_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthenticationSupport_QueryRefreshTokensByAccount_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthenticationSupport_QueryRefreshTokensByAccount_Response;

    /**
     * Decodes a CAuthenticationSupport_QueryRefreshTokensByAccount_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthenticationSupport_QueryRefreshTokensByAccount_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthenticationSupport_QueryRefreshTokensByAccount_Response;

    /**
     * Verifies a CAuthenticationSupport_QueryRefreshTokensByAccount_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthenticationSupport_QueryRefreshTokensByAccount_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthenticationSupport_QueryRefreshTokensByAccount_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthenticationSupport_QueryRefreshTokensByAccount_Response;

    /**
     * Creates a plain object from a CAuthenticationSupport_QueryRefreshTokensByAccount_Response message. Also converts values to other types if specified.
     * @param message CAuthenticationSupport_QueryRefreshTokensByAccount_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthenticationSupport_QueryRefreshTokensByAccount_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthenticationSupport_QueryRefreshTokensByAccount_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthenticationSupport_QueryRefreshTokensByAccount_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthenticationSupport_QueryRefreshTokenByID_Request. */
export class CAuthenticationSupport_QueryRefreshTokenByID_Request implements ICAuthenticationSupport_QueryRefreshTokenByID_Request {

    /**
     * Constructs a new CAuthenticationSupport_QueryRefreshTokenByID_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthenticationSupport_QueryRefreshTokenByID_Request);

    /** CAuthenticationSupport_QueryRefreshTokenByID_Request tokenId. */
    public tokenId: (number|Long);

    /**
     * Creates a new CAuthenticationSupport_QueryRefreshTokenByID_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthenticationSupport_QueryRefreshTokenByID_Request instance
     */
    public static create(properties?: ICAuthenticationSupport_QueryRefreshTokenByID_Request): CAuthenticationSupport_QueryRefreshTokenByID_Request;

    /**
     * Encodes the specified CAuthenticationSupport_QueryRefreshTokenByID_Request message. Does not implicitly {@link CAuthenticationSupport_QueryRefreshTokenByID_Request.verify|verify} messages.
     * @param message CAuthenticationSupport_QueryRefreshTokenByID_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthenticationSupport_QueryRefreshTokenByID_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthenticationSupport_QueryRefreshTokenByID_Request message, length delimited. Does not implicitly {@link CAuthenticationSupport_QueryRefreshTokenByID_Request.verify|verify} messages.
     * @param message CAuthenticationSupport_QueryRefreshTokenByID_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthenticationSupport_QueryRefreshTokenByID_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthenticationSupport_QueryRefreshTokenByID_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthenticationSupport_QueryRefreshTokenByID_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthenticationSupport_QueryRefreshTokenByID_Request;

    /**
     * Decodes a CAuthenticationSupport_QueryRefreshTokenByID_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthenticationSupport_QueryRefreshTokenByID_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthenticationSupport_QueryRefreshTokenByID_Request;

    /**
     * Verifies a CAuthenticationSupport_QueryRefreshTokenByID_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthenticationSupport_QueryRefreshTokenByID_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthenticationSupport_QueryRefreshTokenByID_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthenticationSupport_QueryRefreshTokenByID_Request;

    /**
     * Creates a plain object from a CAuthenticationSupport_QueryRefreshTokenByID_Request message. Also converts values to other types if specified.
     * @param message CAuthenticationSupport_QueryRefreshTokenByID_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthenticationSupport_QueryRefreshTokenByID_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthenticationSupport_QueryRefreshTokenByID_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthenticationSupport_QueryRefreshTokenByID_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthenticationSupport_QueryRefreshTokenByID_Response. */
export class CAuthenticationSupport_QueryRefreshTokenByID_Response implements ICAuthenticationSupport_QueryRefreshTokenByID_Response {

    /**
     * Constructs a new CAuthenticationSupport_QueryRefreshTokenByID_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthenticationSupport_QueryRefreshTokenByID_Response);

    /** CAuthenticationSupport_QueryRefreshTokenByID_Response refreshTokens. */
    public refreshTokens: ICSupportRefreshTokenDescription[];

    /**
     * Creates a new CAuthenticationSupport_QueryRefreshTokenByID_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthenticationSupport_QueryRefreshTokenByID_Response instance
     */
    public static create(properties?: ICAuthenticationSupport_QueryRefreshTokenByID_Response): CAuthenticationSupport_QueryRefreshTokenByID_Response;

    /**
     * Encodes the specified CAuthenticationSupport_QueryRefreshTokenByID_Response message. Does not implicitly {@link CAuthenticationSupport_QueryRefreshTokenByID_Response.verify|verify} messages.
     * @param message CAuthenticationSupport_QueryRefreshTokenByID_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthenticationSupport_QueryRefreshTokenByID_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthenticationSupport_QueryRefreshTokenByID_Response message, length delimited. Does not implicitly {@link CAuthenticationSupport_QueryRefreshTokenByID_Response.verify|verify} messages.
     * @param message CAuthenticationSupport_QueryRefreshTokenByID_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthenticationSupport_QueryRefreshTokenByID_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthenticationSupport_QueryRefreshTokenByID_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthenticationSupport_QueryRefreshTokenByID_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthenticationSupport_QueryRefreshTokenByID_Response;

    /**
     * Decodes a CAuthenticationSupport_QueryRefreshTokenByID_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthenticationSupport_QueryRefreshTokenByID_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthenticationSupport_QueryRefreshTokenByID_Response;

    /**
     * Verifies a CAuthenticationSupport_QueryRefreshTokenByID_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthenticationSupport_QueryRefreshTokenByID_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthenticationSupport_QueryRefreshTokenByID_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthenticationSupport_QueryRefreshTokenByID_Response;

    /**
     * Creates a plain object from a CAuthenticationSupport_QueryRefreshTokenByID_Response message. Also converts values to other types if specified.
     * @param message CAuthenticationSupport_QueryRefreshTokenByID_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthenticationSupport_QueryRefreshTokenByID_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthenticationSupport_QueryRefreshTokenByID_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthenticationSupport_QueryRefreshTokenByID_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthenticationSupport_RevokeToken_Request. */
export class CAuthenticationSupport_RevokeToken_Request implements ICAuthenticationSupport_RevokeToken_Request {

    /**
     * Constructs a new CAuthenticationSupport_RevokeToken_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthenticationSupport_RevokeToken_Request);

    /** CAuthenticationSupport_RevokeToken_Request tokenId. */
    public tokenId: (number|Long);

    /** CAuthenticationSupport_RevokeToken_Request steamid. */
    public steamid: (number|Long);

    /**
     * Creates a new CAuthenticationSupport_RevokeToken_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthenticationSupport_RevokeToken_Request instance
     */
    public static create(properties?: ICAuthenticationSupport_RevokeToken_Request): CAuthenticationSupport_RevokeToken_Request;

    /**
     * Encodes the specified CAuthenticationSupport_RevokeToken_Request message. Does not implicitly {@link CAuthenticationSupport_RevokeToken_Request.verify|verify} messages.
     * @param message CAuthenticationSupport_RevokeToken_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthenticationSupport_RevokeToken_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthenticationSupport_RevokeToken_Request message, length delimited. Does not implicitly {@link CAuthenticationSupport_RevokeToken_Request.verify|verify} messages.
     * @param message CAuthenticationSupport_RevokeToken_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthenticationSupport_RevokeToken_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthenticationSupport_RevokeToken_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthenticationSupport_RevokeToken_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthenticationSupport_RevokeToken_Request;

    /**
     * Decodes a CAuthenticationSupport_RevokeToken_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthenticationSupport_RevokeToken_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthenticationSupport_RevokeToken_Request;

    /**
     * Verifies a CAuthenticationSupport_RevokeToken_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthenticationSupport_RevokeToken_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthenticationSupport_RevokeToken_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthenticationSupport_RevokeToken_Request;

    /**
     * Creates a plain object from a CAuthenticationSupport_RevokeToken_Request message. Also converts values to other types if specified.
     * @param message CAuthenticationSupport_RevokeToken_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthenticationSupport_RevokeToken_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthenticationSupport_RevokeToken_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthenticationSupport_RevokeToken_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthenticationSupport_RevokeToken_Response. */
export class CAuthenticationSupport_RevokeToken_Response implements ICAuthenticationSupport_RevokeToken_Response {

    /**
     * Constructs a new CAuthenticationSupport_RevokeToken_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthenticationSupport_RevokeToken_Response);

    /**
     * Creates a new CAuthenticationSupport_RevokeToken_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthenticationSupport_RevokeToken_Response instance
     */
    public static create(properties?: ICAuthenticationSupport_RevokeToken_Response): CAuthenticationSupport_RevokeToken_Response;

    /**
     * Encodes the specified CAuthenticationSupport_RevokeToken_Response message. Does not implicitly {@link CAuthenticationSupport_RevokeToken_Response.verify|verify} messages.
     * @param message CAuthenticationSupport_RevokeToken_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthenticationSupport_RevokeToken_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthenticationSupport_RevokeToken_Response message, length delimited. Does not implicitly {@link CAuthenticationSupport_RevokeToken_Response.verify|verify} messages.
     * @param message CAuthenticationSupport_RevokeToken_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthenticationSupport_RevokeToken_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthenticationSupport_RevokeToken_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthenticationSupport_RevokeToken_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthenticationSupport_RevokeToken_Response;

    /**
     * Decodes a CAuthenticationSupport_RevokeToken_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthenticationSupport_RevokeToken_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthenticationSupport_RevokeToken_Response;

    /**
     * Verifies a CAuthenticationSupport_RevokeToken_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthenticationSupport_RevokeToken_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthenticationSupport_RevokeToken_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthenticationSupport_RevokeToken_Response;

    /**
     * Creates a plain object from a CAuthenticationSupport_RevokeToken_Response message. Also converts values to other types if specified.
     * @param message CAuthenticationSupport_RevokeToken_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthenticationSupport_RevokeToken_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthenticationSupport_RevokeToken_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthenticationSupport_RevokeToken_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthenticationSupport_GetTokenHistory_Request. */
export class CAuthenticationSupport_GetTokenHistory_Request implements ICAuthenticationSupport_GetTokenHistory_Request {

    /**
     * Constructs a new CAuthenticationSupport_GetTokenHistory_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthenticationSupport_GetTokenHistory_Request);

    /** CAuthenticationSupport_GetTokenHistory_Request tokenId. */
    public tokenId: (number|Long);

    /**
     * Creates a new CAuthenticationSupport_GetTokenHistory_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthenticationSupport_GetTokenHistory_Request instance
     */
    public static create(properties?: ICAuthenticationSupport_GetTokenHistory_Request): CAuthenticationSupport_GetTokenHistory_Request;

    /**
     * Encodes the specified CAuthenticationSupport_GetTokenHistory_Request message. Does not implicitly {@link CAuthenticationSupport_GetTokenHistory_Request.verify|verify} messages.
     * @param message CAuthenticationSupport_GetTokenHistory_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthenticationSupport_GetTokenHistory_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthenticationSupport_GetTokenHistory_Request message, length delimited. Does not implicitly {@link CAuthenticationSupport_GetTokenHistory_Request.verify|verify} messages.
     * @param message CAuthenticationSupport_GetTokenHistory_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthenticationSupport_GetTokenHistory_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthenticationSupport_GetTokenHistory_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthenticationSupport_GetTokenHistory_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthenticationSupport_GetTokenHistory_Request;

    /**
     * Decodes a CAuthenticationSupport_GetTokenHistory_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthenticationSupport_GetTokenHistory_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthenticationSupport_GetTokenHistory_Request;

    /**
     * Verifies a CAuthenticationSupport_GetTokenHistory_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthenticationSupport_GetTokenHistory_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthenticationSupport_GetTokenHistory_Request
     */
    public static fromObject(object: { [k: string]: any }): CAuthenticationSupport_GetTokenHistory_Request;

    /**
     * Creates a plain object from a CAuthenticationSupport_GetTokenHistory_Request message. Also converts values to other types if specified.
     * @param message CAuthenticationSupport_GetTokenHistory_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthenticationSupport_GetTokenHistory_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthenticationSupport_GetTokenHistory_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthenticationSupport_GetTokenHistory_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CSupportRefreshTokenAudit. */
export class CSupportRefreshTokenAudit implements ICSupportRefreshTokenAudit {

    /**
     * Constructs a new CSupportRefreshTokenAudit.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICSupportRefreshTokenAudit);

    /** CSupportRefreshTokenAudit action. */
    public action: number;

    /** CSupportRefreshTokenAudit time. */
    public time: number;

    /** CSupportRefreshTokenAudit ip. */
    public ip?: (ICMsgIPAddress|null);

    /** CSupportRefreshTokenAudit actor. */
    public actor: (number|Long);

    /**
     * Creates a new CSupportRefreshTokenAudit instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CSupportRefreshTokenAudit instance
     */
    public static create(properties?: ICSupportRefreshTokenAudit): CSupportRefreshTokenAudit;

    /**
     * Encodes the specified CSupportRefreshTokenAudit message. Does not implicitly {@link CSupportRefreshTokenAudit.verify|verify} messages.
     * @param message CSupportRefreshTokenAudit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICSupportRefreshTokenAudit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CSupportRefreshTokenAudit message, length delimited. Does not implicitly {@link CSupportRefreshTokenAudit.verify|verify} messages.
     * @param message CSupportRefreshTokenAudit message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICSupportRefreshTokenAudit, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CSupportRefreshTokenAudit message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CSupportRefreshTokenAudit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CSupportRefreshTokenAudit;

    /**
     * Decodes a CSupportRefreshTokenAudit message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CSupportRefreshTokenAudit
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CSupportRefreshTokenAudit;

    /**
     * Verifies a CSupportRefreshTokenAudit message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CSupportRefreshTokenAudit message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CSupportRefreshTokenAudit
     */
    public static fromObject(object: { [k: string]: any }): CSupportRefreshTokenAudit;

    /**
     * Creates a plain object from a CSupportRefreshTokenAudit message. Also converts values to other types if specified.
     * @param message CSupportRefreshTokenAudit
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CSupportRefreshTokenAudit, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CSupportRefreshTokenAudit to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CSupportRefreshTokenAudit
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CAuthenticationSupport_GetTokenHistory_Response. */
export class CAuthenticationSupport_GetTokenHistory_Response implements ICAuthenticationSupport_GetTokenHistory_Response {

    /**
     * Constructs a new CAuthenticationSupport_GetTokenHistory_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICAuthenticationSupport_GetTokenHistory_Response);

    /** CAuthenticationSupport_GetTokenHistory_Response history. */
    public history: ICSupportRefreshTokenAudit[];

    /**
     * Creates a new CAuthenticationSupport_GetTokenHistory_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CAuthenticationSupport_GetTokenHistory_Response instance
     */
    public static create(properties?: ICAuthenticationSupport_GetTokenHistory_Response): CAuthenticationSupport_GetTokenHistory_Response;

    /**
     * Encodes the specified CAuthenticationSupport_GetTokenHistory_Response message. Does not implicitly {@link CAuthenticationSupport_GetTokenHistory_Response.verify|verify} messages.
     * @param message CAuthenticationSupport_GetTokenHistory_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICAuthenticationSupport_GetTokenHistory_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CAuthenticationSupport_GetTokenHistory_Response message, length delimited. Does not implicitly {@link CAuthenticationSupport_GetTokenHistory_Response.verify|verify} messages.
     * @param message CAuthenticationSupport_GetTokenHistory_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICAuthenticationSupport_GetTokenHistory_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CAuthenticationSupport_GetTokenHistory_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CAuthenticationSupport_GetTokenHistory_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CAuthenticationSupport_GetTokenHistory_Response;

    /**
     * Decodes a CAuthenticationSupport_GetTokenHistory_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CAuthenticationSupport_GetTokenHistory_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CAuthenticationSupport_GetTokenHistory_Response;

    /**
     * Verifies a CAuthenticationSupport_GetTokenHistory_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CAuthenticationSupport_GetTokenHistory_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CAuthenticationSupport_GetTokenHistory_Response
     */
    public static fromObject(object: { [k: string]: any }): CAuthenticationSupport_GetTokenHistory_Response;

    /**
     * Creates a plain object from a CAuthenticationSupport_GetTokenHistory_Response message. Also converts values to other types if specified.
     * @param message CAuthenticationSupport_GetTokenHistory_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CAuthenticationSupport_GetTokenHistory_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CAuthenticationSupport_GetTokenHistory_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CAuthenticationSupport_GetTokenHistory_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCloudGaming_CreateNonce_Request. */
export class CCloudGaming_CreateNonce_Request implements ICCloudGaming_CreateNonce_Request {

    /**
     * Constructs a new CCloudGaming_CreateNonce_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCloudGaming_CreateNonce_Request);

    /** CCloudGaming_CreateNonce_Request platform. */
    public platform: string;

    /** CCloudGaming_CreateNonce_Request appid. */
    public appid: number;

    /**
     * Creates a new CCloudGaming_CreateNonce_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCloudGaming_CreateNonce_Request instance
     */
    public static create(properties?: ICCloudGaming_CreateNonce_Request): CCloudGaming_CreateNonce_Request;

    /**
     * Encodes the specified CCloudGaming_CreateNonce_Request message. Does not implicitly {@link CCloudGaming_CreateNonce_Request.verify|verify} messages.
     * @param message CCloudGaming_CreateNonce_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCloudGaming_CreateNonce_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCloudGaming_CreateNonce_Request message, length delimited. Does not implicitly {@link CCloudGaming_CreateNonce_Request.verify|verify} messages.
     * @param message CCloudGaming_CreateNonce_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCloudGaming_CreateNonce_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCloudGaming_CreateNonce_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCloudGaming_CreateNonce_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCloudGaming_CreateNonce_Request;

    /**
     * Decodes a CCloudGaming_CreateNonce_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCloudGaming_CreateNonce_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCloudGaming_CreateNonce_Request;

    /**
     * Verifies a CCloudGaming_CreateNonce_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCloudGaming_CreateNonce_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCloudGaming_CreateNonce_Request
     */
    public static fromObject(object: { [k: string]: any }): CCloudGaming_CreateNonce_Request;

    /**
     * Creates a plain object from a CCloudGaming_CreateNonce_Request message. Also converts values to other types if specified.
     * @param message CCloudGaming_CreateNonce_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCloudGaming_CreateNonce_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCloudGaming_CreateNonce_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCloudGaming_CreateNonce_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCloudGaming_CreateNonce_Response. */
export class CCloudGaming_CreateNonce_Response implements ICCloudGaming_CreateNonce_Response {

    /**
     * Constructs a new CCloudGaming_CreateNonce_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCloudGaming_CreateNonce_Response);

    /** CCloudGaming_CreateNonce_Response nonce. */
    public nonce: string;

    /** CCloudGaming_CreateNonce_Response expiry. */
    public expiry: number;

    /**
     * Creates a new CCloudGaming_CreateNonce_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCloudGaming_CreateNonce_Response instance
     */
    public static create(properties?: ICCloudGaming_CreateNonce_Response): CCloudGaming_CreateNonce_Response;

    /**
     * Encodes the specified CCloudGaming_CreateNonce_Response message. Does not implicitly {@link CCloudGaming_CreateNonce_Response.verify|verify} messages.
     * @param message CCloudGaming_CreateNonce_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCloudGaming_CreateNonce_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCloudGaming_CreateNonce_Response message, length delimited. Does not implicitly {@link CCloudGaming_CreateNonce_Response.verify|verify} messages.
     * @param message CCloudGaming_CreateNonce_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCloudGaming_CreateNonce_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCloudGaming_CreateNonce_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCloudGaming_CreateNonce_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCloudGaming_CreateNonce_Response;

    /**
     * Decodes a CCloudGaming_CreateNonce_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCloudGaming_CreateNonce_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCloudGaming_CreateNonce_Response;

    /**
     * Verifies a CCloudGaming_CreateNonce_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCloudGaming_CreateNonce_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCloudGaming_CreateNonce_Response
     */
    public static fromObject(object: { [k: string]: any }): CCloudGaming_CreateNonce_Response;

    /**
     * Creates a plain object from a CCloudGaming_CreateNonce_Response message. Also converts values to other types if specified.
     * @param message CCloudGaming_CreateNonce_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCloudGaming_CreateNonce_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCloudGaming_CreateNonce_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCloudGaming_CreateNonce_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCloudGaming_GetTimeRemaining_Request. */
export class CCloudGaming_GetTimeRemaining_Request implements ICCloudGaming_GetTimeRemaining_Request {

    /**
     * Constructs a new CCloudGaming_GetTimeRemaining_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCloudGaming_GetTimeRemaining_Request);

    /** CCloudGaming_GetTimeRemaining_Request platform. */
    public platform: string;

    /** CCloudGaming_GetTimeRemaining_Request appidList. */
    public appidList: number[];

    /**
     * Creates a new CCloudGaming_GetTimeRemaining_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCloudGaming_GetTimeRemaining_Request instance
     */
    public static create(properties?: ICCloudGaming_GetTimeRemaining_Request): CCloudGaming_GetTimeRemaining_Request;

    /**
     * Encodes the specified CCloudGaming_GetTimeRemaining_Request message. Does not implicitly {@link CCloudGaming_GetTimeRemaining_Request.verify|verify} messages.
     * @param message CCloudGaming_GetTimeRemaining_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCloudGaming_GetTimeRemaining_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCloudGaming_GetTimeRemaining_Request message, length delimited. Does not implicitly {@link CCloudGaming_GetTimeRemaining_Request.verify|verify} messages.
     * @param message CCloudGaming_GetTimeRemaining_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCloudGaming_GetTimeRemaining_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCloudGaming_GetTimeRemaining_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCloudGaming_GetTimeRemaining_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCloudGaming_GetTimeRemaining_Request;

    /**
     * Decodes a CCloudGaming_GetTimeRemaining_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCloudGaming_GetTimeRemaining_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCloudGaming_GetTimeRemaining_Request;

    /**
     * Verifies a CCloudGaming_GetTimeRemaining_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCloudGaming_GetTimeRemaining_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCloudGaming_GetTimeRemaining_Request
     */
    public static fromObject(object: { [k: string]: any }): CCloudGaming_GetTimeRemaining_Request;

    /**
     * Creates a plain object from a CCloudGaming_GetTimeRemaining_Request message. Also converts values to other types if specified.
     * @param message CCloudGaming_GetTimeRemaining_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCloudGaming_GetTimeRemaining_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCloudGaming_GetTimeRemaining_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCloudGaming_GetTimeRemaining_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCloudGaming_TimeRemaining. */
export class CCloudGaming_TimeRemaining implements ICCloudGaming_TimeRemaining {

    /**
     * Constructs a new CCloudGaming_TimeRemaining.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCloudGaming_TimeRemaining);

    /** CCloudGaming_TimeRemaining appid. */
    public appid: number;

    /** CCloudGaming_TimeRemaining minutesRemaining. */
    public minutesRemaining: number;

    /**
     * Creates a new CCloudGaming_TimeRemaining instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCloudGaming_TimeRemaining instance
     */
    public static create(properties?: ICCloudGaming_TimeRemaining): CCloudGaming_TimeRemaining;

    /**
     * Encodes the specified CCloudGaming_TimeRemaining message. Does not implicitly {@link CCloudGaming_TimeRemaining.verify|verify} messages.
     * @param message CCloudGaming_TimeRemaining message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCloudGaming_TimeRemaining, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCloudGaming_TimeRemaining message, length delimited. Does not implicitly {@link CCloudGaming_TimeRemaining.verify|verify} messages.
     * @param message CCloudGaming_TimeRemaining message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCloudGaming_TimeRemaining, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCloudGaming_TimeRemaining message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCloudGaming_TimeRemaining
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCloudGaming_TimeRemaining;

    /**
     * Decodes a CCloudGaming_TimeRemaining message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCloudGaming_TimeRemaining
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCloudGaming_TimeRemaining;

    /**
     * Verifies a CCloudGaming_TimeRemaining message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCloudGaming_TimeRemaining message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCloudGaming_TimeRemaining
     */
    public static fromObject(object: { [k: string]: any }): CCloudGaming_TimeRemaining;

    /**
     * Creates a plain object from a CCloudGaming_TimeRemaining message. Also converts values to other types if specified.
     * @param message CCloudGaming_TimeRemaining
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCloudGaming_TimeRemaining, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCloudGaming_TimeRemaining to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCloudGaming_TimeRemaining
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCloudGaming_GetTimeRemaining_Response. */
export class CCloudGaming_GetTimeRemaining_Response implements ICCloudGaming_GetTimeRemaining_Response {

    /**
     * Constructs a new CCloudGaming_GetTimeRemaining_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCloudGaming_GetTimeRemaining_Response);

    /** CCloudGaming_GetTimeRemaining_Response entries. */
    public entries: ICCloudGaming_TimeRemaining[];

    /**
     * Creates a new CCloudGaming_GetTimeRemaining_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCloudGaming_GetTimeRemaining_Response instance
     */
    public static create(properties?: ICCloudGaming_GetTimeRemaining_Response): CCloudGaming_GetTimeRemaining_Response;

    /**
     * Encodes the specified CCloudGaming_GetTimeRemaining_Response message. Does not implicitly {@link CCloudGaming_GetTimeRemaining_Response.verify|verify} messages.
     * @param message CCloudGaming_GetTimeRemaining_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCloudGaming_GetTimeRemaining_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCloudGaming_GetTimeRemaining_Response message, length delimited. Does not implicitly {@link CCloudGaming_GetTimeRemaining_Response.verify|verify} messages.
     * @param message CCloudGaming_GetTimeRemaining_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCloudGaming_GetTimeRemaining_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCloudGaming_GetTimeRemaining_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCloudGaming_GetTimeRemaining_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCloudGaming_GetTimeRemaining_Response;

    /**
     * Decodes a CCloudGaming_GetTimeRemaining_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCloudGaming_GetTimeRemaining_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCloudGaming_GetTimeRemaining_Response;

    /**
     * Verifies a CCloudGaming_GetTimeRemaining_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCloudGaming_GetTimeRemaining_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCloudGaming_GetTimeRemaining_Response
     */
    public static fromObject(object: { [k: string]: any }): CCloudGaming_GetTimeRemaining_Response;

    /**
     * Creates a plain object from a CCloudGaming_GetTimeRemaining_Response message. Also converts values to other types if specified.
     * @param message CCloudGaming_GetTimeRemaining_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCloudGaming_GetTimeRemaining_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCloudGaming_GetTimeRemaining_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCloudGaming_GetTimeRemaining_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents an Authentication */
export class Authentication extends $protobuf.rpc.Service {

    /**
     * Constructs a new Authentication service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Authentication service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Authentication;

    /**
     * Calls GetPasswordRSAPublicKey.
     * @param request CAuthentication_GetPasswordRSAPublicKey_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthentication_GetPasswordRSAPublicKey_Response
     */
    public getPasswordRSAPublicKey(request: ICAuthentication_GetPasswordRSAPublicKey_Request, callback: Authentication.GetPasswordRSAPublicKeyCallback): void;

    /**
     * Calls GetPasswordRSAPublicKey.
     * @param request CAuthentication_GetPasswordRSAPublicKey_Request message or plain object
     * @returns Promise
     */
    public getPasswordRSAPublicKey(request: ICAuthentication_GetPasswordRSAPublicKey_Request): Promise<CAuthentication_GetPasswordRSAPublicKey_Response>;

    /**
     * Calls BeginAuthSessionViaQR.
     * @param request CAuthentication_BeginAuthSessionViaQR_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthentication_BeginAuthSessionViaQR_Response
     */
    public beginAuthSessionViaQR(request: ICAuthentication_BeginAuthSessionViaQR_Request, callback: Authentication.BeginAuthSessionViaQRCallback): void;

    /**
     * Calls BeginAuthSessionViaQR.
     * @param request CAuthentication_BeginAuthSessionViaQR_Request message or plain object
     * @returns Promise
     */
    public beginAuthSessionViaQR(request: ICAuthentication_BeginAuthSessionViaQR_Request): Promise<CAuthentication_BeginAuthSessionViaQR_Response>;

    /**
     * Calls BeginAuthSessionViaCredentials.
     * @param request CAuthentication_BeginAuthSessionViaCredentials_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthentication_BeginAuthSessionViaCredentials_Response
     */
    public beginAuthSessionViaCredentials(request: ICAuthentication_BeginAuthSessionViaCredentials_Request, callback: Authentication.BeginAuthSessionViaCredentialsCallback): void;

    /**
     * Calls BeginAuthSessionViaCredentials.
     * @param request CAuthentication_BeginAuthSessionViaCredentials_Request message or plain object
     * @returns Promise
     */
    public beginAuthSessionViaCredentials(request: ICAuthentication_BeginAuthSessionViaCredentials_Request): Promise<CAuthentication_BeginAuthSessionViaCredentials_Response>;

    /**
     * Calls PollAuthSessionStatus.
     * @param request CAuthentication_PollAuthSessionStatus_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthentication_PollAuthSessionStatus_Response
     */
    public pollAuthSessionStatus(request: ICAuthentication_PollAuthSessionStatus_Request, callback: Authentication.PollAuthSessionStatusCallback): void;

    /**
     * Calls PollAuthSessionStatus.
     * @param request CAuthentication_PollAuthSessionStatus_Request message or plain object
     * @returns Promise
     */
    public pollAuthSessionStatus(request: ICAuthentication_PollAuthSessionStatus_Request): Promise<CAuthentication_PollAuthSessionStatus_Response>;

    /**
     * Calls GetAuthSessionInfo.
     * @param request CAuthentication_GetAuthSessionInfo_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthentication_GetAuthSessionInfo_Response
     */
    public getAuthSessionInfo(request: ICAuthentication_GetAuthSessionInfo_Request, callback: Authentication.GetAuthSessionInfoCallback): void;

    /**
     * Calls GetAuthSessionInfo.
     * @param request CAuthentication_GetAuthSessionInfo_Request message or plain object
     * @returns Promise
     */
    public getAuthSessionInfo(request: ICAuthentication_GetAuthSessionInfo_Request): Promise<CAuthentication_GetAuthSessionInfo_Response>;

    /**
     * Calls UpdateAuthSessionWithMobileConfirmation.
     * @param request CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
     */
    public updateAuthSessionWithMobileConfirmation(request: ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Request, callback: Authentication.UpdateAuthSessionWithMobileConfirmationCallback): void;

    /**
     * Calls UpdateAuthSessionWithMobileConfirmation.
     * @param request CAuthentication_UpdateAuthSessionWithMobileConfirmation_Request message or plain object
     * @returns Promise
     */
    public updateAuthSessionWithMobileConfirmation(request: ICAuthentication_UpdateAuthSessionWithMobileConfirmation_Request): Promise<CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response>;

    /**
     * Calls UpdateAuthSessionWithSteamGuardCode.
     * @param request CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
     */
    public updateAuthSessionWithSteamGuardCode(request: ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Request, callback: Authentication.UpdateAuthSessionWithSteamGuardCodeCallback): void;

    /**
     * Calls UpdateAuthSessionWithSteamGuardCode.
     * @param request CAuthentication_UpdateAuthSessionWithSteamGuardCode_Request message or plain object
     * @returns Promise
     */
    public updateAuthSessionWithSteamGuardCode(request: ICAuthentication_UpdateAuthSessionWithSteamGuardCode_Request): Promise<CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response>;

    /**
     * Calls GenerateAccessTokenForApp.
     * @param request CAuthentication_AccessToken_GenerateForApp_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthentication_AccessToken_GenerateForApp_Response
     */
    public generateAccessTokenForApp(request: ICAuthentication_AccessToken_GenerateForApp_Request, callback: Authentication.GenerateAccessTokenForAppCallback): void;

    /**
     * Calls GenerateAccessTokenForApp.
     * @param request CAuthentication_AccessToken_GenerateForApp_Request message or plain object
     * @returns Promise
     */
    public generateAccessTokenForApp(request: ICAuthentication_AccessToken_GenerateForApp_Request): Promise<CAuthentication_AccessToken_GenerateForApp_Response>;

    /**
     * Calls EnumerateTokens.
     * @param request CAuthentication_RefreshToken_Enumerate_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthentication_RefreshToken_Enumerate_Response
     */
    public enumerateTokens(request: ICAuthentication_RefreshToken_Enumerate_Request, callback: Authentication.EnumerateTokensCallback): void;

    /**
     * Calls EnumerateTokens.
     * @param request CAuthentication_RefreshToken_Enumerate_Request message or plain object
     * @returns Promise
     */
    public enumerateTokens(request: ICAuthentication_RefreshToken_Enumerate_Request): Promise<CAuthentication_RefreshToken_Enumerate_Response>;

    /**
     * Calls GetAuthSessionsForAccount.
     * @param request CAuthentication_GetAuthSessionsForAccount_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthentication_GetAuthSessionsForAccount_Response
     */
    public getAuthSessionsForAccount(request: ICAuthentication_GetAuthSessionsForAccount_Request, callback: Authentication.GetAuthSessionsForAccountCallback): void;

    /**
     * Calls GetAuthSessionsForAccount.
     * @param request CAuthentication_GetAuthSessionsForAccount_Request message or plain object
     * @returns Promise
     */
    public getAuthSessionsForAccount(request: ICAuthentication_GetAuthSessionsForAccount_Request): Promise<CAuthentication_GetAuthSessionsForAccount_Response>;

    /**
     * Calls MigrateMobileSession.
     * @param request CAuthentication_MigrateMobileSession_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthentication_MigrateMobileSession_Response
     */
    public migrateMobileSession(request: ICAuthentication_MigrateMobileSession_Request, callback: Authentication.MigrateMobileSessionCallback): void;

    /**
     * Calls MigrateMobileSession.
     * @param request CAuthentication_MigrateMobileSession_Request message or plain object
     * @returns Promise
     */
    public migrateMobileSession(request: ICAuthentication_MigrateMobileSession_Request): Promise<CAuthentication_MigrateMobileSession_Response>;

    /**
     * Calls RevokeToken.
     * @param request CAuthentication_Token_Revoke_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthentication_Token_Revoke_Response
     */
    public revokeToken(request: ICAuthentication_Token_Revoke_Request, callback: Authentication.RevokeTokenCallback): void;

    /**
     * Calls RevokeToken.
     * @param request CAuthentication_Token_Revoke_Request message or plain object
     * @returns Promise
     */
    public revokeToken(request: ICAuthentication_Token_Revoke_Request): Promise<CAuthentication_Token_Revoke_Response>;

    /**
     * Calls RevokeRefreshToken.
     * @param request CAuthentication_RefreshToken_Revoke_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthentication_RefreshToken_Revoke_Response
     */
    public revokeRefreshToken(request: ICAuthentication_RefreshToken_Revoke_Request, callback: Authentication.RevokeRefreshTokenCallback): void;

    /**
     * Calls RevokeRefreshToken.
     * @param request CAuthentication_RefreshToken_Revoke_Request message or plain object
     * @returns Promise
     */
    public revokeRefreshToken(request: ICAuthentication_RefreshToken_Revoke_Request): Promise<CAuthentication_RefreshToken_Revoke_Response>;
}

export namespace Authentication {

    /**
     * Callback as used by {@link Authentication#getPasswordRSAPublicKey}.
     * @param error Error, if any
     * @param [response] CAuthentication_GetPasswordRSAPublicKey_Response
     */
    type GetPasswordRSAPublicKeyCallback = (error: (Error|null), response?: CAuthentication_GetPasswordRSAPublicKey_Response) => void;

    /**
     * Callback as used by {@link Authentication#beginAuthSessionViaQR}.
     * @param error Error, if any
     * @param [response] CAuthentication_BeginAuthSessionViaQR_Response
     */
    type BeginAuthSessionViaQRCallback = (error: (Error|null), response?: CAuthentication_BeginAuthSessionViaQR_Response) => void;

    /**
     * Callback as used by {@link Authentication#beginAuthSessionViaCredentials}.
     * @param error Error, if any
     * @param [response] CAuthentication_BeginAuthSessionViaCredentials_Response
     */
    type BeginAuthSessionViaCredentialsCallback = (error: (Error|null), response?: CAuthentication_BeginAuthSessionViaCredentials_Response) => void;

    /**
     * Callback as used by {@link Authentication#pollAuthSessionStatus}.
     * @param error Error, if any
     * @param [response] CAuthentication_PollAuthSessionStatus_Response
     */
    type PollAuthSessionStatusCallback = (error: (Error|null), response?: CAuthentication_PollAuthSessionStatus_Response) => void;

    /**
     * Callback as used by {@link Authentication#getAuthSessionInfo}.
     * @param error Error, if any
     * @param [response] CAuthentication_GetAuthSessionInfo_Response
     */
    type GetAuthSessionInfoCallback = (error: (Error|null), response?: CAuthentication_GetAuthSessionInfo_Response) => void;

    /**
     * Callback as used by {@link Authentication#updateAuthSessionWithMobileConfirmation}.
     * @param error Error, if any
     * @param [response] CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response
     */
    type UpdateAuthSessionWithMobileConfirmationCallback = (error: (Error|null), response?: CAuthentication_UpdateAuthSessionWithMobileConfirmation_Response) => void;

    /**
     * Callback as used by {@link Authentication#updateAuthSessionWithSteamGuardCode}.
     * @param error Error, if any
     * @param [response] CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response
     */
    type UpdateAuthSessionWithSteamGuardCodeCallback = (error: (Error|null), response?: CAuthentication_UpdateAuthSessionWithSteamGuardCode_Response) => void;

    /**
     * Callback as used by {@link Authentication#generateAccessTokenForApp}.
     * @param error Error, if any
     * @param [response] CAuthentication_AccessToken_GenerateForApp_Response
     */
    type GenerateAccessTokenForAppCallback = (error: (Error|null), response?: CAuthentication_AccessToken_GenerateForApp_Response) => void;

    /**
     * Callback as used by {@link Authentication#enumerateTokens}.
     * @param error Error, if any
     * @param [response] CAuthentication_RefreshToken_Enumerate_Response
     */
    type EnumerateTokensCallback = (error: (Error|null), response?: CAuthentication_RefreshToken_Enumerate_Response) => void;

    /**
     * Callback as used by {@link Authentication#getAuthSessionsForAccount}.
     * @param error Error, if any
     * @param [response] CAuthentication_GetAuthSessionsForAccount_Response
     */
    type GetAuthSessionsForAccountCallback = (error: (Error|null), response?: CAuthentication_GetAuthSessionsForAccount_Response) => void;

    /**
     * Callback as used by {@link Authentication#migrateMobileSession}.
     * @param error Error, if any
     * @param [response] CAuthentication_MigrateMobileSession_Response
     */
    type MigrateMobileSessionCallback = (error: (Error|null), response?: CAuthentication_MigrateMobileSession_Response) => void;

    /**
     * Callback as used by {@link Authentication#revokeToken}.
     * @param error Error, if any
     * @param [response] CAuthentication_Token_Revoke_Response
     */
    type RevokeTokenCallback = (error: (Error|null), response?: CAuthentication_Token_Revoke_Response) => void;

    /**
     * Callback as used by {@link Authentication#revokeRefreshToken}.
     * @param error Error, if any
     * @param [response] CAuthentication_RefreshToken_Revoke_Response
     */
    type RevokeRefreshTokenCallback = (error: (Error|null), response?: CAuthentication_RefreshToken_Revoke_Response) => void;
}

/** Represents an AuthenticationSupport */
export class AuthenticationSupport extends $protobuf.rpc.Service {

    /**
     * Constructs a new AuthenticationSupport service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new AuthenticationSupport service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): AuthenticationSupport;

    /**
     * Calls QueryRefreshTokensByAccount.
     * @param request CAuthenticationSupport_QueryRefreshTokensByAccount_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthenticationSupport_QueryRefreshTokensByAccount_Response
     */
    public queryRefreshTokensByAccount(request: ICAuthenticationSupport_QueryRefreshTokensByAccount_Request, callback: AuthenticationSupport.QueryRefreshTokensByAccountCallback): void;

    /**
     * Calls QueryRefreshTokensByAccount.
     * @param request CAuthenticationSupport_QueryRefreshTokensByAccount_Request message or plain object
     * @returns Promise
     */
    public queryRefreshTokensByAccount(request: ICAuthenticationSupport_QueryRefreshTokensByAccount_Request): Promise<CAuthenticationSupport_QueryRefreshTokensByAccount_Response>;

    /**
     * Calls QueryRefreshTokenByID.
     * @param request CAuthenticationSupport_QueryRefreshTokenByID_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthenticationSupport_QueryRefreshTokenByID_Response
     */
    public queryRefreshTokenByID(request: ICAuthenticationSupport_QueryRefreshTokenByID_Request, callback: AuthenticationSupport.QueryRefreshTokenByIDCallback): void;

    /**
     * Calls QueryRefreshTokenByID.
     * @param request CAuthenticationSupport_QueryRefreshTokenByID_Request message or plain object
     * @returns Promise
     */
    public queryRefreshTokenByID(request: ICAuthenticationSupport_QueryRefreshTokenByID_Request): Promise<CAuthenticationSupport_QueryRefreshTokenByID_Response>;

    /**
     * Calls RevokeToken.
     * @param request CAuthenticationSupport_RevokeToken_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthenticationSupport_RevokeToken_Response
     */
    public revokeToken(request: ICAuthenticationSupport_RevokeToken_Request, callback: AuthenticationSupport.RevokeTokenCallback): void;

    /**
     * Calls RevokeToken.
     * @param request CAuthenticationSupport_RevokeToken_Request message or plain object
     * @returns Promise
     */
    public revokeToken(request: ICAuthenticationSupport_RevokeToken_Request): Promise<CAuthenticationSupport_RevokeToken_Response>;

    /**
     * Calls GetTokenHistory.
     * @param request CAuthenticationSupport_GetTokenHistory_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CAuthenticationSupport_GetTokenHistory_Response
     */
    public getTokenHistory(request: ICAuthenticationSupport_GetTokenHistory_Request, callback: AuthenticationSupport.GetTokenHistoryCallback): void;

    /**
     * Calls GetTokenHistory.
     * @param request CAuthenticationSupport_GetTokenHistory_Request message or plain object
     * @returns Promise
     */
    public getTokenHistory(request: ICAuthenticationSupport_GetTokenHistory_Request): Promise<CAuthenticationSupport_GetTokenHistory_Response>;
}

export namespace AuthenticationSupport {

    /**
     * Callback as used by {@link AuthenticationSupport#queryRefreshTokensByAccount}.
     * @param error Error, if any
     * @param [response] CAuthenticationSupport_QueryRefreshTokensByAccount_Response
     */
    type QueryRefreshTokensByAccountCallback = (error: (Error|null), response?: CAuthenticationSupport_QueryRefreshTokensByAccount_Response) => void;

    /**
     * Callback as used by {@link AuthenticationSupport#queryRefreshTokenByID}.
     * @param error Error, if any
     * @param [response] CAuthenticationSupport_QueryRefreshTokenByID_Response
     */
    type QueryRefreshTokenByIDCallback = (error: (Error|null), response?: CAuthenticationSupport_QueryRefreshTokenByID_Response) => void;

    /**
     * Callback as used by {@link AuthenticationSupport#revokeToken}.
     * @param error Error, if any
     * @param [response] CAuthenticationSupport_RevokeToken_Response
     */
    type RevokeTokenCallback = (error: (Error|null), response?: CAuthenticationSupport_RevokeToken_Response) => void;

    /**
     * Callback as used by {@link AuthenticationSupport#getTokenHistory}.
     * @param error Error, if any
     * @param [response] CAuthenticationSupport_GetTokenHistory_Response
     */
    type GetTokenHistoryCallback = (error: (Error|null), response?: CAuthenticationSupport_GetTokenHistory_Response) => void;
}

/** Represents a CloudGaming */
export class CloudGaming extends $protobuf.rpc.Service {

    /**
     * Constructs a new CloudGaming service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new CloudGaming service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): CloudGaming;

    /**
     * Calls CreateNonce.
     * @param request CCloudGaming_CreateNonce_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CCloudGaming_CreateNonce_Response
     */
    public createNonce(request: ICCloudGaming_CreateNonce_Request, callback: CloudGaming.CreateNonceCallback): void;

    /**
     * Calls CreateNonce.
     * @param request CCloudGaming_CreateNonce_Request message or plain object
     * @returns Promise
     */
    public createNonce(request: ICCloudGaming_CreateNonce_Request): Promise<CCloudGaming_CreateNonce_Response>;

    /**
     * Calls GetTimeRemaining.
     * @param request CCloudGaming_GetTimeRemaining_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CCloudGaming_GetTimeRemaining_Response
     */
    public getTimeRemaining(request: ICCloudGaming_GetTimeRemaining_Request, callback: CloudGaming.GetTimeRemainingCallback): void;

    /**
     * Calls GetTimeRemaining.
     * @param request CCloudGaming_GetTimeRemaining_Request message or plain object
     * @returns Promise
     */
    public getTimeRemaining(request: ICCloudGaming_GetTimeRemaining_Request): Promise<CCloudGaming_GetTimeRemaining_Response>;
}

export namespace CloudGaming {

    /**
     * Callback as used by {@link CloudGaming#createNonce}.
     * @param error Error, if any
     * @param [response] CCloudGaming_CreateNonce_Response
     */
    type CreateNonceCallback = (error: (Error|null), response?: CCloudGaming_CreateNonce_Response) => void;

    /**
     * Callback as used by {@link CloudGaming#getTimeRemaining}.
     * @param error Error, if any
     * @param [response] CCloudGaming_GetTimeRemaining_Response
     */
    type GetTimeRemainingCallback = (error: (Error|null), response?: CCloudGaming_GetTimeRemaining_Response) => void;
}

/** EBanContentCheckResult enum. */
export enum EBanContentCheckResult {
    k_EBanContentCheckResult_NotScanned = 0,
    k_EBanContentCheckResult_Reset = 1,
    k_EBanContentCheckResult_NeedsChecking = 2,
    k_EBanContentCheckResult_VeryUnlikely = 5,
    k_EBanContentCheckResult_Unlikely = 30,
    k_EBanContentCheckResult_Possible = 50,
    k_EBanContentCheckResult_Likely = 75,
    k_EBanContentCheckResult_VeryLikely = 100
}

/** EProtoClanEventType enum. */
export enum EProtoClanEventType {
    k_EClanOtherEvent = 1,
    k_EClanGameEvent = 2,
    k_EClanPartyEvent = 3,
    k_EClanMeetingEvent = 4,
    k_EClanSpecialCauseEvent = 5,
    k_EClanMusicAndArtsEvent = 6,
    k_EClanSportsEvent = 7,
    k_EClanTripEvent = 8,
    k_EClanChatEvent = 9,
    k_EClanGameReleaseEvent = 10,
    k_EClanBroadcastEvent = 11,
    k_EClanSmallUpdateEvent = 12,
    k_EClanPreAnnounceMajorUpdateEvent = 13,
    k_EClanMajorUpdateEvent = 14,
    k_EClanDLCReleaseEvent = 15,
    k_EClanFutureReleaseEvent = 16,
    k_EClanESportTournamentStreamEvent = 17,
    k_EClanDevStreamEvent = 18,
    k_EClanFamousStreamEvent = 19,
    k_EClanGameSalesEvent = 20,
    k_EClanGameItemSalesEvent = 21,
    k_EClanInGameBonusXPEvent = 22,
    k_EClanInGameLootEvent = 23,
    k_EClanInGamePerksEvent = 24,
    k_EClanInGameChallengeEvent = 25,
    k_EClanInGameContestEvent = 26,
    k_EClanIRLEvent = 27,
    k_EClanNewsEvent = 28,
    k_EClanBetaReleaseEvent = 29,
    k_EClanInGameContentReleaseEvent = 30,
    k_EClanFreeTrial = 31,
    k_EClanSeasonRelease = 32,
    k_EClanSeasonUpdate = 33,
    k_EClanCrosspostEvent = 34,
    k_EClanInGameEventGeneral = 35
}

/** PartnerEventNotificationType enum. */
export enum PartnerEventNotificationType {
    k_EEventStart = 0,
    k_EEventBroadcastStart = 1,
    k_EEventMatchStart = 2,
    k_EEventPartnerMaxType = 3
}

/** Represents a CMsgIPAddress. */
export class CMsgIPAddress implements ICMsgIPAddress {

    /**
     * Constructs a new CMsgIPAddress.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgIPAddress);

    /** CMsgIPAddress v4. */
    public v4?: (number|null);

    /** CMsgIPAddress v6. */
    public v6?: (Uint8Array|null);

    /** CMsgIPAddress ip. */
    public ip?: ("v4"|"v6");

    /**
     * Creates a new CMsgIPAddress instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgIPAddress instance
     */
    public static create(properties?: ICMsgIPAddress): CMsgIPAddress;

    /**
     * Encodes the specified CMsgIPAddress message. Does not implicitly {@link CMsgIPAddress.verify|verify} messages.
     * @param message CMsgIPAddress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgIPAddress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgIPAddress message, length delimited. Does not implicitly {@link CMsgIPAddress.verify|verify} messages.
     * @param message CMsgIPAddress message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgIPAddress, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgIPAddress message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgIPAddress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgIPAddress;

    /**
     * Decodes a CMsgIPAddress message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgIPAddress
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgIPAddress;

    /**
     * Verifies a CMsgIPAddress message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgIPAddress message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgIPAddress
     */
    public static fromObject(object: { [k: string]: any }): CMsgIPAddress;

    /**
     * Creates a plain object from a CMsgIPAddress message. Also converts values to other types if specified.
     * @param message CMsgIPAddress
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgIPAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgIPAddress to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgIPAddress
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgIPAddressBucket. */
export class CMsgIPAddressBucket implements ICMsgIPAddressBucket {

    /**
     * Constructs a new CMsgIPAddressBucket.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgIPAddressBucket);

    /** CMsgIPAddressBucket originalIpAddress. */
    public originalIpAddress?: (ICMsgIPAddress|null);

    /** CMsgIPAddressBucket bucket. */
    public bucket: (number|Long);

    /**
     * Creates a new CMsgIPAddressBucket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgIPAddressBucket instance
     */
    public static create(properties?: ICMsgIPAddressBucket): CMsgIPAddressBucket;

    /**
     * Encodes the specified CMsgIPAddressBucket message. Does not implicitly {@link CMsgIPAddressBucket.verify|verify} messages.
     * @param message CMsgIPAddressBucket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgIPAddressBucket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgIPAddressBucket message, length delimited. Does not implicitly {@link CMsgIPAddressBucket.verify|verify} messages.
     * @param message CMsgIPAddressBucket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgIPAddressBucket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgIPAddressBucket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgIPAddressBucket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgIPAddressBucket;

    /**
     * Decodes a CMsgIPAddressBucket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgIPAddressBucket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgIPAddressBucket;

    /**
     * Verifies a CMsgIPAddressBucket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgIPAddressBucket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgIPAddressBucket
     */
    public static fromObject(object: { [k: string]: any }): CMsgIPAddressBucket;

    /**
     * Creates a plain object from a CMsgIPAddressBucket message. Also converts values to other types if specified.
     * @param message CMsgIPAddressBucket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgIPAddressBucket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgIPAddressBucket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgIPAddressBucket
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgGCRoutingProtoBufHeader. */
export class CMsgGCRoutingProtoBufHeader implements ICMsgGCRoutingProtoBufHeader {

    /**
     * Constructs a new CMsgGCRoutingProtoBufHeader.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgGCRoutingProtoBufHeader);

    /** CMsgGCRoutingProtoBufHeader dstGcidQueue. */
    public dstGcidQueue: (number|Long);

    /** CMsgGCRoutingProtoBufHeader dstGcDirIndex. */
    public dstGcDirIndex: number;

    /**
     * Creates a new CMsgGCRoutingProtoBufHeader instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgGCRoutingProtoBufHeader instance
     */
    public static create(properties?: ICMsgGCRoutingProtoBufHeader): CMsgGCRoutingProtoBufHeader;

    /**
     * Encodes the specified CMsgGCRoutingProtoBufHeader message. Does not implicitly {@link CMsgGCRoutingProtoBufHeader.verify|verify} messages.
     * @param message CMsgGCRoutingProtoBufHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgGCRoutingProtoBufHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgGCRoutingProtoBufHeader message, length delimited. Does not implicitly {@link CMsgGCRoutingProtoBufHeader.verify|verify} messages.
     * @param message CMsgGCRoutingProtoBufHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgGCRoutingProtoBufHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgGCRoutingProtoBufHeader message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgGCRoutingProtoBufHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgGCRoutingProtoBufHeader;

    /**
     * Decodes a CMsgGCRoutingProtoBufHeader message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgGCRoutingProtoBufHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgGCRoutingProtoBufHeader;

    /**
     * Verifies a CMsgGCRoutingProtoBufHeader message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgGCRoutingProtoBufHeader message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgGCRoutingProtoBufHeader
     */
    public static fromObject(object: { [k: string]: any }): CMsgGCRoutingProtoBufHeader;

    /**
     * Creates a plain object from a CMsgGCRoutingProtoBufHeader message. Also converts values to other types if specified.
     * @param message CMsgGCRoutingProtoBufHeader
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgGCRoutingProtoBufHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgGCRoutingProtoBufHeader to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgGCRoutingProtoBufHeader
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgProtoBufHeader. */
export class CMsgProtoBufHeader implements ICMsgProtoBufHeader {

    /**
     * Constructs a new CMsgProtoBufHeader.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgProtoBufHeader);

    /** CMsgProtoBufHeader steamid. */
    public steamid: (number|Long);

    /** CMsgProtoBufHeader clientSessionid. */
    public clientSessionid: number;

    /** CMsgProtoBufHeader routingAppid. */
    public routingAppid: number;

    /** CMsgProtoBufHeader jobidSource. */
    public jobidSource: (number|Long);

    /** CMsgProtoBufHeader jobidTarget. */
    public jobidTarget: (number|Long);

    /** CMsgProtoBufHeader targetJobName. */
    public targetJobName: string;

    /** CMsgProtoBufHeader seqNum. */
    public seqNum: number;

    /** CMsgProtoBufHeader eresult. */
    public eresult: number;

    /** CMsgProtoBufHeader errorMessage. */
    public errorMessage: string;

    /** CMsgProtoBufHeader authAccountFlags. */
    public authAccountFlags: number;

    /** CMsgProtoBufHeader tokenSource. */
    public tokenSource: number;

    /** CMsgProtoBufHeader adminSpoofingUser. */
    public adminSpoofingUser: boolean;

    /** CMsgProtoBufHeader transportError. */
    public transportError: number;

    /** CMsgProtoBufHeader messageid. */
    public messageid: (number|Long);

    /** CMsgProtoBufHeader publisherGroupId. */
    public publisherGroupId: number;

    /** CMsgProtoBufHeader sysid. */
    public sysid: number;

    /** CMsgProtoBufHeader traceTag. */
    public traceTag: (number|Long);

    /** CMsgProtoBufHeader webapiKeyId. */
    public webapiKeyId: number;

    /** CMsgProtoBufHeader isFromExternalSource. */
    public isFromExternalSource: boolean;

    /** CMsgProtoBufHeader forwardToSysid. */
    public forwardToSysid: number[];

    /** CMsgProtoBufHeader cmSysid. */
    public cmSysid: number;

    /** CMsgProtoBufHeader launcherType. */
    public launcherType: number;

    /** CMsgProtoBufHeader realm. */
    public realm: number;

    /** CMsgProtoBufHeader timeoutMs. */
    public timeoutMs: number;

    /** CMsgProtoBufHeader debugSource. */
    public debugSource: string;

    /** CMsgProtoBufHeader debugSourceStringIndex. */
    public debugSourceStringIndex: number;

    /** CMsgProtoBufHeader tokenId. */
    public tokenId: (number|Long);

    /** CMsgProtoBufHeader routingGc. */
    public routingGc?: (ICMsgGCRoutingProtoBufHeader|null);

    /** CMsgProtoBufHeader sessionDisposition. */
    public sessionDisposition: CMsgProtoBufHeader.ESessionDisposition;

    /** CMsgProtoBufHeader wgToken. */
    public wgToken: string;

    /** CMsgProtoBufHeader webuiAuthKey. */
    public webuiAuthKey: string;

    /** CMsgProtoBufHeader excludeClientSessionids. */
    public excludeClientSessionids: number[];

    /** CMsgProtoBufHeader ip. */
    public ip?: (number|null);

    /** CMsgProtoBufHeader ipV6. */
    public ipV6?: (Uint8Array|null);

    /** CMsgProtoBufHeader ipAddr. */
    public ipAddr?: ("ip"|"ipV6");

    /**
     * Creates a new CMsgProtoBufHeader instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgProtoBufHeader instance
     */
    public static create(properties?: ICMsgProtoBufHeader): CMsgProtoBufHeader;

    /**
     * Encodes the specified CMsgProtoBufHeader message. Does not implicitly {@link CMsgProtoBufHeader.verify|verify} messages.
     * @param message CMsgProtoBufHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgProtoBufHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgProtoBufHeader message, length delimited. Does not implicitly {@link CMsgProtoBufHeader.verify|verify} messages.
     * @param message CMsgProtoBufHeader message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgProtoBufHeader, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgProtoBufHeader message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgProtoBufHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgProtoBufHeader;

    /**
     * Decodes a CMsgProtoBufHeader message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgProtoBufHeader
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgProtoBufHeader;

    /**
     * Verifies a CMsgProtoBufHeader message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgProtoBufHeader message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgProtoBufHeader
     */
    public static fromObject(object: { [k: string]: any }): CMsgProtoBufHeader;

    /**
     * Creates a plain object from a CMsgProtoBufHeader message. Also converts values to other types if specified.
     * @param message CMsgProtoBufHeader
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgProtoBufHeader, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgProtoBufHeader to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgProtoBufHeader
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace CMsgProtoBufHeader {

    /** ESessionDisposition enum. */
    enum ESessionDisposition {
        k_ESessionDispositionNormal = 0,
        k_ESessionDispositionDisconnect = 1
    }
}

/** Represents a CMsgMulti. */
export class CMsgMulti implements ICMsgMulti {

    /**
     * Constructs a new CMsgMulti.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgMulti);

    /** CMsgMulti sizeUnzipped. */
    public sizeUnzipped: number;

    /** CMsgMulti messageBody. */
    public messageBody: Uint8Array;

    /**
     * Creates a new CMsgMulti instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgMulti instance
     */
    public static create(properties?: ICMsgMulti): CMsgMulti;

    /**
     * Encodes the specified CMsgMulti message. Does not implicitly {@link CMsgMulti.verify|verify} messages.
     * @param message CMsgMulti message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgMulti, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgMulti message, length delimited. Does not implicitly {@link CMsgMulti.verify|verify} messages.
     * @param message CMsgMulti message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgMulti, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgMulti message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgMulti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgMulti;

    /**
     * Decodes a CMsgMulti message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgMulti
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgMulti;

    /**
     * Verifies a CMsgMulti message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgMulti message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgMulti
     */
    public static fromObject(object: { [k: string]: any }): CMsgMulti;

    /**
     * Creates a plain object from a CMsgMulti message. Also converts values to other types if specified.
     * @param message CMsgMulti
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgMulti, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgMulti to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgMulti
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgProtobufWrapped. */
export class CMsgProtobufWrapped implements ICMsgProtobufWrapped {

    /**
     * Constructs a new CMsgProtobufWrapped.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgProtobufWrapped);

    /** CMsgProtobufWrapped messageBody. */
    public messageBody: Uint8Array;

    /**
     * Creates a new CMsgProtobufWrapped instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgProtobufWrapped instance
     */
    public static create(properties?: ICMsgProtobufWrapped): CMsgProtobufWrapped;

    /**
     * Encodes the specified CMsgProtobufWrapped message. Does not implicitly {@link CMsgProtobufWrapped.verify|verify} messages.
     * @param message CMsgProtobufWrapped message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgProtobufWrapped, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgProtobufWrapped message, length delimited. Does not implicitly {@link CMsgProtobufWrapped.verify|verify} messages.
     * @param message CMsgProtobufWrapped message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgProtobufWrapped, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgProtobufWrapped message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgProtobufWrapped
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgProtobufWrapped;

    /**
     * Decodes a CMsgProtobufWrapped message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgProtobufWrapped
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgProtobufWrapped;

    /**
     * Verifies a CMsgProtobufWrapped message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgProtobufWrapped message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgProtobufWrapped
     */
    public static fromObject(object: { [k: string]: any }): CMsgProtobufWrapped;

    /**
     * Creates a plain object from a CMsgProtobufWrapped message. Also converts values to other types if specified.
     * @param message CMsgProtobufWrapped
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgProtobufWrapped, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgProtobufWrapped to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgProtobufWrapped
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgAuthTicket. */
export class CMsgAuthTicket implements ICMsgAuthTicket {

    /**
     * Constructs a new CMsgAuthTicket.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAuthTicket);

    /** CMsgAuthTicket estate. */
    public estate: number;

    /** CMsgAuthTicket eresult. */
    public eresult: number;

    /** CMsgAuthTicket steamid. */
    public steamid: (number|Long);

    /** CMsgAuthTicket gameid. */
    public gameid: (number|Long);

    /** CMsgAuthTicket hSteamPipe. */
    public hSteamPipe: number;

    /** CMsgAuthTicket ticketCrc. */
    public ticketCrc: number;

    /** CMsgAuthTicket ticket. */
    public ticket: Uint8Array;

    /** CMsgAuthTicket serverSecret. */
    public serverSecret: Uint8Array;

    /** CMsgAuthTicket ticketType. */
    public ticketType: number;

    /**
     * Creates a new CMsgAuthTicket instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAuthTicket instance
     */
    public static create(properties?: ICMsgAuthTicket): CMsgAuthTicket;

    /**
     * Encodes the specified CMsgAuthTicket message. Does not implicitly {@link CMsgAuthTicket.verify|verify} messages.
     * @param message CMsgAuthTicket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAuthTicket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAuthTicket message, length delimited. Does not implicitly {@link CMsgAuthTicket.verify|verify} messages.
     * @param message CMsgAuthTicket message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAuthTicket, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAuthTicket message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAuthTicket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAuthTicket;

    /**
     * Decodes a CMsgAuthTicket message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAuthTicket
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAuthTicket;

    /**
     * Verifies a CMsgAuthTicket message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAuthTicket message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAuthTicket
     */
    public static fromObject(object: { [k: string]: any }): CMsgAuthTicket;

    /**
     * Creates a plain object from a CMsgAuthTicket message. Also converts values to other types if specified.
     * @param message CMsgAuthTicket
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAuthTicket, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAuthTicket to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAuthTicket
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCDDBAppDetailCommon. */
export class CCDDBAppDetailCommon implements ICCDDBAppDetailCommon {

    /**
     * Constructs a new CCDDBAppDetailCommon.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCDDBAppDetailCommon);

    /** CCDDBAppDetailCommon appid. */
    public appid: number;

    /** CCDDBAppDetailCommon name. */
    public name: string;

    /** CCDDBAppDetailCommon icon. */
    public icon: string;

    /** CCDDBAppDetailCommon tool. */
    public tool: boolean;

    /** CCDDBAppDetailCommon demo. */
    public demo: boolean;

    /** CCDDBAppDetailCommon media. */
    public media: boolean;

    /** CCDDBAppDetailCommon communityVisibleStats. */
    public communityVisibleStats: boolean;

    /** CCDDBAppDetailCommon friendlyName. */
    public friendlyName: string;

    /** CCDDBAppDetailCommon propagation. */
    public propagation: string;

    /** CCDDBAppDetailCommon hasAdultContent. */
    public hasAdultContent: boolean;

    /** CCDDBAppDetailCommon isVisibleInSteamChina. */
    public isVisibleInSteamChina: boolean;

    /** CCDDBAppDetailCommon appType. */
    public appType: number;

    /** CCDDBAppDetailCommon hasAdultContentSex. */
    public hasAdultContentSex: boolean;

    /** CCDDBAppDetailCommon hasAdultContentViolence. */
    public hasAdultContentViolence: boolean;

    /** CCDDBAppDetailCommon contentDescriptorids. */
    public contentDescriptorids: number[];

    /**
     * Creates a new CCDDBAppDetailCommon instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCDDBAppDetailCommon instance
     */
    public static create(properties?: ICCDDBAppDetailCommon): CCDDBAppDetailCommon;

    /**
     * Encodes the specified CCDDBAppDetailCommon message. Does not implicitly {@link CCDDBAppDetailCommon.verify|verify} messages.
     * @param message CCDDBAppDetailCommon message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCDDBAppDetailCommon, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCDDBAppDetailCommon message, length delimited. Does not implicitly {@link CCDDBAppDetailCommon.verify|verify} messages.
     * @param message CCDDBAppDetailCommon message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCDDBAppDetailCommon, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCDDBAppDetailCommon message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCDDBAppDetailCommon
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCDDBAppDetailCommon;

    /**
     * Decodes a CCDDBAppDetailCommon message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCDDBAppDetailCommon
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCDDBAppDetailCommon;

    /**
     * Verifies a CCDDBAppDetailCommon message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCDDBAppDetailCommon message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCDDBAppDetailCommon
     */
    public static fromObject(object: { [k: string]: any }): CCDDBAppDetailCommon;

    /**
     * Creates a plain object from a CCDDBAppDetailCommon message. Also converts values to other types if specified.
     * @param message CCDDBAppDetailCommon
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCDDBAppDetailCommon, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCDDBAppDetailCommon to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCDDBAppDetailCommon
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgAppRights. */
export class CMsgAppRights implements ICMsgAppRights {

    /**
     * Constructs a new CMsgAppRights.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgAppRights);

    /** CMsgAppRights editInfo. */
    public editInfo: boolean;

    /** CMsgAppRights publish. */
    public publish: boolean;

    /** CMsgAppRights viewErrorData. */
    public viewErrorData: boolean;

    /** CMsgAppRights download. */
    public download: boolean;

    /** CMsgAppRights uploadCdkeys. */
    public uploadCdkeys: boolean;

    /** CMsgAppRights generateCdkeys. */
    public generateCdkeys: boolean;

    /** CMsgAppRights viewFinancials. */
    public viewFinancials: boolean;

    /** CMsgAppRights manageCeg. */
    public manageCeg: boolean;

    /** CMsgAppRights manageSigning. */
    public manageSigning: boolean;

    /** CMsgAppRights manageCdkeys. */
    public manageCdkeys: boolean;

    /** CMsgAppRights editMarketing. */
    public editMarketing: boolean;

    /** CMsgAppRights economySupport. */
    public economySupport: boolean;

    /** CMsgAppRights economySupportSupervisor. */
    public economySupportSupervisor: boolean;

    /** CMsgAppRights managePricing. */
    public managePricing: boolean;

    /** CMsgAppRights broadcastLive. */
    public broadcastLive: boolean;

    /** CMsgAppRights viewMarketingTraffic. */
    public viewMarketingTraffic: boolean;

    /** CMsgAppRights editStoreDisplayContent. */
    public editStoreDisplayContent: boolean;

    /**
     * Creates a new CMsgAppRights instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgAppRights instance
     */
    public static create(properties?: ICMsgAppRights): CMsgAppRights;

    /**
     * Encodes the specified CMsgAppRights message. Does not implicitly {@link CMsgAppRights.verify|verify} messages.
     * @param message CMsgAppRights message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgAppRights, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgAppRights message, length delimited. Does not implicitly {@link CMsgAppRights.verify|verify} messages.
     * @param message CMsgAppRights message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgAppRights, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgAppRights message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgAppRights
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgAppRights;

    /**
     * Decodes a CMsgAppRights message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgAppRights
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgAppRights;

    /**
     * Verifies a CMsgAppRights message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgAppRights message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgAppRights
     */
    public static fromObject(object: { [k: string]: any }): CMsgAppRights;

    /**
     * Creates a plain object from a CMsgAppRights message. Also converts values to other types if specified.
     * @param message CMsgAppRights
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgAppRights, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgAppRights to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgAppRights
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCuratorPreferences. */
export class CCuratorPreferences implements ICCuratorPreferences {

    /**
     * Constructs a new CCuratorPreferences.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCuratorPreferences);

    /** CCuratorPreferences supportedLanguages. */
    public supportedLanguages: number;

    /** CCuratorPreferences platformWindows. */
    public platformWindows: boolean;

    /** CCuratorPreferences platformMac. */
    public platformMac: boolean;

    /** CCuratorPreferences platformLinux. */
    public platformLinux: boolean;

    /** CCuratorPreferences vrContent. */
    public vrContent: boolean;

    /** CCuratorPreferences adultContentViolence. */
    public adultContentViolence: boolean;

    /** CCuratorPreferences adultContentSex. */
    public adultContentSex: boolean;

    /** CCuratorPreferences timestampUpdated. */
    public timestampUpdated: number;

    /** CCuratorPreferences tagidsCurated. */
    public tagidsCurated: number[];

    /** CCuratorPreferences tagidsFiltered. */
    public tagidsFiltered: number[];

    /** CCuratorPreferences websiteTitle. */
    public websiteTitle: string;

    /** CCuratorPreferences websiteUrl. */
    public websiteUrl: string;

    /** CCuratorPreferences discussionUrl. */
    public discussionUrl: string;

    /** CCuratorPreferences showBroadcast. */
    public showBroadcast: boolean;

    /**
     * Creates a new CCuratorPreferences instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCuratorPreferences instance
     */
    public static create(properties?: ICCuratorPreferences): CCuratorPreferences;

    /**
     * Encodes the specified CCuratorPreferences message. Does not implicitly {@link CCuratorPreferences.verify|verify} messages.
     * @param message CCuratorPreferences message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCuratorPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCuratorPreferences message, length delimited. Does not implicitly {@link CCuratorPreferences.verify|verify} messages.
     * @param message CCuratorPreferences message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCuratorPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCuratorPreferences message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCuratorPreferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCuratorPreferences;

    /**
     * Decodes a CCuratorPreferences message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCuratorPreferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCuratorPreferences;

    /**
     * Verifies a CCuratorPreferences message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCuratorPreferences message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCuratorPreferences
     */
    public static fromObject(object: { [k: string]: any }): CCuratorPreferences;

    /**
     * Creates a plain object from a CCuratorPreferences message. Also converts values to other types if specified.
     * @param message CCuratorPreferences
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCuratorPreferences, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCuratorPreferences to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCuratorPreferences
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CLocalizationToken. */
export class CLocalizationToken implements ICLocalizationToken {

    /**
     * Constructs a new CLocalizationToken.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICLocalizationToken);

    /** CLocalizationToken language. */
    public language: number;

    /** CLocalizationToken localizedString. */
    public localizedString: string;

    /**
     * Creates a new CLocalizationToken instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CLocalizationToken instance
     */
    public static create(properties?: ICLocalizationToken): CLocalizationToken;

    /**
     * Encodes the specified CLocalizationToken message. Does not implicitly {@link CLocalizationToken.verify|verify} messages.
     * @param message CLocalizationToken message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICLocalizationToken, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CLocalizationToken message, length delimited. Does not implicitly {@link CLocalizationToken.verify|verify} messages.
     * @param message CLocalizationToken message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICLocalizationToken, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CLocalizationToken message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CLocalizationToken
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CLocalizationToken;

    /**
     * Decodes a CLocalizationToken message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CLocalizationToken
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CLocalizationToken;

    /**
     * Verifies a CLocalizationToken message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CLocalizationToken message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CLocalizationToken
     */
    public static fromObject(object: { [k: string]: any }): CLocalizationToken;

    /**
     * Creates a plain object from a CLocalizationToken message. Also converts values to other types if specified.
     * @param message CLocalizationToken
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CLocalizationToken, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CLocalizationToken to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CLocalizationToken
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CClanEventUserNewsTuple. */
export class CClanEventUserNewsTuple implements ICClanEventUserNewsTuple {

    /**
     * Constructs a new CClanEventUserNewsTuple.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICClanEventUserNewsTuple);

    /** CClanEventUserNewsTuple clanid. */
    public clanid: number;

    /** CClanEventUserNewsTuple eventGid. */
    public eventGid: (number|Long);

    /** CClanEventUserNewsTuple announcementGid. */
    public announcementGid: (number|Long);

    /** CClanEventUserNewsTuple rtimeStart. */
    public rtimeStart: number;

    /** CClanEventUserNewsTuple rtimeEnd. */
    public rtimeEnd: number;

    /** CClanEventUserNewsTuple priorityScore. */
    public priorityScore: number;

    /** CClanEventUserNewsTuple type. */
    public type: number;

    /** CClanEventUserNewsTuple clampRangeSlot. */
    public clampRangeSlot: number;

    /** CClanEventUserNewsTuple appid. */
    public appid: number;

    /** CClanEventUserNewsTuple rtime32LastModified. */
    public rtime32LastModified: number;

    /**
     * Creates a new CClanEventUserNewsTuple instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CClanEventUserNewsTuple instance
     */
    public static create(properties?: ICClanEventUserNewsTuple): CClanEventUserNewsTuple;

    /**
     * Encodes the specified CClanEventUserNewsTuple message. Does not implicitly {@link CClanEventUserNewsTuple.verify|verify} messages.
     * @param message CClanEventUserNewsTuple message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICClanEventUserNewsTuple, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CClanEventUserNewsTuple message, length delimited. Does not implicitly {@link CClanEventUserNewsTuple.verify|verify} messages.
     * @param message CClanEventUserNewsTuple message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICClanEventUserNewsTuple, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CClanEventUserNewsTuple message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CClanEventUserNewsTuple
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CClanEventUserNewsTuple;

    /**
     * Decodes a CClanEventUserNewsTuple message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CClanEventUserNewsTuple
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CClanEventUserNewsTuple;

    /**
     * Verifies a CClanEventUserNewsTuple message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CClanEventUserNewsTuple message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CClanEventUserNewsTuple
     */
    public static fromObject(object: { [k: string]: any }): CClanEventUserNewsTuple;

    /**
     * Creates a plain object from a CClanEventUserNewsTuple message. Also converts values to other types if specified.
     * @param message CClanEventUserNewsTuple
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CClanEventUserNewsTuple, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CClanEventUserNewsTuple to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CClanEventUserNewsTuple
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CClanMatchEventByRange. */
export class CClanMatchEventByRange implements ICClanMatchEventByRange {

    /**
     * Constructs a new CClanMatchEventByRange.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICClanMatchEventByRange);

    /** CClanMatchEventByRange rtimeBefore. */
    public rtimeBefore: number;

    /** CClanMatchEventByRange rtimeAfter. */
    public rtimeAfter: number;

    /** CClanMatchEventByRange qualified. */
    public qualified: number;

    /** CClanMatchEventByRange events. */
    public events: ICClanEventUserNewsTuple[];

    /**
     * Creates a new CClanMatchEventByRange instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CClanMatchEventByRange instance
     */
    public static create(properties?: ICClanMatchEventByRange): CClanMatchEventByRange;

    /**
     * Encodes the specified CClanMatchEventByRange message. Does not implicitly {@link CClanMatchEventByRange.verify|verify} messages.
     * @param message CClanMatchEventByRange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICClanMatchEventByRange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CClanMatchEventByRange message, length delimited. Does not implicitly {@link CClanMatchEventByRange.verify|verify} messages.
     * @param message CClanMatchEventByRange message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICClanMatchEventByRange, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CClanMatchEventByRange message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CClanMatchEventByRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CClanMatchEventByRange;

    /**
     * Decodes a CClanMatchEventByRange message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CClanMatchEventByRange
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CClanMatchEventByRange;

    /**
     * Verifies a CClanMatchEventByRange message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CClanMatchEventByRange message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CClanMatchEventByRange
     */
    public static fromObject(object: { [k: string]: any }): CClanMatchEventByRange;

    /**
     * Creates a plain object from a CClanMatchEventByRange message. Also converts values to other types if specified.
     * @param message CClanMatchEventByRange
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CClanMatchEventByRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CClanMatchEventByRange to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CClanMatchEventByRange
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CCommunity_ClanAnnouncementInfo. */
export class CCommunity_ClanAnnouncementInfo implements ICCommunity_ClanAnnouncementInfo {

    /**
     * Constructs a new CCommunity_ClanAnnouncementInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICCommunity_ClanAnnouncementInfo);

    /** CCommunity_ClanAnnouncementInfo gid. */
    public gid: (number|Long);

    /** CCommunity_ClanAnnouncementInfo clanid. */
    public clanid: (number|Long);

    /** CCommunity_ClanAnnouncementInfo posterid. */
    public posterid: (number|Long);

    /** CCommunity_ClanAnnouncementInfo headline. */
    public headline: string;

    /** CCommunity_ClanAnnouncementInfo posttime. */
    public posttime: number;

    /** CCommunity_ClanAnnouncementInfo updatetime. */
    public updatetime: number;

    /** CCommunity_ClanAnnouncementInfo body. */
    public body: string;

    /** CCommunity_ClanAnnouncementInfo commentcount. */
    public commentcount: number;

    /** CCommunity_ClanAnnouncementInfo tags. */
    public tags: string[];

    /** CCommunity_ClanAnnouncementInfo language. */
    public language: number;

    /** CCommunity_ClanAnnouncementInfo hidden. */
    public hidden: boolean;

    /** CCommunity_ClanAnnouncementInfo forumTopicId. */
    public forumTopicId: (number|Long);

    /** CCommunity_ClanAnnouncementInfo eventGid. */
    public eventGid: (number|Long);

    /** CCommunity_ClanAnnouncementInfo voteupcount. */
    public voteupcount: number;

    /** CCommunity_ClanAnnouncementInfo votedowncount. */
    public votedowncount: number;

    /** CCommunity_ClanAnnouncementInfo banCheckResult. */
    public banCheckResult: EBanContentCheckResult;

    /** CCommunity_ClanAnnouncementInfo banned. */
    public banned: boolean;

    /**
     * Creates a new CCommunity_ClanAnnouncementInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CCommunity_ClanAnnouncementInfo instance
     */
    public static create(properties?: ICCommunity_ClanAnnouncementInfo): CCommunity_ClanAnnouncementInfo;

    /**
     * Encodes the specified CCommunity_ClanAnnouncementInfo message. Does not implicitly {@link CCommunity_ClanAnnouncementInfo.verify|verify} messages.
     * @param message CCommunity_ClanAnnouncementInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICCommunity_ClanAnnouncementInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CCommunity_ClanAnnouncementInfo message, length delimited. Does not implicitly {@link CCommunity_ClanAnnouncementInfo.verify|verify} messages.
     * @param message CCommunity_ClanAnnouncementInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICCommunity_ClanAnnouncementInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CCommunity_ClanAnnouncementInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CCommunity_ClanAnnouncementInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CCommunity_ClanAnnouncementInfo;

    /**
     * Decodes a CCommunity_ClanAnnouncementInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CCommunity_ClanAnnouncementInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CCommunity_ClanAnnouncementInfo;

    /**
     * Verifies a CCommunity_ClanAnnouncementInfo message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CCommunity_ClanAnnouncementInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CCommunity_ClanAnnouncementInfo
     */
    public static fromObject(object: { [k: string]: any }): CCommunity_ClanAnnouncementInfo;

    /**
     * Creates a plain object from a CCommunity_ClanAnnouncementInfo message. Also converts values to other types if specified.
     * @param message CCommunity_ClanAnnouncementInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CCommunity_ClanAnnouncementInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CCommunity_ClanAnnouncementInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CCommunity_ClanAnnouncementInfo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CClanEventData. */
export class CClanEventData implements ICClanEventData {

    /**
     * Constructs a new CClanEventData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICClanEventData);

    /** CClanEventData gid. */
    public gid: (number|Long);

    /** CClanEventData clanSteamid. */
    public clanSteamid: (number|Long);

    /** CClanEventData eventName. */
    public eventName: string;

    /** CClanEventData eventType. */
    public eventType: EProtoClanEventType;

    /** CClanEventData appid. */
    public appid: number;

    /** CClanEventData serverAddress. */
    public serverAddress: string;

    /** CClanEventData serverPassword. */
    public serverPassword: string;

    /** CClanEventData rtime32StartTime. */
    public rtime32StartTime: number;

    /** CClanEventData rtime32EndTime. */
    public rtime32EndTime: number;

    /** CClanEventData commentCount. */
    public commentCount: number;

    /** CClanEventData creatorSteamid. */
    public creatorSteamid: (number|Long);

    /** CClanEventData lastUpdateSteamid. */
    public lastUpdateSteamid: (number|Long);

    /** CClanEventData eventNotes. */
    public eventNotes: string;

    /** CClanEventData jsondata. */
    public jsondata: string;

    /** CClanEventData announcementBody. */
    public announcementBody?: (ICCommunity_ClanAnnouncementInfo|null);

    /** CClanEventData published. */
    public published: boolean;

    /** CClanEventData hidden. */
    public hidden: boolean;

    /** CClanEventData rtime32VisibilityStart. */
    public rtime32VisibilityStart: number;

    /** CClanEventData rtime32VisibilityEnd. */
    public rtime32VisibilityEnd: number;

    /** CClanEventData broadcasterAccountid. */
    public broadcasterAccountid: number;

    /** CClanEventData followerCount. */
    public followerCount: number;

    /** CClanEventData ignoreCount. */
    public ignoreCount: number;

    /** CClanEventData forumTopicId. */
    public forumTopicId: (number|Long);

    /** CClanEventData rtime32LastModified. */
    public rtime32LastModified: number;

    /** CClanEventData newsPostGid. */
    public newsPostGid: (number|Long);

    /** CClanEventData rtimeModReviewed. */
    public rtimeModReviewed: number;

    /** CClanEventData featuredAppTagid. */
    public featuredAppTagid: number;

    /** CClanEventData referencedAppids. */
    public referencedAppids: number[];

    /** CClanEventData buildId. */
    public buildId: number;

    /** CClanEventData buildBranch. */
    public buildBranch: string;

    /**
     * Creates a new CClanEventData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CClanEventData instance
     */
    public static create(properties?: ICClanEventData): CClanEventData;

    /**
     * Encodes the specified CClanEventData message. Does not implicitly {@link CClanEventData.verify|verify} messages.
     * @param message CClanEventData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICClanEventData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CClanEventData message, length delimited. Does not implicitly {@link CClanEventData.verify|verify} messages.
     * @param message CClanEventData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICClanEventData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CClanEventData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CClanEventData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CClanEventData;

    /**
     * Decodes a CClanEventData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CClanEventData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CClanEventData;

    /**
     * Verifies a CClanEventData message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CClanEventData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CClanEventData
     */
    public static fromObject(object: { [k: string]: any }): CClanEventData;

    /**
     * Creates a plain object from a CClanEventData message. Also converts values to other types if specified.
     * @param message CClanEventData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CClanEventData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CClanEventData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CClanEventData
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CBilling_Address. */
export class CBilling_Address implements ICBilling_Address {

    /**
     * Constructs a new CBilling_Address.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICBilling_Address);

    /** CBilling_Address firstName. */
    public firstName: string;

    /** CBilling_Address lastName. */
    public lastName: string;

    /** CBilling_Address address1. */
    public address1: string;

    /** CBilling_Address address2. */
    public address2: string;

    /** CBilling_Address city. */
    public city: string;

    /** CBilling_Address usState. */
    public usState: string;

    /** CBilling_Address countryCode. */
    public countryCode: string;

    /** CBilling_Address postcode. */
    public postcode: string;

    /** CBilling_Address zipPlus4. */
    public zipPlus4: number;

    /** CBilling_Address phone. */
    public phone: string;

    /**
     * Creates a new CBilling_Address instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CBilling_Address instance
     */
    public static create(properties?: ICBilling_Address): CBilling_Address;

    /**
     * Encodes the specified CBilling_Address message. Does not implicitly {@link CBilling_Address.verify|verify} messages.
     * @param message CBilling_Address message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICBilling_Address, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CBilling_Address message, length delimited. Does not implicitly {@link CBilling_Address.verify|verify} messages.
     * @param message CBilling_Address message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICBilling_Address, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CBilling_Address message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CBilling_Address
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CBilling_Address;

    /**
     * Decodes a CBilling_Address message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CBilling_Address
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CBilling_Address;

    /**
     * Verifies a CBilling_Address message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CBilling_Address message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CBilling_Address
     */
    public static fromObject(object: { [k: string]: any }): CBilling_Address;

    /**
     * Creates a plain object from a CBilling_Address message. Also converts values to other types if specified.
     * @param message CBilling_Address
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CBilling_Address, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CBilling_Address to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CBilling_Address
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CPackageReservationStatus. */
export class CPackageReservationStatus implements ICPackageReservationStatus {

    /**
     * Constructs a new CPackageReservationStatus.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPackageReservationStatus);

    /** CPackageReservationStatus packageid. */
    public packageid: number;

    /** CPackageReservationStatus reservationState. */
    public reservationState: number;

    /** CPackageReservationStatus queuePosition. */
    public queuePosition: number;

    /** CPackageReservationStatus totalQueueSize. */
    public totalQueueSize: number;

    /** CPackageReservationStatus reservationCountryCode. */
    public reservationCountryCode: string;

    /** CPackageReservationStatus expired. */
    public expired: boolean;

    /** CPackageReservationStatus timeExpires. */
    public timeExpires: number;

    /** CPackageReservationStatus timeReserved. */
    public timeReserved: number;

    /** CPackageReservationStatus rtimeEstimatedNotification. */
    public rtimeEstimatedNotification: number;

    /** CPackageReservationStatus notificatonToken. */
    public notificatonToken: string;

    /**
     * Creates a new CPackageReservationStatus instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPackageReservationStatus instance
     */
    public static create(properties?: ICPackageReservationStatus): CPackageReservationStatus;

    /**
     * Encodes the specified CPackageReservationStatus message. Does not implicitly {@link CPackageReservationStatus.verify|verify} messages.
     * @param message CPackageReservationStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPackageReservationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPackageReservationStatus message, length delimited. Does not implicitly {@link CPackageReservationStatus.verify|verify} messages.
     * @param message CPackageReservationStatus message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPackageReservationStatus, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPackageReservationStatus message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPackageReservationStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPackageReservationStatus;

    /**
     * Decodes a CPackageReservationStatus message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPackageReservationStatus
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPackageReservationStatus;

    /**
     * Verifies a CPackageReservationStatus message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPackageReservationStatus message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPackageReservationStatus
     */
    public static fromObject(object: { [k: string]: any }): CPackageReservationStatus;

    /**
     * Creates a plain object from a CPackageReservationStatus message. Also converts values to other types if specified.
     * @param message CPackageReservationStatus
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPackageReservationStatus, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPackageReservationStatus to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPackageReservationStatus
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgKeyValuePair. */
export class CMsgKeyValuePair implements ICMsgKeyValuePair {

    /**
     * Constructs a new CMsgKeyValuePair.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgKeyValuePair);

    /** CMsgKeyValuePair name. */
    public name: string;

    /** CMsgKeyValuePair value. */
    public value: string;

    /**
     * Creates a new CMsgKeyValuePair instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgKeyValuePair instance
     */
    public static create(properties?: ICMsgKeyValuePair): CMsgKeyValuePair;

    /**
     * Encodes the specified CMsgKeyValuePair message. Does not implicitly {@link CMsgKeyValuePair.verify|verify} messages.
     * @param message CMsgKeyValuePair message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgKeyValuePair, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgKeyValuePair message, length delimited. Does not implicitly {@link CMsgKeyValuePair.verify|verify} messages.
     * @param message CMsgKeyValuePair message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgKeyValuePair, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgKeyValuePair message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgKeyValuePair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgKeyValuePair;

    /**
     * Decodes a CMsgKeyValuePair message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgKeyValuePair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgKeyValuePair;

    /**
     * Verifies a CMsgKeyValuePair message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgKeyValuePair message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgKeyValuePair
     */
    public static fromObject(object: { [k: string]: any }): CMsgKeyValuePair;

    /**
     * Creates a plain object from a CMsgKeyValuePair message. Also converts values to other types if specified.
     * @param message CMsgKeyValuePair
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgKeyValuePair, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgKeyValuePair to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgKeyValuePair
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a CMsgKeyValueSet. */
export class CMsgKeyValueSet implements ICMsgKeyValueSet {

    /**
     * Constructs a new CMsgKeyValueSet.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICMsgKeyValueSet);

    /** CMsgKeyValueSet pairs. */
    public pairs: ICMsgKeyValuePair[];

    /**
     * Creates a new CMsgKeyValueSet instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CMsgKeyValueSet instance
     */
    public static create(properties?: ICMsgKeyValueSet): CMsgKeyValueSet;

    /**
     * Encodes the specified CMsgKeyValueSet message. Does not implicitly {@link CMsgKeyValueSet.verify|verify} messages.
     * @param message CMsgKeyValueSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICMsgKeyValueSet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CMsgKeyValueSet message, length delimited. Does not implicitly {@link CMsgKeyValueSet.verify|verify} messages.
     * @param message CMsgKeyValueSet message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICMsgKeyValueSet, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CMsgKeyValueSet message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CMsgKeyValueSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CMsgKeyValueSet;

    /**
     * Decodes a CMsgKeyValueSet message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CMsgKeyValueSet
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CMsgKeyValueSet;

    /**
     * Verifies a CMsgKeyValueSet message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CMsgKeyValueSet message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CMsgKeyValueSet
     */
    public static fromObject(object: { [k: string]: any }): CMsgKeyValueSet;

    /**
     * Creates a plain object from a CMsgKeyValueSet message. Also converts values to other types if specified.
     * @param message CMsgKeyValueSet
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CMsgKeyValueSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CMsgKeyValueSet to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CMsgKeyValueSet
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a UserContentDescriptorPreferences. */
export class UserContentDescriptorPreferences implements IUserContentDescriptorPreferences {

    /**
     * Constructs a new UserContentDescriptorPreferences.
     * @param [properties] Properties to set
     */
    constructor(properties?: IUserContentDescriptorPreferences);

    /** UserContentDescriptorPreferences contentDescriptorsToExclude. */
    public contentDescriptorsToExclude: UserContentDescriptorPreferences.IContentDescriptor[];

    /**
     * Creates a new UserContentDescriptorPreferences instance using the specified properties.
     * @param [properties] Properties to set
     * @returns UserContentDescriptorPreferences instance
     */
    public static create(properties?: IUserContentDescriptorPreferences): UserContentDescriptorPreferences;

    /**
     * Encodes the specified UserContentDescriptorPreferences message. Does not implicitly {@link UserContentDescriptorPreferences.verify|verify} messages.
     * @param message UserContentDescriptorPreferences message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IUserContentDescriptorPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified UserContentDescriptorPreferences message, length delimited. Does not implicitly {@link UserContentDescriptorPreferences.verify|verify} messages.
     * @param message UserContentDescriptorPreferences message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IUserContentDescriptorPreferences, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a UserContentDescriptorPreferences message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns UserContentDescriptorPreferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserContentDescriptorPreferences;

    /**
     * Decodes a UserContentDescriptorPreferences message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns UserContentDescriptorPreferences
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserContentDescriptorPreferences;

    /**
     * Verifies a UserContentDescriptorPreferences message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a UserContentDescriptorPreferences message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns UserContentDescriptorPreferences
     */
    public static fromObject(object: { [k: string]: any }): UserContentDescriptorPreferences;

    /**
     * Creates a plain object from a UserContentDescriptorPreferences message. Also converts values to other types if specified.
     * @param message UserContentDescriptorPreferences
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: UserContentDescriptorPreferences, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this UserContentDescriptorPreferences to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for UserContentDescriptorPreferences
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace UserContentDescriptorPreferences {

    /** Properties of a ContentDescriptor. */
    interface IContentDescriptor {

        /** ContentDescriptor contentDescriptorid */
        contentDescriptorid?: (number|null);

        /** ContentDescriptor timestampAdded */
        timestampAdded?: (number|null);
    }

    /** Represents a ContentDescriptor. */
    class ContentDescriptor implements IContentDescriptor {

        /**
         * Constructs a new ContentDescriptor.
         * @param [properties] Properties to set
         */
        constructor(properties?: UserContentDescriptorPreferences.IContentDescriptor);

        /** ContentDescriptor contentDescriptorid. */
        public contentDescriptorid: number;

        /** ContentDescriptor timestampAdded. */
        public timestampAdded: number;

        /**
         * Creates a new ContentDescriptor instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContentDescriptor instance
         */
        public static create(properties?: UserContentDescriptorPreferences.IContentDescriptor): UserContentDescriptorPreferences.ContentDescriptor;

        /**
         * Encodes the specified ContentDescriptor message. Does not implicitly {@link UserContentDescriptorPreferences.ContentDescriptor.verify|verify} messages.
         * @param message ContentDescriptor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: UserContentDescriptorPreferences.IContentDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContentDescriptor message, length delimited. Does not implicitly {@link UserContentDescriptorPreferences.ContentDescriptor.verify|verify} messages.
         * @param message ContentDescriptor message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: UserContentDescriptorPreferences.IContentDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContentDescriptor message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContentDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): UserContentDescriptorPreferences.ContentDescriptor;

        /**
         * Decodes a ContentDescriptor message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContentDescriptor
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): UserContentDescriptorPreferences.ContentDescriptor;

        /**
         * Verifies a ContentDescriptor message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContentDescriptor message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContentDescriptor
         */
        public static fromObject(object: { [k: string]: any }): UserContentDescriptorPreferences.ContentDescriptor;

        /**
         * Creates a plain object from a ContentDescriptor message. Also converts values to other types if specified.
         * @param message ContentDescriptor
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: UserContentDescriptorPreferences.ContentDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContentDescriptor to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for ContentDescriptor
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorSet
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);

            /** FileDescriptorProto edition */
            edition?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /** FileDescriptorProto edition. */
            public edition: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for DescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ExtensionRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for ReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ExtensionRangeOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional */
            proto3Optional?: (boolean|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /** FieldDescriptorProto proto3Optional. */
            public proto3Optional: boolean;

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for EnumReservedRange
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodDescriptorProto
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .forcePhpGeneration */
            ".forcePhpGeneration"?: (boolean|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** FileOptions .forcePhpGeneration. */
            public forcePhpGeneration: boolean;

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FileOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .msgpoolSoftLimit */
            ".msgpoolSoftLimit"?: (number|null);

            /** MessageOptions .msgpoolHardLimit */
            ".msgpoolHardLimit"?: (number|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** MessageOptions .msgpoolSoftLimit. */
            public msgpoolSoftLimit: number;

            /** MessageOptions .msgpoolHardLimit. */
            public msgpoolHardLimit: number;

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MessageOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions unverifiedLazy */
            unverifiedLazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .phpOutputAlwaysNumber */
            ".phpOutputAlwaysNumber"?: (boolean|null);

            /** FieldOptions .allowFieldNamedSteamId */
            ".allowFieldNamedSteamId"?: (boolean|null);

            /** FieldOptions .description */
            ".description"?: (string|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions unverifiedLazy. */
            public unverifiedLazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** FieldOptions .phpOutputAlwaysNumber. */
            public phpOutputAlwaysNumber: boolean;

            /** FieldOptions .allowFieldNamedSteamId. */
            public allowFieldNamedSteamId: boolean;

            /** FieldOptions .description. */
            public description: string;

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for FieldOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for OneofOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumOptions .enumDescription */
            ".enumDescription"?: (string|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** EnumOptions .enumDescription. */
            public enumDescription: string;

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** EnumValueOptions .enumValueDescription */
            ".enumValueDescription"?: (string|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** EnumValueOptions .enumValueDescription. */
            public enumValueDescription: string;

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for EnumValueOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .serviceDescription */
            ".serviceDescription"?: (string|null);

            /** ServiceOptions .serviceExecutionSite */
            ".serviceExecutionSite"?: (EProtoExecutionSite|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** ServiceOptions .serviceDescription. */
            public serviceDescription: string;

            /** ServiceOptions .serviceExecutionSite. */
            public serviceExecutionSite: EProtoExecutionSite;

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for ServiceOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .methodDescription */
            ".methodDescription"?: (string|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: google.protobuf.MethodOptions.IdempotencyLevel;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /** MethodOptions .methodDescription. */
            public methodDescription: string;

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for MethodOptions
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for UninterpretedOption
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for NamePart
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for SourceCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Location
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };

            /**
             * Gets the default type url for GeneratedCodeInfo
             * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
             * @returns The default type url
             */
            public static getTypeUrl(typeUrlPrefix?: string): string;
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);

                /** Annotation semantic */
                semantic?: (google.protobuf.GeneratedCodeInfo.Annotation.Semantic|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /** Annotation semantic. */
                public semantic: google.protobuf.GeneratedCodeInfo.Annotation.Semantic;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };

                /**
                 * Gets the default type url for Annotation
                 * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
                 * @returns The default type url
                 */
                public static getTypeUrl(typeUrlPrefix?: string): string;
            }

            namespace Annotation {

                /** Semantic enum. */
                enum Semantic {
                    NONE = 0,
                    SET = 1,
                    ALIAS = 2
                }
            }
        }
    }
}

/** EProtoExecutionSite enum. */
export enum EProtoExecutionSite {
    k_EProtoExecutionSiteUnknown = 0,
    k_EProtoExecutionSiteSteamClient = 2
}

/** Represents a NoResponse. */
export class NoResponse implements INoResponse {

    /**
     * Constructs a new NoResponse.
     * @param [properties] Properties to set
     */
    constructor(properties?: INoResponse);

    /**
     * Creates a new NoResponse instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NoResponse instance
     */
    public static create(properties?: INoResponse): NoResponse;

    /**
     * Encodes the specified NoResponse message. Does not implicitly {@link NoResponse.verify|verify} messages.
     * @param message NoResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NoResponse message, length delimited. Does not implicitly {@link NoResponse.verify|verify} messages.
     * @param message NoResponse message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NoResponse message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NoResponse;

    /**
     * Decodes a NoResponse message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NoResponse;

    /**
     * Verifies a NoResponse message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NoResponse message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NoResponse
     */
    public static fromObject(object: { [k: string]: any }): NoResponse;

    /**
     * Creates a plain object from a NoResponse message. Also converts values to other types if specified.
     * @param message NoResponse
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NoResponse to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NoResponse
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** EPublishedFileQueryType enum. */
export enum EPublishedFileQueryType {
    k_PublishedFileQueryType_RankedByVote = 0,
    k_PublishedFileQueryType_RankedByPublicationDate = 1,
    k_PublishedFileQueryType_AcceptedForGameRankedByAcceptanceDate = 2,
    k_PublishedFileQueryType_RankedByTrend = 3,
    k_PublishedFileQueryType_FavoritedByFriendsRankedByPublicationDate = 4,
    k_PublishedFileQueryType_CreatedByFriendsRankedByPublicationDate = 5,
    k_PublishedFileQueryType_RankedByNumTimesReported = 6,
    k_PublishedFileQueryType_CreatedByFollowedUsersRankedByPublicationDate = 7,
    k_PublishedFileQueryType_NotYetRated = 8,
    k_PublishedFileQueryType_RankedByTotalUniqueSubscriptions = 9,
    k_PublishedFileQueryType_RankedByTotalVotesAsc = 10,
    k_PublishedFileQueryType_RankedByVotesUp = 11,
    k_PublishedFileQueryType_RankedByTextSearch = 12,
    k_PublishedFileQueryType_RankedByPlaytimeTrend = 13,
    k_PublishedFileQueryType_RankedByTotalPlaytime = 14,
    k_PublishedFileQueryType_RankedByAveragePlaytimeTrend = 15,
    k_PublishedFileQueryType_RankedByLifetimeAveragePlaytime = 16,
    k_PublishedFileQueryType_RankedByPlaytimeSessionsTrend = 17,
    k_PublishedFileQueryType_RankedByLifetimePlaytimeSessions = 18,
    k_PublishedFileQueryType_RankedByInappropriateContentRating = 19,
    k_PublishedFileQueryType_RankedByBanContentCheck = 20,
    k_PublishedFileQueryType_RankedByLastUpdatedDate = 21
}

/** EPublishedFileInappropriateProvider enum. */
export enum EPublishedFileInappropriateProvider {
    k_EPublishedFileInappropriateProvider_Invalid = 0,
    k_EPublishedFileInappropriateProvider_Google = 1,
    k_EPublishedFileInappropriateProvider_Amazon = 2
}

/** EPublishedFileInappropriateResult enum. */
export enum EPublishedFileInappropriateResult {
    k_EPublishedFileInappropriateResult_NotScanned = 0,
    k_EPublishedFileInappropriateResult_VeryUnlikely = 1,
    k_EPublishedFileInappropriateResult_Unlikely = 30,
    k_EPublishedFileInappropriateResult_Possible = 50,
    k_EPublishedFileInappropriateResult_Likely = 75,
    k_EPublishedFileInappropriateResult_VeryLikely = 100
}

/** EPersonaStateFlag enum. */
export enum EPersonaStateFlag {
    k_EPersonaStateFlag_HasRichPresence = 1,
    k_EPersonaStateFlag_InJoinableGame = 2,
    k_EPersonaStateFlag_Golden = 4,
    k_EPersonaStateFlag_RemotePlayTogether = 8,
    k_EPersonaStateFlag_ClientTypeWeb = 256,
    k_EPersonaStateFlag_ClientTypeMobile = 512,
    k_EPersonaStateFlag_ClientTypeTenfoot = 1024,
    k_EPersonaStateFlag_ClientTypeVR = 2048,
    k_EPersonaStateFlag_LaunchTypeGamepad = 4096,
    k_EPersonaStateFlag_LaunchTypeCompatTool = 8192
}

/** EContentCheckProvider enum. */
export enum EContentCheckProvider {
    k_EContentCheckProvider_Invalid = 0,
    k_EContentCheckProvider_Google_DEPRECATED = 1,
    k_EContentCheckProvider_Amazon = 2,
    k_EContentCheckProvider_Local = 3,
    k_EContentCheckProvider_GoogleVertexAI = 4
}

/** EProfileCustomizationType enum. */
export enum EProfileCustomizationType {
    k_EProfileCustomizationTypeInvalid = 0,
    k_EProfileCustomizationTypeRareAchievementShowcase = 1,
    k_EProfileCustomizationTypeGameCollector = 2,
    k_EProfileCustomizationTypeItemShowcase = 3,
    k_EProfileCustomizationTypeTradeShowcase = 4,
    k_EProfileCustomizationTypeBadges = 5,
    k_EProfileCustomizationTypeFavoriteGame = 6,
    k_EProfileCustomizationTypeScreenshotShowcase = 7,
    k_EProfileCustomizationTypeCustomText = 8,
    k_EProfileCustomizationTypeFavoriteGroup = 9,
    k_EProfileCustomizationTypeRecommendation = 10,
    k_EProfileCustomizationTypeWorkshopItem = 11,
    k_EProfileCustomizationTypeMyWorkshop = 12,
    k_EProfileCustomizationTypeArtworkShowcase = 13,
    k_EProfileCustomizationTypeVideoShowcase = 14,
    k_EProfileCustomizationTypeGuides = 15,
    k_EProfileCustomizationTypeMyGuides = 16,
    k_EProfileCustomizationTypeAchievements = 17,
    k_EProfileCustomizationTypeGreenlight = 18,
    k_EProfileCustomizationTypeMyGreenlight = 19,
    k_EProfileCustomizationTypeSalien = 20,
    k_EProfileCustomizationTypeLoyaltyRewardReactions = 21,
    k_EProfileCustomizationTypeSingleArtworkShowcase = 22,
    k_EProfileCustomizationTypeAchievementsCompletionist = 23,
    k_EProfileCustomizationTypeReplay = 24
}

/** EPublishedFileStorageSystem enum. */
export enum EPublishedFileStorageSystem {
    k_EPublishedFileStorageSystemInvalid = 0,
    k_EPublishedFileStorageSystemLegacyCloud = 1,
    k_EPublishedFileStorageSystemDepot = 2,
    k_EPublishedFileStorageSystemUGCCloud = 3
}

/** ECloudStoragePersistState enum. */
export enum ECloudStoragePersistState {
    k_ECloudStoragePersistStatePersisted = 0,
    k_ECloudStoragePersistStateForgotten = 1,
    k_ECloudStoragePersistStateDeleted = 2
}

/** ESDCardFormatStage enum. */
export enum ESDCardFormatStage {
    k_ESDCardFormatStage_Invalid = 0,
    k_ESDCardFormatStage_Starting = 1,
    k_ESDCardFormatStage_Testing = 2,
    k_ESDCardFormatStage_Rescuing = 3,
    k_ESDCardFormatStage_Formatting = 4,
    k_ESDCardFormatStage_Finalizing = 5
}

/** EStorageFormatStage enum. */
export enum EStorageFormatStage {
    k_EStorageFormatStage_Invalid = 0,
    k_EStorageFormatStage_NotRunning = 1,
    k_EStorageFormatStage_Starting = 2,
    k_EStorageFormatStage_Testing = 3,
    k_EStorageFormatStage_Rescuing = 4,
    k_EStorageFormatStage_Formatting = 5,
    k_EStorageFormatStage_Finalizing = 6
}

/** ESystemFanControlMode enum. */
export enum ESystemFanControlMode {
    k_SystemFanControlMode_Invalid = 0,
    k_SystemFanControlMode_Disabled = 1,
    k_SystemFanControlMode_Default = 2
}

/** EStartupMovieVariant enum. */
export enum EStartupMovieVariant {
    k_EStartupMovieVariant_Invalid = 0,
    k_EStartupMovieVariant_Default = 1,
    k_EStartupMovieVariant_Orange = 2
}

/** EColorGamutLabelSet enum. */
export enum EColorGamutLabelSet {
    k_ColorGamutLabelSet_Default = 0,
    k_ColorGamutLabelSet_sRGB_Native = 1,
    k_ColorGamutLabelSet_Native_sRGB_Boosted = 2
}

/** EBluetoothDeviceType enum. */
export enum EBluetoothDeviceType {
    k_BluetoothDeviceType_Invalid = 0,
    k_BluetoothDeviceType_Unknown = 1,
    k_BluetoothDeviceType_Phone = 2,
    k_BluetoothDeviceType_Computer = 3,
    k_BluetoothDeviceType_Headset = 4,
    k_BluetoothDeviceType_Headphones = 5,
    k_BluetoothDeviceType_Speakers = 6,
    k_BluetoothDeviceType_OtherAudio = 7,
    k_BluetoothDeviceType_Mouse = 8,
    k_BluetoothDeviceType_Joystick = 9,
    k_BluetoothDeviceType_Gamepad = 10,
    k_BluetoothDeviceType_Keyboard = 11
}

/** ESystemAudioDirection enum. */
export enum ESystemAudioDirection {
    k_SystemAudioDirection_Invalid = 0,
    k_SystemAudioDirection_Input = 1,
    k_SystemAudioDirection_Output = 2
}

/** ESystemAudioChannel enum. */
export enum ESystemAudioChannel {
    k_SystemAudioChannel_Invalid = 0,
    k_SystemAudioChannel_Aggregated = 1,
    k_SystemAudioChannel_FrontLeft = 2,
    k_SystemAudioChannel_FrontRight = 3,
    k_SystemAudioChannel_LFE = 4,
    k_SystemAudioChannel_BackLeft = 5,
    k_SystemAudioChannel_BackRight = 6,
    k_SystemAudioChannel_FrontCenter = 7,
    k_SystemAudioChannel_Unknown = 8,
    k_SystemAudioChannel_Mono = 9
}

/** ESystemAudioPortType enum. */
export enum ESystemAudioPortType {
    k_SystemAudioPortType_Invalid = 0,
    k_SystemAudioPortType_Unknown = 1,
    k_SystemAudioPortType_Audio32f = 2,
    k_SystemAudioPortType_Midi8b = 3,
    k_SystemAudioPortType_Video32RGBA = 4
}

/** ESystemAudioPortDirection enum. */
export enum ESystemAudioPortDirection {
    k_SystemAudioPortDirection_Invalid = 0,
    k_SystemAudioPortDirection_Input = 1,
    k_SystemAudioPortDirection_Output = 2
}

/** ESystemServiceState enum. */
export enum ESystemServiceState {
    k_ESystemServiceState_Unavailable = 0,
    k_ESystemServiceState_Disabled = 1,
    k_ESystemServiceState_Enabled = 2
}

/** EGraphicsPerfOverlayLevel enum. */
export enum EGraphicsPerfOverlayLevel {
    k_EGraphicsPerfOverlayLevel_Hidden = 0,
    k_EGraphicsPerfOverlayLevel_Basic = 1,
    k_EGraphicsPerfOverlayLevel_Medium = 2,
    k_EGraphicsPerfOverlayLevel_Full = 3,
    k_EGraphicsPerfOverlayLevel_Minimal = 4
}

/** EGPUPerformanceLevel enum. */
export enum EGPUPerformanceLevel {
    k_EGPUPerformanceLevel_Invalid = 0,
    k_EGPUPerformanceLevel_Auto = 1,
    k_EGPUPerformanceLevel_Manual = 2,
    k_EGPUPerformanceLevel_Low = 3,
    k_EGPUPerformanceLevel_High = 4,
    k_EGPUPerformanceLevel_Profiling = 5
}

/** EScalingFilter enum. */
export enum EScalingFilter {
    k_EScalingFilter_Invalid = 0,
    k_EScalingFilter_FSR = 1,
    k_EScalingFilter_Nearest = 2,
    k_EScalingFilter_Integer = 3,
    k_EScalingFilter_Linear = 4,
    k_EScalingFilter_NIS = 5
}

/** ESplitScalingFilter enum. */
export enum ESplitScalingFilter {
    k_ESplitScalingFilter_Invalid = 0,
    k_ESplitScalingFilter_Linear = 1,
    k_ESplitScalingFilter_Nearest = 2,
    k_ESplitScalingFilter_FSR = 3,
    k_ESplitScalingFilter_NIS = 4
}

/** ESplitScalingScaler enum. */
export enum ESplitScalingScaler {
    k_ESplitScalingScaler_Invalid = 0,
    k_ESplitScalingScaler_Auto = 1,
    k_ESplitScalingScaler_Integer = 2,
    k_ESplitScalingScaler_Fit = 3,
    k_ESplitScalingScaler_Fill = 4,
    k_ESplitScalingScaler_Stretch = 5
}

/** EGamescopeBlurMode enum. */
export enum EGamescopeBlurMode {
    k_EGamescopeBlurMode_Disabled = 0,
    k_EGamescopeBlurMode_IfOccluded = 1,
    k_EGamescopeBlurMode_Always = 2
}

/** ESLSHelper enum. */
export enum ESLSHelper {
    k_ESLSHelper_Invalid = 0,
    k_ESLSHelper_Minidump = 1,
    k_ESLSHelper_Kdump = 2,
    k_ESLSHelper_Journal = 3,
    k_ESLSHelper_Gpu = 4,
    k_ESLSHelper_SystemInfo = 5
}

/** EHDRVisualization enum. */
export enum EHDRVisualization {
    k_EHDRVisualization_None = 0,
    k_EHDRVisualization_Heatmap = 1,
    k_EHDRVisualization_Analysis = 2,
    k_EHDRVisualization_HeatmapExtended = 3,
    k_EHDRVisualization_HeatmapClassic = 4
}

/** EHDRToneMapOperator enum. */
export enum EHDRToneMapOperator {
    k_EHDRToneMapOperator_Invalid = 0,
    k_EHDRToneMapOperator_Uncharted = 1,
    k_EHDRToneMapOperator_Reinhard = 2
}

/** ECPUGovernor enum. */
export enum ECPUGovernor {
    k_ECPUGovernor_Invalid = 0,
    k_ECPUGovernor_Perf = 1,
    k_ECPUGovernor_Powersave = 2,
    k_ECPUGovernor_Manual = 3
}

/** EUpdaterType enum. */
export enum EUpdaterType {
    k_EUpdaterType_Invalid = 0,
    k_EUpdaterType_Client = 1,
    k_EUpdaterType_OS = 2,
    k_EUpdaterType_BIOS = 3,
    k_EUpdaterType_Aggregated = 4,
    k_EUpdaterType_Test1 = 5,
    k_EUpdaterType_Test2 = 6,
    k_EUpdaterType_Dummy = 7
}

/** EUpdaterState enum. */
export enum EUpdaterState {
    k_EUpdaterState_Invalid = 0,
    k_EUpdaterState_UpToDate = 2,
    k_EUpdaterState_Checking = 3,
    k_EUpdaterState_Available = 4,
    k_EUpdaterState_Applying = 5,
    k_EUpdaterState_ClientRestartPending = 6,
    k_EUpdaterState_SystemRestartPending = 7
}

/** EStorageBlockContentType enum. */
export enum EStorageBlockContentType {
    k_EStorageBlockContentType_Invalid = 0,
    k_EStorageBlockContentType_Unknown = 1,
    k_EStorageBlockContentType_FileSystem = 2,
    k_EStorageBlockContentType_Crypto = 3,
    k_EStorageBlockContentType_Raid = 4
}

/** EStorageBlockFileSystemType enum. */
export enum EStorageBlockFileSystemType {
    k_EStorageBlockFileSystemType_Invalid = 0,
    k_EStorageBlockFileSystemType_Unknown = 1,
    k_EStorageBlockFileSystemType_VFat = 2,
    k_EStorageBlockFileSystemType_Ext4 = 3
}

/** EStorageDriveMediaType enum. */
export enum EStorageDriveMediaType {
    k_EStorageDriveMediaType_Invalid = 0,
    k_EStorageDriveMediaType_Unknown = 1,
    k_EStorageDriveMediaType_HDD = 2,
    k_EStorageDriveMediaType_SSD = 3,
    k_EStorageDriveMediaType_Removable = 4
}

/** ESystemDisplayCompatibilityMode enum. */
export enum ESystemDisplayCompatibilityMode {
    k_ESystemDisplayCompatibilityMode_Invalid = 0,
    k_ESystemDisplayCompatibilityMode_None = 1,
    k_ESystemDisplayCompatibilityMode_MinimalBandwith = 2
}

/** ESteamDeckCompatibilityCategory enum. */
export enum ESteamDeckCompatibilityCategory {
    k_ESteamDeckCompatibilityCategory_Unknown = 0,
    k_ESteamDeckCompatibilityCategory_Unsupported = 1,
    k_ESteamDeckCompatibilityCategory_Playable = 2,
    k_ESteamDeckCompatibilityCategory_Verified = 3
}

/** ESteamDeckCompatibilityResultDisplayType enum. */
export enum ESteamDeckCompatibilityResultDisplayType {
    k_ESteamDeckCompatibilityResultDisplayType_Invisible = 0,
    k_ESteamDeckCompatibilityResultDisplayType_Informational = 1,
    k_ESteamDeckCompatibilityResultDisplayType_Unsupported = 2,
    k_ESteamDeckCompatibilityResultDisplayType_Playable = 3,
    k_ESteamDeckCompatibilityResultDisplayType_Verified = 4
}

/** EACState enum. */
export enum EACState {
    k_EACState_Unknown = 0,
    k_EACState_Disconnected = 1,
    k_EACState_Connected = 2,
    k_EACState_ConnectedSlow = 3
}

/** EBatteryState enum. */
export enum EBatteryState {
    k_EBatteryState_Unknown = 0,
    k_EBatteryState_Discharging = 1,
    k_EBatteryState_Charging = 2,
    k_EBatteryState_Full = 3
}

/** EOSBranch enum. */
export enum EOSBranch {
    k_EOSBranch_Unknown = 0,
    k_EOSBranch_Release = 1,
    k_EOSBranch_ReleaseCandidate = 2,
    k_EOSBranch_Beta = 3,
    k_EOSBranch_BetaCandidate = 4,
    k_EOSBranch_Main = 5,
    k_EOSBranch_Staging = 6
}

/** ECommunityItemClass enum. */
export enum ECommunityItemClass {
    k_ECommunityItemClass_Invalid = 0,
    k_ECommunityItemClass_Badge = 1,
    k_ECommunityItemClass_GameCard = 2,
    k_ECommunityItemClass_ProfileBackground = 3,
    k_ECommunityItemClass_Emoticon = 4,
    k_ECommunityItemClass_BoosterPack = 5,
    k_ECommunityItemClass_Consumable = 6,
    k_ECommunityItemClass_GameGoo = 7,
    k_ECommunityItemClass_ProfileModifier = 8,
    k_ECommunityItemClass_Scene = 9,
    k_ECommunityItemClass_SalienItem = 10,
    k_ECommunityItemClass_Sticker = 11,
    k_ECommunityItemClass_ChatEffect = 12,
    k_ECommunityItemClass_MiniProfileBackground = 13,
    k_ECommunityItemClass_AvatarFrame = 14,
    k_ECommunityItemClass_AnimatedAvatar = 15,
    k_ECommunityItemClass_SteamDeckKeyboardSkin = 16,
    k_ECommunityItemClass_SteamDeckStartupMovie = 17
}

/** ESteamDeckCompatibilityFeedback enum. */
export enum ESteamDeckCompatibilityFeedback {
    k_ESteamDeckCompatibilityFeedback_Unset = 0,
    k_ESteamDeckCompatibilityFeedback_Agree = 1,
    k_ESteamDeckCompatibilityFeedback_Disagree = 2,
    k_ESteamDeckCompatibilityFeedback_Ignore = 3
}

/** EProvideDeckFeedbackPreference enum. */
export enum EProvideDeckFeedbackPreference {
    k_EProvideDeckFeedbackPreference_Unset = 0,
    k_EProvideDeckFeedbackPreference_Yes = 1,
    k_EProvideDeckFeedbackPreference_No = 2
}

/** ETouchGesture enum. */
export enum ETouchGesture {
    k_ETouchGestureNone = 0,
    k_ETouchGestureTouch = 1,
    k_ETouchGestureTap = 2,
    k_ETouchGestureDoubleTap = 3,
    k_ETouchGestureShortPress = 4,
    k_ETouchGestureLongPress = 5,
    k_ETouchGestureLongTap = 6,
    k_ETouchGestureTwoFingerTap = 7,
    k_ETouchGestureTapCancelled = 8,
    k_ETouchGesturePinchBegin = 9,
    k_ETouchGesturePinchUpdate = 10,
    k_ETouchGesturePinchEnd = 11,
    k_ETouchGestureFlingStart = 12,
    k_ETouchGestureFlingCancelled = 13
}

/** ESessionPersistence enum. */
export enum ESessionPersistence {
    k_ESessionPersistence_Invalid = -1,
    k_ESessionPersistence_Ephemeral = 0,
    k_ESessionPersistence_Persistent = 1
}

/** ENewSteamAnnouncementState enum. */
export enum ENewSteamAnnouncementState {
    k_ENewSteamAnnouncementState_Invalid = 0,
    k_ENewSteamAnnouncementState_AllRead = 1,
    k_ENewSteamAnnouncementState_NewAnnouncement = 2,
    k_ENewSteamAnnouncementState_FeaturedAnnouncement = 3
}

/** ECommentThreadType enum. */
export enum ECommentThreadType {
    k_ECommentThreadTypeInvalid = 0,
    k_ECommentThreadTypeScreenshot_Deprecated = 1,
    k_ECommentThreadTypeWorkshopAccount_Developer = 2,
    k_ECommentThreadTypeWorkshopAccount_Public = 3,
    k_ECommentThreadTypePublishedFile_Developer = 4,
    k_ECommentThreadTypePublishedFile_Public = 5,
    k_ECommentThreadTypeTest = 6,
    k_ECommentThreadTypeForumTopic = 7,
    k_ECommentThreadTypeRecommendation = 8,
    k_ECommentThreadTypeVideo_Deprecated = 9,
    k_ECommentThreadTypeProfile = 10,
    k_ECommentThreadTypeNewsPost = 11,
    k_ECommentThreadTypeClan = 12,
    k_ECommentThreadTypeClanAnnouncement = 13,
    k_ECommentThreadTypeClanEvent = 14,
    k_ECommentThreadTypeUserStatusPublished = 15,
    k_ECommentThreadTypeUserReceivedNewGame = 16,
    k_ECommentThreadTypePublishedFile_Announcement = 17,
    k_ECommentThreadTypeModeratorMessage = 18,
    k_ECommentThreadTypeClanCuratedApp = 19,
    k_ECommentThreadTypeQAndASession = 20,
    k_ECommentThreadTypeMax = 21
}

/** EBroadcastPermission enum. */
export enum EBroadcastPermission {
    k_EBroadcastPermissionDisabled = 0,
    k_EBroadcastPermissionFriendsApprove = 1,
    k_EBroadcastPermissionFriendsAllowed = 2,
    k_EBroadcastPermissionPublic = 3,
    k_EBroadcastPermissionSubscribers = 4
}

/** EBroadcastEncoderSetting enum. */
export enum EBroadcastEncoderSetting {
    k_EBroadcastEncoderBestQuality = 0,
    k_EBroadcastEncoderBestPerformance = 1
}

/** ECloudGamingPlatform enum. */
export enum ECloudGamingPlatform {
    k_ECloudGamingPlatformNone = 0,
    k_ECloudGamingPlatformValve = 1,
    k_ECloudGamingPlatformNVIDIA = 2
}
