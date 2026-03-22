/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal.js");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.pb = (function() {

    /**
     * Namespace pb.
     * @exports pb
     * @namespace
     */
    var pb = {};

    pb.Base_Activity_ActivityInfo = (function() {

        /**
         * Properties of a Base_Activity_ActivityInfo.
         * @memberof pb
         * @interface IBase_Activity_ActivityInfo
         * @property {pb.IBase_Activity_DailyTaskActivityInfo|null} [DailyTaskActivityInfo] Base_Activity_ActivityInfo DailyTaskActivityInfo
         */

        /**
         * Constructs a new Base_Activity_ActivityInfo.
         * @memberof pb
         * @classdesc Represents a Base_Activity_ActivityInfo.
         * @implements IBase_Activity_ActivityInfo
         * @constructor
         * @param {pb.IBase_Activity_ActivityInfo=} [properties] Properties to set
         */
        function Base_Activity_ActivityInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Activity_ActivityInfo DailyTaskActivityInfo.
         * @member {pb.IBase_Activity_DailyTaskActivityInfo|null|undefined} DailyTaskActivityInfo
         * @memberof pb.Base_Activity_ActivityInfo
         * @instance
         */
        Base_Activity_ActivityInfo.prototype.DailyTaskActivityInfo = null;

        /**
         * Creates a new Base_Activity_ActivityInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Activity_ActivityInfo
         * @static
         * @param {pb.IBase_Activity_ActivityInfo=} [properties] Properties to set
         * @returns {pb.Base_Activity_ActivityInfo} Base_Activity_ActivityInfo instance
         */
        Base_Activity_ActivityInfo.create = function create(properties) {
            return new Base_Activity_ActivityInfo(properties);
        };

        /**
         * Encodes the specified Base_Activity_ActivityInfo message. Does not implicitly {@link pb.Base_Activity_ActivityInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Activity_ActivityInfo
         * @static
         * @param {pb.IBase_Activity_ActivityInfo} message Base_Activity_ActivityInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Activity_ActivityInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DailyTaskActivityInfo != null && Object.hasOwnProperty.call(message, "DailyTaskActivityInfo"))
                $root.pb.Base_Activity_DailyTaskActivityInfo.encode(message.DailyTaskActivityInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Base_Activity_ActivityInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Activity_ActivityInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Activity_ActivityInfo} Base_Activity_ActivityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Activity_ActivityInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Activity_ActivityInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.DailyTaskActivityInfo = $root.pb.Base_Activity_DailyTaskActivityInfo.decode(reader, reader.uint32());
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
         * Gets the default type url for Base_Activity_ActivityInfo
         * @function getTypeUrl
         * @memberof pb.Base_Activity_ActivityInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Activity_ActivityInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Activity_ActivityInfo";
        };

        return Base_Activity_ActivityInfo;
    })();

    pb.Base_Activity_DailyTaskActivityInfo = (function() {

        /**
         * Properties of a Base_Activity_DailyTaskActivityInfo.
         * @memberof pb
         * @interface IBase_Activity_DailyTaskActivityInfo
         * @property {number|null} [FireDragonTreasureValue] Base_Activity_DailyTaskActivityInfo FireDragonTreasureValue
         * @property {number|null} [FireDragonTreasureBit] Base_Activity_DailyTaskActivityInfo FireDragonTreasureBit
         * @property {number|Long|null} [AdsBit] Base_Activity_DailyTaskActivityInfo AdsBit
         */

        /**
         * Constructs a new Base_Activity_DailyTaskActivityInfo.
         * @memberof pb
         * @classdesc Represents a Base_Activity_DailyTaskActivityInfo.
         * @implements IBase_Activity_DailyTaskActivityInfo
         * @constructor
         * @param {pb.IBase_Activity_DailyTaskActivityInfo=} [properties] Properties to set
         */
        function Base_Activity_DailyTaskActivityInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Activity_DailyTaskActivityInfo FireDragonTreasureValue.
         * @member {number} FireDragonTreasureValue
         * @memberof pb.Base_Activity_DailyTaskActivityInfo
         * @instance
         */
        Base_Activity_DailyTaskActivityInfo.prototype.FireDragonTreasureValue = 0;

        /**
         * Base_Activity_DailyTaskActivityInfo FireDragonTreasureBit.
         * @member {number} FireDragonTreasureBit
         * @memberof pb.Base_Activity_DailyTaskActivityInfo
         * @instance
         */
        Base_Activity_DailyTaskActivityInfo.prototype.FireDragonTreasureBit = 0;

        /**
         * Base_Activity_DailyTaskActivityInfo AdsBit.
         * @member {number|Long} AdsBit
         * @memberof pb.Base_Activity_DailyTaskActivityInfo
         * @instance
         */
        Base_Activity_DailyTaskActivityInfo.prototype.AdsBit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Base_Activity_DailyTaskActivityInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Activity_DailyTaskActivityInfo
         * @static
         * @param {pb.IBase_Activity_DailyTaskActivityInfo=} [properties] Properties to set
         * @returns {pb.Base_Activity_DailyTaskActivityInfo} Base_Activity_DailyTaskActivityInfo instance
         */
        Base_Activity_DailyTaskActivityInfo.create = function create(properties) {
            return new Base_Activity_DailyTaskActivityInfo(properties);
        };

        /**
         * Encodes the specified Base_Activity_DailyTaskActivityInfo message. Does not implicitly {@link pb.Base_Activity_DailyTaskActivityInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Activity_DailyTaskActivityInfo
         * @static
         * @param {pb.IBase_Activity_DailyTaskActivityInfo} message Base_Activity_DailyTaskActivityInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Activity_DailyTaskActivityInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FireDragonTreasureValue != null && Object.hasOwnProperty.call(message, "FireDragonTreasureValue"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FireDragonTreasureValue);
            if (message.FireDragonTreasureBit != null && Object.hasOwnProperty.call(message, "FireDragonTreasureBit"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FireDragonTreasureBit);
            if (message.AdsBit != null && Object.hasOwnProperty.call(message, "AdsBit"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.AdsBit);
            return writer;
        };

        /**
         * Decodes a Base_Activity_DailyTaskActivityInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Activity_DailyTaskActivityInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Activity_DailyTaskActivityInfo} Base_Activity_DailyTaskActivityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Activity_DailyTaskActivityInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Activity_DailyTaskActivityInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.FireDragonTreasureValue = reader.int32();
                        break;
                    }
                case 2: {
                        message.FireDragonTreasureBit = reader.int32();
                        break;
                    }
                case 3: {
                        message.AdsBit = reader.int64();
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
         * Gets the default type url for Base_Activity_DailyTaskActivityInfo
         * @function getTypeUrl
         * @memberof pb.Base_Activity_DailyTaskActivityInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Activity_DailyTaskActivityInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Activity_DailyTaskActivityInfo";
        };

        return Base_Activity_DailyTaskActivityInfo;
    })();

    pb.Base_Activity_AdsInfo = (function() {

        /**
         * Properties of a Base_Activity_AdsInfo.
         * @memberof pb
         * @interface IBase_Activity_AdsInfo
         */

        /**
         * Constructs a new Base_Activity_AdsInfo.
         * @memberof pb
         * @classdesc Represents a Base_Activity_AdsInfo.
         * @implements IBase_Activity_AdsInfo
         * @constructor
         * @param {pb.IBase_Activity_AdsInfo=} [properties] Properties to set
         */
        function Base_Activity_AdsInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Base_Activity_AdsInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Activity_AdsInfo
         * @static
         * @param {pb.IBase_Activity_AdsInfo=} [properties] Properties to set
         * @returns {pb.Base_Activity_AdsInfo} Base_Activity_AdsInfo instance
         */
        Base_Activity_AdsInfo.create = function create(properties) {
            return new Base_Activity_AdsInfo(properties);
        };

        /**
         * Encodes the specified Base_Activity_AdsInfo message. Does not implicitly {@link pb.Base_Activity_AdsInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Activity_AdsInfo
         * @static
         * @param {pb.IBase_Activity_AdsInfo} message Base_Activity_AdsInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Activity_AdsInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Base_Activity_AdsInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Activity_AdsInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Activity_AdsInfo} Base_Activity_AdsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Activity_AdsInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Activity_AdsInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Base_Activity_AdsInfo
         * @function getTypeUrl
         * @memberof pb.Base_Activity_AdsInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Activity_AdsInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Activity_AdsInfo";
        };

        return Base_Activity_AdsInfo;
    })();

    pb.Net_Activity_UpdateActivityRet = (function() {

        /**
         * Properties of a Net_Activity_UpdateActivityRet.
         * @memberof pb
         * @interface INet_Activity_UpdateActivityRet
         * @property {pb.IBase_Activity_ActivityInfo|null} [ActivityInfo] Net_Activity_UpdateActivityRet ActivityInfo
         */

        /**
         * Constructs a new Net_Activity_UpdateActivityRet.
         * @memberof pb
         * @classdesc Represents a Net_Activity_UpdateActivityRet.
         * @implements INet_Activity_UpdateActivityRet
         * @constructor
         * @param {pb.INet_Activity_UpdateActivityRet=} [properties] Properties to set
         */
        function Net_Activity_UpdateActivityRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Activity_UpdateActivityRet ActivityInfo.
         * @member {pb.IBase_Activity_ActivityInfo|null|undefined} ActivityInfo
         * @memberof pb.Net_Activity_UpdateActivityRet
         * @instance
         */
        Net_Activity_UpdateActivityRet.prototype.ActivityInfo = null;

        /**
         * Creates a new Net_Activity_UpdateActivityRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Activity_UpdateActivityRet
         * @static
         * @param {pb.INet_Activity_UpdateActivityRet=} [properties] Properties to set
         * @returns {pb.Net_Activity_UpdateActivityRet} Net_Activity_UpdateActivityRet instance
         */
        Net_Activity_UpdateActivityRet.create = function create(properties) {
            return new Net_Activity_UpdateActivityRet(properties);
        };

        /**
         * Encodes the specified Net_Activity_UpdateActivityRet message. Does not implicitly {@link pb.Net_Activity_UpdateActivityRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Activity_UpdateActivityRet
         * @static
         * @param {pb.INet_Activity_UpdateActivityRet} message Net_Activity_UpdateActivityRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Activity_UpdateActivityRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ActivityInfo != null && Object.hasOwnProperty.call(message, "ActivityInfo"))
                $root.pb.Base_Activity_ActivityInfo.encode(message.ActivityInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Net_Activity_UpdateActivityRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Activity_UpdateActivityRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Activity_UpdateActivityRet} Net_Activity_UpdateActivityRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Activity_UpdateActivityRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Activity_UpdateActivityRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ActivityInfo = $root.pb.Base_Activity_ActivityInfo.decode(reader, reader.uint32());
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
         * Gets the default type url for Net_Activity_UpdateActivityRet
         * @function getTypeUrl
         * @memberof pb.Net_Activity_UpdateActivityRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Activity_UpdateActivityRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Activity_UpdateActivityRet";
        };

        return Net_Activity_UpdateActivityRet;
    })();

    pb.Net_Activity_AdsUpdateUserTypeReq = (function() {

        /**
         * Properties of a Net_Activity_AdsUpdateUserTypeReq.
         * @memberof pb
         * @interface INet_Activity_AdsUpdateUserTypeReq
         */

        /**
         * Constructs a new Net_Activity_AdsUpdateUserTypeReq.
         * @memberof pb
         * @classdesc Represents a Net_Activity_AdsUpdateUserTypeReq.
         * @implements INet_Activity_AdsUpdateUserTypeReq
         * @constructor
         * @param {pb.INet_Activity_AdsUpdateUserTypeReq=} [properties] Properties to set
         */
        function Net_Activity_AdsUpdateUserTypeReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Activity_AdsUpdateUserTypeReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Activity_AdsUpdateUserTypeReq
         * @static
         * @param {pb.INet_Activity_AdsUpdateUserTypeReq=} [properties] Properties to set
         * @returns {pb.Net_Activity_AdsUpdateUserTypeReq} Net_Activity_AdsUpdateUserTypeReq instance
         */
        Net_Activity_AdsUpdateUserTypeReq.create = function create(properties) {
            return new Net_Activity_AdsUpdateUserTypeReq(properties);
        };

        /**
         * Encodes the specified Net_Activity_AdsUpdateUserTypeReq message. Does not implicitly {@link pb.Net_Activity_AdsUpdateUserTypeReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Activity_AdsUpdateUserTypeReq
         * @static
         * @param {pb.INet_Activity_AdsUpdateUserTypeReq} message Net_Activity_AdsUpdateUserTypeReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Activity_AdsUpdateUserTypeReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Activity_AdsUpdateUserTypeReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Activity_AdsUpdateUserTypeReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Activity_AdsUpdateUserTypeReq} Net_Activity_AdsUpdateUserTypeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Activity_AdsUpdateUserTypeReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Activity_AdsUpdateUserTypeReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Activity_AdsUpdateUserTypeReq
         * @function getTypeUrl
         * @memberof pb.Net_Activity_AdsUpdateUserTypeReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Activity_AdsUpdateUserTypeReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Activity_AdsUpdateUserTypeReq";
        };

        return Net_Activity_AdsUpdateUserTypeReq;
    })();

    pb.Net_Activity_AdsUpdateUserTypeRet = (function() {

        /**
         * Properties of a Net_Activity_AdsUpdateUserTypeRet.
         * @memberof pb
         * @interface INet_Activity_AdsUpdateUserTypeRet
         */

        /**
         * Constructs a new Net_Activity_AdsUpdateUserTypeRet.
         * @memberof pb
         * @classdesc Represents a Net_Activity_AdsUpdateUserTypeRet.
         * @implements INet_Activity_AdsUpdateUserTypeRet
         * @constructor
         * @param {pb.INet_Activity_AdsUpdateUserTypeRet=} [properties] Properties to set
         */
        function Net_Activity_AdsUpdateUserTypeRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Activity_AdsUpdateUserTypeRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Activity_AdsUpdateUserTypeRet
         * @static
         * @param {pb.INet_Activity_AdsUpdateUserTypeRet=} [properties] Properties to set
         * @returns {pb.Net_Activity_AdsUpdateUserTypeRet} Net_Activity_AdsUpdateUserTypeRet instance
         */
        Net_Activity_AdsUpdateUserTypeRet.create = function create(properties) {
            return new Net_Activity_AdsUpdateUserTypeRet(properties);
        };

        /**
         * Encodes the specified Net_Activity_AdsUpdateUserTypeRet message. Does not implicitly {@link pb.Net_Activity_AdsUpdateUserTypeRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Activity_AdsUpdateUserTypeRet
         * @static
         * @param {pb.INet_Activity_AdsUpdateUserTypeRet} message Net_Activity_AdsUpdateUserTypeRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Activity_AdsUpdateUserTypeRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Activity_AdsUpdateUserTypeRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Activity_AdsUpdateUserTypeRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Activity_AdsUpdateUserTypeRet} Net_Activity_AdsUpdateUserTypeRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Activity_AdsUpdateUserTypeRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Activity_AdsUpdateUserTypeRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Activity_AdsUpdateUserTypeRet
         * @function getTypeUrl
         * @memberof pb.Net_Activity_AdsUpdateUserTypeRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Activity_AdsUpdateUserTypeRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Activity_AdsUpdateUserTypeRet";
        };

        return Net_Activity_AdsUpdateUserTypeRet;
    })();

    pb.Net_Activity_ReceiveFireDragonTreasureRewardsReq = (function() {

        /**
         * Properties of a Net_Activity_ReceiveFireDragonTreasureRewardsReq.
         * @memberof pb
         * @interface INet_Activity_ReceiveFireDragonTreasureRewardsReq
         * @property {number|null} [Index] Net_Activity_ReceiveFireDragonTreasureRewardsReq Index
         */

        /**
         * Constructs a new Net_Activity_ReceiveFireDragonTreasureRewardsReq.
         * @memberof pb
         * @classdesc Represents a Net_Activity_ReceiveFireDragonTreasureRewardsReq.
         * @implements INet_Activity_ReceiveFireDragonTreasureRewardsReq
         * @constructor
         * @param {pb.INet_Activity_ReceiveFireDragonTreasureRewardsReq=} [properties] Properties to set
         */
        function Net_Activity_ReceiveFireDragonTreasureRewardsReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Activity_ReceiveFireDragonTreasureRewardsReq Index.
         * @member {number} Index
         * @memberof pb.Net_Activity_ReceiveFireDragonTreasureRewardsReq
         * @instance
         */
        Net_Activity_ReceiveFireDragonTreasureRewardsReq.prototype.Index = 0;

        /**
         * Creates a new Net_Activity_ReceiveFireDragonTreasureRewardsReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Activity_ReceiveFireDragonTreasureRewardsReq
         * @static
         * @param {pb.INet_Activity_ReceiveFireDragonTreasureRewardsReq=} [properties] Properties to set
         * @returns {pb.Net_Activity_ReceiveFireDragonTreasureRewardsReq} Net_Activity_ReceiveFireDragonTreasureRewardsReq instance
         */
        Net_Activity_ReceiveFireDragonTreasureRewardsReq.create = function create(properties) {
            return new Net_Activity_ReceiveFireDragonTreasureRewardsReq(properties);
        };

        /**
         * Encodes the specified Net_Activity_ReceiveFireDragonTreasureRewardsReq message. Does not implicitly {@link pb.Net_Activity_ReceiveFireDragonTreasureRewardsReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Activity_ReceiveFireDragonTreasureRewardsReq
         * @static
         * @param {pb.INet_Activity_ReceiveFireDragonTreasureRewardsReq} message Net_Activity_ReceiveFireDragonTreasureRewardsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Activity_ReceiveFireDragonTreasureRewardsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Index != null && Object.hasOwnProperty.call(message, "Index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Index);
            return writer;
        };

        /**
         * Decodes a Net_Activity_ReceiveFireDragonTreasureRewardsReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Activity_ReceiveFireDragonTreasureRewardsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Activity_ReceiveFireDragonTreasureRewardsReq} Net_Activity_ReceiveFireDragonTreasureRewardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Activity_ReceiveFireDragonTreasureRewardsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Activity_ReceiveFireDragonTreasureRewardsReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Index = reader.int32();
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
         * Gets the default type url for Net_Activity_ReceiveFireDragonTreasureRewardsReq
         * @function getTypeUrl
         * @memberof pb.Net_Activity_ReceiveFireDragonTreasureRewardsReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Activity_ReceiveFireDragonTreasureRewardsReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Activity_ReceiveFireDragonTreasureRewardsReq";
        };

        return Net_Activity_ReceiveFireDragonTreasureRewardsReq;
    })();

    pb.Net_Activity_ReceiveFireDragonTreasureRewardsRet = (function() {

        /**
         * Properties of a Net_Activity_ReceiveFireDragonTreasureRewardsRet.
         * @memberof pb
         * @interface INet_Activity_ReceiveFireDragonTreasureRewardsRet
         * @property {number|null} [Ret] Net_Activity_ReceiveFireDragonTreasureRewardsRet Ret
         * @property {number|null} [FireDragonTreasureValue] Net_Activity_ReceiveFireDragonTreasureRewardsRet FireDragonTreasureValue
         * @property {number|null} [FireDragonTreasureBit] Net_Activity_ReceiveFireDragonTreasureRewardsRet FireDragonTreasureBit
         */

        /**
         * Constructs a new Net_Activity_ReceiveFireDragonTreasureRewardsRet.
         * @memberof pb
         * @classdesc Represents a Net_Activity_ReceiveFireDragonTreasureRewardsRet.
         * @implements INet_Activity_ReceiveFireDragonTreasureRewardsRet
         * @constructor
         * @param {pb.INet_Activity_ReceiveFireDragonTreasureRewardsRet=} [properties] Properties to set
         */
        function Net_Activity_ReceiveFireDragonTreasureRewardsRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Activity_ReceiveFireDragonTreasureRewardsRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Activity_ReceiveFireDragonTreasureRewardsRet
         * @instance
         */
        Net_Activity_ReceiveFireDragonTreasureRewardsRet.prototype.Ret = 0;

        /**
         * Net_Activity_ReceiveFireDragonTreasureRewardsRet FireDragonTreasureValue.
         * @member {number} FireDragonTreasureValue
         * @memberof pb.Net_Activity_ReceiveFireDragonTreasureRewardsRet
         * @instance
         */
        Net_Activity_ReceiveFireDragonTreasureRewardsRet.prototype.FireDragonTreasureValue = 0;

        /**
         * Net_Activity_ReceiveFireDragonTreasureRewardsRet FireDragonTreasureBit.
         * @member {number} FireDragonTreasureBit
         * @memberof pb.Net_Activity_ReceiveFireDragonTreasureRewardsRet
         * @instance
         */
        Net_Activity_ReceiveFireDragonTreasureRewardsRet.prototype.FireDragonTreasureBit = 0;

        /**
         * Creates a new Net_Activity_ReceiveFireDragonTreasureRewardsRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Activity_ReceiveFireDragonTreasureRewardsRet
         * @static
         * @param {pb.INet_Activity_ReceiveFireDragonTreasureRewardsRet=} [properties] Properties to set
         * @returns {pb.Net_Activity_ReceiveFireDragonTreasureRewardsRet} Net_Activity_ReceiveFireDragonTreasureRewardsRet instance
         */
        Net_Activity_ReceiveFireDragonTreasureRewardsRet.create = function create(properties) {
            return new Net_Activity_ReceiveFireDragonTreasureRewardsRet(properties);
        };

        /**
         * Encodes the specified Net_Activity_ReceiveFireDragonTreasureRewardsRet message. Does not implicitly {@link pb.Net_Activity_ReceiveFireDragonTreasureRewardsRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Activity_ReceiveFireDragonTreasureRewardsRet
         * @static
         * @param {pb.INet_Activity_ReceiveFireDragonTreasureRewardsRet} message Net_Activity_ReceiveFireDragonTreasureRewardsRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Activity_ReceiveFireDragonTreasureRewardsRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.FireDragonTreasureValue != null && Object.hasOwnProperty.call(message, "FireDragonTreasureValue"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.FireDragonTreasureValue);
            if (message.FireDragonTreasureBit != null && Object.hasOwnProperty.call(message, "FireDragonTreasureBit"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.FireDragonTreasureBit);
            return writer;
        };

        /**
         * Decodes a Net_Activity_ReceiveFireDragonTreasureRewardsRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Activity_ReceiveFireDragonTreasureRewardsRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Activity_ReceiveFireDragonTreasureRewardsRet} Net_Activity_ReceiveFireDragonTreasureRewardsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Activity_ReceiveFireDragonTreasureRewardsRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Activity_ReceiveFireDragonTreasureRewardsRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.FireDragonTreasureValue = reader.int32();
                        break;
                    }
                case 3: {
                        message.FireDragonTreasureBit = reader.int32();
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
         * Gets the default type url for Net_Activity_ReceiveFireDragonTreasureRewardsRet
         * @function getTypeUrl
         * @memberof pb.Net_Activity_ReceiveFireDragonTreasureRewardsRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Activity_ReceiveFireDragonTreasureRewardsRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Activity_ReceiveFireDragonTreasureRewardsRet";
        };

        return Net_Activity_ReceiveFireDragonTreasureRewardsRet;
    })();

    pb.Base_Ads_AdsTasksInfo = (function() {

        /**
         * Properties of a Base_Ads_AdsTasksInfo.
         * @memberof pb
         * @interface IBase_Ads_AdsTasksInfo
         * @property {Array.<pb.IBase_Ads_AdsTasksItemInfo>|null} [AdsTasksItemList] Base_Ads_AdsTasksInfo AdsTasksItemList
         * @property {number|Long|null} [AdsBit] Base_Ads_AdsTasksInfo AdsBit
         */

        /**
         * Constructs a new Base_Ads_AdsTasksInfo.
         * @memberof pb
         * @classdesc Represents a Base_Ads_AdsTasksInfo.
         * @implements IBase_Ads_AdsTasksInfo
         * @constructor
         * @param {pb.IBase_Ads_AdsTasksInfo=} [properties] Properties to set
         */
        function Base_Ads_AdsTasksInfo(properties) {
            this.AdsTasksItemList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Ads_AdsTasksInfo AdsTasksItemList.
         * @member {Array.<pb.IBase_Ads_AdsTasksItemInfo>} AdsTasksItemList
         * @memberof pb.Base_Ads_AdsTasksInfo
         * @instance
         */
        Base_Ads_AdsTasksInfo.prototype.AdsTasksItemList = $util.emptyArray;

        /**
         * Base_Ads_AdsTasksInfo AdsBit.
         * @member {number|Long} AdsBit
         * @memberof pb.Base_Ads_AdsTasksInfo
         * @instance
         */
        Base_Ads_AdsTasksInfo.prototype.AdsBit = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Base_Ads_AdsTasksInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Ads_AdsTasksInfo
         * @static
         * @param {pb.IBase_Ads_AdsTasksInfo=} [properties] Properties to set
         * @returns {pb.Base_Ads_AdsTasksInfo} Base_Ads_AdsTasksInfo instance
         */
        Base_Ads_AdsTasksInfo.create = function create(properties) {
            return new Base_Ads_AdsTasksInfo(properties);
        };

        /**
         * Encodes the specified Base_Ads_AdsTasksInfo message. Does not implicitly {@link pb.Base_Ads_AdsTasksInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Ads_AdsTasksInfo
         * @static
         * @param {pb.IBase_Ads_AdsTasksInfo} message Base_Ads_AdsTasksInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Ads_AdsTasksInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AdsTasksItemList != null && message.AdsTasksItemList.length)
                for (var i = 0; i < message.AdsTasksItemList.length; ++i)
                    $root.pb.Base_Ads_AdsTasksItemInfo.encode(message.AdsTasksItemList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.AdsBit != null && Object.hasOwnProperty.call(message, "AdsBit"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.AdsBit);
            return writer;
        };

        /**
         * Decodes a Base_Ads_AdsTasksInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Ads_AdsTasksInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Ads_AdsTasksInfo} Base_Ads_AdsTasksInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Ads_AdsTasksInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Ads_AdsTasksInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.AdsTasksItemList && message.AdsTasksItemList.length))
                            message.AdsTasksItemList = [];
                        message.AdsTasksItemList.push($root.pb.Base_Ads_AdsTasksItemInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        message.AdsBit = reader.int64();
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
         * Gets the default type url for Base_Ads_AdsTasksInfo
         * @function getTypeUrl
         * @memberof pb.Base_Ads_AdsTasksInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Ads_AdsTasksInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Ads_AdsTasksInfo";
        };

        return Base_Ads_AdsTasksInfo;
    })();

    pb.Base_Ads_AdsTasksItemInfo = (function() {

        /**
         * Properties of a Base_Ads_AdsTasksItemInfo.
         * @memberof pb
         * @interface IBase_Ads_AdsTasksItemInfo
         * @property {number|null} [Id] Base_Ads_AdsTasksItemInfo Id
         * @property {number|null} [ItemId] Base_Ads_AdsTasksItemInfo ItemId
         * @property {number|null} [ItemNum] Base_Ads_AdsTasksItemInfo ItemNum
         */

        /**
         * Constructs a new Base_Ads_AdsTasksItemInfo.
         * @memberof pb
         * @classdesc Represents a Base_Ads_AdsTasksItemInfo.
         * @implements IBase_Ads_AdsTasksItemInfo
         * @constructor
         * @param {pb.IBase_Ads_AdsTasksItemInfo=} [properties] Properties to set
         */
        function Base_Ads_AdsTasksItemInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Ads_AdsTasksItemInfo Id.
         * @member {number} Id
         * @memberof pb.Base_Ads_AdsTasksItemInfo
         * @instance
         */
        Base_Ads_AdsTasksItemInfo.prototype.Id = 0;

        /**
         * Base_Ads_AdsTasksItemInfo ItemId.
         * @member {number} ItemId
         * @memberof pb.Base_Ads_AdsTasksItemInfo
         * @instance
         */
        Base_Ads_AdsTasksItemInfo.prototype.ItemId = 0;

        /**
         * Base_Ads_AdsTasksItemInfo ItemNum.
         * @member {number} ItemNum
         * @memberof pb.Base_Ads_AdsTasksItemInfo
         * @instance
         */
        Base_Ads_AdsTasksItemInfo.prototype.ItemNum = 0;

        /**
         * Creates a new Base_Ads_AdsTasksItemInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Ads_AdsTasksItemInfo
         * @static
         * @param {pb.IBase_Ads_AdsTasksItemInfo=} [properties] Properties to set
         * @returns {pb.Base_Ads_AdsTasksItemInfo} Base_Ads_AdsTasksItemInfo instance
         */
        Base_Ads_AdsTasksItemInfo.create = function create(properties) {
            return new Base_Ads_AdsTasksItemInfo(properties);
        };

        /**
         * Encodes the specified Base_Ads_AdsTasksItemInfo message. Does not implicitly {@link pb.Base_Ads_AdsTasksItemInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Ads_AdsTasksItemInfo
         * @static
         * @param {pb.IBase_Ads_AdsTasksItemInfo} message Base_Ads_AdsTasksItemInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Ads_AdsTasksItemInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            if (message.ItemId != null && Object.hasOwnProperty.call(message, "ItemId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ItemId);
            if (message.ItemNum != null && Object.hasOwnProperty.call(message, "ItemNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ItemNum);
            return writer;
        };

        /**
         * Decodes a Base_Ads_AdsTasksItemInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Ads_AdsTasksItemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Ads_AdsTasksItemInfo} Base_Ads_AdsTasksItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Ads_AdsTasksItemInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Ads_AdsTasksItemInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Id = reader.int32();
                        break;
                    }
                case 2: {
                        message.ItemId = reader.int32();
                        break;
                    }
                case 3: {
                        message.ItemNum = reader.int32();
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
         * Gets the default type url for Base_Ads_AdsTasksItemInfo
         * @function getTypeUrl
         * @memberof pb.Base_Ads_AdsTasksItemInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Ads_AdsTasksItemInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Ads_AdsTasksItemInfo";
        };

        return Base_Ads_AdsTasksItemInfo;
    })();

    pb.Net_Ads_CollectAdsRewardReq = (function() {

        /**
         * Properties of a Net_Ads_CollectAdsRewardReq.
         * @memberof pb
         * @interface INet_Ads_CollectAdsRewardReq
         * @property {number|null} [TaskId] Net_Ads_CollectAdsRewardReq TaskId
         */

        /**
         * Constructs a new Net_Ads_CollectAdsRewardReq.
         * @memberof pb
         * @classdesc Represents a Net_Ads_CollectAdsRewardReq.
         * @implements INet_Ads_CollectAdsRewardReq
         * @constructor
         * @param {pb.INet_Ads_CollectAdsRewardReq=} [properties] Properties to set
         */
        function Net_Ads_CollectAdsRewardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Ads_CollectAdsRewardReq TaskId.
         * @member {number} TaskId
         * @memberof pb.Net_Ads_CollectAdsRewardReq
         * @instance
         */
        Net_Ads_CollectAdsRewardReq.prototype.TaskId = 0;

        /**
         * Creates a new Net_Ads_CollectAdsRewardReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Ads_CollectAdsRewardReq
         * @static
         * @param {pb.INet_Ads_CollectAdsRewardReq=} [properties] Properties to set
         * @returns {pb.Net_Ads_CollectAdsRewardReq} Net_Ads_CollectAdsRewardReq instance
         */
        Net_Ads_CollectAdsRewardReq.create = function create(properties) {
            return new Net_Ads_CollectAdsRewardReq(properties);
        };

        /**
         * Encodes the specified Net_Ads_CollectAdsRewardReq message. Does not implicitly {@link pb.Net_Ads_CollectAdsRewardReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Ads_CollectAdsRewardReq
         * @static
         * @param {pb.INet_Ads_CollectAdsRewardReq} message Net_Ads_CollectAdsRewardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Ads_CollectAdsRewardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TaskId != null && Object.hasOwnProperty.call(message, "TaskId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TaskId);
            return writer;
        };

        /**
         * Decodes a Net_Ads_CollectAdsRewardReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Ads_CollectAdsRewardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Ads_CollectAdsRewardReq} Net_Ads_CollectAdsRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Ads_CollectAdsRewardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Ads_CollectAdsRewardReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.TaskId = reader.int32();
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
         * Gets the default type url for Net_Ads_CollectAdsRewardReq
         * @function getTypeUrl
         * @memberof pb.Net_Ads_CollectAdsRewardReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Ads_CollectAdsRewardReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Ads_CollectAdsRewardReq";
        };

        return Net_Ads_CollectAdsRewardReq;
    })();

    pb.Net_Ads_CollectAdsRewardRet = (function() {

        /**
         * Properties of a Net_Ads_CollectAdsRewardRet.
         * @memberof pb
         * @interface INet_Ads_CollectAdsRewardRet
         * @property {number|null} [Ret] Net_Ads_CollectAdsRewardRet Ret
         */

        /**
         * Constructs a new Net_Ads_CollectAdsRewardRet.
         * @memberof pb
         * @classdesc Represents a Net_Ads_CollectAdsRewardRet.
         * @implements INet_Ads_CollectAdsRewardRet
         * @constructor
         * @param {pb.INet_Ads_CollectAdsRewardRet=} [properties] Properties to set
         */
        function Net_Ads_CollectAdsRewardRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Ads_CollectAdsRewardRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Ads_CollectAdsRewardRet
         * @instance
         */
        Net_Ads_CollectAdsRewardRet.prototype.Ret = 0;

        /**
         * Creates a new Net_Ads_CollectAdsRewardRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Ads_CollectAdsRewardRet
         * @static
         * @param {pb.INet_Ads_CollectAdsRewardRet=} [properties] Properties to set
         * @returns {pb.Net_Ads_CollectAdsRewardRet} Net_Ads_CollectAdsRewardRet instance
         */
        Net_Ads_CollectAdsRewardRet.create = function create(properties) {
            return new Net_Ads_CollectAdsRewardRet(properties);
        };

        /**
         * Encodes the specified Net_Ads_CollectAdsRewardRet message. Does not implicitly {@link pb.Net_Ads_CollectAdsRewardRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Ads_CollectAdsRewardRet
         * @static
         * @param {pb.INet_Ads_CollectAdsRewardRet} message Net_Ads_CollectAdsRewardRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Ads_CollectAdsRewardRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            return writer;
        };

        /**
         * Decodes a Net_Ads_CollectAdsRewardRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Ads_CollectAdsRewardRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Ads_CollectAdsRewardRet} Net_Ads_CollectAdsRewardRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Ads_CollectAdsRewardRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Ads_CollectAdsRewardRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
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
         * Gets the default type url for Net_Ads_CollectAdsRewardRet
         * @function getTypeUrl
         * @memberof pb.Net_Ads_CollectAdsRewardRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Ads_CollectAdsRewardRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Ads_CollectAdsRewardRet";
        };

        return Net_Ads_CollectAdsRewardRet;
    })();

    pb.Base_Auth_GameInfo = (function() {

        /**
         * Properties of a Base_Auth_GameInfo.
         * @memberof pb
         * @interface IBase_Auth_GameInfo
         * @property {string|null} [GameId] Base_Auth_GameInfo GameId
         * @property {string|null} [GameType] Base_Auth_GameInfo GameType
         * @property {string|null} [GameAddress] Base_Auth_GameInfo GameAddress
         */

        /**
         * Constructs a new Base_Auth_GameInfo.
         * @memberof pb
         * @classdesc Represents a Base_Auth_GameInfo.
         * @implements IBase_Auth_GameInfo
         * @constructor
         * @param {pb.IBase_Auth_GameInfo=} [properties] Properties to set
         */
        function Base_Auth_GameInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Auth_GameInfo GameId.
         * @member {string} GameId
         * @memberof pb.Base_Auth_GameInfo
         * @instance
         */
        Base_Auth_GameInfo.prototype.GameId = "";

        /**
         * Base_Auth_GameInfo GameType.
         * @member {string} GameType
         * @memberof pb.Base_Auth_GameInfo
         * @instance
         */
        Base_Auth_GameInfo.prototype.GameType = "";

        /**
         * Base_Auth_GameInfo GameAddress.
         * @member {string} GameAddress
         * @memberof pb.Base_Auth_GameInfo
         * @instance
         */
        Base_Auth_GameInfo.prototype.GameAddress = "";

        /**
         * Creates a new Base_Auth_GameInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Auth_GameInfo
         * @static
         * @param {pb.IBase_Auth_GameInfo=} [properties] Properties to set
         * @returns {pb.Base_Auth_GameInfo} Base_Auth_GameInfo instance
         */
        Base_Auth_GameInfo.create = function create(properties) {
            return new Base_Auth_GameInfo(properties);
        };

        /**
         * Encodes the specified Base_Auth_GameInfo message. Does not implicitly {@link pb.Base_Auth_GameInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Auth_GameInfo
         * @static
         * @param {pb.IBase_Auth_GameInfo} message Base_Auth_GameInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Auth_GameInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GameId != null && Object.hasOwnProperty.call(message, "GameId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.GameId);
            if (message.GameType != null && Object.hasOwnProperty.call(message, "GameType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.GameType);
            if (message.GameAddress != null && Object.hasOwnProperty.call(message, "GameAddress"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.GameAddress);
            return writer;
        };

        /**
         * Decodes a Base_Auth_GameInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Auth_GameInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Auth_GameInfo} Base_Auth_GameInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Auth_GameInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Auth_GameInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.GameId = reader.string();
                        break;
                    }
                case 2: {
                        message.GameType = reader.string();
                        break;
                    }
                case 3: {
                        message.GameAddress = reader.string();
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
         * Gets the default type url for Base_Auth_GameInfo
         * @function getTypeUrl
         * @memberof pb.Base_Auth_GameInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Auth_GameInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Auth_GameInfo";
        };

        return Base_Auth_GameInfo;
    })();

    pb.Net_Auth_LoginReq = (function() {

        /**
         * Properties of a Net_Auth_LoginReq.
         * @memberof pb
         * @interface INet_Auth_LoginReq
         * @property {string|null} [DeviceId] Net_Auth_LoginReq DeviceId
         * @property {string|null} [FacebookId] Net_Auth_LoginReq FacebookId
         * @property {string|null} [AppleId] Net_Auth_LoginReq AppleId
         * @property {string|null} [FacebookName] Net_Auth_LoginReq FacebookName
         */

        /**
         * Constructs a new Net_Auth_LoginReq.
         * @memberof pb
         * @classdesc Represents a Net_Auth_LoginReq.
         * @implements INet_Auth_LoginReq
         * @constructor
         * @param {pb.INet_Auth_LoginReq=} [properties] Properties to set
         */
        function Net_Auth_LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Auth_LoginReq DeviceId.
         * @member {string} DeviceId
         * @memberof pb.Net_Auth_LoginReq
         * @instance
         */
        Net_Auth_LoginReq.prototype.DeviceId = "";

        /**
         * Net_Auth_LoginReq FacebookId.
         * @member {string} FacebookId
         * @memberof pb.Net_Auth_LoginReq
         * @instance
         */
        Net_Auth_LoginReq.prototype.FacebookId = "";

        /**
         * Net_Auth_LoginReq AppleId.
         * @member {string} AppleId
         * @memberof pb.Net_Auth_LoginReq
         * @instance
         */
        Net_Auth_LoginReq.prototype.AppleId = "";

        /**
         * Net_Auth_LoginReq FacebookName.
         * @member {string} FacebookName
         * @memberof pb.Net_Auth_LoginReq
         * @instance
         */
        Net_Auth_LoginReq.prototype.FacebookName = "";

        /**
         * Creates a new Net_Auth_LoginReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Auth_LoginReq
         * @static
         * @param {pb.INet_Auth_LoginReq=} [properties] Properties to set
         * @returns {pb.Net_Auth_LoginReq} Net_Auth_LoginReq instance
         */
        Net_Auth_LoginReq.create = function create(properties) {
            return new Net_Auth_LoginReq(properties);
        };

        /**
         * Encodes the specified Net_Auth_LoginReq message. Does not implicitly {@link pb.Net_Auth_LoginReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Auth_LoginReq
         * @static
         * @param {pb.INet_Auth_LoginReq} message Net_Auth_LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Auth_LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DeviceId != null && Object.hasOwnProperty.call(message, "DeviceId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.DeviceId);
            if (message.FacebookId != null && Object.hasOwnProperty.call(message, "FacebookId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.FacebookId);
            if (message.AppleId != null && Object.hasOwnProperty.call(message, "AppleId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.AppleId);
            if (message.FacebookName != null && Object.hasOwnProperty.call(message, "FacebookName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.FacebookName);
            return writer;
        };

        /**
         * Decodes a Net_Auth_LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Auth_LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Auth_LoginReq} Net_Auth_LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Auth_LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Auth_LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.DeviceId = reader.string();
                        break;
                    }
                case 2: {
                        message.FacebookId = reader.string();
                        break;
                    }
                case 3: {
                        message.AppleId = reader.string();
                        break;
                    }
                case 5: {
                        message.FacebookName = reader.string();
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
         * Gets the default type url for Net_Auth_LoginReq
         * @function getTypeUrl
         * @memberof pb.Net_Auth_LoginReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Auth_LoginReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Auth_LoginReq";
        };

        return Net_Auth_LoginReq;
    })();

    pb.Net_Auth_LoginRet = (function() {

        /**
         * Properties of a Net_Auth_LoginRet.
         * @memberof pb
         * @interface INet_Auth_LoginRet
         * @property {number|null} [Ret] Net_Auth_LoginRet Ret
         * @property {string|null} [ErrorMessage] Net_Auth_LoginRet ErrorMessage
         * @property {string|null} [AuthToken] Net_Auth_LoginRet AuthToken
         * @property {string|null} [GameServerAddress] Net_Auth_LoginRet GameServerAddress
         */

        /**
         * Constructs a new Net_Auth_LoginRet.
         * @memberof pb
         * @classdesc Represents a Net_Auth_LoginRet.
         * @implements INet_Auth_LoginRet
         * @constructor
         * @param {pb.INet_Auth_LoginRet=} [properties] Properties to set
         */
        function Net_Auth_LoginRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Auth_LoginRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Auth_LoginRet
         * @instance
         */
        Net_Auth_LoginRet.prototype.Ret = 0;

        /**
         * Net_Auth_LoginRet ErrorMessage.
         * @member {string} ErrorMessage
         * @memberof pb.Net_Auth_LoginRet
         * @instance
         */
        Net_Auth_LoginRet.prototype.ErrorMessage = "";

        /**
         * Net_Auth_LoginRet AuthToken.
         * @member {string} AuthToken
         * @memberof pb.Net_Auth_LoginRet
         * @instance
         */
        Net_Auth_LoginRet.prototype.AuthToken = "";

        /**
         * Net_Auth_LoginRet GameServerAddress.
         * @member {string} GameServerAddress
         * @memberof pb.Net_Auth_LoginRet
         * @instance
         */
        Net_Auth_LoginRet.prototype.GameServerAddress = "";

        /**
         * Creates a new Net_Auth_LoginRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Auth_LoginRet
         * @static
         * @param {pb.INet_Auth_LoginRet=} [properties] Properties to set
         * @returns {pb.Net_Auth_LoginRet} Net_Auth_LoginRet instance
         */
        Net_Auth_LoginRet.create = function create(properties) {
            return new Net_Auth_LoginRet(properties);
        };

        /**
         * Encodes the specified Net_Auth_LoginRet message. Does not implicitly {@link pb.Net_Auth_LoginRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Auth_LoginRet
         * @static
         * @param {pb.INet_Auth_LoginRet} message Net_Auth_LoginRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Auth_LoginRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.ErrorMessage != null && Object.hasOwnProperty.call(message, "ErrorMessage"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ErrorMessage);
            if (message.AuthToken != null && Object.hasOwnProperty.call(message, "AuthToken"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.AuthToken);
            if (message.GameServerAddress != null && Object.hasOwnProperty.call(message, "GameServerAddress"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.GameServerAddress);
            return writer;
        };

        /**
         * Decodes a Net_Auth_LoginRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Auth_LoginRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Auth_LoginRet} Net_Auth_LoginRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Auth_LoginRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Auth_LoginRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.ErrorMessage = reader.string();
                        break;
                    }
                case 3: {
                        message.AuthToken = reader.string();
                        break;
                    }
                case 4: {
                        message.GameServerAddress = reader.string();
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
         * Gets the default type url for Net_Auth_LoginRet
         * @function getTypeUrl
         * @memberof pb.Net_Auth_LoginRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Auth_LoginRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Auth_LoginRet";
        };

        return Net_Auth_LoginRet;
    })();

    pb.Net_Auth_LogoutReq = (function() {

        /**
         * Properties of a Net_Auth_LogoutReq.
         * @memberof pb
         * @interface INet_Auth_LogoutReq
         * @property {string|null} [AuthToken] Net_Auth_LogoutReq AuthToken
         */

        /**
         * Constructs a new Net_Auth_LogoutReq.
         * @memberof pb
         * @classdesc Represents a Net_Auth_LogoutReq.
         * @implements INet_Auth_LogoutReq
         * @constructor
         * @param {pb.INet_Auth_LogoutReq=} [properties] Properties to set
         */
        function Net_Auth_LogoutReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Auth_LogoutReq AuthToken.
         * @member {string} AuthToken
         * @memberof pb.Net_Auth_LogoutReq
         * @instance
         */
        Net_Auth_LogoutReq.prototype.AuthToken = "";

        /**
         * Creates a new Net_Auth_LogoutReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Auth_LogoutReq
         * @static
         * @param {pb.INet_Auth_LogoutReq=} [properties] Properties to set
         * @returns {pb.Net_Auth_LogoutReq} Net_Auth_LogoutReq instance
         */
        Net_Auth_LogoutReq.create = function create(properties) {
            return new Net_Auth_LogoutReq(properties);
        };

        /**
         * Encodes the specified Net_Auth_LogoutReq message. Does not implicitly {@link pb.Net_Auth_LogoutReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Auth_LogoutReq
         * @static
         * @param {pb.INet_Auth_LogoutReq} message Net_Auth_LogoutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Auth_LogoutReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AuthToken != null && Object.hasOwnProperty.call(message, "AuthToken"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.AuthToken);
            return writer;
        };

        /**
         * Decodes a Net_Auth_LogoutReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Auth_LogoutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Auth_LogoutReq} Net_Auth_LogoutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Auth_LogoutReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Auth_LogoutReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.AuthToken = reader.string();
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
         * Gets the default type url for Net_Auth_LogoutReq
         * @function getTypeUrl
         * @memberof pb.Net_Auth_LogoutReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Auth_LogoutReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Auth_LogoutReq";
        };

        return Net_Auth_LogoutReq;
    })();

    pb.Net_Auth_LogoutRet = (function() {

        /**
         * Properties of a Net_Auth_LogoutRet.
         * @memberof pb
         * @interface INet_Auth_LogoutRet
         * @property {number|null} [Ret] Net_Auth_LogoutRet Ret
         */

        /**
         * Constructs a new Net_Auth_LogoutRet.
         * @memberof pb
         * @classdesc Represents a Net_Auth_LogoutRet.
         * @implements INet_Auth_LogoutRet
         * @constructor
         * @param {pb.INet_Auth_LogoutRet=} [properties] Properties to set
         */
        function Net_Auth_LogoutRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Auth_LogoutRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Auth_LogoutRet
         * @instance
         */
        Net_Auth_LogoutRet.prototype.Ret = 0;

        /**
         * Creates a new Net_Auth_LogoutRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Auth_LogoutRet
         * @static
         * @param {pb.INet_Auth_LogoutRet=} [properties] Properties to set
         * @returns {pb.Net_Auth_LogoutRet} Net_Auth_LogoutRet instance
         */
        Net_Auth_LogoutRet.create = function create(properties) {
            return new Net_Auth_LogoutRet(properties);
        };

        /**
         * Encodes the specified Net_Auth_LogoutRet message. Does not implicitly {@link pb.Net_Auth_LogoutRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Auth_LogoutRet
         * @static
         * @param {pb.INet_Auth_LogoutRet} message Net_Auth_LogoutRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Auth_LogoutRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            return writer;
        };

        /**
         * Decodes a Net_Auth_LogoutRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Auth_LogoutRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Auth_LogoutRet} Net_Auth_LogoutRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Auth_LogoutRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Auth_LogoutRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
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
         * Gets the default type url for Net_Auth_LogoutRet
         * @function getTypeUrl
         * @memberof pb.Net_Auth_LogoutRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Auth_LogoutRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Auth_LogoutRet";
        };

        return Net_Auth_LogoutRet;
    })();

    pb.Net_Auth_RegisterReq = (function() {

        /**
         * Properties of a Net_Auth_RegisterReq.
         * @memberof pb
         * @interface INet_Auth_RegisterReq
         */

        /**
         * Constructs a new Net_Auth_RegisterReq.
         * @memberof pb
         * @classdesc Represents a Net_Auth_RegisterReq.
         * @implements INet_Auth_RegisterReq
         * @constructor
         * @param {pb.INet_Auth_RegisterReq=} [properties] Properties to set
         */
        function Net_Auth_RegisterReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Auth_RegisterReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Auth_RegisterReq
         * @static
         * @param {pb.INet_Auth_RegisterReq=} [properties] Properties to set
         * @returns {pb.Net_Auth_RegisterReq} Net_Auth_RegisterReq instance
         */
        Net_Auth_RegisterReq.create = function create(properties) {
            return new Net_Auth_RegisterReq(properties);
        };

        /**
         * Encodes the specified Net_Auth_RegisterReq message. Does not implicitly {@link pb.Net_Auth_RegisterReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Auth_RegisterReq
         * @static
         * @param {pb.INet_Auth_RegisterReq} message Net_Auth_RegisterReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Auth_RegisterReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Auth_RegisterReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Auth_RegisterReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Auth_RegisterReq} Net_Auth_RegisterReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Auth_RegisterReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Auth_RegisterReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Auth_RegisterReq
         * @function getTypeUrl
         * @memberof pb.Net_Auth_RegisterReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Auth_RegisterReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Auth_RegisterReq";
        };

        return Net_Auth_RegisterReq;
    })();

    pb.Net_Auth_RegisterRet = (function() {

        /**
         * Properties of a Net_Auth_RegisterRet.
         * @memberof pb
         * @interface INet_Auth_RegisterRet
         */

        /**
         * Constructs a new Net_Auth_RegisterRet.
         * @memberof pb
         * @classdesc Represents a Net_Auth_RegisterRet.
         * @implements INet_Auth_RegisterRet
         * @constructor
         * @param {pb.INet_Auth_RegisterRet=} [properties] Properties to set
         */
        function Net_Auth_RegisterRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Auth_RegisterRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Auth_RegisterRet
         * @static
         * @param {pb.INet_Auth_RegisterRet=} [properties] Properties to set
         * @returns {pb.Net_Auth_RegisterRet} Net_Auth_RegisterRet instance
         */
        Net_Auth_RegisterRet.create = function create(properties) {
            return new Net_Auth_RegisterRet(properties);
        };

        /**
         * Encodes the specified Net_Auth_RegisterRet message. Does not implicitly {@link pb.Net_Auth_RegisterRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Auth_RegisterRet
         * @static
         * @param {pb.INet_Auth_RegisterRet} message Net_Auth_RegisterRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Auth_RegisterRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Auth_RegisterRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Auth_RegisterRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Auth_RegisterRet} Net_Auth_RegisterRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Auth_RegisterRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Auth_RegisterRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Auth_RegisterRet
         * @function getTypeUrl
         * @memberof pb.Net_Auth_RegisterRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Auth_RegisterRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Auth_RegisterRet";
        };

        return Net_Auth_RegisterRet;
    })();

    /**
     * EBackpack enum.
     * @name pb.EBackpack
     * @enum {number}
     * @property {number} EBackpackTypeIdle=0 EBackpackTypeIdle value
     * @property {number} EBackpackTypeItem=1 EBackpackTypeItem value
     * @property {number} EBackpackTypeDepot=2 EBackpackTypeDepot value
     * @property {number} EBackpackTypeDummy=3 EBackpackTypeDummy value
     * @property {number} EBackpackMaxGridNum=100 EBackpackMaxGridNum value
     */
    pb.EBackpack = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EBackpackTypeIdle"] = 0;
        values[valuesById[1] = "EBackpackTypeItem"] = 1;
        values[valuesById[2] = "EBackpackTypeDepot"] = 2;
        values[valuesById[3] = "EBackpackTypeDummy"] = 3;
        values[valuesById[100] = "EBackpackMaxGridNum"] = 100;
        return values;
    })();

    /**
     * EBagId enum.
     * @name pb.EBagId
     * @enum {number}
     * @property {number} EBagIdIdle=0 EBagIdIdle value
     * @property {number} EBagIdMain=101 EBagIdMain value
     * @property {number} EBagIdPet=102 EBagIdPet value
     * @property {number} EBagIdDepot=201 EBagIdDepot value
     */
    pb.EBagId = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "EBagIdIdle"] = 0;
        values[valuesById[101] = "EBagIdMain"] = 101;
        values[valuesById[102] = "EBagIdPet"] = 102;
        values[valuesById[201] = "EBagIdDepot"] = 201;
        return values;
    })();

    /**
     * EItemId enum.
     * @name pb.EItemId
     * @enum {number}
     * @property {number} BackpackItemIdle=0 BackpackItemIdle value
     * @property {number} CoinItemId=1001 CoinItemId value
     * @property {number} GoldItemId=1002 GoldItemId value
     * @property {number} HolyGrailItemId=2001 HolyGrailItemId value
     * @property {number} ItemId4002=4002 ItemId4002 value
     */
    pb.EItemId = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BackpackItemIdle"] = 0;
        values[valuesById[1001] = "CoinItemId"] = 1001;
        values[valuesById[1002] = "GoldItemId"] = 1002;
        values[valuesById[2001] = "HolyGrailItemId"] = 2001;
        values[valuesById[4002] = "ItemId4002"] = 4002;
        return values;
    })();

    /**
     * EPutReasonType enum.
     * @name pb.EPutReasonType
     * @enum {number}
     * @property {number} PutReasonInvalid=0 PutReasonInvalid value
     * @property {number} PutReasonNoNotice=1 PutReasonNoNotice value
     * @property {number} PutReasonGM=2 PutReasonGM value
     */
    pb.EPutReasonType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "PutReasonInvalid"] = 0;
        values[valuesById[1] = "PutReasonNoNotice"] = 1;
        values[valuesById[2] = "PutReasonGM"] = 2;
        return values;
    })();

    pb.Base_Backpack_BackpackInfo = (function() {

        /**
         * Properties of a Base_Backpack_BackpackInfo.
         * @memberof pb
         * @interface IBase_Backpack_BackpackInfo
         * @property {Object.<string,number>|null} [ItemInfoList] Base_Backpack_BackpackInfo ItemInfoList
         */

        /**
         * Constructs a new Base_Backpack_BackpackInfo.
         * @memberof pb
         * @classdesc Represents a Base_Backpack_BackpackInfo.
         * @implements IBase_Backpack_BackpackInfo
         * @constructor
         * @param {pb.IBase_Backpack_BackpackInfo=} [properties] Properties to set
         */
        function Base_Backpack_BackpackInfo(properties) {
            this.ItemInfoList = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Backpack_BackpackInfo ItemInfoList.
         * @member {Object.<string,number>} ItemInfoList
         * @memberof pb.Base_Backpack_BackpackInfo
         * @instance
         */
        Base_Backpack_BackpackInfo.prototype.ItemInfoList = $util.emptyObject;

        /**
         * Creates a new Base_Backpack_BackpackInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Backpack_BackpackInfo
         * @static
         * @param {pb.IBase_Backpack_BackpackInfo=} [properties] Properties to set
         * @returns {pb.Base_Backpack_BackpackInfo} Base_Backpack_BackpackInfo instance
         */
        Base_Backpack_BackpackInfo.create = function create(properties) {
            return new Base_Backpack_BackpackInfo(properties);
        };

        /**
         * Encodes the specified Base_Backpack_BackpackInfo message. Does not implicitly {@link pb.Base_Backpack_BackpackInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Backpack_BackpackInfo
         * @static
         * @param {pb.IBase_Backpack_BackpackInfo} message Base_Backpack_BackpackInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Backpack_BackpackInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ItemInfoList != null && Object.hasOwnProperty.call(message, "ItemInfoList"))
                for (var keys = Object.keys(message.ItemInfoList), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.ItemInfoList[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Decodes a Base_Backpack_BackpackInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Backpack_BackpackInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Backpack_BackpackInfo} Base_Backpack_BackpackInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Backpack_BackpackInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Backpack_BackpackInfo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.ItemInfoList === $util.emptyObject)
                            message.ItemInfoList = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.ItemInfoList[key] = value;
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
         * Gets the default type url for Base_Backpack_BackpackInfo
         * @function getTypeUrl
         * @memberof pb.Base_Backpack_BackpackInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Backpack_BackpackInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Backpack_BackpackInfo";
        };

        return Base_Backpack_BackpackInfo;
    })();

    pb.Base_Backpack_ConsumeOperationOrderInfo = (function() {

        /**
         * Properties of a Base_Backpack_ConsumeOperationOrderInfo.
         * @memberof pb
         * @interface IBase_Backpack_ConsumeOperationOrderInfo
         * @property {number|null} [OperationType] Base_Backpack_ConsumeOperationOrderInfo OperationType
         * @property {number|null} [ConsumeItemList] Base_Backpack_ConsumeOperationOrderInfo ConsumeItemList
         * @property {number|null} [AcquireItemList] Base_Backpack_ConsumeOperationOrderInfo AcquireItemList
         */

        /**
         * Constructs a new Base_Backpack_ConsumeOperationOrderInfo.
         * @memberof pb
         * @classdesc Represents a Base_Backpack_ConsumeOperationOrderInfo.
         * @implements IBase_Backpack_ConsumeOperationOrderInfo
         * @constructor
         * @param {pb.IBase_Backpack_ConsumeOperationOrderInfo=} [properties] Properties to set
         */
        function Base_Backpack_ConsumeOperationOrderInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Backpack_ConsumeOperationOrderInfo OperationType.
         * @member {number} OperationType
         * @memberof pb.Base_Backpack_ConsumeOperationOrderInfo
         * @instance
         */
        Base_Backpack_ConsumeOperationOrderInfo.prototype.OperationType = 0;

        /**
         * Base_Backpack_ConsumeOperationOrderInfo ConsumeItemList.
         * @member {number} ConsumeItemList
         * @memberof pb.Base_Backpack_ConsumeOperationOrderInfo
         * @instance
         */
        Base_Backpack_ConsumeOperationOrderInfo.prototype.ConsumeItemList = 0;

        /**
         * Base_Backpack_ConsumeOperationOrderInfo AcquireItemList.
         * @member {number} AcquireItemList
         * @memberof pb.Base_Backpack_ConsumeOperationOrderInfo
         * @instance
         */
        Base_Backpack_ConsumeOperationOrderInfo.prototype.AcquireItemList = 0;

        /**
         * Creates a new Base_Backpack_ConsumeOperationOrderInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Backpack_ConsumeOperationOrderInfo
         * @static
         * @param {pb.IBase_Backpack_ConsumeOperationOrderInfo=} [properties] Properties to set
         * @returns {pb.Base_Backpack_ConsumeOperationOrderInfo} Base_Backpack_ConsumeOperationOrderInfo instance
         */
        Base_Backpack_ConsumeOperationOrderInfo.create = function create(properties) {
            return new Base_Backpack_ConsumeOperationOrderInfo(properties);
        };

        /**
         * Encodes the specified Base_Backpack_ConsumeOperationOrderInfo message. Does not implicitly {@link pb.Base_Backpack_ConsumeOperationOrderInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Backpack_ConsumeOperationOrderInfo
         * @static
         * @param {pb.IBase_Backpack_ConsumeOperationOrderInfo} message Base_Backpack_ConsumeOperationOrderInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Backpack_ConsumeOperationOrderInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.OperationType != null && Object.hasOwnProperty.call(message, "OperationType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.OperationType);
            if (message.ConsumeItemList != null && Object.hasOwnProperty.call(message, "ConsumeItemList"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ConsumeItemList);
            if (message.AcquireItemList != null && Object.hasOwnProperty.call(message, "AcquireItemList"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.AcquireItemList);
            return writer;
        };

        /**
         * Decodes a Base_Backpack_ConsumeOperationOrderInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Backpack_ConsumeOperationOrderInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Backpack_ConsumeOperationOrderInfo} Base_Backpack_ConsumeOperationOrderInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Backpack_ConsumeOperationOrderInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Backpack_ConsumeOperationOrderInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.OperationType = reader.int32();
                        break;
                    }
                case 3: {
                        message.ConsumeItemList = reader.int32();
                        break;
                    }
                case 5: {
                        message.AcquireItemList = reader.int32();
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
         * Gets the default type url for Base_Backpack_ConsumeOperationOrderInfo
         * @function getTypeUrl
         * @memberof pb.Base_Backpack_ConsumeOperationOrderInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Backpack_ConsumeOperationOrderInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Backpack_ConsumeOperationOrderInfo";
        };

        return Base_Backpack_ConsumeOperationOrderInfo;
    })();

    pb.Base_Backpack_MoneyInfo = (function() {

        /**
         * Properties of a Base_Backpack_MoneyInfo.
         * @memberof pb
         * @interface IBase_Backpack_MoneyInfo
         * @property {number|null} [Coin] Base_Backpack_MoneyInfo Coin
         * @property {number|null} [Gold] Base_Backpack_MoneyInfo Gold
         */

        /**
         * Constructs a new Base_Backpack_MoneyInfo.
         * @memberof pb
         * @classdesc Represents a Base_Backpack_MoneyInfo.
         * @implements IBase_Backpack_MoneyInfo
         * @constructor
         * @param {pb.IBase_Backpack_MoneyInfo=} [properties] Properties to set
         */
        function Base_Backpack_MoneyInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Backpack_MoneyInfo Coin.
         * @member {number} Coin
         * @memberof pb.Base_Backpack_MoneyInfo
         * @instance
         */
        Base_Backpack_MoneyInfo.prototype.Coin = 0;

        /**
         * Base_Backpack_MoneyInfo Gold.
         * @member {number} Gold
         * @memberof pb.Base_Backpack_MoneyInfo
         * @instance
         */
        Base_Backpack_MoneyInfo.prototype.Gold = 0;

        /**
         * Creates a new Base_Backpack_MoneyInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Backpack_MoneyInfo
         * @static
         * @param {pb.IBase_Backpack_MoneyInfo=} [properties] Properties to set
         * @returns {pb.Base_Backpack_MoneyInfo} Base_Backpack_MoneyInfo instance
         */
        Base_Backpack_MoneyInfo.create = function create(properties) {
            return new Base_Backpack_MoneyInfo(properties);
        };

        /**
         * Encodes the specified Base_Backpack_MoneyInfo message. Does not implicitly {@link pb.Base_Backpack_MoneyInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Backpack_MoneyInfo
         * @static
         * @param {pb.IBase_Backpack_MoneyInfo} message Base_Backpack_MoneyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Backpack_MoneyInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Coin != null && Object.hasOwnProperty.call(message, "Coin"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Coin);
            if (message.Gold != null && Object.hasOwnProperty.call(message, "Gold"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Gold);
            return writer;
        };

        /**
         * Decodes a Base_Backpack_MoneyInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Backpack_MoneyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Backpack_MoneyInfo} Base_Backpack_MoneyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Backpack_MoneyInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Backpack_MoneyInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Coin = reader.int32();
                        break;
                    }
                case 2: {
                        message.Gold = reader.int32();
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
         * Gets the default type url for Base_Backpack_MoneyInfo
         * @function getTypeUrl
         * @memberof pb.Base_Backpack_MoneyInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Backpack_MoneyInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Backpack_MoneyInfo";
        };

        return Base_Backpack_MoneyInfo;
    })();

    pb.Base_Backpack_AnItemInfo = (function() {

        /**
         * Properties of a Base_Backpack_AnItemInfo.
         * @memberof pb
         * @interface IBase_Backpack_AnItemInfo
         * @property {number|null} [Id] Base_Backpack_AnItemInfo Id
         * @property {number|null} [Num] Base_Backpack_AnItemInfo Num
         * @property {boolean|null} [IsBind] Base_Backpack_AnItemInfo IsBind
         * @property {string|null} [HasParam] Base_Backpack_AnItemInfo HasParam
         * @property {number|Long|null} [InvalidTime] Base_Backpack_AnItemInfo InvalidTime
         * @property {number|null} [GoldPrice] Base_Backpack_AnItemInfo GoldPrice
         */

        /**
         * Constructs a new Base_Backpack_AnItemInfo.
         * @memberof pb
         * @classdesc Represents a Base_Backpack_AnItemInfo.
         * @implements IBase_Backpack_AnItemInfo
         * @constructor
         * @param {pb.IBase_Backpack_AnItemInfo=} [properties] Properties to set
         */
        function Base_Backpack_AnItemInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Backpack_AnItemInfo Id.
         * @member {number} Id
         * @memberof pb.Base_Backpack_AnItemInfo
         * @instance
         */
        Base_Backpack_AnItemInfo.prototype.Id = 0;

        /**
         * Base_Backpack_AnItemInfo Num.
         * @member {number} Num
         * @memberof pb.Base_Backpack_AnItemInfo
         * @instance
         */
        Base_Backpack_AnItemInfo.prototype.Num = 0;

        /**
         * Base_Backpack_AnItemInfo IsBind.
         * @member {boolean} IsBind
         * @memberof pb.Base_Backpack_AnItemInfo
         * @instance
         */
        Base_Backpack_AnItemInfo.prototype.IsBind = false;

        /**
         * Base_Backpack_AnItemInfo HasParam.
         * @member {string} HasParam
         * @memberof pb.Base_Backpack_AnItemInfo
         * @instance
         */
        Base_Backpack_AnItemInfo.prototype.HasParam = "";

        /**
         * Base_Backpack_AnItemInfo InvalidTime.
         * @member {number|Long} InvalidTime
         * @memberof pb.Base_Backpack_AnItemInfo
         * @instance
         */
        Base_Backpack_AnItemInfo.prototype.InvalidTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Base_Backpack_AnItemInfo GoldPrice.
         * @member {number} GoldPrice
         * @memberof pb.Base_Backpack_AnItemInfo
         * @instance
         */
        Base_Backpack_AnItemInfo.prototype.GoldPrice = 0;

        /**
         * Creates a new Base_Backpack_AnItemInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Backpack_AnItemInfo
         * @static
         * @param {pb.IBase_Backpack_AnItemInfo=} [properties] Properties to set
         * @returns {pb.Base_Backpack_AnItemInfo} Base_Backpack_AnItemInfo instance
         */
        Base_Backpack_AnItemInfo.create = function create(properties) {
            return new Base_Backpack_AnItemInfo(properties);
        };

        /**
         * Encodes the specified Base_Backpack_AnItemInfo message. Does not implicitly {@link pb.Base_Backpack_AnItemInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Backpack_AnItemInfo
         * @static
         * @param {pb.IBase_Backpack_AnItemInfo} message Base_Backpack_AnItemInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Backpack_AnItemInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            if (message.Num != null && Object.hasOwnProperty.call(message, "Num"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Num);
            if (message.IsBind != null && Object.hasOwnProperty.call(message, "IsBind"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.IsBind);
            if (message.HasParam != null && Object.hasOwnProperty.call(message, "HasParam"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.HasParam);
            if (message.InvalidTime != null && Object.hasOwnProperty.call(message, "InvalidTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.InvalidTime);
            if (message.GoldPrice != null && Object.hasOwnProperty.call(message, "GoldPrice"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.GoldPrice);
            return writer;
        };

        /**
         * Decodes a Base_Backpack_AnItemInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Backpack_AnItemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Backpack_AnItemInfo} Base_Backpack_AnItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Backpack_AnItemInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Backpack_AnItemInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Id = reader.int32();
                        break;
                    }
                case 2: {
                        message.Num = reader.int32();
                        break;
                    }
                case 3: {
                        message.IsBind = reader.bool();
                        break;
                    }
                case 4: {
                        message.HasParam = reader.string();
                        break;
                    }
                case 5: {
                        message.InvalidTime = reader.int64();
                        break;
                    }
                case 6: {
                        message.GoldPrice = reader.int32();
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
         * Gets the default type url for Base_Backpack_AnItemInfo
         * @function getTypeUrl
         * @memberof pb.Base_Backpack_AnItemInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Backpack_AnItemInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Backpack_AnItemInfo";
        };

        return Base_Backpack_AnItemInfo;
    })();

    pb.Base_Backpack_ItemConsumeInfo = (function() {

        /**
         * Properties of a Base_Backpack_ItemConsumeInfo.
         * @memberof pb
         * @interface IBase_Backpack_ItemConsumeInfo
         * @property {number|null} [ConsumeBindItemNum] Base_Backpack_ItemConsumeInfo ConsumeBindItemNum
         * @property {number|null} [ConsumeNoBindItemNum] Base_Backpack_ItemConsumeInfo ConsumeNoBindItemNum
         * @property {number|null} [ConsumeNumList] Base_Backpack_ItemConsumeInfo ConsumeNumList
         */

        /**
         * Constructs a new Base_Backpack_ItemConsumeInfo.
         * @memberof pb
         * @classdesc Represents a Base_Backpack_ItemConsumeInfo.
         * @implements IBase_Backpack_ItemConsumeInfo
         * @constructor
         * @param {pb.IBase_Backpack_ItemConsumeInfo=} [properties] Properties to set
         */
        function Base_Backpack_ItemConsumeInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Backpack_ItemConsumeInfo ConsumeBindItemNum.
         * @member {number} ConsumeBindItemNum
         * @memberof pb.Base_Backpack_ItemConsumeInfo
         * @instance
         */
        Base_Backpack_ItemConsumeInfo.prototype.ConsumeBindItemNum = 0;

        /**
         * Base_Backpack_ItemConsumeInfo ConsumeNoBindItemNum.
         * @member {number} ConsumeNoBindItemNum
         * @memberof pb.Base_Backpack_ItemConsumeInfo
         * @instance
         */
        Base_Backpack_ItemConsumeInfo.prototype.ConsumeNoBindItemNum = 0;

        /**
         * Base_Backpack_ItemConsumeInfo ConsumeNumList.
         * @member {number} ConsumeNumList
         * @memberof pb.Base_Backpack_ItemConsumeInfo
         * @instance
         */
        Base_Backpack_ItemConsumeInfo.prototype.ConsumeNumList = 0;

        /**
         * Creates a new Base_Backpack_ItemConsumeInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Backpack_ItemConsumeInfo
         * @static
         * @param {pb.IBase_Backpack_ItemConsumeInfo=} [properties] Properties to set
         * @returns {pb.Base_Backpack_ItemConsumeInfo} Base_Backpack_ItemConsumeInfo instance
         */
        Base_Backpack_ItemConsumeInfo.create = function create(properties) {
            return new Base_Backpack_ItemConsumeInfo(properties);
        };

        /**
         * Encodes the specified Base_Backpack_ItemConsumeInfo message. Does not implicitly {@link pb.Base_Backpack_ItemConsumeInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Backpack_ItemConsumeInfo
         * @static
         * @param {pb.IBase_Backpack_ItemConsumeInfo} message Base_Backpack_ItemConsumeInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Backpack_ItemConsumeInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ConsumeBindItemNum != null && Object.hasOwnProperty.call(message, "ConsumeBindItemNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ConsumeBindItemNum);
            if (message.ConsumeNoBindItemNum != null && Object.hasOwnProperty.call(message, "ConsumeNoBindItemNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ConsumeNoBindItemNum);
            if (message.ConsumeNumList != null && Object.hasOwnProperty.call(message, "ConsumeNumList"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ConsumeNumList);
            return writer;
        };

        /**
         * Decodes a Base_Backpack_ItemConsumeInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Backpack_ItemConsumeInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Backpack_ItemConsumeInfo} Base_Backpack_ItemConsumeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Backpack_ItemConsumeInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Backpack_ItemConsumeInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ConsumeBindItemNum = reader.int32();
                        break;
                    }
                case 2: {
                        message.ConsumeNoBindItemNum = reader.int32();
                        break;
                    }
                case 3: {
                        message.ConsumeNumList = reader.int32();
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
         * Gets the default type url for Base_Backpack_ItemConsumeInfo
         * @function getTypeUrl
         * @memberof pb.Base_Backpack_ItemConsumeInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Backpack_ItemConsumeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Backpack_ItemConsumeInfo";
        };

        return Base_Backpack_ItemConsumeInfo;
    })();

    pb.Base_Backpack_BuyItemInfo = (function() {

        /**
         * Properties of a Base_Backpack_BuyItemInfo.
         * @memberof pb
         * @interface IBase_Backpack_BuyItemInfo
         * @property {number|null} [ItemId] Base_Backpack_BuyItemInfo ItemId
         * @property {number|null} [ItemCount] Base_Backpack_BuyItemInfo ItemCount
         */

        /**
         * Constructs a new Base_Backpack_BuyItemInfo.
         * @memberof pb
         * @classdesc Represents a Base_Backpack_BuyItemInfo.
         * @implements IBase_Backpack_BuyItemInfo
         * @constructor
         * @param {pb.IBase_Backpack_BuyItemInfo=} [properties] Properties to set
         */
        function Base_Backpack_BuyItemInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Backpack_BuyItemInfo ItemId.
         * @member {number} ItemId
         * @memberof pb.Base_Backpack_BuyItemInfo
         * @instance
         */
        Base_Backpack_BuyItemInfo.prototype.ItemId = 0;

        /**
         * Base_Backpack_BuyItemInfo ItemCount.
         * @member {number} ItemCount
         * @memberof pb.Base_Backpack_BuyItemInfo
         * @instance
         */
        Base_Backpack_BuyItemInfo.prototype.ItemCount = 0;

        /**
         * Creates a new Base_Backpack_BuyItemInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Backpack_BuyItemInfo
         * @static
         * @param {pb.IBase_Backpack_BuyItemInfo=} [properties] Properties to set
         * @returns {pb.Base_Backpack_BuyItemInfo} Base_Backpack_BuyItemInfo instance
         */
        Base_Backpack_BuyItemInfo.create = function create(properties) {
            return new Base_Backpack_BuyItemInfo(properties);
        };

        /**
         * Encodes the specified Base_Backpack_BuyItemInfo message. Does not implicitly {@link pb.Base_Backpack_BuyItemInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Backpack_BuyItemInfo
         * @static
         * @param {pb.IBase_Backpack_BuyItemInfo} message Base_Backpack_BuyItemInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Backpack_BuyItemInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ItemId != null && Object.hasOwnProperty.call(message, "ItemId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ItemId);
            if (message.ItemCount != null && Object.hasOwnProperty.call(message, "ItemCount"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ItemCount);
            return writer;
        };

        /**
         * Decodes a Base_Backpack_BuyItemInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Backpack_BuyItemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Backpack_BuyItemInfo} Base_Backpack_BuyItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Backpack_BuyItemInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Backpack_BuyItemInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ItemId = reader.int32();
                        break;
                    }
                case 2: {
                        message.ItemCount = reader.int32();
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
         * Gets the default type url for Base_Backpack_BuyItemInfo
         * @function getTypeUrl
         * @memberof pb.Base_Backpack_BuyItemInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Backpack_BuyItemInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Backpack_BuyItemInfo";
        };

        return Base_Backpack_BuyItemInfo;
    })();

    pb.Base_Backpack_ItemConsumeList = (function() {

        /**
         * Properties of a Base_Backpack_ItemConsumeList.
         * @memberof pb
         * @interface IBase_Backpack_ItemConsumeList
         * @property {number|null} [BindItemNum] Base_Backpack_ItemConsumeList BindItemNum
         * @property {number|null} [NoBindItemNum] Base_Backpack_ItemConsumeList NoBindItemNum
         * @property {number|null} [NeedGoldNum] Base_Backpack_ItemConsumeList NeedGoldNum
         * @property {number|null} [CostBindCoinFirst] Base_Backpack_ItemConsumeList CostBindCoinFirst
         * @property {number|null} [Count] Base_Backpack_ItemConsumeList Count
         * @property {Array.<number>|null} [IndexList] Base_Backpack_ItemConsumeList IndexList
         * @property {Array.<number>|null} [NumList] Base_Backpack_ItemConsumeList NumList
         * @property {number|null} [BuyCount] Base_Backpack_ItemConsumeList BuyCount
         * @property {Array.<pb.IBase_Backpack_BuyItemInfo>|null} [BuyItemInfo] Base_Backpack_ItemConsumeList BuyItemInfo
         */

        /**
         * Constructs a new Base_Backpack_ItemConsumeList.
         * @memberof pb
         * @classdesc Represents a Base_Backpack_ItemConsumeList.
         * @implements IBase_Backpack_ItemConsumeList
         * @constructor
         * @param {pb.IBase_Backpack_ItemConsumeList=} [properties] Properties to set
         */
        function Base_Backpack_ItemConsumeList(properties) {
            this.IndexList = [];
            this.NumList = [];
            this.BuyItemInfo = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Backpack_ItemConsumeList BindItemNum.
         * @member {number} BindItemNum
         * @memberof pb.Base_Backpack_ItemConsumeList
         * @instance
         */
        Base_Backpack_ItemConsumeList.prototype.BindItemNum = 0;

        /**
         * Base_Backpack_ItemConsumeList NoBindItemNum.
         * @member {number} NoBindItemNum
         * @memberof pb.Base_Backpack_ItemConsumeList
         * @instance
         */
        Base_Backpack_ItemConsumeList.prototype.NoBindItemNum = 0;

        /**
         * Base_Backpack_ItemConsumeList NeedGoldNum.
         * @member {number} NeedGoldNum
         * @memberof pb.Base_Backpack_ItemConsumeList
         * @instance
         */
        Base_Backpack_ItemConsumeList.prototype.NeedGoldNum = 0;

        /**
         * Base_Backpack_ItemConsumeList CostBindCoinFirst.
         * @member {number} CostBindCoinFirst
         * @memberof pb.Base_Backpack_ItemConsumeList
         * @instance
         */
        Base_Backpack_ItemConsumeList.prototype.CostBindCoinFirst = 0;

        /**
         * Base_Backpack_ItemConsumeList Count.
         * @member {number} Count
         * @memberof pb.Base_Backpack_ItemConsumeList
         * @instance
         */
        Base_Backpack_ItemConsumeList.prototype.Count = 0;

        /**
         * Base_Backpack_ItemConsumeList IndexList.
         * @member {Array.<number>} IndexList
         * @memberof pb.Base_Backpack_ItemConsumeList
         * @instance
         */
        Base_Backpack_ItemConsumeList.prototype.IndexList = $util.emptyArray;

        /**
         * Base_Backpack_ItemConsumeList NumList.
         * @member {Array.<number>} NumList
         * @memberof pb.Base_Backpack_ItemConsumeList
         * @instance
         */
        Base_Backpack_ItemConsumeList.prototype.NumList = $util.emptyArray;

        /**
         * Base_Backpack_ItemConsumeList BuyCount.
         * @member {number} BuyCount
         * @memberof pb.Base_Backpack_ItemConsumeList
         * @instance
         */
        Base_Backpack_ItemConsumeList.prototype.BuyCount = 0;

        /**
         * Base_Backpack_ItemConsumeList BuyItemInfo.
         * @member {Array.<pb.IBase_Backpack_BuyItemInfo>} BuyItemInfo
         * @memberof pb.Base_Backpack_ItemConsumeList
         * @instance
         */
        Base_Backpack_ItemConsumeList.prototype.BuyItemInfo = $util.emptyArray;

        /**
         * Creates a new Base_Backpack_ItemConsumeList instance using the specified properties.
         * @function create
         * @memberof pb.Base_Backpack_ItemConsumeList
         * @static
         * @param {pb.IBase_Backpack_ItemConsumeList=} [properties] Properties to set
         * @returns {pb.Base_Backpack_ItemConsumeList} Base_Backpack_ItemConsumeList instance
         */
        Base_Backpack_ItemConsumeList.create = function create(properties) {
            return new Base_Backpack_ItemConsumeList(properties);
        };

        /**
         * Encodes the specified Base_Backpack_ItemConsumeList message. Does not implicitly {@link pb.Base_Backpack_ItemConsumeList.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Backpack_ItemConsumeList
         * @static
         * @param {pb.IBase_Backpack_ItemConsumeList} message Base_Backpack_ItemConsumeList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Backpack_ItemConsumeList.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BindItemNum != null && Object.hasOwnProperty.call(message, "BindItemNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BindItemNum);
            if (message.NoBindItemNum != null && Object.hasOwnProperty.call(message, "NoBindItemNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.NoBindItemNum);
            if (message.NeedGoldNum != null && Object.hasOwnProperty.call(message, "NeedGoldNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.NeedGoldNum);
            if (message.CostBindCoinFirst != null && Object.hasOwnProperty.call(message, "CostBindCoinFirst"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.CostBindCoinFirst);
            if (message.Count != null && Object.hasOwnProperty.call(message, "Count"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Count);
            if (message.IndexList != null && message.IndexList.length) {
                writer.uint32(/* id 6, wireType 2 =*/50).fork();
                for (var i = 0; i < message.IndexList.length; ++i)
                    writer.int32(message.IndexList[i]);
                writer.ldelim();
            }
            if (message.NumList != null && message.NumList.length) {
                writer.uint32(/* id 7, wireType 2 =*/58).fork();
                for (var i = 0; i < message.NumList.length; ++i)
                    writer.int32(message.NumList[i]);
                writer.ldelim();
            }
            if (message.BuyCount != null && Object.hasOwnProperty.call(message, "BuyCount"))
                writer.uint32(/* id 8, wireType 0 =*/64).int32(message.BuyCount);
            if (message.BuyItemInfo != null && message.BuyItemInfo.length)
                for (var i = 0; i < message.BuyItemInfo.length; ++i)
                    $root.pb.Base_Backpack_BuyItemInfo.encode(message.BuyItemInfo[i], writer.uint32(/* id 9, wireType 2 =*/74).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Base_Backpack_ItemConsumeList message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Backpack_ItemConsumeList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Backpack_ItemConsumeList} Base_Backpack_ItemConsumeList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Backpack_ItemConsumeList.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Backpack_ItemConsumeList();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.BindItemNum = reader.int32();
                        break;
                    }
                case 2: {
                        message.NoBindItemNum = reader.int32();
                        break;
                    }
                case 3: {
                        message.NeedGoldNum = reader.int32();
                        break;
                    }
                case 4: {
                        message.CostBindCoinFirst = reader.int32();
                        break;
                    }
                case 5: {
                        message.Count = reader.int32();
                        break;
                    }
                case 6: {
                        if (!(message.IndexList && message.IndexList.length))
                            message.IndexList = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.IndexList.push(reader.int32());
                        } else
                            message.IndexList.push(reader.int32());
                        break;
                    }
                case 7: {
                        if (!(message.NumList && message.NumList.length))
                            message.NumList = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.NumList.push(reader.int32());
                        } else
                            message.NumList.push(reader.int32());
                        break;
                    }
                case 8: {
                        message.BuyCount = reader.int32();
                        break;
                    }
                case 9: {
                        if (!(message.BuyItemInfo && message.BuyItemInfo.length))
                            message.BuyItemInfo = [];
                        message.BuyItemInfo.push($root.pb.Base_Backpack_BuyItemInfo.decode(reader, reader.uint32()));
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
         * Gets the default type url for Base_Backpack_ItemConsumeList
         * @function getTypeUrl
         * @memberof pb.Base_Backpack_ItemConsumeList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Backpack_ItemConsumeList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Backpack_ItemConsumeList";
        };

        return Base_Backpack_ItemConsumeList;
    })();

    pb.Net_Backpack_GetBackpackInfoReq = (function() {

        /**
         * Properties of a Net_Backpack_GetBackpackInfoReq.
         * @memberof pb
         * @interface INet_Backpack_GetBackpackInfoReq
         */

        /**
         * Constructs a new Net_Backpack_GetBackpackInfoReq.
         * @memberof pb
         * @classdesc Represents a Net_Backpack_GetBackpackInfoReq.
         * @implements INet_Backpack_GetBackpackInfoReq
         * @constructor
         * @param {pb.INet_Backpack_GetBackpackInfoReq=} [properties] Properties to set
         */
        function Net_Backpack_GetBackpackInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Backpack_GetBackpackInfoReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Backpack_GetBackpackInfoReq
         * @static
         * @param {pb.INet_Backpack_GetBackpackInfoReq=} [properties] Properties to set
         * @returns {pb.Net_Backpack_GetBackpackInfoReq} Net_Backpack_GetBackpackInfoReq instance
         */
        Net_Backpack_GetBackpackInfoReq.create = function create(properties) {
            return new Net_Backpack_GetBackpackInfoReq(properties);
        };

        /**
         * Encodes the specified Net_Backpack_GetBackpackInfoReq message. Does not implicitly {@link pb.Net_Backpack_GetBackpackInfoReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Backpack_GetBackpackInfoReq
         * @static
         * @param {pb.INet_Backpack_GetBackpackInfoReq} message Net_Backpack_GetBackpackInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Backpack_GetBackpackInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Backpack_GetBackpackInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Backpack_GetBackpackInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Backpack_GetBackpackInfoReq} Net_Backpack_GetBackpackInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Backpack_GetBackpackInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Backpack_GetBackpackInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Backpack_GetBackpackInfoReq
         * @function getTypeUrl
         * @memberof pb.Net_Backpack_GetBackpackInfoReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Backpack_GetBackpackInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Backpack_GetBackpackInfoReq";
        };

        return Net_Backpack_GetBackpackInfoReq;
    })();

    pb.Net_Backpack_GetBackpackInfoRet = (function() {

        /**
         * Properties of a Net_Backpack_GetBackpackInfoRet.
         * @memberof pb
         * @interface INet_Backpack_GetBackpackInfoRet
         * @property {pb.IBase_Backpack_BackpackInfo|null} [BackpackInfo] Net_Backpack_GetBackpackInfoRet BackpackInfo
         */

        /**
         * Constructs a new Net_Backpack_GetBackpackInfoRet.
         * @memberof pb
         * @classdesc Represents a Net_Backpack_GetBackpackInfoRet.
         * @implements INet_Backpack_GetBackpackInfoRet
         * @constructor
         * @param {pb.INet_Backpack_GetBackpackInfoRet=} [properties] Properties to set
         */
        function Net_Backpack_GetBackpackInfoRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Backpack_GetBackpackInfoRet BackpackInfo.
         * @member {pb.IBase_Backpack_BackpackInfo|null|undefined} BackpackInfo
         * @memberof pb.Net_Backpack_GetBackpackInfoRet
         * @instance
         */
        Net_Backpack_GetBackpackInfoRet.prototype.BackpackInfo = null;

        /**
         * Creates a new Net_Backpack_GetBackpackInfoRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Backpack_GetBackpackInfoRet
         * @static
         * @param {pb.INet_Backpack_GetBackpackInfoRet=} [properties] Properties to set
         * @returns {pb.Net_Backpack_GetBackpackInfoRet} Net_Backpack_GetBackpackInfoRet instance
         */
        Net_Backpack_GetBackpackInfoRet.create = function create(properties) {
            return new Net_Backpack_GetBackpackInfoRet(properties);
        };

        /**
         * Encodes the specified Net_Backpack_GetBackpackInfoRet message. Does not implicitly {@link pb.Net_Backpack_GetBackpackInfoRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Backpack_GetBackpackInfoRet
         * @static
         * @param {pb.INet_Backpack_GetBackpackInfoRet} message Net_Backpack_GetBackpackInfoRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Backpack_GetBackpackInfoRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BackpackInfo != null && Object.hasOwnProperty.call(message, "BackpackInfo"))
                $root.pb.Base_Backpack_BackpackInfo.encode(message.BackpackInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Net_Backpack_GetBackpackInfoRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Backpack_GetBackpackInfoRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Backpack_GetBackpackInfoRet} Net_Backpack_GetBackpackInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Backpack_GetBackpackInfoRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Backpack_GetBackpackInfoRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.BackpackInfo = $root.pb.Base_Backpack_BackpackInfo.decode(reader, reader.uint32());
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
         * Gets the default type url for Net_Backpack_GetBackpackInfoRet
         * @function getTypeUrl
         * @memberof pb.Net_Backpack_GetBackpackInfoRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Backpack_GetBackpackInfoRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Backpack_GetBackpackInfoRet";
        };

        return Net_Backpack_GetBackpackInfoRet;
    })();

    pb.Net_Backpack_BackpackUpdateRet = (function() {

        /**
         * Properties of a Net_Backpack_BackpackUpdateRet.
         * @memberof pb
         * @interface INet_Backpack_BackpackUpdateRet
         * @property {number|null} [DelItems] Net_Backpack_BackpackUpdateRet DelItems
         * @property {number|null} [AddItems] Net_Backpack_BackpackUpdateRet AddItems
         * @property {number|null} [UpdateItems] Net_Backpack_BackpackUpdateRet UpdateItems
         * @property {Object.<string,number>|null} [UpdateItemList] Net_Backpack_BackpackUpdateRet UpdateItemList
         */

        /**
         * Constructs a new Net_Backpack_BackpackUpdateRet.
         * @memberof pb
         * @classdesc Represents a Net_Backpack_BackpackUpdateRet.
         * @implements INet_Backpack_BackpackUpdateRet
         * @constructor
         * @param {pb.INet_Backpack_BackpackUpdateRet=} [properties] Properties to set
         */
        function Net_Backpack_BackpackUpdateRet(properties) {
            this.UpdateItemList = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Backpack_BackpackUpdateRet DelItems.
         * @member {number} DelItems
         * @memberof pb.Net_Backpack_BackpackUpdateRet
         * @instance
         */
        Net_Backpack_BackpackUpdateRet.prototype.DelItems = 0;

        /**
         * Net_Backpack_BackpackUpdateRet AddItems.
         * @member {number} AddItems
         * @memberof pb.Net_Backpack_BackpackUpdateRet
         * @instance
         */
        Net_Backpack_BackpackUpdateRet.prototype.AddItems = 0;

        /**
         * Net_Backpack_BackpackUpdateRet UpdateItems.
         * @member {number} UpdateItems
         * @memberof pb.Net_Backpack_BackpackUpdateRet
         * @instance
         */
        Net_Backpack_BackpackUpdateRet.prototype.UpdateItems = 0;

        /**
         * Net_Backpack_BackpackUpdateRet UpdateItemList.
         * @member {Object.<string,number>} UpdateItemList
         * @memberof pb.Net_Backpack_BackpackUpdateRet
         * @instance
         */
        Net_Backpack_BackpackUpdateRet.prototype.UpdateItemList = $util.emptyObject;

        /**
         * Creates a new Net_Backpack_BackpackUpdateRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Backpack_BackpackUpdateRet
         * @static
         * @param {pb.INet_Backpack_BackpackUpdateRet=} [properties] Properties to set
         * @returns {pb.Net_Backpack_BackpackUpdateRet} Net_Backpack_BackpackUpdateRet instance
         */
        Net_Backpack_BackpackUpdateRet.create = function create(properties) {
            return new Net_Backpack_BackpackUpdateRet(properties);
        };

        /**
         * Encodes the specified Net_Backpack_BackpackUpdateRet message. Does not implicitly {@link pb.Net_Backpack_BackpackUpdateRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Backpack_BackpackUpdateRet
         * @static
         * @param {pb.INet_Backpack_BackpackUpdateRet} message Net_Backpack_BackpackUpdateRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Backpack_BackpackUpdateRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DelItems != null && Object.hasOwnProperty.call(message, "DelItems"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.DelItems);
            if (message.AddItems != null && Object.hasOwnProperty.call(message, "AddItems"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.AddItems);
            if (message.UpdateItems != null && Object.hasOwnProperty.call(message, "UpdateItems"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.UpdateItems);
            if (message.UpdateItemList != null && Object.hasOwnProperty.call(message, "UpdateItemList"))
                for (var keys = Object.keys(message.UpdateItemList), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 4, wireType 2 =*/34).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.UpdateItemList[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Decodes a Net_Backpack_BackpackUpdateRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Backpack_BackpackUpdateRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Backpack_BackpackUpdateRet} Net_Backpack_BackpackUpdateRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Backpack_BackpackUpdateRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Backpack_BackpackUpdateRet(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.DelItems = reader.int32();
                        break;
                    }
                case 2: {
                        message.AddItems = reader.int32();
                        break;
                    }
                case 3: {
                        message.UpdateItems = reader.int32();
                        break;
                    }
                case 4: {
                        if (message.UpdateItemList === $util.emptyObject)
                            message.UpdateItemList = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.UpdateItemList[key] = value;
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
         * Gets the default type url for Net_Backpack_BackpackUpdateRet
         * @function getTypeUrl
         * @memberof pb.Net_Backpack_BackpackUpdateRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Backpack_BackpackUpdateRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Backpack_BackpackUpdateRet";
        };

        return Net_Backpack_BackpackUpdateRet;
    })();

    pb.Net_Backpack_UseItemsReq = (function() {

        /**
         * Properties of a Net_Backpack_UseItemsReq.
         * @memberof pb
         * @interface INet_Backpack_UseItemsReq
         * @property {number|null} [itemId] Net_Backpack_UseItemsReq itemId
         */

        /**
         * Constructs a new Net_Backpack_UseItemsReq.
         * @memberof pb
         * @classdesc Represents a Net_Backpack_UseItemsReq.
         * @implements INet_Backpack_UseItemsReq
         * @constructor
         * @param {pb.INet_Backpack_UseItemsReq=} [properties] Properties to set
         */
        function Net_Backpack_UseItemsReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Backpack_UseItemsReq itemId.
         * @member {number} itemId
         * @memberof pb.Net_Backpack_UseItemsReq
         * @instance
         */
        Net_Backpack_UseItemsReq.prototype.itemId = 0;

        /**
         * Creates a new Net_Backpack_UseItemsReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Backpack_UseItemsReq
         * @static
         * @param {pb.INet_Backpack_UseItemsReq=} [properties] Properties to set
         * @returns {pb.Net_Backpack_UseItemsReq} Net_Backpack_UseItemsReq instance
         */
        Net_Backpack_UseItemsReq.create = function create(properties) {
            return new Net_Backpack_UseItemsReq(properties);
        };

        /**
         * Encodes the specified Net_Backpack_UseItemsReq message. Does not implicitly {@link pb.Net_Backpack_UseItemsReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Backpack_UseItemsReq
         * @static
         * @param {pb.INet_Backpack_UseItemsReq} message Net_Backpack_UseItemsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Backpack_UseItemsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.itemId != null && Object.hasOwnProperty.call(message, "itemId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.itemId);
            return writer;
        };

        /**
         * Decodes a Net_Backpack_UseItemsReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Backpack_UseItemsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Backpack_UseItemsReq} Net_Backpack_UseItemsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Backpack_UseItemsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Backpack_UseItemsReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.itemId = reader.int32();
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
         * Gets the default type url for Net_Backpack_UseItemsReq
         * @function getTypeUrl
         * @memberof pb.Net_Backpack_UseItemsReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Backpack_UseItemsReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Backpack_UseItemsReq";
        };

        return Net_Backpack_UseItemsReq;
    })();

    pb.Net_Backpack_UseItemsRet = (function() {

        /**
         * Properties of a Net_Backpack_UseItemsRet.
         * @memberof pb
         * @interface INet_Backpack_UseItemsRet
         * @property {number|null} [Ret] Net_Backpack_UseItemsRet Ret
         */

        /**
         * Constructs a new Net_Backpack_UseItemsRet.
         * @memberof pb
         * @classdesc Represents a Net_Backpack_UseItemsRet.
         * @implements INet_Backpack_UseItemsRet
         * @constructor
         * @param {pb.INet_Backpack_UseItemsRet=} [properties] Properties to set
         */
        function Net_Backpack_UseItemsRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Backpack_UseItemsRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Backpack_UseItemsRet
         * @instance
         */
        Net_Backpack_UseItemsRet.prototype.Ret = 0;

        /**
         * Creates a new Net_Backpack_UseItemsRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Backpack_UseItemsRet
         * @static
         * @param {pb.INet_Backpack_UseItemsRet=} [properties] Properties to set
         * @returns {pb.Net_Backpack_UseItemsRet} Net_Backpack_UseItemsRet instance
         */
        Net_Backpack_UseItemsRet.create = function create(properties) {
            return new Net_Backpack_UseItemsRet(properties);
        };

        /**
         * Encodes the specified Net_Backpack_UseItemsRet message. Does not implicitly {@link pb.Net_Backpack_UseItemsRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Backpack_UseItemsRet
         * @static
         * @param {pb.INet_Backpack_UseItemsRet} message Net_Backpack_UseItemsRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Backpack_UseItemsRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            return writer;
        };

        /**
         * Decodes a Net_Backpack_UseItemsRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Backpack_UseItemsRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Backpack_UseItemsRet} Net_Backpack_UseItemsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Backpack_UseItemsRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Backpack_UseItemsRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
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
         * Gets the default type url for Net_Backpack_UseItemsRet
         * @function getTypeUrl
         * @memberof pb.Net_Backpack_UseItemsRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Backpack_UseItemsRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Backpack_UseItemsRet";
        };

        return Net_Backpack_UseItemsRet;
    })();

    pb.Base_Backpack_CellInfo = (function() {

        /**
         * Properties of a Base_Backpack_CellInfo.
         * @memberof pb
         * @interface IBase_Backpack_CellInfo
         * @property {number|null} [Opened] Base_Backpack_CellInfo Opened
         * @property {number|null} [Used] Base_Backpack_CellInfo Used
         * @property {number|null} [Unused] Base_Backpack_CellInfo Unused
         */

        /**
         * Constructs a new Base_Backpack_CellInfo.
         * @memberof pb
         * @classdesc Represents a Base_Backpack_CellInfo.
         * @implements IBase_Backpack_CellInfo
         * @constructor
         * @param {pb.IBase_Backpack_CellInfo=} [properties] Properties to set
         */
        function Base_Backpack_CellInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Backpack_CellInfo Opened.
         * @member {number} Opened
         * @memberof pb.Base_Backpack_CellInfo
         * @instance
         */
        Base_Backpack_CellInfo.prototype.Opened = 0;

        /**
         * Base_Backpack_CellInfo Used.
         * @member {number} Used
         * @memberof pb.Base_Backpack_CellInfo
         * @instance
         */
        Base_Backpack_CellInfo.prototype.Used = 0;

        /**
         * Base_Backpack_CellInfo Unused.
         * @member {number} Unused
         * @memberof pb.Base_Backpack_CellInfo
         * @instance
         */
        Base_Backpack_CellInfo.prototype.Unused = 0;

        /**
         * Creates a new Base_Backpack_CellInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Backpack_CellInfo
         * @static
         * @param {pb.IBase_Backpack_CellInfo=} [properties] Properties to set
         * @returns {pb.Base_Backpack_CellInfo} Base_Backpack_CellInfo instance
         */
        Base_Backpack_CellInfo.create = function create(properties) {
            return new Base_Backpack_CellInfo(properties);
        };

        /**
         * Encodes the specified Base_Backpack_CellInfo message. Does not implicitly {@link pb.Base_Backpack_CellInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Backpack_CellInfo
         * @static
         * @param {pb.IBase_Backpack_CellInfo} message Base_Backpack_CellInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Backpack_CellInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Opened != null && Object.hasOwnProperty.call(message, "Opened"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Opened);
            if (message.Used != null && Object.hasOwnProperty.call(message, "Used"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Used);
            if (message.Unused != null && Object.hasOwnProperty.call(message, "Unused"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Unused);
            return writer;
        };

        /**
         * Decodes a Base_Backpack_CellInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Backpack_CellInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Backpack_CellInfo} Base_Backpack_CellInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Backpack_CellInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Backpack_CellInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Opened = reader.int32();
                        break;
                    }
                case 2: {
                        message.Used = reader.int32();
                        break;
                    }
                case 3: {
                        message.Unused = reader.int32();
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
         * Gets the default type url for Base_Backpack_CellInfo
         * @function getTypeUrl
         * @memberof pb.Base_Backpack_CellInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Backpack_CellInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Backpack_CellInfo";
        };

        return Base_Backpack_CellInfo;
    })();

    pb.Net_Backpack_OpenCellReq = (function() {

        /**
         * Properties of a Net_Backpack_OpenCellReq.
         * @memberof pb
         * @interface INet_Backpack_OpenCellReq
         */

        /**
         * Constructs a new Net_Backpack_OpenCellReq.
         * @memberof pb
         * @classdesc Represents a Net_Backpack_OpenCellReq.
         * @implements INet_Backpack_OpenCellReq
         * @constructor
         * @param {pb.INet_Backpack_OpenCellReq=} [properties] Properties to set
         */
        function Net_Backpack_OpenCellReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Backpack_OpenCellReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Backpack_OpenCellReq
         * @static
         * @param {pb.INet_Backpack_OpenCellReq=} [properties] Properties to set
         * @returns {pb.Net_Backpack_OpenCellReq} Net_Backpack_OpenCellReq instance
         */
        Net_Backpack_OpenCellReq.create = function create(properties) {
            return new Net_Backpack_OpenCellReq(properties);
        };

        /**
         * Encodes the specified Net_Backpack_OpenCellReq message. Does not implicitly {@link pb.Net_Backpack_OpenCellReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Backpack_OpenCellReq
         * @static
         * @param {pb.INet_Backpack_OpenCellReq} message Net_Backpack_OpenCellReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Backpack_OpenCellReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Backpack_OpenCellReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Backpack_OpenCellReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Backpack_OpenCellReq} Net_Backpack_OpenCellReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Backpack_OpenCellReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Backpack_OpenCellReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Backpack_OpenCellReq
         * @function getTypeUrl
         * @memberof pb.Net_Backpack_OpenCellReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Backpack_OpenCellReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Backpack_OpenCellReq";
        };

        return Net_Backpack_OpenCellReq;
    })();

    pb.Net_Backpack_OpenCellRet = (function() {

        /**
         * Properties of a Net_Backpack_OpenCellRet.
         * @memberof pb
         * @interface INet_Backpack_OpenCellRet
         */

        /**
         * Constructs a new Net_Backpack_OpenCellRet.
         * @memberof pb
         * @classdesc Represents a Net_Backpack_OpenCellRet.
         * @implements INet_Backpack_OpenCellRet
         * @constructor
         * @param {pb.INet_Backpack_OpenCellRet=} [properties] Properties to set
         */
        function Net_Backpack_OpenCellRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Backpack_OpenCellRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Backpack_OpenCellRet
         * @static
         * @param {pb.INet_Backpack_OpenCellRet=} [properties] Properties to set
         * @returns {pb.Net_Backpack_OpenCellRet} Net_Backpack_OpenCellRet instance
         */
        Net_Backpack_OpenCellRet.create = function create(properties) {
            return new Net_Backpack_OpenCellRet(properties);
        };

        /**
         * Encodes the specified Net_Backpack_OpenCellRet message. Does not implicitly {@link pb.Net_Backpack_OpenCellRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Backpack_OpenCellRet
         * @static
         * @param {pb.INet_Backpack_OpenCellRet} message Net_Backpack_OpenCellRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Backpack_OpenCellRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Backpack_OpenCellRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Backpack_OpenCellRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Backpack_OpenCellRet} Net_Backpack_OpenCellRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Backpack_OpenCellRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Backpack_OpenCellRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Backpack_OpenCellRet
         * @function getTypeUrl
         * @memberof pb.Net_Backpack_OpenCellRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Backpack_OpenCellRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Backpack_OpenCellRet";
        };

        return Net_Backpack_OpenCellRet;
    })();

    /**
     * EErrorNum enum.
     * @name pb.EErrorNum
     * @enum {number}
     * @property {number} ErrorNumIde=0 ErrorNumIde value
     * @property {number} EN_KNAPSACK_USE_NOT_DIRECT=1 EN_KNAPSACK_USE_NOT_DIRECT value
     */
    pb.EErrorNum = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ErrorNumIde"] = 0;
        values[valuesById[1] = "EN_KNAPSACK_USE_NOT_DIRECT"] = 1;
        return values;
    })();

    pb.Net_Error_ErrorRet = (function() {

        /**
         * Properties of a Net_Error_ErrorRet.
         * @memberof pb
         * @interface INet_Error_ErrorRet
         * @property {number|null} [Code] Net_Error_ErrorRet Code
         * @property {string|null} [Msg] Net_Error_ErrorRet Msg
         */

        /**
         * Constructs a new Net_Error_ErrorRet.
         * @memberof pb
         * @classdesc Represents a Net_Error_ErrorRet.
         * @implements INet_Error_ErrorRet
         * @constructor
         * @param {pb.INet_Error_ErrorRet=} [properties] Properties to set
         */
        function Net_Error_ErrorRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Error_ErrorRet Code.
         * @member {number} Code
         * @memberof pb.Net_Error_ErrorRet
         * @instance
         */
        Net_Error_ErrorRet.prototype.Code = 0;

        /**
         * Net_Error_ErrorRet Msg.
         * @member {string} Msg
         * @memberof pb.Net_Error_ErrorRet
         * @instance
         */
        Net_Error_ErrorRet.prototype.Msg = "";

        /**
         * Creates a new Net_Error_ErrorRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Error_ErrorRet
         * @static
         * @param {pb.INet_Error_ErrorRet=} [properties] Properties to set
         * @returns {pb.Net_Error_ErrorRet} Net_Error_ErrorRet instance
         */
        Net_Error_ErrorRet.create = function create(properties) {
            return new Net_Error_ErrorRet(properties);
        };

        /**
         * Encodes the specified Net_Error_ErrorRet message. Does not implicitly {@link pb.Net_Error_ErrorRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Error_ErrorRet
         * @static
         * @param {pb.INet_Error_ErrorRet} message Net_Error_ErrorRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Error_ErrorRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Code != null && Object.hasOwnProperty.call(message, "Code"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Code);
            if (message.Msg != null && Object.hasOwnProperty.call(message, "Msg"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Msg);
            return writer;
        };

        /**
         * Decodes a Net_Error_ErrorRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Error_ErrorRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Error_ErrorRet} Net_Error_ErrorRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Error_ErrorRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Error_ErrorRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Code = reader.int32();
                        break;
                    }
                case 2: {
                        message.Msg = reader.string();
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
         * Gets the default type url for Net_Error_ErrorRet
         * @function getTypeUrl
         * @memberof pb.Net_Error_ErrorRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Error_ErrorRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Error_ErrorRet";
        };

        return Net_Error_ErrorRet;
    })();

    pb.Base_Guide_GuideInfo = (function() {

        /**
         * Properties of a Base_Guide_GuideInfo.
         * @memberof pb
         * @interface IBase_Guide_GuideInfo
         * @property {Object.<string,number>|null} [CompletedGuide] Base_Guide_GuideInfo CompletedGuide
         */

        /**
         * Constructs a new Base_Guide_GuideInfo.
         * @memberof pb
         * @classdesc Represents a Base_Guide_GuideInfo.
         * @implements IBase_Guide_GuideInfo
         * @constructor
         * @param {pb.IBase_Guide_GuideInfo=} [properties] Properties to set
         */
        function Base_Guide_GuideInfo(properties) {
            this.CompletedGuide = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Guide_GuideInfo CompletedGuide.
         * @member {Object.<string,number>} CompletedGuide
         * @memberof pb.Base_Guide_GuideInfo
         * @instance
         */
        Base_Guide_GuideInfo.prototype.CompletedGuide = $util.emptyObject;

        /**
         * Creates a new Base_Guide_GuideInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Guide_GuideInfo
         * @static
         * @param {pb.IBase_Guide_GuideInfo=} [properties] Properties to set
         * @returns {pb.Base_Guide_GuideInfo} Base_Guide_GuideInfo instance
         */
        Base_Guide_GuideInfo.create = function create(properties) {
            return new Base_Guide_GuideInfo(properties);
        };

        /**
         * Encodes the specified Base_Guide_GuideInfo message. Does not implicitly {@link pb.Base_Guide_GuideInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Guide_GuideInfo
         * @static
         * @param {pb.IBase_Guide_GuideInfo} message Base_Guide_GuideInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Guide_GuideInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CompletedGuide != null && Object.hasOwnProperty.call(message, "CompletedGuide"))
                for (var keys = Object.keys(message.CompletedGuide), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.CompletedGuide[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Decodes a Base_Guide_GuideInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Guide_GuideInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Guide_GuideInfo} Base_Guide_GuideInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Guide_GuideInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Guide_GuideInfo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.CompletedGuide === $util.emptyObject)
                            message.CompletedGuide = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.CompletedGuide[key] = value;
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
         * Gets the default type url for Base_Guide_GuideInfo
         * @function getTypeUrl
         * @memberof pb.Base_Guide_GuideInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Guide_GuideInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Guide_GuideInfo";
        };

        return Base_Guide_GuideInfo;
    })();

    pb.Net_Guide_MarkCompleteReq = (function() {

        /**
         * Properties of a Net_Guide_MarkCompleteReq.
         * @memberof pb
         * @interface INet_Guide_MarkCompleteReq
         * @property {number|null} [GuideId] Net_Guide_MarkCompleteReq GuideId
         */

        /**
         * Constructs a new Net_Guide_MarkCompleteReq.
         * @memberof pb
         * @classdesc Represents a Net_Guide_MarkCompleteReq.
         * @implements INet_Guide_MarkCompleteReq
         * @constructor
         * @param {pb.INet_Guide_MarkCompleteReq=} [properties] Properties to set
         */
        function Net_Guide_MarkCompleteReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Guide_MarkCompleteReq GuideId.
         * @member {number} GuideId
         * @memberof pb.Net_Guide_MarkCompleteReq
         * @instance
         */
        Net_Guide_MarkCompleteReq.prototype.GuideId = 0;

        /**
         * Creates a new Net_Guide_MarkCompleteReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Guide_MarkCompleteReq
         * @static
         * @param {pb.INet_Guide_MarkCompleteReq=} [properties] Properties to set
         * @returns {pb.Net_Guide_MarkCompleteReq} Net_Guide_MarkCompleteReq instance
         */
        Net_Guide_MarkCompleteReq.create = function create(properties) {
            return new Net_Guide_MarkCompleteReq(properties);
        };

        /**
         * Encodes the specified Net_Guide_MarkCompleteReq message. Does not implicitly {@link pb.Net_Guide_MarkCompleteReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Guide_MarkCompleteReq
         * @static
         * @param {pb.INet_Guide_MarkCompleteReq} message Net_Guide_MarkCompleteReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Guide_MarkCompleteReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.GuideId != null && Object.hasOwnProperty.call(message, "GuideId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.GuideId);
            return writer;
        };

        /**
         * Decodes a Net_Guide_MarkCompleteReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Guide_MarkCompleteReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Guide_MarkCompleteReq} Net_Guide_MarkCompleteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Guide_MarkCompleteReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Guide_MarkCompleteReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.GuideId = reader.int32();
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
         * Gets the default type url for Net_Guide_MarkCompleteReq
         * @function getTypeUrl
         * @memberof pb.Net_Guide_MarkCompleteReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Guide_MarkCompleteReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Guide_MarkCompleteReq";
        };

        return Net_Guide_MarkCompleteReq;
    })();

    pb.Net_Guide_MarkCompleteRet = (function() {

        /**
         * Properties of a Net_Guide_MarkCompleteRet.
         * @memberof pb
         * @interface INet_Guide_MarkCompleteRet
         * @property {number|null} [Ret] Net_Guide_MarkCompleteRet Ret
         * @property {number|null} [GuideId] Net_Guide_MarkCompleteRet GuideId
         */

        /**
         * Constructs a new Net_Guide_MarkCompleteRet.
         * @memberof pb
         * @classdesc Represents a Net_Guide_MarkCompleteRet.
         * @implements INet_Guide_MarkCompleteRet
         * @constructor
         * @param {pb.INet_Guide_MarkCompleteRet=} [properties] Properties to set
         */
        function Net_Guide_MarkCompleteRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Guide_MarkCompleteRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Guide_MarkCompleteRet
         * @instance
         */
        Net_Guide_MarkCompleteRet.prototype.Ret = 0;

        /**
         * Net_Guide_MarkCompleteRet GuideId.
         * @member {number} GuideId
         * @memberof pb.Net_Guide_MarkCompleteRet
         * @instance
         */
        Net_Guide_MarkCompleteRet.prototype.GuideId = 0;

        /**
         * Creates a new Net_Guide_MarkCompleteRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Guide_MarkCompleteRet
         * @static
         * @param {pb.INet_Guide_MarkCompleteRet=} [properties] Properties to set
         * @returns {pb.Net_Guide_MarkCompleteRet} Net_Guide_MarkCompleteRet instance
         */
        Net_Guide_MarkCompleteRet.create = function create(properties) {
            return new Net_Guide_MarkCompleteRet(properties);
        };

        /**
         * Encodes the specified Net_Guide_MarkCompleteRet message. Does not implicitly {@link pb.Net_Guide_MarkCompleteRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Guide_MarkCompleteRet
         * @static
         * @param {pb.INet_Guide_MarkCompleteRet} message Net_Guide_MarkCompleteRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Guide_MarkCompleteRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.GuideId != null && Object.hasOwnProperty.call(message, "GuideId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GuideId);
            return writer;
        };

        /**
         * Decodes a Net_Guide_MarkCompleteRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Guide_MarkCompleteRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Guide_MarkCompleteRet} Net_Guide_MarkCompleteRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Guide_MarkCompleteRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Guide_MarkCompleteRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.GuideId = reader.int32();
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
         * Gets the default type url for Net_Guide_MarkCompleteRet
         * @function getTypeUrl
         * @memberof pb.Net_Guide_MarkCompleteRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Guide_MarkCompleteRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Guide_MarkCompleteRet";
        };

        return Net_Guide_MarkCompleteRet;
    })();

    /**
     * InboxType enum.
     * @name pb.InboxType
     * @enum {number}
     * @property {number} InboxIdle=0 InboxIdle value
     * @property {number} InboxTypeSys=1 InboxTypeSys value
     */
    pb.InboxType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "InboxIdle"] = 0;
        values[valuesById[1] = "InboxTypeSys"] = 1;
        return values;
    })();

    pb.Base_Inbox_InboxInfo = (function() {

        /**
         * Properties of a Base_Inbox_InboxInfo.
         * @memberof pb
         * @interface IBase_Inbox_InboxInfo
         * @property {Array.<pb.IBase_Inbox_InboxItemInfo>|null} [ItemList] Base_Inbox_InboxInfo ItemList
         */

        /**
         * Constructs a new Base_Inbox_InboxInfo.
         * @memberof pb
         * @classdesc Represents a Base_Inbox_InboxInfo.
         * @implements IBase_Inbox_InboxInfo
         * @constructor
         * @param {pb.IBase_Inbox_InboxInfo=} [properties] Properties to set
         */
        function Base_Inbox_InboxInfo(properties) {
            this.ItemList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Inbox_InboxInfo ItemList.
         * @member {Array.<pb.IBase_Inbox_InboxItemInfo>} ItemList
         * @memberof pb.Base_Inbox_InboxInfo
         * @instance
         */
        Base_Inbox_InboxInfo.prototype.ItemList = $util.emptyArray;

        /**
         * Creates a new Base_Inbox_InboxInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Inbox_InboxInfo
         * @static
         * @param {pb.IBase_Inbox_InboxInfo=} [properties] Properties to set
         * @returns {pb.Base_Inbox_InboxInfo} Base_Inbox_InboxInfo instance
         */
        Base_Inbox_InboxInfo.create = function create(properties) {
            return new Base_Inbox_InboxInfo(properties);
        };

        /**
         * Encodes the specified Base_Inbox_InboxInfo message. Does not implicitly {@link pb.Base_Inbox_InboxInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Inbox_InboxInfo
         * @static
         * @param {pb.IBase_Inbox_InboxInfo} message Base_Inbox_InboxInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Inbox_InboxInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ItemList != null && message.ItemList.length)
                for (var i = 0; i < message.ItemList.length; ++i)
                    $root.pb.Base_Inbox_InboxItemInfo.encode(message.ItemList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Base_Inbox_InboxInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Inbox_InboxInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Inbox_InboxInfo} Base_Inbox_InboxInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Inbox_InboxInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Inbox_InboxInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.ItemList && message.ItemList.length))
                            message.ItemList = [];
                        message.ItemList.push($root.pb.Base_Inbox_InboxItemInfo.decode(reader, reader.uint32()));
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
         * Gets the default type url for Base_Inbox_InboxInfo
         * @function getTypeUrl
         * @memberof pb.Base_Inbox_InboxInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Inbox_InboxInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Inbox_InboxInfo";
        };

        return Base_Inbox_InboxInfo;
    })();

    pb.Base_Inbox_InboxItemInfo = (function() {

        /**
         * Properties of a Base_Inbox_InboxItemInfo.
         * @memberof pb
         * @interface IBase_Inbox_InboxItemInfo
         * @property {number|null} [Id] Base_Inbox_InboxItemInfo Id
         * @property {number|null} [Type] Base_Inbox_InboxItemInfo Type
         * @property {string|null} [ReceiverId] Base_Inbox_InboxItemInfo ReceiverId
         * @property {string|null} [SenderId] Base_Inbox_InboxItemInfo SenderId
         * @property {string|null} [SenderName] Base_Inbox_InboxItemInfo SenderName
         * @property {string|null} [Title] Base_Inbox_InboxItemInfo Title
         * @property {string|null} [Content] Base_Inbox_InboxItemInfo Content
         * @property {boolean|null} [IsRead] Base_Inbox_InboxItemInfo IsRead
         * @property {boolean|null} [IsClaimReward] Base_Inbox_InboxItemInfo IsClaimReward
         * @property {number|null} [ItemId1] Base_Inbox_InboxItemInfo ItemId1
         * @property {number|null} [ItemNum1] Base_Inbox_InboxItemInfo ItemNum1
         * @property {number|null} [ItemId2] Base_Inbox_InboxItemInfo ItemId2
         * @property {number|null} [ItemNum2] Base_Inbox_InboxItemInfo ItemNum2
         * @property {number|null} [ItemId3] Base_Inbox_InboxItemInfo ItemId3
         * @property {number|null} [ItemNum3] Base_Inbox_InboxItemInfo ItemNum3
         * @property {number|Long|null} [Ts] Base_Inbox_InboxItemInfo Ts
         */

        /**
         * Constructs a new Base_Inbox_InboxItemInfo.
         * @memberof pb
         * @classdesc Represents a Base_Inbox_InboxItemInfo.
         * @implements IBase_Inbox_InboxItemInfo
         * @constructor
         * @param {pb.IBase_Inbox_InboxItemInfo=} [properties] Properties to set
         */
        function Base_Inbox_InboxItemInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Inbox_InboxItemInfo Id.
         * @member {number} Id
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @instance
         */
        Base_Inbox_InboxItemInfo.prototype.Id = 0;

        /**
         * Base_Inbox_InboxItemInfo Type.
         * @member {number} Type
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @instance
         */
        Base_Inbox_InboxItemInfo.prototype.Type = 0;

        /**
         * Base_Inbox_InboxItemInfo ReceiverId.
         * @member {string} ReceiverId
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @instance
         */
        Base_Inbox_InboxItemInfo.prototype.ReceiverId = "";

        /**
         * Base_Inbox_InboxItemInfo SenderId.
         * @member {string} SenderId
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @instance
         */
        Base_Inbox_InboxItemInfo.prototype.SenderId = "";

        /**
         * Base_Inbox_InboxItemInfo SenderName.
         * @member {string} SenderName
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @instance
         */
        Base_Inbox_InboxItemInfo.prototype.SenderName = "";

        /**
         * Base_Inbox_InboxItemInfo Title.
         * @member {string} Title
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @instance
         */
        Base_Inbox_InboxItemInfo.prototype.Title = "";

        /**
         * Base_Inbox_InboxItemInfo Content.
         * @member {string} Content
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @instance
         */
        Base_Inbox_InboxItemInfo.prototype.Content = "";

        /**
         * Base_Inbox_InboxItemInfo IsRead.
         * @member {boolean} IsRead
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @instance
         */
        Base_Inbox_InboxItemInfo.prototype.IsRead = false;

        /**
         * Base_Inbox_InboxItemInfo IsClaimReward.
         * @member {boolean} IsClaimReward
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @instance
         */
        Base_Inbox_InboxItemInfo.prototype.IsClaimReward = false;

        /**
         * Base_Inbox_InboxItemInfo ItemId1.
         * @member {number} ItemId1
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @instance
         */
        Base_Inbox_InboxItemInfo.prototype.ItemId1 = 0;

        /**
         * Base_Inbox_InboxItemInfo ItemNum1.
         * @member {number} ItemNum1
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @instance
         */
        Base_Inbox_InboxItemInfo.prototype.ItemNum1 = 0;

        /**
         * Base_Inbox_InboxItemInfo ItemId2.
         * @member {number} ItemId2
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @instance
         */
        Base_Inbox_InboxItemInfo.prototype.ItemId2 = 0;

        /**
         * Base_Inbox_InboxItemInfo ItemNum2.
         * @member {number} ItemNum2
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @instance
         */
        Base_Inbox_InboxItemInfo.prototype.ItemNum2 = 0;

        /**
         * Base_Inbox_InboxItemInfo ItemId3.
         * @member {number} ItemId3
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @instance
         */
        Base_Inbox_InboxItemInfo.prototype.ItemId3 = 0;

        /**
         * Base_Inbox_InboxItemInfo ItemNum3.
         * @member {number} ItemNum3
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @instance
         */
        Base_Inbox_InboxItemInfo.prototype.ItemNum3 = 0;

        /**
         * Base_Inbox_InboxItemInfo Ts.
         * @member {number|Long} Ts
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @instance
         */
        Base_Inbox_InboxItemInfo.prototype.Ts = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Base_Inbox_InboxItemInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @static
         * @param {pb.IBase_Inbox_InboxItemInfo=} [properties] Properties to set
         * @returns {pb.Base_Inbox_InboxItemInfo} Base_Inbox_InboxItemInfo instance
         */
        Base_Inbox_InboxItemInfo.create = function create(properties) {
            return new Base_Inbox_InboxItemInfo(properties);
        };

        /**
         * Encodes the specified Base_Inbox_InboxItemInfo message. Does not implicitly {@link pb.Base_Inbox_InboxItemInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @static
         * @param {pb.IBase_Inbox_InboxItemInfo} message Base_Inbox_InboxItemInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Inbox_InboxItemInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Type);
            if (message.ReceiverId != null && Object.hasOwnProperty.call(message, "ReceiverId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ReceiverId);
            if (message.SenderId != null && Object.hasOwnProperty.call(message, "SenderId"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.SenderId);
            if (message.SenderName != null && Object.hasOwnProperty.call(message, "SenderName"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.SenderName);
            if (message.Title != null && Object.hasOwnProperty.call(message, "Title"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Title);
            if (message.Content != null && Object.hasOwnProperty.call(message, "Content"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.Content);
            if (message.IsRead != null && Object.hasOwnProperty.call(message, "IsRead"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.IsRead);
            if (message.IsClaimReward != null && Object.hasOwnProperty.call(message, "IsClaimReward"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.IsClaimReward);
            if (message.ItemId1 != null && Object.hasOwnProperty.call(message, "ItemId1"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.ItemId1);
            if (message.ItemNum1 != null && Object.hasOwnProperty.call(message, "ItemNum1"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.ItemNum1);
            if (message.ItemId2 != null && Object.hasOwnProperty.call(message, "ItemId2"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.ItemId2);
            if (message.ItemNum2 != null && Object.hasOwnProperty.call(message, "ItemNum2"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.ItemNum2);
            if (message.ItemId3 != null && Object.hasOwnProperty.call(message, "ItemId3"))
                writer.uint32(/* id 14, wireType 0 =*/112).int32(message.ItemId3);
            if (message.ItemNum3 != null && Object.hasOwnProperty.call(message, "ItemNum3"))
                writer.uint32(/* id 15, wireType 0 =*/120).int32(message.ItemNum3);
            if (message.Ts != null && Object.hasOwnProperty.call(message, "Ts"))
                writer.uint32(/* id 16, wireType 0 =*/128).int64(message.Ts);
            return writer;
        };

        /**
         * Decodes a Base_Inbox_InboxItemInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Inbox_InboxItemInfo} Base_Inbox_InboxItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Inbox_InboxItemInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Inbox_InboxItemInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Id = reader.int32();
                        break;
                    }
                case 2: {
                        message.Type = reader.int32();
                        break;
                    }
                case 3: {
                        message.ReceiverId = reader.string();
                        break;
                    }
                case 4: {
                        message.SenderId = reader.string();
                        break;
                    }
                case 5: {
                        message.SenderName = reader.string();
                        break;
                    }
                case 6: {
                        message.Title = reader.string();
                        break;
                    }
                case 7: {
                        message.Content = reader.string();
                        break;
                    }
                case 8: {
                        message.IsRead = reader.bool();
                        break;
                    }
                case 9: {
                        message.IsClaimReward = reader.bool();
                        break;
                    }
                case 10: {
                        message.ItemId1 = reader.int32();
                        break;
                    }
                case 11: {
                        message.ItemNum1 = reader.int32();
                        break;
                    }
                case 12: {
                        message.ItemId2 = reader.int32();
                        break;
                    }
                case 13: {
                        message.ItemNum2 = reader.int32();
                        break;
                    }
                case 14: {
                        message.ItemId3 = reader.int32();
                        break;
                    }
                case 15: {
                        message.ItemNum3 = reader.int32();
                        break;
                    }
                case 16: {
                        message.Ts = reader.int64();
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
         * Gets the default type url for Base_Inbox_InboxItemInfo
         * @function getTypeUrl
         * @memberof pb.Base_Inbox_InboxItemInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Inbox_InboxItemInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Inbox_InboxItemInfo";
        };

        return Base_Inbox_InboxItemInfo;
    })();

    pb.Net_Inbox_UpdateItemsInfoRet = (function() {

        /**
         * Properties of a Net_Inbox_UpdateItemsInfoRet.
         * @memberof pb
         * @interface INet_Inbox_UpdateItemsInfoRet
         * @property {Object.<string,pb.IBase_Inbox_InboxItemInfo>|null} [UpdateItemList] Net_Inbox_UpdateItemsInfoRet UpdateItemList
         */

        /**
         * Constructs a new Net_Inbox_UpdateItemsInfoRet.
         * @memberof pb
         * @classdesc Represents a Net_Inbox_UpdateItemsInfoRet.
         * @implements INet_Inbox_UpdateItemsInfoRet
         * @constructor
         * @param {pb.INet_Inbox_UpdateItemsInfoRet=} [properties] Properties to set
         */
        function Net_Inbox_UpdateItemsInfoRet(properties) {
            this.UpdateItemList = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Inbox_UpdateItemsInfoRet UpdateItemList.
         * @member {Object.<string,pb.IBase_Inbox_InboxItemInfo>} UpdateItemList
         * @memberof pb.Net_Inbox_UpdateItemsInfoRet
         * @instance
         */
        Net_Inbox_UpdateItemsInfoRet.prototype.UpdateItemList = $util.emptyObject;

        /**
         * Creates a new Net_Inbox_UpdateItemsInfoRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Inbox_UpdateItemsInfoRet
         * @static
         * @param {pb.INet_Inbox_UpdateItemsInfoRet=} [properties] Properties to set
         * @returns {pb.Net_Inbox_UpdateItemsInfoRet} Net_Inbox_UpdateItemsInfoRet instance
         */
        Net_Inbox_UpdateItemsInfoRet.create = function create(properties) {
            return new Net_Inbox_UpdateItemsInfoRet(properties);
        };

        /**
         * Encodes the specified Net_Inbox_UpdateItemsInfoRet message. Does not implicitly {@link pb.Net_Inbox_UpdateItemsInfoRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Inbox_UpdateItemsInfoRet
         * @static
         * @param {pb.INet_Inbox_UpdateItemsInfoRet} message Net_Inbox_UpdateItemsInfoRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Inbox_UpdateItemsInfoRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UpdateItemList != null && Object.hasOwnProperty.call(message, "UpdateItemList"))
                for (var keys = Object.keys(message.UpdateItemList), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.pb.Base_Inbox_InboxItemInfo.encode(message.UpdateItemList[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Decodes a Net_Inbox_UpdateItemsInfoRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Inbox_UpdateItemsInfoRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Inbox_UpdateItemsInfoRet} Net_Inbox_UpdateItemsInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Inbox_UpdateItemsInfoRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Inbox_UpdateItemsInfoRet(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.UpdateItemList === $util.emptyObject)
                            message.UpdateItemList = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.pb.Base_Inbox_InboxItemInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.UpdateItemList[key] = value;
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
         * Gets the default type url for Net_Inbox_UpdateItemsInfoRet
         * @function getTypeUrl
         * @memberof pb.Net_Inbox_UpdateItemsInfoRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Inbox_UpdateItemsInfoRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Inbox_UpdateItemsInfoRet";
        };

        return Net_Inbox_UpdateItemsInfoRet;
    })();

    pb.Net_Inbox_SendEmailReq = (function() {

        /**
         * Properties of a Net_Inbox_SendEmailReq.
         * @memberof pb
         * @interface INet_Inbox_SendEmailReq
         * @property {pb.IBase_Inbox_InboxItemInfo|null} [InboxItemInfo] Net_Inbox_SendEmailReq InboxItemInfo
         */

        /**
         * Constructs a new Net_Inbox_SendEmailReq.
         * @memberof pb
         * @classdesc Represents a Net_Inbox_SendEmailReq.
         * @implements INet_Inbox_SendEmailReq
         * @constructor
         * @param {pb.INet_Inbox_SendEmailReq=} [properties] Properties to set
         */
        function Net_Inbox_SendEmailReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Inbox_SendEmailReq InboxItemInfo.
         * @member {pb.IBase_Inbox_InboxItemInfo|null|undefined} InboxItemInfo
         * @memberof pb.Net_Inbox_SendEmailReq
         * @instance
         */
        Net_Inbox_SendEmailReq.prototype.InboxItemInfo = null;

        /**
         * Creates a new Net_Inbox_SendEmailReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Inbox_SendEmailReq
         * @static
         * @param {pb.INet_Inbox_SendEmailReq=} [properties] Properties to set
         * @returns {pb.Net_Inbox_SendEmailReq} Net_Inbox_SendEmailReq instance
         */
        Net_Inbox_SendEmailReq.create = function create(properties) {
            return new Net_Inbox_SendEmailReq(properties);
        };

        /**
         * Encodes the specified Net_Inbox_SendEmailReq message. Does not implicitly {@link pb.Net_Inbox_SendEmailReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Inbox_SendEmailReq
         * @static
         * @param {pb.INet_Inbox_SendEmailReq} message Net_Inbox_SendEmailReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Inbox_SendEmailReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.InboxItemInfo != null && Object.hasOwnProperty.call(message, "InboxItemInfo"))
                $root.pb.Base_Inbox_InboxItemInfo.encode(message.InboxItemInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Net_Inbox_SendEmailReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Inbox_SendEmailReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Inbox_SendEmailReq} Net_Inbox_SendEmailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Inbox_SendEmailReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Inbox_SendEmailReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.InboxItemInfo = $root.pb.Base_Inbox_InboxItemInfo.decode(reader, reader.uint32());
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
         * Gets the default type url for Net_Inbox_SendEmailReq
         * @function getTypeUrl
         * @memberof pb.Net_Inbox_SendEmailReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Inbox_SendEmailReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Inbox_SendEmailReq";
        };

        return Net_Inbox_SendEmailReq;
    })();

    pb.Net_Inbox_SendEmailRet = (function() {

        /**
         * Properties of a Net_Inbox_SendEmailRet.
         * @memberof pb
         * @interface INet_Inbox_SendEmailRet
         * @property {number|null} [Ret] Net_Inbox_SendEmailRet Ret
         */

        /**
         * Constructs a new Net_Inbox_SendEmailRet.
         * @memberof pb
         * @classdesc Represents a Net_Inbox_SendEmailRet.
         * @implements INet_Inbox_SendEmailRet
         * @constructor
         * @param {pb.INet_Inbox_SendEmailRet=} [properties] Properties to set
         */
        function Net_Inbox_SendEmailRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Inbox_SendEmailRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Inbox_SendEmailRet
         * @instance
         */
        Net_Inbox_SendEmailRet.prototype.Ret = 0;

        /**
         * Creates a new Net_Inbox_SendEmailRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Inbox_SendEmailRet
         * @static
         * @param {pb.INet_Inbox_SendEmailRet=} [properties] Properties to set
         * @returns {pb.Net_Inbox_SendEmailRet} Net_Inbox_SendEmailRet instance
         */
        Net_Inbox_SendEmailRet.create = function create(properties) {
            return new Net_Inbox_SendEmailRet(properties);
        };

        /**
         * Encodes the specified Net_Inbox_SendEmailRet message. Does not implicitly {@link pb.Net_Inbox_SendEmailRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Inbox_SendEmailRet
         * @static
         * @param {pb.INet_Inbox_SendEmailRet} message Net_Inbox_SendEmailRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Inbox_SendEmailRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            return writer;
        };

        /**
         * Decodes a Net_Inbox_SendEmailRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Inbox_SendEmailRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Inbox_SendEmailRet} Net_Inbox_SendEmailRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Inbox_SendEmailRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Inbox_SendEmailRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
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
         * Gets the default type url for Net_Inbox_SendEmailRet
         * @function getTypeUrl
         * @memberof pb.Net_Inbox_SendEmailRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Inbox_SendEmailRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Inbox_SendEmailRet";
        };

        return Net_Inbox_SendEmailRet;
    })();

    pb.Net_Inbox_DeleteEmailReq = (function() {

        /**
         * Properties of a Net_Inbox_DeleteEmailReq.
         * @memberof pb
         * @interface INet_Inbox_DeleteEmailReq
         * @property {Array.<number>|null} [EmailIds] Net_Inbox_DeleteEmailReq EmailIds
         */

        /**
         * Constructs a new Net_Inbox_DeleteEmailReq.
         * @memberof pb
         * @classdesc Represents a Net_Inbox_DeleteEmailReq.
         * @implements INet_Inbox_DeleteEmailReq
         * @constructor
         * @param {pb.INet_Inbox_DeleteEmailReq=} [properties] Properties to set
         */
        function Net_Inbox_DeleteEmailReq(properties) {
            this.EmailIds = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Inbox_DeleteEmailReq EmailIds.
         * @member {Array.<number>} EmailIds
         * @memberof pb.Net_Inbox_DeleteEmailReq
         * @instance
         */
        Net_Inbox_DeleteEmailReq.prototype.EmailIds = $util.emptyArray;

        /**
         * Creates a new Net_Inbox_DeleteEmailReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Inbox_DeleteEmailReq
         * @static
         * @param {pb.INet_Inbox_DeleteEmailReq=} [properties] Properties to set
         * @returns {pb.Net_Inbox_DeleteEmailReq} Net_Inbox_DeleteEmailReq instance
         */
        Net_Inbox_DeleteEmailReq.create = function create(properties) {
            return new Net_Inbox_DeleteEmailReq(properties);
        };

        /**
         * Encodes the specified Net_Inbox_DeleteEmailReq message. Does not implicitly {@link pb.Net_Inbox_DeleteEmailReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Inbox_DeleteEmailReq
         * @static
         * @param {pb.INet_Inbox_DeleteEmailReq} message Net_Inbox_DeleteEmailReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Inbox_DeleteEmailReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.EmailIds != null && message.EmailIds.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.EmailIds.length; ++i)
                    writer.int32(message.EmailIds[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a Net_Inbox_DeleteEmailReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Inbox_DeleteEmailReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Inbox_DeleteEmailReq} Net_Inbox_DeleteEmailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Inbox_DeleteEmailReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Inbox_DeleteEmailReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.EmailIds && message.EmailIds.length))
                            message.EmailIds = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.EmailIds.push(reader.int32());
                        } else
                            message.EmailIds.push(reader.int32());
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
         * Gets the default type url for Net_Inbox_DeleteEmailReq
         * @function getTypeUrl
         * @memberof pb.Net_Inbox_DeleteEmailReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Inbox_DeleteEmailReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Inbox_DeleteEmailReq";
        };

        return Net_Inbox_DeleteEmailReq;
    })();

    pb.Net_Inbox_DeleteEmailRet = (function() {

        /**
         * Properties of a Net_Inbox_DeleteEmailRet.
         * @memberof pb
         * @interface INet_Inbox_DeleteEmailRet
         * @property {number|null} [Ret] Net_Inbox_DeleteEmailRet Ret
         */

        /**
         * Constructs a new Net_Inbox_DeleteEmailRet.
         * @memberof pb
         * @classdesc Represents a Net_Inbox_DeleteEmailRet.
         * @implements INet_Inbox_DeleteEmailRet
         * @constructor
         * @param {pb.INet_Inbox_DeleteEmailRet=} [properties] Properties to set
         */
        function Net_Inbox_DeleteEmailRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Inbox_DeleteEmailRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Inbox_DeleteEmailRet
         * @instance
         */
        Net_Inbox_DeleteEmailRet.prototype.Ret = 0;

        /**
         * Creates a new Net_Inbox_DeleteEmailRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Inbox_DeleteEmailRet
         * @static
         * @param {pb.INet_Inbox_DeleteEmailRet=} [properties] Properties to set
         * @returns {pb.Net_Inbox_DeleteEmailRet} Net_Inbox_DeleteEmailRet instance
         */
        Net_Inbox_DeleteEmailRet.create = function create(properties) {
            return new Net_Inbox_DeleteEmailRet(properties);
        };

        /**
         * Encodes the specified Net_Inbox_DeleteEmailRet message. Does not implicitly {@link pb.Net_Inbox_DeleteEmailRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Inbox_DeleteEmailRet
         * @static
         * @param {pb.INet_Inbox_DeleteEmailRet} message Net_Inbox_DeleteEmailRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Inbox_DeleteEmailRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            return writer;
        };

        /**
         * Decodes a Net_Inbox_DeleteEmailRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Inbox_DeleteEmailRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Inbox_DeleteEmailRet} Net_Inbox_DeleteEmailRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Inbox_DeleteEmailRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Inbox_DeleteEmailRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
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
         * Gets the default type url for Net_Inbox_DeleteEmailRet
         * @function getTypeUrl
         * @memberof pb.Net_Inbox_DeleteEmailRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Inbox_DeleteEmailRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Inbox_DeleteEmailRet";
        };

        return Net_Inbox_DeleteEmailRet;
    })();

    pb.Net_Inbox_ClaimRewardGiftsReq = (function() {

        /**
         * Properties of a Net_Inbox_ClaimRewardGiftsReq.
         * @memberof pb
         * @interface INet_Inbox_ClaimRewardGiftsReq
         * @property {number|null} [EmailId] Net_Inbox_ClaimRewardGiftsReq EmailId
         */

        /**
         * Constructs a new Net_Inbox_ClaimRewardGiftsReq.
         * @memberof pb
         * @classdesc Represents a Net_Inbox_ClaimRewardGiftsReq.
         * @implements INet_Inbox_ClaimRewardGiftsReq
         * @constructor
         * @param {pb.INet_Inbox_ClaimRewardGiftsReq=} [properties] Properties to set
         */
        function Net_Inbox_ClaimRewardGiftsReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Inbox_ClaimRewardGiftsReq EmailId.
         * @member {number} EmailId
         * @memberof pb.Net_Inbox_ClaimRewardGiftsReq
         * @instance
         */
        Net_Inbox_ClaimRewardGiftsReq.prototype.EmailId = 0;

        /**
         * Creates a new Net_Inbox_ClaimRewardGiftsReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Inbox_ClaimRewardGiftsReq
         * @static
         * @param {pb.INet_Inbox_ClaimRewardGiftsReq=} [properties] Properties to set
         * @returns {pb.Net_Inbox_ClaimRewardGiftsReq} Net_Inbox_ClaimRewardGiftsReq instance
         */
        Net_Inbox_ClaimRewardGiftsReq.create = function create(properties) {
            return new Net_Inbox_ClaimRewardGiftsReq(properties);
        };

        /**
         * Encodes the specified Net_Inbox_ClaimRewardGiftsReq message. Does not implicitly {@link pb.Net_Inbox_ClaimRewardGiftsReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Inbox_ClaimRewardGiftsReq
         * @static
         * @param {pb.INet_Inbox_ClaimRewardGiftsReq} message Net_Inbox_ClaimRewardGiftsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Inbox_ClaimRewardGiftsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.EmailId != null && Object.hasOwnProperty.call(message, "EmailId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.EmailId);
            return writer;
        };

        /**
         * Decodes a Net_Inbox_ClaimRewardGiftsReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Inbox_ClaimRewardGiftsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Inbox_ClaimRewardGiftsReq} Net_Inbox_ClaimRewardGiftsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Inbox_ClaimRewardGiftsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Inbox_ClaimRewardGiftsReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.EmailId = reader.int32();
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
         * Gets the default type url for Net_Inbox_ClaimRewardGiftsReq
         * @function getTypeUrl
         * @memberof pb.Net_Inbox_ClaimRewardGiftsReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Inbox_ClaimRewardGiftsReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Inbox_ClaimRewardGiftsReq";
        };

        return Net_Inbox_ClaimRewardGiftsReq;
    })();

    pb.Net_Inbox_ClaimRewardGiftsRet = (function() {

        /**
         * Properties of a Net_Inbox_ClaimRewardGiftsRet.
         * @memberof pb
         * @interface INet_Inbox_ClaimRewardGiftsRet
         * @property {number|null} [Ret] Net_Inbox_ClaimRewardGiftsRet Ret
         */

        /**
         * Constructs a new Net_Inbox_ClaimRewardGiftsRet.
         * @memberof pb
         * @classdesc Represents a Net_Inbox_ClaimRewardGiftsRet.
         * @implements INet_Inbox_ClaimRewardGiftsRet
         * @constructor
         * @param {pb.INet_Inbox_ClaimRewardGiftsRet=} [properties] Properties to set
         */
        function Net_Inbox_ClaimRewardGiftsRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Inbox_ClaimRewardGiftsRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Inbox_ClaimRewardGiftsRet
         * @instance
         */
        Net_Inbox_ClaimRewardGiftsRet.prototype.Ret = 0;

        /**
         * Creates a new Net_Inbox_ClaimRewardGiftsRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Inbox_ClaimRewardGiftsRet
         * @static
         * @param {pb.INet_Inbox_ClaimRewardGiftsRet=} [properties] Properties to set
         * @returns {pb.Net_Inbox_ClaimRewardGiftsRet} Net_Inbox_ClaimRewardGiftsRet instance
         */
        Net_Inbox_ClaimRewardGiftsRet.create = function create(properties) {
            return new Net_Inbox_ClaimRewardGiftsRet(properties);
        };

        /**
         * Encodes the specified Net_Inbox_ClaimRewardGiftsRet message. Does not implicitly {@link pb.Net_Inbox_ClaimRewardGiftsRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Inbox_ClaimRewardGiftsRet
         * @static
         * @param {pb.INet_Inbox_ClaimRewardGiftsRet} message Net_Inbox_ClaimRewardGiftsRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Inbox_ClaimRewardGiftsRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            return writer;
        };

        /**
         * Decodes a Net_Inbox_ClaimRewardGiftsRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Inbox_ClaimRewardGiftsRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Inbox_ClaimRewardGiftsRet} Net_Inbox_ClaimRewardGiftsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Inbox_ClaimRewardGiftsRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Inbox_ClaimRewardGiftsRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
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
         * Gets the default type url for Net_Inbox_ClaimRewardGiftsRet
         * @function getTypeUrl
         * @memberof pb.Net_Inbox_ClaimRewardGiftsRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Inbox_ClaimRewardGiftsRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Inbox_ClaimRewardGiftsRet";
        };

        return Net_Inbox_ClaimRewardGiftsRet;
    })();

    pb.Net_Inbox_GetInboxListRet = (function() {

        /**
         * Properties of a Net_Inbox_GetInboxListRet.
         * @memberof pb
         * @interface INet_Inbox_GetInboxListRet
         * @property {Object.<string,pb.IBase_Inbox_InboxItemInfo>|null} [InboxItemInfoList] Net_Inbox_GetInboxListRet InboxItemInfoList
         */

        /**
         * Constructs a new Net_Inbox_GetInboxListRet.
         * @memberof pb
         * @classdesc Represents a Net_Inbox_GetInboxListRet.
         * @implements INet_Inbox_GetInboxListRet
         * @constructor
         * @param {pb.INet_Inbox_GetInboxListRet=} [properties] Properties to set
         */
        function Net_Inbox_GetInboxListRet(properties) {
            this.InboxItemInfoList = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Inbox_GetInboxListRet InboxItemInfoList.
         * @member {Object.<string,pb.IBase_Inbox_InboxItemInfo>} InboxItemInfoList
         * @memberof pb.Net_Inbox_GetInboxListRet
         * @instance
         */
        Net_Inbox_GetInboxListRet.prototype.InboxItemInfoList = $util.emptyObject;

        /**
         * Creates a new Net_Inbox_GetInboxListRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Inbox_GetInboxListRet
         * @static
         * @param {pb.INet_Inbox_GetInboxListRet=} [properties] Properties to set
         * @returns {pb.Net_Inbox_GetInboxListRet} Net_Inbox_GetInboxListRet instance
         */
        Net_Inbox_GetInboxListRet.create = function create(properties) {
            return new Net_Inbox_GetInboxListRet(properties);
        };

        /**
         * Encodes the specified Net_Inbox_GetInboxListRet message. Does not implicitly {@link pb.Net_Inbox_GetInboxListRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Inbox_GetInboxListRet
         * @static
         * @param {pb.INet_Inbox_GetInboxListRet} message Net_Inbox_GetInboxListRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Inbox_GetInboxListRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.InboxItemInfoList != null && Object.hasOwnProperty.call(message, "InboxItemInfoList"))
                for (var keys = Object.keys(message.InboxItemInfoList), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.pb.Base_Inbox_InboxItemInfo.encode(message.InboxItemInfoList[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Decodes a Net_Inbox_GetInboxListRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Inbox_GetInboxListRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Inbox_GetInboxListRet} Net_Inbox_GetInboxListRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Inbox_GetInboxListRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Inbox_GetInboxListRet(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.InboxItemInfoList === $util.emptyObject)
                            message.InboxItemInfoList = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.pb.Base_Inbox_InboxItemInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.InboxItemInfoList[key] = value;
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
         * Gets the default type url for Net_Inbox_GetInboxListRet
         * @function getTypeUrl
         * @memberof pb.Net_Inbox_GetInboxListRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Inbox_GetInboxListRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Inbox_GetInboxListRet";
        };

        return Net_Inbox_GetInboxListRet;
    })();

    pb.Net_Inbox_ReceiveGiftsReq = (function() {

        /**
         * Properties of a Net_Inbox_ReceiveGiftsReq.
         * @memberof pb
         * @interface INet_Inbox_ReceiveGiftsReq
         * @property {number|null} [Index] Net_Inbox_ReceiveGiftsReq Index
         */

        /**
         * Constructs a new Net_Inbox_ReceiveGiftsReq.
         * @memberof pb
         * @classdesc Represents a Net_Inbox_ReceiveGiftsReq.
         * @implements INet_Inbox_ReceiveGiftsReq
         * @constructor
         * @param {pb.INet_Inbox_ReceiveGiftsReq=} [properties] Properties to set
         */
        function Net_Inbox_ReceiveGiftsReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Inbox_ReceiveGiftsReq Index.
         * @member {number} Index
         * @memberof pb.Net_Inbox_ReceiveGiftsReq
         * @instance
         */
        Net_Inbox_ReceiveGiftsReq.prototype.Index = 0;

        /**
         * Creates a new Net_Inbox_ReceiveGiftsReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Inbox_ReceiveGiftsReq
         * @static
         * @param {pb.INet_Inbox_ReceiveGiftsReq=} [properties] Properties to set
         * @returns {pb.Net_Inbox_ReceiveGiftsReq} Net_Inbox_ReceiveGiftsReq instance
         */
        Net_Inbox_ReceiveGiftsReq.create = function create(properties) {
            return new Net_Inbox_ReceiveGiftsReq(properties);
        };

        /**
         * Encodes the specified Net_Inbox_ReceiveGiftsReq message. Does not implicitly {@link pb.Net_Inbox_ReceiveGiftsReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Inbox_ReceiveGiftsReq
         * @static
         * @param {pb.INet_Inbox_ReceiveGiftsReq} message Net_Inbox_ReceiveGiftsReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Inbox_ReceiveGiftsReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Index != null && Object.hasOwnProperty.call(message, "Index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Index);
            return writer;
        };

        /**
         * Decodes a Net_Inbox_ReceiveGiftsReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Inbox_ReceiveGiftsReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Inbox_ReceiveGiftsReq} Net_Inbox_ReceiveGiftsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Inbox_ReceiveGiftsReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Inbox_ReceiveGiftsReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Index = reader.int32();
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
         * Gets the default type url for Net_Inbox_ReceiveGiftsReq
         * @function getTypeUrl
         * @memberof pb.Net_Inbox_ReceiveGiftsReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Inbox_ReceiveGiftsReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Inbox_ReceiveGiftsReq";
        };

        return Net_Inbox_ReceiveGiftsReq;
    })();

    pb.Net_Inbox_ReceiveGiftsRet = (function() {

        /**
         * Properties of a Net_Inbox_ReceiveGiftsRet.
         * @memberof pb
         * @interface INet_Inbox_ReceiveGiftsRet
         * @property {number|null} [Ret] Net_Inbox_ReceiveGiftsRet Ret
         */

        /**
         * Constructs a new Net_Inbox_ReceiveGiftsRet.
         * @memberof pb
         * @classdesc Represents a Net_Inbox_ReceiveGiftsRet.
         * @implements INet_Inbox_ReceiveGiftsRet
         * @constructor
         * @param {pb.INet_Inbox_ReceiveGiftsRet=} [properties] Properties to set
         */
        function Net_Inbox_ReceiveGiftsRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Inbox_ReceiveGiftsRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Inbox_ReceiveGiftsRet
         * @instance
         */
        Net_Inbox_ReceiveGiftsRet.prototype.Ret = 0;

        /**
         * Creates a new Net_Inbox_ReceiveGiftsRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Inbox_ReceiveGiftsRet
         * @static
         * @param {pb.INet_Inbox_ReceiveGiftsRet=} [properties] Properties to set
         * @returns {pb.Net_Inbox_ReceiveGiftsRet} Net_Inbox_ReceiveGiftsRet instance
         */
        Net_Inbox_ReceiveGiftsRet.create = function create(properties) {
            return new Net_Inbox_ReceiveGiftsRet(properties);
        };

        /**
         * Encodes the specified Net_Inbox_ReceiveGiftsRet message. Does not implicitly {@link pb.Net_Inbox_ReceiveGiftsRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Inbox_ReceiveGiftsRet
         * @static
         * @param {pb.INet_Inbox_ReceiveGiftsRet} message Net_Inbox_ReceiveGiftsRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Inbox_ReceiveGiftsRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            return writer;
        };

        /**
         * Decodes a Net_Inbox_ReceiveGiftsRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Inbox_ReceiveGiftsRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Inbox_ReceiveGiftsRet} Net_Inbox_ReceiveGiftsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Inbox_ReceiveGiftsRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Inbox_ReceiveGiftsRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
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
         * Gets the default type url for Net_Inbox_ReceiveGiftsRet
         * @function getTypeUrl
         * @memberof pb.Net_Inbox_ReceiveGiftsRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Inbox_ReceiveGiftsRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Inbox_ReceiveGiftsRet";
        };

        return Net_Inbox_ReceiveGiftsRet;
    })();

    pb.Base_Item_ItemData = (function() {

        /**
         * Properties of a Base_Item_ItemData.
         * @memberof pb
         * @interface IBase_Item_ItemData
         * @property {number|null} [Id] Base_Item_ItemData Id
         * @property {number|null} [Count] Base_Item_ItemData Count
         * @property {number|null} [Bind] Base_Item_ItemData Bind
         * @property {number|Long|null} [ExpireAt] Base_Item_ItemData ExpireAt
         */

        /**
         * Constructs a new Base_Item_ItemData.
         * @memberof pb
         * @classdesc Represents a Base_Item_ItemData.
         * @implements IBase_Item_ItemData
         * @constructor
         * @param {pb.IBase_Item_ItemData=} [properties] Properties to set
         */
        function Base_Item_ItemData(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Item_ItemData Id.
         * @member {number} Id
         * @memberof pb.Base_Item_ItemData
         * @instance
         */
        Base_Item_ItemData.prototype.Id = 0;

        /**
         * Base_Item_ItemData Count.
         * @member {number} Count
         * @memberof pb.Base_Item_ItemData
         * @instance
         */
        Base_Item_ItemData.prototype.Count = 0;

        /**
         * Base_Item_ItemData Bind.
         * @member {number} Bind
         * @memberof pb.Base_Item_ItemData
         * @instance
         */
        Base_Item_ItemData.prototype.Bind = 0;

        /**
         * Base_Item_ItemData ExpireAt.
         * @member {number|Long} ExpireAt
         * @memberof pb.Base_Item_ItemData
         * @instance
         */
        Base_Item_ItemData.prototype.ExpireAt = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Base_Item_ItemData instance using the specified properties.
         * @function create
         * @memberof pb.Base_Item_ItemData
         * @static
         * @param {pb.IBase_Item_ItemData=} [properties] Properties to set
         * @returns {pb.Base_Item_ItemData} Base_Item_ItemData instance
         */
        Base_Item_ItemData.create = function create(properties) {
            return new Base_Item_ItemData(properties);
        };

        /**
         * Encodes the specified Base_Item_ItemData message. Does not implicitly {@link pb.Base_Item_ItemData.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Item_ItemData
         * @static
         * @param {pb.IBase_Item_ItemData} message Base_Item_ItemData message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Item_ItemData.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            if (message.Count != null && Object.hasOwnProperty.call(message, "Count"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Count);
            if (message.Bind != null && Object.hasOwnProperty.call(message, "Bind"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Bind);
            if (message.ExpireAt != null && Object.hasOwnProperty.call(message, "ExpireAt"))
                writer.uint32(/* id 4, wireType 0 =*/32).int64(message.ExpireAt);
            return writer;
        };

        /**
         * Decodes a Base_Item_ItemData message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Item_ItemData
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Item_ItemData} Base_Item_ItemData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Item_ItemData.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Item_ItemData();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Id = reader.int32();
                        break;
                    }
                case 2: {
                        message.Count = reader.int32();
                        break;
                    }
                case 3: {
                        message.Bind = reader.int32();
                        break;
                    }
                case 4: {
                        message.ExpireAt = reader.int64();
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
         * Gets the default type url for Base_Item_ItemData
         * @function getTypeUrl
         * @memberof pb.Base_Item_ItemData
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Item_ItemData.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Item_ItemData";
        };

        return Base_Item_ItemData;
    })();

    pb.Base_Item_ItemInfo = (function() {

        /**
         * Properties of a Base_Item_ItemInfo.
         * @memberof pb
         * @interface IBase_Item_ItemInfo
         * @property {Object.<string,pb.IBase_Item_ItemData>|null} [ItemDataList] Base_Item_ItemInfo ItemDataList
         */

        /**
         * Constructs a new Base_Item_ItemInfo.
         * @memberof pb
         * @classdesc Represents a Base_Item_ItemInfo.
         * @implements IBase_Item_ItemInfo
         * @constructor
         * @param {pb.IBase_Item_ItemInfo=} [properties] Properties to set
         */
        function Base_Item_ItemInfo(properties) {
            this.ItemDataList = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Item_ItemInfo ItemDataList.
         * @member {Object.<string,pb.IBase_Item_ItemData>} ItemDataList
         * @memberof pb.Base_Item_ItemInfo
         * @instance
         */
        Base_Item_ItemInfo.prototype.ItemDataList = $util.emptyObject;

        /**
         * Creates a new Base_Item_ItemInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Item_ItemInfo
         * @static
         * @param {pb.IBase_Item_ItemInfo=} [properties] Properties to set
         * @returns {pb.Base_Item_ItemInfo} Base_Item_ItemInfo instance
         */
        Base_Item_ItemInfo.create = function create(properties) {
            return new Base_Item_ItemInfo(properties);
        };

        /**
         * Encodes the specified Base_Item_ItemInfo message. Does not implicitly {@link pb.Base_Item_ItemInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Item_ItemInfo
         * @static
         * @param {pb.IBase_Item_ItemInfo} message Base_Item_ItemInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Item_ItemInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ItemDataList != null && Object.hasOwnProperty.call(message, "ItemDataList"))
                for (var keys = Object.keys(message.ItemDataList), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.pb.Base_Item_ItemData.encode(message.ItemDataList[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Decodes a Base_Item_ItemInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Item_ItemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Item_ItemInfo} Base_Item_ItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Item_ItemInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Item_ItemInfo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.ItemDataList === $util.emptyObject)
                            message.ItemDataList = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.pb.Base_Item_ItemData.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.ItemDataList[key] = value;
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
         * Gets the default type url for Base_Item_ItemInfo
         * @function getTypeUrl
         * @memberof pb.Base_Item_ItemInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Item_ItemInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Item_ItemInfo";
        };

        return Base_Item_ItemInfo;
    })();

    /**
     * ItemType enum.
     * @name pb.ItemType
     * @enum {number}
     * @property {number} ItemTypeIdle=0 ItemTypeIdle value
     * @property {number} ItemTypeExpense=1 ItemTypeExpense value
     * @property {number} ItemTypeHolyGrails=3 ItemTypeHolyGrails value
     * @property {number} ItemTypeGift=4 ItemTypeGift value
     * @property {number} ItemTypeHeroCard=5 ItemTypeHeroCard value
     */
    pb.ItemType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "ItemTypeIdle"] = 0;
        values[valuesById[1] = "ItemTypeExpense"] = 1;
        values[valuesById[3] = "ItemTypeHolyGrails"] = 3;
        values[valuesById[4] = "ItemTypeGift"] = 4;
        values[valuesById[5] = "ItemTypeHeroCard"] = 5;
        return values;
    })();

    /**
     * EItemType enum.
     * @name pb.EItemType
     * @enum {number}
     * @property {number} BackItemInvalid=0 BackItemInvalid value
     * @property {number} ExpenseType=1 ExpenseType value
     * @property {number} GiftType=6 GiftType value
     * @property {number} MedicineType=3 MedicineType value
     * @property {number} TASKType=4 TASKType value
     * @property {number} OtherType=8 OtherType value
     * @property {number} BuffType=10 BuffType value
     * @property {number} EquipmentType=100 EquipmentType value
     */
    pb.EItemType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "BackItemInvalid"] = 0;
        values[valuesById[1] = "ExpenseType"] = 1;
        values[valuesById[6] = "GiftType"] = 6;
        values[valuesById[3] = "MedicineType"] = 3;
        values[valuesById[4] = "TASKType"] = 4;
        values[valuesById[8] = "OtherType"] = 8;
        values[valuesById[10] = "BuffType"] = 10;
        values[valuesById[100] = "EquipmentType"] = 100;
        return values;
    })();

    /**
     * ENoRexItemType enum.
     * @name pb.ENoRexItemType
     * @enum {number}
     * @property {number} NoRexItemInvalid=0 NoRexItemInvalid value
     * @property {number} NoRexItemCoinCard=1 NoRexItemCoinCard value
     * @property {number} NoRexItemGoldCard=2 NoRexItemGoldCard value
     * @property {number} NoRexItemHolyGrailCard=3 NoRexItemHolyGrailCard value
     * @property {number} NoRexItemJingYanDan=4 NoRexItemJingYanDan value
     * @property {number} NoRexItemJingYanGuo=5 NoRexItemJingYanGuo value
     * @property {number} NoRexItemVipCard=6 NoRexItemVipCard value
     * @property {number} NoRexItemSkillBook=7 NoRexItemSkillBook value
     * @property {number} NoRexItemShiZhuangItem=8 NoRexItemShiZhuangItem value
     * @property {number} NoRexItemShiZhuangImageCard=9 NoRexItemShiZhuangImageCard value
     * @property {number} NoRexItemTitleCard=10 NoRexItemTitleCard value
     * @property {number} NoRexItemPetEgg=11 NoRexItemPetEgg value
     * @property {number} NoRexItemVipJingYanDan=15 NoRexItemVipJingYanDan value
     * @property {number} NoRexItemGoldBindCard=24 NoRexItemGoldBindCard value
     * @property {number} NoRexItemChangeSex=26 NoRexItemChangeSex value
     */
    pb.ENoRexItemType = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NoRexItemInvalid"] = 0;
        values[valuesById[1] = "NoRexItemCoinCard"] = 1;
        values[valuesById[2] = "NoRexItemGoldCard"] = 2;
        values[valuesById[3] = "NoRexItemHolyGrailCard"] = 3;
        values[valuesById[4] = "NoRexItemJingYanDan"] = 4;
        values[valuesById[5] = "NoRexItemJingYanGuo"] = 5;
        values[valuesById[6] = "NoRexItemVipCard"] = 6;
        values[valuesById[7] = "NoRexItemSkillBook"] = 7;
        values[valuesById[8] = "NoRexItemShiZhuangItem"] = 8;
        values[valuesById[9] = "NoRexItemShiZhuangImageCard"] = 9;
        values[valuesById[10] = "NoRexItemTitleCard"] = 10;
        values[valuesById[11] = "NoRexItemPetEgg"] = 11;
        values[valuesById[15] = "NoRexItemVipJingYanDan"] = 15;
        values[valuesById[24] = "NoRexItemGoldBindCard"] = 24;
        values[valuesById[26] = "NoRexItemChangeSex"] = 26;
        return values;
    })();

    pb.Net_Lobby_LuckyWheelReq = (function() {

        /**
         * Properties of a Net_Lobby_LuckyWheelReq.
         * @memberof pb
         * @interface INet_Lobby_LuckyWheelReq
         */

        /**
         * Constructs a new Net_Lobby_LuckyWheelReq.
         * @memberof pb
         * @classdesc Represents a Net_Lobby_LuckyWheelReq.
         * @implements INet_Lobby_LuckyWheelReq
         * @constructor
         * @param {pb.INet_Lobby_LuckyWheelReq=} [properties] Properties to set
         */
        function Net_Lobby_LuckyWheelReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Lobby_LuckyWheelReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Lobby_LuckyWheelReq
         * @static
         * @param {pb.INet_Lobby_LuckyWheelReq=} [properties] Properties to set
         * @returns {pb.Net_Lobby_LuckyWheelReq} Net_Lobby_LuckyWheelReq instance
         */
        Net_Lobby_LuckyWheelReq.create = function create(properties) {
            return new Net_Lobby_LuckyWheelReq(properties);
        };

        /**
         * Encodes the specified Net_Lobby_LuckyWheelReq message. Does not implicitly {@link pb.Net_Lobby_LuckyWheelReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Lobby_LuckyWheelReq
         * @static
         * @param {pb.INet_Lobby_LuckyWheelReq} message Net_Lobby_LuckyWheelReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Lobby_LuckyWheelReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Lobby_LuckyWheelReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Lobby_LuckyWheelReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Lobby_LuckyWheelReq} Net_Lobby_LuckyWheelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Lobby_LuckyWheelReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Lobby_LuckyWheelReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Lobby_LuckyWheelReq
         * @function getTypeUrl
         * @memberof pb.Net_Lobby_LuckyWheelReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Lobby_LuckyWheelReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Lobby_LuckyWheelReq";
        };

        return Net_Lobby_LuckyWheelReq;
    })();

    pb.Net_Lobby_LuckyWheelRet = (function() {

        /**
         * Properties of a Net_Lobby_LuckyWheelRet.
         * @memberof pb
         * @interface INet_Lobby_LuckyWheelRet
         * @property {number|null} [Ret] Net_Lobby_LuckyWheelRet Ret
         * @property {number|null} [WinningId] Net_Lobby_LuckyWheelRet WinningId
         * @property {number|null} [PrizeId] Net_Lobby_LuckyWheelRet PrizeId
         * @property {number|null} [PrizeNum] Net_Lobby_LuckyWheelRet PrizeNum
         */

        /**
         * Constructs a new Net_Lobby_LuckyWheelRet.
         * @memberof pb
         * @classdesc Represents a Net_Lobby_LuckyWheelRet.
         * @implements INet_Lobby_LuckyWheelRet
         * @constructor
         * @param {pb.INet_Lobby_LuckyWheelRet=} [properties] Properties to set
         */
        function Net_Lobby_LuckyWheelRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Lobby_LuckyWheelRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Lobby_LuckyWheelRet
         * @instance
         */
        Net_Lobby_LuckyWheelRet.prototype.Ret = 0;

        /**
         * Net_Lobby_LuckyWheelRet WinningId.
         * @member {number} WinningId
         * @memberof pb.Net_Lobby_LuckyWheelRet
         * @instance
         */
        Net_Lobby_LuckyWheelRet.prototype.WinningId = 0;

        /**
         * Net_Lobby_LuckyWheelRet PrizeId.
         * @member {number} PrizeId
         * @memberof pb.Net_Lobby_LuckyWheelRet
         * @instance
         */
        Net_Lobby_LuckyWheelRet.prototype.PrizeId = 0;

        /**
         * Net_Lobby_LuckyWheelRet PrizeNum.
         * @member {number} PrizeNum
         * @memberof pb.Net_Lobby_LuckyWheelRet
         * @instance
         */
        Net_Lobby_LuckyWheelRet.prototype.PrizeNum = 0;

        /**
         * Creates a new Net_Lobby_LuckyWheelRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Lobby_LuckyWheelRet
         * @static
         * @param {pb.INet_Lobby_LuckyWheelRet=} [properties] Properties to set
         * @returns {pb.Net_Lobby_LuckyWheelRet} Net_Lobby_LuckyWheelRet instance
         */
        Net_Lobby_LuckyWheelRet.create = function create(properties) {
            return new Net_Lobby_LuckyWheelRet(properties);
        };

        /**
         * Encodes the specified Net_Lobby_LuckyWheelRet message. Does not implicitly {@link pb.Net_Lobby_LuckyWheelRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Lobby_LuckyWheelRet
         * @static
         * @param {pb.INet_Lobby_LuckyWheelRet} message Net_Lobby_LuckyWheelRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Lobby_LuckyWheelRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.WinningId != null && Object.hasOwnProperty.call(message, "WinningId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.WinningId);
            if (message.PrizeId != null && Object.hasOwnProperty.call(message, "PrizeId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.PrizeId);
            if (message.PrizeNum != null && Object.hasOwnProperty.call(message, "PrizeNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.PrizeNum);
            return writer;
        };

        /**
         * Decodes a Net_Lobby_LuckyWheelRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Lobby_LuckyWheelRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Lobby_LuckyWheelRet} Net_Lobby_LuckyWheelRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Lobby_LuckyWheelRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Lobby_LuckyWheelRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.WinningId = reader.int32();
                        break;
                    }
                case 3: {
                        message.PrizeId = reader.int32();
                        break;
                    }
                case 4: {
                        message.PrizeNum = reader.int32();
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
         * Gets the default type url for Net_Lobby_LuckyWheelRet
         * @function getTypeUrl
         * @memberof pb.Net_Lobby_LuckyWheelRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Lobby_LuckyWheelRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Lobby_LuckyWheelRet";
        };

        return Net_Lobby_LuckyWheelRet;
    })();

    pb.Net_Lobby_CollectFcmRewardsRet = (function() {

        /**
         * Properties of a Net_Lobby_CollectFcmRewardsRet.
         * @memberof pb
         * @interface INet_Lobby_CollectFcmRewardsRet
         * @property {number|null} [InvalidType] Net_Lobby_CollectFcmRewardsRet InvalidType
         * @property {string|null} [FcmRewards] Net_Lobby_CollectFcmRewardsRet FcmRewards
         * @property {string|null} [Type] Net_Lobby_CollectFcmRewardsRet Type
         */

        /**
         * Constructs a new Net_Lobby_CollectFcmRewardsRet.
         * @memberof pb
         * @classdesc Represents a Net_Lobby_CollectFcmRewardsRet.
         * @implements INet_Lobby_CollectFcmRewardsRet
         * @constructor
         * @param {pb.INet_Lobby_CollectFcmRewardsRet=} [properties] Properties to set
         */
        function Net_Lobby_CollectFcmRewardsRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Lobby_CollectFcmRewardsRet InvalidType.
         * @member {number} InvalidType
         * @memberof pb.Net_Lobby_CollectFcmRewardsRet
         * @instance
         */
        Net_Lobby_CollectFcmRewardsRet.prototype.InvalidType = 0;

        /**
         * Net_Lobby_CollectFcmRewardsRet FcmRewards.
         * @member {string} FcmRewards
         * @memberof pb.Net_Lobby_CollectFcmRewardsRet
         * @instance
         */
        Net_Lobby_CollectFcmRewardsRet.prototype.FcmRewards = "";

        /**
         * Net_Lobby_CollectFcmRewardsRet Type.
         * @member {string} Type
         * @memberof pb.Net_Lobby_CollectFcmRewardsRet
         * @instance
         */
        Net_Lobby_CollectFcmRewardsRet.prototype.Type = "";

        /**
         * Creates a new Net_Lobby_CollectFcmRewardsRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Lobby_CollectFcmRewardsRet
         * @static
         * @param {pb.INet_Lobby_CollectFcmRewardsRet=} [properties] Properties to set
         * @returns {pb.Net_Lobby_CollectFcmRewardsRet} Net_Lobby_CollectFcmRewardsRet instance
         */
        Net_Lobby_CollectFcmRewardsRet.create = function create(properties) {
            return new Net_Lobby_CollectFcmRewardsRet(properties);
        };

        /**
         * Encodes the specified Net_Lobby_CollectFcmRewardsRet message. Does not implicitly {@link pb.Net_Lobby_CollectFcmRewardsRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Lobby_CollectFcmRewardsRet
         * @static
         * @param {pb.INet_Lobby_CollectFcmRewardsRet} message Net_Lobby_CollectFcmRewardsRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Lobby_CollectFcmRewardsRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.InvalidType != null && Object.hasOwnProperty.call(message, "InvalidType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.InvalidType);
            if (message.FcmRewards != null && Object.hasOwnProperty.call(message, "FcmRewards"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.FcmRewards);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Type);
            return writer;
        };

        /**
         * Decodes a Net_Lobby_CollectFcmRewardsRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Lobby_CollectFcmRewardsRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Lobby_CollectFcmRewardsRet} Net_Lobby_CollectFcmRewardsRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Lobby_CollectFcmRewardsRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Lobby_CollectFcmRewardsRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.InvalidType = reader.int32();
                        break;
                    }
                case 2: {
                        message.FcmRewards = reader.string();
                        break;
                    }
                case 3: {
                        message.Type = reader.string();
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
         * Gets the default type url for Net_Lobby_CollectFcmRewardsRet
         * @function getTypeUrl
         * @memberof pb.Net_Lobby_CollectFcmRewardsRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Lobby_CollectFcmRewardsRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Lobby_CollectFcmRewardsRet";
        };

        return Net_Lobby_CollectFcmRewardsRet;
    })();

    pb.Base_Lobby_WeeklyPrize = (function() {

        /**
         * Properties of a Base_Lobby_WeeklyPrize.
         * @memberof pb
         * @interface IBase_Lobby_WeeklyPrize
         * @property {number|null} [Coins] Base_Lobby_WeeklyPrize Coins
         * @property {number|null} [Golds] Base_Lobby_WeeklyPrize Golds
         * @property {number|null} [HolyGrails] Base_Lobby_WeeklyPrize HolyGrails
         */

        /**
         * Constructs a new Base_Lobby_WeeklyPrize.
         * @memberof pb
         * @classdesc Represents a Base_Lobby_WeeklyPrize.
         * @implements IBase_Lobby_WeeklyPrize
         * @constructor
         * @param {pb.IBase_Lobby_WeeklyPrize=} [properties] Properties to set
         */
        function Base_Lobby_WeeklyPrize(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Lobby_WeeklyPrize Coins.
         * @member {number} Coins
         * @memberof pb.Base_Lobby_WeeklyPrize
         * @instance
         */
        Base_Lobby_WeeklyPrize.prototype.Coins = 0;

        /**
         * Base_Lobby_WeeklyPrize Golds.
         * @member {number} Golds
         * @memberof pb.Base_Lobby_WeeklyPrize
         * @instance
         */
        Base_Lobby_WeeklyPrize.prototype.Golds = 0;

        /**
         * Base_Lobby_WeeklyPrize HolyGrails.
         * @member {number} HolyGrails
         * @memberof pb.Base_Lobby_WeeklyPrize
         * @instance
         */
        Base_Lobby_WeeklyPrize.prototype.HolyGrails = 0;

        /**
         * Creates a new Base_Lobby_WeeklyPrize instance using the specified properties.
         * @function create
         * @memberof pb.Base_Lobby_WeeklyPrize
         * @static
         * @param {pb.IBase_Lobby_WeeklyPrize=} [properties] Properties to set
         * @returns {pb.Base_Lobby_WeeklyPrize} Base_Lobby_WeeklyPrize instance
         */
        Base_Lobby_WeeklyPrize.create = function create(properties) {
            return new Base_Lobby_WeeklyPrize(properties);
        };

        /**
         * Encodes the specified Base_Lobby_WeeklyPrize message. Does not implicitly {@link pb.Base_Lobby_WeeklyPrize.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Lobby_WeeklyPrize
         * @static
         * @param {pb.IBase_Lobby_WeeklyPrize} message Base_Lobby_WeeklyPrize message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Lobby_WeeklyPrize.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Coins != null && Object.hasOwnProperty.call(message, "Coins"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Coins);
            if (message.Golds != null && Object.hasOwnProperty.call(message, "Golds"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Golds);
            if (message.HolyGrails != null && Object.hasOwnProperty.call(message, "HolyGrails"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.HolyGrails);
            return writer;
        };

        /**
         * Decodes a Base_Lobby_WeeklyPrize message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Lobby_WeeklyPrize
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Lobby_WeeklyPrize} Base_Lobby_WeeklyPrize
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Lobby_WeeklyPrize.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Lobby_WeeklyPrize();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Coins = reader.int32();
                        break;
                    }
                case 2: {
                        message.Golds = reader.int32();
                        break;
                    }
                case 3: {
                        message.HolyGrails = reader.int32();
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
         * Gets the default type url for Base_Lobby_WeeklyPrize
         * @function getTypeUrl
         * @memberof pb.Base_Lobby_WeeklyPrize
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Lobby_WeeklyPrize.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Lobby_WeeklyPrize";
        };

        return Base_Lobby_WeeklyPrize;
    })();

    pb.Net_Lobby_CollectLoginBonusReq = (function() {

        /**
         * Properties of a Net_Lobby_CollectLoginBonusReq.
         * @memberof pb
         * @interface INet_Lobby_CollectLoginBonusReq
         */

        /**
         * Constructs a new Net_Lobby_CollectLoginBonusReq.
         * @memberof pb
         * @classdesc Represents a Net_Lobby_CollectLoginBonusReq.
         * @implements INet_Lobby_CollectLoginBonusReq
         * @constructor
         * @param {pb.INet_Lobby_CollectLoginBonusReq=} [properties] Properties to set
         */
        function Net_Lobby_CollectLoginBonusReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Lobby_CollectLoginBonusReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Lobby_CollectLoginBonusReq
         * @static
         * @param {pb.INet_Lobby_CollectLoginBonusReq=} [properties] Properties to set
         * @returns {pb.Net_Lobby_CollectLoginBonusReq} Net_Lobby_CollectLoginBonusReq instance
         */
        Net_Lobby_CollectLoginBonusReq.create = function create(properties) {
            return new Net_Lobby_CollectLoginBonusReq(properties);
        };

        /**
         * Encodes the specified Net_Lobby_CollectLoginBonusReq message. Does not implicitly {@link pb.Net_Lobby_CollectLoginBonusReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Lobby_CollectLoginBonusReq
         * @static
         * @param {pb.INet_Lobby_CollectLoginBonusReq} message Net_Lobby_CollectLoginBonusReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Lobby_CollectLoginBonusReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Lobby_CollectLoginBonusReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Lobby_CollectLoginBonusReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Lobby_CollectLoginBonusReq} Net_Lobby_CollectLoginBonusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Lobby_CollectLoginBonusReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Lobby_CollectLoginBonusReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Lobby_CollectLoginBonusReq
         * @function getTypeUrl
         * @memberof pb.Net_Lobby_CollectLoginBonusReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Lobby_CollectLoginBonusReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Lobby_CollectLoginBonusReq";
        };

        return Net_Lobby_CollectLoginBonusReq;
    })();

    pb.Net_Lobby_CollectLoginBonusRet = (function() {

        /**
         * Properties of a Net_Lobby_CollectLoginBonusRet.
         * @memberof pb
         * @interface INet_Lobby_CollectLoginBonusRet
         * @property {number|null} [Ret] Net_Lobby_CollectLoginBonusRet Ret
         * @property {pb.IBase_Lobby_WeeklyPrize|null} [WeeklyPrize] Net_Lobby_CollectLoginBonusRet WeeklyPrize
         * @property {number|null} [CurrentCoins] Net_Lobby_CollectLoginBonusRet CurrentCoins
         * @property {number|null} [CurrentGolds] Net_Lobby_CollectLoginBonusRet CurrentGolds
         * @property {number|null} [CurrentHolyGrails] Net_Lobby_CollectLoginBonusRet CurrentHolyGrails
         */

        /**
         * Constructs a new Net_Lobby_CollectLoginBonusRet.
         * @memberof pb
         * @classdesc Represents a Net_Lobby_CollectLoginBonusRet.
         * @implements INet_Lobby_CollectLoginBonusRet
         * @constructor
         * @param {pb.INet_Lobby_CollectLoginBonusRet=} [properties] Properties to set
         */
        function Net_Lobby_CollectLoginBonusRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Lobby_CollectLoginBonusRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Lobby_CollectLoginBonusRet
         * @instance
         */
        Net_Lobby_CollectLoginBonusRet.prototype.Ret = 0;

        /**
         * Net_Lobby_CollectLoginBonusRet WeeklyPrize.
         * @member {pb.IBase_Lobby_WeeklyPrize|null|undefined} WeeklyPrize
         * @memberof pb.Net_Lobby_CollectLoginBonusRet
         * @instance
         */
        Net_Lobby_CollectLoginBonusRet.prototype.WeeklyPrize = null;

        /**
         * Net_Lobby_CollectLoginBonusRet CurrentCoins.
         * @member {number} CurrentCoins
         * @memberof pb.Net_Lobby_CollectLoginBonusRet
         * @instance
         */
        Net_Lobby_CollectLoginBonusRet.prototype.CurrentCoins = 0;

        /**
         * Net_Lobby_CollectLoginBonusRet CurrentGolds.
         * @member {number} CurrentGolds
         * @memberof pb.Net_Lobby_CollectLoginBonusRet
         * @instance
         */
        Net_Lobby_CollectLoginBonusRet.prototype.CurrentGolds = 0;

        /**
         * Net_Lobby_CollectLoginBonusRet CurrentHolyGrails.
         * @member {number} CurrentHolyGrails
         * @memberof pb.Net_Lobby_CollectLoginBonusRet
         * @instance
         */
        Net_Lobby_CollectLoginBonusRet.prototype.CurrentHolyGrails = 0;

        /**
         * Creates a new Net_Lobby_CollectLoginBonusRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Lobby_CollectLoginBonusRet
         * @static
         * @param {pb.INet_Lobby_CollectLoginBonusRet=} [properties] Properties to set
         * @returns {pb.Net_Lobby_CollectLoginBonusRet} Net_Lobby_CollectLoginBonusRet instance
         */
        Net_Lobby_CollectLoginBonusRet.create = function create(properties) {
            return new Net_Lobby_CollectLoginBonusRet(properties);
        };

        /**
         * Encodes the specified Net_Lobby_CollectLoginBonusRet message. Does not implicitly {@link pb.Net_Lobby_CollectLoginBonusRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Lobby_CollectLoginBonusRet
         * @static
         * @param {pb.INet_Lobby_CollectLoginBonusRet} message Net_Lobby_CollectLoginBonusRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Lobby_CollectLoginBonusRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.WeeklyPrize != null && Object.hasOwnProperty.call(message, "WeeklyPrize"))
                $root.pb.Base_Lobby_WeeklyPrize.encode(message.WeeklyPrize, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.CurrentCoins != null && Object.hasOwnProperty.call(message, "CurrentCoins"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.CurrentCoins);
            if (message.CurrentGolds != null && Object.hasOwnProperty.call(message, "CurrentGolds"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.CurrentGolds);
            if (message.CurrentHolyGrails != null && Object.hasOwnProperty.call(message, "CurrentHolyGrails"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.CurrentHolyGrails);
            return writer;
        };

        /**
         * Decodes a Net_Lobby_CollectLoginBonusRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Lobby_CollectLoginBonusRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Lobby_CollectLoginBonusRet} Net_Lobby_CollectLoginBonusRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Lobby_CollectLoginBonusRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Lobby_CollectLoginBonusRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 3: {
                        message.WeeklyPrize = $root.pb.Base_Lobby_WeeklyPrize.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.CurrentCoins = reader.int32();
                        break;
                    }
                case 5: {
                        message.CurrentGolds = reader.int32();
                        break;
                    }
                case 6: {
                        message.CurrentHolyGrails = reader.int32();
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
         * Gets the default type url for Net_Lobby_CollectLoginBonusRet
         * @function getTypeUrl
         * @memberof pb.Net_Lobby_CollectLoginBonusRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Lobby_CollectLoginBonusRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Lobby_CollectLoginBonusRet";
        };

        return Net_Lobby_CollectLoginBonusRet;
    })();

    pb.Net_Lobby_ReissueLoginBonusReq = (function() {

        /**
         * Properties of a Net_Lobby_ReissueLoginBonusReq.
         * @memberof pb
         * @interface INet_Lobby_ReissueLoginBonusReq
         * @property {number|null} [MonthCount] Net_Lobby_ReissueLoginBonusReq MonthCount
         */

        /**
         * Constructs a new Net_Lobby_ReissueLoginBonusReq.
         * @memberof pb
         * @classdesc Represents a Net_Lobby_ReissueLoginBonusReq.
         * @implements INet_Lobby_ReissueLoginBonusReq
         * @constructor
         * @param {pb.INet_Lobby_ReissueLoginBonusReq=} [properties] Properties to set
         */
        function Net_Lobby_ReissueLoginBonusReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Lobby_ReissueLoginBonusReq MonthCount.
         * @member {number} MonthCount
         * @memberof pb.Net_Lobby_ReissueLoginBonusReq
         * @instance
         */
        Net_Lobby_ReissueLoginBonusReq.prototype.MonthCount = 0;

        /**
         * Creates a new Net_Lobby_ReissueLoginBonusReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Lobby_ReissueLoginBonusReq
         * @static
         * @param {pb.INet_Lobby_ReissueLoginBonusReq=} [properties] Properties to set
         * @returns {pb.Net_Lobby_ReissueLoginBonusReq} Net_Lobby_ReissueLoginBonusReq instance
         */
        Net_Lobby_ReissueLoginBonusReq.create = function create(properties) {
            return new Net_Lobby_ReissueLoginBonusReq(properties);
        };

        /**
         * Encodes the specified Net_Lobby_ReissueLoginBonusReq message. Does not implicitly {@link pb.Net_Lobby_ReissueLoginBonusReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Lobby_ReissueLoginBonusReq
         * @static
         * @param {pb.INet_Lobby_ReissueLoginBonusReq} message Net_Lobby_ReissueLoginBonusReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Lobby_ReissueLoginBonusReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MonthCount != null && Object.hasOwnProperty.call(message, "MonthCount"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.MonthCount);
            return writer;
        };

        /**
         * Decodes a Net_Lobby_ReissueLoginBonusReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Lobby_ReissueLoginBonusReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Lobby_ReissueLoginBonusReq} Net_Lobby_ReissueLoginBonusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Lobby_ReissueLoginBonusReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Lobby_ReissueLoginBonusReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.MonthCount = reader.int32();
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
         * Gets the default type url for Net_Lobby_ReissueLoginBonusReq
         * @function getTypeUrl
         * @memberof pb.Net_Lobby_ReissueLoginBonusReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Lobby_ReissueLoginBonusReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Lobby_ReissueLoginBonusReq";
        };

        return Net_Lobby_ReissueLoginBonusReq;
    })();

    pb.Net_Lobby_ReissueLoginBonusRet = (function() {

        /**
         * Properties of a Net_Lobby_ReissueLoginBonusRet.
         * @memberof pb
         * @interface INet_Lobby_ReissueLoginBonusRet
         * @property {number|null} [Ret] Net_Lobby_ReissueLoginBonusRet Ret
         * @property {pb.IBase_Lobby_WeeklyPrize|null} [WeeklyPrize] Net_Lobby_ReissueLoginBonusRet WeeklyPrize
         * @property {number|null} [CurrentCoins] Net_Lobby_ReissueLoginBonusRet CurrentCoins
         * @property {number|null} [CurrentGolds] Net_Lobby_ReissueLoginBonusRet CurrentGolds
         * @property {number|null} [CurrentHolyGrails] Net_Lobby_ReissueLoginBonusRet CurrentHolyGrails
         */

        /**
         * Constructs a new Net_Lobby_ReissueLoginBonusRet.
         * @memberof pb
         * @classdesc Represents a Net_Lobby_ReissueLoginBonusRet.
         * @implements INet_Lobby_ReissueLoginBonusRet
         * @constructor
         * @param {pb.INet_Lobby_ReissueLoginBonusRet=} [properties] Properties to set
         */
        function Net_Lobby_ReissueLoginBonusRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Lobby_ReissueLoginBonusRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Lobby_ReissueLoginBonusRet
         * @instance
         */
        Net_Lobby_ReissueLoginBonusRet.prototype.Ret = 0;

        /**
         * Net_Lobby_ReissueLoginBonusRet WeeklyPrize.
         * @member {pb.IBase_Lobby_WeeklyPrize|null|undefined} WeeklyPrize
         * @memberof pb.Net_Lobby_ReissueLoginBonusRet
         * @instance
         */
        Net_Lobby_ReissueLoginBonusRet.prototype.WeeklyPrize = null;

        /**
         * Net_Lobby_ReissueLoginBonusRet CurrentCoins.
         * @member {number} CurrentCoins
         * @memberof pb.Net_Lobby_ReissueLoginBonusRet
         * @instance
         */
        Net_Lobby_ReissueLoginBonusRet.prototype.CurrentCoins = 0;

        /**
         * Net_Lobby_ReissueLoginBonusRet CurrentGolds.
         * @member {number} CurrentGolds
         * @memberof pb.Net_Lobby_ReissueLoginBonusRet
         * @instance
         */
        Net_Lobby_ReissueLoginBonusRet.prototype.CurrentGolds = 0;

        /**
         * Net_Lobby_ReissueLoginBonusRet CurrentHolyGrails.
         * @member {number} CurrentHolyGrails
         * @memberof pb.Net_Lobby_ReissueLoginBonusRet
         * @instance
         */
        Net_Lobby_ReissueLoginBonusRet.prototype.CurrentHolyGrails = 0;

        /**
         * Creates a new Net_Lobby_ReissueLoginBonusRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Lobby_ReissueLoginBonusRet
         * @static
         * @param {pb.INet_Lobby_ReissueLoginBonusRet=} [properties] Properties to set
         * @returns {pb.Net_Lobby_ReissueLoginBonusRet} Net_Lobby_ReissueLoginBonusRet instance
         */
        Net_Lobby_ReissueLoginBonusRet.create = function create(properties) {
            return new Net_Lobby_ReissueLoginBonusRet(properties);
        };

        /**
         * Encodes the specified Net_Lobby_ReissueLoginBonusRet message. Does not implicitly {@link pb.Net_Lobby_ReissueLoginBonusRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Lobby_ReissueLoginBonusRet
         * @static
         * @param {pb.INet_Lobby_ReissueLoginBonusRet} message Net_Lobby_ReissueLoginBonusRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Lobby_ReissueLoginBonusRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.WeeklyPrize != null && Object.hasOwnProperty.call(message, "WeeklyPrize"))
                $root.pb.Base_Lobby_WeeklyPrize.encode(message.WeeklyPrize, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.CurrentCoins != null && Object.hasOwnProperty.call(message, "CurrentCoins"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.CurrentCoins);
            if (message.CurrentGolds != null && Object.hasOwnProperty.call(message, "CurrentGolds"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.CurrentGolds);
            if (message.CurrentHolyGrails != null && Object.hasOwnProperty.call(message, "CurrentHolyGrails"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.CurrentHolyGrails);
            return writer;
        };

        /**
         * Decodes a Net_Lobby_ReissueLoginBonusRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Lobby_ReissueLoginBonusRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Lobby_ReissueLoginBonusRet} Net_Lobby_ReissueLoginBonusRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Lobby_ReissueLoginBonusRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Lobby_ReissueLoginBonusRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 3: {
                        message.WeeklyPrize = $root.pb.Base_Lobby_WeeklyPrize.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.CurrentCoins = reader.int32();
                        break;
                    }
                case 5: {
                        message.CurrentGolds = reader.int32();
                        break;
                    }
                case 6: {
                        message.CurrentHolyGrails = reader.int32();
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
         * Gets the default type url for Net_Lobby_ReissueLoginBonusRet
         * @function getTypeUrl
         * @memberof pb.Net_Lobby_ReissueLoginBonusRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Lobby_ReissueLoginBonusRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Lobby_ReissueLoginBonusRet";
        };

        return Net_Lobby_ReissueLoginBonusRet;
    })();

    pb.Net_Lobby_GetDailyBonusReq = (function() {

        /**
         * Properties of a Net_Lobby_GetDailyBonusReq.
         * @memberof pb
         * @interface INet_Lobby_GetDailyBonusReq
         */

        /**
         * Constructs a new Net_Lobby_GetDailyBonusReq.
         * @memberof pb
         * @classdesc Represents a Net_Lobby_GetDailyBonusReq.
         * @implements INet_Lobby_GetDailyBonusReq
         * @constructor
         * @param {pb.INet_Lobby_GetDailyBonusReq=} [properties] Properties to set
         */
        function Net_Lobby_GetDailyBonusReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Lobby_GetDailyBonusReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Lobby_GetDailyBonusReq
         * @static
         * @param {pb.INet_Lobby_GetDailyBonusReq=} [properties] Properties to set
         * @returns {pb.Net_Lobby_GetDailyBonusReq} Net_Lobby_GetDailyBonusReq instance
         */
        Net_Lobby_GetDailyBonusReq.create = function create(properties) {
            return new Net_Lobby_GetDailyBonusReq(properties);
        };

        /**
         * Encodes the specified Net_Lobby_GetDailyBonusReq message. Does not implicitly {@link pb.Net_Lobby_GetDailyBonusReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Lobby_GetDailyBonusReq
         * @static
         * @param {pb.INet_Lobby_GetDailyBonusReq} message Net_Lobby_GetDailyBonusReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Lobby_GetDailyBonusReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Lobby_GetDailyBonusReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Lobby_GetDailyBonusReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Lobby_GetDailyBonusReq} Net_Lobby_GetDailyBonusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Lobby_GetDailyBonusReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Lobby_GetDailyBonusReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Lobby_GetDailyBonusReq
         * @function getTypeUrl
         * @memberof pb.Net_Lobby_GetDailyBonusReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Lobby_GetDailyBonusReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Lobby_GetDailyBonusReq";
        };

        return Net_Lobby_GetDailyBonusReq;
    })();

    pb.Net_Lobby_GetDailyBonusRet = (function() {

        /**
         * Properties of a Net_Lobby_GetDailyBonusRet.
         * @memberof pb
         * @interface INet_Lobby_GetDailyBonusRet
         */

        /**
         * Constructs a new Net_Lobby_GetDailyBonusRet.
         * @memberof pb
         * @classdesc Represents a Net_Lobby_GetDailyBonusRet.
         * @implements INet_Lobby_GetDailyBonusRet
         * @constructor
         * @param {pb.INet_Lobby_GetDailyBonusRet=} [properties] Properties to set
         */
        function Net_Lobby_GetDailyBonusRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Lobby_GetDailyBonusRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Lobby_GetDailyBonusRet
         * @static
         * @param {pb.INet_Lobby_GetDailyBonusRet=} [properties] Properties to set
         * @returns {pb.Net_Lobby_GetDailyBonusRet} Net_Lobby_GetDailyBonusRet instance
         */
        Net_Lobby_GetDailyBonusRet.create = function create(properties) {
            return new Net_Lobby_GetDailyBonusRet(properties);
        };

        /**
         * Encodes the specified Net_Lobby_GetDailyBonusRet message. Does not implicitly {@link pb.Net_Lobby_GetDailyBonusRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Lobby_GetDailyBonusRet
         * @static
         * @param {pb.INet_Lobby_GetDailyBonusRet} message Net_Lobby_GetDailyBonusRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Lobby_GetDailyBonusRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Lobby_GetDailyBonusRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Lobby_GetDailyBonusRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Lobby_GetDailyBonusRet} Net_Lobby_GetDailyBonusRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Lobby_GetDailyBonusRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Lobby_GetDailyBonusRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Lobby_GetDailyBonusRet
         * @function getTypeUrl
         * @memberof pb.Net_Lobby_GetDailyBonusRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Lobby_GetDailyBonusRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Lobby_GetDailyBonusRet";
        };

        return Net_Lobby_GetDailyBonusRet;
    })();

    pb.Net_Lobby_CollectDailyBonusReq = (function() {

        /**
         * Properties of a Net_Lobby_CollectDailyBonusReq.
         * @memberof pb
         * @interface INet_Lobby_CollectDailyBonusReq
         * @property {number|null} [TickIndex] Net_Lobby_CollectDailyBonusReq TickIndex
         */

        /**
         * Constructs a new Net_Lobby_CollectDailyBonusReq.
         * @memberof pb
         * @classdesc Represents a Net_Lobby_CollectDailyBonusReq.
         * @implements INet_Lobby_CollectDailyBonusReq
         * @constructor
         * @param {pb.INet_Lobby_CollectDailyBonusReq=} [properties] Properties to set
         */
        function Net_Lobby_CollectDailyBonusReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Lobby_CollectDailyBonusReq TickIndex.
         * @member {number} TickIndex
         * @memberof pb.Net_Lobby_CollectDailyBonusReq
         * @instance
         */
        Net_Lobby_CollectDailyBonusReq.prototype.TickIndex = 0;

        /**
         * Creates a new Net_Lobby_CollectDailyBonusReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Lobby_CollectDailyBonusReq
         * @static
         * @param {pb.INet_Lobby_CollectDailyBonusReq=} [properties] Properties to set
         * @returns {pb.Net_Lobby_CollectDailyBonusReq} Net_Lobby_CollectDailyBonusReq instance
         */
        Net_Lobby_CollectDailyBonusReq.create = function create(properties) {
            return new Net_Lobby_CollectDailyBonusReq(properties);
        };

        /**
         * Encodes the specified Net_Lobby_CollectDailyBonusReq message. Does not implicitly {@link pb.Net_Lobby_CollectDailyBonusReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Lobby_CollectDailyBonusReq
         * @static
         * @param {pb.INet_Lobby_CollectDailyBonusReq} message Net_Lobby_CollectDailyBonusReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Lobby_CollectDailyBonusReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TickIndex != null && Object.hasOwnProperty.call(message, "TickIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TickIndex);
            return writer;
        };

        /**
         * Decodes a Net_Lobby_CollectDailyBonusReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Lobby_CollectDailyBonusReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Lobby_CollectDailyBonusReq} Net_Lobby_CollectDailyBonusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Lobby_CollectDailyBonusReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Lobby_CollectDailyBonusReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.TickIndex = reader.int32();
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
         * Gets the default type url for Net_Lobby_CollectDailyBonusReq
         * @function getTypeUrl
         * @memberof pb.Net_Lobby_CollectDailyBonusReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Lobby_CollectDailyBonusReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Lobby_CollectDailyBonusReq";
        };

        return Net_Lobby_CollectDailyBonusReq;
    })();

    pb.Net_Lobby_CollectDailyBonusRet = (function() {

        /**
         * Properties of a Net_Lobby_CollectDailyBonusRet.
         * @memberof pb
         * @interface INet_Lobby_CollectDailyBonusRet
         * @property {number|null} [TickIndex] Net_Lobby_CollectDailyBonusRet TickIndex
         * @property {boolean|null} [IsBool] Net_Lobby_CollectDailyBonusRet IsBool
         */

        /**
         * Constructs a new Net_Lobby_CollectDailyBonusRet.
         * @memberof pb
         * @classdesc Represents a Net_Lobby_CollectDailyBonusRet.
         * @implements INet_Lobby_CollectDailyBonusRet
         * @constructor
         * @param {pb.INet_Lobby_CollectDailyBonusRet=} [properties] Properties to set
         */
        function Net_Lobby_CollectDailyBonusRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Lobby_CollectDailyBonusRet TickIndex.
         * @member {number} TickIndex
         * @memberof pb.Net_Lobby_CollectDailyBonusRet
         * @instance
         */
        Net_Lobby_CollectDailyBonusRet.prototype.TickIndex = 0;

        /**
         * Net_Lobby_CollectDailyBonusRet IsBool.
         * @member {boolean} IsBool
         * @memberof pb.Net_Lobby_CollectDailyBonusRet
         * @instance
         */
        Net_Lobby_CollectDailyBonusRet.prototype.IsBool = false;

        /**
         * Creates a new Net_Lobby_CollectDailyBonusRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Lobby_CollectDailyBonusRet
         * @static
         * @param {pb.INet_Lobby_CollectDailyBonusRet=} [properties] Properties to set
         * @returns {pb.Net_Lobby_CollectDailyBonusRet} Net_Lobby_CollectDailyBonusRet instance
         */
        Net_Lobby_CollectDailyBonusRet.create = function create(properties) {
            return new Net_Lobby_CollectDailyBonusRet(properties);
        };

        /**
         * Encodes the specified Net_Lobby_CollectDailyBonusRet message. Does not implicitly {@link pb.Net_Lobby_CollectDailyBonusRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Lobby_CollectDailyBonusRet
         * @static
         * @param {pb.INet_Lobby_CollectDailyBonusRet} message Net_Lobby_CollectDailyBonusRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Lobby_CollectDailyBonusRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TickIndex != null && Object.hasOwnProperty.call(message, "TickIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TickIndex);
            if (message.IsBool != null && Object.hasOwnProperty.call(message, "IsBool"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsBool);
            return writer;
        };

        /**
         * Decodes a Net_Lobby_CollectDailyBonusRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Lobby_CollectDailyBonusRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Lobby_CollectDailyBonusRet} Net_Lobby_CollectDailyBonusRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Lobby_CollectDailyBonusRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Lobby_CollectDailyBonusRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.TickIndex = reader.int32();
                        break;
                    }
                case 2: {
                        message.IsBool = reader.bool();
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
         * Gets the default type url for Net_Lobby_CollectDailyBonusRet
         * @function getTypeUrl
         * @memberof pb.Net_Lobby_CollectDailyBonusRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Lobby_CollectDailyBonusRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Lobby_CollectDailyBonusRet";
        };

        return Net_Lobby_CollectDailyBonusRet;
    })();

    pb.Net_Login_ErrorRet = (function() {

        /**
         * Properties of a Net_Login_ErrorRet.
         * @memberof pb
         * @interface INet_Login_ErrorRet
         * @property {number|null} [ErrorNum] Net_Login_ErrorRet ErrorNum
         * @property {string|null} [ErrorStr] Net_Login_ErrorRet ErrorStr
         */

        /**
         * Constructs a new Net_Login_ErrorRet.
         * @memberof pb
         * @classdesc Represents a Net_Login_ErrorRet.
         * @implements INet_Login_ErrorRet
         * @constructor
         * @param {pb.INet_Login_ErrorRet=} [properties] Properties to set
         */
        function Net_Login_ErrorRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Login_ErrorRet ErrorNum.
         * @member {number} ErrorNum
         * @memberof pb.Net_Login_ErrorRet
         * @instance
         */
        Net_Login_ErrorRet.prototype.ErrorNum = 0;

        /**
         * Net_Login_ErrorRet ErrorStr.
         * @member {string} ErrorStr
         * @memberof pb.Net_Login_ErrorRet
         * @instance
         */
        Net_Login_ErrorRet.prototype.ErrorStr = "";

        /**
         * Creates a new Net_Login_ErrorRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Login_ErrorRet
         * @static
         * @param {pb.INet_Login_ErrorRet=} [properties] Properties to set
         * @returns {pb.Net_Login_ErrorRet} Net_Login_ErrorRet instance
         */
        Net_Login_ErrorRet.create = function create(properties) {
            return new Net_Login_ErrorRet(properties);
        };

        /**
         * Encodes the specified Net_Login_ErrorRet message. Does not implicitly {@link pb.Net_Login_ErrorRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Login_ErrorRet
         * @static
         * @param {pb.INet_Login_ErrorRet} message Net_Login_ErrorRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Login_ErrorRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ErrorNum != null && Object.hasOwnProperty.call(message, "ErrorNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ErrorNum);
            if (message.ErrorStr != null && Object.hasOwnProperty.call(message, "ErrorStr"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ErrorStr);
            return writer;
        };

        /**
         * Decodes a Net_Login_ErrorRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Login_ErrorRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Login_ErrorRet} Net_Login_ErrorRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Login_ErrorRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Login_ErrorRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ErrorNum = reader.int32();
                        break;
                    }
                case 2: {
                        message.ErrorStr = reader.string();
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
         * Gets the default type url for Net_Login_ErrorRet
         * @function getTypeUrl
         * @memberof pb.Net_Login_ErrorRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Login_ErrorRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Login_ErrorRet";
        };

        return Net_Login_ErrorRet;
    })();

    pb.Net_Login_LoginReq = (function() {

        /**
         * Properties of a Net_Login_LoginReq.
         * @memberof pb
         * @interface INet_Login_LoginReq
         * @property {string|null} [AuthToken] Net_Login_LoginReq AuthToken
         * @property {string|null} [DeviceId] Net_Login_LoginReq DeviceId
         * @property {string|null} [Package] Net_Login_LoginReq Package
         * @property {string|null} [Version] Net_Login_LoginReq Version
         * @property {string|null} [HotVersion] Net_Login_LoginReq HotVersion
         * @property {string|null} [DeviceModel] Net_Login_LoginReq DeviceModel
         * @property {string|null} [SysVersion] Net_Login_LoginReq SysVersion
         */

        /**
         * Constructs a new Net_Login_LoginReq.
         * @memberof pb
         * @classdesc Represents a Net_Login_LoginReq.
         * @implements INet_Login_LoginReq
         * @constructor
         * @param {pb.INet_Login_LoginReq=} [properties] Properties to set
         */
        function Net_Login_LoginReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Login_LoginReq AuthToken.
         * @member {string} AuthToken
         * @memberof pb.Net_Login_LoginReq
         * @instance
         */
        Net_Login_LoginReq.prototype.AuthToken = "";

        /**
         * Net_Login_LoginReq DeviceId.
         * @member {string} DeviceId
         * @memberof pb.Net_Login_LoginReq
         * @instance
         */
        Net_Login_LoginReq.prototype.DeviceId = "";

        /**
         * Net_Login_LoginReq Package.
         * @member {string} Package
         * @memberof pb.Net_Login_LoginReq
         * @instance
         */
        Net_Login_LoginReq.prototype.Package = "";

        /**
         * Net_Login_LoginReq Version.
         * @member {string} Version
         * @memberof pb.Net_Login_LoginReq
         * @instance
         */
        Net_Login_LoginReq.prototype.Version = "";

        /**
         * Net_Login_LoginReq HotVersion.
         * @member {string} HotVersion
         * @memberof pb.Net_Login_LoginReq
         * @instance
         */
        Net_Login_LoginReq.prototype.HotVersion = "";

        /**
         * Net_Login_LoginReq DeviceModel.
         * @member {string} DeviceModel
         * @memberof pb.Net_Login_LoginReq
         * @instance
         */
        Net_Login_LoginReq.prototype.DeviceModel = "";

        /**
         * Net_Login_LoginReq SysVersion.
         * @member {string} SysVersion
         * @memberof pb.Net_Login_LoginReq
         * @instance
         */
        Net_Login_LoginReq.prototype.SysVersion = "";

        /**
         * Creates a new Net_Login_LoginReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Login_LoginReq
         * @static
         * @param {pb.INet_Login_LoginReq=} [properties] Properties to set
         * @returns {pb.Net_Login_LoginReq} Net_Login_LoginReq instance
         */
        Net_Login_LoginReq.create = function create(properties) {
            return new Net_Login_LoginReq(properties);
        };

        /**
         * Encodes the specified Net_Login_LoginReq message. Does not implicitly {@link pb.Net_Login_LoginReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Login_LoginReq
         * @static
         * @param {pb.INet_Login_LoginReq} message Net_Login_LoginReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Login_LoginReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AuthToken != null && Object.hasOwnProperty.call(message, "AuthToken"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.AuthToken);
            if (message.DeviceId != null && Object.hasOwnProperty.call(message, "DeviceId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.DeviceId);
            if (message.Package != null && Object.hasOwnProperty.call(message, "Package"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Package);
            if (message.Version != null && Object.hasOwnProperty.call(message, "Version"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Version);
            if (message.HotVersion != null && Object.hasOwnProperty.call(message, "HotVersion"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.HotVersion);
            if (message.DeviceModel != null && Object.hasOwnProperty.call(message, "DeviceModel"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.DeviceModel);
            if (message.SysVersion != null && Object.hasOwnProperty.call(message, "SysVersion"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.SysVersion);
            return writer;
        };

        /**
         * Decodes a Net_Login_LoginReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Login_LoginReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Login_LoginReq} Net_Login_LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Login_LoginReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Login_LoginReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.AuthToken = reader.string();
                        break;
                    }
                case 2: {
                        message.DeviceId = reader.string();
                        break;
                    }
                case 3: {
                        message.Package = reader.string();
                        break;
                    }
                case 4: {
                        message.Version = reader.string();
                        break;
                    }
                case 5: {
                        message.HotVersion = reader.string();
                        break;
                    }
                case 6: {
                        message.DeviceModel = reader.string();
                        break;
                    }
                case 7: {
                        message.SysVersion = reader.string();
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
         * Gets the default type url for Net_Login_LoginReq
         * @function getTypeUrl
         * @memberof pb.Net_Login_LoginReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Login_LoginReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Login_LoginReq";
        };

        return Net_Login_LoginReq;
    })();

    pb.Net_Login_LoginRet = (function() {

        /**
         * Properties of a Net_Login_LoginRet.
         * @memberof pb
         * @interface INet_Login_LoginRet
         * @property {number|null} [Ret] Net_Login_LoginRet Ret
         * @property {number|Long|null} [ServerTime] Net_Login_LoginRet ServerTime
         * @property {string|null} [Credential] Net_Login_LoginRet Credential
         * @property {number|null} [DifferentDevice] Net_Login_LoginRet DifferentDevice
         * @property {boolean|null} [IsFirstLogin] Net_Login_LoginRet IsFirstLogin
         * @property {pb.IBase_User_GameUserInfo|null} [GameUserInfo] Net_Login_LoginRet GameUserInfo
         */

        /**
         * Constructs a new Net_Login_LoginRet.
         * @memberof pb
         * @classdesc Represents a Net_Login_LoginRet.
         * @implements INet_Login_LoginRet
         * @constructor
         * @param {pb.INet_Login_LoginRet=} [properties] Properties to set
         */
        function Net_Login_LoginRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Login_LoginRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Login_LoginRet
         * @instance
         */
        Net_Login_LoginRet.prototype.Ret = 0;

        /**
         * Net_Login_LoginRet ServerTime.
         * @member {number|Long} ServerTime
         * @memberof pb.Net_Login_LoginRet
         * @instance
         */
        Net_Login_LoginRet.prototype.ServerTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Net_Login_LoginRet Credential.
         * @member {string} Credential
         * @memberof pb.Net_Login_LoginRet
         * @instance
         */
        Net_Login_LoginRet.prototype.Credential = "";

        /**
         * Net_Login_LoginRet DifferentDevice.
         * @member {number} DifferentDevice
         * @memberof pb.Net_Login_LoginRet
         * @instance
         */
        Net_Login_LoginRet.prototype.DifferentDevice = 0;

        /**
         * Net_Login_LoginRet IsFirstLogin.
         * @member {boolean} IsFirstLogin
         * @memberof pb.Net_Login_LoginRet
         * @instance
         */
        Net_Login_LoginRet.prototype.IsFirstLogin = false;

        /**
         * Net_Login_LoginRet GameUserInfo.
         * @member {pb.IBase_User_GameUserInfo|null|undefined} GameUserInfo
         * @memberof pb.Net_Login_LoginRet
         * @instance
         */
        Net_Login_LoginRet.prototype.GameUserInfo = null;

        /**
         * Creates a new Net_Login_LoginRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Login_LoginRet
         * @static
         * @param {pb.INet_Login_LoginRet=} [properties] Properties to set
         * @returns {pb.Net_Login_LoginRet} Net_Login_LoginRet instance
         */
        Net_Login_LoginRet.create = function create(properties) {
            return new Net_Login_LoginRet(properties);
        };

        /**
         * Encodes the specified Net_Login_LoginRet message. Does not implicitly {@link pb.Net_Login_LoginRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Login_LoginRet
         * @static
         * @param {pb.INet_Login_LoginRet} message Net_Login_LoginRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Login_LoginRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.ServerTime != null && Object.hasOwnProperty.call(message, "ServerTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.ServerTime);
            if (message.Credential != null && Object.hasOwnProperty.call(message, "Credential"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Credential);
            if (message.DifferentDevice != null && Object.hasOwnProperty.call(message, "DifferentDevice"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.DifferentDevice);
            if (message.IsFirstLogin != null && Object.hasOwnProperty.call(message, "IsFirstLogin"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.IsFirstLogin);
            if (message.GameUserInfo != null && Object.hasOwnProperty.call(message, "GameUserInfo"))
                $root.pb.Base_User_GameUserInfo.encode(message.GameUserInfo, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Net_Login_LoginRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Login_LoginRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Login_LoginRet} Net_Login_LoginRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Login_LoginRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Login_LoginRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.ServerTime = reader.int64();
                        break;
                    }
                case 3: {
                        message.Credential = reader.string();
                        break;
                    }
                case 4: {
                        message.DifferentDevice = reader.int32();
                        break;
                    }
                case 5: {
                        message.IsFirstLogin = reader.bool();
                        break;
                    }
                case 8: {
                        message.GameUserInfo = $root.pb.Base_User_GameUserInfo.decode(reader, reader.uint32());
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
         * Gets the default type url for Net_Login_LoginRet
         * @function getTypeUrl
         * @memberof pb.Net_Login_LoginRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Login_LoginRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Login_LoginRet";
        };

        return Net_Login_LoginRet;
    })();

    pb.Net_Login_KeepAliveReq = (function() {

        /**
         * Properties of a Net_Login_KeepAliveReq.
         * @memberof pb
         * @interface INet_Login_KeepAliveReq
         */

        /**
         * Constructs a new Net_Login_KeepAliveReq.
         * @memberof pb
         * @classdesc Represents a Net_Login_KeepAliveReq.
         * @implements INet_Login_KeepAliveReq
         * @constructor
         * @param {pb.INet_Login_KeepAliveReq=} [properties] Properties to set
         */
        function Net_Login_KeepAliveReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Login_KeepAliveReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Login_KeepAliveReq
         * @static
         * @param {pb.INet_Login_KeepAliveReq=} [properties] Properties to set
         * @returns {pb.Net_Login_KeepAliveReq} Net_Login_KeepAliveReq instance
         */
        Net_Login_KeepAliveReq.create = function create(properties) {
            return new Net_Login_KeepAliveReq(properties);
        };

        /**
         * Encodes the specified Net_Login_KeepAliveReq message. Does not implicitly {@link pb.Net_Login_KeepAliveReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Login_KeepAliveReq
         * @static
         * @param {pb.INet_Login_KeepAliveReq} message Net_Login_KeepAliveReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Login_KeepAliveReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Login_KeepAliveReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Login_KeepAliveReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Login_KeepAliveReq} Net_Login_KeepAliveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Login_KeepAliveReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Login_KeepAliveReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Login_KeepAliveReq
         * @function getTypeUrl
         * @memberof pb.Net_Login_KeepAliveReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Login_KeepAliveReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Login_KeepAliveReq";
        };

        return Net_Login_KeepAliveReq;
    })();

    pb.Net_Login_KeepAliveRet = (function() {

        /**
         * Properties of a Net_Login_KeepAliveRet.
         * @memberof pb
         * @interface INet_Login_KeepAliveRet
         * @property {number|null} [Coins] Net_Login_KeepAliveRet Coins
         * @property {number|Long|null} [CurrentServerTime] Net_Login_KeepAliveRet CurrentServerTime
         */

        /**
         * Constructs a new Net_Login_KeepAliveRet.
         * @memberof pb
         * @classdesc Represents a Net_Login_KeepAliveRet.
         * @implements INet_Login_KeepAliveRet
         * @constructor
         * @param {pb.INet_Login_KeepAliveRet=} [properties] Properties to set
         */
        function Net_Login_KeepAliveRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Login_KeepAliveRet Coins.
         * @member {number} Coins
         * @memberof pb.Net_Login_KeepAliveRet
         * @instance
         */
        Net_Login_KeepAliveRet.prototype.Coins = 0;

        /**
         * Net_Login_KeepAliveRet CurrentServerTime.
         * @member {number|Long} CurrentServerTime
         * @memberof pb.Net_Login_KeepAliveRet
         * @instance
         */
        Net_Login_KeepAliveRet.prototype.CurrentServerTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Net_Login_KeepAliveRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Login_KeepAliveRet
         * @static
         * @param {pb.INet_Login_KeepAliveRet=} [properties] Properties to set
         * @returns {pb.Net_Login_KeepAliveRet} Net_Login_KeepAliveRet instance
         */
        Net_Login_KeepAliveRet.create = function create(properties) {
            return new Net_Login_KeepAliveRet(properties);
        };

        /**
         * Encodes the specified Net_Login_KeepAliveRet message. Does not implicitly {@link pb.Net_Login_KeepAliveRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Login_KeepAliveRet
         * @static
         * @param {pb.INet_Login_KeepAliveRet} message Net_Login_KeepAliveRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Login_KeepAliveRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Coins != null && Object.hasOwnProperty.call(message, "Coins"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Coins);
            if (message.CurrentServerTime != null && Object.hasOwnProperty.call(message, "CurrentServerTime"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.CurrentServerTime);
            return writer;
        };

        /**
         * Decodes a Net_Login_KeepAliveRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Login_KeepAliveRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Login_KeepAliveRet} Net_Login_KeepAliveRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Login_KeepAliveRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Login_KeepAliveRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Coins = reader.int32();
                        break;
                    }
                case 2: {
                        message.CurrentServerTime = reader.int64();
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
         * Gets the default type url for Net_Login_KeepAliveRet
         * @function getTypeUrl
         * @memberof pb.Net_Login_KeepAliveRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Login_KeepAliveRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Login_KeepAliveRet";
        };

        return Net_Login_KeepAliveRet;
    })();

    pb.Net_Login_ReconnectReq = (function() {

        /**
         * Properties of a Net_Login_ReconnectReq.
         * @memberof pb
         * @interface INet_Login_ReconnectReq
         * @property {number|null} [ThemeId] Net_Login_ReconnectReq ThemeId
         * @property {boolean|null} [Quest] Net_Login_ReconnectReq Quest
         * @property {boolean|null} [NormalQuest] Net_Login_ReconnectReq NormalQuest
         */

        /**
         * Constructs a new Net_Login_ReconnectReq.
         * @memberof pb
         * @classdesc Represents a Net_Login_ReconnectReq.
         * @implements INet_Login_ReconnectReq
         * @constructor
         * @param {pb.INet_Login_ReconnectReq=} [properties] Properties to set
         */
        function Net_Login_ReconnectReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Login_ReconnectReq ThemeId.
         * @member {number} ThemeId
         * @memberof pb.Net_Login_ReconnectReq
         * @instance
         */
        Net_Login_ReconnectReq.prototype.ThemeId = 0;

        /**
         * Net_Login_ReconnectReq Quest.
         * @member {boolean} Quest
         * @memberof pb.Net_Login_ReconnectReq
         * @instance
         */
        Net_Login_ReconnectReq.prototype.Quest = false;

        /**
         * Net_Login_ReconnectReq NormalQuest.
         * @member {boolean} NormalQuest
         * @memberof pb.Net_Login_ReconnectReq
         * @instance
         */
        Net_Login_ReconnectReq.prototype.NormalQuest = false;

        /**
         * Creates a new Net_Login_ReconnectReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Login_ReconnectReq
         * @static
         * @param {pb.INet_Login_ReconnectReq=} [properties] Properties to set
         * @returns {pb.Net_Login_ReconnectReq} Net_Login_ReconnectReq instance
         */
        Net_Login_ReconnectReq.create = function create(properties) {
            return new Net_Login_ReconnectReq(properties);
        };

        /**
         * Encodes the specified Net_Login_ReconnectReq message. Does not implicitly {@link pb.Net_Login_ReconnectReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Login_ReconnectReq
         * @static
         * @param {pb.INet_Login_ReconnectReq} message Net_Login_ReconnectReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Login_ReconnectReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ThemeId != null && Object.hasOwnProperty.call(message, "ThemeId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ThemeId);
            if (message.Quest != null && Object.hasOwnProperty.call(message, "Quest"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.Quest);
            if (message.NormalQuest != null && Object.hasOwnProperty.call(message, "NormalQuest"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.NormalQuest);
            return writer;
        };

        /**
         * Decodes a Net_Login_ReconnectReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Login_ReconnectReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Login_ReconnectReq} Net_Login_ReconnectReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Login_ReconnectReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Login_ReconnectReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.ThemeId = reader.int32();
                        break;
                    }
                case 3: {
                        message.Quest = reader.bool();
                        break;
                    }
                case 4: {
                        message.NormalQuest = reader.bool();
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
         * Gets the default type url for Net_Login_ReconnectReq
         * @function getTypeUrl
         * @memberof pb.Net_Login_ReconnectReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Login_ReconnectReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Login_ReconnectReq";
        };

        return Net_Login_ReconnectReq;
    })();

    pb.Net_Login_ReconnectRet = (function() {

        /**
         * Properties of a Net_Login_ReconnectRet.
         * @memberof pb
         * @interface INet_Login_ReconnectRet
         * @property {number|null} [Ret] Net_Login_ReconnectRet Ret
         * @property {pb.IBase_User_GameUserInfo|null} [GameUserInfo] Net_Login_ReconnectRet GameUserInfo
         */

        /**
         * Constructs a new Net_Login_ReconnectRet.
         * @memberof pb
         * @classdesc Represents a Net_Login_ReconnectRet.
         * @implements INet_Login_ReconnectRet
         * @constructor
         * @param {pb.INet_Login_ReconnectRet=} [properties] Properties to set
         */
        function Net_Login_ReconnectRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Login_ReconnectRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Login_ReconnectRet
         * @instance
         */
        Net_Login_ReconnectRet.prototype.Ret = 0;

        /**
         * Net_Login_ReconnectRet GameUserInfo.
         * @member {pb.IBase_User_GameUserInfo|null|undefined} GameUserInfo
         * @memberof pb.Net_Login_ReconnectRet
         * @instance
         */
        Net_Login_ReconnectRet.prototype.GameUserInfo = null;

        /**
         * Creates a new Net_Login_ReconnectRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Login_ReconnectRet
         * @static
         * @param {pb.INet_Login_ReconnectRet=} [properties] Properties to set
         * @returns {pb.Net_Login_ReconnectRet} Net_Login_ReconnectRet instance
         */
        Net_Login_ReconnectRet.create = function create(properties) {
            return new Net_Login_ReconnectRet(properties);
        };

        /**
         * Encodes the specified Net_Login_ReconnectRet message. Does not implicitly {@link pb.Net_Login_ReconnectRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Login_ReconnectRet
         * @static
         * @param {pb.INet_Login_ReconnectRet} message Net_Login_ReconnectRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Login_ReconnectRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.GameUserInfo != null && Object.hasOwnProperty.call(message, "GameUserInfo"))
                $root.pb.Base_User_GameUserInfo.encode(message.GameUserInfo, writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Net_Login_ReconnectRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Login_ReconnectRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Login_ReconnectRet} Net_Login_ReconnectRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Login_ReconnectRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Login_ReconnectRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 8: {
                        message.GameUserInfo = $root.pb.Base_User_GameUserInfo.decode(reader, reader.uint32());
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
         * Gets the default type url for Net_Login_ReconnectRet
         * @function getTypeUrl
         * @memberof pb.Net_Login_ReconnectRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Login_ReconnectRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Login_ReconnectRet";
        };

        return Net_Login_ReconnectRet;
    })();

    pb.Net_Login_MultiUserLoginRet = (function() {

        /**
         * Properties of a Net_Login_MultiUserLoginRet.
         * @memberof pb
         * @interface INet_Login_MultiUserLoginRet
         * @property {string|null} [LoginAddress] Net_Login_MultiUserLoginRet LoginAddress
         */

        /**
         * Constructs a new Net_Login_MultiUserLoginRet.
         * @memberof pb
         * @classdesc Represents a Net_Login_MultiUserLoginRet.
         * @implements INet_Login_MultiUserLoginRet
         * @constructor
         * @param {pb.INet_Login_MultiUserLoginRet=} [properties] Properties to set
         */
        function Net_Login_MultiUserLoginRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Login_MultiUserLoginRet LoginAddress.
         * @member {string} LoginAddress
         * @memberof pb.Net_Login_MultiUserLoginRet
         * @instance
         */
        Net_Login_MultiUserLoginRet.prototype.LoginAddress = "";

        /**
         * Creates a new Net_Login_MultiUserLoginRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Login_MultiUserLoginRet
         * @static
         * @param {pb.INet_Login_MultiUserLoginRet=} [properties] Properties to set
         * @returns {pb.Net_Login_MultiUserLoginRet} Net_Login_MultiUserLoginRet instance
         */
        Net_Login_MultiUserLoginRet.create = function create(properties) {
            return new Net_Login_MultiUserLoginRet(properties);
        };

        /**
         * Encodes the specified Net_Login_MultiUserLoginRet message. Does not implicitly {@link pb.Net_Login_MultiUserLoginRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Login_MultiUserLoginRet
         * @static
         * @param {pb.INet_Login_MultiUserLoginRet} message Net_Login_MultiUserLoginRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Login_MultiUserLoginRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.LoginAddress != null && Object.hasOwnProperty.call(message, "LoginAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.LoginAddress);
            return writer;
        };

        /**
         * Decodes a Net_Login_MultiUserLoginRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Login_MultiUserLoginRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Login_MultiUserLoginRet} Net_Login_MultiUserLoginRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Login_MultiUserLoginRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Login_MultiUserLoginRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.LoginAddress = reader.string();
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
         * Gets the default type url for Net_Login_MultiUserLoginRet
         * @function getTypeUrl
         * @memberof pb.Net_Login_MultiUserLoginRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Login_MultiUserLoginRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Login_MultiUserLoginRet";
        };

        return Net_Login_MultiUserLoginRet;
    })();

    pb.Net_Login_LogoutReq = (function() {

        /**
         * Properties of a Net_Login_LogoutReq.
         * @memberof pb
         * @interface INet_Login_LogoutReq
         */

        /**
         * Constructs a new Net_Login_LogoutReq.
         * @memberof pb
         * @classdesc Represents a Net_Login_LogoutReq.
         * @implements INet_Login_LogoutReq
         * @constructor
         * @param {pb.INet_Login_LogoutReq=} [properties] Properties to set
         */
        function Net_Login_LogoutReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Login_LogoutReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Login_LogoutReq
         * @static
         * @param {pb.INet_Login_LogoutReq=} [properties] Properties to set
         * @returns {pb.Net_Login_LogoutReq} Net_Login_LogoutReq instance
         */
        Net_Login_LogoutReq.create = function create(properties) {
            return new Net_Login_LogoutReq(properties);
        };

        /**
         * Encodes the specified Net_Login_LogoutReq message. Does not implicitly {@link pb.Net_Login_LogoutReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Login_LogoutReq
         * @static
         * @param {pb.INet_Login_LogoutReq} message Net_Login_LogoutReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Login_LogoutReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Login_LogoutReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Login_LogoutReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Login_LogoutReq} Net_Login_LogoutReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Login_LogoutReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Login_LogoutReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Login_LogoutReq
         * @function getTypeUrl
         * @memberof pb.Net_Login_LogoutReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Login_LogoutReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Login_LogoutReq";
        };

        return Net_Login_LogoutReq;
    })();

    pb.Net_Login_LogoutRet = (function() {

        /**
         * Properties of a Net_Login_LogoutRet.
         * @memberof pb
         * @interface INet_Login_LogoutRet
         */

        /**
         * Constructs a new Net_Login_LogoutRet.
         * @memberof pb
         * @classdesc Represents a Net_Login_LogoutRet.
         * @implements INet_Login_LogoutRet
         * @constructor
         * @param {pb.INet_Login_LogoutRet=} [properties] Properties to set
         */
        function Net_Login_LogoutRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Login_LogoutRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Login_LogoutRet
         * @static
         * @param {pb.INet_Login_LogoutRet=} [properties] Properties to set
         * @returns {pb.Net_Login_LogoutRet} Net_Login_LogoutRet instance
         */
        Net_Login_LogoutRet.create = function create(properties) {
            return new Net_Login_LogoutRet(properties);
        };

        /**
         * Encodes the specified Net_Login_LogoutRet message. Does not implicitly {@link pb.Net_Login_LogoutRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Login_LogoutRet
         * @static
         * @param {pb.INet_Login_LogoutRet} message Net_Login_LogoutRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Login_LogoutRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Login_LogoutRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Login_LogoutRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Login_LogoutRet} Net_Login_LogoutRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Login_LogoutRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Login_LogoutRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Login_LogoutRet
         * @function getTypeUrl
         * @memberof pb.Net_Login_LogoutRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Login_LogoutRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Login_LogoutRet";
        };

        return Net_Login_LogoutRet;
    })();

    /**
     * ECurrency enum.
     * @name pb.ECurrency
     * @enum {number}
     * @property {number} Golds=0 Golds value
     * @property {number} Coins=1 Coins value
     */
    pb.ECurrency = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Golds"] = 0;
        values[valuesById[1] = "Coins"] = 1;
        return values;
    })();

    pb.Base_User_GameUserInfo = (function() {

        /**
         * Properties of a Base_User_GameUserInfo.
         * @memberof pb
         * @interface IBase_User_GameUserInfo
         * @property {string|null} [UserId] Base_User_GameUserInfo UserId
         * @property {string|null} [AreaId] Base_User_GameUserInfo AreaId
         * @property {pb.IBase_User_RoleInfo|null} [RoleInfo] Base_User_GameUserInfo RoleInfo
         * @property {pb.IBase_Item_ItemInfo|null} [ItemInfo] Base_User_GameUserInfo ItemInfo
         * @property {pb.IBase_Player_MoneyInfo|null} [MoneyInfo] Base_User_GameUserInfo MoneyInfo
         * @property {pb.IBase_Backpack_BackpackInfo|null} [BackpackInfo] Base_User_GameUserInfo BackpackInfo
         * @property {pb.IBase_Player_LoginBonusInfo|null} [LoginBonusInfo] Base_User_GameUserInfo LoginBonusInfo
         * @property {pb.IBase_Player_DailyBonusInfo|null} [DailyBonusInfo] Base_User_GameUserInfo DailyBonusInfo
         * @property {pb.IBase_Vip_VipInfo|null} [VipInfo] Base_User_GameUserInfo VipInfo
         * @property {pb.IBase_Activity_ActivityInfo|null} [ActivityInfo] Base_User_GameUserInfo ActivityInfo
         * @property {pb.IBase_Player_ThemeInfo|null} [ThemeInfo] Base_User_GameUserInfo ThemeInfo
         * @property {pb.IBase_Shop_ShopInfo|null} [ShopInfo] Base_User_GameUserInfo ShopInfo
         * @property {pb.IBase_Inbox_InboxInfo|null} [InboxInfo] Base_User_GameUserInfo InboxInfo
         * @property {pb.IBase_Task_TaskInfo|null} [TaskInfo] Base_User_GameUserInfo TaskInfo
         * @property {pb.IBase_Task_CupTaskInfo|null} [CupTaskInfo] Base_User_GameUserInfo CupTaskInfo
         * @property {pb.IBase_Guide_GuideInfo|null} [GuideInfo] Base_User_GameUserInfo GuideInfo
         */

        /**
         * Constructs a new Base_User_GameUserInfo.
         * @memberof pb
         * @classdesc Represents a Base_User_GameUserInfo.
         * @implements IBase_User_GameUserInfo
         * @constructor
         * @param {pb.IBase_User_GameUserInfo=} [properties] Properties to set
         */
        function Base_User_GameUserInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_User_GameUserInfo UserId.
         * @member {string} UserId
         * @memberof pb.Base_User_GameUserInfo
         * @instance
         */
        Base_User_GameUserInfo.prototype.UserId = "";

        /**
         * Base_User_GameUserInfo AreaId.
         * @member {string} AreaId
         * @memberof pb.Base_User_GameUserInfo
         * @instance
         */
        Base_User_GameUserInfo.prototype.AreaId = "";

        /**
         * Base_User_GameUserInfo RoleInfo.
         * @member {pb.IBase_User_RoleInfo|null|undefined} RoleInfo
         * @memberof pb.Base_User_GameUserInfo
         * @instance
         */
        Base_User_GameUserInfo.prototype.RoleInfo = null;

        /**
         * Base_User_GameUserInfo ItemInfo.
         * @member {pb.IBase_Item_ItemInfo|null|undefined} ItemInfo
         * @memberof pb.Base_User_GameUserInfo
         * @instance
         */
        Base_User_GameUserInfo.prototype.ItemInfo = null;

        /**
         * Base_User_GameUserInfo MoneyInfo.
         * @member {pb.IBase_Player_MoneyInfo|null|undefined} MoneyInfo
         * @memberof pb.Base_User_GameUserInfo
         * @instance
         */
        Base_User_GameUserInfo.prototype.MoneyInfo = null;

        /**
         * Base_User_GameUserInfo BackpackInfo.
         * @member {pb.IBase_Backpack_BackpackInfo|null|undefined} BackpackInfo
         * @memberof pb.Base_User_GameUserInfo
         * @instance
         */
        Base_User_GameUserInfo.prototype.BackpackInfo = null;

        /**
         * Base_User_GameUserInfo LoginBonusInfo.
         * @member {pb.IBase_Player_LoginBonusInfo|null|undefined} LoginBonusInfo
         * @memberof pb.Base_User_GameUserInfo
         * @instance
         */
        Base_User_GameUserInfo.prototype.LoginBonusInfo = null;

        /**
         * Base_User_GameUserInfo DailyBonusInfo.
         * @member {pb.IBase_Player_DailyBonusInfo|null|undefined} DailyBonusInfo
         * @memberof pb.Base_User_GameUserInfo
         * @instance
         */
        Base_User_GameUserInfo.prototype.DailyBonusInfo = null;

        /**
         * Base_User_GameUserInfo VipInfo.
         * @member {pb.IBase_Vip_VipInfo|null|undefined} VipInfo
         * @memberof pb.Base_User_GameUserInfo
         * @instance
         */
        Base_User_GameUserInfo.prototype.VipInfo = null;

        /**
         * Base_User_GameUserInfo ActivityInfo.
         * @member {pb.IBase_Activity_ActivityInfo|null|undefined} ActivityInfo
         * @memberof pb.Base_User_GameUserInfo
         * @instance
         */
        Base_User_GameUserInfo.prototype.ActivityInfo = null;

        /**
         * Base_User_GameUserInfo ThemeInfo.
         * @member {pb.IBase_Player_ThemeInfo|null|undefined} ThemeInfo
         * @memberof pb.Base_User_GameUserInfo
         * @instance
         */
        Base_User_GameUserInfo.prototype.ThemeInfo = null;

        /**
         * Base_User_GameUserInfo ShopInfo.
         * @member {pb.IBase_Shop_ShopInfo|null|undefined} ShopInfo
         * @memberof pb.Base_User_GameUserInfo
         * @instance
         */
        Base_User_GameUserInfo.prototype.ShopInfo = null;

        /**
         * Base_User_GameUserInfo InboxInfo.
         * @member {pb.IBase_Inbox_InboxInfo|null|undefined} InboxInfo
         * @memberof pb.Base_User_GameUserInfo
         * @instance
         */
        Base_User_GameUserInfo.prototype.InboxInfo = null;

        /**
         * Base_User_GameUserInfo TaskInfo.
         * @member {pb.IBase_Task_TaskInfo|null|undefined} TaskInfo
         * @memberof pb.Base_User_GameUserInfo
         * @instance
         */
        Base_User_GameUserInfo.prototype.TaskInfo = null;

        /**
         * Base_User_GameUserInfo CupTaskInfo.
         * @member {pb.IBase_Task_CupTaskInfo|null|undefined} CupTaskInfo
         * @memberof pb.Base_User_GameUserInfo
         * @instance
         */
        Base_User_GameUserInfo.prototype.CupTaskInfo = null;

        /**
         * Base_User_GameUserInfo GuideInfo.
         * @member {pb.IBase_Guide_GuideInfo|null|undefined} GuideInfo
         * @memberof pb.Base_User_GameUserInfo
         * @instance
         */
        Base_User_GameUserInfo.prototype.GuideInfo = null;

        /**
         * Creates a new Base_User_GameUserInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_User_GameUserInfo
         * @static
         * @param {pb.IBase_User_GameUserInfo=} [properties] Properties to set
         * @returns {pb.Base_User_GameUserInfo} Base_User_GameUserInfo instance
         */
        Base_User_GameUserInfo.create = function create(properties) {
            return new Base_User_GameUserInfo(properties);
        };

        /**
         * Encodes the specified Base_User_GameUserInfo message. Does not implicitly {@link pb.Base_User_GameUserInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_User_GameUserInfo
         * @static
         * @param {pb.IBase_User_GameUserInfo} message Base_User_GameUserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_User_GameUserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserId);
            if (message.AreaId != null && Object.hasOwnProperty.call(message, "AreaId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.AreaId);
            if (message.RoleInfo != null && Object.hasOwnProperty.call(message, "RoleInfo"))
                $root.pb.Base_User_RoleInfo.encode(message.RoleInfo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.ItemInfo != null && Object.hasOwnProperty.call(message, "ItemInfo"))
                $root.pb.Base_Item_ItemInfo.encode(message.ItemInfo, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.MoneyInfo != null && Object.hasOwnProperty.call(message, "MoneyInfo"))
                $root.pb.Base_Player_MoneyInfo.encode(message.MoneyInfo, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.BackpackInfo != null && Object.hasOwnProperty.call(message, "BackpackInfo"))
                $root.pb.Base_Backpack_BackpackInfo.encode(message.BackpackInfo, writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
            if (message.LoginBonusInfo != null && Object.hasOwnProperty.call(message, "LoginBonusInfo"))
                $root.pb.Base_Player_LoginBonusInfo.encode(message.LoginBonusInfo, writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
            if (message.DailyBonusInfo != null && Object.hasOwnProperty.call(message, "DailyBonusInfo"))
                $root.pb.Base_Player_DailyBonusInfo.encode(message.DailyBonusInfo, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.VipInfo != null && Object.hasOwnProperty.call(message, "VipInfo"))
                $root.pb.Base_Vip_VipInfo.encode(message.VipInfo, writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.ActivityInfo != null && Object.hasOwnProperty.call(message, "ActivityInfo"))
                $root.pb.Base_Activity_ActivityInfo.encode(message.ActivityInfo, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.ThemeInfo != null && Object.hasOwnProperty.call(message, "ThemeInfo"))
                $root.pb.Base_Player_ThemeInfo.encode(message.ThemeInfo, writer.uint32(/* id 16, wireType 2 =*/130).fork()).ldelim();
            if (message.ShopInfo != null && Object.hasOwnProperty.call(message, "ShopInfo"))
                $root.pb.Base_Shop_ShopInfo.encode(message.ShopInfo, writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.InboxInfo != null && Object.hasOwnProperty.call(message, "InboxInfo"))
                $root.pb.Base_Inbox_InboxInfo.encode(message.InboxInfo, writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.TaskInfo != null && Object.hasOwnProperty.call(message, "TaskInfo"))
                $root.pb.Base_Task_TaskInfo.encode(message.TaskInfo, writer.uint32(/* id 20, wireType 2 =*/162).fork()).ldelim();
            if (message.CupTaskInfo != null && Object.hasOwnProperty.call(message, "CupTaskInfo"))
                $root.pb.Base_Task_CupTaskInfo.encode(message.CupTaskInfo, writer.uint32(/* id 21, wireType 2 =*/170).fork()).ldelim();
            if (message.GuideInfo != null && Object.hasOwnProperty.call(message, "GuideInfo"))
                $root.pb.Base_Guide_GuideInfo.encode(message.GuideInfo, writer.uint32(/* id 25, wireType 2 =*/202).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Base_User_GameUserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_User_GameUserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_User_GameUserInfo} Base_User_GameUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_User_GameUserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_User_GameUserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.UserId = reader.string();
                        break;
                    }
                case 2: {
                        message.AreaId = reader.string();
                        break;
                    }
                case 4: {
                        message.RoleInfo = $root.pb.Base_User_RoleInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 5: {
                        message.ItemInfo = $root.pb.Base_Item_ItemInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 10: {
                        message.MoneyInfo = $root.pb.Base_Player_MoneyInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 11: {
                        message.BackpackInfo = $root.pb.Base_Backpack_BackpackInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 12: {
                        message.LoginBonusInfo = $root.pb.Base_Player_LoginBonusInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 13: {
                        message.DailyBonusInfo = $root.pb.Base_Player_DailyBonusInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 14: {
                        message.VipInfo = $root.pb.Base_Vip_VipInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 15: {
                        message.ActivityInfo = $root.pb.Base_Activity_ActivityInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 16: {
                        message.ThemeInfo = $root.pb.Base_Player_ThemeInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 17: {
                        message.ShopInfo = $root.pb.Base_Shop_ShopInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 18: {
                        message.InboxInfo = $root.pb.Base_Inbox_InboxInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 20: {
                        message.TaskInfo = $root.pb.Base_Task_TaskInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 21: {
                        message.CupTaskInfo = $root.pb.Base_Task_CupTaskInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 25: {
                        message.GuideInfo = $root.pb.Base_Guide_GuideInfo.decode(reader, reader.uint32());
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
         * Gets the default type url for Base_User_GameUserInfo
         * @function getTypeUrl
         * @memberof pb.Base_User_GameUserInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_User_GameUserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_User_GameUserInfo";
        };

        return Base_User_GameUserInfo;
    })();

    pb.Base_User_RoleInfo = (function() {

        /**
         * Properties of a Base_User_RoleInfo.
         * @memberof pb
         * @interface IBase_User_RoleInfo
         * @property {string|null} [UserId] Base_User_RoleInfo UserId
         * @property {string|null} [NickName] Base_User_RoleInfo NickName
         * @property {number|null} [Gold] Base_User_RoleInfo Gold
         * @property {number|null} [Coin] Base_User_RoleInfo Coin
         * @property {number|null} [Level] Base_User_RoleInfo Level
         * @property {number|null} [Exp] Base_User_RoleInfo Exp
         * @property {number|null} [ExpLimit] Base_User_RoleInfo ExpLimit
         * @property {number|null} [IsNewPlayer] Base_User_RoleInfo IsNewPlayer
         */

        /**
         * Constructs a new Base_User_RoleInfo.
         * @memberof pb
         * @classdesc Represents a Base_User_RoleInfo.
         * @implements IBase_User_RoleInfo
         * @constructor
         * @param {pb.IBase_User_RoleInfo=} [properties] Properties to set
         */
        function Base_User_RoleInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_User_RoleInfo UserId.
         * @member {string} UserId
         * @memberof pb.Base_User_RoleInfo
         * @instance
         */
        Base_User_RoleInfo.prototype.UserId = "";

        /**
         * Base_User_RoleInfo NickName.
         * @member {string} NickName
         * @memberof pb.Base_User_RoleInfo
         * @instance
         */
        Base_User_RoleInfo.prototype.NickName = "";

        /**
         * Base_User_RoleInfo Gold.
         * @member {number} Gold
         * @memberof pb.Base_User_RoleInfo
         * @instance
         */
        Base_User_RoleInfo.prototype.Gold = 0;

        /**
         * Base_User_RoleInfo Coin.
         * @member {number} Coin
         * @memberof pb.Base_User_RoleInfo
         * @instance
         */
        Base_User_RoleInfo.prototype.Coin = 0;

        /**
         * Base_User_RoleInfo Level.
         * @member {number} Level
         * @memberof pb.Base_User_RoleInfo
         * @instance
         */
        Base_User_RoleInfo.prototype.Level = 0;

        /**
         * Base_User_RoleInfo Exp.
         * @member {number} Exp
         * @memberof pb.Base_User_RoleInfo
         * @instance
         */
        Base_User_RoleInfo.prototype.Exp = 0;

        /**
         * Base_User_RoleInfo ExpLimit.
         * @member {number} ExpLimit
         * @memberof pb.Base_User_RoleInfo
         * @instance
         */
        Base_User_RoleInfo.prototype.ExpLimit = 0;

        /**
         * Base_User_RoleInfo IsNewPlayer.
         * @member {number} IsNewPlayer
         * @memberof pb.Base_User_RoleInfo
         * @instance
         */
        Base_User_RoleInfo.prototype.IsNewPlayer = 0;

        /**
         * Creates a new Base_User_RoleInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_User_RoleInfo
         * @static
         * @param {pb.IBase_User_RoleInfo=} [properties] Properties to set
         * @returns {pb.Base_User_RoleInfo} Base_User_RoleInfo instance
         */
        Base_User_RoleInfo.create = function create(properties) {
            return new Base_User_RoleInfo(properties);
        };

        /**
         * Encodes the specified Base_User_RoleInfo message. Does not implicitly {@link pb.Base_User_RoleInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_User_RoleInfo
         * @static
         * @param {pb.IBase_User_RoleInfo} message Base_User_RoleInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_User_RoleInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserId);
            if (message.NickName != null && Object.hasOwnProperty.call(message, "NickName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.NickName);
            if (message.Gold != null && Object.hasOwnProperty.call(message, "Gold"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Gold);
            if (message.Coin != null && Object.hasOwnProperty.call(message, "Coin"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Coin);
            if (message.Level != null && Object.hasOwnProperty.call(message, "Level"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Level);
            if (message.Exp != null && Object.hasOwnProperty.call(message, "Exp"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.Exp);
            if (message.ExpLimit != null && Object.hasOwnProperty.call(message, "ExpLimit"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.ExpLimit);
            if (message.IsNewPlayer != null && Object.hasOwnProperty.call(message, "IsNewPlayer"))
                writer.uint32(/* id 9, wireType 0 =*/72).int32(message.IsNewPlayer);
            return writer;
        };

        /**
         * Decodes a Base_User_RoleInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_User_RoleInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_User_RoleInfo} Base_User_RoleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_User_RoleInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_User_RoleInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.UserId = reader.string();
                        break;
                    }
                case 2: {
                        message.NickName = reader.string();
                        break;
                    }
                case 3: {
                        message.Gold = reader.int32();
                        break;
                    }
                case 4: {
                        message.Coin = reader.int32();
                        break;
                    }
                case 5: {
                        message.Level = reader.int32();
                        break;
                    }
                case 6: {
                        message.Exp = reader.int32();
                        break;
                    }
                case 7: {
                        message.ExpLimit = reader.int32();
                        break;
                    }
                case 9: {
                        message.IsNewPlayer = reader.int32();
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
         * Gets the default type url for Base_User_RoleInfo
         * @function getTypeUrl
         * @memberof pb.Base_User_RoleInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_User_RoleInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_User_RoleInfo";
        };

        return Base_User_RoleInfo;
    })();

    pb.Net_User_UpdateCurrencyRet = (function() {

        /**
         * Properties of a Net_User_UpdateCurrencyRet.
         * @memberof pb
         * @interface INet_User_UpdateCurrencyRet
         */

        /**
         * Constructs a new Net_User_UpdateCurrencyRet.
         * @memberof pb
         * @classdesc Represents a Net_User_UpdateCurrencyRet.
         * @implements INet_User_UpdateCurrencyRet
         * @constructor
         * @param {pb.INet_User_UpdateCurrencyRet=} [properties] Properties to set
         */
        function Net_User_UpdateCurrencyRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_User_UpdateCurrencyRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_User_UpdateCurrencyRet
         * @static
         * @param {pb.INet_User_UpdateCurrencyRet=} [properties] Properties to set
         * @returns {pb.Net_User_UpdateCurrencyRet} Net_User_UpdateCurrencyRet instance
         */
        Net_User_UpdateCurrencyRet.create = function create(properties) {
            return new Net_User_UpdateCurrencyRet(properties);
        };

        /**
         * Encodes the specified Net_User_UpdateCurrencyRet message. Does not implicitly {@link pb.Net_User_UpdateCurrencyRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_User_UpdateCurrencyRet
         * @static
         * @param {pb.INet_User_UpdateCurrencyRet} message Net_User_UpdateCurrencyRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_User_UpdateCurrencyRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_User_UpdateCurrencyRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_User_UpdateCurrencyRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_User_UpdateCurrencyRet} Net_User_UpdateCurrencyRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_User_UpdateCurrencyRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_User_UpdateCurrencyRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_User_UpdateCurrencyRet
         * @function getTypeUrl
         * @memberof pb.Net_User_UpdateCurrencyRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_User_UpdateCurrencyRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_User_UpdateCurrencyRet";
        };

        return Net_User_UpdateCurrencyRet;
    })();

    pb.Base_Player_LoginBonusInfo = (function() {

        /**
         * Properties of a Base_Player_LoginBonusInfo.
         * @memberof pb
         * @interface IBase_Player_LoginBonusInfo
         * @property {number|null} [CheckIn] Base_Player_LoginBonusInfo CheckIn
         * @property {number|null} [TypeWeek] Base_Player_LoginBonusInfo TypeWeek
         * @property {number|null} [WeeklyCount] Base_Player_LoginBonusInfo WeeklyCount
         * @property {number|null} [MonthlyCount] Base_Player_LoginBonusInfo MonthlyCount
         * @property {Array.<number>|null} [MonthStatus] Base_Player_LoginBonusInfo MonthStatus
         */

        /**
         * Constructs a new Base_Player_LoginBonusInfo.
         * @memberof pb
         * @classdesc Represents a Base_Player_LoginBonusInfo.
         * @implements IBase_Player_LoginBonusInfo
         * @constructor
         * @param {pb.IBase_Player_LoginBonusInfo=} [properties] Properties to set
         */
        function Base_Player_LoginBonusInfo(properties) {
            this.MonthStatus = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Player_LoginBonusInfo CheckIn.
         * @member {number} CheckIn
         * @memberof pb.Base_Player_LoginBonusInfo
         * @instance
         */
        Base_Player_LoginBonusInfo.prototype.CheckIn = 0;

        /**
         * Base_Player_LoginBonusInfo TypeWeek.
         * @member {number} TypeWeek
         * @memberof pb.Base_Player_LoginBonusInfo
         * @instance
         */
        Base_Player_LoginBonusInfo.prototype.TypeWeek = 0;

        /**
         * Base_Player_LoginBonusInfo WeeklyCount.
         * @member {number} WeeklyCount
         * @memberof pb.Base_Player_LoginBonusInfo
         * @instance
         */
        Base_Player_LoginBonusInfo.prototype.WeeklyCount = 0;

        /**
         * Base_Player_LoginBonusInfo MonthlyCount.
         * @member {number} MonthlyCount
         * @memberof pb.Base_Player_LoginBonusInfo
         * @instance
         */
        Base_Player_LoginBonusInfo.prototype.MonthlyCount = 0;

        /**
         * Base_Player_LoginBonusInfo MonthStatus.
         * @member {Array.<number>} MonthStatus
         * @memberof pb.Base_Player_LoginBonusInfo
         * @instance
         */
        Base_Player_LoginBonusInfo.prototype.MonthStatus = $util.emptyArray;

        /**
         * Creates a new Base_Player_LoginBonusInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Player_LoginBonusInfo
         * @static
         * @param {pb.IBase_Player_LoginBonusInfo=} [properties] Properties to set
         * @returns {pb.Base_Player_LoginBonusInfo} Base_Player_LoginBonusInfo instance
         */
        Base_Player_LoginBonusInfo.create = function create(properties) {
            return new Base_Player_LoginBonusInfo(properties);
        };

        /**
         * Encodes the specified Base_Player_LoginBonusInfo message. Does not implicitly {@link pb.Base_Player_LoginBonusInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Player_LoginBonusInfo
         * @static
         * @param {pb.IBase_Player_LoginBonusInfo} message Base_Player_LoginBonusInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Player_LoginBonusInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CheckIn != null && Object.hasOwnProperty.call(message, "CheckIn"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.CheckIn);
            if (message.TypeWeek != null && Object.hasOwnProperty.call(message, "TypeWeek"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.TypeWeek);
            if (message.WeeklyCount != null && Object.hasOwnProperty.call(message, "WeeklyCount"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.WeeklyCount);
            if (message.MonthlyCount != null && Object.hasOwnProperty.call(message, "MonthlyCount"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.MonthlyCount);
            if (message.MonthStatus != null && message.MonthStatus.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.MonthStatus.length; ++i)
                    writer.int32(message.MonthStatus[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a Base_Player_LoginBonusInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Player_LoginBonusInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Player_LoginBonusInfo} Base_Player_LoginBonusInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Player_LoginBonusInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Player_LoginBonusInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.CheckIn = reader.int32();
                        break;
                    }
                case 2: {
                        message.TypeWeek = reader.int32();
                        break;
                    }
                case 3: {
                        message.WeeklyCount = reader.int32();
                        break;
                    }
                case 4: {
                        message.MonthlyCount = reader.int32();
                        break;
                    }
                case 5: {
                        if (!(message.MonthStatus && message.MonthStatus.length))
                            message.MonthStatus = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.MonthStatus.push(reader.int32());
                        } else
                            message.MonthStatus.push(reader.int32());
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
         * Gets the default type url for Base_Player_LoginBonusInfo
         * @function getTypeUrl
         * @memberof pb.Base_Player_LoginBonusInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Player_LoginBonusInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Player_LoginBonusInfo";
        };

        return Base_Player_LoginBonusInfo;
    })();

    pb.Base_Player_ThemeInfo = (function() {

        /**
         * Properties of a Base_Player_ThemeInfo.
         * @memberof pb
         * @interface IBase_Player_ThemeInfo
         */

        /**
         * Constructs a new Base_Player_ThemeInfo.
         * @memberof pb
         * @classdesc Represents a Base_Player_ThemeInfo.
         * @implements IBase_Player_ThemeInfo
         * @constructor
         * @param {pb.IBase_Player_ThemeInfo=} [properties] Properties to set
         */
        function Base_Player_ThemeInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Base_Player_ThemeInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Player_ThemeInfo
         * @static
         * @param {pb.IBase_Player_ThemeInfo=} [properties] Properties to set
         * @returns {pb.Base_Player_ThemeInfo} Base_Player_ThemeInfo instance
         */
        Base_Player_ThemeInfo.create = function create(properties) {
            return new Base_Player_ThemeInfo(properties);
        };

        /**
         * Encodes the specified Base_Player_ThemeInfo message. Does not implicitly {@link pb.Base_Player_ThemeInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Player_ThemeInfo
         * @static
         * @param {pb.IBase_Player_ThemeInfo} message Base_Player_ThemeInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Player_ThemeInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Base_Player_ThemeInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Player_ThemeInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Player_ThemeInfo} Base_Player_ThemeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Player_ThemeInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Player_ThemeInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Base_Player_ThemeInfo
         * @function getTypeUrl
         * @memberof pb.Base_Player_ThemeInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Player_ThemeInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Player_ThemeInfo";
        };

        return Base_Player_ThemeInfo;
    })();

    pb.Base_Player_DailyBonusInfo = (function() {

        /**
         * Properties of a Base_Player_DailyBonusInfo.
         * @memberof pb
         * @interface IBase_Player_DailyBonusInfo
         * @property {Array.<number>|null} [DailyBonusStatus] Base_Player_DailyBonusInfo DailyBonusStatus
         */

        /**
         * Constructs a new Base_Player_DailyBonusInfo.
         * @memberof pb
         * @classdesc Represents a Base_Player_DailyBonusInfo.
         * @implements IBase_Player_DailyBonusInfo
         * @constructor
         * @param {pb.IBase_Player_DailyBonusInfo=} [properties] Properties to set
         */
        function Base_Player_DailyBonusInfo(properties) {
            this.DailyBonusStatus = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Player_DailyBonusInfo DailyBonusStatus.
         * @member {Array.<number>} DailyBonusStatus
         * @memberof pb.Base_Player_DailyBonusInfo
         * @instance
         */
        Base_Player_DailyBonusInfo.prototype.DailyBonusStatus = $util.emptyArray;

        /**
         * Creates a new Base_Player_DailyBonusInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Player_DailyBonusInfo
         * @static
         * @param {pb.IBase_Player_DailyBonusInfo=} [properties] Properties to set
         * @returns {pb.Base_Player_DailyBonusInfo} Base_Player_DailyBonusInfo instance
         */
        Base_Player_DailyBonusInfo.create = function create(properties) {
            return new Base_Player_DailyBonusInfo(properties);
        };

        /**
         * Encodes the specified Base_Player_DailyBonusInfo message. Does not implicitly {@link pb.Base_Player_DailyBonusInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Player_DailyBonusInfo
         * @static
         * @param {pb.IBase_Player_DailyBonusInfo} message Base_Player_DailyBonusInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Player_DailyBonusInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.DailyBonusStatus != null && message.DailyBonusStatus.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.DailyBonusStatus.length; ++i)
                    writer.int32(message.DailyBonusStatus[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a Base_Player_DailyBonusInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Player_DailyBonusInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Player_DailyBonusInfo} Base_Player_DailyBonusInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Player_DailyBonusInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Player_DailyBonusInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.DailyBonusStatus && message.DailyBonusStatus.length))
                            message.DailyBonusStatus = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.DailyBonusStatus.push(reader.int32());
                        } else
                            message.DailyBonusStatus.push(reader.int32());
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
         * Gets the default type url for Base_Player_DailyBonusInfo
         * @function getTypeUrl
         * @memberof pb.Base_Player_DailyBonusInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Player_DailyBonusInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Player_DailyBonusInfo";
        };

        return Base_Player_DailyBonusInfo;
    })();

    pb.Base_Player_PlayerMark = (function() {

        /**
         * Properties of a Base_Player_PlayerMark.
         * @memberof pb
         * @interface IBase_Player_PlayerMark
         * @property {number|null} [AttributeType] Base_Player_PlayerMark AttributeType
         * @property {number|null} [AttributeValue] Base_Player_PlayerMark AttributeValue
         */

        /**
         * Constructs a new Base_Player_PlayerMark.
         * @memberof pb
         * @classdesc Represents a Base_Player_PlayerMark.
         * @implements IBase_Player_PlayerMark
         * @constructor
         * @param {pb.IBase_Player_PlayerMark=} [properties] Properties to set
         */
        function Base_Player_PlayerMark(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Player_PlayerMark AttributeType.
         * @member {number} AttributeType
         * @memberof pb.Base_Player_PlayerMark
         * @instance
         */
        Base_Player_PlayerMark.prototype.AttributeType = 0;

        /**
         * Base_Player_PlayerMark AttributeValue.
         * @member {number} AttributeValue
         * @memberof pb.Base_Player_PlayerMark
         * @instance
         */
        Base_Player_PlayerMark.prototype.AttributeValue = 0;

        /**
         * Creates a new Base_Player_PlayerMark instance using the specified properties.
         * @function create
         * @memberof pb.Base_Player_PlayerMark
         * @static
         * @param {pb.IBase_Player_PlayerMark=} [properties] Properties to set
         * @returns {pb.Base_Player_PlayerMark} Base_Player_PlayerMark instance
         */
        Base_Player_PlayerMark.create = function create(properties) {
            return new Base_Player_PlayerMark(properties);
        };

        /**
         * Encodes the specified Base_Player_PlayerMark message. Does not implicitly {@link pb.Base_Player_PlayerMark.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Player_PlayerMark
         * @static
         * @param {pb.IBase_Player_PlayerMark} message Base_Player_PlayerMark message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Player_PlayerMark.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AttributeType != null && Object.hasOwnProperty.call(message, "AttributeType"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.AttributeType);
            if (message.AttributeValue != null && Object.hasOwnProperty.call(message, "AttributeValue"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.AttributeValue);
            return writer;
        };

        /**
         * Decodes a Base_Player_PlayerMark message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Player_PlayerMark
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Player_PlayerMark} Base_Player_PlayerMark
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Player_PlayerMark.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Player_PlayerMark();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.AttributeType = reader.int32();
                        break;
                    }
                case 2: {
                        message.AttributeValue = reader.int32();
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
         * Gets the default type url for Base_Player_PlayerMark
         * @function getTypeUrl
         * @memberof pb.Base_Player_PlayerMark
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Player_PlayerMark.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Player_PlayerMark";
        };

        return Base_Player_PlayerMark;
    })();

    pb.Base_Player_MoneyInfo = (function() {

        /**
         * Properties of a Base_Player_MoneyInfo.
         * @memberof pb
         * @interface IBase_Player_MoneyInfo
         * @property {number|null} [Gold] Base_Player_MoneyInfo Gold
         * @property {number|null} [GoldBind] Base_Player_MoneyInfo GoldBind
         * @property {number|null} [Coin] Base_Player_MoneyInfo Coin
         * @property {number|null} [CoinBind] Base_Player_MoneyInfo CoinBind
         * @property {number|null} [HolyGrail] Base_Player_MoneyInfo HolyGrail
         * @property {number|null} [LuckyWheelCoin] Base_Player_MoneyInfo LuckyWheelCoin
         */

        /**
         * Constructs a new Base_Player_MoneyInfo.
         * @memberof pb
         * @classdesc Represents a Base_Player_MoneyInfo.
         * @implements IBase_Player_MoneyInfo
         * @constructor
         * @param {pb.IBase_Player_MoneyInfo=} [properties] Properties to set
         */
        function Base_Player_MoneyInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Player_MoneyInfo Gold.
         * @member {number} Gold
         * @memberof pb.Base_Player_MoneyInfo
         * @instance
         */
        Base_Player_MoneyInfo.prototype.Gold = 0;

        /**
         * Base_Player_MoneyInfo GoldBind.
         * @member {number} GoldBind
         * @memberof pb.Base_Player_MoneyInfo
         * @instance
         */
        Base_Player_MoneyInfo.prototype.GoldBind = 0;

        /**
         * Base_Player_MoneyInfo Coin.
         * @member {number} Coin
         * @memberof pb.Base_Player_MoneyInfo
         * @instance
         */
        Base_Player_MoneyInfo.prototype.Coin = 0;

        /**
         * Base_Player_MoneyInfo CoinBind.
         * @member {number} CoinBind
         * @memberof pb.Base_Player_MoneyInfo
         * @instance
         */
        Base_Player_MoneyInfo.prototype.CoinBind = 0;

        /**
         * Base_Player_MoneyInfo HolyGrail.
         * @member {number} HolyGrail
         * @memberof pb.Base_Player_MoneyInfo
         * @instance
         */
        Base_Player_MoneyInfo.prototype.HolyGrail = 0;

        /**
         * Base_Player_MoneyInfo LuckyWheelCoin.
         * @member {number} LuckyWheelCoin
         * @memberof pb.Base_Player_MoneyInfo
         * @instance
         */
        Base_Player_MoneyInfo.prototype.LuckyWheelCoin = 0;

        /**
         * Creates a new Base_Player_MoneyInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Player_MoneyInfo
         * @static
         * @param {pb.IBase_Player_MoneyInfo=} [properties] Properties to set
         * @returns {pb.Base_Player_MoneyInfo} Base_Player_MoneyInfo instance
         */
        Base_Player_MoneyInfo.create = function create(properties) {
            return new Base_Player_MoneyInfo(properties);
        };

        /**
         * Encodes the specified Base_Player_MoneyInfo message. Does not implicitly {@link pb.Base_Player_MoneyInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Player_MoneyInfo
         * @static
         * @param {pb.IBase_Player_MoneyInfo} message Base_Player_MoneyInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Player_MoneyInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Gold != null && Object.hasOwnProperty.call(message, "Gold"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Gold);
            if (message.GoldBind != null && Object.hasOwnProperty.call(message, "GoldBind"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.GoldBind);
            if (message.Coin != null && Object.hasOwnProperty.call(message, "Coin"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Coin);
            if (message.CoinBind != null && Object.hasOwnProperty.call(message, "CoinBind"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.CoinBind);
            if (message.HolyGrail != null && Object.hasOwnProperty.call(message, "HolyGrail"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.HolyGrail);
            if (message.LuckyWheelCoin != null && Object.hasOwnProperty.call(message, "LuckyWheelCoin"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.LuckyWheelCoin);
            return writer;
        };

        /**
         * Decodes a Base_Player_MoneyInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Player_MoneyInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Player_MoneyInfo} Base_Player_MoneyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Player_MoneyInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Player_MoneyInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Gold = reader.int32();
                        break;
                    }
                case 2: {
                        message.GoldBind = reader.int32();
                        break;
                    }
                case 3: {
                        message.Coin = reader.int32();
                        break;
                    }
                case 4: {
                        message.CoinBind = reader.int32();
                        break;
                    }
                case 5: {
                        message.HolyGrail = reader.int32();
                        break;
                    }
                case 6: {
                        message.LuckyWheelCoin = reader.int32();
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
         * Gets the default type url for Base_Player_MoneyInfo
         * @function getTypeUrl
         * @memberof pb.Base_Player_MoneyInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Player_MoneyInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Player_MoneyInfo";
        };

        return Base_Player_MoneyInfo;
    })();

    pb.Net_Player_UpdateMoneyInfoRet = (function() {

        /**
         * Properties of a Net_Player_UpdateMoneyInfoRet.
         * @memberof pb
         * @interface INet_Player_UpdateMoneyInfoRet
         * @property {pb.IBase_Player_MoneyInfo|null} [MoneyInfo] Net_Player_UpdateMoneyInfoRet MoneyInfo
         */

        /**
         * Constructs a new Net_Player_UpdateMoneyInfoRet.
         * @memberof pb
         * @classdesc Represents a Net_Player_UpdateMoneyInfoRet.
         * @implements INet_Player_UpdateMoneyInfoRet
         * @constructor
         * @param {pb.INet_Player_UpdateMoneyInfoRet=} [properties] Properties to set
         */
        function Net_Player_UpdateMoneyInfoRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Player_UpdateMoneyInfoRet MoneyInfo.
         * @member {pb.IBase_Player_MoneyInfo|null|undefined} MoneyInfo
         * @memberof pb.Net_Player_UpdateMoneyInfoRet
         * @instance
         */
        Net_Player_UpdateMoneyInfoRet.prototype.MoneyInfo = null;

        /**
         * Creates a new Net_Player_UpdateMoneyInfoRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Player_UpdateMoneyInfoRet
         * @static
         * @param {pb.INet_Player_UpdateMoneyInfoRet=} [properties] Properties to set
         * @returns {pb.Net_Player_UpdateMoneyInfoRet} Net_Player_UpdateMoneyInfoRet instance
         */
        Net_Player_UpdateMoneyInfoRet.create = function create(properties) {
            return new Net_Player_UpdateMoneyInfoRet(properties);
        };

        /**
         * Encodes the specified Net_Player_UpdateMoneyInfoRet message. Does not implicitly {@link pb.Net_Player_UpdateMoneyInfoRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Player_UpdateMoneyInfoRet
         * @static
         * @param {pb.INet_Player_UpdateMoneyInfoRet} message Net_Player_UpdateMoneyInfoRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Player_UpdateMoneyInfoRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.MoneyInfo != null && Object.hasOwnProperty.call(message, "MoneyInfo"))
                $root.pb.Base_Player_MoneyInfo.encode(message.MoneyInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Net_Player_UpdateMoneyInfoRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Player_UpdateMoneyInfoRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Player_UpdateMoneyInfoRet} Net_Player_UpdateMoneyInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Player_UpdateMoneyInfoRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Player_UpdateMoneyInfoRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.MoneyInfo = $root.pb.Base_Player_MoneyInfo.decode(reader, reader.uint32());
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
         * Gets the default type url for Net_Player_UpdateMoneyInfoRet
         * @function getTypeUrl
         * @memberof pb.Net_Player_UpdateMoneyInfoRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Player_UpdateMoneyInfoRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Player_UpdateMoneyInfoRet";
        };

        return Net_Player_UpdateMoneyInfoRet;
    })();

    pb.Net_Player_PlayerUpdatesInfoRet = (function() {

        /**
         * Properties of a Net_Player_PlayerUpdatesInfoRet.
         * @memberof pb
         * @interface INet_Player_PlayerUpdatesInfoRet
         * @property {Object.<string,pb.IBase_Player_PlayerMark>|null} [PlayerMarkList] Net_Player_PlayerUpdatesInfoRet PlayerMarkList
         * @property {pb.IBase_Activity_ActivityInfo|null} [ActivityInfo] Net_Player_PlayerUpdatesInfoRet ActivityInfo
         * @property {pb.IBase_Task_TaskInfo|null} [TaskInfo] Net_Player_PlayerUpdatesInfoRet TaskInfo
         */

        /**
         * Constructs a new Net_Player_PlayerUpdatesInfoRet.
         * @memberof pb
         * @classdesc Represents a Net_Player_PlayerUpdatesInfoRet.
         * @implements INet_Player_PlayerUpdatesInfoRet
         * @constructor
         * @param {pb.INet_Player_PlayerUpdatesInfoRet=} [properties] Properties to set
         */
        function Net_Player_PlayerUpdatesInfoRet(properties) {
            this.PlayerMarkList = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Player_PlayerUpdatesInfoRet PlayerMarkList.
         * @member {Object.<string,pb.IBase_Player_PlayerMark>} PlayerMarkList
         * @memberof pb.Net_Player_PlayerUpdatesInfoRet
         * @instance
         */
        Net_Player_PlayerUpdatesInfoRet.prototype.PlayerMarkList = $util.emptyObject;

        /**
         * Net_Player_PlayerUpdatesInfoRet ActivityInfo.
         * @member {pb.IBase_Activity_ActivityInfo|null|undefined} ActivityInfo
         * @memberof pb.Net_Player_PlayerUpdatesInfoRet
         * @instance
         */
        Net_Player_PlayerUpdatesInfoRet.prototype.ActivityInfo = null;

        /**
         * Net_Player_PlayerUpdatesInfoRet TaskInfo.
         * @member {pb.IBase_Task_TaskInfo|null|undefined} TaskInfo
         * @memberof pb.Net_Player_PlayerUpdatesInfoRet
         * @instance
         */
        Net_Player_PlayerUpdatesInfoRet.prototype.TaskInfo = null;

        /**
         * Creates a new Net_Player_PlayerUpdatesInfoRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Player_PlayerUpdatesInfoRet
         * @static
         * @param {pb.INet_Player_PlayerUpdatesInfoRet=} [properties] Properties to set
         * @returns {pb.Net_Player_PlayerUpdatesInfoRet} Net_Player_PlayerUpdatesInfoRet instance
         */
        Net_Player_PlayerUpdatesInfoRet.create = function create(properties) {
            return new Net_Player_PlayerUpdatesInfoRet(properties);
        };

        /**
         * Encodes the specified Net_Player_PlayerUpdatesInfoRet message. Does not implicitly {@link pb.Net_Player_PlayerUpdatesInfoRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Player_PlayerUpdatesInfoRet
         * @static
         * @param {pb.INet_Player_PlayerUpdatesInfoRet} message Net_Player_PlayerUpdatesInfoRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Player_PlayerUpdatesInfoRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.PlayerMarkList != null && Object.hasOwnProperty.call(message, "PlayerMarkList"))
                for (var keys = Object.keys(message.PlayerMarkList), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.pb.Base_Player_PlayerMark.encode(message.PlayerMarkList[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            if (message.ActivityInfo != null && Object.hasOwnProperty.call(message, "ActivityInfo"))
                $root.pb.Base_Activity_ActivityInfo.encode(message.ActivityInfo, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.TaskInfo != null && Object.hasOwnProperty.call(message, "TaskInfo"))
                $root.pb.Base_Task_TaskInfo.encode(message.TaskInfo, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Net_Player_PlayerUpdatesInfoRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Player_PlayerUpdatesInfoRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Player_PlayerUpdatesInfoRet} Net_Player_PlayerUpdatesInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Player_PlayerUpdatesInfoRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Player_PlayerUpdatesInfoRet(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.PlayerMarkList === $util.emptyObject)
                            message.PlayerMarkList = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.pb.Base_Player_PlayerMark.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.PlayerMarkList[key] = value;
                        break;
                    }
                case 3: {
                        message.ActivityInfo = $root.pb.Base_Activity_ActivityInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 4: {
                        message.TaskInfo = $root.pb.Base_Task_TaskInfo.decode(reader, reader.uint32());
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
         * Gets the default type url for Net_Player_PlayerUpdatesInfoRet
         * @function getTypeUrl
         * @memberof pb.Net_Player_PlayerUpdatesInfoRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Player_PlayerUpdatesInfoRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Player_PlayerUpdatesInfoRet";
        };

        return Net_Player_PlayerUpdatesInfoRet;
    })();

    pb.Net_Player_ChangeNameReq = (function() {

        /**
         * Properties of a Net_Player_ChangeNameReq.
         * @memberof pb
         * @interface INet_Player_ChangeNameReq
         * @property {string|null} [NickName] Net_Player_ChangeNameReq NickName
         */

        /**
         * Constructs a new Net_Player_ChangeNameReq.
         * @memberof pb
         * @classdesc Represents a Net_Player_ChangeNameReq.
         * @implements INet_Player_ChangeNameReq
         * @constructor
         * @param {pb.INet_Player_ChangeNameReq=} [properties] Properties to set
         */
        function Net_Player_ChangeNameReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Player_ChangeNameReq NickName.
         * @member {string} NickName
         * @memberof pb.Net_Player_ChangeNameReq
         * @instance
         */
        Net_Player_ChangeNameReq.prototype.NickName = "";

        /**
         * Creates a new Net_Player_ChangeNameReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Player_ChangeNameReq
         * @static
         * @param {pb.INet_Player_ChangeNameReq=} [properties] Properties to set
         * @returns {pb.Net_Player_ChangeNameReq} Net_Player_ChangeNameReq instance
         */
        Net_Player_ChangeNameReq.create = function create(properties) {
            return new Net_Player_ChangeNameReq(properties);
        };

        /**
         * Encodes the specified Net_Player_ChangeNameReq message. Does not implicitly {@link pb.Net_Player_ChangeNameReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Player_ChangeNameReq
         * @static
         * @param {pb.INet_Player_ChangeNameReq} message Net_Player_ChangeNameReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Player_ChangeNameReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NickName != null && Object.hasOwnProperty.call(message, "NickName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.NickName);
            return writer;
        };

        /**
         * Decodes a Net_Player_ChangeNameReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Player_ChangeNameReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Player_ChangeNameReq} Net_Player_ChangeNameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Player_ChangeNameReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Player_ChangeNameReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.NickName = reader.string();
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
         * Gets the default type url for Net_Player_ChangeNameReq
         * @function getTypeUrl
         * @memberof pb.Net_Player_ChangeNameReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Player_ChangeNameReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Player_ChangeNameReq";
        };

        return Net_Player_ChangeNameReq;
    })();

    pb.Net_Player_ChangeNameRet = (function() {

        /**
         * Properties of a Net_Player_ChangeNameRet.
         * @memberof pb
         * @interface INet_Player_ChangeNameRet
         * @property {number|null} [Ret] Net_Player_ChangeNameRet Ret
         * @property {string|null} [NickName] Net_Player_ChangeNameRet NickName
         */

        /**
         * Constructs a new Net_Player_ChangeNameRet.
         * @memberof pb
         * @classdesc Represents a Net_Player_ChangeNameRet.
         * @implements INet_Player_ChangeNameRet
         * @constructor
         * @param {pb.INet_Player_ChangeNameRet=} [properties] Properties to set
         */
        function Net_Player_ChangeNameRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Player_ChangeNameRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Player_ChangeNameRet
         * @instance
         */
        Net_Player_ChangeNameRet.prototype.Ret = 0;

        /**
         * Net_Player_ChangeNameRet NickName.
         * @member {string} NickName
         * @memberof pb.Net_Player_ChangeNameRet
         * @instance
         */
        Net_Player_ChangeNameRet.prototype.NickName = "";

        /**
         * Creates a new Net_Player_ChangeNameRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Player_ChangeNameRet
         * @static
         * @param {pb.INet_Player_ChangeNameRet=} [properties] Properties to set
         * @returns {pb.Net_Player_ChangeNameRet} Net_Player_ChangeNameRet instance
         */
        Net_Player_ChangeNameRet.create = function create(properties) {
            return new Net_Player_ChangeNameRet(properties);
        };

        /**
         * Encodes the specified Net_Player_ChangeNameRet message. Does not implicitly {@link pb.Net_Player_ChangeNameRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Player_ChangeNameRet
         * @static
         * @param {pb.INet_Player_ChangeNameRet} message Net_Player_ChangeNameRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Player_ChangeNameRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.NickName != null && Object.hasOwnProperty.call(message, "NickName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.NickName);
            return writer;
        };

        /**
         * Decodes a Net_Player_ChangeNameRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Player_ChangeNameRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Player_ChangeNameRet} Net_Player_ChangeNameRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Player_ChangeNameRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Player_ChangeNameRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.NickName = reader.string();
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
         * Gets the default type url for Net_Player_ChangeNameRet
         * @function getTypeUrl
         * @memberof pb.Net_Player_ChangeNameRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Player_ChangeNameRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Player_ChangeNameRet";
        };

        return Net_Player_ChangeNameRet;
    })();

    pb.Base_Shop_AnItemInfo = (function() {

        /**
         * Properties of a Base_Shop_AnItemInfo.
         * @memberof pb
         * @interface IBase_Shop_AnItemInfo
         * @property {number|null} [Id] Base_Shop_AnItemInfo Id
         * @property {number|null} [BuyNum] Base_Shop_AnItemInfo BuyNum
         */

        /**
         * Constructs a new Base_Shop_AnItemInfo.
         * @memberof pb
         * @classdesc Represents a Base_Shop_AnItemInfo.
         * @implements IBase_Shop_AnItemInfo
         * @constructor
         * @param {pb.IBase_Shop_AnItemInfo=} [properties] Properties to set
         */
        function Base_Shop_AnItemInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Shop_AnItemInfo Id.
         * @member {number} Id
         * @memberof pb.Base_Shop_AnItemInfo
         * @instance
         */
        Base_Shop_AnItemInfo.prototype.Id = 0;

        /**
         * Base_Shop_AnItemInfo BuyNum.
         * @member {number} BuyNum
         * @memberof pb.Base_Shop_AnItemInfo
         * @instance
         */
        Base_Shop_AnItemInfo.prototype.BuyNum = 0;

        /**
         * Creates a new Base_Shop_AnItemInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Shop_AnItemInfo
         * @static
         * @param {pb.IBase_Shop_AnItemInfo=} [properties] Properties to set
         * @returns {pb.Base_Shop_AnItemInfo} Base_Shop_AnItemInfo instance
         */
        Base_Shop_AnItemInfo.create = function create(properties) {
            return new Base_Shop_AnItemInfo(properties);
        };

        /**
         * Encodes the specified Base_Shop_AnItemInfo message. Does not implicitly {@link pb.Base_Shop_AnItemInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Shop_AnItemInfo
         * @static
         * @param {pb.IBase_Shop_AnItemInfo} message Base_Shop_AnItemInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Shop_AnItemInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            if (message.BuyNum != null && Object.hasOwnProperty.call(message, "BuyNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BuyNum);
            return writer;
        };

        /**
         * Decodes a Base_Shop_AnItemInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Shop_AnItemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Shop_AnItemInfo} Base_Shop_AnItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Shop_AnItemInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Shop_AnItemInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Id = reader.int32();
                        break;
                    }
                case 2: {
                        message.BuyNum = reader.int32();
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
         * Gets the default type url for Base_Shop_AnItemInfo
         * @function getTypeUrl
         * @memberof pb.Base_Shop_AnItemInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Shop_AnItemInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Shop_AnItemInfo";
        };

        return Base_Shop_AnItemInfo;
    })();

    pb.Base_Shop_ShelvesInfo = (function() {

        /**
         * Properties of a Base_Shop_ShelvesInfo.
         * @memberof pb
         * @interface IBase_Shop_ShelvesInfo
         * @property {number|null} [Id] Base_Shop_ShelvesInfo Id
         * @property {string|null} [Name] Base_Shop_ShelvesInfo Name
         * @property {number|null} [Quantity] Base_Shop_ShelvesInfo Quantity
         * @property {Array.<pb.IBase_Shop_AnItemInfo>|null} [ItemList] Base_Shop_ShelvesInfo ItemList
         * @property {number|Long|null} [NextRefreshTime] Base_Shop_ShelvesInfo NextRefreshTime
         */

        /**
         * Constructs a new Base_Shop_ShelvesInfo.
         * @memberof pb
         * @classdesc Represents a Base_Shop_ShelvesInfo.
         * @implements IBase_Shop_ShelvesInfo
         * @constructor
         * @param {pb.IBase_Shop_ShelvesInfo=} [properties] Properties to set
         */
        function Base_Shop_ShelvesInfo(properties) {
            this.ItemList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Shop_ShelvesInfo Id.
         * @member {number} Id
         * @memberof pb.Base_Shop_ShelvesInfo
         * @instance
         */
        Base_Shop_ShelvesInfo.prototype.Id = 0;

        /**
         * Base_Shop_ShelvesInfo Name.
         * @member {string} Name
         * @memberof pb.Base_Shop_ShelvesInfo
         * @instance
         */
        Base_Shop_ShelvesInfo.prototype.Name = "";

        /**
         * Base_Shop_ShelvesInfo Quantity.
         * @member {number} Quantity
         * @memberof pb.Base_Shop_ShelvesInfo
         * @instance
         */
        Base_Shop_ShelvesInfo.prototype.Quantity = 0;

        /**
         * Base_Shop_ShelvesInfo ItemList.
         * @member {Array.<pb.IBase_Shop_AnItemInfo>} ItemList
         * @memberof pb.Base_Shop_ShelvesInfo
         * @instance
         */
        Base_Shop_ShelvesInfo.prototype.ItemList = $util.emptyArray;

        /**
         * Base_Shop_ShelvesInfo NextRefreshTime.
         * @member {number|Long} NextRefreshTime
         * @memberof pb.Base_Shop_ShelvesInfo
         * @instance
         */
        Base_Shop_ShelvesInfo.prototype.NextRefreshTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Base_Shop_ShelvesInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Shop_ShelvesInfo
         * @static
         * @param {pb.IBase_Shop_ShelvesInfo=} [properties] Properties to set
         * @returns {pb.Base_Shop_ShelvesInfo} Base_Shop_ShelvesInfo instance
         */
        Base_Shop_ShelvesInfo.create = function create(properties) {
            return new Base_Shop_ShelvesInfo(properties);
        };

        /**
         * Encodes the specified Base_Shop_ShelvesInfo message. Does not implicitly {@link pb.Base_Shop_ShelvesInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Shop_ShelvesInfo
         * @static
         * @param {pb.IBase_Shop_ShelvesInfo} message Base_Shop_ShelvesInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Shop_ShelvesInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.Quantity != null && Object.hasOwnProperty.call(message, "Quantity"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Quantity);
            if (message.ItemList != null && message.ItemList.length)
                for (var i = 0; i < message.ItemList.length; ++i)
                    $root.pb.Base_Shop_AnItemInfo.encode(message.ItemList[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.NextRefreshTime != null && Object.hasOwnProperty.call(message, "NextRefreshTime"))
                writer.uint32(/* id 5, wireType 0 =*/40).int64(message.NextRefreshTime);
            return writer;
        };

        /**
         * Decodes a Base_Shop_ShelvesInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Shop_ShelvesInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Shop_ShelvesInfo} Base_Shop_ShelvesInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Shop_ShelvesInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Shop_ShelvesInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Id = reader.int32();
                        break;
                    }
                case 2: {
                        message.Name = reader.string();
                        break;
                    }
                case 3: {
                        message.Quantity = reader.int32();
                        break;
                    }
                case 4: {
                        if (!(message.ItemList && message.ItemList.length))
                            message.ItemList = [];
                        message.ItemList.push($root.pb.Base_Shop_AnItemInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 5: {
                        message.NextRefreshTime = reader.int64();
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
         * Gets the default type url for Base_Shop_ShelvesInfo
         * @function getTypeUrl
         * @memberof pb.Base_Shop_ShelvesInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Shop_ShelvesInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Shop_ShelvesInfo";
        };

        return Base_Shop_ShelvesInfo;
    })();

    pb.Base_Shop_AShopInfo = (function() {

        /**
         * Properties of a Base_Shop_AShopInfo.
         * @memberof pb
         * @interface IBase_Shop_AShopInfo
         * @property {number|null} [Id] Base_Shop_AShopInfo Id
         * @property {string|null} [Name] Base_Shop_AShopInfo Name
         * @property {Array.<pb.IBase_Shop_ShelvesInfo>|null} [ItemList] Base_Shop_AShopInfo ItemList
         */

        /**
         * Constructs a new Base_Shop_AShopInfo.
         * @memberof pb
         * @classdesc Represents a Base_Shop_AShopInfo.
         * @implements IBase_Shop_AShopInfo
         * @constructor
         * @param {pb.IBase_Shop_AShopInfo=} [properties] Properties to set
         */
        function Base_Shop_AShopInfo(properties) {
            this.ItemList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Shop_AShopInfo Id.
         * @member {number} Id
         * @memberof pb.Base_Shop_AShopInfo
         * @instance
         */
        Base_Shop_AShopInfo.prototype.Id = 0;

        /**
         * Base_Shop_AShopInfo Name.
         * @member {string} Name
         * @memberof pb.Base_Shop_AShopInfo
         * @instance
         */
        Base_Shop_AShopInfo.prototype.Name = "";

        /**
         * Base_Shop_AShopInfo ItemList.
         * @member {Array.<pb.IBase_Shop_ShelvesInfo>} ItemList
         * @memberof pb.Base_Shop_AShopInfo
         * @instance
         */
        Base_Shop_AShopInfo.prototype.ItemList = $util.emptyArray;

        /**
         * Creates a new Base_Shop_AShopInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Shop_AShopInfo
         * @static
         * @param {pb.IBase_Shop_AShopInfo=} [properties] Properties to set
         * @returns {pb.Base_Shop_AShopInfo} Base_Shop_AShopInfo instance
         */
        Base_Shop_AShopInfo.create = function create(properties) {
            return new Base_Shop_AShopInfo(properties);
        };

        /**
         * Encodes the specified Base_Shop_AShopInfo message. Does not implicitly {@link pb.Base_Shop_AShopInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Shop_AShopInfo
         * @static
         * @param {pb.IBase_Shop_AShopInfo} message Base_Shop_AShopInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Shop_AShopInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            if (message.ItemList != null && message.ItemList.length)
                for (var i = 0; i < message.ItemList.length; ++i)
                    $root.pb.Base_Shop_ShelvesInfo.encode(message.ItemList[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Base_Shop_AShopInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Shop_AShopInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Shop_AShopInfo} Base_Shop_AShopInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Shop_AShopInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Shop_AShopInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Id = reader.int32();
                        break;
                    }
                case 2: {
                        message.Name = reader.string();
                        break;
                    }
                case 5: {
                        if (!(message.ItemList && message.ItemList.length))
                            message.ItemList = [];
                        message.ItemList.push($root.pb.Base_Shop_ShelvesInfo.decode(reader, reader.uint32()));
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
         * Gets the default type url for Base_Shop_AShopInfo
         * @function getTypeUrl
         * @memberof pb.Base_Shop_AShopInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Shop_AShopInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Shop_AShopInfo";
        };

        return Base_Shop_AShopInfo;
    })();

    pb.Base_Shop_ShopInfo = (function() {

        /**
         * Properties of a Base_Shop_ShopInfo.
         * @memberof pb
         * @interface IBase_Shop_ShopInfo
         * @property {Array.<pb.IBase_Shop_AShopInfo>|null} [AShopInfoList] Base_Shop_ShopInfo AShopInfoList
         * @property {Object.<string,pb.IBase_Shop_AnItemInfo>|null} [ShopBuyLimitNumList] Base_Shop_ShopInfo ShopBuyLimitNumList
         */

        /**
         * Constructs a new Base_Shop_ShopInfo.
         * @memberof pb
         * @classdesc Represents a Base_Shop_ShopInfo.
         * @implements IBase_Shop_ShopInfo
         * @constructor
         * @param {pb.IBase_Shop_ShopInfo=} [properties] Properties to set
         */
        function Base_Shop_ShopInfo(properties) {
            this.AShopInfoList = [];
            this.ShopBuyLimitNumList = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Shop_ShopInfo AShopInfoList.
         * @member {Array.<pb.IBase_Shop_AShopInfo>} AShopInfoList
         * @memberof pb.Base_Shop_ShopInfo
         * @instance
         */
        Base_Shop_ShopInfo.prototype.AShopInfoList = $util.emptyArray;

        /**
         * Base_Shop_ShopInfo ShopBuyLimitNumList.
         * @member {Object.<string,pb.IBase_Shop_AnItemInfo>} ShopBuyLimitNumList
         * @memberof pb.Base_Shop_ShopInfo
         * @instance
         */
        Base_Shop_ShopInfo.prototype.ShopBuyLimitNumList = $util.emptyObject;

        /**
         * Creates a new Base_Shop_ShopInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Shop_ShopInfo
         * @static
         * @param {pb.IBase_Shop_ShopInfo=} [properties] Properties to set
         * @returns {pb.Base_Shop_ShopInfo} Base_Shop_ShopInfo instance
         */
        Base_Shop_ShopInfo.create = function create(properties) {
            return new Base_Shop_ShopInfo(properties);
        };

        /**
         * Encodes the specified Base_Shop_ShopInfo message. Does not implicitly {@link pb.Base_Shop_ShopInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Shop_ShopInfo
         * @static
         * @param {pb.IBase_Shop_ShopInfo} message Base_Shop_ShopInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Shop_ShopInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AShopInfoList != null && message.AShopInfoList.length)
                for (var i = 0; i < message.AShopInfoList.length; ++i)
                    $root.pb.Base_Shop_AShopInfo.encode(message.AShopInfoList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ShopBuyLimitNumList != null && Object.hasOwnProperty.call(message, "ShopBuyLimitNumList"))
                for (var keys = Object.keys(message.ShopBuyLimitNumList), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.pb.Base_Shop_AnItemInfo.encode(message.ShopBuyLimitNumList[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Decodes a Base_Shop_ShopInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Shop_ShopInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Shop_ShopInfo} Base_Shop_ShopInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Shop_ShopInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Shop_ShopInfo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.AShopInfoList && message.AShopInfoList.length))
                            message.AShopInfoList = [];
                        message.AShopInfoList.push($root.pb.Base_Shop_AShopInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 2: {
                        if (message.ShopBuyLimitNumList === $util.emptyObject)
                            message.ShopBuyLimitNumList = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.pb.Base_Shop_AnItemInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.ShopBuyLimitNumList[key] = value;
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
         * Gets the default type url for Base_Shop_ShopInfo
         * @function getTypeUrl
         * @memberof pb.Base_Shop_ShopInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Shop_ShopInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Shop_ShopInfo";
        };

        return Base_Shop_ShopInfo;
    })();

    pb.Net_Shop_GetShopInfoReq = (function() {

        /**
         * Properties of a Net_Shop_GetShopInfoReq.
         * @memberof pb
         * @interface INet_Shop_GetShopInfoReq
         */

        /**
         * Constructs a new Net_Shop_GetShopInfoReq.
         * @memberof pb
         * @classdesc Represents a Net_Shop_GetShopInfoReq.
         * @implements INet_Shop_GetShopInfoReq
         * @constructor
         * @param {pb.INet_Shop_GetShopInfoReq=} [properties] Properties to set
         */
        function Net_Shop_GetShopInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Shop_GetShopInfoReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Shop_GetShopInfoReq
         * @static
         * @param {pb.INet_Shop_GetShopInfoReq=} [properties] Properties to set
         * @returns {pb.Net_Shop_GetShopInfoReq} Net_Shop_GetShopInfoReq instance
         */
        Net_Shop_GetShopInfoReq.create = function create(properties) {
            return new Net_Shop_GetShopInfoReq(properties);
        };

        /**
         * Encodes the specified Net_Shop_GetShopInfoReq message. Does not implicitly {@link pb.Net_Shop_GetShopInfoReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Shop_GetShopInfoReq
         * @static
         * @param {pb.INet_Shop_GetShopInfoReq} message Net_Shop_GetShopInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Shop_GetShopInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Shop_GetShopInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Shop_GetShopInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Shop_GetShopInfoReq} Net_Shop_GetShopInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Shop_GetShopInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Shop_GetShopInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Shop_GetShopInfoReq
         * @function getTypeUrl
         * @memberof pb.Net_Shop_GetShopInfoReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Shop_GetShopInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Shop_GetShopInfoReq";
        };

        return Net_Shop_GetShopInfoReq;
    })();

    pb.Net_Shop_GetShopInfoRet = (function() {

        /**
         * Properties of a Net_Shop_GetShopInfoRet.
         * @memberof pb
         * @interface INet_Shop_GetShopInfoRet
         * @property {pb.IBase_Shop_ShopInfo|null} [ShopInfo] Net_Shop_GetShopInfoRet ShopInfo
         */

        /**
         * Constructs a new Net_Shop_GetShopInfoRet.
         * @memberof pb
         * @classdesc Represents a Net_Shop_GetShopInfoRet.
         * @implements INet_Shop_GetShopInfoRet
         * @constructor
         * @param {pb.INet_Shop_GetShopInfoRet=} [properties] Properties to set
         */
        function Net_Shop_GetShopInfoRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Shop_GetShopInfoRet ShopInfo.
         * @member {pb.IBase_Shop_ShopInfo|null|undefined} ShopInfo
         * @memberof pb.Net_Shop_GetShopInfoRet
         * @instance
         */
        Net_Shop_GetShopInfoRet.prototype.ShopInfo = null;

        /**
         * Creates a new Net_Shop_GetShopInfoRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Shop_GetShopInfoRet
         * @static
         * @param {pb.INet_Shop_GetShopInfoRet=} [properties] Properties to set
         * @returns {pb.Net_Shop_GetShopInfoRet} Net_Shop_GetShopInfoRet instance
         */
        Net_Shop_GetShopInfoRet.create = function create(properties) {
            return new Net_Shop_GetShopInfoRet(properties);
        };

        /**
         * Encodes the specified Net_Shop_GetShopInfoRet message. Does not implicitly {@link pb.Net_Shop_GetShopInfoRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Shop_GetShopInfoRet
         * @static
         * @param {pb.INet_Shop_GetShopInfoRet} message Net_Shop_GetShopInfoRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Shop_GetShopInfoRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ShopInfo != null && Object.hasOwnProperty.call(message, "ShopInfo"))
                $root.pb.Base_Shop_ShopInfo.encode(message.ShopInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Net_Shop_GetShopInfoRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Shop_GetShopInfoRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Shop_GetShopInfoRet} Net_Shop_GetShopInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Shop_GetShopInfoRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Shop_GetShopInfoRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ShopInfo = $root.pb.Base_Shop_ShopInfo.decode(reader, reader.uint32());
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
         * Gets the default type url for Net_Shop_GetShopInfoRet
         * @function getTypeUrl
         * @memberof pb.Net_Shop_GetShopInfoRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Shop_GetShopInfoRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Shop_GetShopInfoRet";
        };

        return Net_Shop_GetShopInfoRet;
    })();

    pb.Net_Shop_BuyItemReq = (function() {

        /**
         * Properties of a Net_Shop_BuyItemReq.
         * @memberof pb
         * @interface INet_Shop_BuyItemReq
         * @property {number|null} [ShopItemId] Net_Shop_BuyItemReq ShopItemId
         * @property {number|null} [ShopItemNum] Net_Shop_BuyItemReq ShopItemNum
         */

        /**
         * Constructs a new Net_Shop_BuyItemReq.
         * @memberof pb
         * @classdesc Represents a Net_Shop_BuyItemReq.
         * @implements INet_Shop_BuyItemReq
         * @constructor
         * @param {pb.INet_Shop_BuyItemReq=} [properties] Properties to set
         */
        function Net_Shop_BuyItemReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Shop_BuyItemReq ShopItemId.
         * @member {number} ShopItemId
         * @memberof pb.Net_Shop_BuyItemReq
         * @instance
         */
        Net_Shop_BuyItemReq.prototype.ShopItemId = 0;

        /**
         * Net_Shop_BuyItemReq ShopItemNum.
         * @member {number} ShopItemNum
         * @memberof pb.Net_Shop_BuyItemReq
         * @instance
         */
        Net_Shop_BuyItemReq.prototype.ShopItemNum = 0;

        /**
         * Creates a new Net_Shop_BuyItemReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Shop_BuyItemReq
         * @static
         * @param {pb.INet_Shop_BuyItemReq=} [properties] Properties to set
         * @returns {pb.Net_Shop_BuyItemReq} Net_Shop_BuyItemReq instance
         */
        Net_Shop_BuyItemReq.create = function create(properties) {
            return new Net_Shop_BuyItemReq(properties);
        };

        /**
         * Encodes the specified Net_Shop_BuyItemReq message. Does not implicitly {@link pb.Net_Shop_BuyItemReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Shop_BuyItemReq
         * @static
         * @param {pb.INet_Shop_BuyItemReq} message Net_Shop_BuyItemReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Shop_BuyItemReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ShopItemId != null && Object.hasOwnProperty.call(message, "ShopItemId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.ShopItemId);
            if (message.ShopItemNum != null && Object.hasOwnProperty.call(message, "ShopItemNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ShopItemNum);
            return writer;
        };

        /**
         * Decodes a Net_Shop_BuyItemReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Shop_BuyItemReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Shop_BuyItemReq} Net_Shop_BuyItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Shop_BuyItemReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Shop_BuyItemReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.ShopItemId = reader.int32();
                        break;
                    }
                case 2: {
                        message.ShopItemNum = reader.int32();
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
         * Gets the default type url for Net_Shop_BuyItemReq
         * @function getTypeUrl
         * @memberof pb.Net_Shop_BuyItemReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Shop_BuyItemReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Shop_BuyItemReq";
        };

        return Net_Shop_BuyItemReq;
    })();

    pb.Net_Shop_BuyItemRet = (function() {

        /**
         * Properties of a Net_Shop_BuyItemRet.
         * @memberof pb
         * @interface INet_Shop_BuyItemRet
         * @property {number|null} [Ret] Net_Shop_BuyItemRet Ret
         * @property {number|null} [ShopItemId] Net_Shop_BuyItemRet ShopItemId
         * @property {number|null} [ShopItemNum] Net_Shop_BuyItemRet ShopItemNum
         * @property {number|null} [ItemId] Net_Shop_BuyItemRet ItemId
         * @property {number|null} [ItemNum] Net_Shop_BuyItemRet ItemNum
         */

        /**
         * Constructs a new Net_Shop_BuyItemRet.
         * @memberof pb
         * @classdesc Represents a Net_Shop_BuyItemRet.
         * @implements INet_Shop_BuyItemRet
         * @constructor
         * @param {pb.INet_Shop_BuyItemRet=} [properties] Properties to set
         */
        function Net_Shop_BuyItemRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Shop_BuyItemRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Shop_BuyItemRet
         * @instance
         */
        Net_Shop_BuyItemRet.prototype.Ret = 0;

        /**
         * Net_Shop_BuyItemRet ShopItemId.
         * @member {number} ShopItemId
         * @memberof pb.Net_Shop_BuyItemRet
         * @instance
         */
        Net_Shop_BuyItemRet.prototype.ShopItemId = 0;

        /**
         * Net_Shop_BuyItemRet ShopItemNum.
         * @member {number} ShopItemNum
         * @memberof pb.Net_Shop_BuyItemRet
         * @instance
         */
        Net_Shop_BuyItemRet.prototype.ShopItemNum = 0;

        /**
         * Net_Shop_BuyItemRet ItemId.
         * @member {number} ItemId
         * @memberof pb.Net_Shop_BuyItemRet
         * @instance
         */
        Net_Shop_BuyItemRet.prototype.ItemId = 0;

        /**
         * Net_Shop_BuyItemRet ItemNum.
         * @member {number} ItemNum
         * @memberof pb.Net_Shop_BuyItemRet
         * @instance
         */
        Net_Shop_BuyItemRet.prototype.ItemNum = 0;

        /**
         * Creates a new Net_Shop_BuyItemRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Shop_BuyItemRet
         * @static
         * @param {pb.INet_Shop_BuyItemRet=} [properties] Properties to set
         * @returns {pb.Net_Shop_BuyItemRet} Net_Shop_BuyItemRet instance
         */
        Net_Shop_BuyItemRet.create = function create(properties) {
            return new Net_Shop_BuyItemRet(properties);
        };

        /**
         * Encodes the specified Net_Shop_BuyItemRet message. Does not implicitly {@link pb.Net_Shop_BuyItemRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Shop_BuyItemRet
         * @static
         * @param {pb.INet_Shop_BuyItemRet} message Net_Shop_BuyItemRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Shop_BuyItemRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.ShopItemId != null && Object.hasOwnProperty.call(message, "ShopItemId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ShopItemId);
            if (message.ShopItemNum != null && Object.hasOwnProperty.call(message, "ShopItemNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ShopItemNum);
            if (message.ItemId != null && Object.hasOwnProperty.call(message, "ItemId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ItemId);
            if (message.ItemNum != null && Object.hasOwnProperty.call(message, "ItemNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.ItemNum);
            return writer;
        };

        /**
         * Decodes a Net_Shop_BuyItemRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Shop_BuyItemRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Shop_BuyItemRet} Net_Shop_BuyItemRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Shop_BuyItemRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Shop_BuyItemRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.ShopItemId = reader.int32();
                        break;
                    }
                case 3: {
                        message.ShopItemNum = reader.int32();
                        break;
                    }
                case 4: {
                        message.ItemId = reader.int32();
                        break;
                    }
                case 5: {
                        message.ItemNum = reader.int32();
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
         * Gets the default type url for Net_Shop_BuyItemRet
         * @function getTypeUrl
         * @memberof pb.Net_Shop_BuyItemRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Shop_BuyItemRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Shop_BuyItemRet";
        };

        return Net_Shop_BuyItemRet;
    })();

    pb.Net_Shop_PayReq = (function() {

        /**
         * Properties of a Net_Shop_PayReq.
         * @memberof pb
         * @interface INet_Shop_PayReq
         * @property {number|null} [Cmd] Net_Shop_PayReq Cmd
         * @property {string|null} [Data] Net_Shop_PayReq Data
         * @property {number|null} [ShopItemId] Net_Shop_PayReq ShopItemId
         * @property {number|null} [ShopItemNum] Net_Shop_PayReq ShopItemNum
         */

        /**
         * Constructs a new Net_Shop_PayReq.
         * @memberof pb
         * @classdesc Represents a Net_Shop_PayReq.
         * @implements INet_Shop_PayReq
         * @constructor
         * @param {pb.INet_Shop_PayReq=} [properties] Properties to set
         */
        function Net_Shop_PayReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Shop_PayReq Cmd.
         * @member {number} Cmd
         * @memberof pb.Net_Shop_PayReq
         * @instance
         */
        Net_Shop_PayReq.prototype.Cmd = 0;

        /**
         * Net_Shop_PayReq Data.
         * @member {string} Data
         * @memberof pb.Net_Shop_PayReq
         * @instance
         */
        Net_Shop_PayReq.prototype.Data = "";

        /**
         * Net_Shop_PayReq ShopItemId.
         * @member {number} ShopItemId
         * @memberof pb.Net_Shop_PayReq
         * @instance
         */
        Net_Shop_PayReq.prototype.ShopItemId = 0;

        /**
         * Net_Shop_PayReq ShopItemNum.
         * @member {number} ShopItemNum
         * @memberof pb.Net_Shop_PayReq
         * @instance
         */
        Net_Shop_PayReq.prototype.ShopItemNum = 0;

        /**
         * Creates a new Net_Shop_PayReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Shop_PayReq
         * @static
         * @param {pb.INet_Shop_PayReq=} [properties] Properties to set
         * @returns {pb.Net_Shop_PayReq} Net_Shop_PayReq instance
         */
        Net_Shop_PayReq.create = function create(properties) {
            return new Net_Shop_PayReq(properties);
        };

        /**
         * Encodes the specified Net_Shop_PayReq message. Does not implicitly {@link pb.Net_Shop_PayReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Shop_PayReq
         * @static
         * @param {pb.INet_Shop_PayReq} message Net_Shop_PayReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Shop_PayReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Cmd != null && Object.hasOwnProperty.call(message, "Cmd"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Cmd);
            if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Data);
            if (message.ShopItemId != null && Object.hasOwnProperty.call(message, "ShopItemId"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.ShopItemId);
            if (message.ShopItemNum != null && Object.hasOwnProperty.call(message, "ShopItemNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.ShopItemNum);
            return writer;
        };

        /**
         * Decodes a Net_Shop_PayReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Shop_PayReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Shop_PayReq} Net_Shop_PayReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Shop_PayReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Shop_PayReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Cmd = reader.int32();
                        break;
                    }
                case 2: {
                        message.Data = reader.string();
                        break;
                    }
                case 3: {
                        message.ShopItemId = reader.int32();
                        break;
                    }
                case 4: {
                        message.ShopItemNum = reader.int32();
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
         * Gets the default type url for Net_Shop_PayReq
         * @function getTypeUrl
         * @memberof pb.Net_Shop_PayReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Shop_PayReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Shop_PayReq";
        };

        return Net_Shop_PayReq;
    })();

    pb.Net_Shop_PayRet = (function() {

        /**
         * Properties of a Net_Shop_PayRet.
         * @memberof pb
         * @interface INet_Shop_PayRet
         * @property {number|null} [Ret] Net_Shop_PayRet Ret
         * @property {number|null} [ProductId] Net_Shop_PayRet ProductId
         * @property {string|null} [OrderId] Net_Shop_PayRet OrderId
         * @property {number|null} [Price] Net_Shop_PayRet Price
         * @property {number|null} [Status] Net_Shop_PayRet Status
         */

        /**
         * Constructs a new Net_Shop_PayRet.
         * @memberof pb
         * @classdesc Represents a Net_Shop_PayRet.
         * @implements INet_Shop_PayRet
         * @constructor
         * @param {pb.INet_Shop_PayRet=} [properties] Properties to set
         */
        function Net_Shop_PayRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Shop_PayRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Shop_PayRet
         * @instance
         */
        Net_Shop_PayRet.prototype.Ret = 0;

        /**
         * Net_Shop_PayRet ProductId.
         * @member {number} ProductId
         * @memberof pb.Net_Shop_PayRet
         * @instance
         */
        Net_Shop_PayRet.prototype.ProductId = 0;

        /**
         * Net_Shop_PayRet OrderId.
         * @member {string} OrderId
         * @memberof pb.Net_Shop_PayRet
         * @instance
         */
        Net_Shop_PayRet.prototype.OrderId = "";

        /**
         * Net_Shop_PayRet Price.
         * @member {number} Price
         * @memberof pb.Net_Shop_PayRet
         * @instance
         */
        Net_Shop_PayRet.prototype.Price = 0;

        /**
         * Net_Shop_PayRet Status.
         * @member {number} Status
         * @memberof pb.Net_Shop_PayRet
         * @instance
         */
        Net_Shop_PayRet.prototype.Status = 0;

        /**
         * Creates a new Net_Shop_PayRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Shop_PayRet
         * @static
         * @param {pb.INet_Shop_PayRet=} [properties] Properties to set
         * @returns {pb.Net_Shop_PayRet} Net_Shop_PayRet instance
         */
        Net_Shop_PayRet.create = function create(properties) {
            return new Net_Shop_PayRet(properties);
        };

        /**
         * Encodes the specified Net_Shop_PayRet message. Does not implicitly {@link pb.Net_Shop_PayRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Shop_PayRet
         * @static
         * @param {pb.INet_Shop_PayRet} message Net_Shop_PayRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Shop_PayRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.ProductId != null && Object.hasOwnProperty.call(message, "ProductId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ProductId);
            if (message.OrderId != null && Object.hasOwnProperty.call(message, "OrderId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.OrderId);
            if (message.Price != null && Object.hasOwnProperty.call(message, "Price"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.Price);
            if (message.Status != null && Object.hasOwnProperty.call(message, "Status"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.Status);
            return writer;
        };

        /**
         * Decodes a Net_Shop_PayRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Shop_PayRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Shop_PayRet} Net_Shop_PayRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Shop_PayRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Shop_PayRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.ProductId = reader.int32();
                        break;
                    }
                case 3: {
                        message.OrderId = reader.string();
                        break;
                    }
                case 4: {
                        message.Price = reader.int32();
                        break;
                    }
                case 5: {
                        message.Status = reader.int32();
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
         * Gets the default type url for Net_Shop_PayRet
         * @function getTypeUrl
         * @memberof pb.Net_Shop_PayRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Shop_PayRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Shop_PayRet";
        };

        return Net_Shop_PayRet;
    })();

    /**
     * ETaskStatus enum.
     * @name pb.ETaskStatus
     * @enum {number}
     * @property {number} Incomplete=0 Incomplete value
     * @property {number} Complete=1 Complete value
     * @property {number} Got=2 Got value
     */
    pb.ETaskStatus = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Incomplete"] = 0;
        values[valuesById[1] = "Complete"] = 1;
        values[valuesById[2] = "Got"] = 2;
        return values;
    })();

    /**
     * ETask enum.
     * @name pb.ETask
     * @enum {number}
     * @property {number} TaskIdle=0 TaskIdle value
     * @property {number} Task1001=1001 Task1001 value
     * @property {number} Task1002=1002 Task1002 value
     * @property {number} Task1003=1003 Task1003 value
     * @property {number} Task1004=1004 Task1004 value
     * @property {number} Task1005=1005 Task1005 value
     * @property {number} Task1006=1006 Task1006 value
     * @property {number} Task1007=1007 Task1007 value
     * @property {number} Task2001=2001 Task2001 value
     * @property {number} Task2002=2002 Task2002 value
     * @property {number} Task2003=2003 Task2003 value
     * @property {number} Task2004=2004 Task2004 value
     * @property {number} Task2005=2005 Task2005 value
     * @property {number} Task2006=2006 Task2006 value
     */
    pb.ETask = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "TaskIdle"] = 0;
        values[valuesById[1001] = "Task1001"] = 1001;
        values[valuesById[1002] = "Task1002"] = 1002;
        values[valuesById[1003] = "Task1003"] = 1003;
        values[valuesById[1004] = "Task1004"] = 1004;
        values[valuesById[1005] = "Task1005"] = 1005;
        values[valuesById[1006] = "Task1006"] = 1006;
        values[valuesById[1007] = "Task1007"] = 1007;
        values[valuesById[2001] = "Task2001"] = 2001;
        values[valuesById[2002] = "Task2002"] = 2002;
        values[valuesById[2003] = "Task2003"] = 2003;
        values[valuesById[2004] = "Task2004"] = 2004;
        values[valuesById[2005] = "Task2005"] = 2005;
        values[valuesById[2006] = "Task2006"] = 2006;
        return values;
    })();

    pb.Base_Task_TaskInfo = (function() {

        /**
         * Properties of a Base_Task_TaskInfo.
         * @memberof pb
         * @interface IBase_Task_TaskInfo
         * @property {pb.IBase_Ads_AdsTasksInfo|null} [AdsTasksInfo] Base_Task_TaskInfo AdsTasksInfo
         * @property {pb.IBase_Task_CupTaskInfo|null} [CupTaskInfo] Base_Task_TaskInfo CupTaskInfo
         * @property {Object.<string,pb.IBase_Task_TaskItemInfo>|null} [TaskItemList] Base_Task_TaskInfo TaskItemList
         */

        /**
         * Constructs a new Base_Task_TaskInfo.
         * @memberof pb
         * @classdesc Represents a Base_Task_TaskInfo.
         * @implements IBase_Task_TaskInfo
         * @constructor
         * @param {pb.IBase_Task_TaskInfo=} [properties] Properties to set
         */
        function Base_Task_TaskInfo(properties) {
            this.TaskItemList = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Task_TaskInfo AdsTasksInfo.
         * @member {pb.IBase_Ads_AdsTasksInfo|null|undefined} AdsTasksInfo
         * @memberof pb.Base_Task_TaskInfo
         * @instance
         */
        Base_Task_TaskInfo.prototype.AdsTasksInfo = null;

        /**
         * Base_Task_TaskInfo CupTaskInfo.
         * @member {pb.IBase_Task_CupTaskInfo|null|undefined} CupTaskInfo
         * @memberof pb.Base_Task_TaskInfo
         * @instance
         */
        Base_Task_TaskInfo.prototype.CupTaskInfo = null;

        /**
         * Base_Task_TaskInfo TaskItemList.
         * @member {Object.<string,pb.IBase_Task_TaskItemInfo>} TaskItemList
         * @memberof pb.Base_Task_TaskInfo
         * @instance
         */
        Base_Task_TaskInfo.prototype.TaskItemList = $util.emptyObject;

        /**
         * Creates a new Base_Task_TaskInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Task_TaskInfo
         * @static
         * @param {pb.IBase_Task_TaskInfo=} [properties] Properties to set
         * @returns {pb.Base_Task_TaskInfo} Base_Task_TaskInfo instance
         */
        Base_Task_TaskInfo.create = function create(properties) {
            return new Base_Task_TaskInfo(properties);
        };

        /**
         * Encodes the specified Base_Task_TaskInfo message. Does not implicitly {@link pb.Base_Task_TaskInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Task_TaskInfo
         * @static
         * @param {pb.IBase_Task_TaskInfo} message Base_Task_TaskInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Task_TaskInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AdsTasksInfo != null && Object.hasOwnProperty.call(message, "AdsTasksInfo"))
                $root.pb.Base_Ads_AdsTasksInfo.encode(message.AdsTasksInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.CupTaskInfo != null && Object.hasOwnProperty.call(message, "CupTaskInfo"))
                $root.pb.Base_Task_CupTaskInfo.encode(message.CupTaskInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.TaskItemList != null && Object.hasOwnProperty.call(message, "TaskItemList"))
                for (var keys = Object.keys(message.TaskItemList), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 3, wireType 2 =*/26).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.pb.Base_Task_TaskItemInfo.encode(message.TaskItemList[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Decodes a Base_Task_TaskInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Task_TaskInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Task_TaskInfo} Base_Task_TaskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Task_TaskInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Task_TaskInfo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.AdsTasksInfo = $root.pb.Base_Ads_AdsTasksInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 2: {
                        message.CupTaskInfo = $root.pb.Base_Task_CupTaskInfo.decode(reader, reader.uint32());
                        break;
                    }
                case 3: {
                        if (message.TaskItemList === $util.emptyObject)
                            message.TaskItemList = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.pb.Base_Task_TaskItemInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.TaskItemList[key] = value;
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
         * Gets the default type url for Base_Task_TaskInfo
         * @function getTypeUrl
         * @memberof pb.Base_Task_TaskInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Task_TaskInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Task_TaskInfo";
        };

        return Base_Task_TaskInfo;
    })();

    pb.Base_Task_TaskItemInfo = (function() {

        /**
         * Properties of a Base_Task_TaskItemInfo.
         * @memberof pb
         * @interface IBase_Task_TaskItemInfo
         * @property {number|null} [State] Base_Task_TaskItemInfo State
         * @property {number|null} [ProgressValue] Base_Task_TaskItemInfo ProgressValue
         */

        /**
         * Constructs a new Base_Task_TaskItemInfo.
         * @memberof pb
         * @classdesc Represents a Base_Task_TaskItemInfo.
         * @implements IBase_Task_TaskItemInfo
         * @constructor
         * @param {pb.IBase_Task_TaskItemInfo=} [properties] Properties to set
         */
        function Base_Task_TaskItemInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Task_TaskItemInfo State.
         * @member {number} State
         * @memberof pb.Base_Task_TaskItemInfo
         * @instance
         */
        Base_Task_TaskItemInfo.prototype.State = 0;

        /**
         * Base_Task_TaskItemInfo ProgressValue.
         * @member {number} ProgressValue
         * @memberof pb.Base_Task_TaskItemInfo
         * @instance
         */
        Base_Task_TaskItemInfo.prototype.ProgressValue = 0;

        /**
         * Creates a new Base_Task_TaskItemInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Task_TaskItemInfo
         * @static
         * @param {pb.IBase_Task_TaskItemInfo=} [properties] Properties to set
         * @returns {pb.Base_Task_TaskItemInfo} Base_Task_TaskItemInfo instance
         */
        Base_Task_TaskItemInfo.create = function create(properties) {
            return new Base_Task_TaskItemInfo(properties);
        };

        /**
         * Encodes the specified Base_Task_TaskItemInfo message. Does not implicitly {@link pb.Base_Task_TaskItemInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Task_TaskItemInfo
         * @static
         * @param {pb.IBase_Task_TaskItemInfo} message Base_Task_TaskItemInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Task_TaskItemInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.State);
            if (message.ProgressValue != null && Object.hasOwnProperty.call(message, "ProgressValue"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ProgressValue);
            return writer;
        };

        /**
         * Decodes a Base_Task_TaskItemInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Task_TaskItemInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Task_TaskItemInfo} Base_Task_TaskItemInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Task_TaskItemInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Task_TaskItemInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.State = reader.int32();
                        break;
                    }
                case 2: {
                        message.ProgressValue = reader.int32();
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
         * Gets the default type url for Base_Task_TaskItemInfo
         * @function getTypeUrl
         * @memberof pb.Base_Task_TaskItemInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Task_TaskItemInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Task_TaskItemInfo";
        };

        return Base_Task_TaskItemInfo;
    })();

    pb.Base_Task_CupTaskInfo = (function() {

        /**
         * Properties of a Base_Task_CupTaskInfo.
         * @memberof pb
         * @interface IBase_Task_CupTaskInfo
         * @property {Object.<string,number>|null} [CupTaskStatus] Base_Task_CupTaskInfo CupTaskStatus
         */

        /**
         * Constructs a new Base_Task_CupTaskInfo.
         * @memberof pb
         * @classdesc Represents a Base_Task_CupTaskInfo.
         * @implements IBase_Task_CupTaskInfo
         * @constructor
         * @param {pb.IBase_Task_CupTaskInfo=} [properties] Properties to set
         */
        function Base_Task_CupTaskInfo(properties) {
            this.CupTaskStatus = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Task_CupTaskInfo CupTaskStatus.
         * @member {Object.<string,number>} CupTaskStatus
         * @memberof pb.Base_Task_CupTaskInfo
         * @instance
         */
        Base_Task_CupTaskInfo.prototype.CupTaskStatus = $util.emptyObject;

        /**
         * Creates a new Base_Task_CupTaskInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Task_CupTaskInfo
         * @static
         * @param {pb.IBase_Task_CupTaskInfo=} [properties] Properties to set
         * @returns {pb.Base_Task_CupTaskInfo} Base_Task_CupTaskInfo instance
         */
        Base_Task_CupTaskInfo.create = function create(properties) {
            return new Base_Task_CupTaskInfo(properties);
        };

        /**
         * Encodes the specified Base_Task_CupTaskInfo message. Does not implicitly {@link pb.Base_Task_CupTaskInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Task_CupTaskInfo
         * @static
         * @param {pb.IBase_Task_CupTaskInfo} message Base_Task_CupTaskInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Task_CupTaskInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CupTaskStatus != null && Object.hasOwnProperty.call(message, "CupTaskStatus"))
                for (var keys = Object.keys(message.CupTaskStatus), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.CupTaskStatus[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Decodes a Base_Task_CupTaskInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Task_CupTaskInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Task_CupTaskInfo} Base_Task_CupTaskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Task_CupTaskInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Task_CupTaskInfo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        if (message.CupTaskStatus === $util.emptyObject)
                            message.CupTaskStatus = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.CupTaskStatus[key] = value;
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
         * Gets the default type url for Base_Task_CupTaskInfo
         * @function getTypeUrl
         * @memberof pb.Base_Task_CupTaskInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Task_CupTaskInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Task_CupTaskInfo";
        };

        return Base_Task_CupTaskInfo;
    })();

    pb.Net_Task_UpdateCupTaskRet = (function() {

        /**
         * Properties of a Net_Task_UpdateCupTaskRet.
         * @memberof pb
         * @interface INet_Task_UpdateCupTaskRet
         * @property {pb.IBase_Task_CupTaskInfo|null} [CupTaskInfo] Net_Task_UpdateCupTaskRet CupTaskInfo
         */

        /**
         * Constructs a new Net_Task_UpdateCupTaskRet.
         * @memberof pb
         * @classdesc Represents a Net_Task_UpdateCupTaskRet.
         * @implements INet_Task_UpdateCupTaskRet
         * @constructor
         * @param {pb.INet_Task_UpdateCupTaskRet=} [properties] Properties to set
         */
        function Net_Task_UpdateCupTaskRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Task_UpdateCupTaskRet CupTaskInfo.
         * @member {pb.IBase_Task_CupTaskInfo|null|undefined} CupTaskInfo
         * @memberof pb.Net_Task_UpdateCupTaskRet
         * @instance
         */
        Net_Task_UpdateCupTaskRet.prototype.CupTaskInfo = null;

        /**
         * Creates a new Net_Task_UpdateCupTaskRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Task_UpdateCupTaskRet
         * @static
         * @param {pb.INet_Task_UpdateCupTaskRet=} [properties] Properties to set
         * @returns {pb.Net_Task_UpdateCupTaskRet} Net_Task_UpdateCupTaskRet instance
         */
        Net_Task_UpdateCupTaskRet.create = function create(properties) {
            return new Net_Task_UpdateCupTaskRet(properties);
        };

        /**
         * Encodes the specified Net_Task_UpdateCupTaskRet message. Does not implicitly {@link pb.Net_Task_UpdateCupTaskRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Task_UpdateCupTaskRet
         * @static
         * @param {pb.INet_Task_UpdateCupTaskRet} message Net_Task_UpdateCupTaskRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Task_UpdateCupTaskRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CupTaskInfo != null && Object.hasOwnProperty.call(message, "CupTaskInfo"))
                $root.pb.Base_Task_CupTaskInfo.encode(message.CupTaskInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Net_Task_UpdateCupTaskRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Task_UpdateCupTaskRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Task_UpdateCupTaskRet} Net_Task_UpdateCupTaskRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Task_UpdateCupTaskRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Task_UpdateCupTaskRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.CupTaskInfo = $root.pb.Base_Task_CupTaskInfo.decode(reader, reader.uint32());
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
         * Gets the default type url for Net_Task_UpdateCupTaskRet
         * @function getTypeUrl
         * @memberof pb.Net_Task_UpdateCupTaskRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Task_UpdateCupTaskRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Task_UpdateCupTaskRet";
        };

        return Net_Task_UpdateCupTaskRet;
    })();

    pb.Net_Task_UpdateTaskRet = (function() {

        /**
         * Properties of a Net_Task_UpdateTaskRet.
         * @memberof pb
         * @interface INet_Task_UpdateTaskRet
         * @property {Object.<string,pb.IBase_Task_TaskItemInfo>|null} [UpdateItemList] Net_Task_UpdateTaskRet UpdateItemList
         */

        /**
         * Constructs a new Net_Task_UpdateTaskRet.
         * @memberof pb
         * @classdesc Represents a Net_Task_UpdateTaskRet.
         * @implements INet_Task_UpdateTaskRet
         * @constructor
         * @param {pb.INet_Task_UpdateTaskRet=} [properties] Properties to set
         */
        function Net_Task_UpdateTaskRet(properties) {
            this.UpdateItemList = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Task_UpdateTaskRet UpdateItemList.
         * @member {Object.<string,pb.IBase_Task_TaskItemInfo>} UpdateItemList
         * @memberof pb.Net_Task_UpdateTaskRet
         * @instance
         */
        Net_Task_UpdateTaskRet.prototype.UpdateItemList = $util.emptyObject;

        /**
         * Creates a new Net_Task_UpdateTaskRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Task_UpdateTaskRet
         * @static
         * @param {pb.INet_Task_UpdateTaskRet=} [properties] Properties to set
         * @returns {pb.Net_Task_UpdateTaskRet} Net_Task_UpdateTaskRet instance
         */
        Net_Task_UpdateTaskRet.create = function create(properties) {
            return new Net_Task_UpdateTaskRet(properties);
        };

        /**
         * Encodes the specified Net_Task_UpdateTaskRet message. Does not implicitly {@link pb.Net_Task_UpdateTaskRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Task_UpdateTaskRet
         * @static
         * @param {pb.INet_Task_UpdateTaskRet} message Net_Task_UpdateTaskRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Task_UpdateTaskRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UpdateItemList != null && Object.hasOwnProperty.call(message, "UpdateItemList"))
                for (var keys = Object.keys(message.UpdateItemList), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.pb.Base_Task_TaskItemInfo.encode(message.UpdateItemList[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Decodes a Net_Task_UpdateTaskRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Task_UpdateTaskRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Task_UpdateTaskRet} Net_Task_UpdateTaskRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Task_UpdateTaskRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Task_UpdateTaskRet(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.UpdateItemList === $util.emptyObject)
                            message.UpdateItemList = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.pb.Base_Task_TaskItemInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.UpdateItemList[key] = value;
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
         * Gets the default type url for Net_Task_UpdateTaskRet
         * @function getTypeUrl
         * @memberof pb.Net_Task_UpdateTaskRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Task_UpdateTaskRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Task_UpdateTaskRet";
        };

        return Net_Task_UpdateTaskRet;
    })();

    pb.Net_Task_ReceiveTaskRewardReq = (function() {

        /**
         * Properties of a Net_Task_ReceiveTaskRewardReq.
         * @memberof pb
         * @interface INet_Task_ReceiveTaskRewardReq
         * @property {number|null} [TaskId] Net_Task_ReceiveTaskRewardReq TaskId
         */

        /**
         * Constructs a new Net_Task_ReceiveTaskRewardReq.
         * @memberof pb
         * @classdesc Represents a Net_Task_ReceiveTaskRewardReq.
         * @implements INet_Task_ReceiveTaskRewardReq
         * @constructor
         * @param {pb.INet_Task_ReceiveTaskRewardReq=} [properties] Properties to set
         */
        function Net_Task_ReceiveTaskRewardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Task_ReceiveTaskRewardReq TaskId.
         * @member {number} TaskId
         * @memberof pb.Net_Task_ReceiveTaskRewardReq
         * @instance
         */
        Net_Task_ReceiveTaskRewardReq.prototype.TaskId = 0;

        /**
         * Creates a new Net_Task_ReceiveTaskRewardReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Task_ReceiveTaskRewardReq
         * @static
         * @param {pb.INet_Task_ReceiveTaskRewardReq=} [properties] Properties to set
         * @returns {pb.Net_Task_ReceiveTaskRewardReq} Net_Task_ReceiveTaskRewardReq instance
         */
        Net_Task_ReceiveTaskRewardReq.create = function create(properties) {
            return new Net_Task_ReceiveTaskRewardReq(properties);
        };

        /**
         * Encodes the specified Net_Task_ReceiveTaskRewardReq message. Does not implicitly {@link pb.Net_Task_ReceiveTaskRewardReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Task_ReceiveTaskRewardReq
         * @static
         * @param {pb.INet_Task_ReceiveTaskRewardReq} message Net_Task_ReceiveTaskRewardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Task_ReceiveTaskRewardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TaskId != null && Object.hasOwnProperty.call(message, "TaskId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TaskId);
            return writer;
        };

        /**
         * Decodes a Net_Task_ReceiveTaskRewardReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Task_ReceiveTaskRewardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Task_ReceiveTaskRewardReq} Net_Task_ReceiveTaskRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Task_ReceiveTaskRewardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Task_ReceiveTaskRewardReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.TaskId = reader.int32();
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
         * Gets the default type url for Net_Task_ReceiveTaskRewardReq
         * @function getTypeUrl
         * @memberof pb.Net_Task_ReceiveTaskRewardReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Task_ReceiveTaskRewardReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Task_ReceiveTaskRewardReq";
        };

        return Net_Task_ReceiveTaskRewardReq;
    })();

    pb.Net_Task_ReceiveTaskRewardRet = (function() {

        /**
         * Properties of a Net_Task_ReceiveTaskRewardRet.
         * @memberof pb
         * @interface INet_Task_ReceiveTaskRewardRet
         * @property {number|null} [Ret] Net_Task_ReceiveTaskRewardRet Ret
         */

        /**
         * Constructs a new Net_Task_ReceiveTaskRewardRet.
         * @memberof pb
         * @classdesc Represents a Net_Task_ReceiveTaskRewardRet.
         * @implements INet_Task_ReceiveTaskRewardRet
         * @constructor
         * @param {pb.INet_Task_ReceiveTaskRewardRet=} [properties] Properties to set
         */
        function Net_Task_ReceiveTaskRewardRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Task_ReceiveTaskRewardRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Task_ReceiveTaskRewardRet
         * @instance
         */
        Net_Task_ReceiveTaskRewardRet.prototype.Ret = 0;

        /**
         * Creates a new Net_Task_ReceiveTaskRewardRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Task_ReceiveTaskRewardRet
         * @static
         * @param {pb.INet_Task_ReceiveTaskRewardRet=} [properties] Properties to set
         * @returns {pb.Net_Task_ReceiveTaskRewardRet} Net_Task_ReceiveTaskRewardRet instance
         */
        Net_Task_ReceiveTaskRewardRet.create = function create(properties) {
            return new Net_Task_ReceiveTaskRewardRet(properties);
        };

        /**
         * Encodes the specified Net_Task_ReceiveTaskRewardRet message. Does not implicitly {@link pb.Net_Task_ReceiveTaskRewardRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Task_ReceiveTaskRewardRet
         * @static
         * @param {pb.INet_Task_ReceiveTaskRewardRet} message Net_Task_ReceiveTaskRewardRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Task_ReceiveTaskRewardRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            return writer;
        };

        /**
         * Decodes a Net_Task_ReceiveTaskRewardRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Task_ReceiveTaskRewardRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Task_ReceiveTaskRewardRet} Net_Task_ReceiveTaskRewardRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Task_ReceiveTaskRewardRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Task_ReceiveTaskRewardRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
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
         * Gets the default type url for Net_Task_ReceiveTaskRewardRet
         * @function getTypeUrl
         * @memberof pb.Net_Task_ReceiveTaskRewardRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Task_ReceiveTaskRewardRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Task_ReceiveTaskRewardRet";
        };

        return Net_Task_ReceiveTaskRewardRet;
    })();

    pb.Net_Task_GetCupTaskReq = (function() {

        /**
         * Properties of a Net_Task_GetCupTaskReq.
         * @memberof pb
         * @interface INet_Task_GetCupTaskReq
         */

        /**
         * Constructs a new Net_Task_GetCupTaskReq.
         * @memberof pb
         * @classdesc Represents a Net_Task_GetCupTaskReq.
         * @implements INet_Task_GetCupTaskReq
         * @constructor
         * @param {pb.INet_Task_GetCupTaskReq=} [properties] Properties to set
         */
        function Net_Task_GetCupTaskReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Task_GetCupTaskReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Task_GetCupTaskReq
         * @static
         * @param {pb.INet_Task_GetCupTaskReq=} [properties] Properties to set
         * @returns {pb.Net_Task_GetCupTaskReq} Net_Task_GetCupTaskReq instance
         */
        Net_Task_GetCupTaskReq.create = function create(properties) {
            return new Net_Task_GetCupTaskReq(properties);
        };

        /**
         * Encodes the specified Net_Task_GetCupTaskReq message. Does not implicitly {@link pb.Net_Task_GetCupTaskReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Task_GetCupTaskReq
         * @static
         * @param {pb.INet_Task_GetCupTaskReq} message Net_Task_GetCupTaskReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Task_GetCupTaskReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Task_GetCupTaskReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Task_GetCupTaskReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Task_GetCupTaskReq} Net_Task_GetCupTaskReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Task_GetCupTaskReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Task_GetCupTaskReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Task_GetCupTaskReq
         * @function getTypeUrl
         * @memberof pb.Net_Task_GetCupTaskReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Task_GetCupTaskReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Task_GetCupTaskReq";
        };

        return Net_Task_GetCupTaskReq;
    })();

    pb.Net_Task_GetCupTaskRet = (function() {

        /**
         * Properties of a Net_Task_GetCupTaskRet.
         * @memberof pb
         * @interface INet_Task_GetCupTaskRet
         * @property {Object.<string,number>|null} [CupTaskStatus] Net_Task_GetCupTaskRet CupTaskStatus
         */

        /**
         * Constructs a new Net_Task_GetCupTaskRet.
         * @memberof pb
         * @classdesc Represents a Net_Task_GetCupTaskRet.
         * @implements INet_Task_GetCupTaskRet
         * @constructor
         * @param {pb.INet_Task_GetCupTaskRet=} [properties] Properties to set
         */
        function Net_Task_GetCupTaskRet(properties) {
            this.CupTaskStatus = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Task_GetCupTaskRet CupTaskStatus.
         * @member {Object.<string,number>} CupTaskStatus
         * @memberof pb.Net_Task_GetCupTaskRet
         * @instance
         */
        Net_Task_GetCupTaskRet.prototype.CupTaskStatus = $util.emptyObject;

        /**
         * Creates a new Net_Task_GetCupTaskRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Task_GetCupTaskRet
         * @static
         * @param {pb.INet_Task_GetCupTaskRet=} [properties] Properties to set
         * @returns {pb.Net_Task_GetCupTaskRet} Net_Task_GetCupTaskRet instance
         */
        Net_Task_GetCupTaskRet.create = function create(properties) {
            return new Net_Task_GetCupTaskRet(properties);
        };

        /**
         * Encodes the specified Net_Task_GetCupTaskRet message. Does not implicitly {@link pb.Net_Task_GetCupTaskRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Task_GetCupTaskRet
         * @static
         * @param {pb.INet_Task_GetCupTaskRet} message Net_Task_GetCupTaskRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Task_GetCupTaskRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CupTaskStatus != null && Object.hasOwnProperty.call(message, "CupTaskStatus"))
                for (var keys = Object.keys(message.CupTaskStatus), i = 0; i < keys.length; ++i)
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]).uint32(/* id 2, wireType 0 =*/16).int32(message.CupTaskStatus[keys[i]]).ldelim();
            return writer;
        };

        /**
         * Decodes a Net_Task_GetCupTaskRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Task_GetCupTaskRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Task_GetCupTaskRet} Net_Task_GetCupTaskRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Task_GetCupTaskRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Task_GetCupTaskRet(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.CupTaskStatus === $util.emptyObject)
                            message.CupTaskStatus = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = 0;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = reader.int32();
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.CupTaskStatus[key] = value;
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
         * Gets the default type url for Net_Task_GetCupTaskRet
         * @function getTypeUrl
         * @memberof pb.Net_Task_GetCupTaskRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Task_GetCupTaskRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Task_GetCupTaskRet";
        };

        return Net_Task_GetCupTaskRet;
    })();

    pb.Net_Task_ReceiveCupTaskAwardReq = (function() {

        /**
         * Properties of a Net_Task_ReceiveCupTaskAwardReq.
         * @memberof pb
         * @interface INet_Task_ReceiveCupTaskAwardReq
         * @property {number|null} [TaskId] Net_Task_ReceiveCupTaskAwardReq TaskId
         */

        /**
         * Constructs a new Net_Task_ReceiveCupTaskAwardReq.
         * @memberof pb
         * @classdesc Represents a Net_Task_ReceiveCupTaskAwardReq.
         * @implements INet_Task_ReceiveCupTaskAwardReq
         * @constructor
         * @param {pb.INet_Task_ReceiveCupTaskAwardReq=} [properties] Properties to set
         */
        function Net_Task_ReceiveCupTaskAwardReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Task_ReceiveCupTaskAwardReq TaskId.
         * @member {number} TaskId
         * @memberof pb.Net_Task_ReceiveCupTaskAwardReq
         * @instance
         */
        Net_Task_ReceiveCupTaskAwardReq.prototype.TaskId = 0;

        /**
         * Creates a new Net_Task_ReceiveCupTaskAwardReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Task_ReceiveCupTaskAwardReq
         * @static
         * @param {pb.INet_Task_ReceiveCupTaskAwardReq=} [properties] Properties to set
         * @returns {pb.Net_Task_ReceiveCupTaskAwardReq} Net_Task_ReceiveCupTaskAwardReq instance
         */
        Net_Task_ReceiveCupTaskAwardReq.create = function create(properties) {
            return new Net_Task_ReceiveCupTaskAwardReq(properties);
        };

        /**
         * Encodes the specified Net_Task_ReceiveCupTaskAwardReq message. Does not implicitly {@link pb.Net_Task_ReceiveCupTaskAwardReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Task_ReceiveCupTaskAwardReq
         * @static
         * @param {pb.INet_Task_ReceiveCupTaskAwardReq} message Net_Task_ReceiveCupTaskAwardReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Task_ReceiveCupTaskAwardReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TaskId != null && Object.hasOwnProperty.call(message, "TaskId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TaskId);
            return writer;
        };

        /**
         * Decodes a Net_Task_ReceiveCupTaskAwardReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Task_ReceiveCupTaskAwardReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Task_ReceiveCupTaskAwardReq} Net_Task_ReceiveCupTaskAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Task_ReceiveCupTaskAwardReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Task_ReceiveCupTaskAwardReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.TaskId = reader.int32();
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
         * Gets the default type url for Net_Task_ReceiveCupTaskAwardReq
         * @function getTypeUrl
         * @memberof pb.Net_Task_ReceiveCupTaskAwardReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Task_ReceiveCupTaskAwardReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Task_ReceiveCupTaskAwardReq";
        };

        return Net_Task_ReceiveCupTaskAwardReq;
    })();

    pb.Net_Task_ReceiveCupTaskAwardRet = (function() {

        /**
         * Properties of a Net_Task_ReceiveCupTaskAwardRet.
         * @memberof pb
         * @interface INet_Task_ReceiveCupTaskAwardRet
         * @property {number|null} [Ret] Net_Task_ReceiveCupTaskAwardRet Ret
         */

        /**
         * Constructs a new Net_Task_ReceiveCupTaskAwardRet.
         * @memberof pb
         * @classdesc Represents a Net_Task_ReceiveCupTaskAwardRet.
         * @implements INet_Task_ReceiveCupTaskAwardRet
         * @constructor
         * @param {pb.INet_Task_ReceiveCupTaskAwardRet=} [properties] Properties to set
         */
        function Net_Task_ReceiveCupTaskAwardRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Task_ReceiveCupTaskAwardRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Task_ReceiveCupTaskAwardRet
         * @instance
         */
        Net_Task_ReceiveCupTaskAwardRet.prototype.Ret = 0;

        /**
         * Creates a new Net_Task_ReceiveCupTaskAwardRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Task_ReceiveCupTaskAwardRet
         * @static
         * @param {pb.INet_Task_ReceiveCupTaskAwardRet=} [properties] Properties to set
         * @returns {pb.Net_Task_ReceiveCupTaskAwardRet} Net_Task_ReceiveCupTaskAwardRet instance
         */
        Net_Task_ReceiveCupTaskAwardRet.create = function create(properties) {
            return new Net_Task_ReceiveCupTaskAwardRet(properties);
        };

        /**
         * Encodes the specified Net_Task_ReceiveCupTaskAwardRet message. Does not implicitly {@link pb.Net_Task_ReceiveCupTaskAwardRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Task_ReceiveCupTaskAwardRet
         * @static
         * @param {pb.INet_Task_ReceiveCupTaskAwardRet} message Net_Task_ReceiveCupTaskAwardRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Task_ReceiveCupTaskAwardRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            return writer;
        };

        /**
         * Decodes a Net_Task_ReceiveCupTaskAwardRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Task_ReceiveCupTaskAwardRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Task_ReceiveCupTaskAwardRet} Net_Task_ReceiveCupTaskAwardRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Task_ReceiveCupTaskAwardRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Task_ReceiveCupTaskAwardRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
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
         * Gets the default type url for Net_Task_ReceiveCupTaskAwardRet
         * @function getTypeUrl
         * @memberof pb.Net_Task_ReceiveCupTaskAwardRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Task_ReceiveCupTaskAwardRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Task_ReceiveCupTaskAwardRet";
        };

        return Net_Task_ReceiveCupTaskAwardRet;
    })();

    pb.Base_Vip_VipInfo = (function() {

        /**
         * Properties of a Base_Vip_VipInfo.
         * @memberof pb
         * @interface IBase_Vip_VipInfo
         * @property {number|null} [FreeExp] Base_Vip_VipInfo FreeExp
         * @property {number|null} [Exp] Base_Vip_VipInfo Exp
         * @property {number|null} [Level] Base_Vip_VipInfo Level
         * @property {number|null} [NeedExp] Base_Vip_VipInfo NeedExp
         */

        /**
         * Constructs a new Base_Vip_VipInfo.
         * @memberof pb
         * @classdesc Represents a Base_Vip_VipInfo.
         * @implements IBase_Vip_VipInfo
         * @constructor
         * @param {pb.IBase_Vip_VipInfo=} [properties] Properties to set
         */
        function Base_Vip_VipInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Vip_VipInfo FreeExp.
         * @member {number} FreeExp
         * @memberof pb.Base_Vip_VipInfo
         * @instance
         */
        Base_Vip_VipInfo.prototype.FreeExp = 0;

        /**
         * Base_Vip_VipInfo Exp.
         * @member {number} Exp
         * @memberof pb.Base_Vip_VipInfo
         * @instance
         */
        Base_Vip_VipInfo.prototype.Exp = 0;

        /**
         * Base_Vip_VipInfo Level.
         * @member {number} Level
         * @memberof pb.Base_Vip_VipInfo
         * @instance
         */
        Base_Vip_VipInfo.prototype.Level = 0;

        /**
         * Base_Vip_VipInfo NeedExp.
         * @member {number} NeedExp
         * @memberof pb.Base_Vip_VipInfo
         * @instance
         */
        Base_Vip_VipInfo.prototype.NeedExp = 0;

        /**
         * Creates a new Base_Vip_VipInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Vip_VipInfo
         * @static
         * @param {pb.IBase_Vip_VipInfo=} [properties] Properties to set
         * @returns {pb.Base_Vip_VipInfo} Base_Vip_VipInfo instance
         */
        Base_Vip_VipInfo.create = function create(properties) {
            return new Base_Vip_VipInfo(properties);
        };

        /**
         * Encodes the specified Base_Vip_VipInfo message. Does not implicitly {@link pb.Base_Vip_VipInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Vip_VipInfo
         * @static
         * @param {pb.IBase_Vip_VipInfo} message Base_Vip_VipInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Vip_VipInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FreeExp != null && Object.hasOwnProperty.call(message, "FreeExp"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.FreeExp);
            if (message.Exp != null && Object.hasOwnProperty.call(message, "Exp"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.Exp);
            if (message.Level != null && Object.hasOwnProperty.call(message, "Level"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.Level);
            if (message.NeedExp != null && Object.hasOwnProperty.call(message, "NeedExp"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.NeedExp);
            return writer;
        };

        /**
         * Decodes a Base_Vip_VipInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Vip_VipInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Vip_VipInfo} Base_Vip_VipInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Vip_VipInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Vip_VipInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.FreeExp = reader.int32();
                        break;
                    }
                case 2: {
                        message.Exp = reader.int32();
                        break;
                    }
                case 3: {
                        message.Level = reader.int32();
                        break;
                    }
                case 4: {
                        message.NeedExp = reader.int32();
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
         * Gets the default type url for Base_Vip_VipInfo
         * @function getTypeUrl
         * @memberof pb.Base_Vip_VipInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Vip_VipInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Vip_VipInfo";
        };

        return Base_Vip_VipInfo;
    })();

    pb.Base_Other_xxxx = (function() {

        /**
         * Properties of a Base_Other_xxxx.
         * @memberof pb
         * @interface IBase_Other_xxxx
         * @property {number|null} [Id] Base_Other_xxxx Id
         * @property {number|null} [BuyNum] Base_Other_xxxx BuyNum
         */

        /**
         * Constructs a new Base_Other_xxxx.
         * @memberof pb
         * @classdesc Represents a Base_Other_xxxx.
         * @implements IBase_Other_xxxx
         * @constructor
         * @param {pb.IBase_Other_xxxx=} [properties] Properties to set
         */
        function Base_Other_xxxx(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Other_xxxx Id.
         * @member {number} Id
         * @memberof pb.Base_Other_xxxx
         * @instance
         */
        Base_Other_xxxx.prototype.Id = 0;

        /**
         * Base_Other_xxxx BuyNum.
         * @member {number} BuyNum
         * @memberof pb.Base_Other_xxxx
         * @instance
         */
        Base_Other_xxxx.prototype.BuyNum = 0;

        /**
         * Creates a new Base_Other_xxxx instance using the specified properties.
         * @function create
         * @memberof pb.Base_Other_xxxx
         * @static
         * @param {pb.IBase_Other_xxxx=} [properties] Properties to set
         * @returns {pb.Base_Other_xxxx} Base_Other_xxxx instance
         */
        Base_Other_xxxx.create = function create(properties) {
            return new Base_Other_xxxx(properties);
        };

        /**
         * Encodes the specified Base_Other_xxxx message. Does not implicitly {@link pb.Base_Other_xxxx.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Other_xxxx
         * @static
         * @param {pb.IBase_Other_xxxx} message Base_Other_xxxx message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Other_xxxx.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Id);
            if (message.BuyNum != null && Object.hasOwnProperty.call(message, "BuyNum"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BuyNum);
            return writer;
        };

        /**
         * Decodes a Base_Other_xxxx message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Other_xxxx
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Other_xxxx} Base_Other_xxxx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Other_xxxx.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Other_xxxx();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Id = reader.int32();
                        break;
                    }
                case 2: {
                        message.BuyNum = reader.int32();
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
         * Gets the default type url for Base_Other_xxxx
         * @function getTypeUrl
         * @memberof pb.Base_Other_xxxx
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Other_xxxx.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Other_xxxx";
        };

        return Base_Other_xxxx;
    })();

    /**
     * Cmd enum.
     * @name pb.Cmd
     * @enum {number}
     * @property {number} CmdIdle=0 CmdIdle value
     * @property {number} Login_Error=1001000 Login_Error value
     * @property {number} Login_Login=1001001 Login_Login value
     * @property {number} Login_Logout=1001002 Login_Logout value
     * @property {number} Login_KeepAlive=1001003 Login_KeepAlive value
     * @property {number} Login_Reconnect=1001004 Login_Reconnect value
     * @property {number} Login_FacebookSetUserInfo=1001007 Login_FacebookSetUserInfo value
     * @property {number} Login_CollectFacebookReward=1001008 Login_CollectFacebookReward value
     * @property {number} Login_MultiUserLogin=1001011 Login_MultiUserLogin value
     * @property {number} Lobby_UpdateMoneyInfo=21 Lobby_UpdateMoneyInfo value
     * @property {number} Lobby_ChangeName=32 Lobby_ChangeName value
     * @property {number} Lobby_GetThemeList=1002004 Lobby_GetThemeList value
     * @property {number} Lobby_VipNewRule=1003007 Lobby_VipNewRule value
     * @property {number} Lobby_RateUs=1003008 Lobby_RateUs value
     * @property {number} Lobby_GetRanking=1003009 Lobby_GetRanking value
     * @property {number} Lobby_LuckyWheel=1003003 Lobby_LuckyWheel value
     * @property {number} Lobby_EnterStampGame=1003010 Lobby_EnterStampGame value
     * @property {number} Lobby_CollectLoginBonus=1003011 Lobby_CollectLoginBonus value
     * @property {number} Lobby_ReissueLoginBonus=1003012 Lobby_ReissueLoginBonus value
     * @property {number} Lobby_GetDailyBonus=1003015 Lobby_GetDailyBonus value
     * @property {number} Lobby_CollectDailyBonus=1003016 Lobby_CollectDailyBonus value
     * @property {number} Room_GetThemeList=10040011 Room_GetThemeList value
     * @property {number} Room_CreateRoom=1004001 Room_CreateRoom value
     * @property {number} Room_JoinRoom=1004002 Room_JoinRoom value
     * @property {number} Room_DissolveRoom=1004004 Room_DissolveRoom value
     * @property {number} Room_Leave=1004005 Room_Leave value
     * @property {number} Room_NoticeNewMemberJoinRoom=1004006 Room_NoticeNewMemberJoinRoom value
     * @property {number} Room_NoticeRoleLeaveRoom=1004007 Room_NoticeRoleLeaveRoom value
     * @property {number} Room_NoticeRoleOnline=1004003 Room_NoticeRoleOnline value
     * @property {number} Room_QuitRoom=1004008 Room_QuitRoom value
     * @property {number} ZJH_CreateRoom=1005001 ZJH_CreateRoom value
     * @property {number} ZJH_JoinRoom=1005002 ZJH_JoinRoom value
     * @property {number} ZJH_LeaveRoom=1005003 ZJH_LeaveRoom value
     * @property {number} ZJH_GetRoomInfo=1005004 ZJH_GetRoomInfo value
     * @property {number} ZJH_RoleGoldChange=1005005 ZJH_RoleGoldChange value
     * @property {number} ZJH_Ready=1005007 ZJH_Ready value
     * @property {number} ZJH_StartGame=1005009 ZJH_StartGame value
     * @property {number} ZJH_KanPai=1005010 ZJH_KanPai value
     * @property {number} ZJH_BiPai=1005011 ZJH_BiPai value
     * @property {number} ZJH_JiaZhu=1005012 ZJH_JiaZhu value
     * @property {number} ZJH_GenZhu=1005013 ZJH_GenZhu value
     * @property {number} ZJH_NextOperator=1005014 ZJH_NextOperator value
     * @property {number} Activity_UpdateActivity=1006001 Activity_UpdateActivity value
     * @property {number} Activity_ReceiveFireDragonTreasureRewards=1006002 Activity_ReceiveFireDragonTreasureRewards value
     * @property {number} Activity_UpdateAdsUserType=1006003 Activity_UpdateAdsUserType value
     * @property {number} Task_UpdateTask=1007001 Task_UpdateTask value
     * @property {number} Task_UpdateCupTask=1007002 Task_UpdateCupTask value
     * @property {number} Task_GetCupTask=1007003 Task_GetCupTask value
     * @property {number} Task_ReceiveCupTaskAward=1007004 Task_ReceiveCupTaskAward value
     * @property {number} Task_ReceiveTaskReward=1007005 Task_ReceiveTaskReward value
     * @property {number} Shop_GetShopInfo=1008001 Shop_GetShopInfo value
     * @property {number} Shop_BuyItem=1008002 Shop_BuyItem value
     * @property {number} Shop_Pay=1008003 Shop_Pay value
     * @property {number} Inbox_UpdateItemsInfo=1009001 Inbox_UpdateItemsInfo value
     * @property {number} Inbox_SendEmail=1009002 Inbox_SendEmail value
     * @property {number} Inbox_DeleteEmail=1009003 Inbox_DeleteEmail value
     * @property {number} Inbox_ClaimRewardGifts=1009004 Inbox_ClaimRewardGifts value
     * @property {number} Lobby_GetFcmRewards=1009005 Lobby_GetFcmRewards value
     * @property {number} Lobby_CollectFcmRewards=1009006 Lobby_CollectFcmRewards value
     * @property {number} Collect_WelcomeBack=1009007 Collect_WelcomeBack value
     * @property {number} Guide_MarkComplete=1010001 Guide_MarkComplete value
     * @property {number} Ads_GetAdsTasks=1011001 Ads_GetAdsTasks value
     * @property {number} Ads_CollectAdsReward=1011002 Ads_CollectAdsReward value
     * @property {number} PassCheck_UpdateItemsInfo=1012001 PassCheck_UpdateItemsInfo value
     * @property {number} PassCheck_ClaimReward=1012002 PassCheck_ClaimReward value
     * @property {number} PassCheck_Buy=1012003 PassCheck_Buy value
     * @property {number} Slots_Spin=1021001 Slots_Spin value
     */
    pb.Cmd = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "CmdIdle"] = 0;
        values[valuesById[1001000] = "Login_Error"] = 1001000;
        values[valuesById[1001001] = "Login_Login"] = 1001001;
        values[valuesById[1001002] = "Login_Logout"] = 1001002;
        values[valuesById[1001003] = "Login_KeepAlive"] = 1001003;
        values[valuesById[1001004] = "Login_Reconnect"] = 1001004;
        values[valuesById[1001007] = "Login_FacebookSetUserInfo"] = 1001007;
        values[valuesById[1001008] = "Login_CollectFacebookReward"] = 1001008;
        values[valuesById[1001011] = "Login_MultiUserLogin"] = 1001011;
        values[valuesById[21] = "Lobby_UpdateMoneyInfo"] = 21;
        values[valuesById[32] = "Lobby_ChangeName"] = 32;
        values[valuesById[1002004] = "Lobby_GetThemeList"] = 1002004;
        values[valuesById[1003007] = "Lobby_VipNewRule"] = 1003007;
        values[valuesById[1003008] = "Lobby_RateUs"] = 1003008;
        values[valuesById[1003009] = "Lobby_GetRanking"] = 1003009;
        values[valuesById[1003003] = "Lobby_LuckyWheel"] = 1003003;
        values[valuesById[1003010] = "Lobby_EnterStampGame"] = 1003010;
        values[valuesById[1003011] = "Lobby_CollectLoginBonus"] = 1003011;
        values[valuesById[1003012] = "Lobby_ReissueLoginBonus"] = 1003012;
        values[valuesById[1003015] = "Lobby_GetDailyBonus"] = 1003015;
        values[valuesById[1003016] = "Lobby_CollectDailyBonus"] = 1003016;
        values[valuesById[10040011] = "Room_GetThemeList"] = 10040011;
        values[valuesById[1004001] = "Room_CreateRoom"] = 1004001;
        values[valuesById[1004002] = "Room_JoinRoom"] = 1004002;
        values[valuesById[1004004] = "Room_DissolveRoom"] = 1004004;
        values[valuesById[1004005] = "Room_Leave"] = 1004005;
        values[valuesById[1004006] = "Room_NoticeNewMemberJoinRoom"] = 1004006;
        values[valuesById[1004007] = "Room_NoticeRoleLeaveRoom"] = 1004007;
        values[valuesById[1004003] = "Room_NoticeRoleOnline"] = 1004003;
        values[valuesById[1004008] = "Room_QuitRoom"] = 1004008;
        values[valuesById[1005001] = "ZJH_CreateRoom"] = 1005001;
        values[valuesById[1005002] = "ZJH_JoinRoom"] = 1005002;
        values[valuesById[1005003] = "ZJH_LeaveRoom"] = 1005003;
        values[valuesById[1005004] = "ZJH_GetRoomInfo"] = 1005004;
        values[valuesById[1005005] = "ZJH_RoleGoldChange"] = 1005005;
        values[valuesById[1005007] = "ZJH_Ready"] = 1005007;
        values[valuesById[1005009] = "ZJH_StartGame"] = 1005009;
        values[valuesById[1005010] = "ZJH_KanPai"] = 1005010;
        values[valuesById[1005011] = "ZJH_BiPai"] = 1005011;
        values[valuesById[1005012] = "ZJH_JiaZhu"] = 1005012;
        values[valuesById[1005013] = "ZJH_GenZhu"] = 1005013;
        values[valuesById[1005014] = "ZJH_NextOperator"] = 1005014;
        values[valuesById[1006001] = "Activity_UpdateActivity"] = 1006001;
        values[valuesById[1006002] = "Activity_ReceiveFireDragonTreasureRewards"] = 1006002;
        values[valuesById[1006003] = "Activity_UpdateAdsUserType"] = 1006003;
        values[valuesById[1007001] = "Task_UpdateTask"] = 1007001;
        values[valuesById[1007002] = "Task_UpdateCupTask"] = 1007002;
        values[valuesById[1007003] = "Task_GetCupTask"] = 1007003;
        values[valuesById[1007004] = "Task_ReceiveCupTaskAward"] = 1007004;
        values[valuesById[1007005] = "Task_ReceiveTaskReward"] = 1007005;
        values[valuesById[1008001] = "Shop_GetShopInfo"] = 1008001;
        values[valuesById[1008002] = "Shop_BuyItem"] = 1008002;
        values[valuesById[1008003] = "Shop_Pay"] = 1008003;
        values[valuesById[1009001] = "Inbox_UpdateItemsInfo"] = 1009001;
        values[valuesById[1009002] = "Inbox_SendEmail"] = 1009002;
        values[valuesById[1009003] = "Inbox_DeleteEmail"] = 1009003;
        values[valuesById[1009004] = "Inbox_ClaimRewardGifts"] = 1009004;
        values[valuesById[1009005] = "Lobby_GetFcmRewards"] = 1009005;
        values[valuesById[1009006] = "Lobby_CollectFcmRewards"] = 1009006;
        values[valuesById[1009007] = "Collect_WelcomeBack"] = 1009007;
        values[valuesById[1010001] = "Guide_MarkComplete"] = 1010001;
        values[valuesById[1011001] = "Ads_GetAdsTasks"] = 1011001;
        values[valuesById[1011002] = "Ads_CollectAdsReward"] = 1011002;
        values[valuesById[1012001] = "PassCheck_UpdateItemsInfo"] = 1012001;
        values[valuesById[1012002] = "PassCheck_ClaimReward"] = 1012002;
        values[valuesById[1012003] = "PassCheck_Buy"] = 1012003;
        values[valuesById[1021001] = "Slots_Spin"] = 1021001;
        return values;
    })();

    pb.Base_Ranking_ARankingInfo = (function() {

        /**
         * Properties of a Base_Ranking_ARankingInfo.
         * @memberof pb
         * @interface IBase_Ranking_ARankingInfo
         * @property {number|null} [Index] Base_Ranking_ARankingInfo Index
         * @property {string|null} [Id] Base_Ranking_ARankingInfo Id
         * @property {string|null} [NickName] Base_Ranking_ARankingInfo NickName
         * @property {number|null} [HolyGrail] Base_Ranking_ARankingInfo HolyGrail
         */

        /**
         * Constructs a new Base_Ranking_ARankingInfo.
         * @memberof pb
         * @classdesc Represents a Base_Ranking_ARankingInfo.
         * @implements IBase_Ranking_ARankingInfo
         * @constructor
         * @param {pb.IBase_Ranking_ARankingInfo=} [properties] Properties to set
         */
        function Base_Ranking_ARankingInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Ranking_ARankingInfo Index.
         * @member {number} Index
         * @memberof pb.Base_Ranking_ARankingInfo
         * @instance
         */
        Base_Ranking_ARankingInfo.prototype.Index = 0;

        /**
         * Base_Ranking_ARankingInfo Id.
         * @member {string} Id
         * @memberof pb.Base_Ranking_ARankingInfo
         * @instance
         */
        Base_Ranking_ARankingInfo.prototype.Id = "";

        /**
         * Base_Ranking_ARankingInfo NickName.
         * @member {string} NickName
         * @memberof pb.Base_Ranking_ARankingInfo
         * @instance
         */
        Base_Ranking_ARankingInfo.prototype.NickName = "";

        /**
         * Base_Ranking_ARankingInfo HolyGrail.
         * @member {number} HolyGrail
         * @memberof pb.Base_Ranking_ARankingInfo
         * @instance
         */
        Base_Ranking_ARankingInfo.prototype.HolyGrail = 0;

        /**
         * Creates a new Base_Ranking_ARankingInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Ranking_ARankingInfo
         * @static
         * @param {pb.IBase_Ranking_ARankingInfo=} [properties] Properties to set
         * @returns {pb.Base_Ranking_ARankingInfo} Base_Ranking_ARankingInfo instance
         */
        Base_Ranking_ARankingInfo.create = function create(properties) {
            return new Base_Ranking_ARankingInfo(properties);
        };

        /**
         * Encodes the specified Base_Ranking_ARankingInfo message. Does not implicitly {@link pb.Base_Ranking_ARankingInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Ranking_ARankingInfo
         * @static
         * @param {pb.IBase_Ranking_ARankingInfo} message Base_Ranking_ARankingInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Ranking_ARankingInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Index != null && Object.hasOwnProperty.call(message, "Index"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Index);
            if (message.Id != null && Object.hasOwnProperty.call(message, "Id"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Id);
            if (message.NickName != null && Object.hasOwnProperty.call(message, "NickName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.NickName);
            if (message.HolyGrail != null && Object.hasOwnProperty.call(message, "HolyGrail"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.HolyGrail);
            return writer;
        };

        /**
         * Decodes a Base_Ranking_ARankingInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Ranking_ARankingInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Ranking_ARankingInfo} Base_Ranking_ARankingInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Ranking_ARankingInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Ranking_ARankingInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Index = reader.int32();
                        break;
                    }
                case 2: {
                        message.Id = reader.string();
                        break;
                    }
                case 3: {
                        message.NickName = reader.string();
                        break;
                    }
                case 4: {
                        message.HolyGrail = reader.int32();
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
         * Gets the default type url for Base_Ranking_ARankingInfo
         * @function getTypeUrl
         * @memberof pb.Base_Ranking_ARankingInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Ranking_ARankingInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Ranking_ARankingInfo";
        };

        return Base_Ranking_ARankingInfo;
    })();

    pb.Net_Ranking_GetRankingReq = (function() {

        /**
         * Properties of a Net_Ranking_GetRankingReq.
         * @memberof pb
         * @interface INet_Ranking_GetRankingReq
         */

        /**
         * Constructs a new Net_Ranking_GetRankingReq.
         * @memberof pb
         * @classdesc Represents a Net_Ranking_GetRankingReq.
         * @implements INet_Ranking_GetRankingReq
         * @constructor
         * @param {pb.INet_Ranking_GetRankingReq=} [properties] Properties to set
         */
        function Net_Ranking_GetRankingReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Ranking_GetRankingReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Ranking_GetRankingReq
         * @static
         * @param {pb.INet_Ranking_GetRankingReq=} [properties] Properties to set
         * @returns {pb.Net_Ranking_GetRankingReq} Net_Ranking_GetRankingReq instance
         */
        Net_Ranking_GetRankingReq.create = function create(properties) {
            return new Net_Ranking_GetRankingReq(properties);
        };

        /**
         * Encodes the specified Net_Ranking_GetRankingReq message. Does not implicitly {@link pb.Net_Ranking_GetRankingReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Ranking_GetRankingReq
         * @static
         * @param {pb.INet_Ranking_GetRankingReq} message Net_Ranking_GetRankingReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Ranking_GetRankingReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Ranking_GetRankingReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Ranking_GetRankingReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Ranking_GetRankingReq} Net_Ranking_GetRankingReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Ranking_GetRankingReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Ranking_GetRankingReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Ranking_GetRankingReq
         * @function getTypeUrl
         * @memberof pb.Net_Ranking_GetRankingReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Ranking_GetRankingReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Ranking_GetRankingReq";
        };

        return Net_Ranking_GetRankingReq;
    })();

    pb.Net_Ranking_GetRankingRet = (function() {

        /**
         * Properties of a Net_Ranking_GetRankingRet.
         * @memberof pb
         * @interface INet_Ranking_GetRankingRet
         * @property {Array.<pb.IBase_Ranking_ARankingInfo>|null} [RankingList] Net_Ranking_GetRankingRet RankingList
         */

        /**
         * Constructs a new Net_Ranking_GetRankingRet.
         * @memberof pb
         * @classdesc Represents a Net_Ranking_GetRankingRet.
         * @implements INet_Ranking_GetRankingRet
         * @constructor
         * @param {pb.INet_Ranking_GetRankingRet=} [properties] Properties to set
         */
        function Net_Ranking_GetRankingRet(properties) {
            this.RankingList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Ranking_GetRankingRet RankingList.
         * @member {Array.<pb.IBase_Ranking_ARankingInfo>} RankingList
         * @memberof pb.Net_Ranking_GetRankingRet
         * @instance
         */
        Net_Ranking_GetRankingRet.prototype.RankingList = $util.emptyArray;

        /**
         * Creates a new Net_Ranking_GetRankingRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Ranking_GetRankingRet
         * @static
         * @param {pb.INet_Ranking_GetRankingRet=} [properties] Properties to set
         * @returns {pb.Net_Ranking_GetRankingRet} Net_Ranking_GetRankingRet instance
         */
        Net_Ranking_GetRankingRet.create = function create(properties) {
            return new Net_Ranking_GetRankingRet(properties);
        };

        /**
         * Encodes the specified Net_Ranking_GetRankingRet message. Does not implicitly {@link pb.Net_Ranking_GetRankingRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Ranking_GetRankingRet
         * @static
         * @param {pb.INet_Ranking_GetRankingRet} message Net_Ranking_GetRankingRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Ranking_GetRankingRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RankingList != null && message.RankingList.length)
                for (var i = 0; i < message.RankingList.length; ++i)
                    $root.pb.Base_Ranking_ARankingInfo.encode(message.RankingList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Net_Ranking_GetRankingRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Ranking_GetRankingRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Ranking_GetRankingRet} Net_Ranking_GetRankingRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Ranking_GetRankingRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Ranking_GetRankingRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (!(message.RankingList && message.RankingList.length))
                            message.RankingList = [];
                        message.RankingList.push($root.pb.Base_Ranking_ARankingInfo.decode(reader, reader.uint32()));
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
         * Gets the default type url for Net_Ranking_GetRankingRet
         * @function getTypeUrl
         * @memberof pb.Net_Ranking_GetRankingRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Ranking_GetRankingRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Ranking_GetRankingRet";
        };

        return Net_Ranking_GetRankingRet;
    })();

    pb.Base_Room_CfgRoomInfo = (function() {

        /**
         * Properties of a Base_Room_CfgRoomInfo.
         * @memberof pb
         * @interface IBase_Room_CfgRoomInfo
         * @property {number|null} [RoomId] Base_Room_CfgRoomInfo RoomId
         * @property {number|null} [ThemeType] Base_Room_CfgRoomInfo ThemeType
         * @property {string|null} [ThemeName] Base_Room_CfgRoomInfo ThemeName
         * @property {number|null} [LowestCoinsLimit] Base_Room_CfgRoomInfo LowestCoinsLimit
         * @property {number|null} [LimitLevel] Base_Room_CfgRoomInfo LimitLevel
         * @property {number|null} [IsOpen] Base_Room_CfgRoomInfo IsOpen
         */

        /**
         * Constructs a new Base_Room_CfgRoomInfo.
         * @memberof pb
         * @classdesc Represents a Base_Room_CfgRoomInfo.
         * @implements IBase_Room_CfgRoomInfo
         * @constructor
         * @param {pb.IBase_Room_CfgRoomInfo=} [properties] Properties to set
         */
        function Base_Room_CfgRoomInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Room_CfgRoomInfo RoomId.
         * @member {number} RoomId
         * @memberof pb.Base_Room_CfgRoomInfo
         * @instance
         */
        Base_Room_CfgRoomInfo.prototype.RoomId = 0;

        /**
         * Base_Room_CfgRoomInfo ThemeType.
         * @member {number} ThemeType
         * @memberof pb.Base_Room_CfgRoomInfo
         * @instance
         */
        Base_Room_CfgRoomInfo.prototype.ThemeType = 0;

        /**
         * Base_Room_CfgRoomInfo ThemeName.
         * @member {string} ThemeName
         * @memberof pb.Base_Room_CfgRoomInfo
         * @instance
         */
        Base_Room_CfgRoomInfo.prototype.ThemeName = "";

        /**
         * Base_Room_CfgRoomInfo LowestCoinsLimit.
         * @member {number} LowestCoinsLimit
         * @memberof pb.Base_Room_CfgRoomInfo
         * @instance
         */
        Base_Room_CfgRoomInfo.prototype.LowestCoinsLimit = 0;

        /**
         * Base_Room_CfgRoomInfo LimitLevel.
         * @member {number} LimitLevel
         * @memberof pb.Base_Room_CfgRoomInfo
         * @instance
         */
        Base_Room_CfgRoomInfo.prototype.LimitLevel = 0;

        /**
         * Base_Room_CfgRoomInfo IsOpen.
         * @member {number} IsOpen
         * @memberof pb.Base_Room_CfgRoomInfo
         * @instance
         */
        Base_Room_CfgRoomInfo.prototype.IsOpen = 0;

        /**
         * Creates a new Base_Room_CfgRoomInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Room_CfgRoomInfo
         * @static
         * @param {pb.IBase_Room_CfgRoomInfo=} [properties] Properties to set
         * @returns {pb.Base_Room_CfgRoomInfo} Base_Room_CfgRoomInfo instance
         */
        Base_Room_CfgRoomInfo.create = function create(properties) {
            return new Base_Room_CfgRoomInfo(properties);
        };

        /**
         * Encodes the specified Base_Room_CfgRoomInfo message. Does not implicitly {@link pb.Base_Room_CfgRoomInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Room_CfgRoomInfo
         * @static
         * @param {pb.IBase_Room_CfgRoomInfo} message Base_Room_CfgRoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Room_CfgRoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RoomId);
            if (message.ThemeType != null && Object.hasOwnProperty.call(message, "ThemeType"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.ThemeType);
            if (message.ThemeName != null && Object.hasOwnProperty.call(message, "ThemeName"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.ThemeName);
            if (message.LowestCoinsLimit != null && Object.hasOwnProperty.call(message, "LowestCoinsLimit"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.LowestCoinsLimit);
            if (message.LimitLevel != null && Object.hasOwnProperty.call(message, "LimitLevel"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.LimitLevel);
            if (message.IsOpen != null && Object.hasOwnProperty.call(message, "IsOpen"))
                writer.uint32(/* id 7, wireType 0 =*/56).int32(message.IsOpen);
            return writer;
        };

        /**
         * Decodes a Base_Room_CfgRoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Room_CfgRoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Room_CfgRoomInfo} Base_Room_CfgRoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Room_CfgRoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Room_CfgRoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.RoomId = reader.int32();
                        break;
                    }
                case 2: {
                        message.ThemeType = reader.int32();
                        break;
                    }
                case 3: {
                        message.ThemeName = reader.string();
                        break;
                    }
                case 5: {
                        message.LowestCoinsLimit = reader.int32();
                        break;
                    }
                case 6: {
                        message.LimitLevel = reader.int32();
                        break;
                    }
                case 7: {
                        message.IsOpen = reader.int32();
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
         * Gets the default type url for Base_Room_CfgRoomInfo
         * @function getTypeUrl
         * @memberof pb.Base_Room_CfgRoomInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Room_CfgRoomInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Room_CfgRoomInfo";
        };

        return Base_Room_CfgRoomInfo;
    })();

    pb.Net_Room_GetThemeListReq = (function() {

        /**
         * Properties of a Net_Room_GetThemeListReq.
         * @memberof pb
         * @interface INet_Room_GetThemeListReq
         */

        /**
         * Constructs a new Net_Room_GetThemeListReq.
         * @memberof pb
         * @classdesc Represents a Net_Room_GetThemeListReq.
         * @implements INet_Room_GetThemeListReq
         * @constructor
         * @param {pb.INet_Room_GetThemeListReq=} [properties] Properties to set
         */
        function Net_Room_GetThemeListReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Room_GetThemeListReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Room_GetThemeListReq
         * @static
         * @param {pb.INet_Room_GetThemeListReq=} [properties] Properties to set
         * @returns {pb.Net_Room_GetThemeListReq} Net_Room_GetThemeListReq instance
         */
        Net_Room_GetThemeListReq.create = function create(properties) {
            return new Net_Room_GetThemeListReq(properties);
        };

        /**
         * Encodes the specified Net_Room_GetThemeListReq message. Does not implicitly {@link pb.Net_Room_GetThemeListReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Room_GetThemeListReq
         * @static
         * @param {pb.INet_Room_GetThemeListReq} message Net_Room_GetThemeListReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Room_GetThemeListReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Room_GetThemeListReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Room_GetThemeListReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Room_GetThemeListReq} Net_Room_GetThemeListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Room_GetThemeListReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Room_GetThemeListReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Room_GetThemeListReq
         * @function getTypeUrl
         * @memberof pb.Net_Room_GetThemeListReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Room_GetThemeListReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Room_GetThemeListReq";
        };

        return Net_Room_GetThemeListReq;
    })();

    pb.Net_Room_GetThemeListRet = (function() {

        /**
         * Properties of a Net_Room_GetThemeListRet.
         * @memberof pb
         * @interface INet_Room_GetThemeListRet
         * @property {number|null} [Ret] Net_Room_GetThemeListRet Ret
         * @property {Array.<pb.IBase_Room_CfgRoomInfo>|null} [RoomInfos] Net_Room_GetThemeListRet RoomInfos
         */

        /**
         * Constructs a new Net_Room_GetThemeListRet.
         * @memberof pb
         * @classdesc Represents a Net_Room_GetThemeListRet.
         * @implements INet_Room_GetThemeListRet
         * @constructor
         * @param {pb.INet_Room_GetThemeListRet=} [properties] Properties to set
         */
        function Net_Room_GetThemeListRet(properties) {
            this.RoomInfos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Room_GetThemeListRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Room_GetThemeListRet
         * @instance
         */
        Net_Room_GetThemeListRet.prototype.Ret = 0;

        /**
         * Net_Room_GetThemeListRet RoomInfos.
         * @member {Array.<pb.IBase_Room_CfgRoomInfo>} RoomInfos
         * @memberof pb.Net_Room_GetThemeListRet
         * @instance
         */
        Net_Room_GetThemeListRet.prototype.RoomInfos = $util.emptyArray;

        /**
         * Creates a new Net_Room_GetThemeListRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Room_GetThemeListRet
         * @static
         * @param {pb.INet_Room_GetThemeListRet=} [properties] Properties to set
         * @returns {pb.Net_Room_GetThemeListRet} Net_Room_GetThemeListRet instance
         */
        Net_Room_GetThemeListRet.create = function create(properties) {
            return new Net_Room_GetThemeListRet(properties);
        };

        /**
         * Encodes the specified Net_Room_GetThemeListRet message. Does not implicitly {@link pb.Net_Room_GetThemeListRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Room_GetThemeListRet
         * @static
         * @param {pb.INet_Room_GetThemeListRet} message Net_Room_GetThemeListRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Room_GetThemeListRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.RoomInfos != null && message.RoomInfos.length)
                for (var i = 0; i < message.RoomInfos.length; ++i)
                    $root.pb.Base_Room_CfgRoomInfo.encode(message.RoomInfos[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Net_Room_GetThemeListRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Room_GetThemeListRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Room_GetThemeListRet} Net_Room_GetThemeListRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Room_GetThemeListRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Room_GetThemeListRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        if (!(message.RoomInfos && message.RoomInfos.length))
                            message.RoomInfos = [];
                        message.RoomInfos.push($root.pb.Base_Room_CfgRoomInfo.decode(reader, reader.uint32()));
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
         * Gets the default type url for Net_Room_GetThemeListRet
         * @function getTypeUrl
         * @memberof pb.Net_Room_GetThemeListRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Room_GetThemeListRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Room_GetThemeListRet";
        };

        return Net_Room_GetThemeListRet;
    })();

    pb.Base_Room_RoomInfo = (function() {

        /**
         * Properties of a Base_Room_RoomInfo.
         * @memberof pb
         * @interface IBase_Room_RoomInfo
         * @property {number|null} [RoomId] Base_Room_RoomInfo RoomId
         * @property {string|null} [HomeownerId] Base_Room_RoomInfo HomeownerId
         */

        /**
         * Constructs a new Base_Room_RoomInfo.
         * @memberof pb
         * @classdesc Represents a Base_Room_RoomInfo.
         * @implements IBase_Room_RoomInfo
         * @constructor
         * @param {pb.IBase_Room_RoomInfo=} [properties] Properties to set
         */
        function Base_Room_RoomInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_Room_RoomInfo RoomId.
         * @member {number} RoomId
         * @memberof pb.Base_Room_RoomInfo
         * @instance
         */
        Base_Room_RoomInfo.prototype.RoomId = 0;

        /**
         * Base_Room_RoomInfo HomeownerId.
         * @member {string} HomeownerId
         * @memberof pb.Base_Room_RoomInfo
         * @instance
         */
        Base_Room_RoomInfo.prototype.HomeownerId = "";

        /**
         * Creates a new Base_Room_RoomInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Room_RoomInfo
         * @static
         * @param {pb.IBase_Room_RoomInfo=} [properties] Properties to set
         * @returns {pb.Base_Room_RoomInfo} Base_Room_RoomInfo instance
         */
        Base_Room_RoomInfo.create = function create(properties) {
            return new Base_Room_RoomInfo(properties);
        };

        /**
         * Encodes the specified Base_Room_RoomInfo message. Does not implicitly {@link pb.Base_Room_RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Room_RoomInfo
         * @static
         * @param {pb.IBase_Room_RoomInfo} message Base_Room_RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Room_RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RoomId);
            if (message.HomeownerId != null && Object.hasOwnProperty.call(message, "HomeownerId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.HomeownerId);
            return writer;
        };

        /**
         * Decodes a Base_Room_RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Room_RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Room_RoomInfo} Base_Room_RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Room_RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Room_RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.RoomId = reader.int32();
                        break;
                    }
                case 2: {
                        message.HomeownerId = reader.string();
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
         * Gets the default type url for Base_Room_RoomInfo
         * @function getTypeUrl
         * @memberof pb.Base_Room_RoomInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Room_RoomInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Room_RoomInfo";
        };

        return Base_Room_RoomInfo;
    })();

    pb.Net_Room_CreateRoomReq = (function() {

        /**
         * Properties of a Net_Room_CreateRoomReq.
         * @memberof pb
         * @interface INet_Room_CreateRoomReq
         * @property {number|null} [RoomId] Net_Room_CreateRoomReq RoomId
         */

        /**
         * Constructs a new Net_Room_CreateRoomReq.
         * @memberof pb
         * @classdesc Represents a Net_Room_CreateRoomReq.
         * @implements INet_Room_CreateRoomReq
         * @constructor
         * @param {pb.INet_Room_CreateRoomReq=} [properties] Properties to set
         */
        function Net_Room_CreateRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Room_CreateRoomReq RoomId.
         * @member {number} RoomId
         * @memberof pb.Net_Room_CreateRoomReq
         * @instance
         */
        Net_Room_CreateRoomReq.prototype.RoomId = 0;

        /**
         * Creates a new Net_Room_CreateRoomReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Room_CreateRoomReq
         * @static
         * @param {pb.INet_Room_CreateRoomReq=} [properties] Properties to set
         * @returns {pb.Net_Room_CreateRoomReq} Net_Room_CreateRoomReq instance
         */
        Net_Room_CreateRoomReq.create = function create(properties) {
            return new Net_Room_CreateRoomReq(properties);
        };

        /**
         * Encodes the specified Net_Room_CreateRoomReq message. Does not implicitly {@link pb.Net_Room_CreateRoomReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Room_CreateRoomReq
         * @static
         * @param {pb.INet_Room_CreateRoomReq} message Net_Room_CreateRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Room_CreateRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RoomId);
            return writer;
        };

        /**
         * Decodes a Net_Room_CreateRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Room_CreateRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Room_CreateRoomReq} Net_Room_CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Room_CreateRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Room_CreateRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.RoomId = reader.int32();
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
         * Gets the default type url for Net_Room_CreateRoomReq
         * @function getTypeUrl
         * @memberof pb.Net_Room_CreateRoomReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Room_CreateRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Room_CreateRoomReq";
        };

        return Net_Room_CreateRoomReq;
    })();

    pb.Net_Room_CreateRoomRet = (function() {

        /**
         * Properties of a Net_Room_CreateRoomRet.
         * @memberof pb
         * @interface INet_Room_CreateRoomRet
         * @property {number|null} [Ret] Net_Room_CreateRoomRet Ret
         * @property {number|null} [RoomId] Net_Room_CreateRoomRet RoomId
         */

        /**
         * Constructs a new Net_Room_CreateRoomRet.
         * @memberof pb
         * @classdesc Represents a Net_Room_CreateRoomRet.
         * @implements INet_Room_CreateRoomRet
         * @constructor
         * @param {pb.INet_Room_CreateRoomRet=} [properties] Properties to set
         */
        function Net_Room_CreateRoomRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Room_CreateRoomRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Room_CreateRoomRet
         * @instance
         */
        Net_Room_CreateRoomRet.prototype.Ret = 0;

        /**
         * Net_Room_CreateRoomRet RoomId.
         * @member {number} RoomId
         * @memberof pb.Net_Room_CreateRoomRet
         * @instance
         */
        Net_Room_CreateRoomRet.prototype.RoomId = 0;

        /**
         * Creates a new Net_Room_CreateRoomRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Room_CreateRoomRet
         * @static
         * @param {pb.INet_Room_CreateRoomRet=} [properties] Properties to set
         * @returns {pb.Net_Room_CreateRoomRet} Net_Room_CreateRoomRet instance
         */
        Net_Room_CreateRoomRet.create = function create(properties) {
            return new Net_Room_CreateRoomRet(properties);
        };

        /**
         * Encodes the specified Net_Room_CreateRoomRet message. Does not implicitly {@link pb.Net_Room_CreateRoomRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Room_CreateRoomRet
         * @static
         * @param {pb.INet_Room_CreateRoomRet} message Net_Room_CreateRoomRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Room_CreateRoomRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.RoomId);
            return writer;
        };

        /**
         * Decodes a Net_Room_CreateRoomRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Room_CreateRoomRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Room_CreateRoomRet} Net_Room_CreateRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Room_CreateRoomRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Room_CreateRoomRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.RoomId = reader.int32();
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
         * Gets the default type url for Net_Room_CreateRoomRet
         * @function getTypeUrl
         * @memberof pb.Net_Room_CreateRoomRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Room_CreateRoomRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Room_CreateRoomRet";
        };

        return Net_Room_CreateRoomRet;
    })();

    pb.Net_Room_JoinRoomReq = (function() {

        /**
         * Properties of a Net_Room_JoinRoomReq.
         * @memberof pb
         * @interface INet_Room_JoinRoomReq
         * @property {number|null} [RoomId] Net_Room_JoinRoomReq RoomId
         */

        /**
         * Constructs a new Net_Room_JoinRoomReq.
         * @memberof pb
         * @classdesc Represents a Net_Room_JoinRoomReq.
         * @implements INet_Room_JoinRoomReq
         * @constructor
         * @param {pb.INet_Room_JoinRoomReq=} [properties] Properties to set
         */
        function Net_Room_JoinRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Room_JoinRoomReq RoomId.
         * @member {number} RoomId
         * @memberof pb.Net_Room_JoinRoomReq
         * @instance
         */
        Net_Room_JoinRoomReq.prototype.RoomId = 0;

        /**
         * Creates a new Net_Room_JoinRoomReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Room_JoinRoomReq
         * @static
         * @param {pb.INet_Room_JoinRoomReq=} [properties] Properties to set
         * @returns {pb.Net_Room_JoinRoomReq} Net_Room_JoinRoomReq instance
         */
        Net_Room_JoinRoomReq.create = function create(properties) {
            return new Net_Room_JoinRoomReq(properties);
        };

        /**
         * Encodes the specified Net_Room_JoinRoomReq message. Does not implicitly {@link pb.Net_Room_JoinRoomReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Room_JoinRoomReq
         * @static
         * @param {pb.INet_Room_JoinRoomReq} message Net_Room_JoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Room_JoinRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RoomId);
            return writer;
        };

        /**
         * Decodes a Net_Room_JoinRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Room_JoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Room_JoinRoomReq} Net_Room_JoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Room_JoinRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Room_JoinRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.RoomId = reader.int32();
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
         * Gets the default type url for Net_Room_JoinRoomReq
         * @function getTypeUrl
         * @memberof pb.Net_Room_JoinRoomReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Room_JoinRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Room_JoinRoomReq";
        };

        return Net_Room_JoinRoomReq;
    })();

    pb.Net_Room_JoinRoomRet = (function() {

        /**
         * Properties of a Net_Room_JoinRoomRet.
         * @memberof pb
         * @interface INet_Room_JoinRoomRet
         * @property {number|null} [Ret] Net_Room_JoinRoomRet Ret
         * @property {number|null} [RoomId] Net_Room_JoinRoomRet RoomId
         */

        /**
         * Constructs a new Net_Room_JoinRoomRet.
         * @memberof pb
         * @classdesc Represents a Net_Room_JoinRoomRet.
         * @implements INet_Room_JoinRoomRet
         * @constructor
         * @param {pb.INet_Room_JoinRoomRet=} [properties] Properties to set
         */
        function Net_Room_JoinRoomRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Room_JoinRoomRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Room_JoinRoomRet
         * @instance
         */
        Net_Room_JoinRoomRet.prototype.Ret = 0;

        /**
         * Net_Room_JoinRoomRet RoomId.
         * @member {number} RoomId
         * @memberof pb.Net_Room_JoinRoomRet
         * @instance
         */
        Net_Room_JoinRoomRet.prototype.RoomId = 0;

        /**
         * Creates a new Net_Room_JoinRoomRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Room_JoinRoomRet
         * @static
         * @param {pb.INet_Room_JoinRoomRet=} [properties] Properties to set
         * @returns {pb.Net_Room_JoinRoomRet} Net_Room_JoinRoomRet instance
         */
        Net_Room_JoinRoomRet.create = function create(properties) {
            return new Net_Room_JoinRoomRet(properties);
        };

        /**
         * Encodes the specified Net_Room_JoinRoomRet message. Does not implicitly {@link pb.Net_Room_JoinRoomRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Room_JoinRoomRet
         * @static
         * @param {pb.INet_Room_JoinRoomRet} message Net_Room_JoinRoomRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Room_JoinRoomRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.RoomId);
            return writer;
        };

        /**
         * Decodes a Net_Room_JoinRoomRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Room_JoinRoomRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Room_JoinRoomRet} Net_Room_JoinRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Room_JoinRoomRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Room_JoinRoomRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.RoomId = reader.int32();
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
         * Gets the default type url for Net_Room_JoinRoomRet
         * @function getTypeUrl
         * @memberof pb.Net_Room_JoinRoomRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Room_JoinRoomRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Room_JoinRoomRet";
        };

        return Net_Room_JoinRoomRet;
    })();

    pb.Net_Room_DissolveRoomReq = (function() {

        /**
         * Properties of a Net_Room_DissolveRoomReq.
         * @memberof pb
         * @interface INet_Room_DissolveRoomReq
         */

        /**
         * Constructs a new Net_Room_DissolveRoomReq.
         * @memberof pb
         * @classdesc Represents a Net_Room_DissolveRoomReq.
         * @implements INet_Room_DissolveRoomReq
         * @constructor
         * @param {pb.INet_Room_DissolveRoomReq=} [properties] Properties to set
         */
        function Net_Room_DissolveRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Room_DissolveRoomReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Room_DissolveRoomReq
         * @static
         * @param {pb.INet_Room_DissolveRoomReq=} [properties] Properties to set
         * @returns {pb.Net_Room_DissolveRoomReq} Net_Room_DissolveRoomReq instance
         */
        Net_Room_DissolveRoomReq.create = function create(properties) {
            return new Net_Room_DissolveRoomReq(properties);
        };

        /**
         * Encodes the specified Net_Room_DissolveRoomReq message. Does not implicitly {@link pb.Net_Room_DissolveRoomReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Room_DissolveRoomReq
         * @static
         * @param {pb.INet_Room_DissolveRoomReq} message Net_Room_DissolveRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Room_DissolveRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Room_DissolveRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Room_DissolveRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Room_DissolveRoomReq} Net_Room_DissolveRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Room_DissolveRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Room_DissolveRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Room_DissolveRoomReq
         * @function getTypeUrl
         * @memberof pb.Net_Room_DissolveRoomReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Room_DissolveRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Room_DissolveRoomReq";
        };

        return Net_Room_DissolveRoomReq;
    })();

    pb.Net_Room_DissolveRoomRet = (function() {

        /**
         * Properties of a Net_Room_DissolveRoomRet.
         * @memberof pb
         * @interface INet_Room_DissolveRoomRet
         * @property {number|null} [Ret] Net_Room_DissolveRoomRet Ret
         */

        /**
         * Constructs a new Net_Room_DissolveRoomRet.
         * @memberof pb
         * @classdesc Represents a Net_Room_DissolveRoomRet.
         * @implements INet_Room_DissolveRoomRet
         * @constructor
         * @param {pb.INet_Room_DissolveRoomRet=} [properties] Properties to set
         */
        function Net_Room_DissolveRoomRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Room_DissolveRoomRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Room_DissolveRoomRet
         * @instance
         */
        Net_Room_DissolveRoomRet.prototype.Ret = 0;

        /**
         * Creates a new Net_Room_DissolveRoomRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Room_DissolveRoomRet
         * @static
         * @param {pb.INet_Room_DissolveRoomRet=} [properties] Properties to set
         * @returns {pb.Net_Room_DissolveRoomRet} Net_Room_DissolveRoomRet instance
         */
        Net_Room_DissolveRoomRet.create = function create(properties) {
            return new Net_Room_DissolveRoomRet(properties);
        };

        /**
         * Encodes the specified Net_Room_DissolveRoomRet message. Does not implicitly {@link pb.Net_Room_DissolveRoomRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Room_DissolveRoomRet
         * @static
         * @param {pb.INet_Room_DissolveRoomRet} message Net_Room_DissolveRoomRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Room_DissolveRoomRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            return writer;
        };

        /**
         * Decodes a Net_Room_DissolveRoomRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Room_DissolveRoomRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Room_DissolveRoomRet} Net_Room_DissolveRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Room_DissolveRoomRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Room_DissolveRoomRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
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
         * Gets the default type url for Net_Room_DissolveRoomRet
         * @function getTypeUrl
         * @memberof pb.Net_Room_DissolveRoomRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Room_DissolveRoomRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Room_DissolveRoomRet";
        };

        return Net_Room_DissolveRoomRet;
    })();

    pb.Net_Room_LeaveReq = (function() {

        /**
         * Properties of a Net_Room_LeaveReq.
         * @memberof pb
         * @interface INet_Room_LeaveReq
         */

        /**
         * Constructs a new Net_Room_LeaveReq.
         * @memberof pb
         * @classdesc Represents a Net_Room_LeaveReq.
         * @implements INet_Room_LeaveReq
         * @constructor
         * @param {pb.INet_Room_LeaveReq=} [properties] Properties to set
         */
        function Net_Room_LeaveReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_Room_LeaveReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Room_LeaveReq
         * @static
         * @param {pb.INet_Room_LeaveReq=} [properties] Properties to set
         * @returns {pb.Net_Room_LeaveReq} Net_Room_LeaveReq instance
         */
        Net_Room_LeaveReq.create = function create(properties) {
            return new Net_Room_LeaveReq(properties);
        };

        /**
         * Encodes the specified Net_Room_LeaveReq message. Does not implicitly {@link pb.Net_Room_LeaveReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Room_LeaveReq
         * @static
         * @param {pb.INet_Room_LeaveReq} message Net_Room_LeaveReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Room_LeaveReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_Room_LeaveReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Room_LeaveReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Room_LeaveReq} Net_Room_LeaveReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Room_LeaveReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Room_LeaveReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_Room_LeaveReq
         * @function getTypeUrl
         * @memberof pb.Net_Room_LeaveReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Room_LeaveReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Room_LeaveReq";
        };

        return Net_Room_LeaveReq;
    })();

    pb.Net_Room_LeaveRet = (function() {

        /**
         * Properties of a Net_Room_LeaveRet.
         * @memberof pb
         * @interface INet_Room_LeaveRet
         * @property {number|null} [Ret] Net_Room_LeaveRet Ret
         * @property {number|null} [RoomId] Net_Room_LeaveRet RoomId
         */

        /**
         * Constructs a new Net_Room_LeaveRet.
         * @memberof pb
         * @classdesc Represents a Net_Room_LeaveRet.
         * @implements INet_Room_LeaveRet
         * @constructor
         * @param {pb.INet_Room_LeaveRet=} [properties] Properties to set
         */
        function Net_Room_LeaveRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Room_LeaveRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Room_LeaveRet
         * @instance
         */
        Net_Room_LeaveRet.prototype.Ret = 0;

        /**
         * Net_Room_LeaveRet RoomId.
         * @member {number} RoomId
         * @memberof pb.Net_Room_LeaveRet
         * @instance
         */
        Net_Room_LeaveRet.prototype.RoomId = 0;

        /**
         * Creates a new Net_Room_LeaveRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Room_LeaveRet
         * @static
         * @param {pb.INet_Room_LeaveRet=} [properties] Properties to set
         * @returns {pb.Net_Room_LeaveRet} Net_Room_LeaveRet instance
         */
        Net_Room_LeaveRet.create = function create(properties) {
            return new Net_Room_LeaveRet(properties);
        };

        /**
         * Encodes the specified Net_Room_LeaveRet message. Does not implicitly {@link pb.Net_Room_LeaveRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Room_LeaveRet
         * @static
         * @param {pb.INet_Room_LeaveRet} message Net_Room_LeaveRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Room_LeaveRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.RoomId);
            return writer;
        };

        /**
         * Decodes a Net_Room_LeaveRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Room_LeaveRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Room_LeaveRet} Net_Room_LeaveRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Room_LeaveRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Room_LeaveRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.RoomId = reader.int32();
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
         * Gets the default type url for Net_Room_LeaveRet
         * @function getTypeUrl
         * @memberof pb.Net_Room_LeaveRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Room_LeaveRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Room_LeaveRet";
        };

        return Net_Room_LeaveRet;
    })();

    pb.Base_Slots_SlotsInfo = (function() {

        /**
         * Properties of a Base_Slots_SlotsInfo.
         * @memberof pb
         * @interface IBase_Slots_SlotsInfo
         */

        /**
         * Constructs a new Base_Slots_SlotsInfo.
         * @memberof pb
         * @classdesc Represents a Base_Slots_SlotsInfo.
         * @implements IBase_Slots_SlotsInfo
         * @constructor
         * @param {pb.IBase_Slots_SlotsInfo=} [properties] Properties to set
         */
        function Base_Slots_SlotsInfo(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Base_Slots_SlotsInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_Slots_SlotsInfo
         * @static
         * @param {pb.IBase_Slots_SlotsInfo=} [properties] Properties to set
         * @returns {pb.Base_Slots_SlotsInfo} Base_Slots_SlotsInfo instance
         */
        Base_Slots_SlotsInfo.create = function create(properties) {
            return new Base_Slots_SlotsInfo(properties);
        };

        /**
         * Encodes the specified Base_Slots_SlotsInfo message. Does not implicitly {@link pb.Base_Slots_SlotsInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_Slots_SlotsInfo
         * @static
         * @param {pb.IBase_Slots_SlotsInfo} message Base_Slots_SlotsInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_Slots_SlotsInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Base_Slots_SlotsInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_Slots_SlotsInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_Slots_SlotsInfo} Base_Slots_SlotsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_Slots_SlotsInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_Slots_SlotsInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Base_Slots_SlotsInfo
         * @function getTypeUrl
         * @memberof pb.Base_Slots_SlotsInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_Slots_SlotsInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_Slots_SlotsInfo";
        };

        return Base_Slots_SlotsInfo;
    })();

    pb.Net_Slots_SpinReq = (function() {

        /**
         * Properties of a Net_Slots_SpinReq.
         * @memberof pb
         * @interface INet_Slots_SpinReq
         * @property {number|null} [TaskId] Net_Slots_SpinReq TaskId
         */

        /**
         * Constructs a new Net_Slots_SpinReq.
         * @memberof pb
         * @classdesc Represents a Net_Slots_SpinReq.
         * @implements INet_Slots_SpinReq
         * @constructor
         * @param {pb.INet_Slots_SpinReq=} [properties] Properties to set
         */
        function Net_Slots_SpinReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Slots_SpinReq TaskId.
         * @member {number} TaskId
         * @memberof pb.Net_Slots_SpinReq
         * @instance
         */
        Net_Slots_SpinReq.prototype.TaskId = 0;

        /**
         * Creates a new Net_Slots_SpinReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_Slots_SpinReq
         * @static
         * @param {pb.INet_Slots_SpinReq=} [properties] Properties to set
         * @returns {pb.Net_Slots_SpinReq} Net_Slots_SpinReq instance
         */
        Net_Slots_SpinReq.create = function create(properties) {
            return new Net_Slots_SpinReq(properties);
        };

        /**
         * Encodes the specified Net_Slots_SpinReq message. Does not implicitly {@link pb.Net_Slots_SpinReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Slots_SpinReq
         * @static
         * @param {pb.INet_Slots_SpinReq} message Net_Slots_SpinReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Slots_SpinReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TaskId != null && Object.hasOwnProperty.call(message, "TaskId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.TaskId);
            return writer;
        };

        /**
         * Decodes a Net_Slots_SpinReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Slots_SpinReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Slots_SpinReq} Net_Slots_SpinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Slots_SpinReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Slots_SpinReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.TaskId = reader.int32();
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
         * Gets the default type url for Net_Slots_SpinReq
         * @function getTypeUrl
         * @memberof pb.Net_Slots_SpinReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Slots_SpinReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Slots_SpinReq";
        };

        return Net_Slots_SpinReq;
    })();

    pb.Net_Slots_SpinRet = (function() {

        /**
         * Properties of a Net_Slots_SpinRet.
         * @memberof pb
         * @interface INet_Slots_SpinRet
         * @property {number|null} [Ret] Net_Slots_SpinRet Ret
         */

        /**
         * Constructs a new Net_Slots_SpinRet.
         * @memberof pb
         * @classdesc Represents a Net_Slots_SpinRet.
         * @implements INet_Slots_SpinRet
         * @constructor
         * @param {pb.INet_Slots_SpinRet=} [properties] Properties to set
         */
        function Net_Slots_SpinRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_Slots_SpinRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_Slots_SpinRet
         * @instance
         */
        Net_Slots_SpinRet.prototype.Ret = 0;

        /**
         * Creates a new Net_Slots_SpinRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_Slots_SpinRet
         * @static
         * @param {pb.INet_Slots_SpinRet=} [properties] Properties to set
         * @returns {pb.Net_Slots_SpinRet} Net_Slots_SpinRet instance
         */
        Net_Slots_SpinRet.create = function create(properties) {
            return new Net_Slots_SpinRet(properties);
        };

        /**
         * Encodes the specified Net_Slots_SpinRet message. Does not implicitly {@link pb.Net_Slots_SpinRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_Slots_SpinRet
         * @static
         * @param {pb.INet_Slots_SpinRet} message Net_Slots_SpinRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_Slots_SpinRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            return writer;
        };

        /**
         * Decodes a Net_Slots_SpinRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_Slots_SpinRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_Slots_SpinRet} Net_Slots_SpinRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_Slots_SpinRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_Slots_SpinRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
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
         * Gets the default type url for Net_Slots_SpinRet
         * @function getTypeUrl
         * @memberof pb.Net_Slots_SpinRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_Slots_SpinRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_Slots_SpinRet";
        };

        return Net_Slots_SpinRet;
    })();

    /**
     * EZJHConstant enum.
     * @name pb.EZJHConstant
     * @enum {number}
     * @property {number} Invalid=0 Invalid value
     * @property {number} TotalRoles=9 TotalRoles value
     */
    pb.EZJHConstant = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "Invalid"] = 0;
        values[valuesById[9] = "TotalRoles"] = 9;
        return values;
    })();

    /**
     * EZJH enum.
     * @name pb.EZJH
     * @enum {number}
     * @property {number} NotStarted=0 NotStarted value
     * @property {number} InPreparation=1 InPreparation value
     * @property {number} InGame=2 InGame value
     */
    pb.EZJH = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "NotStarted"] = 0;
        values[valuesById[1] = "InPreparation"] = 1;
        values[valuesById[2] = "InGame"] = 2;
        return values;
    })();

    /**
     * C_ZJH enum.
     * @name pb.C_ZJH
     * @enum {number}
     * @property {number} C_ZJH_INVALID=0 C_ZJH_INVALID value
     * @property {number} ReadySeconds=30 ReadySeconds value
     * @property {number} NotReadySeconds=60 NotReadySeconds value
     */
    pb.C_ZJH = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "C_ZJH_INVALID"] = 0;
        values[valuesById[30] = "ReadySeconds"] = 30;
        values[valuesById[60] = "NotReadySeconds"] = 60;
        return values;
    })();

    /**
     * E_ZJH_Operation enum.
     * @name pb.E_ZJH_Operation
     * @enum {number}
     * @property {number} start=0 start value
     * @property {number} Chupai=2 Chupai value
     * @property {number} gen_zhu=3 gen_zhu value
     * @property {number} jia_zhu=4 jia_zhu value
     * @property {number} bi_pai=5 bi_pai value
     * @property {number} look_card=6 look_card value
     * @property {number} qi_pai=7 qi_pai value
     * @property {number} ya_man=8 ya_man value
     * @property {number} DiuChouMa=9 DiuChouMa value
     * @property {number} tx_RatioCard=10 tx_RatioCard value
     * @property {number} tx_liangpaihecai=11 tx_liangpaihecai value
     */
    pb.E_ZJH_Operation = (function() {
        var valuesById = {}, values = Object.create(valuesById);
        values[valuesById[0] = "start"] = 0;
        values[valuesById[2] = "Chupai"] = 2;
        values[valuesById[3] = "gen_zhu"] = 3;
        values[valuesById[4] = "jia_zhu"] = 4;
        values[valuesById[5] = "bi_pai"] = 5;
        values[valuesById[6] = "look_card"] = 6;
        values[valuesById[7] = "qi_pai"] = 7;
        values[valuesById[8] = "ya_man"] = 8;
        values[valuesById[9] = "DiuChouMa"] = 9;
        values[valuesById[10] = "tx_RatioCard"] = 10;
        values[valuesById[11] = "tx_liangpaihecai"] = 11;
        return values;
    })();

    pb.Base_ZJH_UserInfo = (function() {

        /**
         * Properties of a Base_ZJH_UserInfo.
         * @memberof pb
         * @interface IBase_ZJH_UserInfo
         * @property {string|null} [UserId] Base_ZJH_UserInfo UserId
         * @property {string|null} [NickName] Base_ZJH_UserInfo NickName
         * @property {number|Long|null} [Coins] Base_ZJH_UserInfo Coins
         * @property {boolean|null} [IsOffline] Base_ZJH_UserInfo IsOffline
         * @property {number|null} [ChairId] Base_ZJH_UserInfo ChairId
         * @property {boolean|null} [IsReady] Base_ZJH_UserInfo IsReady
         * @property {boolean|null} [IsKanPai] Base_ZJH_UserInfo IsKanPai
         * @property {Array.<string>|null} [Cards] Base_ZJH_UserInfo Cards
         * @property {number|null} [BettingNum] Base_ZJH_UserInfo BettingNum
         * @property {number|null} [TotalBettingNum] Base_ZJH_UserInfo TotalBettingNum
         * @property {number|null} [MaxScore] Base_ZJH_UserInfo MaxScore
         * @property {number|null} [MinScore] Base_ZJH_UserInfo MinScore
         * @property {string|null} [NextOperatorId] Base_ZJH_UserInfo NextOperatorId
         */

        /**
         * Constructs a new Base_ZJH_UserInfo.
         * @memberof pb
         * @classdesc Represents a Base_ZJH_UserInfo.
         * @implements IBase_ZJH_UserInfo
         * @constructor
         * @param {pb.IBase_ZJH_UserInfo=} [properties] Properties to set
         */
        function Base_ZJH_UserInfo(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_ZJH_UserInfo UserId.
         * @member {string} UserId
         * @memberof pb.Base_ZJH_UserInfo
         * @instance
         */
        Base_ZJH_UserInfo.prototype.UserId = "";

        /**
         * Base_ZJH_UserInfo NickName.
         * @member {string} NickName
         * @memberof pb.Base_ZJH_UserInfo
         * @instance
         */
        Base_ZJH_UserInfo.prototype.NickName = "";

        /**
         * Base_ZJH_UserInfo Coins.
         * @member {number|Long} Coins
         * @memberof pb.Base_ZJH_UserInfo
         * @instance
         */
        Base_ZJH_UserInfo.prototype.Coins = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Base_ZJH_UserInfo IsOffline.
         * @member {boolean} IsOffline
         * @memberof pb.Base_ZJH_UserInfo
         * @instance
         */
        Base_ZJH_UserInfo.prototype.IsOffline = false;

        /**
         * Base_ZJH_UserInfo ChairId.
         * @member {number} ChairId
         * @memberof pb.Base_ZJH_UserInfo
         * @instance
         */
        Base_ZJH_UserInfo.prototype.ChairId = 0;

        /**
         * Base_ZJH_UserInfo IsReady.
         * @member {boolean} IsReady
         * @memberof pb.Base_ZJH_UserInfo
         * @instance
         */
        Base_ZJH_UserInfo.prototype.IsReady = false;

        /**
         * Base_ZJH_UserInfo IsKanPai.
         * @member {boolean} IsKanPai
         * @memberof pb.Base_ZJH_UserInfo
         * @instance
         */
        Base_ZJH_UserInfo.prototype.IsKanPai = false;

        /**
         * Base_ZJH_UserInfo Cards.
         * @member {Array.<string>} Cards
         * @memberof pb.Base_ZJH_UserInfo
         * @instance
         */
        Base_ZJH_UserInfo.prototype.Cards = $util.emptyArray;

        /**
         * Base_ZJH_UserInfo BettingNum.
         * @member {number} BettingNum
         * @memberof pb.Base_ZJH_UserInfo
         * @instance
         */
        Base_ZJH_UserInfo.prototype.BettingNum = 0;

        /**
         * Base_ZJH_UserInfo TotalBettingNum.
         * @member {number} TotalBettingNum
         * @memberof pb.Base_ZJH_UserInfo
         * @instance
         */
        Base_ZJH_UserInfo.prototype.TotalBettingNum = 0;

        /**
         * Base_ZJH_UserInfo MaxScore.
         * @member {number} MaxScore
         * @memberof pb.Base_ZJH_UserInfo
         * @instance
         */
        Base_ZJH_UserInfo.prototype.MaxScore = 0;

        /**
         * Base_ZJH_UserInfo MinScore.
         * @member {number} MinScore
         * @memberof pb.Base_ZJH_UserInfo
         * @instance
         */
        Base_ZJH_UserInfo.prototype.MinScore = 0;

        /**
         * Base_ZJH_UserInfo NextOperatorId.
         * @member {string} NextOperatorId
         * @memberof pb.Base_ZJH_UserInfo
         * @instance
         */
        Base_ZJH_UserInfo.prototype.NextOperatorId = "";

        /**
         * Creates a new Base_ZJH_UserInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_ZJH_UserInfo
         * @static
         * @param {pb.IBase_ZJH_UserInfo=} [properties] Properties to set
         * @returns {pb.Base_ZJH_UserInfo} Base_ZJH_UserInfo instance
         */
        Base_ZJH_UserInfo.create = function create(properties) {
            return new Base_ZJH_UserInfo(properties);
        };

        /**
         * Encodes the specified Base_ZJH_UserInfo message. Does not implicitly {@link pb.Base_ZJH_UserInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_ZJH_UserInfo
         * @static
         * @param {pb.IBase_ZJH_UserInfo} message Base_ZJH_UserInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_ZJH_UserInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.UserId);
            if (message.NickName != null && Object.hasOwnProperty.call(message, "NickName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.NickName);
            if (message.Coins != null && Object.hasOwnProperty.call(message, "Coins"))
                writer.uint32(/* id 3, wireType 0 =*/24).int64(message.Coins);
            if (message.IsOffline != null && Object.hasOwnProperty.call(message, "IsOffline"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.IsOffline);
            if (message.ChairId != null && Object.hasOwnProperty.call(message, "ChairId"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.ChairId);
            if (message.IsReady != null && Object.hasOwnProperty.call(message, "IsReady"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.IsReady);
            if (message.IsKanPai != null && Object.hasOwnProperty.call(message, "IsKanPai"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.IsKanPai);
            if (message.Cards != null && message.Cards.length)
                for (var i = 0; i < message.Cards.length; ++i)
                    writer.uint32(/* id 9, wireType 2 =*/74).string(message.Cards[i]);
            if (message.BettingNum != null && Object.hasOwnProperty.call(message, "BettingNum"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.BettingNum);
            if (message.TotalBettingNum != null && Object.hasOwnProperty.call(message, "TotalBettingNum"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.TotalBettingNum);
            if (message.MaxScore != null && Object.hasOwnProperty.call(message, "MaxScore"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.MaxScore);
            if (message.MinScore != null && Object.hasOwnProperty.call(message, "MinScore"))
                writer.uint32(/* id 13, wireType 0 =*/104).int32(message.MinScore);
            if (message.NextOperatorId != null && Object.hasOwnProperty.call(message, "NextOperatorId"))
                writer.uint32(/* id 14, wireType 2 =*/114).string(message.NextOperatorId);
            return writer;
        };

        /**
         * Decodes a Base_ZJH_UserInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_ZJH_UserInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_ZJH_UserInfo} Base_ZJH_UserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_ZJH_UserInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_ZJH_UserInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.UserId = reader.string();
                        break;
                    }
                case 2: {
                        message.NickName = reader.string();
                        break;
                    }
                case 3: {
                        message.Coins = reader.int64();
                        break;
                    }
                case 5: {
                        message.IsOffline = reader.bool();
                        break;
                    }
                case 6: {
                        message.ChairId = reader.int32();
                        break;
                    }
                case 7: {
                        message.IsReady = reader.bool();
                        break;
                    }
                case 8: {
                        message.IsKanPai = reader.bool();
                        break;
                    }
                case 9: {
                        if (!(message.Cards && message.Cards.length))
                            message.Cards = [];
                        message.Cards.push(reader.string());
                        break;
                    }
                case 10: {
                        message.BettingNum = reader.int32();
                        break;
                    }
                case 11: {
                        message.TotalBettingNum = reader.int32();
                        break;
                    }
                case 12: {
                        message.MaxScore = reader.int32();
                        break;
                    }
                case 13: {
                        message.MinScore = reader.int32();
                        break;
                    }
                case 14: {
                        message.NextOperatorId = reader.string();
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
         * Gets the default type url for Base_ZJH_UserInfo
         * @function getTypeUrl
         * @memberof pb.Base_ZJH_UserInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_ZJH_UserInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_ZJH_UserInfo";
        };

        return Base_ZJH_UserInfo;
    })();

    pb.Base_ZJH_RoomInfo = (function() {

        /**
         * Properties of a Base_ZJH_RoomInfo.
         * @memberof pb
         * @interface IBase_ZJH_RoomInfo
         * @property {number|null} [RoomId] Base_ZJH_RoomInfo RoomId
         * @property {string|null} [HomeownerId] Base_ZJH_RoomInfo HomeownerId
         * @property {number|null} [RoomLevel] Base_ZJH_RoomInfo RoomLevel
         * @property {number|null} [State] Base_ZJH_RoomInfo State
         * @property {number|null} [ReadyCountdown] Base_ZJH_RoomInfo ReadyCountdown
         * @property {Array.<pb.IBase_ZJH_UserInfo>|null} [RoleInfos] Base_ZJH_RoomInfo RoleInfos
         * @property {string|null} [NextOperatorId] Base_ZJH_RoomInfo NextOperatorId
         * @property {number|null} [WheelNum] Base_ZJH_RoomInfo WheelNum
         * @property {number|null} [RoomTotalBettingNum] Base_ZJH_RoomInfo RoomTotalBettingNum
         * @property {number|null} [RoomBettingChipList] Base_ZJH_RoomInfo RoomBettingChipList
         * @property {number|Long|null} [OperationTime] Base_ZJH_RoomInfo OperationTime
         */

        /**
         * Constructs a new Base_ZJH_RoomInfo.
         * @memberof pb
         * @classdesc Represents a Base_ZJH_RoomInfo.
         * @implements IBase_ZJH_RoomInfo
         * @constructor
         * @param {pb.IBase_ZJH_RoomInfo=} [properties] Properties to set
         */
        function Base_ZJH_RoomInfo(properties) {
            this.RoleInfos = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Base_ZJH_RoomInfo RoomId.
         * @member {number} RoomId
         * @memberof pb.Base_ZJH_RoomInfo
         * @instance
         */
        Base_ZJH_RoomInfo.prototype.RoomId = 0;

        /**
         * Base_ZJH_RoomInfo HomeownerId.
         * @member {string} HomeownerId
         * @memberof pb.Base_ZJH_RoomInfo
         * @instance
         */
        Base_ZJH_RoomInfo.prototype.HomeownerId = "";

        /**
         * Base_ZJH_RoomInfo RoomLevel.
         * @member {number} RoomLevel
         * @memberof pb.Base_ZJH_RoomInfo
         * @instance
         */
        Base_ZJH_RoomInfo.prototype.RoomLevel = 0;

        /**
         * Base_ZJH_RoomInfo State.
         * @member {number} State
         * @memberof pb.Base_ZJH_RoomInfo
         * @instance
         */
        Base_ZJH_RoomInfo.prototype.State = 0;

        /**
         * Base_ZJH_RoomInfo ReadyCountdown.
         * @member {number} ReadyCountdown
         * @memberof pb.Base_ZJH_RoomInfo
         * @instance
         */
        Base_ZJH_RoomInfo.prototype.ReadyCountdown = 0;

        /**
         * Base_ZJH_RoomInfo RoleInfos.
         * @member {Array.<pb.IBase_ZJH_UserInfo>} RoleInfos
         * @memberof pb.Base_ZJH_RoomInfo
         * @instance
         */
        Base_ZJH_RoomInfo.prototype.RoleInfos = $util.emptyArray;

        /**
         * Base_ZJH_RoomInfo NextOperatorId.
         * @member {string} NextOperatorId
         * @memberof pb.Base_ZJH_RoomInfo
         * @instance
         */
        Base_ZJH_RoomInfo.prototype.NextOperatorId = "";

        /**
         * Base_ZJH_RoomInfo WheelNum.
         * @member {number} WheelNum
         * @memberof pb.Base_ZJH_RoomInfo
         * @instance
         */
        Base_ZJH_RoomInfo.prototype.WheelNum = 0;

        /**
         * Base_ZJH_RoomInfo RoomTotalBettingNum.
         * @member {number} RoomTotalBettingNum
         * @memberof pb.Base_ZJH_RoomInfo
         * @instance
         */
        Base_ZJH_RoomInfo.prototype.RoomTotalBettingNum = 0;

        /**
         * Base_ZJH_RoomInfo RoomBettingChipList.
         * @member {number} RoomBettingChipList
         * @memberof pb.Base_ZJH_RoomInfo
         * @instance
         */
        Base_ZJH_RoomInfo.prototype.RoomBettingChipList = 0;

        /**
         * Base_ZJH_RoomInfo OperationTime.
         * @member {number|Long} OperationTime
         * @memberof pb.Base_ZJH_RoomInfo
         * @instance
         */
        Base_ZJH_RoomInfo.prototype.OperationTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Base_ZJH_RoomInfo instance using the specified properties.
         * @function create
         * @memberof pb.Base_ZJH_RoomInfo
         * @static
         * @param {pb.IBase_ZJH_RoomInfo=} [properties] Properties to set
         * @returns {pb.Base_ZJH_RoomInfo} Base_ZJH_RoomInfo instance
         */
        Base_ZJH_RoomInfo.create = function create(properties) {
            return new Base_ZJH_RoomInfo(properties);
        };

        /**
         * Encodes the specified Base_ZJH_RoomInfo message. Does not implicitly {@link pb.Base_ZJH_RoomInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.Base_ZJH_RoomInfo
         * @static
         * @param {pb.IBase_ZJH_RoomInfo} message Base_ZJH_RoomInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Base_ZJH_RoomInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.RoomId);
            if (message.HomeownerId != null && Object.hasOwnProperty.call(message, "HomeownerId"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.HomeownerId);
            if (message.RoomLevel != null && Object.hasOwnProperty.call(message, "RoomLevel"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.RoomLevel);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.State);
            if (message.ReadyCountdown != null && Object.hasOwnProperty.call(message, "ReadyCountdown"))
                writer.uint32(/* id 6, wireType 0 =*/48).int32(message.ReadyCountdown);
            if (message.RoleInfos != null && message.RoleInfos.length)
                for (var i = 0; i < message.RoleInfos.length; ++i)
                    $root.pb.Base_ZJH_UserInfo.encode(message.RoleInfos[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            if (message.NextOperatorId != null && Object.hasOwnProperty.call(message, "NextOperatorId"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.NextOperatorId);
            if (message.WheelNum != null && Object.hasOwnProperty.call(message, "WheelNum"))
                writer.uint32(/* id 10, wireType 0 =*/80).int32(message.WheelNum);
            if (message.RoomTotalBettingNum != null && Object.hasOwnProperty.call(message, "RoomTotalBettingNum"))
                writer.uint32(/* id 11, wireType 0 =*/88).int32(message.RoomTotalBettingNum);
            if (message.RoomBettingChipList != null && Object.hasOwnProperty.call(message, "RoomBettingChipList"))
                writer.uint32(/* id 12, wireType 0 =*/96).int32(message.RoomBettingChipList);
            if (message.OperationTime != null && Object.hasOwnProperty.call(message, "OperationTime"))
                writer.uint32(/* id 14, wireType 0 =*/112).int64(message.OperationTime);
            return writer;
        };

        /**
         * Decodes a Base_ZJH_RoomInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Base_ZJH_RoomInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Base_ZJH_RoomInfo} Base_ZJH_RoomInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Base_ZJH_RoomInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Base_ZJH_RoomInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.RoomId = reader.int32();
                        break;
                    }
                case 3: {
                        message.HomeownerId = reader.string();
                        break;
                    }
                case 4: {
                        message.RoomLevel = reader.int32();
                        break;
                    }
                case 5: {
                        message.State = reader.int32();
                        break;
                    }
                case 6: {
                        message.ReadyCountdown = reader.int32();
                        break;
                    }
                case 7: {
                        if (!(message.RoleInfos && message.RoleInfos.length))
                            message.RoleInfos = [];
                        message.RoleInfos.push($root.pb.Base_ZJH_UserInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 8: {
                        message.NextOperatorId = reader.string();
                        break;
                    }
                case 10: {
                        message.WheelNum = reader.int32();
                        break;
                    }
                case 11: {
                        message.RoomTotalBettingNum = reader.int32();
                        break;
                    }
                case 12: {
                        message.RoomBettingChipList = reader.int32();
                        break;
                    }
                case 14: {
                        message.OperationTime = reader.int64();
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
         * Gets the default type url for Base_ZJH_RoomInfo
         * @function getTypeUrl
         * @memberof pb.Base_ZJH_RoomInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Base_ZJH_RoomInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Base_ZJH_RoomInfo";
        };

        return Base_ZJH_RoomInfo;
    })();

    pb.Net_ZJH_GoldChangeRet = (function() {

        /**
         * Properties of a Net_ZJH_GoldChangeRet.
         * @memberof pb
         * @interface INet_ZJH_GoldChangeRet
         */

        /**
         * Constructs a new Net_ZJH_GoldChangeRet.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_GoldChangeRet.
         * @implements INet_ZJH_GoldChangeRet
         * @constructor
         * @param {pb.INet_ZJH_GoldChangeRet=} [properties] Properties to set
         */
        function Net_ZJH_GoldChangeRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_ZJH_GoldChangeRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_GoldChangeRet
         * @static
         * @param {pb.INet_ZJH_GoldChangeRet=} [properties] Properties to set
         * @returns {pb.Net_ZJH_GoldChangeRet} Net_ZJH_GoldChangeRet instance
         */
        Net_ZJH_GoldChangeRet.create = function create(properties) {
            return new Net_ZJH_GoldChangeRet(properties);
        };

        /**
         * Encodes the specified Net_ZJH_GoldChangeRet message. Does not implicitly {@link pb.Net_ZJH_GoldChangeRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_GoldChangeRet
         * @static
         * @param {pb.INet_ZJH_GoldChangeRet} message Net_ZJH_GoldChangeRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_GoldChangeRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_ZJH_GoldChangeRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_GoldChangeRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_GoldChangeRet} Net_ZJH_GoldChangeRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_GoldChangeRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_GoldChangeRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_ZJH_GoldChangeRet
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_GoldChangeRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_GoldChangeRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_GoldChangeRet";
        };

        return Net_ZJH_GoldChangeRet;
    })();

    pb.Net_ZJH_CreateRoomReq = (function() {

        /**
         * Properties of a Net_ZJH_CreateRoomReq.
         * @memberof pb
         * @interface INet_ZJH_CreateRoomReq
         * @property {number|null} [RoomLevel] Net_ZJH_CreateRoomReq RoomLevel
         */

        /**
         * Constructs a new Net_ZJH_CreateRoomReq.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_CreateRoomReq.
         * @implements INet_ZJH_CreateRoomReq
         * @constructor
         * @param {pb.INet_ZJH_CreateRoomReq=} [properties] Properties to set
         */
        function Net_ZJH_CreateRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_CreateRoomReq RoomLevel.
         * @member {number} RoomLevel
         * @memberof pb.Net_ZJH_CreateRoomReq
         * @instance
         */
        Net_ZJH_CreateRoomReq.prototype.RoomLevel = 0;

        /**
         * Creates a new Net_ZJH_CreateRoomReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_CreateRoomReq
         * @static
         * @param {pb.INet_ZJH_CreateRoomReq=} [properties] Properties to set
         * @returns {pb.Net_ZJH_CreateRoomReq} Net_ZJH_CreateRoomReq instance
         */
        Net_ZJH_CreateRoomReq.create = function create(properties) {
            return new Net_ZJH_CreateRoomReq(properties);
        };

        /**
         * Encodes the specified Net_ZJH_CreateRoomReq message. Does not implicitly {@link pb.Net_ZJH_CreateRoomReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_CreateRoomReq
         * @static
         * @param {pb.INet_ZJH_CreateRoomReq} message Net_ZJH_CreateRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_CreateRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomLevel != null && Object.hasOwnProperty.call(message, "RoomLevel"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RoomLevel);
            return writer;
        };

        /**
         * Decodes a Net_ZJH_CreateRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_CreateRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_CreateRoomReq} Net_ZJH_CreateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_CreateRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_CreateRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.RoomLevel = reader.int32();
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
         * Gets the default type url for Net_ZJH_CreateRoomReq
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_CreateRoomReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_CreateRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_CreateRoomReq";
        };

        return Net_ZJH_CreateRoomReq;
    })();

    pb.Net_ZJH_CreateRoomRet = (function() {

        /**
         * Properties of a Net_ZJH_CreateRoomRet.
         * @memberof pb
         * @interface INet_ZJH_CreateRoomRet
         * @property {number|null} [Ret] Net_ZJH_CreateRoomRet Ret
         * @property {number|null} [RoomId] Net_ZJH_CreateRoomRet RoomId
         */

        /**
         * Constructs a new Net_ZJH_CreateRoomRet.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_CreateRoomRet.
         * @implements INet_ZJH_CreateRoomRet
         * @constructor
         * @param {pb.INet_ZJH_CreateRoomRet=} [properties] Properties to set
         */
        function Net_ZJH_CreateRoomRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_CreateRoomRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_ZJH_CreateRoomRet
         * @instance
         */
        Net_ZJH_CreateRoomRet.prototype.Ret = 0;

        /**
         * Net_ZJH_CreateRoomRet RoomId.
         * @member {number} RoomId
         * @memberof pb.Net_ZJH_CreateRoomRet
         * @instance
         */
        Net_ZJH_CreateRoomRet.prototype.RoomId = 0;

        /**
         * Creates a new Net_ZJH_CreateRoomRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_CreateRoomRet
         * @static
         * @param {pb.INet_ZJH_CreateRoomRet=} [properties] Properties to set
         * @returns {pb.Net_ZJH_CreateRoomRet} Net_ZJH_CreateRoomRet instance
         */
        Net_ZJH_CreateRoomRet.create = function create(properties) {
            return new Net_ZJH_CreateRoomRet(properties);
        };

        /**
         * Encodes the specified Net_ZJH_CreateRoomRet message. Does not implicitly {@link pb.Net_ZJH_CreateRoomRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_CreateRoomRet
         * @static
         * @param {pb.INet_ZJH_CreateRoomRet} message Net_ZJH_CreateRoomRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_CreateRoomRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.RoomId != null && Object.hasOwnProperty.call(message, "RoomId"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.RoomId);
            return writer;
        };

        /**
         * Decodes a Net_ZJH_CreateRoomRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_CreateRoomRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_CreateRoomRet} Net_ZJH_CreateRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_CreateRoomRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_CreateRoomRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.RoomId = reader.int32();
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
         * Gets the default type url for Net_ZJH_CreateRoomRet
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_CreateRoomRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_CreateRoomRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_CreateRoomRet";
        };

        return Net_ZJH_CreateRoomRet;
    })();

    pb.Net_ZJH_JoinRoomReq = (function() {

        /**
         * Properties of a Net_ZJH_JoinRoomReq.
         * @memberof pb
         * @interface INet_ZJH_JoinRoomReq
         * @property {number|null} [RoomNum] Net_ZJH_JoinRoomReq RoomNum
         */

        /**
         * Constructs a new Net_ZJH_JoinRoomReq.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_JoinRoomReq.
         * @implements INet_ZJH_JoinRoomReq
         * @constructor
         * @param {pb.INet_ZJH_JoinRoomReq=} [properties] Properties to set
         */
        function Net_ZJH_JoinRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_JoinRoomReq RoomNum.
         * @member {number} RoomNum
         * @memberof pb.Net_ZJH_JoinRoomReq
         * @instance
         */
        Net_ZJH_JoinRoomReq.prototype.RoomNum = 0;

        /**
         * Creates a new Net_ZJH_JoinRoomReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_JoinRoomReq
         * @static
         * @param {pb.INet_ZJH_JoinRoomReq=} [properties] Properties to set
         * @returns {pb.Net_ZJH_JoinRoomReq} Net_ZJH_JoinRoomReq instance
         */
        Net_ZJH_JoinRoomReq.create = function create(properties) {
            return new Net_ZJH_JoinRoomReq(properties);
        };

        /**
         * Encodes the specified Net_ZJH_JoinRoomReq message. Does not implicitly {@link pb.Net_ZJH_JoinRoomReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_JoinRoomReq
         * @static
         * @param {pb.INet_ZJH_JoinRoomReq} message Net_ZJH_JoinRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_JoinRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RoomNum != null && Object.hasOwnProperty.call(message, "RoomNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.RoomNum);
            return writer;
        };

        /**
         * Decodes a Net_ZJH_JoinRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_JoinRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_JoinRoomReq} Net_ZJH_JoinRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_JoinRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_JoinRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.RoomNum = reader.int32();
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
         * Gets the default type url for Net_ZJH_JoinRoomReq
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_JoinRoomReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_JoinRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_JoinRoomReq";
        };

        return Net_ZJH_JoinRoomReq;
    })();

    pb.Net_ZJH_JoinRoomRet = (function() {

        /**
         * Properties of a Net_ZJH_JoinRoomRet.
         * @memberof pb
         * @interface INet_ZJH_JoinRoomRet
         * @property {number|null} [Ret] Net_ZJH_JoinRoomRet Ret
         * @property {pb.IBase_ZJH_UserInfo|null} [TargetRoleInfo] Net_ZJH_JoinRoomRet TargetRoleInfo
         */

        /**
         * Constructs a new Net_ZJH_JoinRoomRet.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_JoinRoomRet.
         * @implements INet_ZJH_JoinRoomRet
         * @constructor
         * @param {pb.INet_ZJH_JoinRoomRet=} [properties] Properties to set
         */
        function Net_ZJH_JoinRoomRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_JoinRoomRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_ZJH_JoinRoomRet
         * @instance
         */
        Net_ZJH_JoinRoomRet.prototype.Ret = 0;

        /**
         * Net_ZJH_JoinRoomRet TargetRoleInfo.
         * @member {pb.IBase_ZJH_UserInfo|null|undefined} TargetRoleInfo
         * @memberof pb.Net_ZJH_JoinRoomRet
         * @instance
         */
        Net_ZJH_JoinRoomRet.prototype.TargetRoleInfo = null;

        /**
         * Creates a new Net_ZJH_JoinRoomRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_JoinRoomRet
         * @static
         * @param {pb.INet_ZJH_JoinRoomRet=} [properties] Properties to set
         * @returns {pb.Net_ZJH_JoinRoomRet} Net_ZJH_JoinRoomRet instance
         */
        Net_ZJH_JoinRoomRet.create = function create(properties) {
            return new Net_ZJH_JoinRoomRet(properties);
        };

        /**
         * Encodes the specified Net_ZJH_JoinRoomRet message. Does not implicitly {@link pb.Net_ZJH_JoinRoomRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_JoinRoomRet
         * @static
         * @param {pb.INet_ZJH_JoinRoomRet} message Net_ZJH_JoinRoomRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_JoinRoomRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.TargetRoleInfo != null && Object.hasOwnProperty.call(message, "TargetRoleInfo"))
                $root.pb.Base_ZJH_UserInfo.encode(message.TargetRoleInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Net_ZJH_JoinRoomRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_JoinRoomRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_JoinRoomRet} Net_ZJH_JoinRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_JoinRoomRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_JoinRoomRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.TargetRoleInfo = $root.pb.Base_ZJH_UserInfo.decode(reader, reader.uint32());
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
         * Gets the default type url for Net_ZJH_JoinRoomRet
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_JoinRoomRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_JoinRoomRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_JoinRoomRet";
        };

        return Net_ZJH_JoinRoomRet;
    })();

    pb.Net_ZJH_LeaveRoomReq = (function() {

        /**
         * Properties of a Net_ZJH_LeaveRoomReq.
         * @memberof pb
         * @interface INet_ZJH_LeaveRoomReq
         */

        /**
         * Constructs a new Net_ZJH_LeaveRoomReq.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_LeaveRoomReq.
         * @implements INet_ZJH_LeaveRoomReq
         * @constructor
         * @param {pb.INet_ZJH_LeaveRoomReq=} [properties] Properties to set
         */
        function Net_ZJH_LeaveRoomReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_ZJH_LeaveRoomReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_LeaveRoomReq
         * @static
         * @param {pb.INet_ZJH_LeaveRoomReq=} [properties] Properties to set
         * @returns {pb.Net_ZJH_LeaveRoomReq} Net_ZJH_LeaveRoomReq instance
         */
        Net_ZJH_LeaveRoomReq.create = function create(properties) {
            return new Net_ZJH_LeaveRoomReq(properties);
        };

        /**
         * Encodes the specified Net_ZJH_LeaveRoomReq message. Does not implicitly {@link pb.Net_ZJH_LeaveRoomReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_LeaveRoomReq
         * @static
         * @param {pb.INet_ZJH_LeaveRoomReq} message Net_ZJH_LeaveRoomReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_LeaveRoomReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_ZJH_LeaveRoomReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_LeaveRoomReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_LeaveRoomReq} Net_ZJH_LeaveRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_LeaveRoomReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_LeaveRoomReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_ZJH_LeaveRoomReq
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_LeaveRoomReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_LeaveRoomReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_LeaveRoomReq";
        };

        return Net_ZJH_LeaveRoomReq;
    })();

    pb.Net_ZJH_LeaveRoomRet = (function() {

        /**
         * Properties of a Net_ZJH_LeaveRoomRet.
         * @memberof pb
         * @interface INet_ZJH_LeaveRoomRet
         * @property {number|null} [Ret] Net_ZJH_LeaveRoomRet Ret
         * @property {string|null} [LeaveUserId] Net_ZJH_LeaveRoomRet LeaveUserId
         */

        /**
         * Constructs a new Net_ZJH_LeaveRoomRet.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_LeaveRoomRet.
         * @implements INet_ZJH_LeaveRoomRet
         * @constructor
         * @param {pb.INet_ZJH_LeaveRoomRet=} [properties] Properties to set
         */
        function Net_ZJH_LeaveRoomRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_LeaveRoomRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_ZJH_LeaveRoomRet
         * @instance
         */
        Net_ZJH_LeaveRoomRet.prototype.Ret = 0;

        /**
         * Net_ZJH_LeaveRoomRet LeaveUserId.
         * @member {string} LeaveUserId
         * @memberof pb.Net_ZJH_LeaveRoomRet
         * @instance
         */
        Net_ZJH_LeaveRoomRet.prototype.LeaveUserId = "";

        /**
         * Creates a new Net_ZJH_LeaveRoomRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_LeaveRoomRet
         * @static
         * @param {pb.INet_ZJH_LeaveRoomRet=} [properties] Properties to set
         * @returns {pb.Net_ZJH_LeaveRoomRet} Net_ZJH_LeaveRoomRet instance
         */
        Net_ZJH_LeaveRoomRet.create = function create(properties) {
            return new Net_ZJH_LeaveRoomRet(properties);
        };

        /**
         * Encodes the specified Net_ZJH_LeaveRoomRet message. Does not implicitly {@link pb.Net_ZJH_LeaveRoomRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_LeaveRoomRet
         * @static
         * @param {pb.INet_ZJH_LeaveRoomRet} message Net_ZJH_LeaveRoomRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_LeaveRoomRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.LeaveUserId != null && Object.hasOwnProperty.call(message, "LeaveUserId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.LeaveUserId);
            return writer;
        };

        /**
         * Decodes a Net_ZJH_LeaveRoomRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_LeaveRoomRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_LeaveRoomRet} Net_ZJH_LeaveRoomRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_LeaveRoomRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_LeaveRoomRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.LeaveUserId = reader.string();
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
         * Gets the default type url for Net_ZJH_LeaveRoomRet
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_LeaveRoomRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_LeaveRoomRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_LeaveRoomRet";
        };

        return Net_ZJH_LeaveRoomRet;
    })();

    pb.Net_ZJH_GetRoomInfoReq = (function() {

        /**
         * Properties of a Net_ZJH_GetRoomInfoReq.
         * @memberof pb
         * @interface INet_ZJH_GetRoomInfoReq
         */

        /**
         * Constructs a new Net_ZJH_GetRoomInfoReq.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_GetRoomInfoReq.
         * @implements INet_ZJH_GetRoomInfoReq
         * @constructor
         * @param {pb.INet_ZJH_GetRoomInfoReq=} [properties] Properties to set
         */
        function Net_ZJH_GetRoomInfoReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_ZJH_GetRoomInfoReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_GetRoomInfoReq
         * @static
         * @param {pb.INet_ZJH_GetRoomInfoReq=} [properties] Properties to set
         * @returns {pb.Net_ZJH_GetRoomInfoReq} Net_ZJH_GetRoomInfoReq instance
         */
        Net_ZJH_GetRoomInfoReq.create = function create(properties) {
            return new Net_ZJH_GetRoomInfoReq(properties);
        };

        /**
         * Encodes the specified Net_ZJH_GetRoomInfoReq message. Does not implicitly {@link pb.Net_ZJH_GetRoomInfoReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_GetRoomInfoReq
         * @static
         * @param {pb.INet_ZJH_GetRoomInfoReq} message Net_ZJH_GetRoomInfoReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_GetRoomInfoReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_ZJH_GetRoomInfoReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_GetRoomInfoReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_GetRoomInfoReq} Net_ZJH_GetRoomInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_GetRoomInfoReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_GetRoomInfoReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_ZJH_GetRoomInfoReq
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_GetRoomInfoReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_GetRoomInfoReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_GetRoomInfoReq";
        };

        return Net_ZJH_GetRoomInfoReq;
    })();

    pb.Net_ZJH_GetRoomInfoRet = (function() {

        /**
         * Properties of a Net_ZJH_GetRoomInfoRet.
         * @memberof pb
         * @interface INet_ZJH_GetRoomInfoRet
         * @property {number|null} [Ret] Net_ZJH_GetRoomInfoRet Ret
         * @property {pb.IBase_ZJH_RoomInfo|null} [RoomInfo] Net_ZJH_GetRoomInfoRet RoomInfo
         */

        /**
         * Constructs a new Net_ZJH_GetRoomInfoRet.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_GetRoomInfoRet.
         * @implements INet_ZJH_GetRoomInfoRet
         * @constructor
         * @param {pb.INet_ZJH_GetRoomInfoRet=} [properties] Properties to set
         */
        function Net_ZJH_GetRoomInfoRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_GetRoomInfoRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_ZJH_GetRoomInfoRet
         * @instance
         */
        Net_ZJH_GetRoomInfoRet.prototype.Ret = 0;

        /**
         * Net_ZJH_GetRoomInfoRet RoomInfo.
         * @member {pb.IBase_ZJH_RoomInfo|null|undefined} RoomInfo
         * @memberof pb.Net_ZJH_GetRoomInfoRet
         * @instance
         */
        Net_ZJH_GetRoomInfoRet.prototype.RoomInfo = null;

        /**
         * Creates a new Net_ZJH_GetRoomInfoRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_GetRoomInfoRet
         * @static
         * @param {pb.INet_ZJH_GetRoomInfoRet=} [properties] Properties to set
         * @returns {pb.Net_ZJH_GetRoomInfoRet} Net_ZJH_GetRoomInfoRet instance
         */
        Net_ZJH_GetRoomInfoRet.create = function create(properties) {
            return new Net_ZJH_GetRoomInfoRet(properties);
        };

        /**
         * Encodes the specified Net_ZJH_GetRoomInfoRet message. Does not implicitly {@link pb.Net_ZJH_GetRoomInfoRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_GetRoomInfoRet
         * @static
         * @param {pb.INet_ZJH_GetRoomInfoRet} message Net_ZJH_GetRoomInfoRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_GetRoomInfoRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.RoomInfo != null && Object.hasOwnProperty.call(message, "RoomInfo"))
                $root.pb.Base_ZJH_RoomInfo.encode(message.RoomInfo, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            return writer;
        };

        /**
         * Decodes a Net_ZJH_GetRoomInfoRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_GetRoomInfoRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_GetRoomInfoRet} Net_ZJH_GetRoomInfoRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_GetRoomInfoRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_GetRoomInfoRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.RoomInfo = $root.pb.Base_ZJH_RoomInfo.decode(reader, reader.uint32());
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
         * Gets the default type url for Net_ZJH_GetRoomInfoRet
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_GetRoomInfoRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_GetRoomInfoRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_GetRoomInfoRet";
        };

        return Net_ZJH_GetRoomInfoRet;
    })();

    pb.Net_ZJH_RoleGoldChangeRet = (function() {

        /**
         * Properties of a Net_ZJH_RoleGoldChangeRet.
         * @memberof pb
         * @interface INet_ZJH_RoleGoldChangeRet
         * @property {number|null} [UserId] Net_ZJH_RoleGoldChangeRet UserId
         * @property {number|Long|null} [Coins] Net_ZJH_RoleGoldChangeRet Coins
         */

        /**
         * Constructs a new Net_ZJH_RoleGoldChangeRet.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_RoleGoldChangeRet.
         * @implements INet_ZJH_RoleGoldChangeRet
         * @constructor
         * @param {pb.INet_ZJH_RoleGoldChangeRet=} [properties] Properties to set
         */
        function Net_ZJH_RoleGoldChangeRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_RoleGoldChangeRet UserId.
         * @member {number} UserId
         * @memberof pb.Net_ZJH_RoleGoldChangeRet
         * @instance
         */
        Net_ZJH_RoleGoldChangeRet.prototype.UserId = 0;

        /**
         * Net_ZJH_RoleGoldChangeRet Coins.
         * @member {number|Long} Coins
         * @memberof pb.Net_ZJH_RoleGoldChangeRet
         * @instance
         */
        Net_ZJH_RoleGoldChangeRet.prototype.Coins = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Net_ZJH_RoleGoldChangeRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_RoleGoldChangeRet
         * @static
         * @param {pb.INet_ZJH_RoleGoldChangeRet=} [properties] Properties to set
         * @returns {pb.Net_ZJH_RoleGoldChangeRet} Net_ZJH_RoleGoldChangeRet instance
         */
        Net_ZJH_RoleGoldChangeRet.create = function create(properties) {
            return new Net_ZJH_RoleGoldChangeRet(properties);
        };

        /**
         * Encodes the specified Net_ZJH_RoleGoldChangeRet message. Does not implicitly {@link pb.Net_ZJH_RoleGoldChangeRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_RoleGoldChangeRet
         * @static
         * @param {pb.INet_ZJH_RoleGoldChangeRet} message Net_ZJH_RoleGoldChangeRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_RoleGoldChangeRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.UserId);
            if (message.Coins != null && Object.hasOwnProperty.call(message, "Coins"))
                writer.uint32(/* id 2, wireType 0 =*/16).int64(message.Coins);
            return writer;
        };

        /**
         * Decodes a Net_ZJH_RoleGoldChangeRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_RoleGoldChangeRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_RoleGoldChangeRet} Net_ZJH_RoleGoldChangeRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_RoleGoldChangeRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_RoleGoldChangeRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.UserId = reader.int32();
                        break;
                    }
                case 2: {
                        message.Coins = reader.int64();
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
         * Gets the default type url for Net_ZJH_RoleGoldChangeRet
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_RoleGoldChangeRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_RoleGoldChangeRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_RoleGoldChangeRet";
        };

        return Net_ZJH_RoleGoldChangeRet;
    })();

    pb.Net_ZJH_ReadyReq = (function() {

        /**
         * Properties of a Net_ZJH_ReadyReq.
         * @memberof pb
         * @interface INet_ZJH_ReadyReq
         */

        /**
         * Constructs a new Net_ZJH_ReadyReq.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_ReadyReq.
         * @implements INet_ZJH_ReadyReq
         * @constructor
         * @param {pb.INet_ZJH_ReadyReq=} [properties] Properties to set
         */
        function Net_ZJH_ReadyReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_ZJH_ReadyReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_ReadyReq
         * @static
         * @param {pb.INet_ZJH_ReadyReq=} [properties] Properties to set
         * @returns {pb.Net_ZJH_ReadyReq} Net_ZJH_ReadyReq instance
         */
        Net_ZJH_ReadyReq.create = function create(properties) {
            return new Net_ZJH_ReadyReq(properties);
        };

        /**
         * Encodes the specified Net_ZJH_ReadyReq message. Does not implicitly {@link pb.Net_ZJH_ReadyReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_ReadyReq
         * @static
         * @param {pb.INet_ZJH_ReadyReq} message Net_ZJH_ReadyReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_ReadyReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_ZJH_ReadyReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_ReadyReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_ReadyReq} Net_ZJH_ReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_ReadyReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_ReadyReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_ZJH_ReadyReq
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_ReadyReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_ReadyReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_ReadyReq";
        };

        return Net_ZJH_ReadyReq;
    })();

    pb.Net_ZJH_ReadyRet = (function() {

        /**
         * Properties of a Net_ZJH_ReadyRet.
         * @memberof pb
         * @interface INet_ZJH_ReadyRet
         * @property {number|null} [Req] Net_ZJH_ReadyRet Req
         * @property {string|null} [TargetUserId] Net_ZJH_ReadyRet TargetUserId
         * @property {boolean|null} [TargetIsReady] Net_ZJH_ReadyRet TargetIsReady
         * @property {number|null} [State] Net_ZJH_ReadyRet State
         */

        /**
         * Constructs a new Net_ZJH_ReadyRet.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_ReadyRet.
         * @implements INet_ZJH_ReadyRet
         * @constructor
         * @param {pb.INet_ZJH_ReadyRet=} [properties] Properties to set
         */
        function Net_ZJH_ReadyRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_ReadyRet Req.
         * @member {number} Req
         * @memberof pb.Net_ZJH_ReadyRet
         * @instance
         */
        Net_ZJH_ReadyRet.prototype.Req = 0;

        /**
         * Net_ZJH_ReadyRet TargetUserId.
         * @member {string} TargetUserId
         * @memberof pb.Net_ZJH_ReadyRet
         * @instance
         */
        Net_ZJH_ReadyRet.prototype.TargetUserId = "";

        /**
         * Net_ZJH_ReadyRet TargetIsReady.
         * @member {boolean} TargetIsReady
         * @memberof pb.Net_ZJH_ReadyRet
         * @instance
         */
        Net_ZJH_ReadyRet.prototype.TargetIsReady = false;

        /**
         * Net_ZJH_ReadyRet State.
         * @member {number} State
         * @memberof pb.Net_ZJH_ReadyRet
         * @instance
         */
        Net_ZJH_ReadyRet.prototype.State = 0;

        /**
         * Creates a new Net_ZJH_ReadyRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_ReadyRet
         * @static
         * @param {pb.INet_ZJH_ReadyRet=} [properties] Properties to set
         * @returns {pb.Net_ZJH_ReadyRet} Net_ZJH_ReadyRet instance
         */
        Net_ZJH_ReadyRet.create = function create(properties) {
            return new Net_ZJH_ReadyRet(properties);
        };

        /**
         * Encodes the specified Net_ZJH_ReadyRet message. Does not implicitly {@link pb.Net_ZJH_ReadyRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_ReadyRet
         * @static
         * @param {pb.INet_ZJH_ReadyRet} message Net_ZJH_ReadyRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_ReadyRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Req != null && Object.hasOwnProperty.call(message, "Req"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Req);
            if (message.TargetUserId != null && Object.hasOwnProperty.call(message, "TargetUserId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.TargetUserId);
            if (message.TargetIsReady != null && Object.hasOwnProperty.call(message, "TargetIsReady"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.TargetIsReady);
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.State);
            return writer;
        };

        /**
         * Decodes a Net_ZJH_ReadyRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_ReadyRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_ReadyRet} Net_ZJH_ReadyRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_ReadyRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_ReadyRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Req = reader.int32();
                        break;
                    }
                case 2: {
                        message.TargetUserId = reader.string();
                        break;
                    }
                case 3: {
                        message.TargetIsReady = reader.bool();
                        break;
                    }
                case 4: {
                        message.State = reader.int32();
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
         * Gets the default type url for Net_ZJH_ReadyRet
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_ReadyRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_ReadyRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_ReadyRet";
        };

        return Net_ZJH_ReadyRet;
    })();

    pb.Net_ZJH_StartGameRet = (function() {

        /**
         * Properties of a Net_ZJH_StartGameRet.
         * @memberof pb
         * @interface INet_ZJH_StartGameRet
         * @property {number|null} [State] Net_ZJH_StartGameRet State
         * @property {number|null} [BetCoin] Net_ZJH_StartGameRet BetCoin
         * @property {Array.<pb.IBase_ZJH_UserInfo>|null} [RoleInfoList] Net_ZJH_StartGameRet RoleInfoList
         * @property {number|null} [NextOperatorId] Net_ZJH_StartGameRet NextOperatorId
         */

        /**
         * Constructs a new Net_ZJH_StartGameRet.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_StartGameRet.
         * @implements INet_ZJH_StartGameRet
         * @constructor
         * @param {pb.INet_ZJH_StartGameRet=} [properties] Properties to set
         */
        function Net_ZJH_StartGameRet(properties) {
            this.RoleInfoList = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_StartGameRet State.
         * @member {number} State
         * @memberof pb.Net_ZJH_StartGameRet
         * @instance
         */
        Net_ZJH_StartGameRet.prototype.State = 0;

        /**
         * Net_ZJH_StartGameRet BetCoin.
         * @member {number} BetCoin
         * @memberof pb.Net_ZJH_StartGameRet
         * @instance
         */
        Net_ZJH_StartGameRet.prototype.BetCoin = 0;

        /**
         * Net_ZJH_StartGameRet RoleInfoList.
         * @member {Array.<pb.IBase_ZJH_UserInfo>} RoleInfoList
         * @memberof pb.Net_ZJH_StartGameRet
         * @instance
         */
        Net_ZJH_StartGameRet.prototype.RoleInfoList = $util.emptyArray;

        /**
         * Net_ZJH_StartGameRet NextOperatorId.
         * @member {number} NextOperatorId
         * @memberof pb.Net_ZJH_StartGameRet
         * @instance
         */
        Net_ZJH_StartGameRet.prototype.NextOperatorId = 0;

        /**
         * Creates a new Net_ZJH_StartGameRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_StartGameRet
         * @static
         * @param {pb.INet_ZJH_StartGameRet=} [properties] Properties to set
         * @returns {pb.Net_ZJH_StartGameRet} Net_ZJH_StartGameRet instance
         */
        Net_ZJH_StartGameRet.create = function create(properties) {
            return new Net_ZJH_StartGameRet(properties);
        };

        /**
         * Encodes the specified Net_ZJH_StartGameRet message. Does not implicitly {@link pb.Net_ZJH_StartGameRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_StartGameRet
         * @static
         * @param {pb.INet_ZJH_StartGameRet} message Net_ZJH_StartGameRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_StartGameRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.State);
            if (message.BetCoin != null && Object.hasOwnProperty.call(message, "BetCoin"))
                writer.uint32(/* id 2, wireType 0 =*/16).int32(message.BetCoin);
            if (message.RoleInfoList != null && message.RoleInfoList.length)
                for (var i = 0; i < message.RoleInfoList.length; ++i)
                    $root.pb.Base_ZJH_UserInfo.encode(message.RoleInfoList[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.NextOperatorId != null && Object.hasOwnProperty.call(message, "NextOperatorId"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.NextOperatorId);
            return writer;
        };

        /**
         * Decodes a Net_ZJH_StartGameRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_StartGameRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_StartGameRet} Net_ZJH_StartGameRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_StartGameRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_StartGameRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.State = reader.int32();
                        break;
                    }
                case 2: {
                        message.BetCoin = reader.int32();
                        break;
                    }
                case 3: {
                        if (!(message.RoleInfoList && message.RoleInfoList.length))
                            message.RoleInfoList = [];
                        message.RoleInfoList.push($root.pb.Base_ZJH_UserInfo.decode(reader, reader.uint32()));
                        break;
                    }
                case 4: {
                        message.NextOperatorId = reader.int32();
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
         * Gets the default type url for Net_ZJH_StartGameRet
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_StartGameRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_StartGameRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_StartGameRet";
        };

        return Net_ZJH_StartGameRet;
    })();

    pb.Net_ZJH_UpdateStatusRet = (function() {

        /**
         * Properties of a Net_ZJH_UpdateStatusRet.
         * @memberof pb
         * @interface INet_ZJH_UpdateStatusRet
         * @property {number|null} [State] Net_ZJH_UpdateStatusRet State
         */

        /**
         * Constructs a new Net_ZJH_UpdateStatusRet.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_UpdateStatusRet.
         * @implements INet_ZJH_UpdateStatusRet
         * @constructor
         * @param {pb.INet_ZJH_UpdateStatusRet=} [properties] Properties to set
         */
        function Net_ZJH_UpdateStatusRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_UpdateStatusRet State.
         * @member {number} State
         * @memberof pb.Net_ZJH_UpdateStatusRet
         * @instance
         */
        Net_ZJH_UpdateStatusRet.prototype.State = 0;

        /**
         * Creates a new Net_ZJH_UpdateStatusRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_UpdateStatusRet
         * @static
         * @param {pb.INet_ZJH_UpdateStatusRet=} [properties] Properties to set
         * @returns {pb.Net_ZJH_UpdateStatusRet} Net_ZJH_UpdateStatusRet instance
         */
        Net_ZJH_UpdateStatusRet.create = function create(properties) {
            return new Net_ZJH_UpdateStatusRet(properties);
        };

        /**
         * Encodes the specified Net_ZJH_UpdateStatusRet message. Does not implicitly {@link pb.Net_ZJH_UpdateStatusRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_UpdateStatusRet
         * @static
         * @param {pb.INet_ZJH_UpdateStatusRet} message Net_ZJH_UpdateStatusRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_UpdateStatusRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.State != null && Object.hasOwnProperty.call(message, "State"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.State);
            return writer;
        };

        /**
         * Decodes a Net_ZJH_UpdateStatusRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_UpdateStatusRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_UpdateStatusRet} Net_ZJH_UpdateStatusRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_UpdateStatusRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_UpdateStatusRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.State = reader.int32();
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
         * Gets the default type url for Net_ZJH_UpdateStatusRet
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_UpdateStatusRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_UpdateStatusRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_UpdateStatusRet";
        };

        return Net_ZJH_UpdateStatusRet;
    })();

    pb.Net_ZJH_NextOperatorRet = (function() {

        /**
         * Properties of a Net_ZJH_NextOperatorRet.
         * @memberof pb
         * @interface INet_ZJH_NextOperatorRet
         * @property {string|null} [NextOperatorId] Net_ZJH_NextOperatorRet NextOperatorId
         * @property {number|Long|null} [OperationTime] Net_ZJH_NextOperatorRet OperationTime
         */

        /**
         * Constructs a new Net_ZJH_NextOperatorRet.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_NextOperatorRet.
         * @implements INet_ZJH_NextOperatorRet
         * @constructor
         * @param {pb.INet_ZJH_NextOperatorRet=} [properties] Properties to set
         */
        function Net_ZJH_NextOperatorRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_NextOperatorRet NextOperatorId.
         * @member {string} NextOperatorId
         * @memberof pb.Net_ZJH_NextOperatorRet
         * @instance
         */
        Net_ZJH_NextOperatorRet.prototype.NextOperatorId = "";

        /**
         * Net_ZJH_NextOperatorRet OperationTime.
         * @member {number|Long} OperationTime
         * @memberof pb.Net_ZJH_NextOperatorRet
         * @instance
         */
        Net_ZJH_NextOperatorRet.prototype.OperationTime = $util.Long ? $util.Long.fromBits(0,0,false) : 0;

        /**
         * Creates a new Net_ZJH_NextOperatorRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_NextOperatorRet
         * @static
         * @param {pb.INet_ZJH_NextOperatorRet=} [properties] Properties to set
         * @returns {pb.Net_ZJH_NextOperatorRet} Net_ZJH_NextOperatorRet instance
         */
        Net_ZJH_NextOperatorRet.create = function create(properties) {
            return new Net_ZJH_NextOperatorRet(properties);
        };

        /**
         * Encodes the specified Net_ZJH_NextOperatorRet message. Does not implicitly {@link pb.Net_ZJH_NextOperatorRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_NextOperatorRet
         * @static
         * @param {pb.INet_ZJH_NextOperatorRet} message Net_ZJH_NextOperatorRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_NextOperatorRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NextOperatorId != null && Object.hasOwnProperty.call(message, "NextOperatorId"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.NextOperatorId);
            if (message.OperationTime != null && Object.hasOwnProperty.call(message, "OperationTime"))
                writer.uint32(/* id 11, wireType 0 =*/88).int64(message.OperationTime);
            return writer;
        };

        /**
         * Decodes a Net_ZJH_NextOperatorRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_NextOperatorRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_NextOperatorRet} Net_ZJH_NextOperatorRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_NextOperatorRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_NextOperatorRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 10: {
                        message.NextOperatorId = reader.string();
                        break;
                    }
                case 11: {
                        message.OperationTime = reader.int64();
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
         * Gets the default type url for Net_ZJH_NextOperatorRet
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_NextOperatorRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_NextOperatorRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_NextOperatorRet";
        };

        return Net_ZJH_NextOperatorRet;
    })();

    pb.Net_ZJH_KanPaiReq = (function() {

        /**
         * Properties of a Net_ZJH_KanPaiReq.
         * @memberof pb
         * @interface INet_ZJH_KanPaiReq
         */

        /**
         * Constructs a new Net_ZJH_KanPaiReq.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_KanPaiReq.
         * @implements INet_ZJH_KanPaiReq
         * @constructor
         * @param {pb.INet_ZJH_KanPaiReq=} [properties] Properties to set
         */
        function Net_ZJH_KanPaiReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_ZJH_KanPaiReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_KanPaiReq
         * @static
         * @param {pb.INet_ZJH_KanPaiReq=} [properties] Properties to set
         * @returns {pb.Net_ZJH_KanPaiReq} Net_ZJH_KanPaiReq instance
         */
        Net_ZJH_KanPaiReq.create = function create(properties) {
            return new Net_ZJH_KanPaiReq(properties);
        };

        /**
         * Encodes the specified Net_ZJH_KanPaiReq message. Does not implicitly {@link pb.Net_ZJH_KanPaiReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_KanPaiReq
         * @static
         * @param {pb.INet_ZJH_KanPaiReq} message Net_ZJH_KanPaiReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_KanPaiReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_ZJH_KanPaiReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_KanPaiReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_KanPaiReq} Net_ZJH_KanPaiReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_KanPaiReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_KanPaiReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_ZJH_KanPaiReq
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_KanPaiReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_KanPaiReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_KanPaiReq";
        };

        return Net_ZJH_KanPaiReq;
    })();

    pb.Net_ZJH_KanPaiRet = (function() {

        /**
         * Properties of a Net_ZJH_KanPaiRet.
         * @memberof pb
         * @interface INet_ZJH_KanPaiRet
         * @property {number|null} [Ret] Net_ZJH_KanPaiRet Ret
         * @property {Array.<number>|null} [Cards] Net_ZJH_KanPaiRet Cards
         */

        /**
         * Constructs a new Net_ZJH_KanPaiRet.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_KanPaiRet.
         * @implements INet_ZJH_KanPaiRet
         * @constructor
         * @param {pb.INet_ZJH_KanPaiRet=} [properties] Properties to set
         */
        function Net_ZJH_KanPaiRet(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_KanPaiRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_ZJH_KanPaiRet
         * @instance
         */
        Net_ZJH_KanPaiRet.prototype.Ret = 0;

        /**
         * Net_ZJH_KanPaiRet Cards.
         * @member {Array.<number>} Cards
         * @memberof pb.Net_ZJH_KanPaiRet
         * @instance
         */
        Net_ZJH_KanPaiRet.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new Net_ZJH_KanPaiRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_KanPaiRet
         * @static
         * @param {pb.INet_ZJH_KanPaiRet=} [properties] Properties to set
         * @returns {pb.Net_ZJH_KanPaiRet} Net_ZJH_KanPaiRet instance
         */
        Net_ZJH_KanPaiRet.create = function create(properties) {
            return new Net_ZJH_KanPaiRet(properties);
        };

        /**
         * Encodes the specified Net_ZJH_KanPaiRet message. Does not implicitly {@link pb.Net_ZJH_KanPaiRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_KanPaiRet
         * @static
         * @param {pb.INet_ZJH_KanPaiRet} message Net_ZJH_KanPaiRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_KanPaiRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.Cards != null && message.Cards.length) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork();
                for (var i = 0; i < message.Cards.length; ++i)
                    writer.int32(message.Cards[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a Net_ZJH_KanPaiRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_KanPaiRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_KanPaiRet} Net_ZJH_KanPaiRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_KanPaiRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_KanPaiRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 8: {
                        if (!(message.Cards && message.Cards.length))
                            message.Cards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.Cards.push(reader.int32());
                        } else
                            message.Cards.push(reader.int32());
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
         * Gets the default type url for Net_ZJH_KanPaiRet
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_KanPaiRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_KanPaiRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_KanPaiRet";
        };

        return Net_ZJH_KanPaiRet;
    })();

    pb.Net_ZJH_BiPaiReq = (function() {

        /**
         * Properties of a Net_ZJH_BiPaiReq.
         * @memberof pb
         * @interface INet_ZJH_BiPaiReq
         * @property {string|null} [TargetUserId] Net_ZJH_BiPaiReq TargetUserId
         */

        /**
         * Constructs a new Net_ZJH_BiPaiReq.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_BiPaiReq.
         * @implements INet_ZJH_BiPaiReq
         * @constructor
         * @param {pb.INet_ZJH_BiPaiReq=} [properties] Properties to set
         */
        function Net_ZJH_BiPaiReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_BiPaiReq TargetUserId.
         * @member {string} TargetUserId
         * @memberof pb.Net_ZJH_BiPaiReq
         * @instance
         */
        Net_ZJH_BiPaiReq.prototype.TargetUserId = "";

        /**
         * Creates a new Net_ZJH_BiPaiReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_BiPaiReq
         * @static
         * @param {pb.INet_ZJH_BiPaiReq=} [properties] Properties to set
         * @returns {pb.Net_ZJH_BiPaiReq} Net_ZJH_BiPaiReq instance
         */
        Net_ZJH_BiPaiReq.create = function create(properties) {
            return new Net_ZJH_BiPaiReq(properties);
        };

        /**
         * Encodes the specified Net_ZJH_BiPaiReq message. Does not implicitly {@link pb.Net_ZJH_BiPaiReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_BiPaiReq
         * @static
         * @param {pb.INet_ZJH_BiPaiReq} message Net_ZJH_BiPaiReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_BiPaiReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TargetUserId != null && Object.hasOwnProperty.call(message, "TargetUserId"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.TargetUserId);
            return writer;
        };

        /**
         * Decodes a Net_ZJH_BiPaiReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_BiPaiReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_BiPaiReq} Net_ZJH_BiPaiReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_BiPaiReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_BiPaiReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.TargetUserId = reader.string();
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
         * Gets the default type url for Net_ZJH_BiPaiReq
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_BiPaiReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_BiPaiReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_BiPaiReq";
        };

        return Net_ZJH_BiPaiReq;
    })();

    pb.Net_ZJH_BiPaiRet = (function() {

        /**
         * Properties of a Net_ZJH_BiPaiRet.
         * @memberof pb
         * @interface INet_ZJH_BiPaiRet
         * @property {number|null} [Ret] Net_ZJH_BiPaiRet Ret
         * @property {boolean|null} [IsWin] Net_ZJH_BiPaiRet IsWin
         * @property {Array.<number>|null} [Cards] Net_ZJH_BiPaiRet Cards
         */

        /**
         * Constructs a new Net_ZJH_BiPaiRet.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_BiPaiRet.
         * @implements INet_ZJH_BiPaiRet
         * @constructor
         * @param {pb.INet_ZJH_BiPaiRet=} [properties] Properties to set
         */
        function Net_ZJH_BiPaiRet(properties) {
            this.Cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_BiPaiRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_ZJH_BiPaiRet
         * @instance
         */
        Net_ZJH_BiPaiRet.prototype.Ret = 0;

        /**
         * Net_ZJH_BiPaiRet IsWin.
         * @member {boolean} IsWin
         * @memberof pb.Net_ZJH_BiPaiRet
         * @instance
         */
        Net_ZJH_BiPaiRet.prototype.IsWin = false;

        /**
         * Net_ZJH_BiPaiRet Cards.
         * @member {Array.<number>} Cards
         * @memberof pb.Net_ZJH_BiPaiRet
         * @instance
         */
        Net_ZJH_BiPaiRet.prototype.Cards = $util.emptyArray;

        /**
         * Creates a new Net_ZJH_BiPaiRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_BiPaiRet
         * @static
         * @param {pb.INet_ZJH_BiPaiRet=} [properties] Properties to set
         * @returns {pb.Net_ZJH_BiPaiRet} Net_ZJH_BiPaiRet instance
         */
        Net_ZJH_BiPaiRet.create = function create(properties) {
            return new Net_ZJH_BiPaiRet(properties);
        };

        /**
         * Encodes the specified Net_ZJH_BiPaiRet message. Does not implicitly {@link pb.Net_ZJH_BiPaiRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_BiPaiRet
         * @static
         * @param {pb.INet_ZJH_BiPaiRet} message Net_ZJH_BiPaiRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_BiPaiRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.IsWin != null && Object.hasOwnProperty.call(message, "IsWin"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.IsWin);
            if (message.Cards != null && message.Cards.length) {
                writer.uint32(/* id 8, wireType 2 =*/66).fork();
                for (var i = 0; i < message.Cards.length; ++i)
                    writer.int32(message.Cards[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a Net_ZJH_BiPaiRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_BiPaiRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_BiPaiRet} Net_ZJH_BiPaiRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_BiPaiRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_BiPaiRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.IsWin = reader.bool();
                        break;
                    }
                case 8: {
                        if (!(message.Cards && message.Cards.length))
                            message.Cards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.Cards.push(reader.int32());
                        } else
                            message.Cards.push(reader.int32());
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
         * Gets the default type url for Net_ZJH_BiPaiRet
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_BiPaiRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_BiPaiRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_BiPaiRet";
        };

        return Net_ZJH_BiPaiRet;
    })();

    pb.Net_ZJH_JiaZhuReq = (function() {

        /**
         * Properties of a Net_ZJH_JiaZhuReq.
         * @memberof pb
         * @interface INet_ZJH_JiaZhuReq
         * @property {number|null} [BettingNum] Net_ZJH_JiaZhuReq BettingNum
         */

        /**
         * Constructs a new Net_ZJH_JiaZhuReq.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_JiaZhuReq.
         * @implements INet_ZJH_JiaZhuReq
         * @constructor
         * @param {pb.INet_ZJH_JiaZhuReq=} [properties] Properties to set
         */
        function Net_ZJH_JiaZhuReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_JiaZhuReq BettingNum.
         * @member {number} BettingNum
         * @memberof pb.Net_ZJH_JiaZhuReq
         * @instance
         */
        Net_ZJH_JiaZhuReq.prototype.BettingNum = 0;

        /**
         * Creates a new Net_ZJH_JiaZhuReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_JiaZhuReq
         * @static
         * @param {pb.INet_ZJH_JiaZhuReq=} [properties] Properties to set
         * @returns {pb.Net_ZJH_JiaZhuReq} Net_ZJH_JiaZhuReq instance
         */
        Net_ZJH_JiaZhuReq.create = function create(properties) {
            return new Net_ZJH_JiaZhuReq(properties);
        };

        /**
         * Encodes the specified Net_ZJH_JiaZhuReq message. Does not implicitly {@link pb.Net_ZJH_JiaZhuReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_JiaZhuReq
         * @static
         * @param {pb.INet_ZJH_JiaZhuReq} message Net_ZJH_JiaZhuReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_JiaZhuReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.BettingNum != null && Object.hasOwnProperty.call(message, "BettingNum"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.BettingNum);
            return writer;
        };

        /**
         * Decodes a Net_ZJH_JiaZhuReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_JiaZhuReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_JiaZhuReq} Net_ZJH_JiaZhuReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_JiaZhuReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_JiaZhuReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.BettingNum = reader.int32();
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
         * Gets the default type url for Net_ZJH_JiaZhuReq
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_JiaZhuReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_JiaZhuReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_JiaZhuReq";
        };

        return Net_ZJH_JiaZhuReq;
    })();

    pb.Net_ZJH_JiaZhuRet = (function() {

        /**
         * Properties of a Net_ZJH_JiaZhuRet.
         * @memberof pb
         * @interface INet_ZJH_JiaZhuRet
         * @property {number|null} [Ret] Net_ZJH_JiaZhuRet Ret
         * @property {string|null} [UserId] Net_ZJH_JiaZhuRet UserId
         * @property {number|null} [BettingNum] Net_ZJH_JiaZhuRet BettingNum
         * @property {number|null} [OwnTotalBettingNum] Net_ZJH_JiaZhuRet OwnTotalBettingNum
         * @property {number|null} [RoomTotalBettingNum] Net_ZJH_JiaZhuRet RoomTotalBettingNum
         */

        /**
         * Constructs a new Net_ZJH_JiaZhuRet.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_JiaZhuRet.
         * @implements INet_ZJH_JiaZhuRet
         * @constructor
         * @param {pb.INet_ZJH_JiaZhuRet=} [properties] Properties to set
         */
        function Net_ZJH_JiaZhuRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_JiaZhuRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_ZJH_JiaZhuRet
         * @instance
         */
        Net_ZJH_JiaZhuRet.prototype.Ret = 0;

        /**
         * Net_ZJH_JiaZhuRet UserId.
         * @member {string} UserId
         * @memberof pb.Net_ZJH_JiaZhuRet
         * @instance
         */
        Net_ZJH_JiaZhuRet.prototype.UserId = "";

        /**
         * Net_ZJH_JiaZhuRet BettingNum.
         * @member {number} BettingNum
         * @memberof pb.Net_ZJH_JiaZhuRet
         * @instance
         */
        Net_ZJH_JiaZhuRet.prototype.BettingNum = 0;

        /**
         * Net_ZJH_JiaZhuRet OwnTotalBettingNum.
         * @member {number} OwnTotalBettingNum
         * @memberof pb.Net_ZJH_JiaZhuRet
         * @instance
         */
        Net_ZJH_JiaZhuRet.prototype.OwnTotalBettingNum = 0;

        /**
         * Net_ZJH_JiaZhuRet RoomTotalBettingNum.
         * @member {number} RoomTotalBettingNum
         * @memberof pb.Net_ZJH_JiaZhuRet
         * @instance
         */
        Net_ZJH_JiaZhuRet.prototype.RoomTotalBettingNum = 0;

        /**
         * Creates a new Net_ZJH_JiaZhuRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_JiaZhuRet
         * @static
         * @param {pb.INet_ZJH_JiaZhuRet=} [properties] Properties to set
         * @returns {pb.Net_ZJH_JiaZhuRet} Net_ZJH_JiaZhuRet instance
         */
        Net_ZJH_JiaZhuRet.create = function create(properties) {
            return new Net_ZJH_JiaZhuRet(properties);
        };

        /**
         * Encodes the specified Net_ZJH_JiaZhuRet message. Does not implicitly {@link pb.Net_ZJH_JiaZhuRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_JiaZhuRet
         * @static
         * @param {pb.INet_ZJH_JiaZhuRet} message Net_ZJH_JiaZhuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_JiaZhuRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.UserId);
            if (message.BettingNum != null && Object.hasOwnProperty.call(message, "BettingNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.BettingNum);
            if (message.OwnTotalBettingNum != null && Object.hasOwnProperty.call(message, "OwnTotalBettingNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.OwnTotalBettingNum);
            if (message.RoomTotalBettingNum != null && Object.hasOwnProperty.call(message, "RoomTotalBettingNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.RoomTotalBettingNum);
            return writer;
        };

        /**
         * Decodes a Net_ZJH_JiaZhuRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_JiaZhuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_JiaZhuRet} Net_ZJH_JiaZhuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_JiaZhuRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_JiaZhuRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.UserId = reader.string();
                        break;
                    }
                case 3: {
                        message.BettingNum = reader.int32();
                        break;
                    }
                case 4: {
                        message.OwnTotalBettingNum = reader.int32();
                        break;
                    }
                case 5: {
                        message.RoomTotalBettingNum = reader.int32();
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
         * Gets the default type url for Net_ZJH_JiaZhuRet
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_JiaZhuRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_JiaZhuRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_JiaZhuRet";
        };

        return Net_ZJH_JiaZhuRet;
    })();

    pb.Net_ZJH_GenZhuReq = (function() {

        /**
         * Properties of a Net_ZJH_GenZhuReq.
         * @memberof pb
         * @interface INet_ZJH_GenZhuReq
         */

        /**
         * Constructs a new Net_ZJH_GenZhuReq.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_GenZhuReq.
         * @implements INet_ZJH_GenZhuReq
         * @constructor
         * @param {pb.INet_ZJH_GenZhuReq=} [properties] Properties to set
         */
        function Net_ZJH_GenZhuReq(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Creates a new Net_ZJH_GenZhuReq instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_GenZhuReq
         * @static
         * @param {pb.INet_ZJH_GenZhuReq=} [properties] Properties to set
         * @returns {pb.Net_ZJH_GenZhuReq} Net_ZJH_GenZhuReq instance
         */
        Net_ZJH_GenZhuReq.create = function create(properties) {
            return new Net_ZJH_GenZhuReq(properties);
        };

        /**
         * Encodes the specified Net_ZJH_GenZhuReq message. Does not implicitly {@link pb.Net_ZJH_GenZhuReq.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_GenZhuReq
         * @static
         * @param {pb.INet_ZJH_GenZhuReq} message Net_ZJH_GenZhuReq message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_GenZhuReq.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            return writer;
        };

        /**
         * Decodes a Net_ZJH_GenZhuReq message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_GenZhuReq
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_GenZhuReq} Net_ZJH_GenZhuReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_GenZhuReq.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_GenZhuReq();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Gets the default type url for Net_ZJH_GenZhuReq
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_GenZhuReq
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_GenZhuReq.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_GenZhuReq";
        };

        return Net_ZJH_GenZhuReq;
    })();

    pb.Net_ZJH_GenZhuRet = (function() {

        /**
         * Properties of a Net_ZJH_GenZhuRet.
         * @memberof pb
         * @interface INet_ZJH_GenZhuRet
         * @property {number|null} [Ret] Net_ZJH_GenZhuRet Ret
         * @property {string|null} [UserId] Net_ZJH_GenZhuRet UserId
         * @property {number|null} [BettingNum] Net_ZJH_GenZhuRet BettingNum
         * @property {number|null} [OwnTotalBettingNum] Net_ZJH_GenZhuRet OwnTotalBettingNum
         * @property {number|null} [RoomTotalBettingNum] Net_ZJH_GenZhuRet RoomTotalBettingNum
         */

        /**
         * Constructs a new Net_ZJH_GenZhuRet.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_GenZhuRet.
         * @implements INet_ZJH_GenZhuRet
         * @constructor
         * @param {pb.INet_ZJH_GenZhuRet=} [properties] Properties to set
         */
        function Net_ZJH_GenZhuRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_GenZhuRet Ret.
         * @member {number} Ret
         * @memberof pb.Net_ZJH_GenZhuRet
         * @instance
         */
        Net_ZJH_GenZhuRet.prototype.Ret = 0;

        /**
         * Net_ZJH_GenZhuRet UserId.
         * @member {string} UserId
         * @memberof pb.Net_ZJH_GenZhuRet
         * @instance
         */
        Net_ZJH_GenZhuRet.prototype.UserId = "";

        /**
         * Net_ZJH_GenZhuRet BettingNum.
         * @member {number} BettingNum
         * @memberof pb.Net_ZJH_GenZhuRet
         * @instance
         */
        Net_ZJH_GenZhuRet.prototype.BettingNum = 0;

        /**
         * Net_ZJH_GenZhuRet OwnTotalBettingNum.
         * @member {number} OwnTotalBettingNum
         * @memberof pb.Net_ZJH_GenZhuRet
         * @instance
         */
        Net_ZJH_GenZhuRet.prototype.OwnTotalBettingNum = 0;

        /**
         * Net_ZJH_GenZhuRet RoomTotalBettingNum.
         * @member {number} RoomTotalBettingNum
         * @memberof pb.Net_ZJH_GenZhuRet
         * @instance
         */
        Net_ZJH_GenZhuRet.prototype.RoomTotalBettingNum = 0;

        /**
         * Creates a new Net_ZJH_GenZhuRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_GenZhuRet
         * @static
         * @param {pb.INet_ZJH_GenZhuRet=} [properties] Properties to set
         * @returns {pb.Net_ZJH_GenZhuRet} Net_ZJH_GenZhuRet instance
         */
        Net_ZJH_GenZhuRet.create = function create(properties) {
            return new Net_ZJH_GenZhuRet(properties);
        };

        /**
         * Encodes the specified Net_ZJH_GenZhuRet message. Does not implicitly {@link pb.Net_ZJH_GenZhuRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_GenZhuRet
         * @static
         * @param {pb.INet_ZJH_GenZhuRet} message Net_ZJH_GenZhuRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_GenZhuRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ret != null && Object.hasOwnProperty.call(message, "Ret"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.Ret);
            if (message.UserId != null && Object.hasOwnProperty.call(message, "UserId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.UserId);
            if (message.BettingNum != null && Object.hasOwnProperty.call(message, "BettingNum"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.BettingNum);
            if (message.OwnTotalBettingNum != null && Object.hasOwnProperty.call(message, "OwnTotalBettingNum"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.OwnTotalBettingNum);
            if (message.RoomTotalBettingNum != null && Object.hasOwnProperty.call(message, "RoomTotalBettingNum"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.RoomTotalBettingNum);
            return writer;
        };

        /**
         * Decodes a Net_ZJH_GenZhuRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_GenZhuRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_GenZhuRet} Net_ZJH_GenZhuRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_GenZhuRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_GenZhuRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.Ret = reader.int32();
                        break;
                    }
                case 2: {
                        message.UserId = reader.string();
                        break;
                    }
                case 3: {
                        message.BettingNum = reader.int32();
                        break;
                    }
                case 4: {
                        message.OwnTotalBettingNum = reader.int32();
                        break;
                    }
                case 5: {
                        message.RoomTotalBettingNum = reader.int32();
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
         * Gets the default type url for Net_ZJH_GenZhuRet
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_GenZhuRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_GenZhuRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_GenZhuRet";
        };

        return Net_ZJH_GenZhuRet;
    })();

    pb.Net_ZJH_OfflineRet = (function() {

        /**
         * Properties of a Net_ZJH_OfflineRet.
         * @memberof pb
         * @interface INet_ZJH_OfflineRet
         * @property {string|null} [TargetUserId] Net_ZJH_OfflineRet TargetUserId
         * @property {boolean|null} [TargetIsIsOffline] Net_ZJH_OfflineRet TargetIsIsOffline
         */

        /**
         * Constructs a new Net_ZJH_OfflineRet.
         * @memberof pb
         * @classdesc Represents a Net_ZJH_OfflineRet.
         * @implements INet_ZJH_OfflineRet
         * @constructor
         * @param {pb.INet_ZJH_OfflineRet=} [properties] Properties to set
         */
        function Net_ZJH_OfflineRet(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Net_ZJH_OfflineRet TargetUserId.
         * @member {string} TargetUserId
         * @memberof pb.Net_ZJH_OfflineRet
         * @instance
         */
        Net_ZJH_OfflineRet.prototype.TargetUserId = "";

        /**
         * Net_ZJH_OfflineRet TargetIsIsOffline.
         * @member {boolean} TargetIsIsOffline
         * @memberof pb.Net_ZJH_OfflineRet
         * @instance
         */
        Net_ZJH_OfflineRet.prototype.TargetIsIsOffline = false;

        /**
         * Creates a new Net_ZJH_OfflineRet instance using the specified properties.
         * @function create
         * @memberof pb.Net_ZJH_OfflineRet
         * @static
         * @param {pb.INet_ZJH_OfflineRet=} [properties] Properties to set
         * @returns {pb.Net_ZJH_OfflineRet} Net_ZJH_OfflineRet instance
         */
        Net_ZJH_OfflineRet.create = function create(properties) {
            return new Net_ZJH_OfflineRet(properties);
        };

        /**
         * Encodes the specified Net_ZJH_OfflineRet message. Does not implicitly {@link pb.Net_ZJH_OfflineRet.verify|verify} messages.
         * @function encode
         * @memberof pb.Net_ZJH_OfflineRet
         * @static
         * @param {pb.INet_ZJH_OfflineRet} message Net_ZJH_OfflineRet message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Net_ZJH_OfflineRet.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TargetUserId != null && Object.hasOwnProperty.call(message, "TargetUserId"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.TargetUserId);
            if (message.TargetIsIsOffline != null && Object.hasOwnProperty.call(message, "TargetIsIsOffline"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.TargetIsIsOffline);
            return writer;
        };

        /**
         * Decodes a Net_ZJH_OfflineRet message from the specified reader or buffer.
         * @function decode
         * @memberof pb.Net_ZJH_OfflineRet
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.Net_ZJH_OfflineRet} Net_ZJH_OfflineRet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Net_ZJH_OfflineRet.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.Net_ZJH_OfflineRet();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 2: {
                        message.TargetUserId = reader.string();
                        break;
                    }
                case 3: {
                        message.TargetIsIsOffline = reader.bool();
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
         * Gets the default type url for Net_ZJH_OfflineRet
         * @function getTypeUrl
         * @memberof pb.Net_ZJH_OfflineRet
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Net_ZJH_OfflineRet.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.Net_ZJH_OfflineRet";
        };

        return Net_ZJH_OfflineRet;
    })();

    pb.PlaceHolder3333 = (function() {

        /**
         * Properties of a PlaceHolder3333.
         * @memberof pb
         * @interface IPlaceHolder3333
         * @property {string|null} [dec] PlaceHolder3333 dec
         * @property {string|null} [account] PlaceHolder3333 account
         * @property {boolean|null} [flag] PlaceHolder3333 flag
         * @property {number|null} [funID] PlaceHolder3333 funID
         * @property {Array.<number>|null} [cards] PlaceHolder3333 cards
         */

        /**
         * Constructs a new PlaceHolder3333.
         * @memberof pb
         * @classdesc Represents a PlaceHolder3333.
         * @implements IPlaceHolder3333
         * @constructor
         * @param {pb.IPlaceHolder3333=} [properties] Properties to set
         */
        function PlaceHolder3333(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlaceHolder3333 dec.
         * @member {string} dec
         * @memberof pb.PlaceHolder3333
         * @instance
         */
        PlaceHolder3333.prototype.dec = "";

        /**
         * PlaceHolder3333 account.
         * @member {string} account
         * @memberof pb.PlaceHolder3333
         * @instance
         */
        PlaceHolder3333.prototype.account = "";

        /**
         * PlaceHolder3333 flag.
         * @member {boolean} flag
         * @memberof pb.PlaceHolder3333
         * @instance
         */
        PlaceHolder3333.prototype.flag = false;

        /**
         * PlaceHolder3333 funID.
         * @member {number} funID
         * @memberof pb.PlaceHolder3333
         * @instance
         */
        PlaceHolder3333.prototype.funID = 0;

        /**
         * PlaceHolder3333 cards.
         * @member {Array.<number>} cards
         * @memberof pb.PlaceHolder3333
         * @instance
         */
        PlaceHolder3333.prototype.cards = $util.emptyArray;

        /**
         * Creates a new PlaceHolder3333 instance using the specified properties.
         * @function create
         * @memberof pb.PlaceHolder3333
         * @static
         * @param {pb.IPlaceHolder3333=} [properties] Properties to set
         * @returns {pb.PlaceHolder3333} PlaceHolder3333 instance
         */
        PlaceHolder3333.create = function create(properties) {
            return new PlaceHolder3333(properties);
        };

        /**
         * Encodes the specified PlaceHolder3333 message. Does not implicitly {@link pb.PlaceHolder3333.verify|verify} messages.
         * @function encode
         * @memberof pb.PlaceHolder3333
         * @static
         * @param {pb.IPlaceHolder3333} message PlaceHolder3333 message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlaceHolder3333.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.dec != null && Object.hasOwnProperty.call(message, "dec"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.dec);
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.account);
            if (message.flag != null && Object.hasOwnProperty.call(message, "flag"))
                writer.uint32(/* id 3, wireType 0 =*/24).bool(message.flag);
            if (message.funID != null && Object.hasOwnProperty.call(message, "funID"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.funID);
            if (message.cards != null && message.cards.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.cards.length; ++i)
                    writer.int32(message.cards[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes a PlaceHolder3333 message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PlaceHolder3333
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PlaceHolder3333} PlaceHolder3333
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlaceHolder3333.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PlaceHolder3333();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.dec = reader.string();
                        break;
                    }
                case 2: {
                        message.account = reader.string();
                        break;
                    }
                case 3: {
                        message.flag = reader.bool();
                        break;
                    }
                case 4: {
                        message.funID = reader.int32();
                        break;
                    }
                case 5: {
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cards.push(reader.int32());
                        } else
                            message.cards.push(reader.int32());
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
         * Gets the default type url for PlaceHolder3333
         * @function getTypeUrl
         * @memberof pb.PlaceHolder3333
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlaceHolder3333.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PlaceHolder3333";
        };

        return PlaceHolder3333;
    })();

    pb.AvatarInfo = (function() {

        /**
         * Properties of an AvatarInfo.
         * @memberof pb
         * @interface IAvatarInfo
         * @property {string|null} [name] AvatarInfo name
         * @property {string|null} [account] AvatarInfo account
         * @property {number|null} [money] AvatarInfo money
         * @property {number|null} [team_id] AvatarInfo team_id
         * @property {Array.<number>|null} [cards] AvatarInfo cards
         */

        /**
         * Constructs a new AvatarInfo.
         * @memberof pb
         * @classdesc Represents an AvatarInfo.
         * @implements IAvatarInfo
         * @constructor
         * @param {pb.IAvatarInfo=} [properties] Properties to set
         */
        function AvatarInfo(properties) {
            this.cards = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AvatarInfo name.
         * @member {string} name
         * @memberof pb.AvatarInfo
         * @instance
         */
        AvatarInfo.prototype.name = "";

        /**
         * AvatarInfo account.
         * @member {string} account
         * @memberof pb.AvatarInfo
         * @instance
         */
        AvatarInfo.prototype.account = "";

        /**
         * AvatarInfo money.
         * @member {number} money
         * @memberof pb.AvatarInfo
         * @instance
         */
        AvatarInfo.prototype.money = 0;

        /**
         * AvatarInfo team_id.
         * @member {number} team_id
         * @memberof pb.AvatarInfo
         * @instance
         */
        AvatarInfo.prototype.team_id = 0;

        /**
         * AvatarInfo cards.
         * @member {Array.<number>} cards
         * @memberof pb.AvatarInfo
         * @instance
         */
        AvatarInfo.prototype.cards = $util.emptyArray;

        /**
         * Creates a new AvatarInfo instance using the specified properties.
         * @function create
         * @memberof pb.AvatarInfo
         * @static
         * @param {pb.IAvatarInfo=} [properties] Properties to set
         * @returns {pb.AvatarInfo} AvatarInfo instance
         */
        AvatarInfo.create = function create(properties) {
            return new AvatarInfo(properties);
        };

        /**
         * Encodes the specified AvatarInfo message. Does not implicitly {@link pb.AvatarInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.AvatarInfo
         * @static
         * @param {pb.IAvatarInfo} message AvatarInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AvatarInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.name != null && Object.hasOwnProperty.call(message, "name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.name);
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.account);
            if (message.money != null && Object.hasOwnProperty.call(message, "money"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.money);
            if (message.team_id != null && Object.hasOwnProperty.call(message, "team_id"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.team_id);
            if (message.cards != null && message.cards.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.cards.length; ++i)
                    writer.int32(message.cards[i]);
                writer.ldelim();
            }
            return writer;
        };

        /**
         * Decodes an AvatarInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.AvatarInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.AvatarInfo} AvatarInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AvatarInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.AvatarInfo();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.name = reader.string();
                        break;
                    }
                case 2: {
                        message.account = reader.string();
                        break;
                    }
                case 3: {
                        message.money = reader.int32();
                        break;
                    }
                case 4: {
                        message.team_id = reader.int32();
                        break;
                    }
                case 5: {
                        if (!(message.cards && message.cards.length))
                            message.cards = [];
                        if ((tag & 7) === 2) {
                            var end2 = reader.uint32() + reader.pos;
                            while (reader.pos < end2)
                                message.cards.push(reader.int32());
                        } else
                            message.cards.push(reader.int32());
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
         * Gets the default type url for AvatarInfo
         * @function getTypeUrl
         * @memberof pb.AvatarInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        AvatarInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.AvatarInfo";
        };

        return AvatarInfo;
    })();

    pb.MatchingSuccess = (function() {

        /**
         * Properties of a MatchingSuccess.
         * @memberof pb
         * @interface IMatchingSuccess
         * @property {Object.<string,pb.IAvatarInfo>|null} [AvatarInfos] MatchingSuccess AvatarInfos
         */

        /**
         * Constructs a new MatchingSuccess.
         * @memberof pb
         * @classdesc Represents a MatchingSuccess.
         * @implements IMatchingSuccess
         * @constructor
         * @param {pb.IMatchingSuccess=} [properties] Properties to set
         */
        function MatchingSuccess(properties) {
            this.AvatarInfos = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * MatchingSuccess AvatarInfos.
         * @member {Object.<string,pb.IAvatarInfo>} AvatarInfos
         * @memberof pb.MatchingSuccess
         * @instance
         */
        MatchingSuccess.prototype.AvatarInfos = $util.emptyObject;

        /**
         * Creates a new MatchingSuccess instance using the specified properties.
         * @function create
         * @memberof pb.MatchingSuccess
         * @static
         * @param {pb.IMatchingSuccess=} [properties] Properties to set
         * @returns {pb.MatchingSuccess} MatchingSuccess instance
         */
        MatchingSuccess.create = function create(properties) {
            return new MatchingSuccess(properties);
        };

        /**
         * Encodes the specified MatchingSuccess message. Does not implicitly {@link pb.MatchingSuccess.verify|verify} messages.
         * @function encode
         * @memberof pb.MatchingSuccess
         * @static
         * @param {pb.IMatchingSuccess} message MatchingSuccess message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        MatchingSuccess.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AvatarInfos != null && Object.hasOwnProperty.call(message, "AvatarInfos"))
                for (var keys = Object.keys(message.AvatarInfos), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 1, wireType 2 =*/10).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.pb.AvatarInfo.encode(message.AvatarInfos[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Decodes a MatchingSuccess message from the specified reader or buffer.
         * @function decode
         * @memberof pb.MatchingSuccess
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.MatchingSuccess} MatchingSuccess
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        MatchingSuccess.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.MatchingSuccess(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        if (message.AvatarInfos === $util.emptyObject)
                            message.AvatarInfos = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.pb.AvatarInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.AvatarInfos[key] = value;
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
         * Gets the default type url for MatchingSuccess
         * @function getTypeUrl
         * @memberof pb.MatchingSuccess
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        MatchingSuccess.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.MatchingSuccess";
        };

        return MatchingSuccess;
    })();

    pb.PlayedCardInfo = (function() {

        /**
         * Properties of a PlayedCardInfo.
         * @memberof pb
         * @interface IPlayedCardInfo
         * @property {number|null} [team_id] PlayedCardInfo team_id
         * @property {string|null} [account] PlayedCardInfo account
         * @property {number|null} [card_value] PlayedCardInfo card_value
         * @property {number|null} [out_card_value] PlayedCardInfo out_card_value
         * @property {number|null} [cards_left_num] PlayedCardInfo cards_left_num
         * @property {Object.<string,pb.IAvatarInfo>|null} [AvatarInfos] PlayedCardInfo AvatarInfos
         */

        /**
         * Constructs a new PlayedCardInfo.
         * @memberof pb
         * @classdesc Represents a PlayedCardInfo.
         * @implements IPlayedCardInfo
         * @constructor
         * @param {pb.IPlayedCardInfo=} [properties] Properties to set
         */
        function PlayedCardInfo(properties) {
            this.AvatarInfos = {};
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PlayedCardInfo team_id.
         * @member {number} team_id
         * @memberof pb.PlayedCardInfo
         * @instance
         */
        PlayedCardInfo.prototype.team_id = 0;

        /**
         * PlayedCardInfo account.
         * @member {string} account
         * @memberof pb.PlayedCardInfo
         * @instance
         */
        PlayedCardInfo.prototype.account = "";

        /**
         * PlayedCardInfo card_value.
         * @member {number} card_value
         * @memberof pb.PlayedCardInfo
         * @instance
         */
        PlayedCardInfo.prototype.card_value = 0;

        /**
         * PlayedCardInfo out_card_value.
         * @member {number} out_card_value
         * @memberof pb.PlayedCardInfo
         * @instance
         */
        PlayedCardInfo.prototype.out_card_value = 0;

        /**
         * PlayedCardInfo cards_left_num.
         * @member {number} cards_left_num
         * @memberof pb.PlayedCardInfo
         * @instance
         */
        PlayedCardInfo.prototype.cards_left_num = 0;

        /**
         * PlayedCardInfo AvatarInfos.
         * @member {Object.<string,pb.IAvatarInfo>} AvatarInfos
         * @memberof pb.PlayedCardInfo
         * @instance
         */
        PlayedCardInfo.prototype.AvatarInfos = $util.emptyObject;

        /**
         * Creates a new PlayedCardInfo instance using the specified properties.
         * @function create
         * @memberof pb.PlayedCardInfo
         * @static
         * @param {pb.IPlayedCardInfo=} [properties] Properties to set
         * @returns {pb.PlayedCardInfo} PlayedCardInfo instance
         */
        PlayedCardInfo.create = function create(properties) {
            return new PlayedCardInfo(properties);
        };

        /**
         * Encodes the specified PlayedCardInfo message. Does not implicitly {@link pb.PlayedCardInfo.verify|verify} messages.
         * @function encode
         * @memberof pb.PlayedCardInfo
         * @static
         * @param {pb.IPlayedCardInfo} message PlayedCardInfo message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PlayedCardInfo.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.team_id != null && Object.hasOwnProperty.call(message, "team_id"))
                writer.uint32(/* id 1, wireType 0 =*/8).int32(message.team_id);
            if (message.account != null && Object.hasOwnProperty.call(message, "account"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.account);
            if (message.card_value != null && Object.hasOwnProperty.call(message, "card_value"))
                writer.uint32(/* id 3, wireType 0 =*/24).int32(message.card_value);
            if (message.out_card_value != null && Object.hasOwnProperty.call(message, "out_card_value"))
                writer.uint32(/* id 4, wireType 0 =*/32).int32(message.out_card_value);
            if (message.cards_left_num != null && Object.hasOwnProperty.call(message, "cards_left_num"))
                writer.uint32(/* id 5, wireType 0 =*/40).int32(message.cards_left_num);
            if (message.AvatarInfos != null && Object.hasOwnProperty.call(message, "AvatarInfos"))
                for (var keys = Object.keys(message.AvatarInfos), i = 0; i < keys.length; ++i) {
                    writer.uint32(/* id 6, wireType 2 =*/50).fork().uint32(/* id 1, wireType 0 =*/8).int32(keys[i]);
                    $root.pb.AvatarInfo.encode(message.AvatarInfos[keys[i]], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim().ldelim();
                }
            return writer;
        };

        /**
         * Decodes a PlayedCardInfo message from the specified reader or buffer.
         * @function decode
         * @memberof pb.PlayedCardInfo
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {pb.PlayedCardInfo} PlayedCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PlayedCardInfo.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.pb.PlayedCardInfo(), key, value;
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1: {
                        message.team_id = reader.int32();
                        break;
                    }
                case 2: {
                        message.account = reader.string();
                        break;
                    }
                case 3: {
                        message.card_value = reader.int32();
                        break;
                    }
                case 4: {
                        message.out_card_value = reader.int32();
                        break;
                    }
                case 5: {
                        message.cards_left_num = reader.int32();
                        break;
                    }
                case 6: {
                        if (message.AvatarInfos === $util.emptyObject)
                            message.AvatarInfos = {};
                        var end2 = reader.uint32() + reader.pos;
                        key = 0;
                        value = null;
                        while (reader.pos < end2) {
                            var tag2 = reader.uint32();
                            switch (tag2 >>> 3) {
                            case 1:
                                key = reader.int32();
                                break;
                            case 2:
                                value = $root.pb.AvatarInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag2 & 7);
                                break;
                            }
                        }
                        message.AvatarInfos[key] = value;
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
         * Gets the default type url for PlayedCardInfo
         * @function getTypeUrl
         * @memberof pb.PlayedCardInfo
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        PlayedCardInfo.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
            if (typeUrlPrefix === undefined) {
                typeUrlPrefix = "type.googleapis.com";
            }
            return typeUrlPrefix + "/pb.PlayedCardInfo";
        };

        return PlayedCardInfo;
    })();

    return pb;
})();

module.exports = $root;
