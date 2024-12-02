import * as $protobuf from "@ohos/protobufjs";
import Long = require("long");
/** Properties of a CRemoveAuthenticatorViaChallengeContinue_Replacement_Token. */
export interface ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token {

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token sharedSecret */
    sharedSecret?: (Uint8Array|null);

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token serialNumber */
    serialNumber?: (number|Long|null);

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token revocationCode */
    revocationCode?: (string|null);

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token uri */
    uri?: (string|null);

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token serverTime */
    serverTime?: (number|Long|null);

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token accountName */
    accountName?: (string|null);

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token tokenGid */
    tokenGid?: (string|null);

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token identitySecret */
    identitySecret?: (Uint8Array|null);

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token secret_1 */
    secret_1?: (Uint8Array|null);

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token status */
    status?: (number|null);

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token steamguardScheme */
    steamguardScheme?: (number|null);

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token steamid */
    steamid?: (number|Long|null);
}

/** Represents a CRemoveAuthenticatorViaChallengeContinue_Replacement_Token. */
export class CRemoveAuthenticatorViaChallengeContinue_Replacement_Token implements ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token {

    /**
     * Constructs a new CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token);

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token sharedSecret. */
    public sharedSecret: Uint8Array;

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token serialNumber. */
    public serialNumber: (number|Long);

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token revocationCode. */
    public revocationCode: string;

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token uri. */
    public uri: string;

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token serverTime. */
    public serverTime: (number|Long);

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token accountName. */
    public accountName: string;

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token tokenGid. */
    public tokenGid: string;

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token identitySecret. */
    public identitySecret: Uint8Array;

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token secret_1. */
    public secret_1: Uint8Array;

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token status. */
    public status: number;

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token steamguardScheme. */
    public steamguardScheme: number;

    /** CRemoveAuthenticatorViaChallengeContinue_Replacement_Token steamid. */
    public steamid: (number|Long);

    /**
     * Creates a new CRemoveAuthenticatorViaChallengeContinue_Replacement_Token instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CRemoveAuthenticatorViaChallengeContinue_Replacement_Token instance
     */
    public static create(properties?: ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token): CRemoveAuthenticatorViaChallengeContinue_Replacement_Token;

    /**
     * Encodes the specified CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message. Does not implicitly {@link CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.verify|verify} messages.
     * @param message CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message, length delimited. Does not implicitly {@link CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.verify|verify} messages.
     * @param message CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CRemoveAuthenticatorViaChallengeContinue_Replacement_Token;

    /**
     * Decodes a CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CRemoveAuthenticatorViaChallengeContinue_Replacement_Token;

    /**
     * Verifies a CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     */
    public static fromObject(object: { [k: string]: any }): CRemoveAuthenticatorViaChallengeContinue_Replacement_Token;

    /**
     * Creates a plain object from a CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message. Also converts values to other types if specified.
     * @param message CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CRemoveAuthenticatorViaChallengeContinue_Replacement_Token, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CRemoveAuthenticatorViaChallengeContinue_Replacement_Token to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_AddAuthenticator_Request. */
export interface ICTwoFactor_AddAuthenticator_Request {

    /** CTwoFactor_AddAuthenticator_Request steamid */
    steamid?: (number|Long|null);

    /** CTwoFactor_AddAuthenticator_Request authenticatorTime */
    authenticatorTime?: (number|Long|null);

    /** CTwoFactor_AddAuthenticator_Request serialNumber */
    serialNumber?: (number|Long|null);

    /** CTwoFactor_AddAuthenticator_Request authenticatorType */
    authenticatorType?: (number|null);

    /** CTwoFactor_AddAuthenticator_Request deviceIdentifier */
    deviceIdentifier?: (string|null);

    /** CTwoFactor_AddAuthenticator_Request smsPhoneId */
    smsPhoneId?: (string|null);

    /** CTwoFactor_AddAuthenticator_Request httpHeaders */
    httpHeaders?: (string[]|null);

    /** CTwoFactor_AddAuthenticator_Request version */
    version?: (number|null);
}

/** Represents a CTwoFactor_AddAuthenticator_Request. */
export class CTwoFactor_AddAuthenticator_Request implements ICTwoFactor_AddAuthenticator_Request {

    /**
     * Constructs a new CTwoFactor_AddAuthenticator_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_AddAuthenticator_Request);

    /** CTwoFactor_AddAuthenticator_Request steamid. */
    public steamid: (number|Long);

    /** CTwoFactor_AddAuthenticator_Request authenticatorTime. */
    public authenticatorTime: (number|Long);

    /** CTwoFactor_AddAuthenticator_Request serialNumber. */
    public serialNumber: (number|Long);

    /** CTwoFactor_AddAuthenticator_Request authenticatorType. */
    public authenticatorType: number;

    /** CTwoFactor_AddAuthenticator_Request deviceIdentifier. */
    public deviceIdentifier: string;

    /** CTwoFactor_AddAuthenticator_Request smsPhoneId. */
    public smsPhoneId: string;

    /** CTwoFactor_AddAuthenticator_Request httpHeaders. */
    public httpHeaders: string[];

    /** CTwoFactor_AddAuthenticator_Request version. */
    public version: number;

    /**
     * Creates a new CTwoFactor_AddAuthenticator_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_AddAuthenticator_Request instance
     */
    public static create(properties?: ICTwoFactor_AddAuthenticator_Request): CTwoFactor_AddAuthenticator_Request;

    /**
     * Encodes the specified CTwoFactor_AddAuthenticator_Request message. Does not implicitly {@link CTwoFactor_AddAuthenticator_Request.verify|verify} messages.
     * @param message CTwoFactor_AddAuthenticator_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_AddAuthenticator_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_AddAuthenticator_Request message, length delimited. Does not implicitly {@link CTwoFactor_AddAuthenticator_Request.verify|verify} messages.
     * @param message CTwoFactor_AddAuthenticator_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_AddAuthenticator_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_AddAuthenticator_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_AddAuthenticator_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_AddAuthenticator_Request;

    /**
     * Decodes a CTwoFactor_AddAuthenticator_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_AddAuthenticator_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_AddAuthenticator_Request;

    /**
     * Verifies a CTwoFactor_AddAuthenticator_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_AddAuthenticator_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_AddAuthenticator_Request
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_AddAuthenticator_Request;

    /**
     * Creates a plain object from a CTwoFactor_AddAuthenticator_Request message. Also converts values to other types if specified.
     * @param message CTwoFactor_AddAuthenticator_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_AddAuthenticator_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_AddAuthenticator_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_AddAuthenticator_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_AddAuthenticator_Response. */
export interface ICTwoFactor_AddAuthenticator_Response {

    /** CTwoFactor_AddAuthenticator_Response sharedSecret */
    sharedSecret?: (Uint8Array|null);

    /** CTwoFactor_AddAuthenticator_Response serialNumber */
    serialNumber?: (number|Long|null);

    /** CTwoFactor_AddAuthenticator_Response revocationCode */
    revocationCode?: (string|null);

    /** CTwoFactor_AddAuthenticator_Response uri */
    uri?: (string|null);

    /** CTwoFactor_AddAuthenticator_Response serverTime */
    serverTime?: (number|Long|null);

    /** CTwoFactor_AddAuthenticator_Response accountName */
    accountName?: (string|null);

    /** CTwoFactor_AddAuthenticator_Response tokenGid */
    tokenGid?: (string|null);

    /** CTwoFactor_AddAuthenticator_Response identitySecret */
    identitySecret?: (Uint8Array|null);

    /** CTwoFactor_AddAuthenticator_Response secret_1 */
    secret_1?: (Uint8Array|null);

    /** CTwoFactor_AddAuthenticator_Response status */
    status?: (number|null);

    /** CTwoFactor_AddAuthenticator_Response phoneNumberHint */
    phoneNumberHint?: (string|null);

    /** CTwoFactor_AddAuthenticator_Response confirmType */
    confirmType?: (number|null);
}

/** Represents a CTwoFactor_AddAuthenticator_Response. */
export class CTwoFactor_AddAuthenticator_Response implements ICTwoFactor_AddAuthenticator_Response {

    /**
     * Constructs a new CTwoFactor_AddAuthenticator_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_AddAuthenticator_Response);

    /** CTwoFactor_AddAuthenticator_Response sharedSecret. */
    public sharedSecret: Uint8Array;

    /** CTwoFactor_AddAuthenticator_Response serialNumber. */
    public serialNumber: (number|Long);

    /** CTwoFactor_AddAuthenticator_Response revocationCode. */
    public revocationCode: string;

    /** CTwoFactor_AddAuthenticator_Response uri. */
    public uri: string;

    /** CTwoFactor_AddAuthenticator_Response serverTime. */
    public serverTime: (number|Long);

    /** CTwoFactor_AddAuthenticator_Response accountName. */
    public accountName: string;

    /** CTwoFactor_AddAuthenticator_Response tokenGid. */
    public tokenGid: string;

    /** CTwoFactor_AddAuthenticator_Response identitySecret. */
    public identitySecret: Uint8Array;

    /** CTwoFactor_AddAuthenticator_Response secret_1. */
    public secret_1: Uint8Array;

    /** CTwoFactor_AddAuthenticator_Response status. */
    public status: number;

    /** CTwoFactor_AddAuthenticator_Response phoneNumberHint. */
    public phoneNumberHint: string;

    /** CTwoFactor_AddAuthenticator_Response confirmType. */
    public confirmType: number;

    /**
     * Creates a new CTwoFactor_AddAuthenticator_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_AddAuthenticator_Response instance
     */
    public static create(properties?: ICTwoFactor_AddAuthenticator_Response): CTwoFactor_AddAuthenticator_Response;

    /**
     * Encodes the specified CTwoFactor_AddAuthenticator_Response message. Does not implicitly {@link CTwoFactor_AddAuthenticator_Response.verify|verify} messages.
     * @param message CTwoFactor_AddAuthenticator_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_AddAuthenticator_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_AddAuthenticator_Response message, length delimited. Does not implicitly {@link CTwoFactor_AddAuthenticator_Response.verify|verify} messages.
     * @param message CTwoFactor_AddAuthenticator_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_AddAuthenticator_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_AddAuthenticator_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_AddAuthenticator_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_AddAuthenticator_Response;

    /**
     * Decodes a CTwoFactor_AddAuthenticator_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_AddAuthenticator_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_AddAuthenticator_Response;

    /**
     * Verifies a CTwoFactor_AddAuthenticator_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_AddAuthenticator_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_AddAuthenticator_Response
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_AddAuthenticator_Response;

    /**
     * Creates a plain object from a CTwoFactor_AddAuthenticator_Response message. Also converts values to other types if specified.
     * @param message CTwoFactor_AddAuthenticator_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_AddAuthenticator_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_AddAuthenticator_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_AddAuthenticator_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_CreateEmergencyCodes_Response. */
export interface ICTwoFactor_CreateEmergencyCodes_Response {

    /** CTwoFactor_CreateEmergencyCodes_Response codes */
    codes?: (string[]|null);
}

/** Represents a CTwoFactor_CreateEmergencyCodes_Response. */
export class CTwoFactor_CreateEmergencyCodes_Response implements ICTwoFactor_CreateEmergencyCodes_Response {

    /**
     * Constructs a new CTwoFactor_CreateEmergencyCodes_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_CreateEmergencyCodes_Response);

    /** CTwoFactor_CreateEmergencyCodes_Response codes. */
    public codes: string[];

    /**
     * Creates a new CTwoFactor_CreateEmergencyCodes_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_CreateEmergencyCodes_Response instance
     */
    public static create(properties?: ICTwoFactor_CreateEmergencyCodes_Response): CTwoFactor_CreateEmergencyCodes_Response;

    /**
     * Encodes the specified CTwoFactor_CreateEmergencyCodes_Response message. Does not implicitly {@link CTwoFactor_CreateEmergencyCodes_Response.verify|verify} messages.
     * @param message CTwoFactor_CreateEmergencyCodes_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_CreateEmergencyCodes_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_CreateEmergencyCodes_Response message, length delimited. Does not implicitly {@link CTwoFactor_CreateEmergencyCodes_Response.verify|verify} messages.
     * @param message CTwoFactor_CreateEmergencyCodes_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_CreateEmergencyCodes_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_CreateEmergencyCodes_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_CreateEmergencyCodes_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_CreateEmergencyCodes_Response;

    /**
     * Decodes a CTwoFactor_CreateEmergencyCodes_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_CreateEmergencyCodes_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_CreateEmergencyCodes_Response;

    /**
     * Verifies a CTwoFactor_CreateEmergencyCodes_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_CreateEmergencyCodes_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_CreateEmergencyCodes_Response
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_CreateEmergencyCodes_Response;

    /**
     * Creates a plain object from a CTwoFactor_CreateEmergencyCodes_Response message. Also converts values to other types if specified.
     * @param message CTwoFactor_CreateEmergencyCodes_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_CreateEmergencyCodes_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_CreateEmergencyCodes_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_CreateEmergencyCodes_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_DestroyEmergencyCodes_Response. */
export interface ICTwoFactor_DestroyEmergencyCodes_Response {
}

/** Represents a CTwoFactor_DestroyEmergencyCodes_Response. */
export class CTwoFactor_DestroyEmergencyCodes_Response implements ICTwoFactor_DestroyEmergencyCodes_Response {

    /**
     * Constructs a new CTwoFactor_DestroyEmergencyCodes_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_DestroyEmergencyCodes_Response);

    /**
     * Creates a new CTwoFactor_DestroyEmergencyCodes_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_DestroyEmergencyCodes_Response instance
     */
    public static create(properties?: ICTwoFactor_DestroyEmergencyCodes_Response): CTwoFactor_DestroyEmergencyCodes_Response;

    /**
     * Encodes the specified CTwoFactor_DestroyEmergencyCodes_Response message. Does not implicitly {@link CTwoFactor_DestroyEmergencyCodes_Response.verify|verify} messages.
     * @param message CTwoFactor_DestroyEmergencyCodes_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_DestroyEmergencyCodes_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_DestroyEmergencyCodes_Response message, length delimited. Does not implicitly {@link CTwoFactor_DestroyEmergencyCodes_Response.verify|verify} messages.
     * @param message CTwoFactor_DestroyEmergencyCodes_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_DestroyEmergencyCodes_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_DestroyEmergencyCodes_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_DestroyEmergencyCodes_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_DestroyEmergencyCodes_Response;

    /**
     * Decodes a CTwoFactor_DestroyEmergencyCodes_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_DestroyEmergencyCodes_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_DestroyEmergencyCodes_Response;

    /**
     * Verifies a CTwoFactor_DestroyEmergencyCodes_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_DestroyEmergencyCodes_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_DestroyEmergencyCodes_Response
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_DestroyEmergencyCodes_Response;

    /**
     * Creates a plain object from a CTwoFactor_DestroyEmergencyCodes_Response message. Also converts values to other types if specified.
     * @param message CTwoFactor_DestroyEmergencyCodes_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_DestroyEmergencyCodes_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_DestroyEmergencyCodes_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_DestroyEmergencyCodes_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_FinalizeAddAuthenticator_Request. */
export interface ICTwoFactor_FinalizeAddAuthenticator_Request {

    /** CTwoFactor_FinalizeAddAuthenticator_Request steamid */
    steamid?: (number|Long|null);

    /** CTwoFactor_FinalizeAddAuthenticator_Request authenticatorCode */
    authenticatorCode?: (string|null);

    /** CTwoFactor_FinalizeAddAuthenticator_Request authenticatorTime */
    authenticatorTime?: (number|Long|null);

    /** CTwoFactor_FinalizeAddAuthenticator_Request activationCode */
    activationCode?: (string|null);

    /** CTwoFactor_FinalizeAddAuthenticator_Request httpHeaders */
    httpHeaders?: (string[]|null);

    /** CTwoFactor_FinalizeAddAuthenticator_Request validateSmsCode */
    validateSmsCode?: (boolean|null);
}

/** Represents a CTwoFactor_FinalizeAddAuthenticator_Request. */
export class CTwoFactor_FinalizeAddAuthenticator_Request implements ICTwoFactor_FinalizeAddAuthenticator_Request {

    /**
     * Constructs a new CTwoFactor_FinalizeAddAuthenticator_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_FinalizeAddAuthenticator_Request);

    /** CTwoFactor_FinalizeAddAuthenticator_Request steamid. */
    public steamid: (number|Long);

    /** CTwoFactor_FinalizeAddAuthenticator_Request authenticatorCode. */
    public authenticatorCode: string;

    /** CTwoFactor_FinalizeAddAuthenticator_Request authenticatorTime. */
    public authenticatorTime: (number|Long);

    /** CTwoFactor_FinalizeAddAuthenticator_Request activationCode. */
    public activationCode: string;

    /** CTwoFactor_FinalizeAddAuthenticator_Request httpHeaders. */
    public httpHeaders: string[];

    /** CTwoFactor_FinalizeAddAuthenticator_Request validateSmsCode. */
    public validateSmsCode: boolean;

    /**
     * Creates a new CTwoFactor_FinalizeAddAuthenticator_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_FinalizeAddAuthenticator_Request instance
     */
    public static create(properties?: ICTwoFactor_FinalizeAddAuthenticator_Request): CTwoFactor_FinalizeAddAuthenticator_Request;

    /**
     * Encodes the specified CTwoFactor_FinalizeAddAuthenticator_Request message. Does not implicitly {@link CTwoFactor_FinalizeAddAuthenticator_Request.verify|verify} messages.
     * @param message CTwoFactor_FinalizeAddAuthenticator_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_FinalizeAddAuthenticator_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_FinalizeAddAuthenticator_Request message, length delimited. Does not implicitly {@link CTwoFactor_FinalizeAddAuthenticator_Request.verify|verify} messages.
     * @param message CTwoFactor_FinalizeAddAuthenticator_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_FinalizeAddAuthenticator_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_FinalizeAddAuthenticator_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_FinalizeAddAuthenticator_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_FinalizeAddAuthenticator_Request;

    /**
     * Decodes a CTwoFactor_FinalizeAddAuthenticator_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_FinalizeAddAuthenticator_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_FinalizeAddAuthenticator_Request;

    /**
     * Verifies a CTwoFactor_FinalizeAddAuthenticator_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_FinalizeAddAuthenticator_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_FinalizeAddAuthenticator_Request
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_FinalizeAddAuthenticator_Request;

    /**
     * Creates a plain object from a CTwoFactor_FinalizeAddAuthenticator_Request message. Also converts values to other types if specified.
     * @param message CTwoFactor_FinalizeAddAuthenticator_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_FinalizeAddAuthenticator_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_FinalizeAddAuthenticator_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_FinalizeAddAuthenticator_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_FinalizeAddAuthenticator_Response. */
export interface ICTwoFactor_FinalizeAddAuthenticator_Response {

    /** CTwoFactor_FinalizeAddAuthenticator_Response success */
    success?: (boolean|null);

    /** CTwoFactor_FinalizeAddAuthenticator_Response wantMore */
    wantMore?: (boolean|null);

    /** CTwoFactor_FinalizeAddAuthenticator_Response serverTime */
    serverTime?: (number|Long|null);

    /** CTwoFactor_FinalizeAddAuthenticator_Response status */
    status?: (number|null);
}

/** Represents a CTwoFactor_FinalizeAddAuthenticator_Response. */
export class CTwoFactor_FinalizeAddAuthenticator_Response implements ICTwoFactor_FinalizeAddAuthenticator_Response {

    /**
     * Constructs a new CTwoFactor_FinalizeAddAuthenticator_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_FinalizeAddAuthenticator_Response);

    /** CTwoFactor_FinalizeAddAuthenticator_Response success. */
    public success: boolean;

    /** CTwoFactor_FinalizeAddAuthenticator_Response wantMore. */
    public wantMore: boolean;

    /** CTwoFactor_FinalizeAddAuthenticator_Response serverTime. */
    public serverTime: (number|Long);

    /** CTwoFactor_FinalizeAddAuthenticator_Response status. */
    public status: number;

    /**
     * Creates a new CTwoFactor_FinalizeAddAuthenticator_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_FinalizeAddAuthenticator_Response instance
     */
    public static create(properties?: ICTwoFactor_FinalizeAddAuthenticator_Response): CTwoFactor_FinalizeAddAuthenticator_Response;

    /**
     * Encodes the specified CTwoFactor_FinalizeAddAuthenticator_Response message. Does not implicitly {@link CTwoFactor_FinalizeAddAuthenticator_Response.verify|verify} messages.
     * @param message CTwoFactor_FinalizeAddAuthenticator_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_FinalizeAddAuthenticator_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_FinalizeAddAuthenticator_Response message, length delimited. Does not implicitly {@link CTwoFactor_FinalizeAddAuthenticator_Response.verify|verify} messages.
     * @param message CTwoFactor_FinalizeAddAuthenticator_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_FinalizeAddAuthenticator_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_FinalizeAddAuthenticator_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_FinalizeAddAuthenticator_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_FinalizeAddAuthenticator_Response;

    /**
     * Decodes a CTwoFactor_FinalizeAddAuthenticator_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_FinalizeAddAuthenticator_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_FinalizeAddAuthenticator_Response;

    /**
     * Verifies a CTwoFactor_FinalizeAddAuthenticator_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_FinalizeAddAuthenticator_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_FinalizeAddAuthenticator_Response
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_FinalizeAddAuthenticator_Response;

    /**
     * Creates a plain object from a CTwoFactor_FinalizeAddAuthenticator_Response message. Also converts values to other types if specified.
     * @param message CTwoFactor_FinalizeAddAuthenticator_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_FinalizeAddAuthenticator_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_FinalizeAddAuthenticator_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_FinalizeAddAuthenticator_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_RemoveAuthenticator_Request. */
export interface ICTwoFactor_RemoveAuthenticator_Request {

    /** CTwoFactor_RemoveAuthenticator_Request revocationCode */
    revocationCode?: (string|null);

    /** CTwoFactor_RemoveAuthenticator_Request revocationReason */
    revocationReason?: (number|null);

    /** CTwoFactor_RemoveAuthenticator_Request steamguardScheme */
    steamguardScheme?: (number|null);

    /** CTwoFactor_RemoveAuthenticator_Request removeAllSteamguardCookies */
    removeAllSteamguardCookies?: (boolean|null);
}

/** Represents a CTwoFactor_RemoveAuthenticator_Request. */
export class CTwoFactor_RemoveAuthenticator_Request implements ICTwoFactor_RemoveAuthenticator_Request {

    /**
     * Constructs a new CTwoFactor_RemoveAuthenticator_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_RemoveAuthenticator_Request);

    /** CTwoFactor_RemoveAuthenticator_Request revocationCode. */
    public revocationCode: string;

    /** CTwoFactor_RemoveAuthenticator_Request revocationReason. */
    public revocationReason: number;

    /** CTwoFactor_RemoveAuthenticator_Request steamguardScheme. */
    public steamguardScheme: number;

    /** CTwoFactor_RemoveAuthenticator_Request removeAllSteamguardCookies. */
    public removeAllSteamguardCookies: boolean;

    /**
     * Creates a new CTwoFactor_RemoveAuthenticator_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_RemoveAuthenticator_Request instance
     */
    public static create(properties?: ICTwoFactor_RemoveAuthenticator_Request): CTwoFactor_RemoveAuthenticator_Request;

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticator_Request message. Does not implicitly {@link CTwoFactor_RemoveAuthenticator_Request.verify|verify} messages.
     * @param message CTwoFactor_RemoveAuthenticator_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_RemoveAuthenticator_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticator_Request message, length delimited. Does not implicitly {@link CTwoFactor_RemoveAuthenticator_Request.verify|verify} messages.
     * @param message CTwoFactor_RemoveAuthenticator_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_RemoveAuthenticator_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_RemoveAuthenticator_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_RemoveAuthenticator_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_RemoveAuthenticator_Request;

    /**
     * Decodes a CTwoFactor_RemoveAuthenticator_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_RemoveAuthenticator_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_RemoveAuthenticator_Request;

    /**
     * Verifies a CTwoFactor_RemoveAuthenticator_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_RemoveAuthenticator_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_RemoveAuthenticator_Request
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_RemoveAuthenticator_Request;

    /**
     * Creates a plain object from a CTwoFactor_RemoveAuthenticator_Request message. Also converts values to other types if specified.
     * @param message CTwoFactor_RemoveAuthenticator_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_RemoveAuthenticator_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_RemoveAuthenticator_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_RemoveAuthenticator_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_RemoveAuthenticator_Response. */
export interface ICTwoFactor_RemoveAuthenticator_Response {

    /** CTwoFactor_RemoveAuthenticator_Response success */
    success?: (boolean|null);

    /** CTwoFactor_RemoveAuthenticator_Response serverTime */
    serverTime?: (number|Long|null);

    /** CTwoFactor_RemoveAuthenticator_Response revocationAttemptsRemaining */
    revocationAttemptsRemaining?: (number|null);
}

/** Represents a CTwoFactor_RemoveAuthenticator_Response. */
export class CTwoFactor_RemoveAuthenticator_Response implements ICTwoFactor_RemoveAuthenticator_Response {

    /**
     * Constructs a new CTwoFactor_RemoveAuthenticator_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_RemoveAuthenticator_Response);

    /** CTwoFactor_RemoveAuthenticator_Response success. */
    public success: boolean;

    /** CTwoFactor_RemoveAuthenticator_Response serverTime. */
    public serverTime: (number|Long);

    /** CTwoFactor_RemoveAuthenticator_Response revocationAttemptsRemaining. */
    public revocationAttemptsRemaining: number;

    /**
     * Creates a new CTwoFactor_RemoveAuthenticator_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_RemoveAuthenticator_Response instance
     */
    public static create(properties?: ICTwoFactor_RemoveAuthenticator_Response): CTwoFactor_RemoveAuthenticator_Response;

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticator_Response message. Does not implicitly {@link CTwoFactor_RemoveAuthenticator_Response.verify|verify} messages.
     * @param message CTwoFactor_RemoveAuthenticator_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_RemoveAuthenticator_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticator_Response message, length delimited. Does not implicitly {@link CTwoFactor_RemoveAuthenticator_Response.verify|verify} messages.
     * @param message CTwoFactor_RemoveAuthenticator_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_RemoveAuthenticator_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_RemoveAuthenticator_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_RemoveAuthenticator_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_RemoveAuthenticator_Response;

    /**
     * Decodes a CTwoFactor_RemoveAuthenticator_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_RemoveAuthenticator_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_RemoveAuthenticator_Response;

    /**
     * Verifies a CTwoFactor_RemoveAuthenticator_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_RemoveAuthenticator_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_RemoveAuthenticator_Response
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_RemoveAuthenticator_Response;

    /**
     * Creates a plain object from a CTwoFactor_RemoveAuthenticator_Response message. Also converts values to other types if specified.
     * @param message CTwoFactor_RemoveAuthenticator_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_RemoveAuthenticator_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_RemoveAuthenticator_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_RemoveAuthenticator_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request. */
export interface ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request {

    /** CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request smsCode */
    smsCode?: (string|null);

    /** CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request generateNewToken */
    generateNewToken?: (boolean|null);

    /** CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request version */
    version?: (number|null);
}

/** Represents a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request. */
export class CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request implements ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request {

    /**
     * Constructs a new CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request);

    /** CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request smsCode. */
    public smsCode: string;

    /** CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request generateNewToken. */
    public generateNewToken: boolean;

    /** CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request version. */
    public version: number;

    /**
     * Creates a new CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request instance
     */
    public static create(properties?: ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request): CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request;

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message. Does not implicitly {@link CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.verify|verify} messages.
     * @param message CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message, length delimited. Does not implicitly {@link CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.verify|verify} messages.
     * @param message CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request;

    /**
     * Decodes a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request;

    /**
     * Verifies a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request;

    /**
     * Creates a plain object from a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message. Also converts values to other types if specified.
     * @param message CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response. */
export interface ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response {

    /** CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response success */
    success?: (boolean|null);

    /** CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response replacementToken */
    replacementToken?: (ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token|null);
}

/** Represents a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response. */
export class CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response implements ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response {

    /**
     * Constructs a new CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response);

    /** CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response success. */
    public success: boolean;

    /** CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response replacementToken. */
    public replacementToken?: (ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token|null);

    /**
     * Creates a new CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response instance
     */
    public static create(properties?: ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response): CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response;

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message. Does not implicitly {@link CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.verify|verify} messages.
     * @param message CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message, length delimited. Does not implicitly {@link CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.verify|verify} messages.
     * @param message CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response;

    /**
     * Decodes a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response;

    /**
     * Verifies a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response;

    /**
     * Creates a plain object from a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message. Also converts values to other types if specified.
     * @param message CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request. */
export interface ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request {
}

/** Represents a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request. */
export class CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request implements ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request {

    /**
     * Constructs a new CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request);

    /**
     * Creates a new CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request instance
     */
    public static create(properties?: ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request): CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request;

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message. Does not implicitly {@link CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.verify|verify} messages.
     * @param message CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message, length delimited. Does not implicitly {@link CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.verify|verify} messages.
     * @param message CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request;

    /**
     * Decodes a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request;

    /**
     * Verifies a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request;

    /**
     * Creates a plain object from a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message. Also converts values to other types if specified.
     * @param message CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response. */
export interface ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Response {

    /** CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response success */
    success?: (boolean|null);
}

/** Represents a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response. */
export class CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response implements ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Response {

    /**
     * Constructs a new CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Response);

    /** CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response success. */
    public success: boolean;

    /**
     * Creates a new CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response instance
     */
    public static create(properties?: ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Response): CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response;

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message. Does not implicitly {@link CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.verify|verify} messages.
     * @param message CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message, length delimited. Does not implicitly {@link CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.verify|verify} messages.
     * @param message CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response;

    /**
     * Decodes a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response;

    /**
     * Verifies a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response;

    /**
     * Creates a plain object from a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message. Also converts values to other types if specified.
     * @param message CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_SendEmail_Request. */
export interface ICTwoFactor_SendEmail_Request {

    /** CTwoFactor_SendEmail_Request steamid */
    steamid?: (number|Long|null);

    /** CTwoFactor_SendEmail_Request emailType */
    emailType?: (number|null);

    /** CTwoFactor_SendEmail_Request includeActivationCode */
    includeActivationCode?: (boolean|null);
}

/** Represents a CTwoFactor_SendEmail_Request. */
export class CTwoFactor_SendEmail_Request implements ICTwoFactor_SendEmail_Request {

    /**
     * Constructs a new CTwoFactor_SendEmail_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_SendEmail_Request);

    /** CTwoFactor_SendEmail_Request steamid. */
    public steamid: (number|Long);

    /** CTwoFactor_SendEmail_Request emailType. */
    public emailType: number;

    /** CTwoFactor_SendEmail_Request includeActivationCode. */
    public includeActivationCode: boolean;

    /**
     * Creates a new CTwoFactor_SendEmail_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_SendEmail_Request instance
     */
    public static create(properties?: ICTwoFactor_SendEmail_Request): CTwoFactor_SendEmail_Request;

    /**
     * Encodes the specified CTwoFactor_SendEmail_Request message. Does not implicitly {@link CTwoFactor_SendEmail_Request.verify|verify} messages.
     * @param message CTwoFactor_SendEmail_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_SendEmail_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_SendEmail_Request message, length delimited. Does not implicitly {@link CTwoFactor_SendEmail_Request.verify|verify} messages.
     * @param message CTwoFactor_SendEmail_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_SendEmail_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_SendEmail_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_SendEmail_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_SendEmail_Request;

    /**
     * Decodes a CTwoFactor_SendEmail_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_SendEmail_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_SendEmail_Request;

    /**
     * Verifies a CTwoFactor_SendEmail_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_SendEmail_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_SendEmail_Request
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_SendEmail_Request;

    /**
     * Creates a plain object from a CTwoFactor_SendEmail_Request message. Also converts values to other types if specified.
     * @param message CTwoFactor_SendEmail_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_SendEmail_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_SendEmail_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_SendEmail_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_SendEmail_Response. */
export interface ICTwoFactor_SendEmail_Response {
}

/** Represents a CTwoFactor_SendEmail_Response. */
export class CTwoFactor_SendEmail_Response implements ICTwoFactor_SendEmail_Response {

    /**
     * Constructs a new CTwoFactor_SendEmail_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_SendEmail_Response);

    /**
     * Creates a new CTwoFactor_SendEmail_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_SendEmail_Response instance
     */
    public static create(properties?: ICTwoFactor_SendEmail_Response): CTwoFactor_SendEmail_Response;

    /**
     * Encodes the specified CTwoFactor_SendEmail_Response message. Does not implicitly {@link CTwoFactor_SendEmail_Response.verify|verify} messages.
     * @param message CTwoFactor_SendEmail_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_SendEmail_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_SendEmail_Response message, length delimited. Does not implicitly {@link CTwoFactor_SendEmail_Response.verify|verify} messages.
     * @param message CTwoFactor_SendEmail_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_SendEmail_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_SendEmail_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_SendEmail_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_SendEmail_Response;

    /**
     * Decodes a CTwoFactor_SendEmail_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_SendEmail_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_SendEmail_Response;

    /**
     * Verifies a CTwoFactor_SendEmail_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_SendEmail_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_SendEmail_Response
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_SendEmail_Response;

    /**
     * Creates a plain object from a CTwoFactor_SendEmail_Response message. Also converts values to other types if specified.
     * @param message CTwoFactor_SendEmail_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_SendEmail_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_SendEmail_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_SendEmail_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_Status_Request. */
export interface ICTwoFactor_Status_Request {

    /** CTwoFactor_Status_Request steamid */
    steamid?: (number|Long|null);
}

/** Represents a CTwoFactor_Status_Request. */
export class CTwoFactor_Status_Request implements ICTwoFactor_Status_Request {

    /**
     * Constructs a new CTwoFactor_Status_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_Status_Request);

    /** CTwoFactor_Status_Request steamid. */
    public steamid: (number|Long);

    /**
     * Creates a new CTwoFactor_Status_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_Status_Request instance
     */
    public static create(properties?: ICTwoFactor_Status_Request): CTwoFactor_Status_Request;

    /**
     * Encodes the specified CTwoFactor_Status_Request message. Does not implicitly {@link CTwoFactor_Status_Request.verify|verify} messages.
     * @param message CTwoFactor_Status_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_Status_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_Status_Request message, length delimited. Does not implicitly {@link CTwoFactor_Status_Request.verify|verify} messages.
     * @param message CTwoFactor_Status_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_Status_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_Status_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_Status_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_Status_Request;

    /**
     * Decodes a CTwoFactor_Status_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_Status_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_Status_Request;

    /**
     * Verifies a CTwoFactor_Status_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_Status_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_Status_Request
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_Status_Request;

    /**
     * Creates a plain object from a CTwoFactor_Status_Request message. Also converts values to other types if specified.
     * @param message CTwoFactor_Status_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_Status_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_Status_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_Status_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_Status_Response. */
export interface ICTwoFactor_Status_Response {

    /** CTwoFactor_Status_Response state */
    state?: (number|null);

    /** CTwoFactor_Status_Response inactivationReason */
    inactivationReason?: (number|null);

    /** CTwoFactor_Status_Response authenticatorType */
    authenticatorType?: (number|null);

    /** CTwoFactor_Status_Response authenticatorAllowed */
    authenticatorAllowed?: (boolean|null);

    /** CTwoFactor_Status_Response steamguardScheme */
    steamguardScheme?: (number|null);

    /** CTwoFactor_Status_Response tokenGid */
    tokenGid?: (string|null);

    /** CTwoFactor_Status_Response emailValidated */
    emailValidated?: (boolean|null);

    /** CTwoFactor_Status_Response deviceIdentifier */
    deviceIdentifier?: (string|null);

    /** CTwoFactor_Status_Response timeCreated */
    timeCreated?: (number|null);

    /** CTwoFactor_Status_Response revocationAttemptsRemaining */
    revocationAttemptsRemaining?: (number|null);

    /** CTwoFactor_Status_Response classifiedAgent */
    classifiedAgent?: (string|null);

    /** CTwoFactor_Status_Response allowExternalAuthenticator */
    allowExternalAuthenticator?: (boolean|null);

    /** CTwoFactor_Status_Response timeTransferred */
    timeTransferred?: (number|null);

    /** CTwoFactor_Status_Response version */
    version?: (number|null);
}

/** Represents a CTwoFactor_Status_Response. */
export class CTwoFactor_Status_Response implements ICTwoFactor_Status_Response {

    /**
     * Constructs a new CTwoFactor_Status_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_Status_Response);

    /** CTwoFactor_Status_Response state. */
    public state: number;

    /** CTwoFactor_Status_Response inactivationReason. */
    public inactivationReason: number;

    /** CTwoFactor_Status_Response authenticatorType. */
    public authenticatorType: number;

    /** CTwoFactor_Status_Response authenticatorAllowed. */
    public authenticatorAllowed: boolean;

    /** CTwoFactor_Status_Response steamguardScheme. */
    public steamguardScheme: number;

    /** CTwoFactor_Status_Response tokenGid. */
    public tokenGid: string;

    /** CTwoFactor_Status_Response emailValidated. */
    public emailValidated: boolean;

    /** CTwoFactor_Status_Response deviceIdentifier. */
    public deviceIdentifier: string;

    /** CTwoFactor_Status_Response timeCreated. */
    public timeCreated: number;

    /** CTwoFactor_Status_Response revocationAttemptsRemaining. */
    public revocationAttemptsRemaining: number;

    /** CTwoFactor_Status_Response classifiedAgent. */
    public classifiedAgent: string;

    /** CTwoFactor_Status_Response allowExternalAuthenticator. */
    public allowExternalAuthenticator: boolean;

    /** CTwoFactor_Status_Response timeTransferred. */
    public timeTransferred: number;

    /** CTwoFactor_Status_Response version. */
    public version: number;

    /**
     * Creates a new CTwoFactor_Status_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_Status_Response instance
     */
    public static create(properties?: ICTwoFactor_Status_Response): CTwoFactor_Status_Response;

    /**
     * Encodes the specified CTwoFactor_Status_Response message. Does not implicitly {@link CTwoFactor_Status_Response.verify|verify} messages.
     * @param message CTwoFactor_Status_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_Status_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_Status_Response message, length delimited. Does not implicitly {@link CTwoFactor_Status_Response.verify|verify} messages.
     * @param message CTwoFactor_Status_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_Status_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_Status_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_Status_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_Status_Response;

    /**
     * Decodes a CTwoFactor_Status_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_Status_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_Status_Response;

    /**
     * Verifies a CTwoFactor_Status_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_Status_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_Status_Response
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_Status_Response;

    /**
     * Creates a plain object from a CTwoFactor_Status_Response message. Also converts values to other types if specified.
     * @param message CTwoFactor_Status_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_Status_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_Status_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_Status_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_Time_Request. */
export interface ICTwoFactor_Time_Request {

    /** CTwoFactor_Time_Request senderTime */
    senderTime?: (number|Long|null);
}

/** Represents a CTwoFactor_Time_Request. */
export class CTwoFactor_Time_Request implements ICTwoFactor_Time_Request {

    /**
     * Constructs a new CTwoFactor_Time_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_Time_Request);

    /** CTwoFactor_Time_Request senderTime. */
    public senderTime: (number|Long);

    /**
     * Creates a new CTwoFactor_Time_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_Time_Request instance
     */
    public static create(properties?: ICTwoFactor_Time_Request): CTwoFactor_Time_Request;

    /**
     * Encodes the specified CTwoFactor_Time_Request message. Does not implicitly {@link CTwoFactor_Time_Request.verify|verify} messages.
     * @param message CTwoFactor_Time_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_Time_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_Time_Request message, length delimited. Does not implicitly {@link CTwoFactor_Time_Request.verify|verify} messages.
     * @param message CTwoFactor_Time_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_Time_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_Time_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_Time_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_Time_Request;

    /**
     * Decodes a CTwoFactor_Time_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_Time_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_Time_Request;

    /**
     * Verifies a CTwoFactor_Time_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_Time_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_Time_Request
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_Time_Request;

    /**
     * Creates a plain object from a CTwoFactor_Time_Request message. Also converts values to other types if specified.
     * @param message CTwoFactor_Time_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_Time_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_Time_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_Time_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_Time_Response. */
export interface ICTwoFactor_Time_Response {

    /** CTwoFactor_Time_Response serverTime */
    serverTime?: (number|Long|null);

    /** CTwoFactor_Time_Response skewToleranceSeconds */
    skewToleranceSeconds?: (number|Long|null);

    /** CTwoFactor_Time_Response largeTimeJink */
    largeTimeJink?: (number|Long|null);

    /** CTwoFactor_Time_Response probeFrequencySeconds */
    probeFrequencySeconds?: (number|null);

    /** CTwoFactor_Time_Response adjustedTimeProbeFrequencySeconds */
    adjustedTimeProbeFrequencySeconds?: (number|null);

    /** CTwoFactor_Time_Response hintProbeFrequencySeconds */
    hintProbeFrequencySeconds?: (number|null);

    /** CTwoFactor_Time_Response syncTimeout */
    syncTimeout?: (number|null);

    /** CTwoFactor_Time_Response tryAgainSeconds */
    tryAgainSeconds?: (number|null);

    /** CTwoFactor_Time_Response maxAttempts */
    maxAttempts?: (number|null);
}

/** Represents a CTwoFactor_Time_Response. */
export class CTwoFactor_Time_Response implements ICTwoFactor_Time_Response {

    /**
     * Constructs a new CTwoFactor_Time_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_Time_Response);

    /** CTwoFactor_Time_Response serverTime. */
    public serverTime: (number|Long);

    /** CTwoFactor_Time_Response skewToleranceSeconds. */
    public skewToleranceSeconds: (number|Long);

    /** CTwoFactor_Time_Response largeTimeJink. */
    public largeTimeJink: (number|Long);

    /** CTwoFactor_Time_Response probeFrequencySeconds. */
    public probeFrequencySeconds: number;

    /** CTwoFactor_Time_Response adjustedTimeProbeFrequencySeconds. */
    public adjustedTimeProbeFrequencySeconds: number;

    /** CTwoFactor_Time_Response hintProbeFrequencySeconds. */
    public hintProbeFrequencySeconds: number;

    /** CTwoFactor_Time_Response syncTimeout. */
    public syncTimeout: number;

    /** CTwoFactor_Time_Response tryAgainSeconds. */
    public tryAgainSeconds: number;

    /** CTwoFactor_Time_Response maxAttempts. */
    public maxAttempts: number;

    /**
     * Creates a new CTwoFactor_Time_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_Time_Response instance
     */
    public static create(properties?: ICTwoFactor_Time_Response): CTwoFactor_Time_Response;

    /**
     * Encodes the specified CTwoFactor_Time_Response message. Does not implicitly {@link CTwoFactor_Time_Response.verify|verify} messages.
     * @param message CTwoFactor_Time_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_Time_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_Time_Response message, length delimited. Does not implicitly {@link CTwoFactor_Time_Response.verify|verify} messages.
     * @param message CTwoFactor_Time_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_Time_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_Time_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_Time_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_Time_Response;

    /**
     * Decodes a CTwoFactor_Time_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_Time_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_Time_Response;

    /**
     * Verifies a CTwoFactor_Time_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_Time_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_Time_Response
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_Time_Response;

    /**
     * Creates a plain object from a CTwoFactor_Time_Response message. Also converts values to other types if specified.
     * @param message CTwoFactor_Time_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_Time_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_Time_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_Time_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_UpdateTokenVersion_Request. */
export interface ICTwoFactor_UpdateTokenVersion_Request {

    /** CTwoFactor_UpdateTokenVersion_Request steamid */
    steamid?: (number|Long|null);

    /** CTwoFactor_UpdateTokenVersion_Request version */
    version?: (number|null);

    /** CTwoFactor_UpdateTokenVersion_Request signature */
    signature?: (Uint8Array|null);
}

/** Represents a CTwoFactor_UpdateTokenVersion_Request. */
export class CTwoFactor_UpdateTokenVersion_Request implements ICTwoFactor_UpdateTokenVersion_Request {

    /**
     * Constructs a new CTwoFactor_UpdateTokenVersion_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_UpdateTokenVersion_Request);

    /** CTwoFactor_UpdateTokenVersion_Request steamid. */
    public steamid: (number|Long);

    /** CTwoFactor_UpdateTokenVersion_Request version. */
    public version: number;

    /** CTwoFactor_UpdateTokenVersion_Request signature. */
    public signature: Uint8Array;

    /**
     * Creates a new CTwoFactor_UpdateTokenVersion_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_UpdateTokenVersion_Request instance
     */
    public static create(properties?: ICTwoFactor_UpdateTokenVersion_Request): CTwoFactor_UpdateTokenVersion_Request;

    /**
     * Encodes the specified CTwoFactor_UpdateTokenVersion_Request message. Does not implicitly {@link CTwoFactor_UpdateTokenVersion_Request.verify|verify} messages.
     * @param message CTwoFactor_UpdateTokenVersion_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_UpdateTokenVersion_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_UpdateTokenVersion_Request message, length delimited. Does not implicitly {@link CTwoFactor_UpdateTokenVersion_Request.verify|verify} messages.
     * @param message CTwoFactor_UpdateTokenVersion_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_UpdateTokenVersion_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_UpdateTokenVersion_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_UpdateTokenVersion_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_UpdateTokenVersion_Request;

    /**
     * Decodes a CTwoFactor_UpdateTokenVersion_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_UpdateTokenVersion_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_UpdateTokenVersion_Request;

    /**
     * Verifies a CTwoFactor_UpdateTokenVersion_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_UpdateTokenVersion_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_UpdateTokenVersion_Request
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_UpdateTokenVersion_Request;

    /**
     * Creates a plain object from a CTwoFactor_UpdateTokenVersion_Request message. Also converts values to other types if specified.
     * @param message CTwoFactor_UpdateTokenVersion_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_UpdateTokenVersion_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_UpdateTokenVersion_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_UpdateTokenVersion_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_UpdateTokenVersion_Response. */
export interface ICTwoFactor_UpdateTokenVersion_Response {
}

/** Represents a CTwoFactor_UpdateTokenVersion_Response. */
export class CTwoFactor_UpdateTokenVersion_Response implements ICTwoFactor_UpdateTokenVersion_Response {

    /**
     * Constructs a new CTwoFactor_UpdateTokenVersion_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_UpdateTokenVersion_Response);

    /**
     * Creates a new CTwoFactor_UpdateTokenVersion_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_UpdateTokenVersion_Response instance
     */
    public static create(properties?: ICTwoFactor_UpdateTokenVersion_Response): CTwoFactor_UpdateTokenVersion_Response;

    /**
     * Encodes the specified CTwoFactor_UpdateTokenVersion_Response message. Does not implicitly {@link CTwoFactor_UpdateTokenVersion_Response.verify|verify} messages.
     * @param message CTwoFactor_UpdateTokenVersion_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_UpdateTokenVersion_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_UpdateTokenVersion_Response message, length delimited. Does not implicitly {@link CTwoFactor_UpdateTokenVersion_Response.verify|verify} messages.
     * @param message CTwoFactor_UpdateTokenVersion_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_UpdateTokenVersion_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_UpdateTokenVersion_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_UpdateTokenVersion_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_UpdateTokenVersion_Response;

    /**
     * Decodes a CTwoFactor_UpdateTokenVersion_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_UpdateTokenVersion_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_UpdateTokenVersion_Response;

    /**
     * Verifies a CTwoFactor_UpdateTokenVersion_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_UpdateTokenVersion_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_UpdateTokenVersion_Response
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_UpdateTokenVersion_Response;

    /**
     * Creates a plain object from a CTwoFactor_UpdateTokenVersion_Response message. Also converts values to other types if specified.
     * @param message CTwoFactor_UpdateTokenVersion_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_UpdateTokenVersion_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_UpdateTokenVersion_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_UpdateTokenVersion_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CTwoFactor_ValidateToken_Response. */
export interface ICTwoFactor_ValidateToken_Response {

    /** CTwoFactor_ValidateToken_Response valid */
    valid?: (boolean|null);
}

/** Represents a CTwoFactor_ValidateToken_Response. */
export class CTwoFactor_ValidateToken_Response implements ICTwoFactor_ValidateToken_Response {

    /**
     * Constructs a new CTwoFactor_ValidateToken_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICTwoFactor_ValidateToken_Response);

    /** CTwoFactor_ValidateToken_Response valid. */
    public valid: boolean;

    /**
     * Creates a new CTwoFactor_ValidateToken_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CTwoFactor_ValidateToken_Response instance
     */
    public static create(properties?: ICTwoFactor_ValidateToken_Response): CTwoFactor_ValidateToken_Response;

    /**
     * Encodes the specified CTwoFactor_ValidateToken_Response message. Does not implicitly {@link CTwoFactor_ValidateToken_Response.verify|verify} messages.
     * @param message CTwoFactor_ValidateToken_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICTwoFactor_ValidateToken_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CTwoFactor_ValidateToken_Response message, length delimited. Does not implicitly {@link CTwoFactor_ValidateToken_Response.verify|verify} messages.
     * @param message CTwoFactor_ValidateToken_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICTwoFactor_ValidateToken_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CTwoFactor_ValidateToken_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CTwoFactor_ValidateToken_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CTwoFactor_ValidateToken_Response;

    /**
     * Decodes a CTwoFactor_ValidateToken_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CTwoFactor_ValidateToken_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CTwoFactor_ValidateToken_Response;

    /**
     * Verifies a CTwoFactor_ValidateToken_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CTwoFactor_ValidateToken_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CTwoFactor_ValidateToken_Response
     */
    public static fromObject(object: { [k: string]: any }): CTwoFactor_ValidateToken_Response;

    /**
     * Creates a plain object from a CTwoFactor_ValidateToken_Response message. Also converts values to other types if specified.
     * @param message CTwoFactor_ValidateToken_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CTwoFactor_ValidateToken_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CTwoFactor_ValidateToken_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CTwoFactor_ValidateToken_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a TwoFactor */
export class TwoFactor extends $protobuf.rpc.Service {

    /**
     * Constructs a new TwoFactor service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new TwoFactor service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): TwoFactor;

    /**
     * Calls AddAuthenticator.
     * @param request CTwoFactor_AddAuthenticator_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CTwoFactor_AddAuthenticator_Response
     */
    public addAuthenticator(request: ICTwoFactor_AddAuthenticator_Request, callback: TwoFactor.AddAuthenticatorCallback): void;

    /**
     * Calls AddAuthenticator.
     * @param request CTwoFactor_AddAuthenticator_Request message or plain object
     * @returns Promise
     */
    public addAuthenticator(request: ICTwoFactor_AddAuthenticator_Request): Promise<CTwoFactor_AddAuthenticator_Response>;

    /**
     * Calls CreateEmergencyCodes.
     * @param request NotImplemented message or plain object
     * @param callback Node-style callback called with the error, if any, and CTwoFactor_CreateEmergencyCodes_Response
     */
    public createEmergencyCodes(request: INotImplemented, callback: TwoFactor.CreateEmergencyCodesCallback): void;

    /**
     * Calls CreateEmergencyCodes.
     * @param request NotImplemented message or plain object
     * @returns Promise
     */
    public createEmergencyCodes(request: INotImplemented): Promise<CTwoFactor_CreateEmergencyCodes_Response>;

    /**
     * Calls DestroyEmergencyCodes.
     * @param request NotImplemented message or plain object
     * @param callback Node-style callback called with the error, if any, and CTwoFactor_DestroyEmergencyCodes_Response
     */
    public destroyEmergencyCodes(request: INotImplemented, callback: TwoFactor.DestroyEmergencyCodesCallback): void;

    /**
     * Calls DestroyEmergencyCodes.
     * @param request NotImplemented message or plain object
     * @returns Promise
     */
    public destroyEmergencyCodes(request: INotImplemented): Promise<CTwoFactor_DestroyEmergencyCodes_Response>;

    /**
     * Calls FinalizeAddAuthenticator.
     * @param request CTwoFactor_FinalizeAddAuthenticator_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CTwoFactor_FinalizeAddAuthenticator_Response
     */
    public finalizeAddAuthenticator(request: ICTwoFactor_FinalizeAddAuthenticator_Request, callback: TwoFactor.FinalizeAddAuthenticatorCallback): void;

    /**
     * Calls FinalizeAddAuthenticator.
     * @param request CTwoFactor_FinalizeAddAuthenticator_Request message or plain object
     * @returns Promise
     */
    public finalizeAddAuthenticator(request: ICTwoFactor_FinalizeAddAuthenticator_Request): Promise<CTwoFactor_FinalizeAddAuthenticator_Response>;

    /**
     * Calls QueryStatus.
     * @param request CTwoFactor_Status_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CTwoFactor_Status_Response
     */
    public queryStatus(request: ICTwoFactor_Status_Request, callback: TwoFactor.QueryStatusCallback): void;

    /**
     * Calls QueryStatus.
     * @param request CTwoFactor_Status_Request message or plain object
     * @returns Promise
     */
    public queryStatus(request: ICTwoFactor_Status_Request): Promise<CTwoFactor_Status_Response>;

    /**
     * Calls QueryTime.
     * @param request CTwoFactor_Time_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CTwoFactor_Time_Response
     */
    public queryTime(request: ICTwoFactor_Time_Request, callback: TwoFactor.QueryTimeCallback): void;

    /**
     * Calls QueryTime.
     * @param request CTwoFactor_Time_Request message or plain object
     * @returns Promise
     */
    public queryTime(request: ICTwoFactor_Time_Request): Promise<CTwoFactor_Time_Response>;

    /**
     * Calls RemoveAuthenticator.
     * @param request CTwoFactor_RemoveAuthenticator_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CTwoFactor_RemoveAuthenticator_Response
     */
    public removeAuthenticator(request: ICTwoFactor_RemoveAuthenticator_Request, callback: TwoFactor.RemoveAuthenticatorCallback): void;

    /**
     * Calls RemoveAuthenticator.
     * @param request CTwoFactor_RemoveAuthenticator_Request message or plain object
     * @returns Promise
     */
    public removeAuthenticator(request: ICTwoFactor_RemoveAuthenticator_Request): Promise<CTwoFactor_RemoveAuthenticator_Response>;

    /**
     * Calls RemoveAuthenticatorViaChallengeContinue.
     * @param request CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     */
    public removeAuthenticatorViaChallengeContinue(request: ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request, callback: TwoFactor.RemoveAuthenticatorViaChallengeContinueCallback): void;

    /**
     * Calls RemoveAuthenticatorViaChallengeContinue.
     * @param request CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message or plain object
     * @returns Promise
     */
    public removeAuthenticatorViaChallengeContinue(request: ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request): Promise<CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response>;

    /**
     * Calls RemoveAuthenticatorViaChallengeStart.
     * @param request CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     */
    public removeAuthenticatorViaChallengeStart(request: ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request, callback: TwoFactor.RemoveAuthenticatorViaChallengeStartCallback): void;

    /**
     * Calls RemoveAuthenticatorViaChallengeStart.
     * @param request CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message or plain object
     * @returns Promise
     */
    public removeAuthenticatorViaChallengeStart(request: ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request): Promise<CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response>;

    /**
     * Calls SendEmail.
     * @param request CTwoFactor_SendEmail_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CTwoFactor_SendEmail_Response
     */
    public sendEmail(request: ICTwoFactor_SendEmail_Request, callback: TwoFactor.SendEmailCallback): void;

    /**
     * Calls SendEmail.
     * @param request CTwoFactor_SendEmail_Request message or plain object
     * @returns Promise
     */
    public sendEmail(request: ICTwoFactor_SendEmail_Request): Promise<CTwoFactor_SendEmail_Response>;

    /**
     * Calls UpdateTokenVersion.
     * @param request CTwoFactor_UpdateTokenVersion_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CTwoFactor_UpdateTokenVersion_Response
     */
    public updateTokenVersion(request: ICTwoFactor_UpdateTokenVersion_Request, callback: TwoFactor.UpdateTokenVersionCallback): void;

    /**
     * Calls UpdateTokenVersion.
     * @param request CTwoFactor_UpdateTokenVersion_Request message or plain object
     * @returns Promise
     */
    public updateTokenVersion(request: ICTwoFactor_UpdateTokenVersion_Request): Promise<CTwoFactor_UpdateTokenVersion_Response>;

    /**
     * Calls ValidateToken.
     * @param request NotImplemented message or plain object
     * @param callback Node-style callback called with the error, if any, and CTwoFactor_ValidateToken_Response
     */
    public validateToken(request: INotImplemented, callback: TwoFactor.ValidateTokenCallback): void;

    /**
     * Calls ValidateToken.
     * @param request NotImplemented message or plain object
     * @returns Promise
     */
    public validateToken(request: INotImplemented): Promise<CTwoFactor_ValidateToken_Response>;
}

export namespace TwoFactor {

    /**
     * Callback as used by {@link TwoFactor#addAuthenticator}.
     * @param error Error, if any
     * @param [response] CTwoFactor_AddAuthenticator_Response
     */
    type AddAuthenticatorCallback = (error: (Error|null), response?: CTwoFactor_AddAuthenticator_Response) => void;

    /**
     * Callback as used by {@link TwoFactor#createEmergencyCodes}.
     * @param error Error, if any
     * @param [response] CTwoFactor_CreateEmergencyCodes_Response
     */
    type CreateEmergencyCodesCallback = (error: (Error|null), response?: CTwoFactor_CreateEmergencyCodes_Response) => void;

    /**
     * Callback as used by {@link TwoFactor#destroyEmergencyCodes}.
     * @param error Error, if any
     * @param [response] CTwoFactor_DestroyEmergencyCodes_Response
     */
    type DestroyEmergencyCodesCallback = (error: (Error|null), response?: CTwoFactor_DestroyEmergencyCodes_Response) => void;

    /**
     * Callback as used by {@link TwoFactor#finalizeAddAuthenticator}.
     * @param error Error, if any
     * @param [response] CTwoFactor_FinalizeAddAuthenticator_Response
     */
    type FinalizeAddAuthenticatorCallback = (error: (Error|null), response?: CTwoFactor_FinalizeAddAuthenticator_Response) => void;

    /**
     * Callback as used by {@link TwoFactor#queryStatus}.
     * @param error Error, if any
     * @param [response] CTwoFactor_Status_Response
     */
    type QueryStatusCallback = (error: (Error|null), response?: CTwoFactor_Status_Response) => void;

    /**
     * Callback as used by {@link TwoFactor#queryTime}.
     * @param error Error, if any
     * @param [response] CTwoFactor_Time_Response
     */
    type QueryTimeCallback = (error: (Error|null), response?: CTwoFactor_Time_Response) => void;

    /**
     * Callback as used by {@link TwoFactor#removeAuthenticator}.
     * @param error Error, if any
     * @param [response] CTwoFactor_RemoveAuthenticator_Response
     */
    type RemoveAuthenticatorCallback = (error: (Error|null), response?: CTwoFactor_RemoveAuthenticator_Response) => void;

    /**
     * Callback as used by {@link TwoFactor#removeAuthenticatorViaChallengeContinue}.
     * @param error Error, if any
     * @param [response] CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     */
    type RemoveAuthenticatorViaChallengeContinueCallback = (error: (Error|null), response?: CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response) => void;

    /**
     * Callback as used by {@link TwoFactor#removeAuthenticatorViaChallengeStart}.
     * @param error Error, if any
     * @param [response] CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     */
    type RemoveAuthenticatorViaChallengeStartCallback = (error: (Error|null), response?: CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response) => void;

    /**
     * Callback as used by {@link TwoFactor#sendEmail}.
     * @param error Error, if any
     * @param [response] CTwoFactor_SendEmail_Response
     */
    type SendEmailCallback = (error: (Error|null), response?: CTwoFactor_SendEmail_Response) => void;

    /**
     * Callback as used by {@link TwoFactor#updateTokenVersion}.
     * @param error Error, if any
     * @param [response] CTwoFactor_UpdateTokenVersion_Response
     */
    type UpdateTokenVersionCallback = (error: (Error|null), response?: CTwoFactor_UpdateTokenVersion_Response) => void;

    /**
     * Callback as used by {@link TwoFactor#validateToken}.
     * @param error Error, if any
     * @param [response] CTwoFactor_ValidateToken_Response
     */
    type ValidateTokenCallback = (error: (Error|null), response?: CTwoFactor_ValidateToken_Response) => void;
}

/** Properties of a NoResponse. */
export interface INoResponse {
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

/** Properties of a NotImplemented. */
export interface INotImplemented {
}

/** Represents a NotImplemented. */
export class NotImplemented implements INotImplemented {

    /**
     * Constructs a new NotImplemented.
     * @param [properties] Properties to set
     */
    constructor(properties?: INotImplemented);

    /**
     * Creates a new NotImplemented instance using the specified properties.
     * @param [properties] Properties to set
     * @returns NotImplemented instance
     */
    public static create(properties?: INotImplemented): NotImplemented;

    /**
     * Encodes the specified NotImplemented message. Does not implicitly {@link NotImplemented.verify|verify} messages.
     * @param message NotImplemented message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: INotImplemented, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified NotImplemented message, length delimited. Does not implicitly {@link NotImplemented.verify|verify} messages.
     * @param message NotImplemented message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: INotImplemented, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a NotImplemented message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns NotImplemented
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): NotImplemented;

    /**
     * Decodes a NotImplemented message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns NotImplemented
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): NotImplemented;

    /**
     * Verifies a NotImplemented message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a NotImplemented message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns NotImplemented
     */
    public static fromObject(object: { [k: string]: any }): NotImplemented;

    /**
     * Creates a plain object from a NotImplemented message. Also converts values to other types if specified.
     * @param message NotImplemented
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: NotImplemented, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this NotImplemented to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for NotImplemented
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
