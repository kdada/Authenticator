/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
import { index } from "@ohos/protobufjs"; const $protobuf = index;
import Long from 'long';
$protobuf.util.Long=Long
$protobuf.configure()

// Common aliases
const $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
const $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

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
