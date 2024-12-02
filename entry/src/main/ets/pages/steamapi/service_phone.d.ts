import * as $protobuf from "@ohos/protobufjs";
import Long = require("long");
/** Properties of a CPhone_AddPhoneToAccount_Response. */
export interface ICPhone_AddPhoneToAccount_Response {

    /** CPhone_AddPhoneToAccount_Response success */
    success?: (boolean|null);

    /** CPhone_AddPhoneToAccount_Response phoneNumberType */
    phoneNumberType?: (number|null);
}

/** Represents a CPhone_AddPhoneToAccount_Response. */
export class CPhone_AddPhoneToAccount_Response implements ICPhone_AddPhoneToAccount_Response {

    /**
     * Constructs a new CPhone_AddPhoneToAccount_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPhone_AddPhoneToAccount_Response);

    /** CPhone_AddPhoneToAccount_Response success. */
    public success: boolean;

    /** CPhone_AddPhoneToAccount_Response phoneNumberType. */
    public phoneNumberType: number;

    /**
     * Creates a new CPhone_AddPhoneToAccount_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPhone_AddPhoneToAccount_Response instance
     */
    public static create(properties?: ICPhone_AddPhoneToAccount_Response): CPhone_AddPhoneToAccount_Response;

    /**
     * Encodes the specified CPhone_AddPhoneToAccount_Response message. Does not implicitly {@link CPhone_AddPhoneToAccount_Response.verify|verify} messages.
     * @param message CPhone_AddPhoneToAccount_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPhone_AddPhoneToAccount_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPhone_AddPhoneToAccount_Response message, length delimited. Does not implicitly {@link CPhone_AddPhoneToAccount_Response.verify|verify} messages.
     * @param message CPhone_AddPhoneToAccount_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPhone_AddPhoneToAccount_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPhone_AddPhoneToAccount_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPhone_AddPhoneToAccount_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPhone_AddPhoneToAccount_Response;

    /**
     * Decodes a CPhone_AddPhoneToAccount_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPhone_AddPhoneToAccount_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPhone_AddPhoneToAccount_Response;

    /**
     * Verifies a CPhone_AddPhoneToAccount_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPhone_AddPhoneToAccount_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPhone_AddPhoneToAccount_Response
     */
    public static fromObject(object: { [k: string]: any }): CPhone_AddPhoneToAccount_Response;

    /**
     * Creates a plain object from a CPhone_AddPhoneToAccount_Response message. Also converts values to other types if specified.
     * @param message CPhone_AddPhoneToAccount_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPhone_AddPhoneToAccount_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPhone_AddPhoneToAccount_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPhone_AddPhoneToAccount_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPhone_ConfirmAddPhoneToAccount_Request. */
export interface ICPhone_ConfirmAddPhoneToAccount_Request {

    /** CPhone_ConfirmAddPhoneToAccount_Request steamid */
    steamid?: (number|Long|null);

    /** CPhone_ConfirmAddPhoneToAccount_Request stoken */
    stoken?: (string|null);
}

/** Represents a CPhone_ConfirmAddPhoneToAccount_Request. */
export class CPhone_ConfirmAddPhoneToAccount_Request implements ICPhone_ConfirmAddPhoneToAccount_Request {

    /**
     * Constructs a new CPhone_ConfirmAddPhoneToAccount_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPhone_ConfirmAddPhoneToAccount_Request);

    /** CPhone_ConfirmAddPhoneToAccount_Request steamid. */
    public steamid: (number|Long);

    /** CPhone_ConfirmAddPhoneToAccount_Request stoken. */
    public stoken: string;

    /**
     * Creates a new CPhone_ConfirmAddPhoneToAccount_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPhone_ConfirmAddPhoneToAccount_Request instance
     */
    public static create(properties?: ICPhone_ConfirmAddPhoneToAccount_Request): CPhone_ConfirmAddPhoneToAccount_Request;

    /**
     * Encodes the specified CPhone_ConfirmAddPhoneToAccount_Request message. Does not implicitly {@link CPhone_ConfirmAddPhoneToAccount_Request.verify|verify} messages.
     * @param message CPhone_ConfirmAddPhoneToAccount_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPhone_ConfirmAddPhoneToAccount_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPhone_ConfirmAddPhoneToAccount_Request message, length delimited. Does not implicitly {@link CPhone_ConfirmAddPhoneToAccount_Request.verify|verify} messages.
     * @param message CPhone_ConfirmAddPhoneToAccount_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPhone_ConfirmAddPhoneToAccount_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPhone_ConfirmAddPhoneToAccount_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPhone_ConfirmAddPhoneToAccount_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPhone_ConfirmAddPhoneToAccount_Request;

    /**
     * Decodes a CPhone_ConfirmAddPhoneToAccount_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPhone_ConfirmAddPhoneToAccount_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPhone_ConfirmAddPhoneToAccount_Request;

    /**
     * Verifies a CPhone_ConfirmAddPhoneToAccount_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPhone_ConfirmAddPhoneToAccount_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPhone_ConfirmAddPhoneToAccount_Request
     */
    public static fromObject(object: { [k: string]: any }): CPhone_ConfirmAddPhoneToAccount_Request;

    /**
     * Creates a plain object from a CPhone_ConfirmAddPhoneToAccount_Request message. Also converts values to other types if specified.
     * @param message CPhone_ConfirmAddPhoneToAccount_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPhone_ConfirmAddPhoneToAccount_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPhone_ConfirmAddPhoneToAccount_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPhone_ConfirmAddPhoneToAccount_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPhone_IsAccountWaitingForEmailConfirmation_Request. */
export interface ICPhone_IsAccountWaitingForEmailConfirmation_Request {
}

/** Represents a CPhone_IsAccountWaitingForEmailConfirmation_Request. */
export class CPhone_IsAccountWaitingForEmailConfirmation_Request implements ICPhone_IsAccountWaitingForEmailConfirmation_Request {

    /**
     * Constructs a new CPhone_IsAccountWaitingForEmailConfirmation_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPhone_IsAccountWaitingForEmailConfirmation_Request);

    /**
     * Creates a new CPhone_IsAccountWaitingForEmailConfirmation_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPhone_IsAccountWaitingForEmailConfirmation_Request instance
     */
    public static create(properties?: ICPhone_IsAccountWaitingForEmailConfirmation_Request): CPhone_IsAccountWaitingForEmailConfirmation_Request;

    /**
     * Encodes the specified CPhone_IsAccountWaitingForEmailConfirmation_Request message. Does not implicitly {@link CPhone_IsAccountWaitingForEmailConfirmation_Request.verify|verify} messages.
     * @param message CPhone_IsAccountWaitingForEmailConfirmation_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPhone_IsAccountWaitingForEmailConfirmation_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPhone_IsAccountWaitingForEmailConfirmation_Request message, length delimited. Does not implicitly {@link CPhone_IsAccountWaitingForEmailConfirmation_Request.verify|verify} messages.
     * @param message CPhone_IsAccountWaitingForEmailConfirmation_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPhone_IsAccountWaitingForEmailConfirmation_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPhone_IsAccountWaitingForEmailConfirmation_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPhone_IsAccountWaitingForEmailConfirmation_Request;

    /**
     * Decodes a CPhone_IsAccountWaitingForEmailConfirmation_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPhone_IsAccountWaitingForEmailConfirmation_Request;

    /**
     * Verifies a CPhone_IsAccountWaitingForEmailConfirmation_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPhone_IsAccountWaitingForEmailConfirmation_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPhone_IsAccountWaitingForEmailConfirmation_Request
     */
    public static fromObject(object: { [k: string]: any }): CPhone_IsAccountWaitingForEmailConfirmation_Request;

    /**
     * Creates a plain object from a CPhone_IsAccountWaitingForEmailConfirmation_Request message. Also converts values to other types if specified.
     * @param message CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPhone_IsAccountWaitingForEmailConfirmation_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPhone_IsAccountWaitingForEmailConfirmation_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPhone_IsAccountWaitingForEmailConfirmation_Response. */
export interface ICPhone_IsAccountWaitingForEmailConfirmation_Response {

    /** CPhone_IsAccountWaitingForEmailConfirmation_Response awaitingEmailConfirmation */
    awaitingEmailConfirmation?: (boolean|null);

    /** CPhone_IsAccountWaitingForEmailConfirmation_Response secondsToWait */
    secondsToWait?: (number|null);
}

/** Represents a CPhone_IsAccountWaitingForEmailConfirmation_Response. */
export class CPhone_IsAccountWaitingForEmailConfirmation_Response implements ICPhone_IsAccountWaitingForEmailConfirmation_Response {

    /**
     * Constructs a new CPhone_IsAccountWaitingForEmailConfirmation_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPhone_IsAccountWaitingForEmailConfirmation_Response);

    /** CPhone_IsAccountWaitingForEmailConfirmation_Response awaitingEmailConfirmation. */
    public awaitingEmailConfirmation: boolean;

    /** CPhone_IsAccountWaitingForEmailConfirmation_Response secondsToWait. */
    public secondsToWait: number;

    /**
     * Creates a new CPhone_IsAccountWaitingForEmailConfirmation_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPhone_IsAccountWaitingForEmailConfirmation_Response instance
     */
    public static create(properties?: ICPhone_IsAccountWaitingForEmailConfirmation_Response): CPhone_IsAccountWaitingForEmailConfirmation_Response;

    /**
     * Encodes the specified CPhone_IsAccountWaitingForEmailConfirmation_Response message. Does not implicitly {@link CPhone_IsAccountWaitingForEmailConfirmation_Response.verify|verify} messages.
     * @param message CPhone_IsAccountWaitingForEmailConfirmation_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPhone_IsAccountWaitingForEmailConfirmation_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPhone_IsAccountWaitingForEmailConfirmation_Response message, length delimited. Does not implicitly {@link CPhone_IsAccountWaitingForEmailConfirmation_Response.verify|verify} messages.
     * @param message CPhone_IsAccountWaitingForEmailConfirmation_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPhone_IsAccountWaitingForEmailConfirmation_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPhone_IsAccountWaitingForEmailConfirmation_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPhone_IsAccountWaitingForEmailConfirmation_Response;

    /**
     * Decodes a CPhone_IsAccountWaitingForEmailConfirmation_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPhone_IsAccountWaitingForEmailConfirmation_Response;

    /**
     * Verifies a CPhone_IsAccountWaitingForEmailConfirmation_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPhone_IsAccountWaitingForEmailConfirmation_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPhone_IsAccountWaitingForEmailConfirmation_Response
     */
    public static fromObject(object: { [k: string]: any }): CPhone_IsAccountWaitingForEmailConfirmation_Response;

    /**
     * Creates a plain object from a CPhone_IsAccountWaitingForEmailConfirmation_Response message. Also converts values to other types if specified.
     * @param message CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPhone_IsAccountWaitingForEmailConfirmation_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPhone_IsAccountWaitingForEmailConfirmation_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPhone_SendPhoneVerificationCode_Request. */
export interface ICPhone_SendPhoneVerificationCode_Request {

    /** CPhone_SendPhoneVerificationCode_Request language */
    language?: (number|null);
}

/** Represents a CPhone_SendPhoneVerificationCode_Request. */
export class CPhone_SendPhoneVerificationCode_Request implements ICPhone_SendPhoneVerificationCode_Request {

    /**
     * Constructs a new CPhone_SendPhoneVerificationCode_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPhone_SendPhoneVerificationCode_Request);

    /** CPhone_SendPhoneVerificationCode_Request language. */
    public language: number;

    /**
     * Creates a new CPhone_SendPhoneVerificationCode_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPhone_SendPhoneVerificationCode_Request instance
     */
    public static create(properties?: ICPhone_SendPhoneVerificationCode_Request): CPhone_SendPhoneVerificationCode_Request;

    /**
     * Encodes the specified CPhone_SendPhoneVerificationCode_Request message. Does not implicitly {@link CPhone_SendPhoneVerificationCode_Request.verify|verify} messages.
     * @param message CPhone_SendPhoneVerificationCode_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPhone_SendPhoneVerificationCode_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPhone_SendPhoneVerificationCode_Request message, length delimited. Does not implicitly {@link CPhone_SendPhoneVerificationCode_Request.verify|verify} messages.
     * @param message CPhone_SendPhoneVerificationCode_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPhone_SendPhoneVerificationCode_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPhone_SendPhoneVerificationCode_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPhone_SendPhoneVerificationCode_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPhone_SendPhoneVerificationCode_Request;

    /**
     * Decodes a CPhone_SendPhoneVerificationCode_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPhone_SendPhoneVerificationCode_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPhone_SendPhoneVerificationCode_Request;

    /**
     * Verifies a CPhone_SendPhoneVerificationCode_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPhone_SendPhoneVerificationCode_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPhone_SendPhoneVerificationCode_Request
     */
    public static fromObject(object: { [k: string]: any }): CPhone_SendPhoneVerificationCode_Request;

    /**
     * Creates a plain object from a CPhone_SendPhoneVerificationCode_Request message. Also converts values to other types if specified.
     * @param message CPhone_SendPhoneVerificationCode_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPhone_SendPhoneVerificationCode_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPhone_SendPhoneVerificationCode_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPhone_SendPhoneVerificationCode_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPhone_SendPhoneVerificationCode_Response. */
export interface ICPhone_SendPhoneVerificationCode_Response {
}

/** Represents a CPhone_SendPhoneVerificationCode_Response. */
export class CPhone_SendPhoneVerificationCode_Response implements ICPhone_SendPhoneVerificationCode_Response {

    /**
     * Constructs a new CPhone_SendPhoneVerificationCode_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPhone_SendPhoneVerificationCode_Response);

    /**
     * Creates a new CPhone_SendPhoneVerificationCode_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPhone_SendPhoneVerificationCode_Response instance
     */
    public static create(properties?: ICPhone_SendPhoneVerificationCode_Response): CPhone_SendPhoneVerificationCode_Response;

    /**
     * Encodes the specified CPhone_SendPhoneVerificationCode_Response message. Does not implicitly {@link CPhone_SendPhoneVerificationCode_Response.verify|verify} messages.
     * @param message CPhone_SendPhoneVerificationCode_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPhone_SendPhoneVerificationCode_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPhone_SendPhoneVerificationCode_Response message, length delimited. Does not implicitly {@link CPhone_SendPhoneVerificationCode_Response.verify|verify} messages.
     * @param message CPhone_SendPhoneVerificationCode_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPhone_SendPhoneVerificationCode_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPhone_SendPhoneVerificationCode_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPhone_SendPhoneVerificationCode_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPhone_SendPhoneVerificationCode_Response;

    /**
     * Decodes a CPhone_SendPhoneVerificationCode_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPhone_SendPhoneVerificationCode_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPhone_SendPhoneVerificationCode_Response;

    /**
     * Verifies a CPhone_SendPhoneVerificationCode_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPhone_SendPhoneVerificationCode_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPhone_SendPhoneVerificationCode_Response
     */
    public static fromObject(object: { [k: string]: any }): CPhone_SendPhoneVerificationCode_Response;

    /**
     * Creates a plain object from a CPhone_SendPhoneVerificationCode_Response message. Also converts values to other types if specified.
     * @param message CPhone_SendPhoneVerificationCode_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPhone_SendPhoneVerificationCode_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPhone_SendPhoneVerificationCode_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPhone_SendPhoneVerificationCode_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPhone_SetAccountPhoneNumber_Request. */
export interface ICPhone_SetAccountPhoneNumber_Request {

    /** CPhone_SetAccountPhoneNumber_Request phoneNumber */
    phoneNumber?: (string|null);

    /** CPhone_SetAccountPhoneNumber_Request phoneCountryCode */
    phoneCountryCode?: (string|null);
}

/** Represents a CPhone_SetAccountPhoneNumber_Request. */
export class CPhone_SetAccountPhoneNumber_Request implements ICPhone_SetAccountPhoneNumber_Request {

    /**
     * Constructs a new CPhone_SetAccountPhoneNumber_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPhone_SetAccountPhoneNumber_Request);

    /** CPhone_SetAccountPhoneNumber_Request phoneNumber. */
    public phoneNumber: string;

    /** CPhone_SetAccountPhoneNumber_Request phoneCountryCode. */
    public phoneCountryCode: string;

    /**
     * Creates a new CPhone_SetAccountPhoneNumber_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPhone_SetAccountPhoneNumber_Request instance
     */
    public static create(properties?: ICPhone_SetAccountPhoneNumber_Request): CPhone_SetAccountPhoneNumber_Request;

    /**
     * Encodes the specified CPhone_SetAccountPhoneNumber_Request message. Does not implicitly {@link CPhone_SetAccountPhoneNumber_Request.verify|verify} messages.
     * @param message CPhone_SetAccountPhoneNumber_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPhone_SetAccountPhoneNumber_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPhone_SetAccountPhoneNumber_Request message, length delimited. Does not implicitly {@link CPhone_SetAccountPhoneNumber_Request.verify|verify} messages.
     * @param message CPhone_SetAccountPhoneNumber_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPhone_SetAccountPhoneNumber_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPhone_SetAccountPhoneNumber_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPhone_SetAccountPhoneNumber_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPhone_SetAccountPhoneNumber_Request;

    /**
     * Decodes a CPhone_SetAccountPhoneNumber_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPhone_SetAccountPhoneNumber_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPhone_SetAccountPhoneNumber_Request;

    /**
     * Verifies a CPhone_SetAccountPhoneNumber_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPhone_SetAccountPhoneNumber_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPhone_SetAccountPhoneNumber_Request
     */
    public static fromObject(object: { [k: string]: any }): CPhone_SetAccountPhoneNumber_Request;

    /**
     * Creates a plain object from a CPhone_SetAccountPhoneNumber_Request message. Also converts values to other types if specified.
     * @param message CPhone_SetAccountPhoneNumber_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPhone_SetAccountPhoneNumber_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPhone_SetAccountPhoneNumber_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPhone_SetAccountPhoneNumber_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPhone_SetAccountPhoneNumber_Response. */
export interface ICPhone_SetAccountPhoneNumber_Response {

    /** CPhone_SetAccountPhoneNumber_Response confirmationEmailAddress */
    confirmationEmailAddress?: (string|null);

    /** CPhone_SetAccountPhoneNumber_Response phoneNumberFormatted */
    phoneNumberFormatted?: (string|null);
}

/** Represents a CPhone_SetAccountPhoneNumber_Response. */
export class CPhone_SetAccountPhoneNumber_Response implements ICPhone_SetAccountPhoneNumber_Response {

    /**
     * Constructs a new CPhone_SetAccountPhoneNumber_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPhone_SetAccountPhoneNumber_Response);

    /** CPhone_SetAccountPhoneNumber_Response confirmationEmailAddress. */
    public confirmationEmailAddress: string;

    /** CPhone_SetAccountPhoneNumber_Response phoneNumberFormatted. */
    public phoneNumberFormatted: string;

    /**
     * Creates a new CPhone_SetAccountPhoneNumber_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPhone_SetAccountPhoneNumber_Response instance
     */
    public static create(properties?: ICPhone_SetAccountPhoneNumber_Response): CPhone_SetAccountPhoneNumber_Response;

    /**
     * Encodes the specified CPhone_SetAccountPhoneNumber_Response message. Does not implicitly {@link CPhone_SetAccountPhoneNumber_Response.verify|verify} messages.
     * @param message CPhone_SetAccountPhoneNumber_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPhone_SetAccountPhoneNumber_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPhone_SetAccountPhoneNumber_Response message, length delimited. Does not implicitly {@link CPhone_SetAccountPhoneNumber_Response.verify|verify} messages.
     * @param message CPhone_SetAccountPhoneNumber_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPhone_SetAccountPhoneNumber_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPhone_SetAccountPhoneNumber_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPhone_SetAccountPhoneNumber_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPhone_SetAccountPhoneNumber_Response;

    /**
     * Decodes a CPhone_SetAccountPhoneNumber_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPhone_SetAccountPhoneNumber_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPhone_SetAccountPhoneNumber_Response;

    /**
     * Verifies a CPhone_SetAccountPhoneNumber_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPhone_SetAccountPhoneNumber_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPhone_SetAccountPhoneNumber_Response
     */
    public static fromObject(object: { [k: string]: any }): CPhone_SetAccountPhoneNumber_Response;

    /**
     * Creates a plain object from a CPhone_SetAccountPhoneNumber_Response message. Also converts values to other types if specified.
     * @param message CPhone_SetAccountPhoneNumber_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPhone_SetAccountPhoneNumber_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPhone_SetAccountPhoneNumber_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPhone_SetAccountPhoneNumber_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPhone_VerifyAccountPhoneWithCode_Request. */
export interface ICPhone_VerifyAccountPhoneWithCode_Request {

    /** CPhone_VerifyAccountPhoneWithCode_Request code */
    code?: (string|null);
}

/** Represents a CPhone_VerifyAccountPhoneWithCode_Request. */
export class CPhone_VerifyAccountPhoneWithCode_Request implements ICPhone_VerifyAccountPhoneWithCode_Request {

    /**
     * Constructs a new CPhone_VerifyAccountPhoneWithCode_Request.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPhone_VerifyAccountPhoneWithCode_Request);

    /** CPhone_VerifyAccountPhoneWithCode_Request code. */
    public code: string;

    /**
     * Creates a new CPhone_VerifyAccountPhoneWithCode_Request instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPhone_VerifyAccountPhoneWithCode_Request instance
     */
    public static create(properties?: ICPhone_VerifyAccountPhoneWithCode_Request): CPhone_VerifyAccountPhoneWithCode_Request;

    /**
     * Encodes the specified CPhone_VerifyAccountPhoneWithCode_Request message. Does not implicitly {@link CPhone_VerifyAccountPhoneWithCode_Request.verify|verify} messages.
     * @param message CPhone_VerifyAccountPhoneWithCode_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPhone_VerifyAccountPhoneWithCode_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPhone_VerifyAccountPhoneWithCode_Request message, length delimited. Does not implicitly {@link CPhone_VerifyAccountPhoneWithCode_Request.verify|verify} messages.
     * @param message CPhone_VerifyAccountPhoneWithCode_Request message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPhone_VerifyAccountPhoneWithCode_Request, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPhone_VerifyAccountPhoneWithCode_Request message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPhone_VerifyAccountPhoneWithCode_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPhone_VerifyAccountPhoneWithCode_Request;

    /**
     * Decodes a CPhone_VerifyAccountPhoneWithCode_Request message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPhone_VerifyAccountPhoneWithCode_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPhone_VerifyAccountPhoneWithCode_Request;

    /**
     * Verifies a CPhone_VerifyAccountPhoneWithCode_Request message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPhone_VerifyAccountPhoneWithCode_Request message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPhone_VerifyAccountPhoneWithCode_Request
     */
    public static fromObject(object: { [k: string]: any }): CPhone_VerifyAccountPhoneWithCode_Request;

    /**
     * Creates a plain object from a CPhone_VerifyAccountPhoneWithCode_Request message. Also converts values to other types if specified.
     * @param message CPhone_VerifyAccountPhoneWithCode_Request
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPhone_VerifyAccountPhoneWithCode_Request, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPhone_VerifyAccountPhoneWithCode_Request to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPhone_VerifyAccountPhoneWithCode_Request
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Properties of a CPhone_VerifyAccountPhoneWithCode_Response. */
export interface ICPhone_VerifyAccountPhoneWithCode_Response {
}

/** Represents a CPhone_VerifyAccountPhoneWithCode_Response. */
export class CPhone_VerifyAccountPhoneWithCode_Response implements ICPhone_VerifyAccountPhoneWithCode_Response {

    /**
     * Constructs a new CPhone_VerifyAccountPhoneWithCode_Response.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICPhone_VerifyAccountPhoneWithCode_Response);

    /**
     * Creates a new CPhone_VerifyAccountPhoneWithCode_Response instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CPhone_VerifyAccountPhoneWithCode_Response instance
     */
    public static create(properties?: ICPhone_VerifyAccountPhoneWithCode_Response): CPhone_VerifyAccountPhoneWithCode_Response;

    /**
     * Encodes the specified CPhone_VerifyAccountPhoneWithCode_Response message. Does not implicitly {@link CPhone_VerifyAccountPhoneWithCode_Response.verify|verify} messages.
     * @param message CPhone_VerifyAccountPhoneWithCode_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICPhone_VerifyAccountPhoneWithCode_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CPhone_VerifyAccountPhoneWithCode_Response message, length delimited. Does not implicitly {@link CPhone_VerifyAccountPhoneWithCode_Response.verify|verify} messages.
     * @param message CPhone_VerifyAccountPhoneWithCode_Response message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICPhone_VerifyAccountPhoneWithCode_Response, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CPhone_VerifyAccountPhoneWithCode_Response message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CPhone_VerifyAccountPhoneWithCode_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CPhone_VerifyAccountPhoneWithCode_Response;

    /**
     * Decodes a CPhone_VerifyAccountPhoneWithCode_Response message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CPhone_VerifyAccountPhoneWithCode_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CPhone_VerifyAccountPhoneWithCode_Response;

    /**
     * Verifies a CPhone_VerifyAccountPhoneWithCode_Response message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a CPhone_VerifyAccountPhoneWithCode_Response message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CPhone_VerifyAccountPhoneWithCode_Response
     */
    public static fromObject(object: { [k: string]: any }): CPhone_VerifyAccountPhoneWithCode_Response;

    /**
     * Creates a plain object from a CPhone_VerifyAccountPhoneWithCode_Response message. Also converts values to other types if specified.
     * @param message CPhone_VerifyAccountPhoneWithCode_Response
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CPhone_VerifyAccountPhoneWithCode_Response, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CPhone_VerifyAccountPhoneWithCode_Response to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for CPhone_VerifyAccountPhoneWithCode_Response
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

/** Represents a Phone */
export class Phone extends $protobuf.rpc.Service {

    /**
     * Constructs a new Phone service.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     */
    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

    /**
     * Creates new Phone service using the specified rpc implementation.
     * @param rpcImpl RPC implementation
     * @param [requestDelimited=false] Whether requests are length-delimited
     * @param [responseDelimited=false] Whether responses are length-delimited
     * @returns RPC service. Useful where requests and/or responses are streamed.
     */
    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Phone;

    /**
     * Calls ConfirmAddPhoneToAccount.
     * @param request CPhone_ConfirmAddPhoneToAccount_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPhone_AddPhoneToAccount_Response
     */
    public confirmAddPhoneToAccount(request: ICPhone_ConfirmAddPhoneToAccount_Request, callback: Phone.ConfirmAddPhoneToAccountCallback): void;

    /**
     * Calls ConfirmAddPhoneToAccount.
     * @param request CPhone_ConfirmAddPhoneToAccount_Request message or plain object
     * @returns Promise
     */
    public confirmAddPhoneToAccount(request: ICPhone_ConfirmAddPhoneToAccount_Request): Promise<CPhone_AddPhoneToAccount_Response>;

    /**
     * Calls IsAccountWaitingForEmailConfirmation.
     * @param request CPhone_IsAccountWaitingForEmailConfirmation_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPhone_IsAccountWaitingForEmailConfirmation_Response
     */
    public isAccountWaitingForEmailConfirmation(request: ICPhone_IsAccountWaitingForEmailConfirmation_Request, callback: Phone.IsAccountWaitingForEmailConfirmationCallback): void;

    /**
     * Calls IsAccountWaitingForEmailConfirmation.
     * @param request CPhone_IsAccountWaitingForEmailConfirmation_Request message or plain object
     * @returns Promise
     */
    public isAccountWaitingForEmailConfirmation(request: ICPhone_IsAccountWaitingForEmailConfirmation_Request): Promise<CPhone_IsAccountWaitingForEmailConfirmation_Response>;

    /**
     * Calls SendPhoneVerificationCode.
     * @param request CPhone_SendPhoneVerificationCode_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPhone_SendPhoneVerificationCode_Response
     */
    public sendPhoneVerificationCode(request: ICPhone_SendPhoneVerificationCode_Request, callback: Phone.SendPhoneVerificationCodeCallback): void;

    /**
     * Calls SendPhoneVerificationCode.
     * @param request CPhone_SendPhoneVerificationCode_Request message or plain object
     * @returns Promise
     */
    public sendPhoneVerificationCode(request: ICPhone_SendPhoneVerificationCode_Request): Promise<CPhone_SendPhoneVerificationCode_Response>;

    /**
     * Calls SetAccountPhoneNumber.
     * @param request CPhone_SetAccountPhoneNumber_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPhone_SetAccountPhoneNumber_Response
     */
    public setAccountPhoneNumber(request: ICPhone_SetAccountPhoneNumber_Request, callback: Phone.SetAccountPhoneNumberCallback): void;

    /**
     * Calls SetAccountPhoneNumber.
     * @param request CPhone_SetAccountPhoneNumber_Request message or plain object
     * @returns Promise
     */
    public setAccountPhoneNumber(request: ICPhone_SetAccountPhoneNumber_Request): Promise<CPhone_SetAccountPhoneNumber_Response>;

    /**
     * Calls VerifyAccountPhoneWithCode.
     * @param request CPhone_VerifyAccountPhoneWithCode_Request message or plain object
     * @param callback Node-style callback called with the error, if any, and CPhone_VerifyAccountPhoneWithCode_Response
     */
    public verifyAccountPhoneWithCode(request: ICPhone_VerifyAccountPhoneWithCode_Request, callback: Phone.VerifyAccountPhoneWithCodeCallback): void;

    /**
     * Calls VerifyAccountPhoneWithCode.
     * @param request CPhone_VerifyAccountPhoneWithCode_Request message or plain object
     * @returns Promise
     */
    public verifyAccountPhoneWithCode(request: ICPhone_VerifyAccountPhoneWithCode_Request): Promise<CPhone_VerifyAccountPhoneWithCode_Response>;
}

export namespace Phone {

    /**
     * Callback as used by {@link Phone#confirmAddPhoneToAccount}.
     * @param error Error, if any
     * @param [response] CPhone_AddPhoneToAccount_Response
     */
    type ConfirmAddPhoneToAccountCallback = (error: (Error|null), response?: CPhone_AddPhoneToAccount_Response) => void;

    /**
     * Callback as used by {@link Phone#isAccountWaitingForEmailConfirmation}.
     * @param error Error, if any
     * @param [response] CPhone_IsAccountWaitingForEmailConfirmation_Response
     */
    type IsAccountWaitingForEmailConfirmationCallback = (error: (Error|null), response?: CPhone_IsAccountWaitingForEmailConfirmation_Response) => void;

    /**
     * Callback as used by {@link Phone#sendPhoneVerificationCode}.
     * @param error Error, if any
     * @param [response] CPhone_SendPhoneVerificationCode_Response
     */
    type SendPhoneVerificationCodeCallback = (error: (Error|null), response?: CPhone_SendPhoneVerificationCode_Response) => void;

    /**
     * Callback as used by {@link Phone#setAccountPhoneNumber}.
     * @param error Error, if any
     * @param [response] CPhone_SetAccountPhoneNumber_Response
     */
    type SetAccountPhoneNumberCallback = (error: (Error|null), response?: CPhone_SetAccountPhoneNumber_Response) => void;

    /**
     * Callback as used by {@link Phone#verifyAccountPhoneWithCode}.
     * @param error Error, if any
     * @param [response] CPhone_VerifyAccountPhoneWithCode_Response
     */
    type VerifyAccountPhoneWithCodeCallback = (error: (Error|null), response?: CPhone_VerifyAccountPhoneWithCode_Response) => void;
}
