import * as $protobuf from "@ohos/protobufjs";
import Long = require("long");
/** Properties of a MigrationPayload. */
export interface IMigrationPayload {

    /** MigrationPayload otpParameters */
    otpParameters?: (MigrationPayload.IOtpParameters[]|null);

    /** MigrationPayload version */
    version?: (number|null);

    /** MigrationPayload batchSize */
    batchSize?: (number|null);

    /** MigrationPayload batchIndex */
    batchIndex?: (number|null);

    /** MigrationPayload batchId */
    batchId?: (number|null);
}

/** Represents a MigrationPayload. */
export class MigrationPayload implements IMigrationPayload {

    /**
     * Constructs a new MigrationPayload.
     * @param [properties] Properties to set
     */
    constructor(properties?: IMigrationPayload);

    /** MigrationPayload otpParameters. */
    public otpParameters: MigrationPayload.IOtpParameters[];

    /** MigrationPayload version. */
    public version: number;

    /** MigrationPayload batchSize. */
    public batchSize: number;

    /** MigrationPayload batchIndex. */
    public batchIndex: number;

    /** MigrationPayload batchId. */
    public batchId: number;

    /**
     * Creates a new MigrationPayload instance using the specified properties.
     * @param [properties] Properties to set
     * @returns MigrationPayload instance
     */
    public static create(properties?: IMigrationPayload): MigrationPayload;

    /**
     * Encodes the specified MigrationPayload message. Does not implicitly {@link MigrationPayload.verify|verify} messages.
     * @param message MigrationPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IMigrationPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified MigrationPayload message, length delimited. Does not implicitly {@link MigrationPayload.verify|verify} messages.
     * @param message MigrationPayload message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IMigrationPayload, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a MigrationPayload message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns MigrationPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MigrationPayload;

    /**
     * Decodes a MigrationPayload message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns MigrationPayload
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MigrationPayload;

    /**
     * Verifies a MigrationPayload message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|null);

    /**
     * Creates a MigrationPayload message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns MigrationPayload
     */
    public static fromObject(object: { [k: string]: any }): MigrationPayload;

    /**
     * Creates a plain object from a MigrationPayload message. Also converts values to other types if specified.
     * @param message MigrationPayload
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: MigrationPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this MigrationPayload to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };

    /**
     * Gets the default type url for MigrationPayload
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}

export namespace MigrationPayload {

    /** Algorithm enum. */
    enum Algorithm {
        ALGORITHM_UNSPECIFIED = 0,
        ALGORITHM_SHA1 = 1,
        ALGORITHM_SHA256 = 2,
        ALGORITHM_SHA512 = 3,
        ALGORITHM_MD5 = 4
    }

    /** DigitCount enum. */
    enum DigitCount {
        DIGIT_COUNT_UNSPECIFIED = 0,
        DIGIT_COUNT_SIX = 1,
        DIGIT_COUNT_EIGHT = 2
    }

    /** OtpType enum. */
    enum OtpType {
        OTP_TYPE_UNSPECIFIED = 0,
        OTP_TYPE_HOTP = 1,
        OTP_TYPE_TOTP = 2
    }

    /** Properties of an OtpParameters. */
    interface IOtpParameters {

        /** OtpParameters secret */
        secret?: (Uint8Array|null);

        /** OtpParameters name */
        name?: (string|null);

        /** OtpParameters issuer */
        issuer?: (string|null);

        /** OtpParameters algorithm */
        algorithm?: (MigrationPayload.Algorithm|null);

        /** OtpParameters digits */
        digits?: (MigrationPayload.DigitCount|null);

        /** OtpParameters type */
        type?: (MigrationPayload.OtpType|null);

        /** OtpParameters counter */
        counter?: (number|Long|null);
    }

    /** Represents an OtpParameters. */
    class OtpParameters implements IOtpParameters {

        /**
         * Constructs a new OtpParameters.
         * @param [properties] Properties to set
         */
        constructor(properties?: MigrationPayload.IOtpParameters);

        /** OtpParameters secret. */
        public secret: Uint8Array;

        /** OtpParameters name. */
        public name: string;

        /** OtpParameters issuer. */
        public issuer: string;

        /** OtpParameters algorithm. */
        public algorithm: MigrationPayload.Algorithm;

        /** OtpParameters digits. */
        public digits: MigrationPayload.DigitCount;

        /** OtpParameters type. */
        public type: MigrationPayload.OtpType;

        /** OtpParameters counter. */
        public counter: (number|Long);

        /**
         * Creates a new OtpParameters instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OtpParameters instance
         */
        public static create(properties?: MigrationPayload.IOtpParameters): MigrationPayload.OtpParameters;

        /**
         * Encodes the specified OtpParameters message. Does not implicitly {@link MigrationPayload.OtpParameters.verify|verify} messages.
         * @param message OtpParameters message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: MigrationPayload.IOtpParameters, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OtpParameters message, length delimited. Does not implicitly {@link MigrationPayload.OtpParameters.verify|verify} messages.
         * @param message OtpParameters message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: MigrationPayload.IOtpParameters, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OtpParameters message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OtpParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): MigrationPayload.OtpParameters;

        /**
         * Decodes an OtpParameters message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OtpParameters
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): MigrationPayload.OtpParameters;

        /**
         * Verifies an OtpParameters message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OtpParameters message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OtpParameters
         */
        public static fromObject(object: { [k: string]: any }): MigrationPayload.OtpParameters;

        /**
         * Creates a plain object from an OtpParameters message. Also converts values to other types if specified.
         * @param message OtpParameters
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: MigrationPayload.OtpParameters, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OtpParameters to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };

        /**
         * Gets the default type url for OtpParameters
         * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns The default type url
         */
        public static getTypeUrl(typeUrlPrefix?: string): string;
    }
}
