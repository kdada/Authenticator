/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import { index } from "@ohos/protobufjs"; const $protobuf = index;
import Long from 'long';
$protobuf.util.Long=Long
$protobuf.configure()

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const CPhone_AddPhoneToAccount_Response = $root.CPhone_AddPhoneToAccount_Response = (() => {

    /**
     * Properties of a CPhone_AddPhoneToAccount_Response.
     * @exports ICPhone_AddPhoneToAccount_Response
     * @interface ICPhone_AddPhoneToAccount_Response
     * @property {boolean|null} [success] CPhone_AddPhoneToAccount_Response success
     * @property {number|null} [phoneNumberType] CPhone_AddPhoneToAccount_Response phoneNumberType
     */

    /**
     * Constructs a new CPhone_AddPhoneToAccount_Response.
     * @exports CPhone_AddPhoneToAccount_Response
     * @classdesc Represents a CPhone_AddPhoneToAccount_Response.
     * @implements ICPhone_AddPhoneToAccount_Response
     * @constructor
     * @param {ICPhone_AddPhoneToAccount_Response=} [properties] Properties to set
     */
    function CPhone_AddPhoneToAccount_Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CPhone_AddPhoneToAccount_Response success.
     * @member {boolean} success
     * @memberof CPhone_AddPhoneToAccount_Response
     * @instance
     */
    CPhone_AddPhoneToAccount_Response.prototype.success = false;

    /**
     * CPhone_AddPhoneToAccount_Response phoneNumberType.
     * @member {number} phoneNumberType
     * @memberof CPhone_AddPhoneToAccount_Response
     * @instance
     */
    CPhone_AddPhoneToAccount_Response.prototype.phoneNumberType = 0;

    /**
     * Creates a new CPhone_AddPhoneToAccount_Response instance using the specified properties.
     * @function create
     * @memberof CPhone_AddPhoneToAccount_Response
     * @static
     * @param {ICPhone_AddPhoneToAccount_Response=} [properties] Properties to set
     * @returns {CPhone_AddPhoneToAccount_Response} CPhone_AddPhoneToAccount_Response instance
     */
    CPhone_AddPhoneToAccount_Response.create = function create(properties) {
        return new CPhone_AddPhoneToAccount_Response(properties);
    };

    /**
     * Encodes the specified CPhone_AddPhoneToAccount_Response message. Does not implicitly {@link CPhone_AddPhoneToAccount_Response.verify|verify} messages.
     * @function encode
     * @memberof CPhone_AddPhoneToAccount_Response
     * @static
     * @param {ICPhone_AddPhoneToAccount_Response} message CPhone_AddPhoneToAccount_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_AddPhoneToAccount_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.phoneNumberType != null && Object.hasOwnProperty.call(message, "phoneNumberType"))
            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.phoneNumberType);
        return writer;
    };

    /**
     * Encodes the specified CPhone_AddPhoneToAccount_Response message, length delimited. Does not implicitly {@link CPhone_AddPhoneToAccount_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CPhone_AddPhoneToAccount_Response
     * @static
     * @param {ICPhone_AddPhoneToAccount_Response} message CPhone_AddPhoneToAccount_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_AddPhoneToAccount_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CPhone_AddPhoneToAccount_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CPhone_AddPhoneToAccount_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CPhone_AddPhoneToAccount_Response} CPhone_AddPhoneToAccount_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_AddPhoneToAccount_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPhone_AddPhoneToAccount_Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.phoneNumberType = reader.int32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CPhone_AddPhoneToAccount_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CPhone_AddPhoneToAccount_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CPhone_AddPhoneToAccount_Response} CPhone_AddPhoneToAccount_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_AddPhoneToAccount_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CPhone_AddPhoneToAccount_Response message.
     * @function verify
     * @memberof CPhone_AddPhoneToAccount_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CPhone_AddPhoneToAccount_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.phoneNumberType != null && message.hasOwnProperty("phoneNumberType"))
            if (!$util.isInteger(message.phoneNumberType))
                return "phoneNumberType: integer expected";
        return null;
    };

    /**
     * Creates a CPhone_AddPhoneToAccount_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CPhone_AddPhoneToAccount_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CPhone_AddPhoneToAccount_Response} CPhone_AddPhoneToAccount_Response
     */
    CPhone_AddPhoneToAccount_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CPhone_AddPhoneToAccount_Response)
            return object;
        let message = new $root.CPhone_AddPhoneToAccount_Response();
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.phoneNumberType != null)
            message.phoneNumberType = object.phoneNumberType | 0;
        return message;
    };

    /**
     * Creates a plain object from a CPhone_AddPhoneToAccount_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CPhone_AddPhoneToAccount_Response
     * @static
     * @param {CPhone_AddPhoneToAccount_Response} message CPhone_AddPhoneToAccount_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CPhone_AddPhoneToAccount_Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.success = false;
            object.phoneNumberType = 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.phoneNumberType != null && message.hasOwnProperty("phoneNumberType"))
            object.phoneNumberType = message.phoneNumberType;
        return object;
    };

    /**
     * Converts this CPhone_AddPhoneToAccount_Response to JSON.
     * @function toJSON
     * @memberof CPhone_AddPhoneToAccount_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CPhone_AddPhoneToAccount_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CPhone_AddPhoneToAccount_Response
     * @function getTypeUrl
     * @memberof CPhone_AddPhoneToAccount_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CPhone_AddPhoneToAccount_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CPhone_AddPhoneToAccount_Response";
    };

    return CPhone_AddPhoneToAccount_Response;
})();

export const CPhone_ConfirmAddPhoneToAccount_Request = $root.CPhone_ConfirmAddPhoneToAccount_Request = (() => {

    /**
     * Properties of a CPhone_ConfirmAddPhoneToAccount_Request.
     * @exports ICPhone_ConfirmAddPhoneToAccount_Request
     * @interface ICPhone_ConfirmAddPhoneToAccount_Request
     * @property {number|Long|null} [steamid] CPhone_ConfirmAddPhoneToAccount_Request steamid
     * @property {string|null} [stoken] CPhone_ConfirmAddPhoneToAccount_Request stoken
     */

    /**
     * Constructs a new CPhone_ConfirmAddPhoneToAccount_Request.
     * @exports CPhone_ConfirmAddPhoneToAccount_Request
     * @classdesc Represents a CPhone_ConfirmAddPhoneToAccount_Request.
     * @implements ICPhone_ConfirmAddPhoneToAccount_Request
     * @constructor
     * @param {ICPhone_ConfirmAddPhoneToAccount_Request=} [properties] Properties to set
     */
    function CPhone_ConfirmAddPhoneToAccount_Request(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CPhone_ConfirmAddPhoneToAccount_Request steamid.
     * @member {number|Long} steamid
     * @memberof CPhone_ConfirmAddPhoneToAccount_Request
     * @instance
     */
    CPhone_ConfirmAddPhoneToAccount_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CPhone_ConfirmAddPhoneToAccount_Request stoken.
     * @member {string} stoken
     * @memberof CPhone_ConfirmAddPhoneToAccount_Request
     * @instance
     */
    CPhone_ConfirmAddPhoneToAccount_Request.prototype.stoken = "";

    /**
     * Creates a new CPhone_ConfirmAddPhoneToAccount_Request instance using the specified properties.
     * @function create
     * @memberof CPhone_ConfirmAddPhoneToAccount_Request
     * @static
     * @param {ICPhone_ConfirmAddPhoneToAccount_Request=} [properties] Properties to set
     * @returns {CPhone_ConfirmAddPhoneToAccount_Request} CPhone_ConfirmAddPhoneToAccount_Request instance
     */
    CPhone_ConfirmAddPhoneToAccount_Request.create = function create(properties) {
        return new CPhone_ConfirmAddPhoneToAccount_Request(properties);
    };

    /**
     * Encodes the specified CPhone_ConfirmAddPhoneToAccount_Request message. Does not implicitly {@link CPhone_ConfirmAddPhoneToAccount_Request.verify|verify} messages.
     * @function encode
     * @memberof CPhone_ConfirmAddPhoneToAccount_Request
     * @static
     * @param {ICPhone_ConfirmAddPhoneToAccount_Request} message CPhone_ConfirmAddPhoneToAccount_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_ConfirmAddPhoneToAccount_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
        if (message.stoken != null && Object.hasOwnProperty.call(message, "stoken"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.stoken);
        return writer;
    };

    /**
     * Encodes the specified CPhone_ConfirmAddPhoneToAccount_Request message, length delimited. Does not implicitly {@link CPhone_ConfirmAddPhoneToAccount_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CPhone_ConfirmAddPhoneToAccount_Request
     * @static
     * @param {ICPhone_ConfirmAddPhoneToAccount_Request} message CPhone_ConfirmAddPhoneToAccount_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_ConfirmAddPhoneToAccount_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CPhone_ConfirmAddPhoneToAccount_Request message from the specified reader or buffer.
     * @function decode
     * @memberof CPhone_ConfirmAddPhoneToAccount_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CPhone_ConfirmAddPhoneToAccount_Request} CPhone_ConfirmAddPhoneToAccount_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_ConfirmAddPhoneToAccount_Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPhone_ConfirmAddPhoneToAccount_Request();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.steamid = reader.fixed64();
                    break;
                }
            case 2: {
                    message.stoken = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CPhone_ConfirmAddPhoneToAccount_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CPhone_ConfirmAddPhoneToAccount_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CPhone_ConfirmAddPhoneToAccount_Request} CPhone_ConfirmAddPhoneToAccount_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_ConfirmAddPhoneToAccount_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CPhone_ConfirmAddPhoneToAccount_Request message.
     * @function verify
     * @memberof CPhone_ConfirmAddPhoneToAccount_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CPhone_ConfirmAddPhoneToAccount_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                return "steamid: integer|Long expected";
        if (message.stoken != null && message.hasOwnProperty("stoken"))
            if (!$util.isString(message.stoken))
                return "stoken: string expected";
        return null;
    };

    /**
     * Creates a CPhone_ConfirmAddPhoneToAccount_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CPhone_ConfirmAddPhoneToAccount_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CPhone_ConfirmAddPhoneToAccount_Request} CPhone_ConfirmAddPhoneToAccount_Request
     */
    CPhone_ConfirmAddPhoneToAccount_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.CPhone_ConfirmAddPhoneToAccount_Request)
            return object;
        let message = new $root.CPhone_ConfirmAddPhoneToAccount_Request();
        if (object.steamid != null)
            if ($util.Long)
                (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
            else if (typeof object.steamid === "string")
                message.steamid = parseInt(object.steamid, 10);
            else if (typeof object.steamid === "number")
                message.steamid = object.steamid;
            else if (typeof object.steamid === "object")
                message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
        if (object.stoken != null)
            message.stoken = String(object.stoken);
        return message;
    };

    /**
     * Creates a plain object from a CPhone_ConfirmAddPhoneToAccount_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CPhone_ConfirmAddPhoneToAccount_Request
     * @static
     * @param {CPhone_ConfirmAddPhoneToAccount_Request} message CPhone_ConfirmAddPhoneToAccount_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CPhone_ConfirmAddPhoneToAccount_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.steamid = options.longs === String ? "0" : 0;
            object.stoken = "";
        }
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (typeof message.steamid === "number")
                object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
            else
                object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
        if (message.stoken != null && message.hasOwnProperty("stoken"))
            object.stoken = message.stoken;
        return object;
    };

    /**
     * Converts this CPhone_ConfirmAddPhoneToAccount_Request to JSON.
     * @function toJSON
     * @memberof CPhone_ConfirmAddPhoneToAccount_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CPhone_ConfirmAddPhoneToAccount_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CPhone_ConfirmAddPhoneToAccount_Request
     * @function getTypeUrl
     * @memberof CPhone_ConfirmAddPhoneToAccount_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CPhone_ConfirmAddPhoneToAccount_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CPhone_ConfirmAddPhoneToAccount_Request";
    };

    return CPhone_ConfirmAddPhoneToAccount_Request;
})();

export const CPhone_IsAccountWaitingForEmailConfirmation_Request = $root.CPhone_IsAccountWaitingForEmailConfirmation_Request = (() => {

    /**
     * Properties of a CPhone_IsAccountWaitingForEmailConfirmation_Request.
     * @exports ICPhone_IsAccountWaitingForEmailConfirmation_Request
     * @interface ICPhone_IsAccountWaitingForEmailConfirmation_Request
     */

    /**
     * Constructs a new CPhone_IsAccountWaitingForEmailConfirmation_Request.
     * @exports CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @classdesc Represents a CPhone_IsAccountWaitingForEmailConfirmation_Request.
     * @implements ICPhone_IsAccountWaitingForEmailConfirmation_Request
     * @constructor
     * @param {ICPhone_IsAccountWaitingForEmailConfirmation_Request=} [properties] Properties to set
     */
    function CPhone_IsAccountWaitingForEmailConfirmation_Request(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new CPhone_IsAccountWaitingForEmailConfirmation_Request instance using the specified properties.
     * @function create
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @static
     * @param {ICPhone_IsAccountWaitingForEmailConfirmation_Request=} [properties] Properties to set
     * @returns {CPhone_IsAccountWaitingForEmailConfirmation_Request} CPhone_IsAccountWaitingForEmailConfirmation_Request instance
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Request.create = function create(properties) {
        return new CPhone_IsAccountWaitingForEmailConfirmation_Request(properties);
    };

    /**
     * Encodes the specified CPhone_IsAccountWaitingForEmailConfirmation_Request message. Does not implicitly {@link CPhone_IsAccountWaitingForEmailConfirmation_Request.verify|verify} messages.
     * @function encode
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @static
     * @param {ICPhone_IsAccountWaitingForEmailConfirmation_Request} message CPhone_IsAccountWaitingForEmailConfirmation_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified CPhone_IsAccountWaitingForEmailConfirmation_Request message, length delimited. Does not implicitly {@link CPhone_IsAccountWaitingForEmailConfirmation_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @static
     * @param {ICPhone_IsAccountWaitingForEmailConfirmation_Request} message CPhone_IsAccountWaitingForEmailConfirmation_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CPhone_IsAccountWaitingForEmailConfirmation_Request message from the specified reader or buffer.
     * @function decode
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CPhone_IsAccountWaitingForEmailConfirmation_Request} CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPhone_IsAccountWaitingForEmailConfirmation_Request();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CPhone_IsAccountWaitingForEmailConfirmation_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CPhone_IsAccountWaitingForEmailConfirmation_Request} CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CPhone_IsAccountWaitingForEmailConfirmation_Request message.
     * @function verify
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a CPhone_IsAccountWaitingForEmailConfirmation_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CPhone_IsAccountWaitingForEmailConfirmation_Request} CPhone_IsAccountWaitingForEmailConfirmation_Request
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.CPhone_IsAccountWaitingForEmailConfirmation_Request)
            return object;
        return new $root.CPhone_IsAccountWaitingForEmailConfirmation_Request();
    };

    /**
     * Creates a plain object from a CPhone_IsAccountWaitingForEmailConfirmation_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @static
     * @param {CPhone_IsAccountWaitingForEmailConfirmation_Request} message CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this CPhone_IsAccountWaitingForEmailConfirmation_Request to JSON.
     * @function toJSON
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @function getTypeUrl
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CPhone_IsAccountWaitingForEmailConfirmation_Request";
    };

    return CPhone_IsAccountWaitingForEmailConfirmation_Request;
})();

export const CPhone_IsAccountWaitingForEmailConfirmation_Response = $root.CPhone_IsAccountWaitingForEmailConfirmation_Response = (() => {

    /**
     * Properties of a CPhone_IsAccountWaitingForEmailConfirmation_Response.
     * @exports ICPhone_IsAccountWaitingForEmailConfirmation_Response
     * @interface ICPhone_IsAccountWaitingForEmailConfirmation_Response
     * @property {boolean|null} [awaitingEmailConfirmation] CPhone_IsAccountWaitingForEmailConfirmation_Response awaitingEmailConfirmation
     * @property {number|null} [secondsToWait] CPhone_IsAccountWaitingForEmailConfirmation_Response secondsToWait
     */

    /**
     * Constructs a new CPhone_IsAccountWaitingForEmailConfirmation_Response.
     * @exports CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @classdesc Represents a CPhone_IsAccountWaitingForEmailConfirmation_Response.
     * @implements ICPhone_IsAccountWaitingForEmailConfirmation_Response
     * @constructor
     * @param {ICPhone_IsAccountWaitingForEmailConfirmation_Response=} [properties] Properties to set
     */
    function CPhone_IsAccountWaitingForEmailConfirmation_Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CPhone_IsAccountWaitingForEmailConfirmation_Response awaitingEmailConfirmation.
     * @member {boolean} awaitingEmailConfirmation
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @instance
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Response.prototype.awaitingEmailConfirmation = false;

    /**
     * CPhone_IsAccountWaitingForEmailConfirmation_Response secondsToWait.
     * @member {number} secondsToWait
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @instance
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Response.prototype.secondsToWait = 0;

    /**
     * Creates a new CPhone_IsAccountWaitingForEmailConfirmation_Response instance using the specified properties.
     * @function create
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @static
     * @param {ICPhone_IsAccountWaitingForEmailConfirmation_Response=} [properties] Properties to set
     * @returns {CPhone_IsAccountWaitingForEmailConfirmation_Response} CPhone_IsAccountWaitingForEmailConfirmation_Response instance
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Response.create = function create(properties) {
        return new CPhone_IsAccountWaitingForEmailConfirmation_Response(properties);
    };

    /**
     * Encodes the specified CPhone_IsAccountWaitingForEmailConfirmation_Response message. Does not implicitly {@link CPhone_IsAccountWaitingForEmailConfirmation_Response.verify|verify} messages.
     * @function encode
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @static
     * @param {ICPhone_IsAccountWaitingForEmailConfirmation_Response} message CPhone_IsAccountWaitingForEmailConfirmation_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.awaitingEmailConfirmation != null && Object.hasOwnProperty.call(message, "awaitingEmailConfirmation"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.awaitingEmailConfirmation);
        if (message.secondsToWait != null && Object.hasOwnProperty.call(message, "secondsToWait"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.secondsToWait);
        return writer;
    };

    /**
     * Encodes the specified CPhone_IsAccountWaitingForEmailConfirmation_Response message, length delimited. Does not implicitly {@link CPhone_IsAccountWaitingForEmailConfirmation_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @static
     * @param {ICPhone_IsAccountWaitingForEmailConfirmation_Response} message CPhone_IsAccountWaitingForEmailConfirmation_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CPhone_IsAccountWaitingForEmailConfirmation_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CPhone_IsAccountWaitingForEmailConfirmation_Response} CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPhone_IsAccountWaitingForEmailConfirmation_Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.awaitingEmailConfirmation = reader.bool();
                    break;
                }
            case 2: {
                    message.secondsToWait = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CPhone_IsAccountWaitingForEmailConfirmation_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CPhone_IsAccountWaitingForEmailConfirmation_Response} CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CPhone_IsAccountWaitingForEmailConfirmation_Response message.
     * @function verify
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.awaitingEmailConfirmation != null && message.hasOwnProperty("awaitingEmailConfirmation"))
            if (typeof message.awaitingEmailConfirmation !== "boolean")
                return "awaitingEmailConfirmation: boolean expected";
        if (message.secondsToWait != null && message.hasOwnProperty("secondsToWait"))
            if (!$util.isInteger(message.secondsToWait))
                return "secondsToWait: integer expected";
        return null;
    };

    /**
     * Creates a CPhone_IsAccountWaitingForEmailConfirmation_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CPhone_IsAccountWaitingForEmailConfirmation_Response} CPhone_IsAccountWaitingForEmailConfirmation_Response
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CPhone_IsAccountWaitingForEmailConfirmation_Response)
            return object;
        let message = new $root.CPhone_IsAccountWaitingForEmailConfirmation_Response();
        if (object.awaitingEmailConfirmation != null)
            message.awaitingEmailConfirmation = Boolean(object.awaitingEmailConfirmation);
        if (object.secondsToWait != null)
            message.secondsToWait = object.secondsToWait >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a CPhone_IsAccountWaitingForEmailConfirmation_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @static
     * @param {CPhone_IsAccountWaitingForEmailConfirmation_Response} message CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.awaitingEmailConfirmation = false;
            object.secondsToWait = 0;
        }
        if (message.awaitingEmailConfirmation != null && message.hasOwnProperty("awaitingEmailConfirmation"))
            object.awaitingEmailConfirmation = message.awaitingEmailConfirmation;
        if (message.secondsToWait != null && message.hasOwnProperty("secondsToWait"))
            object.secondsToWait = message.secondsToWait;
        return object;
    };

    /**
     * Converts this CPhone_IsAccountWaitingForEmailConfirmation_Response to JSON.
     * @function toJSON
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @function getTypeUrl
     * @memberof CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CPhone_IsAccountWaitingForEmailConfirmation_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CPhone_IsAccountWaitingForEmailConfirmation_Response";
    };

    return CPhone_IsAccountWaitingForEmailConfirmation_Response;
})();

export const CPhone_SendPhoneVerificationCode_Request = $root.CPhone_SendPhoneVerificationCode_Request = (() => {

    /**
     * Properties of a CPhone_SendPhoneVerificationCode_Request.
     * @exports ICPhone_SendPhoneVerificationCode_Request
     * @interface ICPhone_SendPhoneVerificationCode_Request
     * @property {number|null} [language] CPhone_SendPhoneVerificationCode_Request language
     */

    /**
     * Constructs a new CPhone_SendPhoneVerificationCode_Request.
     * @exports CPhone_SendPhoneVerificationCode_Request
     * @classdesc Represents a CPhone_SendPhoneVerificationCode_Request.
     * @implements ICPhone_SendPhoneVerificationCode_Request
     * @constructor
     * @param {ICPhone_SendPhoneVerificationCode_Request=} [properties] Properties to set
     */
    function CPhone_SendPhoneVerificationCode_Request(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CPhone_SendPhoneVerificationCode_Request language.
     * @member {number} language
     * @memberof CPhone_SendPhoneVerificationCode_Request
     * @instance
     */
    CPhone_SendPhoneVerificationCode_Request.prototype.language = 0;

    /**
     * Creates a new CPhone_SendPhoneVerificationCode_Request instance using the specified properties.
     * @function create
     * @memberof CPhone_SendPhoneVerificationCode_Request
     * @static
     * @param {ICPhone_SendPhoneVerificationCode_Request=} [properties] Properties to set
     * @returns {CPhone_SendPhoneVerificationCode_Request} CPhone_SendPhoneVerificationCode_Request instance
     */
    CPhone_SendPhoneVerificationCode_Request.create = function create(properties) {
        return new CPhone_SendPhoneVerificationCode_Request(properties);
    };

    /**
     * Encodes the specified CPhone_SendPhoneVerificationCode_Request message. Does not implicitly {@link CPhone_SendPhoneVerificationCode_Request.verify|verify} messages.
     * @function encode
     * @memberof CPhone_SendPhoneVerificationCode_Request
     * @static
     * @param {ICPhone_SendPhoneVerificationCode_Request} message CPhone_SendPhoneVerificationCode_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_SendPhoneVerificationCode_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.language != null && Object.hasOwnProperty.call(message, "language"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.language);
        return writer;
    };

    /**
     * Encodes the specified CPhone_SendPhoneVerificationCode_Request message, length delimited. Does not implicitly {@link CPhone_SendPhoneVerificationCode_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CPhone_SendPhoneVerificationCode_Request
     * @static
     * @param {ICPhone_SendPhoneVerificationCode_Request} message CPhone_SendPhoneVerificationCode_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_SendPhoneVerificationCode_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CPhone_SendPhoneVerificationCode_Request message from the specified reader or buffer.
     * @function decode
     * @memberof CPhone_SendPhoneVerificationCode_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CPhone_SendPhoneVerificationCode_Request} CPhone_SendPhoneVerificationCode_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_SendPhoneVerificationCode_Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPhone_SendPhoneVerificationCode_Request();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.language = reader.uint32();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CPhone_SendPhoneVerificationCode_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CPhone_SendPhoneVerificationCode_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CPhone_SendPhoneVerificationCode_Request} CPhone_SendPhoneVerificationCode_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_SendPhoneVerificationCode_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CPhone_SendPhoneVerificationCode_Request message.
     * @function verify
     * @memberof CPhone_SendPhoneVerificationCode_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CPhone_SendPhoneVerificationCode_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.language != null && message.hasOwnProperty("language"))
            if (!$util.isInteger(message.language))
                return "language: integer expected";
        return null;
    };

    /**
     * Creates a CPhone_SendPhoneVerificationCode_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CPhone_SendPhoneVerificationCode_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CPhone_SendPhoneVerificationCode_Request} CPhone_SendPhoneVerificationCode_Request
     */
    CPhone_SendPhoneVerificationCode_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.CPhone_SendPhoneVerificationCode_Request)
            return object;
        let message = new $root.CPhone_SendPhoneVerificationCode_Request();
        if (object.language != null)
            message.language = object.language >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a CPhone_SendPhoneVerificationCode_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CPhone_SendPhoneVerificationCode_Request
     * @static
     * @param {CPhone_SendPhoneVerificationCode_Request} message CPhone_SendPhoneVerificationCode_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CPhone_SendPhoneVerificationCode_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.language = 0;
        if (message.language != null && message.hasOwnProperty("language"))
            object.language = message.language;
        return object;
    };

    /**
     * Converts this CPhone_SendPhoneVerificationCode_Request to JSON.
     * @function toJSON
     * @memberof CPhone_SendPhoneVerificationCode_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CPhone_SendPhoneVerificationCode_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CPhone_SendPhoneVerificationCode_Request
     * @function getTypeUrl
     * @memberof CPhone_SendPhoneVerificationCode_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CPhone_SendPhoneVerificationCode_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CPhone_SendPhoneVerificationCode_Request";
    };

    return CPhone_SendPhoneVerificationCode_Request;
})();

export const CPhone_SendPhoneVerificationCode_Response = $root.CPhone_SendPhoneVerificationCode_Response = (() => {

    /**
     * Properties of a CPhone_SendPhoneVerificationCode_Response.
     * @exports ICPhone_SendPhoneVerificationCode_Response
     * @interface ICPhone_SendPhoneVerificationCode_Response
     */

    /**
     * Constructs a new CPhone_SendPhoneVerificationCode_Response.
     * @exports CPhone_SendPhoneVerificationCode_Response
     * @classdesc Represents a CPhone_SendPhoneVerificationCode_Response.
     * @implements ICPhone_SendPhoneVerificationCode_Response
     * @constructor
     * @param {ICPhone_SendPhoneVerificationCode_Response=} [properties] Properties to set
     */
    function CPhone_SendPhoneVerificationCode_Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new CPhone_SendPhoneVerificationCode_Response instance using the specified properties.
     * @function create
     * @memberof CPhone_SendPhoneVerificationCode_Response
     * @static
     * @param {ICPhone_SendPhoneVerificationCode_Response=} [properties] Properties to set
     * @returns {CPhone_SendPhoneVerificationCode_Response} CPhone_SendPhoneVerificationCode_Response instance
     */
    CPhone_SendPhoneVerificationCode_Response.create = function create(properties) {
        return new CPhone_SendPhoneVerificationCode_Response(properties);
    };

    /**
     * Encodes the specified CPhone_SendPhoneVerificationCode_Response message. Does not implicitly {@link CPhone_SendPhoneVerificationCode_Response.verify|verify} messages.
     * @function encode
     * @memberof CPhone_SendPhoneVerificationCode_Response
     * @static
     * @param {ICPhone_SendPhoneVerificationCode_Response} message CPhone_SendPhoneVerificationCode_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_SendPhoneVerificationCode_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified CPhone_SendPhoneVerificationCode_Response message, length delimited. Does not implicitly {@link CPhone_SendPhoneVerificationCode_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CPhone_SendPhoneVerificationCode_Response
     * @static
     * @param {ICPhone_SendPhoneVerificationCode_Response} message CPhone_SendPhoneVerificationCode_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_SendPhoneVerificationCode_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CPhone_SendPhoneVerificationCode_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CPhone_SendPhoneVerificationCode_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CPhone_SendPhoneVerificationCode_Response} CPhone_SendPhoneVerificationCode_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_SendPhoneVerificationCode_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPhone_SendPhoneVerificationCode_Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CPhone_SendPhoneVerificationCode_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CPhone_SendPhoneVerificationCode_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CPhone_SendPhoneVerificationCode_Response} CPhone_SendPhoneVerificationCode_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_SendPhoneVerificationCode_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CPhone_SendPhoneVerificationCode_Response message.
     * @function verify
     * @memberof CPhone_SendPhoneVerificationCode_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CPhone_SendPhoneVerificationCode_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a CPhone_SendPhoneVerificationCode_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CPhone_SendPhoneVerificationCode_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CPhone_SendPhoneVerificationCode_Response} CPhone_SendPhoneVerificationCode_Response
     */
    CPhone_SendPhoneVerificationCode_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CPhone_SendPhoneVerificationCode_Response)
            return object;
        return new $root.CPhone_SendPhoneVerificationCode_Response();
    };

    /**
     * Creates a plain object from a CPhone_SendPhoneVerificationCode_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CPhone_SendPhoneVerificationCode_Response
     * @static
     * @param {CPhone_SendPhoneVerificationCode_Response} message CPhone_SendPhoneVerificationCode_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CPhone_SendPhoneVerificationCode_Response.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this CPhone_SendPhoneVerificationCode_Response to JSON.
     * @function toJSON
     * @memberof CPhone_SendPhoneVerificationCode_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CPhone_SendPhoneVerificationCode_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CPhone_SendPhoneVerificationCode_Response
     * @function getTypeUrl
     * @memberof CPhone_SendPhoneVerificationCode_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CPhone_SendPhoneVerificationCode_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CPhone_SendPhoneVerificationCode_Response";
    };

    return CPhone_SendPhoneVerificationCode_Response;
})();

export const CPhone_SetAccountPhoneNumber_Request = $root.CPhone_SetAccountPhoneNumber_Request = (() => {

    /**
     * Properties of a CPhone_SetAccountPhoneNumber_Request.
     * @exports ICPhone_SetAccountPhoneNumber_Request
     * @interface ICPhone_SetAccountPhoneNumber_Request
     * @property {string|null} [phoneNumber] CPhone_SetAccountPhoneNumber_Request phoneNumber
     * @property {string|null} [phoneCountryCode] CPhone_SetAccountPhoneNumber_Request phoneCountryCode
     */

    /**
     * Constructs a new CPhone_SetAccountPhoneNumber_Request.
     * @exports CPhone_SetAccountPhoneNumber_Request
     * @classdesc Represents a CPhone_SetAccountPhoneNumber_Request.
     * @implements ICPhone_SetAccountPhoneNumber_Request
     * @constructor
     * @param {ICPhone_SetAccountPhoneNumber_Request=} [properties] Properties to set
     */
    function CPhone_SetAccountPhoneNumber_Request(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CPhone_SetAccountPhoneNumber_Request phoneNumber.
     * @member {string} phoneNumber
     * @memberof CPhone_SetAccountPhoneNumber_Request
     * @instance
     */
    CPhone_SetAccountPhoneNumber_Request.prototype.phoneNumber = "";

    /**
     * CPhone_SetAccountPhoneNumber_Request phoneCountryCode.
     * @member {string} phoneCountryCode
     * @memberof CPhone_SetAccountPhoneNumber_Request
     * @instance
     */
    CPhone_SetAccountPhoneNumber_Request.prototype.phoneCountryCode = "";

    /**
     * Creates a new CPhone_SetAccountPhoneNumber_Request instance using the specified properties.
     * @function create
     * @memberof CPhone_SetAccountPhoneNumber_Request
     * @static
     * @param {ICPhone_SetAccountPhoneNumber_Request=} [properties] Properties to set
     * @returns {CPhone_SetAccountPhoneNumber_Request} CPhone_SetAccountPhoneNumber_Request instance
     */
    CPhone_SetAccountPhoneNumber_Request.create = function create(properties) {
        return new CPhone_SetAccountPhoneNumber_Request(properties);
    };

    /**
     * Encodes the specified CPhone_SetAccountPhoneNumber_Request message. Does not implicitly {@link CPhone_SetAccountPhoneNumber_Request.verify|verify} messages.
     * @function encode
     * @memberof CPhone_SetAccountPhoneNumber_Request
     * @static
     * @param {ICPhone_SetAccountPhoneNumber_Request} message CPhone_SetAccountPhoneNumber_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_SetAccountPhoneNumber_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.phoneNumber != null && Object.hasOwnProperty.call(message, "phoneNumber"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.phoneNumber);
        if (message.phoneCountryCode != null && Object.hasOwnProperty.call(message, "phoneCountryCode"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.phoneCountryCode);
        return writer;
    };

    /**
     * Encodes the specified CPhone_SetAccountPhoneNumber_Request message, length delimited. Does not implicitly {@link CPhone_SetAccountPhoneNumber_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CPhone_SetAccountPhoneNumber_Request
     * @static
     * @param {ICPhone_SetAccountPhoneNumber_Request} message CPhone_SetAccountPhoneNumber_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_SetAccountPhoneNumber_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CPhone_SetAccountPhoneNumber_Request message from the specified reader or buffer.
     * @function decode
     * @memberof CPhone_SetAccountPhoneNumber_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CPhone_SetAccountPhoneNumber_Request} CPhone_SetAccountPhoneNumber_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_SetAccountPhoneNumber_Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPhone_SetAccountPhoneNumber_Request();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.phoneNumber = reader.string();
                    break;
                }
            case 2: {
                    message.phoneCountryCode = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CPhone_SetAccountPhoneNumber_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CPhone_SetAccountPhoneNumber_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CPhone_SetAccountPhoneNumber_Request} CPhone_SetAccountPhoneNumber_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_SetAccountPhoneNumber_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CPhone_SetAccountPhoneNumber_Request message.
     * @function verify
     * @memberof CPhone_SetAccountPhoneNumber_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CPhone_SetAccountPhoneNumber_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
            if (!$util.isString(message.phoneNumber))
                return "phoneNumber: string expected";
        if (message.phoneCountryCode != null && message.hasOwnProperty("phoneCountryCode"))
            if (!$util.isString(message.phoneCountryCode))
                return "phoneCountryCode: string expected";
        return null;
    };

    /**
     * Creates a CPhone_SetAccountPhoneNumber_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CPhone_SetAccountPhoneNumber_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CPhone_SetAccountPhoneNumber_Request} CPhone_SetAccountPhoneNumber_Request
     */
    CPhone_SetAccountPhoneNumber_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.CPhone_SetAccountPhoneNumber_Request)
            return object;
        let message = new $root.CPhone_SetAccountPhoneNumber_Request();
        if (object.phoneNumber != null)
            message.phoneNumber = String(object.phoneNumber);
        if (object.phoneCountryCode != null)
            message.phoneCountryCode = String(object.phoneCountryCode);
        return message;
    };

    /**
     * Creates a plain object from a CPhone_SetAccountPhoneNumber_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CPhone_SetAccountPhoneNumber_Request
     * @static
     * @param {CPhone_SetAccountPhoneNumber_Request} message CPhone_SetAccountPhoneNumber_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CPhone_SetAccountPhoneNumber_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.phoneNumber = "";
            object.phoneCountryCode = "";
        }
        if (message.phoneNumber != null && message.hasOwnProperty("phoneNumber"))
            object.phoneNumber = message.phoneNumber;
        if (message.phoneCountryCode != null && message.hasOwnProperty("phoneCountryCode"))
            object.phoneCountryCode = message.phoneCountryCode;
        return object;
    };

    /**
     * Converts this CPhone_SetAccountPhoneNumber_Request to JSON.
     * @function toJSON
     * @memberof CPhone_SetAccountPhoneNumber_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CPhone_SetAccountPhoneNumber_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CPhone_SetAccountPhoneNumber_Request
     * @function getTypeUrl
     * @memberof CPhone_SetAccountPhoneNumber_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CPhone_SetAccountPhoneNumber_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CPhone_SetAccountPhoneNumber_Request";
    };

    return CPhone_SetAccountPhoneNumber_Request;
})();

export const CPhone_SetAccountPhoneNumber_Response = $root.CPhone_SetAccountPhoneNumber_Response = (() => {

    /**
     * Properties of a CPhone_SetAccountPhoneNumber_Response.
     * @exports ICPhone_SetAccountPhoneNumber_Response
     * @interface ICPhone_SetAccountPhoneNumber_Response
     * @property {string|null} [confirmationEmailAddress] CPhone_SetAccountPhoneNumber_Response confirmationEmailAddress
     * @property {string|null} [phoneNumberFormatted] CPhone_SetAccountPhoneNumber_Response phoneNumberFormatted
     */

    /**
     * Constructs a new CPhone_SetAccountPhoneNumber_Response.
     * @exports CPhone_SetAccountPhoneNumber_Response
     * @classdesc Represents a CPhone_SetAccountPhoneNumber_Response.
     * @implements ICPhone_SetAccountPhoneNumber_Response
     * @constructor
     * @param {ICPhone_SetAccountPhoneNumber_Response=} [properties] Properties to set
     */
    function CPhone_SetAccountPhoneNumber_Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CPhone_SetAccountPhoneNumber_Response confirmationEmailAddress.
     * @member {string} confirmationEmailAddress
     * @memberof CPhone_SetAccountPhoneNumber_Response
     * @instance
     */
    CPhone_SetAccountPhoneNumber_Response.prototype.confirmationEmailAddress = "";

    /**
     * CPhone_SetAccountPhoneNumber_Response phoneNumberFormatted.
     * @member {string} phoneNumberFormatted
     * @memberof CPhone_SetAccountPhoneNumber_Response
     * @instance
     */
    CPhone_SetAccountPhoneNumber_Response.prototype.phoneNumberFormatted = "";

    /**
     * Creates a new CPhone_SetAccountPhoneNumber_Response instance using the specified properties.
     * @function create
     * @memberof CPhone_SetAccountPhoneNumber_Response
     * @static
     * @param {ICPhone_SetAccountPhoneNumber_Response=} [properties] Properties to set
     * @returns {CPhone_SetAccountPhoneNumber_Response} CPhone_SetAccountPhoneNumber_Response instance
     */
    CPhone_SetAccountPhoneNumber_Response.create = function create(properties) {
        return new CPhone_SetAccountPhoneNumber_Response(properties);
    };

    /**
     * Encodes the specified CPhone_SetAccountPhoneNumber_Response message. Does not implicitly {@link CPhone_SetAccountPhoneNumber_Response.verify|verify} messages.
     * @function encode
     * @memberof CPhone_SetAccountPhoneNumber_Response
     * @static
     * @param {ICPhone_SetAccountPhoneNumber_Response} message CPhone_SetAccountPhoneNumber_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_SetAccountPhoneNumber_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.confirmationEmailAddress != null && Object.hasOwnProperty.call(message, "confirmationEmailAddress"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.confirmationEmailAddress);
        if (message.phoneNumberFormatted != null && Object.hasOwnProperty.call(message, "phoneNumberFormatted"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.phoneNumberFormatted);
        return writer;
    };

    /**
     * Encodes the specified CPhone_SetAccountPhoneNumber_Response message, length delimited. Does not implicitly {@link CPhone_SetAccountPhoneNumber_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CPhone_SetAccountPhoneNumber_Response
     * @static
     * @param {ICPhone_SetAccountPhoneNumber_Response} message CPhone_SetAccountPhoneNumber_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_SetAccountPhoneNumber_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CPhone_SetAccountPhoneNumber_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CPhone_SetAccountPhoneNumber_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CPhone_SetAccountPhoneNumber_Response} CPhone_SetAccountPhoneNumber_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_SetAccountPhoneNumber_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPhone_SetAccountPhoneNumber_Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.confirmationEmailAddress = reader.string();
                    break;
                }
            case 2: {
                    message.phoneNumberFormatted = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CPhone_SetAccountPhoneNumber_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CPhone_SetAccountPhoneNumber_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CPhone_SetAccountPhoneNumber_Response} CPhone_SetAccountPhoneNumber_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_SetAccountPhoneNumber_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CPhone_SetAccountPhoneNumber_Response message.
     * @function verify
     * @memberof CPhone_SetAccountPhoneNumber_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CPhone_SetAccountPhoneNumber_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.confirmationEmailAddress != null && message.hasOwnProperty("confirmationEmailAddress"))
            if (!$util.isString(message.confirmationEmailAddress))
                return "confirmationEmailAddress: string expected";
        if (message.phoneNumberFormatted != null && message.hasOwnProperty("phoneNumberFormatted"))
            if (!$util.isString(message.phoneNumberFormatted))
                return "phoneNumberFormatted: string expected";
        return null;
    };

    /**
     * Creates a CPhone_SetAccountPhoneNumber_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CPhone_SetAccountPhoneNumber_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CPhone_SetAccountPhoneNumber_Response} CPhone_SetAccountPhoneNumber_Response
     */
    CPhone_SetAccountPhoneNumber_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CPhone_SetAccountPhoneNumber_Response)
            return object;
        let message = new $root.CPhone_SetAccountPhoneNumber_Response();
        if (object.confirmationEmailAddress != null)
            message.confirmationEmailAddress = String(object.confirmationEmailAddress);
        if (object.phoneNumberFormatted != null)
            message.phoneNumberFormatted = String(object.phoneNumberFormatted);
        return message;
    };

    /**
     * Creates a plain object from a CPhone_SetAccountPhoneNumber_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CPhone_SetAccountPhoneNumber_Response
     * @static
     * @param {CPhone_SetAccountPhoneNumber_Response} message CPhone_SetAccountPhoneNumber_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CPhone_SetAccountPhoneNumber_Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.confirmationEmailAddress = "";
            object.phoneNumberFormatted = "";
        }
        if (message.confirmationEmailAddress != null && message.hasOwnProperty("confirmationEmailAddress"))
            object.confirmationEmailAddress = message.confirmationEmailAddress;
        if (message.phoneNumberFormatted != null && message.hasOwnProperty("phoneNumberFormatted"))
            object.phoneNumberFormatted = message.phoneNumberFormatted;
        return object;
    };

    /**
     * Converts this CPhone_SetAccountPhoneNumber_Response to JSON.
     * @function toJSON
     * @memberof CPhone_SetAccountPhoneNumber_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CPhone_SetAccountPhoneNumber_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CPhone_SetAccountPhoneNumber_Response
     * @function getTypeUrl
     * @memberof CPhone_SetAccountPhoneNumber_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CPhone_SetAccountPhoneNumber_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CPhone_SetAccountPhoneNumber_Response";
    };

    return CPhone_SetAccountPhoneNumber_Response;
})();

export const CPhone_VerifyAccountPhoneWithCode_Request = $root.CPhone_VerifyAccountPhoneWithCode_Request = (() => {

    /**
     * Properties of a CPhone_VerifyAccountPhoneWithCode_Request.
     * @exports ICPhone_VerifyAccountPhoneWithCode_Request
     * @interface ICPhone_VerifyAccountPhoneWithCode_Request
     * @property {string|null} [code] CPhone_VerifyAccountPhoneWithCode_Request code
     */

    /**
     * Constructs a new CPhone_VerifyAccountPhoneWithCode_Request.
     * @exports CPhone_VerifyAccountPhoneWithCode_Request
     * @classdesc Represents a CPhone_VerifyAccountPhoneWithCode_Request.
     * @implements ICPhone_VerifyAccountPhoneWithCode_Request
     * @constructor
     * @param {ICPhone_VerifyAccountPhoneWithCode_Request=} [properties] Properties to set
     */
    function CPhone_VerifyAccountPhoneWithCode_Request(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CPhone_VerifyAccountPhoneWithCode_Request code.
     * @member {string} code
     * @memberof CPhone_VerifyAccountPhoneWithCode_Request
     * @instance
     */
    CPhone_VerifyAccountPhoneWithCode_Request.prototype.code = "";

    /**
     * Creates a new CPhone_VerifyAccountPhoneWithCode_Request instance using the specified properties.
     * @function create
     * @memberof CPhone_VerifyAccountPhoneWithCode_Request
     * @static
     * @param {ICPhone_VerifyAccountPhoneWithCode_Request=} [properties] Properties to set
     * @returns {CPhone_VerifyAccountPhoneWithCode_Request} CPhone_VerifyAccountPhoneWithCode_Request instance
     */
    CPhone_VerifyAccountPhoneWithCode_Request.create = function create(properties) {
        return new CPhone_VerifyAccountPhoneWithCode_Request(properties);
    };

    /**
     * Encodes the specified CPhone_VerifyAccountPhoneWithCode_Request message. Does not implicitly {@link CPhone_VerifyAccountPhoneWithCode_Request.verify|verify} messages.
     * @function encode
     * @memberof CPhone_VerifyAccountPhoneWithCode_Request
     * @static
     * @param {ICPhone_VerifyAccountPhoneWithCode_Request} message CPhone_VerifyAccountPhoneWithCode_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_VerifyAccountPhoneWithCode_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
        return writer;
    };

    /**
     * Encodes the specified CPhone_VerifyAccountPhoneWithCode_Request message, length delimited. Does not implicitly {@link CPhone_VerifyAccountPhoneWithCode_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CPhone_VerifyAccountPhoneWithCode_Request
     * @static
     * @param {ICPhone_VerifyAccountPhoneWithCode_Request} message CPhone_VerifyAccountPhoneWithCode_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_VerifyAccountPhoneWithCode_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CPhone_VerifyAccountPhoneWithCode_Request message from the specified reader or buffer.
     * @function decode
     * @memberof CPhone_VerifyAccountPhoneWithCode_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CPhone_VerifyAccountPhoneWithCode_Request} CPhone_VerifyAccountPhoneWithCode_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_VerifyAccountPhoneWithCode_Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPhone_VerifyAccountPhoneWithCode_Request();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.code = reader.string();
                    break;
                }
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CPhone_VerifyAccountPhoneWithCode_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CPhone_VerifyAccountPhoneWithCode_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CPhone_VerifyAccountPhoneWithCode_Request} CPhone_VerifyAccountPhoneWithCode_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_VerifyAccountPhoneWithCode_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CPhone_VerifyAccountPhoneWithCode_Request message.
     * @function verify
     * @memberof CPhone_VerifyAccountPhoneWithCode_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CPhone_VerifyAccountPhoneWithCode_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.code != null && message.hasOwnProperty("code"))
            if (!$util.isString(message.code))
                return "code: string expected";
        return null;
    };

    /**
     * Creates a CPhone_VerifyAccountPhoneWithCode_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CPhone_VerifyAccountPhoneWithCode_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CPhone_VerifyAccountPhoneWithCode_Request} CPhone_VerifyAccountPhoneWithCode_Request
     */
    CPhone_VerifyAccountPhoneWithCode_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.CPhone_VerifyAccountPhoneWithCode_Request)
            return object;
        let message = new $root.CPhone_VerifyAccountPhoneWithCode_Request();
        if (object.code != null)
            message.code = String(object.code);
        return message;
    };

    /**
     * Creates a plain object from a CPhone_VerifyAccountPhoneWithCode_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CPhone_VerifyAccountPhoneWithCode_Request
     * @static
     * @param {CPhone_VerifyAccountPhoneWithCode_Request} message CPhone_VerifyAccountPhoneWithCode_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CPhone_VerifyAccountPhoneWithCode_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.code = "";
        if (message.code != null && message.hasOwnProperty("code"))
            object.code = message.code;
        return object;
    };

    /**
     * Converts this CPhone_VerifyAccountPhoneWithCode_Request to JSON.
     * @function toJSON
     * @memberof CPhone_VerifyAccountPhoneWithCode_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CPhone_VerifyAccountPhoneWithCode_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CPhone_VerifyAccountPhoneWithCode_Request
     * @function getTypeUrl
     * @memberof CPhone_VerifyAccountPhoneWithCode_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CPhone_VerifyAccountPhoneWithCode_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CPhone_VerifyAccountPhoneWithCode_Request";
    };

    return CPhone_VerifyAccountPhoneWithCode_Request;
})();

export const CPhone_VerifyAccountPhoneWithCode_Response = $root.CPhone_VerifyAccountPhoneWithCode_Response = (() => {

    /**
     * Properties of a CPhone_VerifyAccountPhoneWithCode_Response.
     * @exports ICPhone_VerifyAccountPhoneWithCode_Response
     * @interface ICPhone_VerifyAccountPhoneWithCode_Response
     */

    /**
     * Constructs a new CPhone_VerifyAccountPhoneWithCode_Response.
     * @exports CPhone_VerifyAccountPhoneWithCode_Response
     * @classdesc Represents a CPhone_VerifyAccountPhoneWithCode_Response.
     * @implements ICPhone_VerifyAccountPhoneWithCode_Response
     * @constructor
     * @param {ICPhone_VerifyAccountPhoneWithCode_Response=} [properties] Properties to set
     */
    function CPhone_VerifyAccountPhoneWithCode_Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new CPhone_VerifyAccountPhoneWithCode_Response instance using the specified properties.
     * @function create
     * @memberof CPhone_VerifyAccountPhoneWithCode_Response
     * @static
     * @param {ICPhone_VerifyAccountPhoneWithCode_Response=} [properties] Properties to set
     * @returns {CPhone_VerifyAccountPhoneWithCode_Response} CPhone_VerifyAccountPhoneWithCode_Response instance
     */
    CPhone_VerifyAccountPhoneWithCode_Response.create = function create(properties) {
        return new CPhone_VerifyAccountPhoneWithCode_Response(properties);
    };

    /**
     * Encodes the specified CPhone_VerifyAccountPhoneWithCode_Response message. Does not implicitly {@link CPhone_VerifyAccountPhoneWithCode_Response.verify|verify} messages.
     * @function encode
     * @memberof CPhone_VerifyAccountPhoneWithCode_Response
     * @static
     * @param {ICPhone_VerifyAccountPhoneWithCode_Response} message CPhone_VerifyAccountPhoneWithCode_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_VerifyAccountPhoneWithCode_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified CPhone_VerifyAccountPhoneWithCode_Response message, length delimited. Does not implicitly {@link CPhone_VerifyAccountPhoneWithCode_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CPhone_VerifyAccountPhoneWithCode_Response
     * @static
     * @param {ICPhone_VerifyAccountPhoneWithCode_Response} message CPhone_VerifyAccountPhoneWithCode_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CPhone_VerifyAccountPhoneWithCode_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CPhone_VerifyAccountPhoneWithCode_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CPhone_VerifyAccountPhoneWithCode_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CPhone_VerifyAccountPhoneWithCode_Response} CPhone_VerifyAccountPhoneWithCode_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_VerifyAccountPhoneWithCode_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CPhone_VerifyAccountPhoneWithCode_Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            default:
                reader.skipType(tag & 7);
                break;
            }
        }
        return message;
    };

    /**
     * Decodes a CPhone_VerifyAccountPhoneWithCode_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CPhone_VerifyAccountPhoneWithCode_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CPhone_VerifyAccountPhoneWithCode_Response} CPhone_VerifyAccountPhoneWithCode_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CPhone_VerifyAccountPhoneWithCode_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CPhone_VerifyAccountPhoneWithCode_Response message.
     * @function verify
     * @memberof CPhone_VerifyAccountPhoneWithCode_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CPhone_VerifyAccountPhoneWithCode_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a CPhone_VerifyAccountPhoneWithCode_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CPhone_VerifyAccountPhoneWithCode_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CPhone_VerifyAccountPhoneWithCode_Response} CPhone_VerifyAccountPhoneWithCode_Response
     */
    CPhone_VerifyAccountPhoneWithCode_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CPhone_VerifyAccountPhoneWithCode_Response)
            return object;
        return new $root.CPhone_VerifyAccountPhoneWithCode_Response();
    };

    /**
     * Creates a plain object from a CPhone_VerifyAccountPhoneWithCode_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CPhone_VerifyAccountPhoneWithCode_Response
     * @static
     * @param {CPhone_VerifyAccountPhoneWithCode_Response} message CPhone_VerifyAccountPhoneWithCode_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CPhone_VerifyAccountPhoneWithCode_Response.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this CPhone_VerifyAccountPhoneWithCode_Response to JSON.
     * @function toJSON
     * @memberof CPhone_VerifyAccountPhoneWithCode_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CPhone_VerifyAccountPhoneWithCode_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CPhone_VerifyAccountPhoneWithCode_Response
     * @function getTypeUrl
     * @memberof CPhone_VerifyAccountPhoneWithCode_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CPhone_VerifyAccountPhoneWithCode_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CPhone_VerifyAccountPhoneWithCode_Response";
    };

    return CPhone_VerifyAccountPhoneWithCode_Response;
})();

export const Phone = $root.Phone = (() => {

    /**
     * Constructs a new Phone service.
     * @exports Phone
     * @classdesc Represents a Phone
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function Phone(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (Phone.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = Phone;

    /**
     * Creates new Phone service using the specified rpc implementation.
     * @function create
     * @memberof Phone
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {Phone} RPC service. Useful where requests and/or responses are streamed.
     */
    Phone.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link Phone#confirmAddPhoneToAccount}.
     * @memberof Phone
     * @typedef ConfirmAddPhoneToAccountCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CPhone_AddPhoneToAccount_Response} [response] CPhone_AddPhoneToAccount_Response
     */

    /**
     * Calls ConfirmAddPhoneToAccount.
     * @function confirmAddPhoneToAccount
     * @memberof Phone
     * @instance
     * @param {ICPhone_ConfirmAddPhoneToAccount_Request} request CPhone_ConfirmAddPhoneToAccount_Request message or plain object
     * @param {Phone.ConfirmAddPhoneToAccountCallback} callback Node-style callback called with the error, if any, and CPhone_AddPhoneToAccount_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Phone.prototype.confirmAddPhoneToAccount = function confirmAddPhoneToAccount(request, callback) {
        return this.rpcCall(confirmAddPhoneToAccount, $root.CPhone_ConfirmAddPhoneToAccount_Request, $root.CPhone_AddPhoneToAccount_Response, request, callback);
    }, "name", { value: "ConfirmAddPhoneToAccount" });

    /**
     * Calls ConfirmAddPhoneToAccount.
     * @function confirmAddPhoneToAccount
     * @memberof Phone
     * @instance
     * @param {ICPhone_ConfirmAddPhoneToAccount_Request} request CPhone_ConfirmAddPhoneToAccount_Request message or plain object
     * @returns {Promise<CPhone_AddPhoneToAccount_Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Phone#isAccountWaitingForEmailConfirmation}.
     * @memberof Phone
     * @typedef IsAccountWaitingForEmailConfirmationCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CPhone_IsAccountWaitingForEmailConfirmation_Response} [response] CPhone_IsAccountWaitingForEmailConfirmation_Response
     */

    /**
     * Calls IsAccountWaitingForEmailConfirmation.
     * @function isAccountWaitingForEmailConfirmation
     * @memberof Phone
     * @instance
     * @param {ICPhone_IsAccountWaitingForEmailConfirmation_Request} request CPhone_IsAccountWaitingForEmailConfirmation_Request message or plain object
     * @param {Phone.IsAccountWaitingForEmailConfirmationCallback} callback Node-style callback called with the error, if any, and CPhone_IsAccountWaitingForEmailConfirmation_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Phone.prototype.isAccountWaitingForEmailConfirmation = function isAccountWaitingForEmailConfirmation(request, callback) {
        return this.rpcCall(isAccountWaitingForEmailConfirmation, $root.CPhone_IsAccountWaitingForEmailConfirmation_Request, $root.CPhone_IsAccountWaitingForEmailConfirmation_Response, request, callback);
    }, "name", { value: "IsAccountWaitingForEmailConfirmation" });

    /**
     * Calls IsAccountWaitingForEmailConfirmation.
     * @function isAccountWaitingForEmailConfirmation
     * @memberof Phone
     * @instance
     * @param {ICPhone_IsAccountWaitingForEmailConfirmation_Request} request CPhone_IsAccountWaitingForEmailConfirmation_Request message or plain object
     * @returns {Promise<CPhone_IsAccountWaitingForEmailConfirmation_Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Phone#sendPhoneVerificationCode}.
     * @memberof Phone
     * @typedef SendPhoneVerificationCodeCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CPhone_SendPhoneVerificationCode_Response} [response] CPhone_SendPhoneVerificationCode_Response
     */

    /**
     * Calls SendPhoneVerificationCode.
     * @function sendPhoneVerificationCode
     * @memberof Phone
     * @instance
     * @param {ICPhone_SendPhoneVerificationCode_Request} request CPhone_SendPhoneVerificationCode_Request message or plain object
     * @param {Phone.SendPhoneVerificationCodeCallback} callback Node-style callback called with the error, if any, and CPhone_SendPhoneVerificationCode_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Phone.prototype.sendPhoneVerificationCode = function sendPhoneVerificationCode(request, callback) {
        return this.rpcCall(sendPhoneVerificationCode, $root.CPhone_SendPhoneVerificationCode_Request, $root.CPhone_SendPhoneVerificationCode_Response, request, callback);
    }, "name", { value: "SendPhoneVerificationCode" });

    /**
     * Calls SendPhoneVerificationCode.
     * @function sendPhoneVerificationCode
     * @memberof Phone
     * @instance
     * @param {ICPhone_SendPhoneVerificationCode_Request} request CPhone_SendPhoneVerificationCode_Request message or plain object
     * @returns {Promise<CPhone_SendPhoneVerificationCode_Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Phone#setAccountPhoneNumber}.
     * @memberof Phone
     * @typedef SetAccountPhoneNumberCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CPhone_SetAccountPhoneNumber_Response} [response] CPhone_SetAccountPhoneNumber_Response
     */

    /**
     * Calls SetAccountPhoneNumber.
     * @function setAccountPhoneNumber
     * @memberof Phone
     * @instance
     * @param {ICPhone_SetAccountPhoneNumber_Request} request CPhone_SetAccountPhoneNumber_Request message or plain object
     * @param {Phone.SetAccountPhoneNumberCallback} callback Node-style callback called with the error, if any, and CPhone_SetAccountPhoneNumber_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Phone.prototype.setAccountPhoneNumber = function setAccountPhoneNumber(request, callback) {
        return this.rpcCall(setAccountPhoneNumber, $root.CPhone_SetAccountPhoneNumber_Request, $root.CPhone_SetAccountPhoneNumber_Response, request, callback);
    }, "name", { value: "SetAccountPhoneNumber" });

    /**
     * Calls SetAccountPhoneNumber.
     * @function setAccountPhoneNumber
     * @memberof Phone
     * @instance
     * @param {ICPhone_SetAccountPhoneNumber_Request} request CPhone_SetAccountPhoneNumber_Request message or plain object
     * @returns {Promise<CPhone_SetAccountPhoneNumber_Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link Phone#verifyAccountPhoneWithCode}.
     * @memberof Phone
     * @typedef VerifyAccountPhoneWithCodeCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CPhone_VerifyAccountPhoneWithCode_Response} [response] CPhone_VerifyAccountPhoneWithCode_Response
     */

    /**
     * Calls VerifyAccountPhoneWithCode.
     * @function verifyAccountPhoneWithCode
     * @memberof Phone
     * @instance
     * @param {ICPhone_VerifyAccountPhoneWithCode_Request} request CPhone_VerifyAccountPhoneWithCode_Request message or plain object
     * @param {Phone.VerifyAccountPhoneWithCodeCallback} callback Node-style callback called with the error, if any, and CPhone_VerifyAccountPhoneWithCode_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(Phone.prototype.verifyAccountPhoneWithCode = function verifyAccountPhoneWithCode(request, callback) {
        return this.rpcCall(verifyAccountPhoneWithCode, $root.CPhone_VerifyAccountPhoneWithCode_Request, $root.CPhone_VerifyAccountPhoneWithCode_Response, request, callback);
    }, "name", { value: "VerifyAccountPhoneWithCode" });

    /**
     * Calls VerifyAccountPhoneWithCode.
     * @function verifyAccountPhoneWithCode
     * @memberof Phone
     * @instance
     * @param {ICPhone_VerifyAccountPhoneWithCode_Request} request CPhone_VerifyAccountPhoneWithCode_Request message or plain object
     * @returns {Promise<CPhone_VerifyAccountPhoneWithCode_Response>} Promise
     * @variation 2
     */

    return Phone;
})();

export { $root as default };
