/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import { index } from "@ohos/protobufjs"; const $protobuf = index;
import Long from 'long';
$protobuf.util.Long=Long
$protobuf.configure()

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

export const CRemoveAuthenticatorViaChallengeContinue_Replacement_Token = $root.CRemoveAuthenticatorViaChallengeContinue_Replacement_Token = (() => {

    /**
     * Properties of a CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.
     * @exports ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @interface ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @property {Uint8Array|null} [sharedSecret] CRemoveAuthenticatorViaChallengeContinue_Replacement_Token sharedSecret
     * @property {number|Long|null} [serialNumber] CRemoveAuthenticatorViaChallengeContinue_Replacement_Token serialNumber
     * @property {string|null} [revocationCode] CRemoveAuthenticatorViaChallengeContinue_Replacement_Token revocationCode
     * @property {string|null} [uri] CRemoveAuthenticatorViaChallengeContinue_Replacement_Token uri
     * @property {number|Long|null} [serverTime] CRemoveAuthenticatorViaChallengeContinue_Replacement_Token serverTime
     * @property {string|null} [accountName] CRemoveAuthenticatorViaChallengeContinue_Replacement_Token accountName
     * @property {string|null} [tokenGid] CRemoveAuthenticatorViaChallengeContinue_Replacement_Token tokenGid
     * @property {Uint8Array|null} [identitySecret] CRemoveAuthenticatorViaChallengeContinue_Replacement_Token identitySecret
     * @property {Uint8Array|null} [secret_1] CRemoveAuthenticatorViaChallengeContinue_Replacement_Token secret_1
     * @property {number|null} [status] CRemoveAuthenticatorViaChallengeContinue_Replacement_Token status
     * @property {number|null} [steamguardScheme] CRemoveAuthenticatorViaChallengeContinue_Replacement_Token steamguardScheme
     * @property {number|Long|null} [steamid] CRemoveAuthenticatorViaChallengeContinue_Replacement_Token steamid
     */

    /**
     * Constructs a new CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.
     * @exports CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @classdesc Represents a CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.
     * @implements ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @constructor
     * @param {ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token=} [properties] Properties to set
     */
    function CRemoveAuthenticatorViaChallengeContinue_Replacement_Token(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CRemoveAuthenticatorViaChallengeContinue_Replacement_Token sharedSecret.
     * @member {Uint8Array} sharedSecret
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @instance
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.prototype.sharedSecret = $util.newBuffer([]);

    /**
     * CRemoveAuthenticatorViaChallengeContinue_Replacement_Token serialNumber.
     * @member {number|Long} serialNumber
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @instance
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.prototype.serialNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CRemoveAuthenticatorViaChallengeContinue_Replacement_Token revocationCode.
     * @member {string} revocationCode
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @instance
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.prototype.revocationCode = "";

    /**
     * CRemoveAuthenticatorViaChallengeContinue_Replacement_Token uri.
     * @member {string} uri
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @instance
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.prototype.uri = "";

    /**
     * CRemoveAuthenticatorViaChallengeContinue_Replacement_Token serverTime.
     * @member {number|Long} serverTime
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @instance
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CRemoveAuthenticatorViaChallengeContinue_Replacement_Token accountName.
     * @member {string} accountName
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @instance
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.prototype.accountName = "";

    /**
     * CRemoveAuthenticatorViaChallengeContinue_Replacement_Token tokenGid.
     * @member {string} tokenGid
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @instance
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.prototype.tokenGid = "";

    /**
     * CRemoveAuthenticatorViaChallengeContinue_Replacement_Token identitySecret.
     * @member {Uint8Array} identitySecret
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @instance
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.prototype.identitySecret = $util.newBuffer([]);

    /**
     * CRemoveAuthenticatorViaChallengeContinue_Replacement_Token secret_1.
     * @member {Uint8Array} secret_1
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @instance
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.prototype.secret_1 = $util.newBuffer([]);

    /**
     * CRemoveAuthenticatorViaChallengeContinue_Replacement_Token status.
     * @member {number} status
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @instance
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.prototype.status = 0;

    /**
     * CRemoveAuthenticatorViaChallengeContinue_Replacement_Token steamguardScheme.
     * @member {number} steamguardScheme
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @instance
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.prototype.steamguardScheme = 0;

    /**
     * CRemoveAuthenticatorViaChallengeContinue_Replacement_Token steamid.
     * @member {number|Long} steamid
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @instance
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new CRemoveAuthenticatorViaChallengeContinue_Replacement_Token instance using the specified properties.
     * @function create
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @static
     * @param {ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token=} [properties] Properties to set
     * @returns {CRemoveAuthenticatorViaChallengeContinue_Replacement_Token} CRemoveAuthenticatorViaChallengeContinue_Replacement_Token instance
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.create = function create(properties) {
        return new CRemoveAuthenticatorViaChallengeContinue_Replacement_Token(properties);
    };

    /**
     * Encodes the specified CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message. Does not implicitly {@link CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.verify|verify} messages.
     * @function encode
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @static
     * @param {ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token} message CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sharedSecret != null && Object.hasOwnProperty.call(message, "sharedSecret"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.sharedSecret);
        if (message.serialNumber != null && Object.hasOwnProperty.call(message, "serialNumber"))
            writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.serialNumber);
        if (message.revocationCode != null && Object.hasOwnProperty.call(message, "revocationCode"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.revocationCode);
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.uri);
        if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.serverTime);
        if (message.accountName != null && Object.hasOwnProperty.call(message, "accountName"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.accountName);
        if (message.tokenGid != null && Object.hasOwnProperty.call(message, "tokenGid"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.tokenGid);
        if (message.identitySecret != null && Object.hasOwnProperty.call(message, "identitySecret"))
            writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.identitySecret);
        if (message.secret_1 != null && Object.hasOwnProperty.call(message, "secret_1"))
            writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.secret_1);
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.status);
        if (message.steamguardScheme != null && Object.hasOwnProperty.call(message, "steamguardScheme"))
            writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.steamguardScheme);
        if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
            writer.uint32(/* id 12, wireType 1 =*/97).fixed64(message.steamid);
        return writer;
    };

    /**
     * Encodes the specified CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message, length delimited. Does not implicitly {@link CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @static
     * @param {ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token} message CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message from the specified reader or buffer.
     * @function decode
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CRemoveAuthenticatorViaChallengeContinue_Replacement_Token} CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CRemoveAuthenticatorViaChallengeContinue_Replacement_Token();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.sharedSecret = reader.bytes();
                    break;
                }
            case 2: {
                    message.serialNumber = reader.fixed64();
                    break;
                }
            case 3: {
                    message.revocationCode = reader.string();
                    break;
                }
            case 4: {
                    message.uri = reader.string();
                    break;
                }
            case 5: {
                    message.serverTime = reader.uint64();
                    break;
                }
            case 6: {
                    message.accountName = reader.string();
                    break;
                }
            case 7: {
                    message.tokenGid = reader.string();
                    break;
                }
            case 8: {
                    message.identitySecret = reader.bytes();
                    break;
                }
            case 9: {
                    message.secret_1 = reader.bytes();
                    break;
                }
            case 10: {
                    message.status = reader.int32();
                    break;
                }
            case 11: {
                    message.steamguardScheme = reader.uint32();
                    break;
                }
            case 12: {
                    message.steamid = reader.fixed64();
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
     * Decodes a CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CRemoveAuthenticatorViaChallengeContinue_Replacement_Token} CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message.
     * @function verify
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sharedSecret != null && message.hasOwnProperty("sharedSecret"))
            if (!(message.sharedSecret && typeof message.sharedSecret.length === "number" || $util.isString(message.sharedSecret)))
                return "sharedSecret: buffer expected";
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (!$util.isInteger(message.serialNumber) && !(message.serialNumber && $util.isInteger(message.serialNumber.low) && $util.isInteger(message.serialNumber.high)))
                return "serialNumber: integer|Long expected";
        if (message.revocationCode != null && message.hasOwnProperty("revocationCode"))
            if (!$util.isString(message.revocationCode))
                return "revocationCode: string expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.serverTime != null && message.hasOwnProperty("serverTime"))
            if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                return "serverTime: integer|Long expected";
        if (message.accountName != null && message.hasOwnProperty("accountName"))
            if (!$util.isString(message.accountName))
                return "accountName: string expected";
        if (message.tokenGid != null && message.hasOwnProperty("tokenGid"))
            if (!$util.isString(message.tokenGid))
                return "tokenGid: string expected";
        if (message.identitySecret != null && message.hasOwnProperty("identitySecret"))
            if (!(message.identitySecret && typeof message.identitySecret.length === "number" || $util.isString(message.identitySecret)))
                return "identitySecret: buffer expected";
        if (message.secret_1 != null && message.hasOwnProperty("secret_1"))
            if (!(message.secret_1 && typeof message.secret_1.length === "number" || $util.isString(message.secret_1)))
                return "secret_1: buffer expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.steamguardScheme != null && message.hasOwnProperty("steamguardScheme"))
            if (!$util.isInteger(message.steamguardScheme))
                return "steamguardScheme: integer expected";
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                return "steamid: integer|Long expected";
        return null;
    };

    /**
     * Creates a CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CRemoveAuthenticatorViaChallengeContinue_Replacement_Token} CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.fromObject = function fromObject(object) {
        if (object instanceof $root.CRemoveAuthenticatorViaChallengeContinue_Replacement_Token)
            return object;
        let message = new $root.CRemoveAuthenticatorViaChallengeContinue_Replacement_Token();
        if (object.sharedSecret != null)
            if (typeof object.sharedSecret === "string")
                $util.base64.decode(object.sharedSecret, message.sharedSecret = $util.newBuffer($util.base64.length(object.sharedSecret)), 0);
            else if (object.sharedSecret.length >= 0)
                message.sharedSecret = object.sharedSecret;
        if (object.serialNumber != null)
            if ($util.Long)
                (message.serialNumber = $util.Long.fromValue(object.serialNumber)).unsigned = false;
            else if (typeof object.serialNumber === "string")
                message.serialNumber = parseInt(object.serialNumber, 10);
            else if (typeof object.serialNumber === "number")
                message.serialNumber = object.serialNumber;
            else if (typeof object.serialNumber === "object")
                message.serialNumber = new $util.LongBits(object.serialNumber.low >>> 0, object.serialNumber.high >>> 0).toNumber();
        if (object.revocationCode != null)
            message.revocationCode = String(object.revocationCode);
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.serverTime != null)
            if ($util.Long)
                (message.serverTime = $util.Long.fromValue(object.serverTime)).unsigned = true;
            else if (typeof object.serverTime === "string")
                message.serverTime = parseInt(object.serverTime, 10);
            else if (typeof object.serverTime === "number")
                message.serverTime = object.serverTime;
            else if (typeof object.serverTime === "object")
                message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber(true);
        if (object.accountName != null)
            message.accountName = String(object.accountName);
        if (object.tokenGid != null)
            message.tokenGid = String(object.tokenGid);
        if (object.identitySecret != null)
            if (typeof object.identitySecret === "string")
                $util.base64.decode(object.identitySecret, message.identitySecret = $util.newBuffer($util.base64.length(object.identitySecret)), 0);
            else if (object.identitySecret.length >= 0)
                message.identitySecret = object.identitySecret;
        if (object.secret_1 != null)
            if (typeof object.secret_1 === "string")
                $util.base64.decode(object.secret_1, message.secret_1 = $util.newBuffer($util.base64.length(object.secret_1)), 0);
            else if (object.secret_1.length >= 0)
                message.secret_1 = object.secret_1;
        if (object.status != null)
            message.status = object.status | 0;
        if (object.steamguardScheme != null)
            message.steamguardScheme = object.steamguardScheme >>> 0;
        if (object.steamid != null)
            if ($util.Long)
                (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
            else if (typeof object.steamid === "string")
                message.steamid = parseInt(object.steamid, 10);
            else if (typeof object.steamid === "number")
                message.steamid = object.steamid;
            else if (typeof object.steamid === "object")
                message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a CRemoveAuthenticatorViaChallengeContinue_Replacement_Token message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @static
     * @param {CRemoveAuthenticatorViaChallengeContinue_Replacement_Token} message CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.sharedSecret = "";
            else {
                object.sharedSecret = [];
                if (options.bytes !== Array)
                    object.sharedSecret = $util.newBuffer(object.sharedSecret);
            }
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.serialNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serialNumber = options.longs === String ? "0" : 0;
            object.revocationCode = "";
            object.uri = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serverTime = options.longs === String ? "0" : 0;
            object.accountName = "";
            object.tokenGid = "";
            if (options.bytes === String)
                object.identitySecret = "";
            else {
                object.identitySecret = [];
                if (options.bytes !== Array)
                    object.identitySecret = $util.newBuffer(object.identitySecret);
            }
            if (options.bytes === String)
                object.secret_1 = "";
            else {
                object.secret_1 = [];
                if (options.bytes !== Array)
                    object.secret_1 = $util.newBuffer(object.secret_1);
            }
            object.status = 0;
            object.steamguardScheme = 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.steamid = options.longs === String ? "0" : 0;
        }
        if (message.sharedSecret != null && message.hasOwnProperty("sharedSecret"))
            object.sharedSecret = options.bytes === String ? $util.base64.encode(message.sharedSecret, 0, message.sharedSecret.length) : options.bytes === Array ? Array.prototype.slice.call(message.sharedSecret) : message.sharedSecret;
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (typeof message.serialNumber === "number")
                object.serialNumber = options.longs === String ? String(message.serialNumber) : message.serialNumber;
            else
                object.serialNumber = options.longs === String ? $util.Long.prototype.toString.call(message.serialNumber) : options.longs === Number ? new $util.LongBits(message.serialNumber.low >>> 0, message.serialNumber.high >>> 0).toNumber() : message.serialNumber;
        if (message.revocationCode != null && message.hasOwnProperty("revocationCode"))
            object.revocationCode = message.revocationCode;
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.serverTime != null && message.hasOwnProperty("serverTime"))
            if (typeof message.serverTime === "number")
                object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
            else
                object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber(true) : message.serverTime;
        if (message.accountName != null && message.hasOwnProperty("accountName"))
            object.accountName = message.accountName;
        if (message.tokenGid != null && message.hasOwnProperty("tokenGid"))
            object.tokenGid = message.tokenGid;
        if (message.identitySecret != null && message.hasOwnProperty("identitySecret"))
            object.identitySecret = options.bytes === String ? $util.base64.encode(message.identitySecret, 0, message.identitySecret.length) : options.bytes === Array ? Array.prototype.slice.call(message.identitySecret) : message.identitySecret;
        if (message.secret_1 != null && message.hasOwnProperty("secret_1"))
            object.secret_1 = options.bytes === String ? $util.base64.encode(message.secret_1, 0, message.secret_1.length) : options.bytes === Array ? Array.prototype.slice.call(message.secret_1) : message.secret_1;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.steamguardScheme != null && message.hasOwnProperty("steamguardScheme"))
            object.steamguardScheme = message.steamguardScheme;
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (typeof message.steamid === "number")
                object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
            else
                object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
        return object;
    };

    /**
     * Converts this CRemoveAuthenticatorViaChallengeContinue_Replacement_Token to JSON.
     * @function toJSON
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @function getTypeUrl
     * @memberof CRemoveAuthenticatorViaChallengeContinue_Replacement_Token
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CRemoveAuthenticatorViaChallengeContinue_Replacement_Token";
    };

    return CRemoveAuthenticatorViaChallengeContinue_Replacement_Token;
})();

export const CTwoFactor_AddAuthenticator_Request = $root.CTwoFactor_AddAuthenticator_Request = (() => {

    /**
     * Properties of a CTwoFactor_AddAuthenticator_Request.
     * @exports ICTwoFactor_AddAuthenticator_Request
     * @interface ICTwoFactor_AddAuthenticator_Request
     * @property {number|Long|null} [steamid] CTwoFactor_AddAuthenticator_Request steamid
     * @property {number|Long|null} [authenticatorTime] CTwoFactor_AddAuthenticator_Request authenticatorTime
     * @property {number|Long|null} [serialNumber] CTwoFactor_AddAuthenticator_Request serialNumber
     * @property {number|null} [authenticatorType] CTwoFactor_AddAuthenticator_Request authenticatorType
     * @property {string|null} [deviceIdentifier] CTwoFactor_AddAuthenticator_Request deviceIdentifier
     * @property {string|null} [smsPhoneId] CTwoFactor_AddAuthenticator_Request smsPhoneId
     * @property {Array.<string>|null} [httpHeaders] CTwoFactor_AddAuthenticator_Request httpHeaders
     * @property {number|null} [version] CTwoFactor_AddAuthenticator_Request version
     */

    /**
     * Constructs a new CTwoFactor_AddAuthenticator_Request.
     * @exports CTwoFactor_AddAuthenticator_Request
     * @classdesc Represents a CTwoFactor_AddAuthenticator_Request.
     * @implements ICTwoFactor_AddAuthenticator_Request
     * @constructor
     * @param {ICTwoFactor_AddAuthenticator_Request=} [properties] Properties to set
     */
    function CTwoFactor_AddAuthenticator_Request(properties) {
        this.httpHeaders = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_AddAuthenticator_Request steamid.
     * @member {number|Long} steamid
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @instance
     */
    CTwoFactor_AddAuthenticator_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CTwoFactor_AddAuthenticator_Request authenticatorTime.
     * @member {number|Long} authenticatorTime
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @instance
     */
    CTwoFactor_AddAuthenticator_Request.prototype.authenticatorTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CTwoFactor_AddAuthenticator_Request serialNumber.
     * @member {number|Long} serialNumber
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @instance
     */
    CTwoFactor_AddAuthenticator_Request.prototype.serialNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CTwoFactor_AddAuthenticator_Request authenticatorType.
     * @member {number} authenticatorType
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @instance
     */
    CTwoFactor_AddAuthenticator_Request.prototype.authenticatorType = 0;

    /**
     * CTwoFactor_AddAuthenticator_Request deviceIdentifier.
     * @member {string} deviceIdentifier
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @instance
     */
    CTwoFactor_AddAuthenticator_Request.prototype.deviceIdentifier = "";

    /**
     * CTwoFactor_AddAuthenticator_Request smsPhoneId.
     * @member {string} smsPhoneId
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @instance
     */
    CTwoFactor_AddAuthenticator_Request.prototype.smsPhoneId = "";

    /**
     * CTwoFactor_AddAuthenticator_Request httpHeaders.
     * @member {Array.<string>} httpHeaders
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @instance
     */
    CTwoFactor_AddAuthenticator_Request.prototype.httpHeaders = $util.emptyArray;

    /**
     * CTwoFactor_AddAuthenticator_Request version.
     * @member {number} version
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @instance
     */
    CTwoFactor_AddAuthenticator_Request.prototype.version = 1;

    /**
     * Creates a new CTwoFactor_AddAuthenticator_Request instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @static
     * @param {ICTwoFactor_AddAuthenticator_Request=} [properties] Properties to set
     * @returns {CTwoFactor_AddAuthenticator_Request} CTwoFactor_AddAuthenticator_Request instance
     */
    CTwoFactor_AddAuthenticator_Request.create = function create(properties) {
        return new CTwoFactor_AddAuthenticator_Request(properties);
    };

    /**
     * Encodes the specified CTwoFactor_AddAuthenticator_Request message. Does not implicitly {@link CTwoFactor_AddAuthenticator_Request.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @static
     * @param {ICTwoFactor_AddAuthenticator_Request} message CTwoFactor_AddAuthenticator_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_AddAuthenticator_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
        if (message.authenticatorTime != null && Object.hasOwnProperty.call(message, "authenticatorTime"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.authenticatorTime);
        if (message.serialNumber != null && Object.hasOwnProperty.call(message, "serialNumber"))
            writer.uint32(/* id 3, wireType 1 =*/25).fixed64(message.serialNumber);
        if (message.authenticatorType != null && Object.hasOwnProperty.call(message, "authenticatorType"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.authenticatorType);
        if (message.deviceIdentifier != null && Object.hasOwnProperty.call(message, "deviceIdentifier"))
            writer.uint32(/* id 5, wireType 2 =*/42).string(message.deviceIdentifier);
        if (message.smsPhoneId != null && Object.hasOwnProperty.call(message, "smsPhoneId"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.smsPhoneId);
        if (message.httpHeaders != null && message.httpHeaders.length)
            for (let i = 0; i < message.httpHeaders.length; ++i)
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.httpHeaders[i]);
        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.version);
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_AddAuthenticator_Request message, length delimited. Does not implicitly {@link CTwoFactor_AddAuthenticator_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @static
     * @param {ICTwoFactor_AddAuthenticator_Request} message CTwoFactor_AddAuthenticator_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_AddAuthenticator_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_AddAuthenticator_Request message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_AddAuthenticator_Request} CTwoFactor_AddAuthenticator_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_AddAuthenticator_Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_AddAuthenticator_Request();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.steamid = reader.fixed64();
                    break;
                }
            case 2: {
                    message.authenticatorTime = reader.uint64();
                    break;
                }
            case 3: {
                    message.serialNumber = reader.fixed64();
                    break;
                }
            case 4: {
                    message.authenticatorType = reader.uint32();
                    break;
                }
            case 5: {
                    message.deviceIdentifier = reader.string();
                    break;
                }
            case 6: {
                    message.smsPhoneId = reader.string();
                    break;
                }
            case 7: {
                    if (!(message.httpHeaders && message.httpHeaders.length))
                        message.httpHeaders = [];
                    message.httpHeaders.push(reader.string());
                    break;
                }
            case 8: {
                    message.version = reader.uint32();
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
     * Decodes a CTwoFactor_AddAuthenticator_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_AddAuthenticator_Request} CTwoFactor_AddAuthenticator_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_AddAuthenticator_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_AddAuthenticator_Request message.
     * @function verify
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_AddAuthenticator_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                return "steamid: integer|Long expected";
        if (message.authenticatorTime != null && message.hasOwnProperty("authenticatorTime"))
            if (!$util.isInteger(message.authenticatorTime) && !(message.authenticatorTime && $util.isInteger(message.authenticatorTime.low) && $util.isInteger(message.authenticatorTime.high)))
                return "authenticatorTime: integer|Long expected";
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (!$util.isInteger(message.serialNumber) && !(message.serialNumber && $util.isInteger(message.serialNumber.low) && $util.isInteger(message.serialNumber.high)))
                return "serialNumber: integer|Long expected";
        if (message.authenticatorType != null && message.hasOwnProperty("authenticatorType"))
            if (!$util.isInteger(message.authenticatorType))
                return "authenticatorType: integer expected";
        if (message.deviceIdentifier != null && message.hasOwnProperty("deviceIdentifier"))
            if (!$util.isString(message.deviceIdentifier))
                return "deviceIdentifier: string expected";
        if (message.smsPhoneId != null && message.hasOwnProperty("smsPhoneId"))
            if (!$util.isString(message.smsPhoneId))
                return "smsPhoneId: string expected";
        if (message.httpHeaders != null && message.hasOwnProperty("httpHeaders")) {
            if (!Array.isArray(message.httpHeaders))
                return "httpHeaders: array expected";
            for (let i = 0; i < message.httpHeaders.length; ++i)
                if (!$util.isString(message.httpHeaders[i]))
                    return "httpHeaders: string[] expected";
        }
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isInteger(message.version))
                return "version: integer expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_AddAuthenticator_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_AddAuthenticator_Request} CTwoFactor_AddAuthenticator_Request
     */
    CTwoFactor_AddAuthenticator_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_AddAuthenticator_Request)
            return object;
        let message = new $root.CTwoFactor_AddAuthenticator_Request();
        if (object.steamid != null)
            if ($util.Long)
                (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
            else if (typeof object.steamid === "string")
                message.steamid = parseInt(object.steamid, 10);
            else if (typeof object.steamid === "number")
                message.steamid = object.steamid;
            else if (typeof object.steamid === "object")
                message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
        if (object.authenticatorTime != null)
            if ($util.Long)
                (message.authenticatorTime = $util.Long.fromValue(object.authenticatorTime)).unsigned = true;
            else if (typeof object.authenticatorTime === "string")
                message.authenticatorTime = parseInt(object.authenticatorTime, 10);
            else if (typeof object.authenticatorTime === "number")
                message.authenticatorTime = object.authenticatorTime;
            else if (typeof object.authenticatorTime === "object")
                message.authenticatorTime = new $util.LongBits(object.authenticatorTime.low >>> 0, object.authenticatorTime.high >>> 0).toNumber(true);
        if (object.serialNumber != null)
            if ($util.Long)
                (message.serialNumber = $util.Long.fromValue(object.serialNumber)).unsigned = false;
            else if (typeof object.serialNumber === "string")
                message.serialNumber = parseInt(object.serialNumber, 10);
            else if (typeof object.serialNumber === "number")
                message.serialNumber = object.serialNumber;
            else if (typeof object.serialNumber === "object")
                message.serialNumber = new $util.LongBits(object.serialNumber.low >>> 0, object.serialNumber.high >>> 0).toNumber();
        if (object.authenticatorType != null)
            message.authenticatorType = object.authenticatorType >>> 0;
        if (object.deviceIdentifier != null)
            message.deviceIdentifier = String(object.deviceIdentifier);
        if (object.smsPhoneId != null)
            message.smsPhoneId = String(object.smsPhoneId);
        if (object.httpHeaders) {
            if (!Array.isArray(object.httpHeaders))
                throw TypeError(".CTwoFactor_AddAuthenticator_Request.httpHeaders: array expected");
            message.httpHeaders = [];
            for (let i = 0; i < object.httpHeaders.length; ++i)
                message.httpHeaders[i] = String(object.httpHeaders[i]);
        }
        if (object.version != null)
            message.version = object.version >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_AddAuthenticator_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @static
     * @param {CTwoFactor_AddAuthenticator_Request} message CTwoFactor_AddAuthenticator_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_AddAuthenticator_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.httpHeaders = [];
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.steamid = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.authenticatorTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.authenticatorTime = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.serialNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serialNumber = options.longs === String ? "0" : 0;
            object.authenticatorType = 0;
            object.deviceIdentifier = "";
            object.smsPhoneId = "";
            object.version = 1;
        }
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (typeof message.steamid === "number")
                object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
            else
                object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
        if (message.authenticatorTime != null && message.hasOwnProperty("authenticatorTime"))
            if (typeof message.authenticatorTime === "number")
                object.authenticatorTime = options.longs === String ? String(message.authenticatorTime) : message.authenticatorTime;
            else
                object.authenticatorTime = options.longs === String ? $util.Long.prototype.toString.call(message.authenticatorTime) : options.longs === Number ? new $util.LongBits(message.authenticatorTime.low >>> 0, message.authenticatorTime.high >>> 0).toNumber(true) : message.authenticatorTime;
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (typeof message.serialNumber === "number")
                object.serialNumber = options.longs === String ? String(message.serialNumber) : message.serialNumber;
            else
                object.serialNumber = options.longs === String ? $util.Long.prototype.toString.call(message.serialNumber) : options.longs === Number ? new $util.LongBits(message.serialNumber.low >>> 0, message.serialNumber.high >>> 0).toNumber() : message.serialNumber;
        if (message.authenticatorType != null && message.hasOwnProperty("authenticatorType"))
            object.authenticatorType = message.authenticatorType;
        if (message.deviceIdentifier != null && message.hasOwnProperty("deviceIdentifier"))
            object.deviceIdentifier = message.deviceIdentifier;
        if (message.smsPhoneId != null && message.hasOwnProperty("smsPhoneId"))
            object.smsPhoneId = message.smsPhoneId;
        if (message.httpHeaders && message.httpHeaders.length) {
            object.httpHeaders = [];
            for (let j = 0; j < message.httpHeaders.length; ++j)
                object.httpHeaders[j] = message.httpHeaders[j];
        }
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        return object;
    };

    /**
     * Converts this CTwoFactor_AddAuthenticator_Request to JSON.
     * @function toJSON
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_AddAuthenticator_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_AddAuthenticator_Request
     * @function getTypeUrl
     * @memberof CTwoFactor_AddAuthenticator_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_AddAuthenticator_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_AddAuthenticator_Request";
    };

    return CTwoFactor_AddAuthenticator_Request;
})();

export const CTwoFactor_AddAuthenticator_Response = $root.CTwoFactor_AddAuthenticator_Response = (() => {

    /**
     * Properties of a CTwoFactor_AddAuthenticator_Response.
     * @exports ICTwoFactor_AddAuthenticator_Response
     * @interface ICTwoFactor_AddAuthenticator_Response
     * @property {Uint8Array|null} [sharedSecret] CTwoFactor_AddAuthenticator_Response sharedSecret
     * @property {number|Long|null} [serialNumber] CTwoFactor_AddAuthenticator_Response serialNumber
     * @property {string|null} [revocationCode] CTwoFactor_AddAuthenticator_Response revocationCode
     * @property {string|null} [uri] CTwoFactor_AddAuthenticator_Response uri
     * @property {number|Long|null} [serverTime] CTwoFactor_AddAuthenticator_Response serverTime
     * @property {string|null} [accountName] CTwoFactor_AddAuthenticator_Response accountName
     * @property {string|null} [tokenGid] CTwoFactor_AddAuthenticator_Response tokenGid
     * @property {Uint8Array|null} [identitySecret] CTwoFactor_AddAuthenticator_Response identitySecret
     * @property {Uint8Array|null} [secret_1] CTwoFactor_AddAuthenticator_Response secret_1
     * @property {number|null} [status] CTwoFactor_AddAuthenticator_Response status
     * @property {string|null} [phoneNumberHint] CTwoFactor_AddAuthenticator_Response phoneNumberHint
     * @property {number|null} [confirmType] CTwoFactor_AddAuthenticator_Response confirmType
     */

    /**
     * Constructs a new CTwoFactor_AddAuthenticator_Response.
     * @exports CTwoFactor_AddAuthenticator_Response
     * @classdesc Represents a CTwoFactor_AddAuthenticator_Response.
     * @implements ICTwoFactor_AddAuthenticator_Response
     * @constructor
     * @param {ICTwoFactor_AddAuthenticator_Response=} [properties] Properties to set
     */
    function CTwoFactor_AddAuthenticator_Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_AddAuthenticator_Response sharedSecret.
     * @member {Uint8Array} sharedSecret
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @instance
     */
    CTwoFactor_AddAuthenticator_Response.prototype.sharedSecret = $util.newBuffer([]);

    /**
     * CTwoFactor_AddAuthenticator_Response serialNumber.
     * @member {number|Long} serialNumber
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @instance
     */
    CTwoFactor_AddAuthenticator_Response.prototype.serialNumber = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CTwoFactor_AddAuthenticator_Response revocationCode.
     * @member {string} revocationCode
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @instance
     */
    CTwoFactor_AddAuthenticator_Response.prototype.revocationCode = "";

    /**
     * CTwoFactor_AddAuthenticator_Response uri.
     * @member {string} uri
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @instance
     */
    CTwoFactor_AddAuthenticator_Response.prototype.uri = "";

    /**
     * CTwoFactor_AddAuthenticator_Response serverTime.
     * @member {number|Long} serverTime
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @instance
     */
    CTwoFactor_AddAuthenticator_Response.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CTwoFactor_AddAuthenticator_Response accountName.
     * @member {string} accountName
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @instance
     */
    CTwoFactor_AddAuthenticator_Response.prototype.accountName = "";

    /**
     * CTwoFactor_AddAuthenticator_Response tokenGid.
     * @member {string} tokenGid
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @instance
     */
    CTwoFactor_AddAuthenticator_Response.prototype.tokenGid = "";

    /**
     * CTwoFactor_AddAuthenticator_Response identitySecret.
     * @member {Uint8Array} identitySecret
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @instance
     */
    CTwoFactor_AddAuthenticator_Response.prototype.identitySecret = $util.newBuffer([]);

    /**
     * CTwoFactor_AddAuthenticator_Response secret_1.
     * @member {Uint8Array} secret_1
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @instance
     */
    CTwoFactor_AddAuthenticator_Response.prototype.secret_1 = $util.newBuffer([]);

    /**
     * CTwoFactor_AddAuthenticator_Response status.
     * @member {number} status
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @instance
     */
    CTwoFactor_AddAuthenticator_Response.prototype.status = 0;

    /**
     * CTwoFactor_AddAuthenticator_Response phoneNumberHint.
     * @member {string} phoneNumberHint
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @instance
     */
    CTwoFactor_AddAuthenticator_Response.prototype.phoneNumberHint = "";

    /**
     * CTwoFactor_AddAuthenticator_Response confirmType.
     * @member {number} confirmType
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @instance
     */
    CTwoFactor_AddAuthenticator_Response.prototype.confirmType = 0;

    /**
     * Creates a new CTwoFactor_AddAuthenticator_Response instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @static
     * @param {ICTwoFactor_AddAuthenticator_Response=} [properties] Properties to set
     * @returns {CTwoFactor_AddAuthenticator_Response} CTwoFactor_AddAuthenticator_Response instance
     */
    CTwoFactor_AddAuthenticator_Response.create = function create(properties) {
        return new CTwoFactor_AddAuthenticator_Response(properties);
    };

    /**
     * Encodes the specified CTwoFactor_AddAuthenticator_Response message. Does not implicitly {@link CTwoFactor_AddAuthenticator_Response.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @static
     * @param {ICTwoFactor_AddAuthenticator_Response} message CTwoFactor_AddAuthenticator_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_AddAuthenticator_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.sharedSecret != null && Object.hasOwnProperty.call(message, "sharedSecret"))
            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.sharedSecret);
        if (message.serialNumber != null && Object.hasOwnProperty.call(message, "serialNumber"))
            writer.uint32(/* id 2, wireType 1 =*/17).fixed64(message.serialNumber);
        if (message.revocationCode != null && Object.hasOwnProperty.call(message, "revocationCode"))
            writer.uint32(/* id 3, wireType 2 =*/26).string(message.revocationCode);
        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.uri);
        if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.serverTime);
        if (message.accountName != null && Object.hasOwnProperty.call(message, "accountName"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.accountName);
        if (message.tokenGid != null && Object.hasOwnProperty.call(message, "tokenGid"))
            writer.uint32(/* id 7, wireType 2 =*/58).string(message.tokenGid);
        if (message.identitySecret != null && Object.hasOwnProperty.call(message, "identitySecret"))
            writer.uint32(/* id 8, wireType 2 =*/66).bytes(message.identitySecret);
        if (message.secret_1 != null && Object.hasOwnProperty.call(message, "secret_1"))
            writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.secret_1);
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 10, wireType 0 =*/80).int32(message.status);
        if (message.phoneNumberHint != null && Object.hasOwnProperty.call(message, "phoneNumberHint"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.phoneNumberHint);
        if (message.confirmType != null && Object.hasOwnProperty.call(message, "confirmType"))
            writer.uint32(/* id 12, wireType 0 =*/96).int32(message.confirmType);
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_AddAuthenticator_Response message, length delimited. Does not implicitly {@link CTwoFactor_AddAuthenticator_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @static
     * @param {ICTwoFactor_AddAuthenticator_Response} message CTwoFactor_AddAuthenticator_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_AddAuthenticator_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_AddAuthenticator_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_AddAuthenticator_Response} CTwoFactor_AddAuthenticator_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_AddAuthenticator_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_AddAuthenticator_Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.sharedSecret = reader.bytes();
                    break;
                }
            case 2: {
                    message.serialNumber = reader.fixed64();
                    break;
                }
            case 3: {
                    message.revocationCode = reader.string();
                    break;
                }
            case 4: {
                    message.uri = reader.string();
                    break;
                }
            case 5: {
                    message.serverTime = reader.uint64();
                    break;
                }
            case 6: {
                    message.accountName = reader.string();
                    break;
                }
            case 7: {
                    message.tokenGid = reader.string();
                    break;
                }
            case 8: {
                    message.identitySecret = reader.bytes();
                    break;
                }
            case 9: {
                    message.secret_1 = reader.bytes();
                    break;
                }
            case 10: {
                    message.status = reader.int32();
                    break;
                }
            case 11: {
                    message.phoneNumberHint = reader.string();
                    break;
                }
            case 12: {
                    message.confirmType = reader.int32();
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
     * Decodes a CTwoFactor_AddAuthenticator_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_AddAuthenticator_Response} CTwoFactor_AddAuthenticator_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_AddAuthenticator_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_AddAuthenticator_Response message.
     * @function verify
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_AddAuthenticator_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.sharedSecret != null && message.hasOwnProperty("sharedSecret"))
            if (!(message.sharedSecret && typeof message.sharedSecret.length === "number" || $util.isString(message.sharedSecret)))
                return "sharedSecret: buffer expected";
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (!$util.isInteger(message.serialNumber) && !(message.serialNumber && $util.isInteger(message.serialNumber.low) && $util.isInteger(message.serialNumber.high)))
                return "serialNumber: integer|Long expected";
        if (message.revocationCode != null && message.hasOwnProperty("revocationCode"))
            if (!$util.isString(message.revocationCode))
                return "revocationCode: string expected";
        if (message.uri != null && message.hasOwnProperty("uri"))
            if (!$util.isString(message.uri))
                return "uri: string expected";
        if (message.serverTime != null && message.hasOwnProperty("serverTime"))
            if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                return "serverTime: integer|Long expected";
        if (message.accountName != null && message.hasOwnProperty("accountName"))
            if (!$util.isString(message.accountName))
                return "accountName: string expected";
        if (message.tokenGid != null && message.hasOwnProperty("tokenGid"))
            if (!$util.isString(message.tokenGid))
                return "tokenGid: string expected";
        if (message.identitySecret != null && message.hasOwnProperty("identitySecret"))
            if (!(message.identitySecret && typeof message.identitySecret.length === "number" || $util.isString(message.identitySecret)))
                return "identitySecret: buffer expected";
        if (message.secret_1 != null && message.hasOwnProperty("secret_1"))
            if (!(message.secret_1 && typeof message.secret_1.length === "number" || $util.isString(message.secret_1)))
                return "secret_1: buffer expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        if (message.phoneNumberHint != null && message.hasOwnProperty("phoneNumberHint"))
            if (!$util.isString(message.phoneNumberHint))
                return "phoneNumberHint: string expected";
        if (message.confirmType != null && message.hasOwnProperty("confirmType"))
            if (!$util.isInteger(message.confirmType))
                return "confirmType: integer expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_AddAuthenticator_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_AddAuthenticator_Response} CTwoFactor_AddAuthenticator_Response
     */
    CTwoFactor_AddAuthenticator_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_AddAuthenticator_Response)
            return object;
        let message = new $root.CTwoFactor_AddAuthenticator_Response();
        if (object.sharedSecret != null)
            if (typeof object.sharedSecret === "string")
                $util.base64.decode(object.sharedSecret, message.sharedSecret = $util.newBuffer($util.base64.length(object.sharedSecret)), 0);
            else if (object.sharedSecret.length >= 0)
                message.sharedSecret = object.sharedSecret;
        if (object.serialNumber != null)
            if ($util.Long)
                (message.serialNumber = $util.Long.fromValue(object.serialNumber)).unsigned = false;
            else if (typeof object.serialNumber === "string")
                message.serialNumber = parseInt(object.serialNumber, 10);
            else if (typeof object.serialNumber === "number")
                message.serialNumber = object.serialNumber;
            else if (typeof object.serialNumber === "object")
                message.serialNumber = new $util.LongBits(object.serialNumber.low >>> 0, object.serialNumber.high >>> 0).toNumber();
        if (object.revocationCode != null)
            message.revocationCode = String(object.revocationCode);
        if (object.uri != null)
            message.uri = String(object.uri);
        if (object.serverTime != null)
            if ($util.Long)
                (message.serverTime = $util.Long.fromValue(object.serverTime)).unsigned = true;
            else if (typeof object.serverTime === "string")
                message.serverTime = parseInt(object.serverTime, 10);
            else if (typeof object.serverTime === "number")
                message.serverTime = object.serverTime;
            else if (typeof object.serverTime === "object")
                message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber(true);
        if (object.accountName != null)
            message.accountName = String(object.accountName);
        if (object.tokenGid != null)
            message.tokenGid = String(object.tokenGid);
        if (object.identitySecret != null)
            if (typeof object.identitySecret === "string")
                $util.base64.decode(object.identitySecret, message.identitySecret = $util.newBuffer($util.base64.length(object.identitySecret)), 0);
            else if (object.identitySecret.length >= 0)
                message.identitySecret = object.identitySecret;
        if (object.secret_1 != null)
            if (typeof object.secret_1 === "string")
                $util.base64.decode(object.secret_1, message.secret_1 = $util.newBuffer($util.base64.length(object.secret_1)), 0);
            else if (object.secret_1.length >= 0)
                message.secret_1 = object.secret_1;
        if (object.status != null)
            message.status = object.status | 0;
        if (object.phoneNumberHint != null)
            message.phoneNumberHint = String(object.phoneNumberHint);
        if (object.confirmType != null)
            message.confirmType = object.confirmType | 0;
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_AddAuthenticator_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @static
     * @param {CTwoFactor_AddAuthenticator_Response} message CTwoFactor_AddAuthenticator_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_AddAuthenticator_Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if (options.bytes === String)
                object.sharedSecret = "";
            else {
                object.sharedSecret = [];
                if (options.bytes !== Array)
                    object.sharedSecret = $util.newBuffer(object.sharedSecret);
            }
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.serialNumber = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serialNumber = options.longs === String ? "0" : 0;
            object.revocationCode = "";
            object.uri = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serverTime = options.longs === String ? "0" : 0;
            object.accountName = "";
            object.tokenGid = "";
            if (options.bytes === String)
                object.identitySecret = "";
            else {
                object.identitySecret = [];
                if (options.bytes !== Array)
                    object.identitySecret = $util.newBuffer(object.identitySecret);
            }
            if (options.bytes === String)
                object.secret_1 = "";
            else {
                object.secret_1 = [];
                if (options.bytes !== Array)
                    object.secret_1 = $util.newBuffer(object.secret_1);
            }
            object.status = 0;
            object.phoneNumberHint = "";
            object.confirmType = 0;
        }
        if (message.sharedSecret != null && message.hasOwnProperty("sharedSecret"))
            object.sharedSecret = options.bytes === String ? $util.base64.encode(message.sharedSecret, 0, message.sharedSecret.length) : options.bytes === Array ? Array.prototype.slice.call(message.sharedSecret) : message.sharedSecret;
        if (message.serialNumber != null && message.hasOwnProperty("serialNumber"))
            if (typeof message.serialNumber === "number")
                object.serialNumber = options.longs === String ? String(message.serialNumber) : message.serialNumber;
            else
                object.serialNumber = options.longs === String ? $util.Long.prototype.toString.call(message.serialNumber) : options.longs === Number ? new $util.LongBits(message.serialNumber.low >>> 0, message.serialNumber.high >>> 0).toNumber() : message.serialNumber;
        if (message.revocationCode != null && message.hasOwnProperty("revocationCode"))
            object.revocationCode = message.revocationCode;
        if (message.uri != null && message.hasOwnProperty("uri"))
            object.uri = message.uri;
        if (message.serverTime != null && message.hasOwnProperty("serverTime"))
            if (typeof message.serverTime === "number")
                object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
            else
                object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber(true) : message.serverTime;
        if (message.accountName != null && message.hasOwnProperty("accountName"))
            object.accountName = message.accountName;
        if (message.tokenGid != null && message.hasOwnProperty("tokenGid"))
            object.tokenGid = message.tokenGid;
        if (message.identitySecret != null && message.hasOwnProperty("identitySecret"))
            object.identitySecret = options.bytes === String ? $util.base64.encode(message.identitySecret, 0, message.identitySecret.length) : options.bytes === Array ? Array.prototype.slice.call(message.identitySecret) : message.identitySecret;
        if (message.secret_1 != null && message.hasOwnProperty("secret_1"))
            object.secret_1 = options.bytes === String ? $util.base64.encode(message.secret_1, 0, message.secret_1.length) : options.bytes === Array ? Array.prototype.slice.call(message.secret_1) : message.secret_1;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        if (message.phoneNumberHint != null && message.hasOwnProperty("phoneNumberHint"))
            object.phoneNumberHint = message.phoneNumberHint;
        if (message.confirmType != null && message.hasOwnProperty("confirmType"))
            object.confirmType = message.confirmType;
        return object;
    };

    /**
     * Converts this CTwoFactor_AddAuthenticator_Response to JSON.
     * @function toJSON
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_AddAuthenticator_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_AddAuthenticator_Response
     * @function getTypeUrl
     * @memberof CTwoFactor_AddAuthenticator_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_AddAuthenticator_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_AddAuthenticator_Response";
    };

    return CTwoFactor_AddAuthenticator_Response;
})();

export const CTwoFactor_CreateEmergencyCodes_Response = $root.CTwoFactor_CreateEmergencyCodes_Response = (() => {

    /**
     * Properties of a CTwoFactor_CreateEmergencyCodes_Response.
     * @exports ICTwoFactor_CreateEmergencyCodes_Response
     * @interface ICTwoFactor_CreateEmergencyCodes_Response
     * @property {Array.<string>|null} [codes] CTwoFactor_CreateEmergencyCodes_Response codes
     */

    /**
     * Constructs a new CTwoFactor_CreateEmergencyCodes_Response.
     * @exports CTwoFactor_CreateEmergencyCodes_Response
     * @classdesc Represents a CTwoFactor_CreateEmergencyCodes_Response.
     * @implements ICTwoFactor_CreateEmergencyCodes_Response
     * @constructor
     * @param {ICTwoFactor_CreateEmergencyCodes_Response=} [properties] Properties to set
     */
    function CTwoFactor_CreateEmergencyCodes_Response(properties) {
        this.codes = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_CreateEmergencyCodes_Response codes.
     * @member {Array.<string>} codes
     * @memberof CTwoFactor_CreateEmergencyCodes_Response
     * @instance
     */
    CTwoFactor_CreateEmergencyCodes_Response.prototype.codes = $util.emptyArray;

    /**
     * Creates a new CTwoFactor_CreateEmergencyCodes_Response instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_CreateEmergencyCodes_Response
     * @static
     * @param {ICTwoFactor_CreateEmergencyCodes_Response=} [properties] Properties to set
     * @returns {CTwoFactor_CreateEmergencyCodes_Response} CTwoFactor_CreateEmergencyCodes_Response instance
     */
    CTwoFactor_CreateEmergencyCodes_Response.create = function create(properties) {
        return new CTwoFactor_CreateEmergencyCodes_Response(properties);
    };

    /**
     * Encodes the specified CTwoFactor_CreateEmergencyCodes_Response message. Does not implicitly {@link CTwoFactor_CreateEmergencyCodes_Response.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_CreateEmergencyCodes_Response
     * @static
     * @param {ICTwoFactor_CreateEmergencyCodes_Response} message CTwoFactor_CreateEmergencyCodes_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_CreateEmergencyCodes_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.codes != null && message.codes.length)
            for (let i = 0; i < message.codes.length; ++i)
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.codes[i]);
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_CreateEmergencyCodes_Response message, length delimited. Does not implicitly {@link CTwoFactor_CreateEmergencyCodes_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_CreateEmergencyCodes_Response
     * @static
     * @param {ICTwoFactor_CreateEmergencyCodes_Response} message CTwoFactor_CreateEmergencyCodes_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_CreateEmergencyCodes_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_CreateEmergencyCodes_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_CreateEmergencyCodes_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_CreateEmergencyCodes_Response} CTwoFactor_CreateEmergencyCodes_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_CreateEmergencyCodes_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_CreateEmergencyCodes_Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    if (!(message.codes && message.codes.length))
                        message.codes = [];
                    message.codes.push(reader.string());
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
     * Decodes a CTwoFactor_CreateEmergencyCodes_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_CreateEmergencyCodes_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_CreateEmergencyCodes_Response} CTwoFactor_CreateEmergencyCodes_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_CreateEmergencyCodes_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_CreateEmergencyCodes_Response message.
     * @function verify
     * @memberof CTwoFactor_CreateEmergencyCodes_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_CreateEmergencyCodes_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.codes != null && message.hasOwnProperty("codes")) {
            if (!Array.isArray(message.codes))
                return "codes: array expected";
            for (let i = 0; i < message.codes.length; ++i)
                if (!$util.isString(message.codes[i]))
                    return "codes: string[] expected";
        }
        return null;
    };

    /**
     * Creates a CTwoFactor_CreateEmergencyCodes_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_CreateEmergencyCodes_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_CreateEmergencyCodes_Response} CTwoFactor_CreateEmergencyCodes_Response
     */
    CTwoFactor_CreateEmergencyCodes_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_CreateEmergencyCodes_Response)
            return object;
        let message = new $root.CTwoFactor_CreateEmergencyCodes_Response();
        if (object.codes) {
            if (!Array.isArray(object.codes))
                throw TypeError(".CTwoFactor_CreateEmergencyCodes_Response.codes: array expected");
            message.codes = [];
            for (let i = 0; i < object.codes.length; ++i)
                message.codes[i] = String(object.codes[i]);
        }
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_CreateEmergencyCodes_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_CreateEmergencyCodes_Response
     * @static
     * @param {CTwoFactor_CreateEmergencyCodes_Response} message CTwoFactor_CreateEmergencyCodes_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_CreateEmergencyCodes_Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.codes = [];
        if (message.codes && message.codes.length) {
            object.codes = [];
            for (let j = 0; j < message.codes.length; ++j)
                object.codes[j] = message.codes[j];
        }
        return object;
    };

    /**
     * Converts this CTwoFactor_CreateEmergencyCodes_Response to JSON.
     * @function toJSON
     * @memberof CTwoFactor_CreateEmergencyCodes_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_CreateEmergencyCodes_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_CreateEmergencyCodes_Response
     * @function getTypeUrl
     * @memberof CTwoFactor_CreateEmergencyCodes_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_CreateEmergencyCodes_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_CreateEmergencyCodes_Response";
    };

    return CTwoFactor_CreateEmergencyCodes_Response;
})();

export const CTwoFactor_DestroyEmergencyCodes_Response = $root.CTwoFactor_DestroyEmergencyCodes_Response = (() => {

    /**
     * Properties of a CTwoFactor_DestroyEmergencyCodes_Response.
     * @exports ICTwoFactor_DestroyEmergencyCodes_Response
     * @interface ICTwoFactor_DestroyEmergencyCodes_Response
     */

    /**
     * Constructs a new CTwoFactor_DestroyEmergencyCodes_Response.
     * @exports CTwoFactor_DestroyEmergencyCodes_Response
     * @classdesc Represents a CTwoFactor_DestroyEmergencyCodes_Response.
     * @implements ICTwoFactor_DestroyEmergencyCodes_Response
     * @constructor
     * @param {ICTwoFactor_DestroyEmergencyCodes_Response=} [properties] Properties to set
     */
    function CTwoFactor_DestroyEmergencyCodes_Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new CTwoFactor_DestroyEmergencyCodes_Response instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_DestroyEmergencyCodes_Response
     * @static
     * @param {ICTwoFactor_DestroyEmergencyCodes_Response=} [properties] Properties to set
     * @returns {CTwoFactor_DestroyEmergencyCodes_Response} CTwoFactor_DestroyEmergencyCodes_Response instance
     */
    CTwoFactor_DestroyEmergencyCodes_Response.create = function create(properties) {
        return new CTwoFactor_DestroyEmergencyCodes_Response(properties);
    };

    /**
     * Encodes the specified CTwoFactor_DestroyEmergencyCodes_Response message. Does not implicitly {@link CTwoFactor_DestroyEmergencyCodes_Response.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_DestroyEmergencyCodes_Response
     * @static
     * @param {ICTwoFactor_DestroyEmergencyCodes_Response} message CTwoFactor_DestroyEmergencyCodes_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_DestroyEmergencyCodes_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_DestroyEmergencyCodes_Response message, length delimited. Does not implicitly {@link CTwoFactor_DestroyEmergencyCodes_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_DestroyEmergencyCodes_Response
     * @static
     * @param {ICTwoFactor_DestroyEmergencyCodes_Response} message CTwoFactor_DestroyEmergencyCodes_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_DestroyEmergencyCodes_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_DestroyEmergencyCodes_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_DestroyEmergencyCodes_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_DestroyEmergencyCodes_Response} CTwoFactor_DestroyEmergencyCodes_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_DestroyEmergencyCodes_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_DestroyEmergencyCodes_Response();
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
     * Decodes a CTwoFactor_DestroyEmergencyCodes_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_DestroyEmergencyCodes_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_DestroyEmergencyCodes_Response} CTwoFactor_DestroyEmergencyCodes_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_DestroyEmergencyCodes_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_DestroyEmergencyCodes_Response message.
     * @function verify
     * @memberof CTwoFactor_DestroyEmergencyCodes_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_DestroyEmergencyCodes_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_DestroyEmergencyCodes_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_DestroyEmergencyCodes_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_DestroyEmergencyCodes_Response} CTwoFactor_DestroyEmergencyCodes_Response
     */
    CTwoFactor_DestroyEmergencyCodes_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_DestroyEmergencyCodes_Response)
            return object;
        return new $root.CTwoFactor_DestroyEmergencyCodes_Response();
    };

    /**
     * Creates a plain object from a CTwoFactor_DestroyEmergencyCodes_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_DestroyEmergencyCodes_Response
     * @static
     * @param {CTwoFactor_DestroyEmergencyCodes_Response} message CTwoFactor_DestroyEmergencyCodes_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_DestroyEmergencyCodes_Response.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this CTwoFactor_DestroyEmergencyCodes_Response to JSON.
     * @function toJSON
     * @memberof CTwoFactor_DestroyEmergencyCodes_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_DestroyEmergencyCodes_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_DestroyEmergencyCodes_Response
     * @function getTypeUrl
     * @memberof CTwoFactor_DestroyEmergencyCodes_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_DestroyEmergencyCodes_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_DestroyEmergencyCodes_Response";
    };

    return CTwoFactor_DestroyEmergencyCodes_Response;
})();

export const CTwoFactor_FinalizeAddAuthenticator_Request = $root.CTwoFactor_FinalizeAddAuthenticator_Request = (() => {

    /**
     * Properties of a CTwoFactor_FinalizeAddAuthenticator_Request.
     * @exports ICTwoFactor_FinalizeAddAuthenticator_Request
     * @interface ICTwoFactor_FinalizeAddAuthenticator_Request
     * @property {number|Long|null} [steamid] CTwoFactor_FinalizeAddAuthenticator_Request steamid
     * @property {string|null} [authenticatorCode] CTwoFactor_FinalizeAddAuthenticator_Request authenticatorCode
     * @property {number|Long|null} [authenticatorTime] CTwoFactor_FinalizeAddAuthenticator_Request authenticatorTime
     * @property {string|null} [activationCode] CTwoFactor_FinalizeAddAuthenticator_Request activationCode
     * @property {Array.<string>|null} [httpHeaders] CTwoFactor_FinalizeAddAuthenticator_Request httpHeaders
     * @property {boolean|null} [validateSmsCode] CTwoFactor_FinalizeAddAuthenticator_Request validateSmsCode
     */

    /**
     * Constructs a new CTwoFactor_FinalizeAddAuthenticator_Request.
     * @exports CTwoFactor_FinalizeAddAuthenticator_Request
     * @classdesc Represents a CTwoFactor_FinalizeAddAuthenticator_Request.
     * @implements ICTwoFactor_FinalizeAddAuthenticator_Request
     * @constructor
     * @param {ICTwoFactor_FinalizeAddAuthenticator_Request=} [properties] Properties to set
     */
    function CTwoFactor_FinalizeAddAuthenticator_Request(properties) {
        this.httpHeaders = [];
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_FinalizeAddAuthenticator_Request steamid.
     * @member {number|Long} steamid
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Request
     * @instance
     */
    CTwoFactor_FinalizeAddAuthenticator_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CTwoFactor_FinalizeAddAuthenticator_Request authenticatorCode.
     * @member {string} authenticatorCode
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Request
     * @instance
     */
    CTwoFactor_FinalizeAddAuthenticator_Request.prototype.authenticatorCode = "";

    /**
     * CTwoFactor_FinalizeAddAuthenticator_Request authenticatorTime.
     * @member {number|Long} authenticatorTime
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Request
     * @instance
     */
    CTwoFactor_FinalizeAddAuthenticator_Request.prototype.authenticatorTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CTwoFactor_FinalizeAddAuthenticator_Request activationCode.
     * @member {string} activationCode
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Request
     * @instance
     */
    CTwoFactor_FinalizeAddAuthenticator_Request.prototype.activationCode = "";

    /**
     * CTwoFactor_FinalizeAddAuthenticator_Request httpHeaders.
     * @member {Array.<string>} httpHeaders
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Request
     * @instance
     */
    CTwoFactor_FinalizeAddAuthenticator_Request.prototype.httpHeaders = $util.emptyArray;

    /**
     * CTwoFactor_FinalizeAddAuthenticator_Request validateSmsCode.
     * @member {boolean} validateSmsCode
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Request
     * @instance
     */
    CTwoFactor_FinalizeAddAuthenticator_Request.prototype.validateSmsCode = false;

    /**
     * Creates a new CTwoFactor_FinalizeAddAuthenticator_Request instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Request
     * @static
     * @param {ICTwoFactor_FinalizeAddAuthenticator_Request=} [properties] Properties to set
     * @returns {CTwoFactor_FinalizeAddAuthenticator_Request} CTwoFactor_FinalizeAddAuthenticator_Request instance
     */
    CTwoFactor_FinalizeAddAuthenticator_Request.create = function create(properties) {
        return new CTwoFactor_FinalizeAddAuthenticator_Request(properties);
    };

    /**
     * Encodes the specified CTwoFactor_FinalizeAddAuthenticator_Request message. Does not implicitly {@link CTwoFactor_FinalizeAddAuthenticator_Request.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Request
     * @static
     * @param {ICTwoFactor_FinalizeAddAuthenticator_Request} message CTwoFactor_FinalizeAddAuthenticator_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_FinalizeAddAuthenticator_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
        if (message.authenticatorCode != null && Object.hasOwnProperty.call(message, "authenticatorCode"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.authenticatorCode);
        if (message.authenticatorTime != null && Object.hasOwnProperty.call(message, "authenticatorTime"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.authenticatorTime);
        if (message.activationCode != null && Object.hasOwnProperty.call(message, "activationCode"))
            writer.uint32(/* id 4, wireType 2 =*/34).string(message.activationCode);
        if (message.httpHeaders != null && message.httpHeaders.length)
            for (let i = 0; i < message.httpHeaders.length; ++i)
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.httpHeaders[i]);
        if (message.validateSmsCode != null && Object.hasOwnProperty.call(message, "validateSmsCode"))
            writer.uint32(/* id 6, wireType 0 =*/48).bool(message.validateSmsCode);
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_FinalizeAddAuthenticator_Request message, length delimited. Does not implicitly {@link CTwoFactor_FinalizeAddAuthenticator_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Request
     * @static
     * @param {ICTwoFactor_FinalizeAddAuthenticator_Request} message CTwoFactor_FinalizeAddAuthenticator_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_FinalizeAddAuthenticator_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_FinalizeAddAuthenticator_Request message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_FinalizeAddAuthenticator_Request} CTwoFactor_FinalizeAddAuthenticator_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_FinalizeAddAuthenticator_Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_FinalizeAddAuthenticator_Request();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.steamid = reader.fixed64();
                    break;
                }
            case 2: {
                    message.authenticatorCode = reader.string();
                    break;
                }
            case 3: {
                    message.authenticatorTime = reader.uint64();
                    break;
                }
            case 4: {
                    message.activationCode = reader.string();
                    break;
                }
            case 5: {
                    if (!(message.httpHeaders && message.httpHeaders.length))
                        message.httpHeaders = [];
                    message.httpHeaders.push(reader.string());
                    break;
                }
            case 6: {
                    message.validateSmsCode = reader.bool();
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
     * Decodes a CTwoFactor_FinalizeAddAuthenticator_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_FinalizeAddAuthenticator_Request} CTwoFactor_FinalizeAddAuthenticator_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_FinalizeAddAuthenticator_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_FinalizeAddAuthenticator_Request message.
     * @function verify
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_FinalizeAddAuthenticator_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                return "steamid: integer|Long expected";
        if (message.authenticatorCode != null && message.hasOwnProperty("authenticatorCode"))
            if (!$util.isString(message.authenticatorCode))
                return "authenticatorCode: string expected";
        if (message.authenticatorTime != null && message.hasOwnProperty("authenticatorTime"))
            if (!$util.isInteger(message.authenticatorTime) && !(message.authenticatorTime && $util.isInteger(message.authenticatorTime.low) && $util.isInteger(message.authenticatorTime.high)))
                return "authenticatorTime: integer|Long expected";
        if (message.activationCode != null && message.hasOwnProperty("activationCode"))
            if (!$util.isString(message.activationCode))
                return "activationCode: string expected";
        if (message.httpHeaders != null && message.hasOwnProperty("httpHeaders")) {
            if (!Array.isArray(message.httpHeaders))
                return "httpHeaders: array expected";
            for (let i = 0; i < message.httpHeaders.length; ++i)
                if (!$util.isString(message.httpHeaders[i]))
                    return "httpHeaders: string[] expected";
        }
        if (message.validateSmsCode != null && message.hasOwnProperty("validateSmsCode"))
            if (typeof message.validateSmsCode !== "boolean")
                return "validateSmsCode: boolean expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_FinalizeAddAuthenticator_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_FinalizeAddAuthenticator_Request} CTwoFactor_FinalizeAddAuthenticator_Request
     */
    CTwoFactor_FinalizeAddAuthenticator_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_FinalizeAddAuthenticator_Request)
            return object;
        let message = new $root.CTwoFactor_FinalizeAddAuthenticator_Request();
        if (object.steamid != null)
            if ($util.Long)
                (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
            else if (typeof object.steamid === "string")
                message.steamid = parseInt(object.steamid, 10);
            else if (typeof object.steamid === "number")
                message.steamid = object.steamid;
            else if (typeof object.steamid === "object")
                message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
        if (object.authenticatorCode != null)
            message.authenticatorCode = String(object.authenticatorCode);
        if (object.authenticatorTime != null)
            if ($util.Long)
                (message.authenticatorTime = $util.Long.fromValue(object.authenticatorTime)).unsigned = true;
            else if (typeof object.authenticatorTime === "string")
                message.authenticatorTime = parseInt(object.authenticatorTime, 10);
            else if (typeof object.authenticatorTime === "number")
                message.authenticatorTime = object.authenticatorTime;
            else if (typeof object.authenticatorTime === "object")
                message.authenticatorTime = new $util.LongBits(object.authenticatorTime.low >>> 0, object.authenticatorTime.high >>> 0).toNumber(true);
        if (object.activationCode != null)
            message.activationCode = String(object.activationCode);
        if (object.httpHeaders) {
            if (!Array.isArray(object.httpHeaders))
                throw TypeError(".CTwoFactor_FinalizeAddAuthenticator_Request.httpHeaders: array expected");
            message.httpHeaders = [];
            for (let i = 0; i < object.httpHeaders.length; ++i)
                message.httpHeaders[i] = String(object.httpHeaders[i]);
        }
        if (object.validateSmsCode != null)
            message.validateSmsCode = Boolean(object.validateSmsCode);
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_FinalizeAddAuthenticator_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Request
     * @static
     * @param {CTwoFactor_FinalizeAddAuthenticator_Request} message CTwoFactor_FinalizeAddAuthenticator_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_FinalizeAddAuthenticator_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.arrays || options.defaults)
            object.httpHeaders = [];
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.steamid = options.longs === String ? "0" : 0;
            object.authenticatorCode = "";
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.authenticatorTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.authenticatorTime = options.longs === String ? "0" : 0;
            object.activationCode = "";
            object.validateSmsCode = false;
        }
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (typeof message.steamid === "number")
                object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
            else
                object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
        if (message.authenticatorCode != null && message.hasOwnProperty("authenticatorCode"))
            object.authenticatorCode = message.authenticatorCode;
        if (message.authenticatorTime != null && message.hasOwnProperty("authenticatorTime"))
            if (typeof message.authenticatorTime === "number")
                object.authenticatorTime = options.longs === String ? String(message.authenticatorTime) : message.authenticatorTime;
            else
                object.authenticatorTime = options.longs === String ? $util.Long.prototype.toString.call(message.authenticatorTime) : options.longs === Number ? new $util.LongBits(message.authenticatorTime.low >>> 0, message.authenticatorTime.high >>> 0).toNumber(true) : message.authenticatorTime;
        if (message.activationCode != null && message.hasOwnProperty("activationCode"))
            object.activationCode = message.activationCode;
        if (message.httpHeaders && message.httpHeaders.length) {
            object.httpHeaders = [];
            for (let j = 0; j < message.httpHeaders.length; ++j)
                object.httpHeaders[j] = message.httpHeaders[j];
        }
        if (message.validateSmsCode != null && message.hasOwnProperty("validateSmsCode"))
            object.validateSmsCode = message.validateSmsCode;
        return object;
    };

    /**
     * Converts this CTwoFactor_FinalizeAddAuthenticator_Request to JSON.
     * @function toJSON
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_FinalizeAddAuthenticator_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_FinalizeAddAuthenticator_Request
     * @function getTypeUrl
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_FinalizeAddAuthenticator_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_FinalizeAddAuthenticator_Request";
    };

    return CTwoFactor_FinalizeAddAuthenticator_Request;
})();

export const CTwoFactor_FinalizeAddAuthenticator_Response = $root.CTwoFactor_FinalizeAddAuthenticator_Response = (() => {

    /**
     * Properties of a CTwoFactor_FinalizeAddAuthenticator_Response.
     * @exports ICTwoFactor_FinalizeAddAuthenticator_Response
     * @interface ICTwoFactor_FinalizeAddAuthenticator_Response
     * @property {boolean|null} [success] CTwoFactor_FinalizeAddAuthenticator_Response success
     * @property {boolean|null} [wantMore] CTwoFactor_FinalizeAddAuthenticator_Response wantMore
     * @property {number|Long|null} [serverTime] CTwoFactor_FinalizeAddAuthenticator_Response serverTime
     * @property {number|null} [status] CTwoFactor_FinalizeAddAuthenticator_Response status
     */

    /**
     * Constructs a new CTwoFactor_FinalizeAddAuthenticator_Response.
     * @exports CTwoFactor_FinalizeAddAuthenticator_Response
     * @classdesc Represents a CTwoFactor_FinalizeAddAuthenticator_Response.
     * @implements ICTwoFactor_FinalizeAddAuthenticator_Response
     * @constructor
     * @param {ICTwoFactor_FinalizeAddAuthenticator_Response=} [properties] Properties to set
     */
    function CTwoFactor_FinalizeAddAuthenticator_Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_FinalizeAddAuthenticator_Response success.
     * @member {boolean} success
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Response
     * @instance
     */
    CTwoFactor_FinalizeAddAuthenticator_Response.prototype.success = false;

    /**
     * CTwoFactor_FinalizeAddAuthenticator_Response wantMore.
     * @member {boolean} wantMore
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Response
     * @instance
     */
    CTwoFactor_FinalizeAddAuthenticator_Response.prototype.wantMore = false;

    /**
     * CTwoFactor_FinalizeAddAuthenticator_Response serverTime.
     * @member {number|Long} serverTime
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Response
     * @instance
     */
    CTwoFactor_FinalizeAddAuthenticator_Response.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CTwoFactor_FinalizeAddAuthenticator_Response status.
     * @member {number} status
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Response
     * @instance
     */
    CTwoFactor_FinalizeAddAuthenticator_Response.prototype.status = 0;

    /**
     * Creates a new CTwoFactor_FinalizeAddAuthenticator_Response instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Response
     * @static
     * @param {ICTwoFactor_FinalizeAddAuthenticator_Response=} [properties] Properties to set
     * @returns {CTwoFactor_FinalizeAddAuthenticator_Response} CTwoFactor_FinalizeAddAuthenticator_Response instance
     */
    CTwoFactor_FinalizeAddAuthenticator_Response.create = function create(properties) {
        return new CTwoFactor_FinalizeAddAuthenticator_Response(properties);
    };

    /**
     * Encodes the specified CTwoFactor_FinalizeAddAuthenticator_Response message. Does not implicitly {@link CTwoFactor_FinalizeAddAuthenticator_Response.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Response
     * @static
     * @param {ICTwoFactor_FinalizeAddAuthenticator_Response} message CTwoFactor_FinalizeAddAuthenticator_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_FinalizeAddAuthenticator_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.wantMore != null && Object.hasOwnProperty.call(message, "wantMore"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.wantMore);
        if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.serverTime);
        if (message.status != null && Object.hasOwnProperty.call(message, "status"))
            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.status);
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_FinalizeAddAuthenticator_Response message, length delimited. Does not implicitly {@link CTwoFactor_FinalizeAddAuthenticator_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Response
     * @static
     * @param {ICTwoFactor_FinalizeAddAuthenticator_Response} message CTwoFactor_FinalizeAddAuthenticator_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_FinalizeAddAuthenticator_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_FinalizeAddAuthenticator_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_FinalizeAddAuthenticator_Response} CTwoFactor_FinalizeAddAuthenticator_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_FinalizeAddAuthenticator_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_FinalizeAddAuthenticator_Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.wantMore = reader.bool();
                    break;
                }
            case 3: {
                    message.serverTime = reader.uint64();
                    break;
                }
            case 4: {
                    message.status = reader.int32();
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
     * Decodes a CTwoFactor_FinalizeAddAuthenticator_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_FinalizeAddAuthenticator_Response} CTwoFactor_FinalizeAddAuthenticator_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_FinalizeAddAuthenticator_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_FinalizeAddAuthenticator_Response message.
     * @function verify
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_FinalizeAddAuthenticator_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.wantMore != null && message.hasOwnProperty("wantMore"))
            if (typeof message.wantMore !== "boolean")
                return "wantMore: boolean expected";
        if (message.serverTime != null && message.hasOwnProperty("serverTime"))
            if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                return "serverTime: integer|Long expected";
        if (message.status != null && message.hasOwnProperty("status"))
            if (!$util.isInteger(message.status))
                return "status: integer expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_FinalizeAddAuthenticator_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_FinalizeAddAuthenticator_Response} CTwoFactor_FinalizeAddAuthenticator_Response
     */
    CTwoFactor_FinalizeAddAuthenticator_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_FinalizeAddAuthenticator_Response)
            return object;
        let message = new $root.CTwoFactor_FinalizeAddAuthenticator_Response();
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.wantMore != null)
            message.wantMore = Boolean(object.wantMore);
        if (object.serverTime != null)
            if ($util.Long)
                (message.serverTime = $util.Long.fromValue(object.serverTime)).unsigned = true;
            else if (typeof object.serverTime === "string")
                message.serverTime = parseInt(object.serverTime, 10);
            else if (typeof object.serverTime === "number")
                message.serverTime = object.serverTime;
            else if (typeof object.serverTime === "object")
                message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber(true);
        if (object.status != null)
            message.status = object.status | 0;
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_FinalizeAddAuthenticator_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Response
     * @static
     * @param {CTwoFactor_FinalizeAddAuthenticator_Response} message CTwoFactor_FinalizeAddAuthenticator_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_FinalizeAddAuthenticator_Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.success = false;
            object.wantMore = false;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serverTime = options.longs === String ? "0" : 0;
            object.status = 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.wantMore != null && message.hasOwnProperty("wantMore"))
            object.wantMore = message.wantMore;
        if (message.serverTime != null && message.hasOwnProperty("serverTime"))
            if (typeof message.serverTime === "number")
                object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
            else
                object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber(true) : message.serverTime;
        if (message.status != null && message.hasOwnProperty("status"))
            object.status = message.status;
        return object;
    };

    /**
     * Converts this CTwoFactor_FinalizeAddAuthenticator_Response to JSON.
     * @function toJSON
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_FinalizeAddAuthenticator_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_FinalizeAddAuthenticator_Response
     * @function getTypeUrl
     * @memberof CTwoFactor_FinalizeAddAuthenticator_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_FinalizeAddAuthenticator_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_FinalizeAddAuthenticator_Response";
    };

    return CTwoFactor_FinalizeAddAuthenticator_Response;
})();

export const CTwoFactor_RemoveAuthenticator_Request = $root.CTwoFactor_RemoveAuthenticator_Request = (() => {

    /**
     * Properties of a CTwoFactor_RemoveAuthenticator_Request.
     * @exports ICTwoFactor_RemoveAuthenticator_Request
     * @interface ICTwoFactor_RemoveAuthenticator_Request
     * @property {string|null} [revocationCode] CTwoFactor_RemoveAuthenticator_Request revocationCode
     * @property {number|null} [revocationReason] CTwoFactor_RemoveAuthenticator_Request revocationReason
     * @property {number|null} [steamguardScheme] CTwoFactor_RemoveAuthenticator_Request steamguardScheme
     * @property {boolean|null} [removeAllSteamguardCookies] CTwoFactor_RemoveAuthenticator_Request removeAllSteamguardCookies
     */

    /**
     * Constructs a new CTwoFactor_RemoveAuthenticator_Request.
     * @exports CTwoFactor_RemoveAuthenticator_Request
     * @classdesc Represents a CTwoFactor_RemoveAuthenticator_Request.
     * @implements ICTwoFactor_RemoveAuthenticator_Request
     * @constructor
     * @param {ICTwoFactor_RemoveAuthenticator_Request=} [properties] Properties to set
     */
    function CTwoFactor_RemoveAuthenticator_Request(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_RemoveAuthenticator_Request revocationCode.
     * @member {string} revocationCode
     * @memberof CTwoFactor_RemoveAuthenticator_Request
     * @instance
     */
    CTwoFactor_RemoveAuthenticator_Request.prototype.revocationCode = "";

    /**
     * CTwoFactor_RemoveAuthenticator_Request revocationReason.
     * @member {number} revocationReason
     * @memberof CTwoFactor_RemoveAuthenticator_Request
     * @instance
     */
    CTwoFactor_RemoveAuthenticator_Request.prototype.revocationReason = 0;

    /**
     * CTwoFactor_RemoveAuthenticator_Request steamguardScheme.
     * @member {number} steamguardScheme
     * @memberof CTwoFactor_RemoveAuthenticator_Request
     * @instance
     */
    CTwoFactor_RemoveAuthenticator_Request.prototype.steamguardScheme = 0;

    /**
     * CTwoFactor_RemoveAuthenticator_Request removeAllSteamguardCookies.
     * @member {boolean} removeAllSteamguardCookies
     * @memberof CTwoFactor_RemoveAuthenticator_Request
     * @instance
     */
    CTwoFactor_RemoveAuthenticator_Request.prototype.removeAllSteamguardCookies = false;

    /**
     * Creates a new CTwoFactor_RemoveAuthenticator_Request instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_RemoveAuthenticator_Request
     * @static
     * @param {ICTwoFactor_RemoveAuthenticator_Request=} [properties] Properties to set
     * @returns {CTwoFactor_RemoveAuthenticator_Request} CTwoFactor_RemoveAuthenticator_Request instance
     */
    CTwoFactor_RemoveAuthenticator_Request.create = function create(properties) {
        return new CTwoFactor_RemoveAuthenticator_Request(properties);
    };

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticator_Request message. Does not implicitly {@link CTwoFactor_RemoveAuthenticator_Request.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_RemoveAuthenticator_Request
     * @static
     * @param {ICTwoFactor_RemoveAuthenticator_Request} message CTwoFactor_RemoveAuthenticator_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_RemoveAuthenticator_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.revocationCode != null && Object.hasOwnProperty.call(message, "revocationCode"))
            writer.uint32(/* id 2, wireType 2 =*/18).string(message.revocationCode);
        if (message.revocationReason != null && Object.hasOwnProperty.call(message, "revocationReason"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.revocationReason);
        if (message.steamguardScheme != null && Object.hasOwnProperty.call(message, "steamguardScheme"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.steamguardScheme);
        if (message.removeAllSteamguardCookies != null && Object.hasOwnProperty.call(message, "removeAllSteamguardCookies"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.removeAllSteamguardCookies);
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticator_Request message, length delimited. Does not implicitly {@link CTwoFactor_RemoveAuthenticator_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_RemoveAuthenticator_Request
     * @static
     * @param {ICTwoFactor_RemoveAuthenticator_Request} message CTwoFactor_RemoveAuthenticator_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_RemoveAuthenticator_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_RemoveAuthenticator_Request message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_RemoveAuthenticator_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_RemoveAuthenticator_Request} CTwoFactor_RemoveAuthenticator_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_RemoveAuthenticator_Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_RemoveAuthenticator_Request();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 2: {
                    message.revocationCode = reader.string();
                    break;
                }
            case 5: {
                    message.revocationReason = reader.uint32();
                    break;
                }
            case 6: {
                    message.steamguardScheme = reader.uint32();
                    break;
                }
            case 7: {
                    message.removeAllSteamguardCookies = reader.bool();
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
     * Decodes a CTwoFactor_RemoveAuthenticator_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_RemoveAuthenticator_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_RemoveAuthenticator_Request} CTwoFactor_RemoveAuthenticator_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_RemoveAuthenticator_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_RemoveAuthenticator_Request message.
     * @function verify
     * @memberof CTwoFactor_RemoveAuthenticator_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_RemoveAuthenticator_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.revocationCode != null && message.hasOwnProperty("revocationCode"))
            if (!$util.isString(message.revocationCode))
                return "revocationCode: string expected";
        if (message.revocationReason != null && message.hasOwnProperty("revocationReason"))
            if (!$util.isInteger(message.revocationReason))
                return "revocationReason: integer expected";
        if (message.steamguardScheme != null && message.hasOwnProperty("steamguardScheme"))
            if (!$util.isInteger(message.steamguardScheme))
                return "steamguardScheme: integer expected";
        if (message.removeAllSteamguardCookies != null && message.hasOwnProperty("removeAllSteamguardCookies"))
            if (typeof message.removeAllSteamguardCookies !== "boolean")
                return "removeAllSteamguardCookies: boolean expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_RemoveAuthenticator_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_RemoveAuthenticator_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_RemoveAuthenticator_Request} CTwoFactor_RemoveAuthenticator_Request
     */
    CTwoFactor_RemoveAuthenticator_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_RemoveAuthenticator_Request)
            return object;
        let message = new $root.CTwoFactor_RemoveAuthenticator_Request();
        if (object.revocationCode != null)
            message.revocationCode = String(object.revocationCode);
        if (object.revocationReason != null)
            message.revocationReason = object.revocationReason >>> 0;
        if (object.steamguardScheme != null)
            message.steamguardScheme = object.steamguardScheme >>> 0;
        if (object.removeAllSteamguardCookies != null)
            message.removeAllSteamguardCookies = Boolean(object.removeAllSteamguardCookies);
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_RemoveAuthenticator_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_RemoveAuthenticator_Request
     * @static
     * @param {CTwoFactor_RemoveAuthenticator_Request} message CTwoFactor_RemoveAuthenticator_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_RemoveAuthenticator_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.revocationCode = "";
            object.revocationReason = 0;
            object.steamguardScheme = 0;
            object.removeAllSteamguardCookies = false;
        }
        if (message.revocationCode != null && message.hasOwnProperty("revocationCode"))
            object.revocationCode = message.revocationCode;
        if (message.revocationReason != null && message.hasOwnProperty("revocationReason"))
            object.revocationReason = message.revocationReason;
        if (message.steamguardScheme != null && message.hasOwnProperty("steamguardScheme"))
            object.steamguardScheme = message.steamguardScheme;
        if (message.removeAllSteamguardCookies != null && message.hasOwnProperty("removeAllSteamguardCookies"))
            object.removeAllSteamguardCookies = message.removeAllSteamguardCookies;
        return object;
    };

    /**
     * Converts this CTwoFactor_RemoveAuthenticator_Request to JSON.
     * @function toJSON
     * @memberof CTwoFactor_RemoveAuthenticator_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_RemoveAuthenticator_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_RemoveAuthenticator_Request
     * @function getTypeUrl
     * @memberof CTwoFactor_RemoveAuthenticator_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_RemoveAuthenticator_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_RemoveAuthenticator_Request";
    };

    return CTwoFactor_RemoveAuthenticator_Request;
})();

export const CTwoFactor_RemoveAuthenticator_Response = $root.CTwoFactor_RemoveAuthenticator_Response = (() => {

    /**
     * Properties of a CTwoFactor_RemoveAuthenticator_Response.
     * @exports ICTwoFactor_RemoveAuthenticator_Response
     * @interface ICTwoFactor_RemoveAuthenticator_Response
     * @property {boolean|null} [success] CTwoFactor_RemoveAuthenticator_Response success
     * @property {number|Long|null} [serverTime] CTwoFactor_RemoveAuthenticator_Response serverTime
     * @property {number|null} [revocationAttemptsRemaining] CTwoFactor_RemoveAuthenticator_Response revocationAttemptsRemaining
     */

    /**
     * Constructs a new CTwoFactor_RemoveAuthenticator_Response.
     * @exports CTwoFactor_RemoveAuthenticator_Response
     * @classdesc Represents a CTwoFactor_RemoveAuthenticator_Response.
     * @implements ICTwoFactor_RemoveAuthenticator_Response
     * @constructor
     * @param {ICTwoFactor_RemoveAuthenticator_Response=} [properties] Properties to set
     */
    function CTwoFactor_RemoveAuthenticator_Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_RemoveAuthenticator_Response success.
     * @member {boolean} success
     * @memberof CTwoFactor_RemoveAuthenticator_Response
     * @instance
     */
    CTwoFactor_RemoveAuthenticator_Response.prototype.success = false;

    /**
     * CTwoFactor_RemoveAuthenticator_Response serverTime.
     * @member {number|Long} serverTime
     * @memberof CTwoFactor_RemoveAuthenticator_Response
     * @instance
     */
    CTwoFactor_RemoveAuthenticator_Response.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CTwoFactor_RemoveAuthenticator_Response revocationAttemptsRemaining.
     * @member {number} revocationAttemptsRemaining
     * @memberof CTwoFactor_RemoveAuthenticator_Response
     * @instance
     */
    CTwoFactor_RemoveAuthenticator_Response.prototype.revocationAttemptsRemaining = 0;

    /**
     * Creates a new CTwoFactor_RemoveAuthenticator_Response instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_RemoveAuthenticator_Response
     * @static
     * @param {ICTwoFactor_RemoveAuthenticator_Response=} [properties] Properties to set
     * @returns {CTwoFactor_RemoveAuthenticator_Response} CTwoFactor_RemoveAuthenticator_Response instance
     */
    CTwoFactor_RemoveAuthenticator_Response.create = function create(properties) {
        return new CTwoFactor_RemoveAuthenticator_Response(properties);
    };

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticator_Response message. Does not implicitly {@link CTwoFactor_RemoveAuthenticator_Response.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_RemoveAuthenticator_Response
     * @static
     * @param {ICTwoFactor_RemoveAuthenticator_Response} message CTwoFactor_RemoveAuthenticator_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_RemoveAuthenticator_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.serverTime);
        if (message.revocationAttemptsRemaining != null && Object.hasOwnProperty.call(message, "revocationAttemptsRemaining"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.revocationAttemptsRemaining);
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticator_Response message, length delimited. Does not implicitly {@link CTwoFactor_RemoveAuthenticator_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_RemoveAuthenticator_Response
     * @static
     * @param {ICTwoFactor_RemoveAuthenticator_Response} message CTwoFactor_RemoveAuthenticator_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_RemoveAuthenticator_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_RemoveAuthenticator_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_RemoveAuthenticator_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_RemoveAuthenticator_Response} CTwoFactor_RemoveAuthenticator_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_RemoveAuthenticator_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_RemoveAuthenticator_Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 3: {
                    message.serverTime = reader.uint64();
                    break;
                }
            case 5: {
                    message.revocationAttemptsRemaining = reader.uint32();
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
     * Decodes a CTwoFactor_RemoveAuthenticator_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_RemoveAuthenticator_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_RemoveAuthenticator_Response} CTwoFactor_RemoveAuthenticator_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_RemoveAuthenticator_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_RemoveAuthenticator_Response message.
     * @function verify
     * @memberof CTwoFactor_RemoveAuthenticator_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_RemoveAuthenticator_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.serverTime != null && message.hasOwnProperty("serverTime"))
            if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                return "serverTime: integer|Long expected";
        if (message.revocationAttemptsRemaining != null && message.hasOwnProperty("revocationAttemptsRemaining"))
            if (!$util.isInteger(message.revocationAttemptsRemaining))
                return "revocationAttemptsRemaining: integer expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_RemoveAuthenticator_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_RemoveAuthenticator_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_RemoveAuthenticator_Response} CTwoFactor_RemoveAuthenticator_Response
     */
    CTwoFactor_RemoveAuthenticator_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_RemoveAuthenticator_Response)
            return object;
        let message = new $root.CTwoFactor_RemoveAuthenticator_Response();
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.serverTime != null)
            if ($util.Long)
                (message.serverTime = $util.Long.fromValue(object.serverTime)).unsigned = true;
            else if (typeof object.serverTime === "string")
                message.serverTime = parseInt(object.serverTime, 10);
            else if (typeof object.serverTime === "number")
                message.serverTime = object.serverTime;
            else if (typeof object.serverTime === "object")
                message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber(true);
        if (object.revocationAttemptsRemaining != null)
            message.revocationAttemptsRemaining = object.revocationAttemptsRemaining >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_RemoveAuthenticator_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_RemoveAuthenticator_Response
     * @static
     * @param {CTwoFactor_RemoveAuthenticator_Response} message CTwoFactor_RemoveAuthenticator_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_RemoveAuthenticator_Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.success = false;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serverTime = options.longs === String ? "0" : 0;
            object.revocationAttemptsRemaining = 0;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.serverTime != null && message.hasOwnProperty("serverTime"))
            if (typeof message.serverTime === "number")
                object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
            else
                object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber(true) : message.serverTime;
        if (message.revocationAttemptsRemaining != null && message.hasOwnProperty("revocationAttemptsRemaining"))
            object.revocationAttemptsRemaining = message.revocationAttemptsRemaining;
        return object;
    };

    /**
     * Converts this CTwoFactor_RemoveAuthenticator_Response to JSON.
     * @function toJSON
     * @memberof CTwoFactor_RemoveAuthenticator_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_RemoveAuthenticator_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_RemoveAuthenticator_Response
     * @function getTypeUrl
     * @memberof CTwoFactor_RemoveAuthenticator_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_RemoveAuthenticator_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_RemoveAuthenticator_Response";
    };

    return CTwoFactor_RemoveAuthenticator_Response;
})();

export const CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request = $root.CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request = (() => {

    /**
     * Properties of a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.
     * @exports ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @interface ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @property {string|null} [smsCode] CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request smsCode
     * @property {boolean|null} [generateNewToken] CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request generateNewToken
     * @property {number|null} [version] CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request version
     */

    /**
     * Constructs a new CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.
     * @exports CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @classdesc Represents a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.
     * @implements ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @constructor
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request=} [properties] Properties to set
     */
    function CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request smsCode.
     * @member {string} smsCode
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @instance
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.prototype.smsCode = "";

    /**
     * CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request generateNewToken.
     * @member {boolean} generateNewToken
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @instance
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.prototype.generateNewToken = false;

    /**
     * CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request version.
     * @member {number} version
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @instance
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.prototype.version = 1;

    /**
     * Creates a new CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @static
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request=} [properties] Properties to set
     * @returns {CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request} CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request instance
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.create = function create(properties) {
        return new CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request(properties);
    };

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message. Does not implicitly {@link CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @static
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request} message CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.smsCode != null && Object.hasOwnProperty.call(message, "smsCode"))
            writer.uint32(/* id 1, wireType 2 =*/10).string(message.smsCode);
        if (message.generateNewToken != null && Object.hasOwnProperty.call(message, "generateNewToken"))
            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.generateNewToken);
        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.version);
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message, length delimited. Does not implicitly {@link CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @static
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request} message CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request} CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.smsCode = reader.string();
                    break;
                }
            case 2: {
                    message.generateNewToken = reader.bool();
                    break;
                }
            case 3: {
                    message.version = reader.uint32();
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
     * Decodes a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request} CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message.
     * @function verify
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.smsCode != null && message.hasOwnProperty("smsCode"))
            if (!$util.isString(message.smsCode))
                return "smsCode: string expected";
        if (message.generateNewToken != null && message.hasOwnProperty("generateNewToken"))
            if (typeof message.generateNewToken !== "boolean")
                return "generateNewToken: boolean expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isInteger(message.version))
                return "version: integer expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request} CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request)
            return object;
        let message = new $root.CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request();
        if (object.smsCode != null)
            message.smsCode = String(object.smsCode);
        if (object.generateNewToken != null)
            message.generateNewToken = Boolean(object.generateNewToken);
        if (object.version != null)
            message.version = object.version >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @static
     * @param {CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request} message CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.smsCode = "";
            object.generateNewToken = false;
            object.version = 1;
        }
        if (message.smsCode != null && message.hasOwnProperty("smsCode"))
            object.smsCode = message.smsCode;
        if (message.generateNewToken != null && message.hasOwnProperty("generateNewToken"))
            object.generateNewToken = message.generateNewToken;
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        return object;
    };

    /**
     * Converts this CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request to JSON.
     * @function toJSON
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @function getTypeUrl
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request";
    };

    return CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request;
})();

export const CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response = $root.CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response = (() => {

    /**
     * Properties of a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.
     * @exports ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @interface ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @property {boolean|null} [success] CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response success
     * @property {ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token|null} [replacementToken] CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response replacementToken
     */

    /**
     * Constructs a new CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.
     * @exports CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @classdesc Represents a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.
     * @implements ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @constructor
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response=} [properties] Properties to set
     */
    function CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response success.
     * @member {boolean} success
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @instance
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.prototype.success = false;

    /**
     * CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response replacementToken.
     * @member {ICRemoveAuthenticatorViaChallengeContinue_Replacement_Token|null|undefined} replacementToken
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @instance
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.prototype.replacementToken = null;

    /**
     * Creates a new CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @static
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response=} [properties] Properties to set
     * @returns {CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response} CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response instance
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.create = function create(properties) {
        return new CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response(properties);
    };

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message. Does not implicitly {@link CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @static
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response} message CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        if (message.replacementToken != null && Object.hasOwnProperty.call(message, "replacementToken"))
            $root.CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.encode(message.replacementToken, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message, length delimited. Does not implicitly {@link CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @static
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response} message CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response} CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
                    break;
                }
            case 2: {
                    message.replacementToken = $root.CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.decode(reader, reader.uint32());
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
     * Decodes a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response} CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message.
     * @function verify
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        if (message.replacementToken != null && message.hasOwnProperty("replacementToken")) {
            let error = $root.CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.verify(message.replacementToken);
            if (error)
                return "replacementToken." + error;
        }
        return null;
    };

    /**
     * Creates a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response} CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response)
            return object;
        let message = new $root.CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response();
        if (object.success != null)
            message.success = Boolean(object.success);
        if (object.replacementToken != null) {
            if (typeof object.replacementToken !== "object")
                throw TypeError(".CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.replacementToken: object expected");
            message.replacementToken = $root.CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.fromObject(object.replacementToken);
        }
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @static
     * @param {CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response} message CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.success = false;
            object.replacementToken = null;
        }
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        if (message.replacementToken != null && message.hasOwnProperty("replacementToken"))
            object.replacementToken = $root.CRemoveAuthenticatorViaChallengeContinue_Replacement_Token.toObject(message.replacementToken, options);
        return object;
    };

    /**
     * Converts this CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response to JSON.
     * @function toJSON
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @function getTypeUrl
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response";
    };

    return CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response;
})();

export const CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request = $root.CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request = (() => {

    /**
     * Properties of a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.
     * @exports ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @interface ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     */

    /**
     * Constructs a new CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.
     * @exports CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @classdesc Represents a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.
     * @implements ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @constructor
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request=} [properties] Properties to set
     */
    function CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @static
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request=} [properties] Properties to set
     * @returns {CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request} CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request instance
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.create = function create(properties) {
        return new CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request(properties);
    };

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message. Does not implicitly {@link CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @static
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request} message CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message, length delimited. Does not implicitly {@link CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @static
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request} message CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request} CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request();
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
     * Decodes a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request} CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message.
     * @function verify
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request} CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request)
            return object;
        return new $root.CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request();
    };

    /**
     * Creates a plain object from a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @static
     * @param {CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request} message CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request to JSON.
     * @function toJSON
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @function getTypeUrl
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request";
    };

    return CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request;
})();

export const CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response = $root.CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response = (() => {

    /**
     * Properties of a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.
     * @exports ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @interface ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @property {boolean|null} [success] CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response success
     */

    /**
     * Constructs a new CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.
     * @exports CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @classdesc Represents a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.
     * @implements ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @constructor
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Response=} [properties] Properties to set
     */
    function CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response success.
     * @member {boolean} success
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @instance
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.prototype.success = false;

    /**
     * Creates a new CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @static
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Response=} [properties] Properties to set
     * @returns {CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response} CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response instance
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.create = function create(properties) {
        return new CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response(properties);
    };

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message. Does not implicitly {@link CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @static
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Response} message CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.success != null && Object.hasOwnProperty.call(message, "success"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.success);
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message, length delimited. Does not implicitly {@link CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @static
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Response} message CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response} CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.success = reader.bool();
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
     * Decodes a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response} CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message.
     * @function verify
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.success != null && message.hasOwnProperty("success"))
            if (typeof message.success !== "boolean")
                return "success: boolean expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response} CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response)
            return object;
        let message = new $root.CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response();
        if (object.success != null)
            message.success = Boolean(object.success);
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @static
     * @param {CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response} message CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.success = false;
        if (message.success != null && message.hasOwnProperty("success"))
            object.success = message.success;
        return object;
    };

    /**
     * Converts this CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response to JSON.
     * @function toJSON
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @function getTypeUrl
     * @memberof CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response";
    };

    return CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response;
})();

export const CTwoFactor_SendEmail_Request = $root.CTwoFactor_SendEmail_Request = (() => {

    /**
     * Properties of a CTwoFactor_SendEmail_Request.
     * @exports ICTwoFactor_SendEmail_Request
     * @interface ICTwoFactor_SendEmail_Request
     * @property {number|Long|null} [steamid] CTwoFactor_SendEmail_Request steamid
     * @property {number|null} [emailType] CTwoFactor_SendEmail_Request emailType
     * @property {boolean|null} [includeActivationCode] CTwoFactor_SendEmail_Request includeActivationCode
     */

    /**
     * Constructs a new CTwoFactor_SendEmail_Request.
     * @exports CTwoFactor_SendEmail_Request
     * @classdesc Represents a CTwoFactor_SendEmail_Request.
     * @implements ICTwoFactor_SendEmail_Request
     * @constructor
     * @param {ICTwoFactor_SendEmail_Request=} [properties] Properties to set
     */
    function CTwoFactor_SendEmail_Request(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_SendEmail_Request steamid.
     * @member {number|Long} steamid
     * @memberof CTwoFactor_SendEmail_Request
     * @instance
     */
    CTwoFactor_SendEmail_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CTwoFactor_SendEmail_Request emailType.
     * @member {number} emailType
     * @memberof CTwoFactor_SendEmail_Request
     * @instance
     */
    CTwoFactor_SendEmail_Request.prototype.emailType = 0;

    /**
     * CTwoFactor_SendEmail_Request includeActivationCode.
     * @member {boolean} includeActivationCode
     * @memberof CTwoFactor_SendEmail_Request
     * @instance
     */
    CTwoFactor_SendEmail_Request.prototype.includeActivationCode = false;

    /**
     * Creates a new CTwoFactor_SendEmail_Request instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_SendEmail_Request
     * @static
     * @param {ICTwoFactor_SendEmail_Request=} [properties] Properties to set
     * @returns {CTwoFactor_SendEmail_Request} CTwoFactor_SendEmail_Request instance
     */
    CTwoFactor_SendEmail_Request.create = function create(properties) {
        return new CTwoFactor_SendEmail_Request(properties);
    };

    /**
     * Encodes the specified CTwoFactor_SendEmail_Request message. Does not implicitly {@link CTwoFactor_SendEmail_Request.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_SendEmail_Request
     * @static
     * @param {ICTwoFactor_SendEmail_Request} message CTwoFactor_SendEmail_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_SendEmail_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
        if (message.emailType != null && Object.hasOwnProperty.call(message, "emailType"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.emailType);
        if (message.includeActivationCode != null && Object.hasOwnProperty.call(message, "includeActivationCode"))
            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.includeActivationCode);
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_SendEmail_Request message, length delimited. Does not implicitly {@link CTwoFactor_SendEmail_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_SendEmail_Request
     * @static
     * @param {ICTwoFactor_SendEmail_Request} message CTwoFactor_SendEmail_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_SendEmail_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_SendEmail_Request message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_SendEmail_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_SendEmail_Request} CTwoFactor_SendEmail_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_SendEmail_Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_SendEmail_Request();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.steamid = reader.fixed64();
                    break;
                }
            case 2: {
                    message.emailType = reader.uint32();
                    break;
                }
            case 3: {
                    message.includeActivationCode = reader.bool();
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
     * Decodes a CTwoFactor_SendEmail_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_SendEmail_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_SendEmail_Request} CTwoFactor_SendEmail_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_SendEmail_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_SendEmail_Request message.
     * @function verify
     * @memberof CTwoFactor_SendEmail_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_SendEmail_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                return "steamid: integer|Long expected";
        if (message.emailType != null && message.hasOwnProperty("emailType"))
            if (!$util.isInteger(message.emailType))
                return "emailType: integer expected";
        if (message.includeActivationCode != null && message.hasOwnProperty("includeActivationCode"))
            if (typeof message.includeActivationCode !== "boolean")
                return "includeActivationCode: boolean expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_SendEmail_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_SendEmail_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_SendEmail_Request} CTwoFactor_SendEmail_Request
     */
    CTwoFactor_SendEmail_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_SendEmail_Request)
            return object;
        let message = new $root.CTwoFactor_SendEmail_Request();
        if (object.steamid != null)
            if ($util.Long)
                (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
            else if (typeof object.steamid === "string")
                message.steamid = parseInt(object.steamid, 10);
            else if (typeof object.steamid === "number")
                message.steamid = object.steamid;
            else if (typeof object.steamid === "object")
                message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
        if (object.emailType != null)
            message.emailType = object.emailType >>> 0;
        if (object.includeActivationCode != null)
            message.includeActivationCode = Boolean(object.includeActivationCode);
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_SendEmail_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_SendEmail_Request
     * @static
     * @param {CTwoFactor_SendEmail_Request} message CTwoFactor_SendEmail_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_SendEmail_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.steamid = options.longs === String ? "0" : 0;
            object.emailType = 0;
            object.includeActivationCode = false;
        }
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (typeof message.steamid === "number")
                object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
            else
                object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
        if (message.emailType != null && message.hasOwnProperty("emailType"))
            object.emailType = message.emailType;
        if (message.includeActivationCode != null && message.hasOwnProperty("includeActivationCode"))
            object.includeActivationCode = message.includeActivationCode;
        return object;
    };

    /**
     * Converts this CTwoFactor_SendEmail_Request to JSON.
     * @function toJSON
     * @memberof CTwoFactor_SendEmail_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_SendEmail_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_SendEmail_Request
     * @function getTypeUrl
     * @memberof CTwoFactor_SendEmail_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_SendEmail_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_SendEmail_Request";
    };

    return CTwoFactor_SendEmail_Request;
})();

export const CTwoFactor_SendEmail_Response = $root.CTwoFactor_SendEmail_Response = (() => {

    /**
     * Properties of a CTwoFactor_SendEmail_Response.
     * @exports ICTwoFactor_SendEmail_Response
     * @interface ICTwoFactor_SendEmail_Response
     */

    /**
     * Constructs a new CTwoFactor_SendEmail_Response.
     * @exports CTwoFactor_SendEmail_Response
     * @classdesc Represents a CTwoFactor_SendEmail_Response.
     * @implements ICTwoFactor_SendEmail_Response
     * @constructor
     * @param {ICTwoFactor_SendEmail_Response=} [properties] Properties to set
     */
    function CTwoFactor_SendEmail_Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new CTwoFactor_SendEmail_Response instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_SendEmail_Response
     * @static
     * @param {ICTwoFactor_SendEmail_Response=} [properties] Properties to set
     * @returns {CTwoFactor_SendEmail_Response} CTwoFactor_SendEmail_Response instance
     */
    CTwoFactor_SendEmail_Response.create = function create(properties) {
        return new CTwoFactor_SendEmail_Response(properties);
    };

    /**
     * Encodes the specified CTwoFactor_SendEmail_Response message. Does not implicitly {@link CTwoFactor_SendEmail_Response.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_SendEmail_Response
     * @static
     * @param {ICTwoFactor_SendEmail_Response} message CTwoFactor_SendEmail_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_SendEmail_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_SendEmail_Response message, length delimited. Does not implicitly {@link CTwoFactor_SendEmail_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_SendEmail_Response
     * @static
     * @param {ICTwoFactor_SendEmail_Response} message CTwoFactor_SendEmail_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_SendEmail_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_SendEmail_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_SendEmail_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_SendEmail_Response} CTwoFactor_SendEmail_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_SendEmail_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_SendEmail_Response();
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
     * Decodes a CTwoFactor_SendEmail_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_SendEmail_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_SendEmail_Response} CTwoFactor_SendEmail_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_SendEmail_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_SendEmail_Response message.
     * @function verify
     * @memberof CTwoFactor_SendEmail_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_SendEmail_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_SendEmail_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_SendEmail_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_SendEmail_Response} CTwoFactor_SendEmail_Response
     */
    CTwoFactor_SendEmail_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_SendEmail_Response)
            return object;
        return new $root.CTwoFactor_SendEmail_Response();
    };

    /**
     * Creates a plain object from a CTwoFactor_SendEmail_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_SendEmail_Response
     * @static
     * @param {CTwoFactor_SendEmail_Response} message CTwoFactor_SendEmail_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_SendEmail_Response.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this CTwoFactor_SendEmail_Response to JSON.
     * @function toJSON
     * @memberof CTwoFactor_SendEmail_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_SendEmail_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_SendEmail_Response
     * @function getTypeUrl
     * @memberof CTwoFactor_SendEmail_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_SendEmail_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_SendEmail_Response";
    };

    return CTwoFactor_SendEmail_Response;
})();

export const CTwoFactor_Status_Request = $root.CTwoFactor_Status_Request = (() => {

    /**
     * Properties of a CTwoFactor_Status_Request.
     * @exports ICTwoFactor_Status_Request
     * @interface ICTwoFactor_Status_Request
     * @property {number|Long|null} [steamid] CTwoFactor_Status_Request steamid
     */

    /**
     * Constructs a new CTwoFactor_Status_Request.
     * @exports CTwoFactor_Status_Request
     * @classdesc Represents a CTwoFactor_Status_Request.
     * @implements ICTwoFactor_Status_Request
     * @constructor
     * @param {ICTwoFactor_Status_Request=} [properties] Properties to set
     */
    function CTwoFactor_Status_Request(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_Status_Request steamid.
     * @member {number|Long} steamid
     * @memberof CTwoFactor_Status_Request
     * @instance
     */
    CTwoFactor_Status_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * Creates a new CTwoFactor_Status_Request instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_Status_Request
     * @static
     * @param {ICTwoFactor_Status_Request=} [properties] Properties to set
     * @returns {CTwoFactor_Status_Request} CTwoFactor_Status_Request instance
     */
    CTwoFactor_Status_Request.create = function create(properties) {
        return new CTwoFactor_Status_Request(properties);
    };

    /**
     * Encodes the specified CTwoFactor_Status_Request message. Does not implicitly {@link CTwoFactor_Status_Request.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_Status_Request
     * @static
     * @param {ICTwoFactor_Status_Request} message CTwoFactor_Status_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_Status_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_Status_Request message, length delimited. Does not implicitly {@link CTwoFactor_Status_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_Status_Request
     * @static
     * @param {ICTwoFactor_Status_Request} message CTwoFactor_Status_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_Status_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_Status_Request message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_Status_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_Status_Request} CTwoFactor_Status_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_Status_Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_Status_Request();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.steamid = reader.fixed64();
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
     * Decodes a CTwoFactor_Status_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_Status_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_Status_Request} CTwoFactor_Status_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_Status_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_Status_Request message.
     * @function verify
     * @memberof CTwoFactor_Status_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_Status_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                return "steamid: integer|Long expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_Status_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_Status_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_Status_Request} CTwoFactor_Status_Request
     */
    CTwoFactor_Status_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_Status_Request)
            return object;
        let message = new $root.CTwoFactor_Status_Request();
        if (object.steamid != null)
            if ($util.Long)
                (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
            else if (typeof object.steamid === "string")
                message.steamid = parseInt(object.steamid, 10);
            else if (typeof object.steamid === "number")
                message.steamid = object.steamid;
            else if (typeof object.steamid === "object")
                message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_Status_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_Status_Request
     * @static
     * @param {CTwoFactor_Status_Request} message CTwoFactor_Status_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_Status_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.steamid = options.longs === String ? "0" : 0;
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (typeof message.steamid === "number")
                object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
            else
                object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
        return object;
    };

    /**
     * Converts this CTwoFactor_Status_Request to JSON.
     * @function toJSON
     * @memberof CTwoFactor_Status_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_Status_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_Status_Request
     * @function getTypeUrl
     * @memberof CTwoFactor_Status_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_Status_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_Status_Request";
    };

    return CTwoFactor_Status_Request;
})();

export const CTwoFactor_Status_Response = $root.CTwoFactor_Status_Response = (() => {

    /**
     * Properties of a CTwoFactor_Status_Response.
     * @exports ICTwoFactor_Status_Response
     * @interface ICTwoFactor_Status_Response
     * @property {number|null} [state] CTwoFactor_Status_Response state
     * @property {number|null} [inactivationReason] CTwoFactor_Status_Response inactivationReason
     * @property {number|null} [authenticatorType] CTwoFactor_Status_Response authenticatorType
     * @property {boolean|null} [authenticatorAllowed] CTwoFactor_Status_Response authenticatorAllowed
     * @property {number|null} [steamguardScheme] CTwoFactor_Status_Response steamguardScheme
     * @property {string|null} [tokenGid] CTwoFactor_Status_Response tokenGid
     * @property {boolean|null} [emailValidated] CTwoFactor_Status_Response emailValidated
     * @property {string|null} [deviceIdentifier] CTwoFactor_Status_Response deviceIdentifier
     * @property {number|null} [timeCreated] CTwoFactor_Status_Response timeCreated
     * @property {number|null} [revocationAttemptsRemaining] CTwoFactor_Status_Response revocationAttemptsRemaining
     * @property {string|null} [classifiedAgent] CTwoFactor_Status_Response classifiedAgent
     * @property {boolean|null} [allowExternalAuthenticator] CTwoFactor_Status_Response allowExternalAuthenticator
     * @property {number|null} [timeTransferred] CTwoFactor_Status_Response timeTransferred
     * @property {number|null} [version] CTwoFactor_Status_Response version
     */

    /**
     * Constructs a new CTwoFactor_Status_Response.
     * @exports CTwoFactor_Status_Response
     * @classdesc Represents a CTwoFactor_Status_Response.
     * @implements ICTwoFactor_Status_Response
     * @constructor
     * @param {ICTwoFactor_Status_Response=} [properties] Properties to set
     */
    function CTwoFactor_Status_Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_Status_Response state.
     * @member {number} state
     * @memberof CTwoFactor_Status_Response
     * @instance
     */
    CTwoFactor_Status_Response.prototype.state = 0;

    /**
     * CTwoFactor_Status_Response inactivationReason.
     * @member {number} inactivationReason
     * @memberof CTwoFactor_Status_Response
     * @instance
     */
    CTwoFactor_Status_Response.prototype.inactivationReason = 0;

    /**
     * CTwoFactor_Status_Response authenticatorType.
     * @member {number} authenticatorType
     * @memberof CTwoFactor_Status_Response
     * @instance
     */
    CTwoFactor_Status_Response.prototype.authenticatorType = 0;

    /**
     * CTwoFactor_Status_Response authenticatorAllowed.
     * @member {boolean} authenticatorAllowed
     * @memberof CTwoFactor_Status_Response
     * @instance
     */
    CTwoFactor_Status_Response.prototype.authenticatorAllowed = false;

    /**
     * CTwoFactor_Status_Response steamguardScheme.
     * @member {number} steamguardScheme
     * @memberof CTwoFactor_Status_Response
     * @instance
     */
    CTwoFactor_Status_Response.prototype.steamguardScheme = 0;

    /**
     * CTwoFactor_Status_Response tokenGid.
     * @member {string} tokenGid
     * @memberof CTwoFactor_Status_Response
     * @instance
     */
    CTwoFactor_Status_Response.prototype.tokenGid = "";

    /**
     * CTwoFactor_Status_Response emailValidated.
     * @member {boolean} emailValidated
     * @memberof CTwoFactor_Status_Response
     * @instance
     */
    CTwoFactor_Status_Response.prototype.emailValidated = false;

    /**
     * CTwoFactor_Status_Response deviceIdentifier.
     * @member {string} deviceIdentifier
     * @memberof CTwoFactor_Status_Response
     * @instance
     */
    CTwoFactor_Status_Response.prototype.deviceIdentifier = "";

    /**
     * CTwoFactor_Status_Response timeCreated.
     * @member {number} timeCreated
     * @memberof CTwoFactor_Status_Response
     * @instance
     */
    CTwoFactor_Status_Response.prototype.timeCreated = 0;

    /**
     * CTwoFactor_Status_Response revocationAttemptsRemaining.
     * @member {number} revocationAttemptsRemaining
     * @memberof CTwoFactor_Status_Response
     * @instance
     */
    CTwoFactor_Status_Response.prototype.revocationAttemptsRemaining = 0;

    /**
     * CTwoFactor_Status_Response classifiedAgent.
     * @member {string} classifiedAgent
     * @memberof CTwoFactor_Status_Response
     * @instance
     */
    CTwoFactor_Status_Response.prototype.classifiedAgent = "";

    /**
     * CTwoFactor_Status_Response allowExternalAuthenticator.
     * @member {boolean} allowExternalAuthenticator
     * @memberof CTwoFactor_Status_Response
     * @instance
     */
    CTwoFactor_Status_Response.prototype.allowExternalAuthenticator = false;

    /**
     * CTwoFactor_Status_Response timeTransferred.
     * @member {number} timeTransferred
     * @memberof CTwoFactor_Status_Response
     * @instance
     */
    CTwoFactor_Status_Response.prototype.timeTransferred = 0;

    /**
     * CTwoFactor_Status_Response version.
     * @member {number} version
     * @memberof CTwoFactor_Status_Response
     * @instance
     */
    CTwoFactor_Status_Response.prototype.version = 0;

    /**
     * Creates a new CTwoFactor_Status_Response instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_Status_Response
     * @static
     * @param {ICTwoFactor_Status_Response=} [properties] Properties to set
     * @returns {CTwoFactor_Status_Response} CTwoFactor_Status_Response instance
     */
    CTwoFactor_Status_Response.create = function create(properties) {
        return new CTwoFactor_Status_Response(properties);
    };

    /**
     * Encodes the specified CTwoFactor_Status_Response message. Does not implicitly {@link CTwoFactor_Status_Response.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_Status_Response
     * @static
     * @param {ICTwoFactor_Status_Response} message CTwoFactor_Status_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_Status_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.state != null && Object.hasOwnProperty.call(message, "state"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.state);
        if (message.inactivationReason != null && Object.hasOwnProperty.call(message, "inactivationReason"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.inactivationReason);
        if (message.authenticatorType != null && Object.hasOwnProperty.call(message, "authenticatorType"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.authenticatorType);
        if (message.authenticatorAllowed != null && Object.hasOwnProperty.call(message, "authenticatorAllowed"))
            writer.uint32(/* id 4, wireType 0 =*/32).bool(message.authenticatorAllowed);
        if (message.steamguardScheme != null && Object.hasOwnProperty.call(message, "steamguardScheme"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.steamguardScheme);
        if (message.tokenGid != null && Object.hasOwnProperty.call(message, "tokenGid"))
            writer.uint32(/* id 6, wireType 2 =*/50).string(message.tokenGid);
        if (message.emailValidated != null && Object.hasOwnProperty.call(message, "emailValidated"))
            writer.uint32(/* id 7, wireType 0 =*/56).bool(message.emailValidated);
        if (message.deviceIdentifier != null && Object.hasOwnProperty.call(message, "deviceIdentifier"))
            writer.uint32(/* id 8, wireType 2 =*/66).string(message.deviceIdentifier);
        if (message.timeCreated != null && Object.hasOwnProperty.call(message, "timeCreated"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.timeCreated);
        if (message.revocationAttemptsRemaining != null && Object.hasOwnProperty.call(message, "revocationAttemptsRemaining"))
            writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.revocationAttemptsRemaining);
        if (message.classifiedAgent != null && Object.hasOwnProperty.call(message, "classifiedAgent"))
            writer.uint32(/* id 11, wireType 2 =*/90).string(message.classifiedAgent);
        if (message.allowExternalAuthenticator != null && Object.hasOwnProperty.call(message, "allowExternalAuthenticator"))
            writer.uint32(/* id 12, wireType 0 =*/96).bool(message.allowExternalAuthenticator);
        if (message.timeTransferred != null && Object.hasOwnProperty.call(message, "timeTransferred"))
            writer.uint32(/* id 13, wireType 0 =*/104).uint32(message.timeTransferred);
        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
            writer.uint32(/* id 14, wireType 0 =*/112).uint32(message.version);
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_Status_Response message, length delimited. Does not implicitly {@link CTwoFactor_Status_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_Status_Response
     * @static
     * @param {ICTwoFactor_Status_Response} message CTwoFactor_Status_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_Status_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_Status_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_Status_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_Status_Response} CTwoFactor_Status_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_Status_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_Status_Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.state = reader.uint32();
                    break;
                }
            case 2: {
                    message.inactivationReason = reader.uint32();
                    break;
                }
            case 3: {
                    message.authenticatorType = reader.uint32();
                    break;
                }
            case 4: {
                    message.authenticatorAllowed = reader.bool();
                    break;
                }
            case 5: {
                    message.steamguardScheme = reader.uint32();
                    break;
                }
            case 6: {
                    message.tokenGid = reader.string();
                    break;
                }
            case 7: {
                    message.emailValidated = reader.bool();
                    break;
                }
            case 8: {
                    message.deviceIdentifier = reader.string();
                    break;
                }
            case 9: {
                    message.timeCreated = reader.uint32();
                    break;
                }
            case 10: {
                    message.revocationAttemptsRemaining = reader.uint32();
                    break;
                }
            case 11: {
                    message.classifiedAgent = reader.string();
                    break;
                }
            case 12: {
                    message.allowExternalAuthenticator = reader.bool();
                    break;
                }
            case 13: {
                    message.timeTransferred = reader.uint32();
                    break;
                }
            case 14: {
                    message.version = reader.uint32();
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
     * Decodes a CTwoFactor_Status_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_Status_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_Status_Response} CTwoFactor_Status_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_Status_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_Status_Response message.
     * @function verify
     * @memberof CTwoFactor_Status_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_Status_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.state != null && message.hasOwnProperty("state"))
            if (!$util.isInteger(message.state))
                return "state: integer expected";
        if (message.inactivationReason != null && message.hasOwnProperty("inactivationReason"))
            if (!$util.isInteger(message.inactivationReason))
                return "inactivationReason: integer expected";
        if (message.authenticatorType != null && message.hasOwnProperty("authenticatorType"))
            if (!$util.isInteger(message.authenticatorType))
                return "authenticatorType: integer expected";
        if (message.authenticatorAllowed != null && message.hasOwnProperty("authenticatorAllowed"))
            if (typeof message.authenticatorAllowed !== "boolean")
                return "authenticatorAllowed: boolean expected";
        if (message.steamguardScheme != null && message.hasOwnProperty("steamguardScheme"))
            if (!$util.isInteger(message.steamguardScheme))
                return "steamguardScheme: integer expected";
        if (message.tokenGid != null && message.hasOwnProperty("tokenGid"))
            if (!$util.isString(message.tokenGid))
                return "tokenGid: string expected";
        if (message.emailValidated != null && message.hasOwnProperty("emailValidated"))
            if (typeof message.emailValidated !== "boolean")
                return "emailValidated: boolean expected";
        if (message.deviceIdentifier != null && message.hasOwnProperty("deviceIdentifier"))
            if (!$util.isString(message.deviceIdentifier))
                return "deviceIdentifier: string expected";
        if (message.timeCreated != null && message.hasOwnProperty("timeCreated"))
            if (!$util.isInteger(message.timeCreated))
                return "timeCreated: integer expected";
        if (message.revocationAttemptsRemaining != null && message.hasOwnProperty("revocationAttemptsRemaining"))
            if (!$util.isInteger(message.revocationAttemptsRemaining))
                return "revocationAttemptsRemaining: integer expected";
        if (message.classifiedAgent != null && message.hasOwnProperty("classifiedAgent"))
            if (!$util.isString(message.classifiedAgent))
                return "classifiedAgent: string expected";
        if (message.allowExternalAuthenticator != null && message.hasOwnProperty("allowExternalAuthenticator"))
            if (typeof message.allowExternalAuthenticator !== "boolean")
                return "allowExternalAuthenticator: boolean expected";
        if (message.timeTransferred != null && message.hasOwnProperty("timeTransferred"))
            if (!$util.isInteger(message.timeTransferred))
                return "timeTransferred: integer expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isInteger(message.version))
                return "version: integer expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_Status_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_Status_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_Status_Response} CTwoFactor_Status_Response
     */
    CTwoFactor_Status_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_Status_Response)
            return object;
        let message = new $root.CTwoFactor_Status_Response();
        if (object.state != null)
            message.state = object.state >>> 0;
        if (object.inactivationReason != null)
            message.inactivationReason = object.inactivationReason >>> 0;
        if (object.authenticatorType != null)
            message.authenticatorType = object.authenticatorType >>> 0;
        if (object.authenticatorAllowed != null)
            message.authenticatorAllowed = Boolean(object.authenticatorAllowed);
        if (object.steamguardScheme != null)
            message.steamguardScheme = object.steamguardScheme >>> 0;
        if (object.tokenGid != null)
            message.tokenGid = String(object.tokenGid);
        if (object.emailValidated != null)
            message.emailValidated = Boolean(object.emailValidated);
        if (object.deviceIdentifier != null)
            message.deviceIdentifier = String(object.deviceIdentifier);
        if (object.timeCreated != null)
            message.timeCreated = object.timeCreated >>> 0;
        if (object.revocationAttemptsRemaining != null)
            message.revocationAttemptsRemaining = object.revocationAttemptsRemaining >>> 0;
        if (object.classifiedAgent != null)
            message.classifiedAgent = String(object.classifiedAgent);
        if (object.allowExternalAuthenticator != null)
            message.allowExternalAuthenticator = Boolean(object.allowExternalAuthenticator);
        if (object.timeTransferred != null)
            message.timeTransferred = object.timeTransferred >>> 0;
        if (object.version != null)
            message.version = object.version >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_Status_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_Status_Response
     * @static
     * @param {CTwoFactor_Status_Response} message CTwoFactor_Status_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_Status_Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            object.state = 0;
            object.inactivationReason = 0;
            object.authenticatorType = 0;
            object.authenticatorAllowed = false;
            object.steamguardScheme = 0;
            object.tokenGid = "";
            object.emailValidated = false;
            object.deviceIdentifier = "";
            object.timeCreated = 0;
            object.revocationAttemptsRemaining = 0;
            object.classifiedAgent = "";
            object.allowExternalAuthenticator = false;
            object.timeTransferred = 0;
            object.version = 0;
        }
        if (message.state != null && message.hasOwnProperty("state"))
            object.state = message.state;
        if (message.inactivationReason != null && message.hasOwnProperty("inactivationReason"))
            object.inactivationReason = message.inactivationReason;
        if (message.authenticatorType != null && message.hasOwnProperty("authenticatorType"))
            object.authenticatorType = message.authenticatorType;
        if (message.authenticatorAllowed != null && message.hasOwnProperty("authenticatorAllowed"))
            object.authenticatorAllowed = message.authenticatorAllowed;
        if (message.steamguardScheme != null && message.hasOwnProperty("steamguardScheme"))
            object.steamguardScheme = message.steamguardScheme;
        if (message.tokenGid != null && message.hasOwnProperty("tokenGid"))
            object.tokenGid = message.tokenGid;
        if (message.emailValidated != null && message.hasOwnProperty("emailValidated"))
            object.emailValidated = message.emailValidated;
        if (message.deviceIdentifier != null && message.hasOwnProperty("deviceIdentifier"))
            object.deviceIdentifier = message.deviceIdentifier;
        if (message.timeCreated != null && message.hasOwnProperty("timeCreated"))
            object.timeCreated = message.timeCreated;
        if (message.revocationAttemptsRemaining != null && message.hasOwnProperty("revocationAttemptsRemaining"))
            object.revocationAttemptsRemaining = message.revocationAttemptsRemaining;
        if (message.classifiedAgent != null && message.hasOwnProperty("classifiedAgent"))
            object.classifiedAgent = message.classifiedAgent;
        if (message.allowExternalAuthenticator != null && message.hasOwnProperty("allowExternalAuthenticator"))
            object.allowExternalAuthenticator = message.allowExternalAuthenticator;
        if (message.timeTransferred != null && message.hasOwnProperty("timeTransferred"))
            object.timeTransferred = message.timeTransferred;
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        return object;
    };

    /**
     * Converts this CTwoFactor_Status_Response to JSON.
     * @function toJSON
     * @memberof CTwoFactor_Status_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_Status_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_Status_Response
     * @function getTypeUrl
     * @memberof CTwoFactor_Status_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_Status_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_Status_Response";
    };

    return CTwoFactor_Status_Response;
})();

export const CTwoFactor_Time_Request = $root.CTwoFactor_Time_Request = (() => {

    /**
     * Properties of a CTwoFactor_Time_Request.
     * @exports ICTwoFactor_Time_Request
     * @interface ICTwoFactor_Time_Request
     * @property {number|Long|null} [senderTime] CTwoFactor_Time_Request senderTime
     */

    /**
     * Constructs a new CTwoFactor_Time_Request.
     * @exports CTwoFactor_Time_Request
     * @classdesc Represents a CTwoFactor_Time_Request.
     * @implements ICTwoFactor_Time_Request
     * @constructor
     * @param {ICTwoFactor_Time_Request=} [properties] Properties to set
     */
    function CTwoFactor_Time_Request(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_Time_Request senderTime.
     * @member {number|Long} senderTime
     * @memberof CTwoFactor_Time_Request
     * @instance
     */
    CTwoFactor_Time_Request.prototype.senderTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * Creates a new CTwoFactor_Time_Request instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_Time_Request
     * @static
     * @param {ICTwoFactor_Time_Request=} [properties] Properties to set
     * @returns {CTwoFactor_Time_Request} CTwoFactor_Time_Request instance
     */
    CTwoFactor_Time_Request.create = function create(properties) {
        return new CTwoFactor_Time_Request(properties);
    };

    /**
     * Encodes the specified CTwoFactor_Time_Request message. Does not implicitly {@link CTwoFactor_Time_Request.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_Time_Request
     * @static
     * @param {ICTwoFactor_Time_Request} message CTwoFactor_Time_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_Time_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.senderTime != null && Object.hasOwnProperty.call(message, "senderTime"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.senderTime);
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_Time_Request message, length delimited. Does not implicitly {@link CTwoFactor_Time_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_Time_Request
     * @static
     * @param {ICTwoFactor_Time_Request} message CTwoFactor_Time_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_Time_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_Time_Request message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_Time_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_Time_Request} CTwoFactor_Time_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_Time_Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_Time_Request();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.senderTime = reader.uint64();
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
     * Decodes a CTwoFactor_Time_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_Time_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_Time_Request} CTwoFactor_Time_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_Time_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_Time_Request message.
     * @function verify
     * @memberof CTwoFactor_Time_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_Time_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.senderTime != null && message.hasOwnProperty("senderTime"))
            if (!$util.isInteger(message.senderTime) && !(message.senderTime && $util.isInteger(message.senderTime.low) && $util.isInteger(message.senderTime.high)))
                return "senderTime: integer|Long expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_Time_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_Time_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_Time_Request} CTwoFactor_Time_Request
     */
    CTwoFactor_Time_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_Time_Request)
            return object;
        let message = new $root.CTwoFactor_Time_Request();
        if (object.senderTime != null)
            if ($util.Long)
                (message.senderTime = $util.Long.fromValue(object.senderTime)).unsigned = true;
            else if (typeof object.senderTime === "string")
                message.senderTime = parseInt(object.senderTime, 10);
            else if (typeof object.senderTime === "number")
                message.senderTime = object.senderTime;
            else if (typeof object.senderTime === "object")
                message.senderTime = new $util.LongBits(object.senderTime.low >>> 0, object.senderTime.high >>> 0).toNumber(true);
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_Time_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_Time_Request
     * @static
     * @param {CTwoFactor_Time_Request} message CTwoFactor_Time_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_Time_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.senderTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.senderTime = options.longs === String ? "0" : 0;
        if (message.senderTime != null && message.hasOwnProperty("senderTime"))
            if (typeof message.senderTime === "number")
                object.senderTime = options.longs === String ? String(message.senderTime) : message.senderTime;
            else
                object.senderTime = options.longs === String ? $util.Long.prototype.toString.call(message.senderTime) : options.longs === Number ? new $util.LongBits(message.senderTime.low >>> 0, message.senderTime.high >>> 0).toNumber(true) : message.senderTime;
        return object;
    };

    /**
     * Converts this CTwoFactor_Time_Request to JSON.
     * @function toJSON
     * @memberof CTwoFactor_Time_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_Time_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_Time_Request
     * @function getTypeUrl
     * @memberof CTwoFactor_Time_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_Time_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_Time_Request";
    };

    return CTwoFactor_Time_Request;
})();

export const CTwoFactor_Time_Response = $root.CTwoFactor_Time_Response = (() => {

    /**
     * Properties of a CTwoFactor_Time_Response.
     * @exports ICTwoFactor_Time_Response
     * @interface ICTwoFactor_Time_Response
     * @property {number|Long|null} [serverTime] CTwoFactor_Time_Response serverTime
     * @property {number|Long|null} [skewToleranceSeconds] CTwoFactor_Time_Response skewToleranceSeconds
     * @property {number|Long|null} [largeTimeJink] CTwoFactor_Time_Response largeTimeJink
     * @property {number|null} [probeFrequencySeconds] CTwoFactor_Time_Response probeFrequencySeconds
     * @property {number|null} [adjustedTimeProbeFrequencySeconds] CTwoFactor_Time_Response adjustedTimeProbeFrequencySeconds
     * @property {number|null} [hintProbeFrequencySeconds] CTwoFactor_Time_Response hintProbeFrequencySeconds
     * @property {number|null} [syncTimeout] CTwoFactor_Time_Response syncTimeout
     * @property {number|null} [tryAgainSeconds] CTwoFactor_Time_Response tryAgainSeconds
     * @property {number|null} [maxAttempts] CTwoFactor_Time_Response maxAttempts
     */

    /**
     * Constructs a new CTwoFactor_Time_Response.
     * @exports CTwoFactor_Time_Response
     * @classdesc Represents a CTwoFactor_Time_Response.
     * @implements ICTwoFactor_Time_Response
     * @constructor
     * @param {ICTwoFactor_Time_Response=} [properties] Properties to set
     */
    function CTwoFactor_Time_Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_Time_Response serverTime.
     * @member {number|Long} serverTime
     * @memberof CTwoFactor_Time_Response
     * @instance
     */
    CTwoFactor_Time_Response.prototype.serverTime = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CTwoFactor_Time_Response skewToleranceSeconds.
     * @member {number|Long} skewToleranceSeconds
     * @memberof CTwoFactor_Time_Response
     * @instance
     */
    CTwoFactor_Time_Response.prototype.skewToleranceSeconds = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CTwoFactor_Time_Response largeTimeJink.
     * @member {number|Long} largeTimeJink
     * @memberof CTwoFactor_Time_Response
     * @instance
     */
    CTwoFactor_Time_Response.prototype.largeTimeJink = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

    /**
     * CTwoFactor_Time_Response probeFrequencySeconds.
     * @member {number} probeFrequencySeconds
     * @memberof CTwoFactor_Time_Response
     * @instance
     */
    CTwoFactor_Time_Response.prototype.probeFrequencySeconds = 0;

    /**
     * CTwoFactor_Time_Response adjustedTimeProbeFrequencySeconds.
     * @member {number} adjustedTimeProbeFrequencySeconds
     * @memberof CTwoFactor_Time_Response
     * @instance
     */
    CTwoFactor_Time_Response.prototype.adjustedTimeProbeFrequencySeconds = 0;

    /**
     * CTwoFactor_Time_Response hintProbeFrequencySeconds.
     * @member {number} hintProbeFrequencySeconds
     * @memberof CTwoFactor_Time_Response
     * @instance
     */
    CTwoFactor_Time_Response.prototype.hintProbeFrequencySeconds = 0;

    /**
     * CTwoFactor_Time_Response syncTimeout.
     * @member {number} syncTimeout
     * @memberof CTwoFactor_Time_Response
     * @instance
     */
    CTwoFactor_Time_Response.prototype.syncTimeout = 0;

    /**
     * CTwoFactor_Time_Response tryAgainSeconds.
     * @member {number} tryAgainSeconds
     * @memberof CTwoFactor_Time_Response
     * @instance
     */
    CTwoFactor_Time_Response.prototype.tryAgainSeconds = 0;

    /**
     * CTwoFactor_Time_Response maxAttempts.
     * @member {number} maxAttempts
     * @memberof CTwoFactor_Time_Response
     * @instance
     */
    CTwoFactor_Time_Response.prototype.maxAttempts = 0;

    /**
     * Creates a new CTwoFactor_Time_Response instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_Time_Response
     * @static
     * @param {ICTwoFactor_Time_Response=} [properties] Properties to set
     * @returns {CTwoFactor_Time_Response} CTwoFactor_Time_Response instance
     */
    CTwoFactor_Time_Response.create = function create(properties) {
        return new CTwoFactor_Time_Response(properties);
    };

    /**
     * Encodes the specified CTwoFactor_Time_Response message. Does not implicitly {@link CTwoFactor_Time_Response.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_Time_Response
     * @static
     * @param {ICTwoFactor_Time_Response} message CTwoFactor_Time_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_Time_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.serverTime != null && Object.hasOwnProperty.call(message, "serverTime"))
            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.serverTime);
        if (message.skewToleranceSeconds != null && Object.hasOwnProperty.call(message, "skewToleranceSeconds"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.skewToleranceSeconds);
        if (message.largeTimeJink != null && Object.hasOwnProperty.call(message, "largeTimeJink"))
            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.largeTimeJink);
        if (message.probeFrequencySeconds != null && Object.hasOwnProperty.call(message, "probeFrequencySeconds"))
            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.probeFrequencySeconds);
        if (message.adjustedTimeProbeFrequencySeconds != null && Object.hasOwnProperty.call(message, "adjustedTimeProbeFrequencySeconds"))
            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.adjustedTimeProbeFrequencySeconds);
        if (message.hintProbeFrequencySeconds != null && Object.hasOwnProperty.call(message, "hintProbeFrequencySeconds"))
            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.hintProbeFrequencySeconds);
        if (message.syncTimeout != null && Object.hasOwnProperty.call(message, "syncTimeout"))
            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.syncTimeout);
        if (message.tryAgainSeconds != null && Object.hasOwnProperty.call(message, "tryAgainSeconds"))
            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.tryAgainSeconds);
        if (message.maxAttempts != null && Object.hasOwnProperty.call(message, "maxAttempts"))
            writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.maxAttempts);
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_Time_Response message, length delimited. Does not implicitly {@link CTwoFactor_Time_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_Time_Response
     * @static
     * @param {ICTwoFactor_Time_Response} message CTwoFactor_Time_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_Time_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_Time_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_Time_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_Time_Response} CTwoFactor_Time_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_Time_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_Time_Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.serverTime = reader.uint64();
                    break;
                }
            case 2: {
                    message.skewToleranceSeconds = reader.uint64();
                    break;
                }
            case 3: {
                    message.largeTimeJink = reader.uint64();
                    break;
                }
            case 4: {
                    message.probeFrequencySeconds = reader.uint32();
                    break;
                }
            case 5: {
                    message.adjustedTimeProbeFrequencySeconds = reader.uint32();
                    break;
                }
            case 6: {
                    message.hintProbeFrequencySeconds = reader.uint32();
                    break;
                }
            case 7: {
                    message.syncTimeout = reader.uint32();
                    break;
                }
            case 8: {
                    message.tryAgainSeconds = reader.uint32();
                    break;
                }
            case 9: {
                    message.maxAttempts = reader.uint32();
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
     * Decodes a CTwoFactor_Time_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_Time_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_Time_Response} CTwoFactor_Time_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_Time_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_Time_Response message.
     * @function verify
     * @memberof CTwoFactor_Time_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_Time_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.serverTime != null && message.hasOwnProperty("serverTime"))
            if (!$util.isInteger(message.serverTime) && !(message.serverTime && $util.isInteger(message.serverTime.low) && $util.isInteger(message.serverTime.high)))
                return "serverTime: integer|Long expected";
        if (message.skewToleranceSeconds != null && message.hasOwnProperty("skewToleranceSeconds"))
            if (!$util.isInteger(message.skewToleranceSeconds) && !(message.skewToleranceSeconds && $util.isInteger(message.skewToleranceSeconds.low) && $util.isInteger(message.skewToleranceSeconds.high)))
                return "skewToleranceSeconds: integer|Long expected";
        if (message.largeTimeJink != null && message.hasOwnProperty("largeTimeJink"))
            if (!$util.isInteger(message.largeTimeJink) && !(message.largeTimeJink && $util.isInteger(message.largeTimeJink.low) && $util.isInteger(message.largeTimeJink.high)))
                return "largeTimeJink: integer|Long expected";
        if (message.probeFrequencySeconds != null && message.hasOwnProperty("probeFrequencySeconds"))
            if (!$util.isInteger(message.probeFrequencySeconds))
                return "probeFrequencySeconds: integer expected";
        if (message.adjustedTimeProbeFrequencySeconds != null && message.hasOwnProperty("adjustedTimeProbeFrequencySeconds"))
            if (!$util.isInteger(message.adjustedTimeProbeFrequencySeconds))
                return "adjustedTimeProbeFrequencySeconds: integer expected";
        if (message.hintProbeFrequencySeconds != null && message.hasOwnProperty("hintProbeFrequencySeconds"))
            if (!$util.isInteger(message.hintProbeFrequencySeconds))
                return "hintProbeFrequencySeconds: integer expected";
        if (message.syncTimeout != null && message.hasOwnProperty("syncTimeout"))
            if (!$util.isInteger(message.syncTimeout))
                return "syncTimeout: integer expected";
        if (message.tryAgainSeconds != null && message.hasOwnProperty("tryAgainSeconds"))
            if (!$util.isInteger(message.tryAgainSeconds))
                return "tryAgainSeconds: integer expected";
        if (message.maxAttempts != null && message.hasOwnProperty("maxAttempts"))
            if (!$util.isInteger(message.maxAttempts))
                return "maxAttempts: integer expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_Time_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_Time_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_Time_Response} CTwoFactor_Time_Response
     */
    CTwoFactor_Time_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_Time_Response)
            return object;
        let message = new $root.CTwoFactor_Time_Response();
        if (object.serverTime != null)
            if ($util.Long)
                (message.serverTime = $util.Long.fromValue(object.serverTime)).unsigned = true;
            else if (typeof object.serverTime === "string")
                message.serverTime = parseInt(object.serverTime, 10);
            else if (typeof object.serverTime === "number")
                message.serverTime = object.serverTime;
            else if (typeof object.serverTime === "object")
                message.serverTime = new $util.LongBits(object.serverTime.low >>> 0, object.serverTime.high >>> 0).toNumber(true);
        if (object.skewToleranceSeconds != null)
            if ($util.Long)
                (message.skewToleranceSeconds = $util.Long.fromValue(object.skewToleranceSeconds)).unsigned = true;
            else if (typeof object.skewToleranceSeconds === "string")
                message.skewToleranceSeconds = parseInt(object.skewToleranceSeconds, 10);
            else if (typeof object.skewToleranceSeconds === "number")
                message.skewToleranceSeconds = object.skewToleranceSeconds;
            else if (typeof object.skewToleranceSeconds === "object")
                message.skewToleranceSeconds = new $util.LongBits(object.skewToleranceSeconds.low >>> 0, object.skewToleranceSeconds.high >>> 0).toNumber(true);
        if (object.largeTimeJink != null)
            if ($util.Long)
                (message.largeTimeJink = $util.Long.fromValue(object.largeTimeJink)).unsigned = true;
            else if (typeof object.largeTimeJink === "string")
                message.largeTimeJink = parseInt(object.largeTimeJink, 10);
            else if (typeof object.largeTimeJink === "number")
                message.largeTimeJink = object.largeTimeJink;
            else if (typeof object.largeTimeJink === "object")
                message.largeTimeJink = new $util.LongBits(object.largeTimeJink.low >>> 0, object.largeTimeJink.high >>> 0).toNumber(true);
        if (object.probeFrequencySeconds != null)
            message.probeFrequencySeconds = object.probeFrequencySeconds >>> 0;
        if (object.adjustedTimeProbeFrequencySeconds != null)
            message.adjustedTimeProbeFrequencySeconds = object.adjustedTimeProbeFrequencySeconds >>> 0;
        if (object.hintProbeFrequencySeconds != null)
            message.hintProbeFrequencySeconds = object.hintProbeFrequencySeconds >>> 0;
        if (object.syncTimeout != null)
            message.syncTimeout = object.syncTimeout >>> 0;
        if (object.tryAgainSeconds != null)
            message.tryAgainSeconds = object.tryAgainSeconds >>> 0;
        if (object.maxAttempts != null)
            message.maxAttempts = object.maxAttempts >>> 0;
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_Time_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_Time_Response
     * @static
     * @param {CTwoFactor_Time_Response} message CTwoFactor_Time_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_Time_Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.serverTime = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.serverTime = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.skewToleranceSeconds = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.skewToleranceSeconds = options.longs === String ? "0" : 0;
            if ($util.Long) {
                let long = new $util.Long(0, 0, true);
                object.largeTimeJink = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.largeTimeJink = options.longs === String ? "0" : 0;
            object.probeFrequencySeconds = 0;
            object.adjustedTimeProbeFrequencySeconds = 0;
            object.hintProbeFrequencySeconds = 0;
            object.syncTimeout = 0;
            object.tryAgainSeconds = 0;
            object.maxAttempts = 0;
        }
        if (message.serverTime != null && message.hasOwnProperty("serverTime"))
            if (typeof message.serverTime === "number")
                object.serverTime = options.longs === String ? String(message.serverTime) : message.serverTime;
            else
                object.serverTime = options.longs === String ? $util.Long.prototype.toString.call(message.serverTime) : options.longs === Number ? new $util.LongBits(message.serverTime.low >>> 0, message.serverTime.high >>> 0).toNumber(true) : message.serverTime;
        if (message.skewToleranceSeconds != null && message.hasOwnProperty("skewToleranceSeconds"))
            if (typeof message.skewToleranceSeconds === "number")
                object.skewToleranceSeconds = options.longs === String ? String(message.skewToleranceSeconds) : message.skewToleranceSeconds;
            else
                object.skewToleranceSeconds = options.longs === String ? $util.Long.prototype.toString.call(message.skewToleranceSeconds) : options.longs === Number ? new $util.LongBits(message.skewToleranceSeconds.low >>> 0, message.skewToleranceSeconds.high >>> 0).toNumber(true) : message.skewToleranceSeconds;
        if (message.largeTimeJink != null && message.hasOwnProperty("largeTimeJink"))
            if (typeof message.largeTimeJink === "number")
                object.largeTimeJink = options.longs === String ? String(message.largeTimeJink) : message.largeTimeJink;
            else
                object.largeTimeJink = options.longs === String ? $util.Long.prototype.toString.call(message.largeTimeJink) : options.longs === Number ? new $util.LongBits(message.largeTimeJink.low >>> 0, message.largeTimeJink.high >>> 0).toNumber(true) : message.largeTimeJink;
        if (message.probeFrequencySeconds != null && message.hasOwnProperty("probeFrequencySeconds"))
            object.probeFrequencySeconds = message.probeFrequencySeconds;
        if (message.adjustedTimeProbeFrequencySeconds != null && message.hasOwnProperty("adjustedTimeProbeFrequencySeconds"))
            object.adjustedTimeProbeFrequencySeconds = message.adjustedTimeProbeFrequencySeconds;
        if (message.hintProbeFrequencySeconds != null && message.hasOwnProperty("hintProbeFrequencySeconds"))
            object.hintProbeFrequencySeconds = message.hintProbeFrequencySeconds;
        if (message.syncTimeout != null && message.hasOwnProperty("syncTimeout"))
            object.syncTimeout = message.syncTimeout;
        if (message.tryAgainSeconds != null && message.hasOwnProperty("tryAgainSeconds"))
            object.tryAgainSeconds = message.tryAgainSeconds;
        if (message.maxAttempts != null && message.hasOwnProperty("maxAttempts"))
            object.maxAttempts = message.maxAttempts;
        return object;
    };

    /**
     * Converts this CTwoFactor_Time_Response to JSON.
     * @function toJSON
     * @memberof CTwoFactor_Time_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_Time_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_Time_Response
     * @function getTypeUrl
     * @memberof CTwoFactor_Time_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_Time_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_Time_Response";
    };

    return CTwoFactor_Time_Response;
})();

export const CTwoFactor_UpdateTokenVersion_Request = $root.CTwoFactor_UpdateTokenVersion_Request = (() => {

    /**
     * Properties of a CTwoFactor_UpdateTokenVersion_Request.
     * @exports ICTwoFactor_UpdateTokenVersion_Request
     * @interface ICTwoFactor_UpdateTokenVersion_Request
     * @property {number|Long|null} [steamid] CTwoFactor_UpdateTokenVersion_Request steamid
     * @property {number|null} [version] CTwoFactor_UpdateTokenVersion_Request version
     * @property {Uint8Array|null} [signature] CTwoFactor_UpdateTokenVersion_Request signature
     */

    /**
     * Constructs a new CTwoFactor_UpdateTokenVersion_Request.
     * @exports CTwoFactor_UpdateTokenVersion_Request
     * @classdesc Represents a CTwoFactor_UpdateTokenVersion_Request.
     * @implements ICTwoFactor_UpdateTokenVersion_Request
     * @constructor
     * @param {ICTwoFactor_UpdateTokenVersion_Request=} [properties] Properties to set
     */
    function CTwoFactor_UpdateTokenVersion_Request(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_UpdateTokenVersion_Request steamid.
     * @member {number|Long} steamid
     * @memberof CTwoFactor_UpdateTokenVersion_Request
     * @instance
     */
    CTwoFactor_UpdateTokenVersion_Request.prototype.steamid = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

    /**
     * CTwoFactor_UpdateTokenVersion_Request version.
     * @member {number} version
     * @memberof CTwoFactor_UpdateTokenVersion_Request
     * @instance
     */
    CTwoFactor_UpdateTokenVersion_Request.prototype.version = 0;

    /**
     * CTwoFactor_UpdateTokenVersion_Request signature.
     * @member {Uint8Array} signature
     * @memberof CTwoFactor_UpdateTokenVersion_Request
     * @instance
     */
    CTwoFactor_UpdateTokenVersion_Request.prototype.signature = $util.newBuffer([]);

    /**
     * Creates a new CTwoFactor_UpdateTokenVersion_Request instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_UpdateTokenVersion_Request
     * @static
     * @param {ICTwoFactor_UpdateTokenVersion_Request=} [properties] Properties to set
     * @returns {CTwoFactor_UpdateTokenVersion_Request} CTwoFactor_UpdateTokenVersion_Request instance
     */
    CTwoFactor_UpdateTokenVersion_Request.create = function create(properties) {
        return new CTwoFactor_UpdateTokenVersion_Request(properties);
    };

    /**
     * Encodes the specified CTwoFactor_UpdateTokenVersion_Request message. Does not implicitly {@link CTwoFactor_UpdateTokenVersion_Request.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_UpdateTokenVersion_Request
     * @static
     * @param {ICTwoFactor_UpdateTokenVersion_Request} message CTwoFactor_UpdateTokenVersion_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_UpdateTokenVersion_Request.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.steamid != null && Object.hasOwnProperty.call(message, "steamid"))
            writer.uint32(/* id 1, wireType 1 =*/9).fixed64(message.steamid);
        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.version);
        if (message.signature != null && Object.hasOwnProperty.call(message, "signature"))
            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.signature);
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_UpdateTokenVersion_Request message, length delimited. Does not implicitly {@link CTwoFactor_UpdateTokenVersion_Request.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_UpdateTokenVersion_Request
     * @static
     * @param {ICTwoFactor_UpdateTokenVersion_Request} message CTwoFactor_UpdateTokenVersion_Request message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_UpdateTokenVersion_Request.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_UpdateTokenVersion_Request message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_UpdateTokenVersion_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_UpdateTokenVersion_Request} CTwoFactor_UpdateTokenVersion_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_UpdateTokenVersion_Request.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_UpdateTokenVersion_Request();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.steamid = reader.fixed64();
                    break;
                }
            case 2: {
                    message.version = reader.uint32();
                    break;
                }
            case 3: {
                    message.signature = reader.bytes();
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
     * Decodes a CTwoFactor_UpdateTokenVersion_Request message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_UpdateTokenVersion_Request
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_UpdateTokenVersion_Request} CTwoFactor_UpdateTokenVersion_Request
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_UpdateTokenVersion_Request.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_UpdateTokenVersion_Request message.
     * @function verify
     * @memberof CTwoFactor_UpdateTokenVersion_Request
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_UpdateTokenVersion_Request.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (!$util.isInteger(message.steamid) && !(message.steamid && $util.isInteger(message.steamid.low) && $util.isInteger(message.steamid.high)))
                return "steamid: integer|Long expected";
        if (message.version != null && message.hasOwnProperty("version"))
            if (!$util.isInteger(message.version))
                return "version: integer expected";
        if (message.signature != null && message.hasOwnProperty("signature"))
            if (!(message.signature && typeof message.signature.length === "number" || $util.isString(message.signature)))
                return "signature: buffer expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_UpdateTokenVersion_Request message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_UpdateTokenVersion_Request
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_UpdateTokenVersion_Request} CTwoFactor_UpdateTokenVersion_Request
     */
    CTwoFactor_UpdateTokenVersion_Request.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_UpdateTokenVersion_Request)
            return object;
        let message = new $root.CTwoFactor_UpdateTokenVersion_Request();
        if (object.steamid != null)
            if ($util.Long)
                (message.steamid = $util.Long.fromValue(object.steamid)).unsigned = false;
            else if (typeof object.steamid === "string")
                message.steamid = parseInt(object.steamid, 10);
            else if (typeof object.steamid === "number")
                message.steamid = object.steamid;
            else if (typeof object.steamid === "object")
                message.steamid = new $util.LongBits(object.steamid.low >>> 0, object.steamid.high >>> 0).toNumber();
        if (object.version != null)
            message.version = object.version >>> 0;
        if (object.signature != null)
            if (typeof object.signature === "string")
                $util.base64.decode(object.signature, message.signature = $util.newBuffer($util.base64.length(object.signature)), 0);
            else if (object.signature.length >= 0)
                message.signature = object.signature;
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_UpdateTokenVersion_Request message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_UpdateTokenVersion_Request
     * @static
     * @param {CTwoFactor_UpdateTokenVersion_Request} message CTwoFactor_UpdateTokenVersion_Request
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_UpdateTokenVersion_Request.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults) {
            if ($util.Long) {
                let long = new $util.Long(0, 0, false);
                object.steamid = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
            } else
                object.steamid = options.longs === String ? "0" : 0;
            object.version = 0;
            if (options.bytes === String)
                object.signature = "";
            else {
                object.signature = [];
                if (options.bytes !== Array)
                    object.signature = $util.newBuffer(object.signature);
            }
        }
        if (message.steamid != null && message.hasOwnProperty("steamid"))
            if (typeof message.steamid === "number")
                object.steamid = options.longs === String ? String(message.steamid) : message.steamid;
            else
                object.steamid = options.longs === String ? $util.Long.prototype.toString.call(message.steamid) : options.longs === Number ? new $util.LongBits(message.steamid.low >>> 0, message.steamid.high >>> 0).toNumber() : message.steamid;
        if (message.version != null && message.hasOwnProperty("version"))
            object.version = message.version;
        if (message.signature != null && message.hasOwnProperty("signature"))
            object.signature = options.bytes === String ? $util.base64.encode(message.signature, 0, message.signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.signature) : message.signature;
        return object;
    };

    /**
     * Converts this CTwoFactor_UpdateTokenVersion_Request to JSON.
     * @function toJSON
     * @memberof CTwoFactor_UpdateTokenVersion_Request
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_UpdateTokenVersion_Request.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_UpdateTokenVersion_Request
     * @function getTypeUrl
     * @memberof CTwoFactor_UpdateTokenVersion_Request
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_UpdateTokenVersion_Request.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_UpdateTokenVersion_Request";
    };

    return CTwoFactor_UpdateTokenVersion_Request;
})();

export const CTwoFactor_UpdateTokenVersion_Response = $root.CTwoFactor_UpdateTokenVersion_Response = (() => {

    /**
     * Properties of a CTwoFactor_UpdateTokenVersion_Response.
     * @exports ICTwoFactor_UpdateTokenVersion_Response
     * @interface ICTwoFactor_UpdateTokenVersion_Response
     */

    /**
     * Constructs a new CTwoFactor_UpdateTokenVersion_Response.
     * @exports CTwoFactor_UpdateTokenVersion_Response
     * @classdesc Represents a CTwoFactor_UpdateTokenVersion_Response.
     * @implements ICTwoFactor_UpdateTokenVersion_Response
     * @constructor
     * @param {ICTwoFactor_UpdateTokenVersion_Response=} [properties] Properties to set
     */
    function CTwoFactor_UpdateTokenVersion_Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new CTwoFactor_UpdateTokenVersion_Response instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_UpdateTokenVersion_Response
     * @static
     * @param {ICTwoFactor_UpdateTokenVersion_Response=} [properties] Properties to set
     * @returns {CTwoFactor_UpdateTokenVersion_Response} CTwoFactor_UpdateTokenVersion_Response instance
     */
    CTwoFactor_UpdateTokenVersion_Response.create = function create(properties) {
        return new CTwoFactor_UpdateTokenVersion_Response(properties);
    };

    /**
     * Encodes the specified CTwoFactor_UpdateTokenVersion_Response message. Does not implicitly {@link CTwoFactor_UpdateTokenVersion_Response.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_UpdateTokenVersion_Response
     * @static
     * @param {ICTwoFactor_UpdateTokenVersion_Response} message CTwoFactor_UpdateTokenVersion_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_UpdateTokenVersion_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_UpdateTokenVersion_Response message, length delimited. Does not implicitly {@link CTwoFactor_UpdateTokenVersion_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_UpdateTokenVersion_Response
     * @static
     * @param {ICTwoFactor_UpdateTokenVersion_Response} message CTwoFactor_UpdateTokenVersion_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_UpdateTokenVersion_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_UpdateTokenVersion_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_UpdateTokenVersion_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_UpdateTokenVersion_Response} CTwoFactor_UpdateTokenVersion_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_UpdateTokenVersion_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_UpdateTokenVersion_Response();
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
     * Decodes a CTwoFactor_UpdateTokenVersion_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_UpdateTokenVersion_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_UpdateTokenVersion_Response} CTwoFactor_UpdateTokenVersion_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_UpdateTokenVersion_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_UpdateTokenVersion_Response message.
     * @function verify
     * @memberof CTwoFactor_UpdateTokenVersion_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_UpdateTokenVersion_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_UpdateTokenVersion_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_UpdateTokenVersion_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_UpdateTokenVersion_Response} CTwoFactor_UpdateTokenVersion_Response
     */
    CTwoFactor_UpdateTokenVersion_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_UpdateTokenVersion_Response)
            return object;
        return new $root.CTwoFactor_UpdateTokenVersion_Response();
    };

    /**
     * Creates a plain object from a CTwoFactor_UpdateTokenVersion_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_UpdateTokenVersion_Response
     * @static
     * @param {CTwoFactor_UpdateTokenVersion_Response} message CTwoFactor_UpdateTokenVersion_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_UpdateTokenVersion_Response.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this CTwoFactor_UpdateTokenVersion_Response to JSON.
     * @function toJSON
     * @memberof CTwoFactor_UpdateTokenVersion_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_UpdateTokenVersion_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_UpdateTokenVersion_Response
     * @function getTypeUrl
     * @memberof CTwoFactor_UpdateTokenVersion_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_UpdateTokenVersion_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_UpdateTokenVersion_Response";
    };

    return CTwoFactor_UpdateTokenVersion_Response;
})();

export const CTwoFactor_ValidateToken_Response = $root.CTwoFactor_ValidateToken_Response = (() => {

    /**
     * Properties of a CTwoFactor_ValidateToken_Response.
     * @exports ICTwoFactor_ValidateToken_Response
     * @interface ICTwoFactor_ValidateToken_Response
     * @property {boolean|null} [valid] CTwoFactor_ValidateToken_Response valid
     */

    /**
     * Constructs a new CTwoFactor_ValidateToken_Response.
     * @exports CTwoFactor_ValidateToken_Response
     * @classdesc Represents a CTwoFactor_ValidateToken_Response.
     * @implements ICTwoFactor_ValidateToken_Response
     * @constructor
     * @param {ICTwoFactor_ValidateToken_Response=} [properties] Properties to set
     */
    function CTwoFactor_ValidateToken_Response(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * CTwoFactor_ValidateToken_Response valid.
     * @member {boolean} valid
     * @memberof CTwoFactor_ValidateToken_Response
     * @instance
     */
    CTwoFactor_ValidateToken_Response.prototype.valid = false;

    /**
     * Creates a new CTwoFactor_ValidateToken_Response instance using the specified properties.
     * @function create
     * @memberof CTwoFactor_ValidateToken_Response
     * @static
     * @param {ICTwoFactor_ValidateToken_Response=} [properties] Properties to set
     * @returns {CTwoFactor_ValidateToken_Response} CTwoFactor_ValidateToken_Response instance
     */
    CTwoFactor_ValidateToken_Response.create = function create(properties) {
        return new CTwoFactor_ValidateToken_Response(properties);
    };

    /**
     * Encodes the specified CTwoFactor_ValidateToken_Response message. Does not implicitly {@link CTwoFactor_ValidateToken_Response.verify|verify} messages.
     * @function encode
     * @memberof CTwoFactor_ValidateToken_Response
     * @static
     * @param {ICTwoFactor_ValidateToken_Response} message CTwoFactor_ValidateToken_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_ValidateToken_Response.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        if (message.valid != null && Object.hasOwnProperty.call(message, "valid"))
            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.valid);
        return writer;
    };

    /**
     * Encodes the specified CTwoFactor_ValidateToken_Response message, length delimited. Does not implicitly {@link CTwoFactor_ValidateToken_Response.verify|verify} messages.
     * @function encodeDelimited
     * @memberof CTwoFactor_ValidateToken_Response
     * @static
     * @param {ICTwoFactor_ValidateToken_Response} message CTwoFactor_ValidateToken_Response message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    CTwoFactor_ValidateToken_Response.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a CTwoFactor_ValidateToken_Response message from the specified reader or buffer.
     * @function decode
     * @memberof CTwoFactor_ValidateToken_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {CTwoFactor_ValidateToken_Response} CTwoFactor_ValidateToken_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_ValidateToken_Response.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.CTwoFactor_ValidateToken_Response();
        while (reader.pos < end) {
            let tag = reader.uint32();
            switch (tag >>> 3) {
            case 1: {
                    message.valid = reader.bool();
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
     * Decodes a CTwoFactor_ValidateToken_Response message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof CTwoFactor_ValidateToken_Response
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {CTwoFactor_ValidateToken_Response} CTwoFactor_ValidateToken_Response
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    CTwoFactor_ValidateToken_Response.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a CTwoFactor_ValidateToken_Response message.
     * @function verify
     * @memberof CTwoFactor_ValidateToken_Response
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    CTwoFactor_ValidateToken_Response.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        if (message.valid != null && message.hasOwnProperty("valid"))
            if (typeof message.valid !== "boolean")
                return "valid: boolean expected";
        return null;
    };

    /**
     * Creates a CTwoFactor_ValidateToken_Response message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof CTwoFactor_ValidateToken_Response
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {CTwoFactor_ValidateToken_Response} CTwoFactor_ValidateToken_Response
     */
    CTwoFactor_ValidateToken_Response.fromObject = function fromObject(object) {
        if (object instanceof $root.CTwoFactor_ValidateToken_Response)
            return object;
        let message = new $root.CTwoFactor_ValidateToken_Response();
        if (object.valid != null)
            message.valid = Boolean(object.valid);
        return message;
    };

    /**
     * Creates a plain object from a CTwoFactor_ValidateToken_Response message. Also converts values to other types if specified.
     * @function toObject
     * @memberof CTwoFactor_ValidateToken_Response
     * @static
     * @param {CTwoFactor_ValidateToken_Response} message CTwoFactor_ValidateToken_Response
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    CTwoFactor_ValidateToken_Response.toObject = function toObject(message, options) {
        if (!options)
            options = {};
        let object = {};
        if (options.defaults)
            object.valid = false;
        if (message.valid != null && message.hasOwnProperty("valid"))
            object.valid = message.valid;
        return object;
    };

    /**
     * Converts this CTwoFactor_ValidateToken_Response to JSON.
     * @function toJSON
     * @memberof CTwoFactor_ValidateToken_Response
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    CTwoFactor_ValidateToken_Response.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for CTwoFactor_ValidateToken_Response
     * @function getTypeUrl
     * @memberof CTwoFactor_ValidateToken_Response
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    CTwoFactor_ValidateToken_Response.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/CTwoFactor_ValidateToken_Response";
    };

    return CTwoFactor_ValidateToken_Response;
})();

export const TwoFactor = $root.TwoFactor = (() => {

    /**
     * Constructs a new TwoFactor service.
     * @exports TwoFactor
     * @classdesc Represents a TwoFactor
     * @extends $protobuf.rpc.Service
     * @constructor
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     */
    function TwoFactor(rpcImpl, requestDelimited, responseDelimited) {
        $protobuf.rpc.Service.call(this, rpcImpl, requestDelimited, responseDelimited);
    }

    (TwoFactor.prototype = Object.create($protobuf.rpc.Service.prototype)).constructor = TwoFactor;

    /**
     * Creates new TwoFactor service using the specified rpc implementation.
     * @function create
     * @memberof TwoFactor
     * @static
     * @param {$protobuf.RPCImpl} rpcImpl RPC implementation
     * @param {boolean} [requestDelimited=false] Whether requests are length-delimited
     * @param {boolean} [responseDelimited=false] Whether responses are length-delimited
     * @returns {TwoFactor} RPC service. Useful where requests and/or responses are streamed.
     */
    TwoFactor.create = function create(rpcImpl, requestDelimited, responseDelimited) {
        return new this(rpcImpl, requestDelimited, responseDelimited);
    };

    /**
     * Callback as used by {@link TwoFactor#addAuthenticator}.
     * @memberof TwoFactor
     * @typedef AddAuthenticatorCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CTwoFactor_AddAuthenticator_Response} [response] CTwoFactor_AddAuthenticator_Response
     */

    /**
     * Calls AddAuthenticator.
     * @function addAuthenticator
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_AddAuthenticator_Request} request CTwoFactor_AddAuthenticator_Request message or plain object
     * @param {TwoFactor.AddAuthenticatorCallback} callback Node-style callback called with the error, if any, and CTwoFactor_AddAuthenticator_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(TwoFactor.prototype.addAuthenticator = function addAuthenticator(request, callback) {
        return this.rpcCall(addAuthenticator, $root.CTwoFactor_AddAuthenticator_Request, $root.CTwoFactor_AddAuthenticator_Response, request, callback);
    }, "name", { value: "AddAuthenticator" });

    /**
     * Calls AddAuthenticator.
     * @function addAuthenticator
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_AddAuthenticator_Request} request CTwoFactor_AddAuthenticator_Request message or plain object
     * @returns {Promise<CTwoFactor_AddAuthenticator_Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link TwoFactor#createEmergencyCodes}.
     * @memberof TwoFactor
     * @typedef CreateEmergencyCodesCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CTwoFactor_CreateEmergencyCodes_Response} [response] CTwoFactor_CreateEmergencyCodes_Response
     */

    /**
     * Calls CreateEmergencyCodes.
     * @function createEmergencyCodes
     * @memberof TwoFactor
     * @instance
     * @param {INotImplemented} request NotImplemented message or plain object
     * @param {TwoFactor.CreateEmergencyCodesCallback} callback Node-style callback called with the error, if any, and CTwoFactor_CreateEmergencyCodes_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(TwoFactor.prototype.createEmergencyCodes = function createEmergencyCodes(request, callback) {
        return this.rpcCall(createEmergencyCodes, $root.NotImplemented, $root.CTwoFactor_CreateEmergencyCodes_Response, request, callback);
    }, "name", { value: "CreateEmergencyCodes" });

    /**
     * Calls CreateEmergencyCodes.
     * @function createEmergencyCodes
     * @memberof TwoFactor
     * @instance
     * @param {INotImplemented} request NotImplemented message or plain object
     * @returns {Promise<CTwoFactor_CreateEmergencyCodes_Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link TwoFactor#destroyEmergencyCodes}.
     * @memberof TwoFactor
     * @typedef DestroyEmergencyCodesCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CTwoFactor_DestroyEmergencyCodes_Response} [response] CTwoFactor_DestroyEmergencyCodes_Response
     */

    /**
     * Calls DestroyEmergencyCodes.
     * @function destroyEmergencyCodes
     * @memberof TwoFactor
     * @instance
     * @param {INotImplemented} request NotImplemented message or plain object
     * @param {TwoFactor.DestroyEmergencyCodesCallback} callback Node-style callback called with the error, if any, and CTwoFactor_DestroyEmergencyCodes_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(TwoFactor.prototype.destroyEmergencyCodes = function destroyEmergencyCodes(request, callback) {
        return this.rpcCall(destroyEmergencyCodes, $root.NotImplemented, $root.CTwoFactor_DestroyEmergencyCodes_Response, request, callback);
    }, "name", { value: "DestroyEmergencyCodes" });

    /**
     * Calls DestroyEmergencyCodes.
     * @function destroyEmergencyCodes
     * @memberof TwoFactor
     * @instance
     * @param {INotImplemented} request NotImplemented message or plain object
     * @returns {Promise<CTwoFactor_DestroyEmergencyCodes_Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link TwoFactor#finalizeAddAuthenticator}.
     * @memberof TwoFactor
     * @typedef FinalizeAddAuthenticatorCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CTwoFactor_FinalizeAddAuthenticator_Response} [response] CTwoFactor_FinalizeAddAuthenticator_Response
     */

    /**
     * Calls FinalizeAddAuthenticator.
     * @function finalizeAddAuthenticator
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_FinalizeAddAuthenticator_Request} request CTwoFactor_FinalizeAddAuthenticator_Request message or plain object
     * @param {TwoFactor.FinalizeAddAuthenticatorCallback} callback Node-style callback called with the error, if any, and CTwoFactor_FinalizeAddAuthenticator_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(TwoFactor.prototype.finalizeAddAuthenticator = function finalizeAddAuthenticator(request, callback) {
        return this.rpcCall(finalizeAddAuthenticator, $root.CTwoFactor_FinalizeAddAuthenticator_Request, $root.CTwoFactor_FinalizeAddAuthenticator_Response, request, callback);
    }, "name", { value: "FinalizeAddAuthenticator" });

    /**
     * Calls FinalizeAddAuthenticator.
     * @function finalizeAddAuthenticator
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_FinalizeAddAuthenticator_Request} request CTwoFactor_FinalizeAddAuthenticator_Request message or plain object
     * @returns {Promise<CTwoFactor_FinalizeAddAuthenticator_Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link TwoFactor#queryStatus}.
     * @memberof TwoFactor
     * @typedef QueryStatusCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CTwoFactor_Status_Response} [response] CTwoFactor_Status_Response
     */

    /**
     * Calls QueryStatus.
     * @function queryStatus
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_Status_Request} request CTwoFactor_Status_Request message or plain object
     * @param {TwoFactor.QueryStatusCallback} callback Node-style callback called with the error, if any, and CTwoFactor_Status_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(TwoFactor.prototype.queryStatus = function queryStatus(request, callback) {
        return this.rpcCall(queryStatus, $root.CTwoFactor_Status_Request, $root.CTwoFactor_Status_Response, request, callback);
    }, "name", { value: "QueryStatus" });

    /**
     * Calls QueryStatus.
     * @function queryStatus
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_Status_Request} request CTwoFactor_Status_Request message or plain object
     * @returns {Promise<CTwoFactor_Status_Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link TwoFactor#queryTime}.
     * @memberof TwoFactor
     * @typedef QueryTimeCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CTwoFactor_Time_Response} [response] CTwoFactor_Time_Response
     */

    /**
     * Calls QueryTime.
     * @function queryTime
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_Time_Request} request CTwoFactor_Time_Request message or plain object
     * @param {TwoFactor.QueryTimeCallback} callback Node-style callback called with the error, if any, and CTwoFactor_Time_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(TwoFactor.prototype.queryTime = function queryTime(request, callback) {
        return this.rpcCall(queryTime, $root.CTwoFactor_Time_Request, $root.CTwoFactor_Time_Response, request, callback);
    }, "name", { value: "QueryTime" });

    /**
     * Calls QueryTime.
     * @function queryTime
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_Time_Request} request CTwoFactor_Time_Request message or plain object
     * @returns {Promise<CTwoFactor_Time_Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link TwoFactor#removeAuthenticator}.
     * @memberof TwoFactor
     * @typedef RemoveAuthenticatorCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CTwoFactor_RemoveAuthenticator_Response} [response] CTwoFactor_RemoveAuthenticator_Response
     */

    /**
     * Calls RemoveAuthenticator.
     * @function removeAuthenticator
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_RemoveAuthenticator_Request} request CTwoFactor_RemoveAuthenticator_Request message or plain object
     * @param {TwoFactor.RemoveAuthenticatorCallback} callback Node-style callback called with the error, if any, and CTwoFactor_RemoveAuthenticator_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(TwoFactor.prototype.removeAuthenticator = function removeAuthenticator(request, callback) {
        return this.rpcCall(removeAuthenticator, $root.CTwoFactor_RemoveAuthenticator_Request, $root.CTwoFactor_RemoveAuthenticator_Response, request, callback);
    }, "name", { value: "RemoveAuthenticator" });

    /**
     * Calls RemoveAuthenticator.
     * @function removeAuthenticator
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_RemoveAuthenticator_Request} request CTwoFactor_RemoveAuthenticator_Request message or plain object
     * @returns {Promise<CTwoFactor_RemoveAuthenticator_Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link TwoFactor#removeAuthenticatorViaChallengeContinue}.
     * @memberof TwoFactor
     * @typedef RemoveAuthenticatorViaChallengeContinueCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response} [response] CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     */

    /**
     * Calls RemoveAuthenticatorViaChallengeContinue.
     * @function removeAuthenticatorViaChallengeContinue
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request} request CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message or plain object
     * @param {TwoFactor.RemoveAuthenticatorViaChallengeContinueCallback} callback Node-style callback called with the error, if any, and CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(TwoFactor.prototype.removeAuthenticatorViaChallengeContinue = function removeAuthenticatorViaChallengeContinue(request, callback) {
        return this.rpcCall(removeAuthenticatorViaChallengeContinue, $root.CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request, $root.CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response, request, callback);
    }, "name", { value: "RemoveAuthenticatorViaChallengeContinue" });

    /**
     * Calls RemoveAuthenticatorViaChallengeContinue.
     * @function removeAuthenticatorViaChallengeContinue
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request} request CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Request message or plain object
     * @returns {Promise<CTwoFactor_RemoveAuthenticatorViaChallengeContinue_Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link TwoFactor#removeAuthenticatorViaChallengeStart}.
     * @memberof TwoFactor
     * @typedef RemoveAuthenticatorViaChallengeStartCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response} [response] CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     */

    /**
     * Calls RemoveAuthenticatorViaChallengeStart.
     * @function removeAuthenticatorViaChallengeStart
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request} request CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message or plain object
     * @param {TwoFactor.RemoveAuthenticatorViaChallengeStartCallback} callback Node-style callback called with the error, if any, and CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(TwoFactor.prototype.removeAuthenticatorViaChallengeStart = function removeAuthenticatorViaChallengeStart(request, callback) {
        return this.rpcCall(removeAuthenticatorViaChallengeStart, $root.CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request, $root.CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response, request, callback);
    }, "name", { value: "RemoveAuthenticatorViaChallengeStart" });

    /**
     * Calls RemoveAuthenticatorViaChallengeStart.
     * @function removeAuthenticatorViaChallengeStart
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_RemoveAuthenticatorViaChallengeStart_Request} request CTwoFactor_RemoveAuthenticatorViaChallengeStart_Request message or plain object
     * @returns {Promise<CTwoFactor_RemoveAuthenticatorViaChallengeStart_Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link TwoFactor#sendEmail}.
     * @memberof TwoFactor
     * @typedef SendEmailCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CTwoFactor_SendEmail_Response} [response] CTwoFactor_SendEmail_Response
     */

    /**
     * Calls SendEmail.
     * @function sendEmail
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_SendEmail_Request} request CTwoFactor_SendEmail_Request message or plain object
     * @param {TwoFactor.SendEmailCallback} callback Node-style callback called with the error, if any, and CTwoFactor_SendEmail_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(TwoFactor.prototype.sendEmail = function sendEmail(request, callback) {
        return this.rpcCall(sendEmail, $root.CTwoFactor_SendEmail_Request, $root.CTwoFactor_SendEmail_Response, request, callback);
    }, "name", { value: "SendEmail" });

    /**
     * Calls SendEmail.
     * @function sendEmail
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_SendEmail_Request} request CTwoFactor_SendEmail_Request message or plain object
     * @returns {Promise<CTwoFactor_SendEmail_Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link TwoFactor#updateTokenVersion}.
     * @memberof TwoFactor
     * @typedef UpdateTokenVersionCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CTwoFactor_UpdateTokenVersion_Response} [response] CTwoFactor_UpdateTokenVersion_Response
     */

    /**
     * Calls UpdateTokenVersion.
     * @function updateTokenVersion
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_UpdateTokenVersion_Request} request CTwoFactor_UpdateTokenVersion_Request message or plain object
     * @param {TwoFactor.UpdateTokenVersionCallback} callback Node-style callback called with the error, if any, and CTwoFactor_UpdateTokenVersion_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(TwoFactor.prototype.updateTokenVersion = function updateTokenVersion(request, callback) {
        return this.rpcCall(updateTokenVersion, $root.CTwoFactor_UpdateTokenVersion_Request, $root.CTwoFactor_UpdateTokenVersion_Response, request, callback);
    }, "name", { value: "UpdateTokenVersion" });

    /**
     * Calls UpdateTokenVersion.
     * @function updateTokenVersion
     * @memberof TwoFactor
     * @instance
     * @param {ICTwoFactor_UpdateTokenVersion_Request} request CTwoFactor_UpdateTokenVersion_Request message or plain object
     * @returns {Promise<CTwoFactor_UpdateTokenVersion_Response>} Promise
     * @variation 2
     */

    /**
     * Callback as used by {@link TwoFactor#validateToken}.
     * @memberof TwoFactor
     * @typedef ValidateTokenCallback
     * @type {function}
     * @param {Error|null} error Error, if any
     * @param {CTwoFactor_ValidateToken_Response} [response] CTwoFactor_ValidateToken_Response
     */

    /**
     * Calls ValidateToken.
     * @function validateToken
     * @memberof TwoFactor
     * @instance
     * @param {INotImplemented} request NotImplemented message or plain object
     * @param {TwoFactor.ValidateTokenCallback} callback Node-style callback called with the error, if any, and CTwoFactor_ValidateToken_Response
     * @returns {undefined}
     * @variation 1
     */
    Object.defineProperty(TwoFactor.prototype.validateToken = function validateToken(request, callback) {
        return this.rpcCall(validateToken, $root.NotImplemented, $root.CTwoFactor_ValidateToken_Response, request, callback);
    }, "name", { value: "ValidateToken" });

    /**
     * Calls ValidateToken.
     * @function validateToken
     * @memberof TwoFactor
     * @instance
     * @param {INotImplemented} request NotImplemented message or plain object
     * @returns {Promise<CTwoFactor_ValidateToken_Response>} Promise
     * @variation 2
     */

    return TwoFactor;
})();

export const NoResponse = $root.NoResponse = (() => {

    /**
     * Properties of a NoResponse.
     * @exports INoResponse
     * @interface INoResponse
     */

    /**
     * Constructs a new NoResponse.
     * @exports NoResponse
     * @classdesc Represents a NoResponse.
     * @implements INoResponse
     * @constructor
     * @param {INoResponse=} [properties] Properties to set
     */
    function NoResponse(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new NoResponse instance using the specified properties.
     * @function create
     * @memberof NoResponse
     * @static
     * @param {INoResponse=} [properties] Properties to set
     * @returns {NoResponse} NoResponse instance
     */
    NoResponse.create = function create(properties) {
        return new NoResponse(properties);
    };

    /**
     * Encodes the specified NoResponse message. Does not implicitly {@link NoResponse.verify|verify} messages.
     * @function encode
     * @memberof NoResponse
     * @static
     * @param {INoResponse} message NoResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NoResponse.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified NoResponse message, length delimited. Does not implicitly {@link NoResponse.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NoResponse
     * @static
     * @param {INoResponse} message NoResponse message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NoResponse.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NoResponse message from the specified reader or buffer.
     * @function decode
     * @memberof NoResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NoResponse} NoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NoResponse.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NoResponse();
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
     * Decodes a NoResponse message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NoResponse
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NoResponse} NoResponse
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NoResponse.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NoResponse message.
     * @function verify
     * @memberof NoResponse
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NoResponse.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a NoResponse message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NoResponse
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NoResponse} NoResponse
     */
    NoResponse.fromObject = function fromObject(object) {
        if (object instanceof $root.NoResponse)
            return object;
        return new $root.NoResponse();
    };

    /**
     * Creates a plain object from a NoResponse message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NoResponse
     * @static
     * @param {NoResponse} message NoResponse
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NoResponse.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this NoResponse to JSON.
     * @function toJSON
     * @memberof NoResponse
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NoResponse.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NoResponse
     * @function getTypeUrl
     * @memberof NoResponse
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NoResponse.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NoResponse";
    };

    return NoResponse;
})();

export const NotImplemented = $root.NotImplemented = (() => {

    /**
     * Properties of a NotImplemented.
     * @exports INotImplemented
     * @interface INotImplemented
     */

    /**
     * Constructs a new NotImplemented.
     * @exports NotImplemented
     * @classdesc Represents a NotImplemented.
     * @implements INotImplemented
     * @constructor
     * @param {INotImplemented=} [properties] Properties to set
     */
    function NotImplemented(properties) {
        if (properties)
            for (let keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                if (properties[keys[i]] != null)
                    this[keys[i]] = properties[keys[i]];
    }

    /**
     * Creates a new NotImplemented instance using the specified properties.
     * @function create
     * @memberof NotImplemented
     * @static
     * @param {INotImplemented=} [properties] Properties to set
     * @returns {NotImplemented} NotImplemented instance
     */
    NotImplemented.create = function create(properties) {
        return new NotImplemented(properties);
    };

    /**
     * Encodes the specified NotImplemented message. Does not implicitly {@link NotImplemented.verify|verify} messages.
     * @function encode
     * @memberof NotImplemented
     * @static
     * @param {INotImplemented} message NotImplemented message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NotImplemented.encode = function encode(message, writer) {
        if (!writer)
            writer = $Writer.create();
        return writer;
    };

    /**
     * Encodes the specified NotImplemented message, length delimited. Does not implicitly {@link NotImplemented.verify|verify} messages.
     * @function encodeDelimited
     * @memberof NotImplemented
     * @static
     * @param {INotImplemented} message NotImplemented message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    NotImplemented.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes a NotImplemented message from the specified reader or buffer.
     * @function decode
     * @memberof NotImplemented
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {NotImplemented} NotImplemented
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NotImplemented.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader))
            reader = $Reader.create(reader);
        let end = length === undefined ? reader.len : reader.pos + length, message = new $root.NotImplemented();
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
     * Decodes a NotImplemented message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof NotImplemented
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {NotImplemented} NotImplemented
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    NotImplemented.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader))
            reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies a NotImplemented message.
     * @function verify
     * @memberof NotImplemented
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    NotImplemented.verify = function verify(message) {
        if (typeof message !== "object" || message === null)
            return "object expected";
        return null;
    };

    /**
     * Creates a NotImplemented message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof NotImplemented
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {NotImplemented} NotImplemented
     */
    NotImplemented.fromObject = function fromObject(object) {
        if (object instanceof $root.NotImplemented)
            return object;
        return new $root.NotImplemented();
    };

    /**
     * Creates a plain object from a NotImplemented message. Also converts values to other types if specified.
     * @function toObject
     * @memberof NotImplemented
     * @static
     * @param {NotImplemented} message NotImplemented
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    NotImplemented.toObject = function toObject() {
        return {};
    };

    /**
     * Converts this NotImplemented to JSON.
     * @function toJSON
     * @memberof NotImplemented
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    NotImplemented.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for NotImplemented
     * @function getTypeUrl
     * @memberof NotImplemented
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    NotImplemented.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
            typeUrlPrefix = "type.googleapis.com";
        }
        return typeUrlPrefix + "/NotImplemented";
    };

    return NotImplemented;
})();

export { $root as default };
