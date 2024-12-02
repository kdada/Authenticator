import * as $protobuf from "@ohos/protobufjs";
import Long = require("long");
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
