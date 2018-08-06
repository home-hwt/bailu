/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
// (function(protobuf) {
//     "use strict";
var protobuf = window.protobuf;
protobuf.roots.default=window;
// Common aliases
var $Reader = protobuf.Reader, $Writer = protobuf.Writer, $util = protobuf.util;

// Exported root namespace
var $root = protobuf.roots["default"] || (protobuf.roots["default"] = {});

    // Common aliases
    var $Reader = protobuf.Reader, $Writer = protobuf.Writer, $util = protobuf.util;
    
    // Exported root namespace
    var $root = protobuf.roots["default"] || (protobuf.roots["default"] = {});
    
    $root.com = (function() {
    
        /**
         * Namespace com.
         * @exports com
         * @namespace
         */
        var com = {};
    
        com.clientproto = (function() {
    
            /**
             * Namespace clientproto.
             * @memberof com
             * @namespace
             */
            var clientproto = {};
    
            clientproto.loginMessage = (function() {
    
                /**
                 * Namespace loginMessage.
                 * @memberof com.clientproto
                 * @namespace
                 */
                var loginMessage = {};
    
                loginMessage.ReqLogin = (function() {
    
                    /**
                     * Properties of a ReqLogin.
                     * @memberof com.clientproto.loginMessage
                     * @interface IReqLogin
                     * @property {string|null} [code] ReqLogin code
                     * @property {number|null} [serverId] ReqLogin serverId
                     * @property {number|null} [agentId] ReqLogin agentId
                     * @property {number|null} [clientId] ReqLogin clientId
                     */
    
                    /**
                     * Constructs a new ReqLogin.
                     * @memberof com.clientproto.loginMessage
                     * @classdesc Represents a ReqLogin.
                     * @implements IReqLogin
                     * @constructor
                     * @param {com.clientproto.loginMessage.IReqLogin=} [properties] Properties to set
                     */
                    function ReqLogin(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReqLogin code.
                     * @member {string} code
                     * @memberof com.clientproto.loginMessage.ReqLogin
                     * @instance
                     */
                    ReqLogin.prototype.code = "";
    
                    /**
                     * ReqLogin serverId.
                     * @member {number} serverId
                     * @memberof com.clientproto.loginMessage.ReqLogin
                     * @instance
                     */
                    ReqLogin.prototype.serverId = 0;
    
                    /**
                     * ReqLogin agentId.
                     * @member {number} agentId
                     * @memberof com.clientproto.loginMessage.ReqLogin
                     * @instance
                     */
                    ReqLogin.prototype.agentId = 0;
    
                    /**
                     * ReqLogin clientId.
                     * @member {number} clientId
                     * @memberof com.clientproto.loginMessage.ReqLogin
                     * @instance
                     */
                    ReqLogin.prototype.clientId = 0;
    
                    /**
                     * Creates a new ReqLogin instance using the specified properties.
                     * @function create
                     * @memberof com.clientproto.loginMessage.ReqLogin
                     * @static
                     * @param {com.clientproto.loginMessage.IReqLogin=} [properties] Properties to set
                     * @returns {com.clientproto.loginMessage.ReqLogin} ReqLogin instance
                     */
                    ReqLogin.create = function create(properties) {
                        return new ReqLogin(properties);
                    };
    
                    /**
                     * Encodes the specified ReqLogin message. Does not implicitly {@link com.clientproto.loginMessage.ReqLogin.verify|verify} messages.
                     * @function encode
                     * @memberof com.clientproto.loginMessage.ReqLogin
                     * @static
                     * @param {com.clientproto.loginMessage.IReqLogin} message ReqLogin message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ReqLogin.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.code != null && message.hasOwnProperty("code"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.code);
                        if (message.serverId != null && message.hasOwnProperty("serverId"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.serverId);
                        if (message.agentId != null && message.hasOwnProperty("agentId"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.agentId);
                        if (message.clientId != null && message.hasOwnProperty("clientId"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.clientId);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReqLogin message, length delimited. Does not implicitly {@link com.clientproto.loginMessage.ReqLogin.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.clientproto.loginMessage.ReqLogin
                     * @static
                     * @param {com.clientproto.loginMessage.IReqLogin} message ReqLogin message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ReqLogin.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReqLogin message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.clientproto.loginMessage.ReqLogin
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.clientproto.loginMessage.ReqLogin} ReqLogin
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReqLogin.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.clientproto.loginMessage.ReqLogin();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.code = reader.string();
                                break;
                            case 2:
                                message.serverId = reader.int32();
                                break;
                            case 3:
                                message.agentId = reader.int32();
                                break;
                            case 4:
                                message.clientId = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ReqLogin message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.clientproto.loginMessage.ReqLogin
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.clientproto.loginMessage.ReqLogin} ReqLogin
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReqLogin.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReqLogin message.
                     * @function verify
                     * @memberof com.clientproto.loginMessage.ReqLogin
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReqLogin.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.code != null && message.hasOwnProperty("code"))
                            if (!$util.isString(message.code))
                                return "code: string expected";
                        if (message.serverId != null && message.hasOwnProperty("serverId"))
                            if (!$util.isInteger(message.serverId))
                                return "serverId: integer expected";
                        if (message.agentId != null && message.hasOwnProperty("agentId"))
                            if (!$util.isInteger(message.agentId))
                                return "agentId: integer expected";
                        if (message.clientId != null && message.hasOwnProperty("clientId"))
                            if (!$util.isInteger(message.clientId))
                                return "clientId: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReqLogin message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.clientproto.loginMessage.ReqLogin
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.clientproto.loginMessage.ReqLogin} ReqLogin
                     */
                    ReqLogin.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.clientproto.loginMessage.ReqLogin)
                            return object;
                        var message = new $root.com.clientproto.loginMessage.ReqLogin();
                        if (object.code != null)
                            message.code = String(object.code);
                        if (object.serverId != null)
                            message.serverId = object.serverId | 0;
                        if (object.agentId != null)
                            message.agentId = object.agentId | 0;
                        if (object.clientId != null)
                            message.clientId = object.clientId | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReqLogin message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.clientproto.loginMessage.ReqLogin
                     * @static
                     * @param {com.clientproto.loginMessage.ReqLogin} message ReqLogin
                     * @param {protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReqLogin.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.code = "";
                            object.serverId = 0;
                            object.agentId = 0;
                            object.clientId = 0;
                        }
                        if (message.code != null && message.hasOwnProperty("code"))
                            object.code = message.code;
                        if (message.serverId != null && message.hasOwnProperty("serverId"))
                            object.serverId = message.serverId;
                        if (message.agentId != null && message.hasOwnProperty("agentId"))
                            object.agentId = message.agentId;
                        if (message.clientId != null && message.hasOwnProperty("clientId"))
                            object.clientId = message.clientId;
                        return object;
                    };
    
                    /**
                     * Converts this ReqLogin to JSON.
                     * @function toJSON
                     * @memberof com.clientproto.loginMessage.ReqLogin
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReqLogin.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, protobuf.util.toJSONOptions);
                    };
    
                    return ReqLogin;
                })();
    
                loginMessage.ReqHeart = (function() {
    
                    /**
                     * Properties of a ReqHeart.
                     * @memberof com.clientproto.loginMessage
                     * @interface IReqHeart
                     */
    
                    /**
                     * Constructs a new ReqHeart.
                     * @memberof com.clientproto.loginMessage
                     * @classdesc Represents a ReqHeart.
                     * @implements IReqHeart
                     * @constructor
                     * @param {com.clientproto.loginMessage.IReqHeart=} [properties] Properties to set
                     */
                    function ReqHeart(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Creates a new ReqHeart instance using the specified properties.
                     * @function create
                     * @memberof com.clientproto.loginMessage.ReqHeart
                     * @static
                     * @param {com.clientproto.loginMessage.IReqHeart=} [properties] Properties to set
                     * @returns {com.clientproto.loginMessage.ReqHeart} ReqHeart instance
                     */
                    ReqHeart.create = function create(properties) {
                        return new ReqHeart(properties);
                    };
    
                    /**
                     * Encodes the specified ReqHeart message. Does not implicitly {@link com.clientproto.loginMessage.ReqHeart.verify|verify} messages.
                     * @function encode
                     * @memberof com.clientproto.loginMessage.ReqHeart
                     * @static
                     * @param {com.clientproto.loginMessage.IReqHeart} message ReqHeart message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ReqHeart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReqHeart message, length delimited. Does not implicitly {@link com.clientproto.loginMessage.ReqHeart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.clientproto.loginMessage.ReqHeart
                     * @static
                     * @param {com.clientproto.loginMessage.IReqHeart} message ReqHeart message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ReqHeart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReqHeart message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.clientproto.loginMessage.ReqHeart
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.clientproto.loginMessage.ReqHeart} ReqHeart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReqHeart.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.clientproto.loginMessage.ReqHeart();
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
                     * Decodes a ReqHeart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.clientproto.loginMessage.ReqHeart
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.clientproto.loginMessage.ReqHeart} ReqHeart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReqHeart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReqHeart message.
                     * @function verify
                     * @memberof com.clientproto.loginMessage.ReqHeart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReqHeart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReqHeart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.clientproto.loginMessage.ReqHeart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.clientproto.loginMessage.ReqHeart} ReqHeart
                     */
                    ReqHeart.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.clientproto.loginMessage.ReqHeart)
                            return object;
                        return new $root.com.clientproto.loginMessage.ReqHeart();
                    };
    
                    /**
                     * Creates a plain object from a ReqHeart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.clientproto.loginMessage.ReqHeart
                     * @static
                     * @param {com.clientproto.loginMessage.ReqHeart} message ReqHeart
                     * @param {protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReqHeart.toObject = function toObject() {
                        return {};
                    };
    
                    /**
                     * Converts this ReqHeart to JSON.
                     * @function toJSON
                     * @memberof com.clientproto.loginMessage.ReqHeart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReqHeart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, protobuf.util.toJSONOptions);
                    };
    
                    return ReqHeart;
                })();
    
                loginMessage.ReqCreatePlayer = (function() {
    
                    /**
                     * Properties of a ReqCreatePlayer.
                     * @memberof com.clientproto.loginMessage
                     * @interface IReqCreatePlayer
                     * @property {number|null} [gender] ReqCreatePlayer gender
                     * @property {number|null} [type] ReqCreatePlayer type
                     * @property {string|null} [playerName] ReqCreatePlayer playerName
                     */
    
                    /**
                     * Constructs a new ReqCreatePlayer.
                     * @memberof com.clientproto.loginMessage
                     * @classdesc Represents a ReqCreatePlayer.
                     * @implements IReqCreatePlayer
                     * @constructor
                     * @param {com.clientproto.loginMessage.IReqCreatePlayer=} [properties] Properties to set
                     */
                    function ReqCreatePlayer(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReqCreatePlayer gender.
                     * @member {number} gender
                     * @memberof com.clientproto.loginMessage.ReqCreatePlayer
                     * @instance
                     */
                    ReqCreatePlayer.prototype.gender = 0;
    
                    /**
                     * ReqCreatePlayer type.
                     * @member {number} type
                     * @memberof com.clientproto.loginMessage.ReqCreatePlayer
                     * @instance
                     */
                    ReqCreatePlayer.prototype.type = 0;
    
                    /**
                     * ReqCreatePlayer playerName.
                     * @member {string} playerName
                     * @memberof com.clientproto.loginMessage.ReqCreatePlayer
                     * @instance
                     */
                    ReqCreatePlayer.prototype.playerName = "";
    
                    /**
                     * Creates a new ReqCreatePlayer instance using the specified properties.
                     * @function create
                     * @memberof com.clientproto.loginMessage.ReqCreatePlayer
                     * @static
                     * @param {com.clientproto.loginMessage.IReqCreatePlayer=} [properties] Properties to set
                     * @returns {com.clientproto.loginMessage.ReqCreatePlayer} ReqCreatePlayer instance
                     */
                    ReqCreatePlayer.create = function create(properties) {
                        return new ReqCreatePlayer(properties);
                    };
    
                    /**
                     * Encodes the specified ReqCreatePlayer message. Does not implicitly {@link com.clientproto.loginMessage.ReqCreatePlayer.verify|verify} messages.
                     * @function encode
                     * @memberof com.clientproto.loginMessage.ReqCreatePlayer
                     * @static
                     * @param {com.clientproto.loginMessage.IReqCreatePlayer} message ReqCreatePlayer message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ReqCreatePlayer.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.gender != null && message.hasOwnProperty("gender"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.gender);
                        if (message.type != null && message.hasOwnProperty("type"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.type);
                        if (message.playerName != null && message.hasOwnProperty("playerName"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.playerName);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReqCreatePlayer message, length delimited. Does not implicitly {@link com.clientproto.loginMessage.ReqCreatePlayer.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.clientproto.loginMessage.ReqCreatePlayer
                     * @static
                     * @param {com.clientproto.loginMessage.IReqCreatePlayer} message ReqCreatePlayer message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ReqCreatePlayer.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReqCreatePlayer message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.clientproto.loginMessage.ReqCreatePlayer
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.clientproto.loginMessage.ReqCreatePlayer} ReqCreatePlayer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReqCreatePlayer.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.clientproto.loginMessage.ReqCreatePlayer();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.gender = reader.int32();
                                break;
                            case 2:
                                message.type = reader.int32();
                                break;
                            case 3:
                                message.playerName = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ReqCreatePlayer message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.clientproto.loginMessage.ReqCreatePlayer
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.clientproto.loginMessage.ReqCreatePlayer} ReqCreatePlayer
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReqCreatePlayer.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReqCreatePlayer message.
                     * @function verify
                     * @memberof com.clientproto.loginMessage.ReqCreatePlayer
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReqCreatePlayer.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.gender != null && message.hasOwnProperty("gender"))
                            if (!$util.isInteger(message.gender))
                                return "gender: integer expected";
                        if (message.type != null && message.hasOwnProperty("type"))
                            if (!$util.isInteger(message.type))
                                return "type: integer expected";
                        if (message.playerName != null && message.hasOwnProperty("playerName"))
                            if (!$util.isString(message.playerName))
                                return "playerName: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReqCreatePlayer message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.clientproto.loginMessage.ReqCreatePlayer
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.clientproto.loginMessage.ReqCreatePlayer} ReqCreatePlayer
                     */
                    ReqCreatePlayer.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.clientproto.loginMessage.ReqCreatePlayer)
                            return object;
                        var message = new $root.com.clientproto.loginMessage.ReqCreatePlayer();
                        if (object.gender != null)
                            message.gender = object.gender | 0;
                        if (object.type != null)
                            message.type = object.type | 0;
                        if (object.playerName != null)
                            message.playerName = String(object.playerName);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReqCreatePlayer message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.clientproto.loginMessage.ReqCreatePlayer
                     * @static
                     * @param {com.clientproto.loginMessage.ReqCreatePlayer} message ReqCreatePlayer
                     * @param {protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReqCreatePlayer.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.gender = 0;
                            object.type = 0;
                            object.playerName = "";
                        }
                        if (message.gender != null && message.hasOwnProperty("gender"))
                            object.gender = message.gender;
                        if (message.type != null && message.hasOwnProperty("type"))
                            object.type = message.type;
                        if (message.playerName != null && message.hasOwnProperty("playerName"))
                            object.playerName = message.playerName;
                        return object;
                    };
    
                    /**
                     * Converts this ReqCreatePlayer to JSON.
                     * @function toJSON
                     * @memberof com.clientproto.loginMessage.ReqCreatePlayer
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReqCreatePlayer.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, protobuf.util.toJSONOptions);
                    };
    
                    return ReqCreatePlayer;
                })();
    
                loginMessage.ResHeart = (function() {
    
                    /**
                     * Properties of a ResHeart.
                     * @memberof com.clientproto.loginMessage
                     * @interface IResHeart
                     * @property {number|null} [time] ResHeart time
                     */
    
                    /**
                     * Constructs a new ResHeart.
                     * @memberof com.clientproto.loginMessage
                     * @classdesc Represents a ResHeart.
                     * @implements IResHeart
                     * @constructor
                     * @param {com.clientproto.loginMessage.IResHeart=} [properties] Properties to set
                     */
                    function ResHeart(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ResHeart time.
                     * @member {number} time
                     * @memberof com.clientproto.loginMessage.ResHeart
                     * @instance
                     */
                    ResHeart.prototype.time = 0;
    
                    /**
                     * Creates a new ResHeart instance using the specified properties.
                     * @function create
                     * @memberof com.clientproto.loginMessage.ResHeart
                     * @static
                     * @param {com.clientproto.loginMessage.IResHeart=} [properties] Properties to set
                     * @returns {com.clientproto.loginMessage.ResHeart} ResHeart instance
                     */
                    ResHeart.create = function create(properties) {
                        return new ResHeart(properties);
                    };
    
                    /**
                     * Encodes the specified ResHeart message. Does not implicitly {@link com.clientproto.loginMessage.ResHeart.verify|verify} messages.
                     * @function encode
                     * @memberof com.clientproto.loginMessage.ResHeart
                     * @static
                     * @param {com.clientproto.loginMessage.IResHeart} message ResHeart message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ResHeart.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.time != null && message.hasOwnProperty("time"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.time);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ResHeart message, length delimited. Does not implicitly {@link com.clientproto.loginMessage.ResHeart.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.clientproto.loginMessage.ResHeart
                     * @static
                     * @param {com.clientproto.loginMessage.IResHeart} message ResHeart message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ResHeart.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ResHeart message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.clientproto.loginMessage.ResHeart
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.clientproto.loginMessage.ResHeart} ResHeart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResHeart.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.clientproto.loginMessage.ResHeart();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.time = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ResHeart message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.clientproto.loginMessage.ResHeart
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.clientproto.loginMessage.ResHeart} ResHeart
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResHeart.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ResHeart message.
                     * @function verify
                     * @memberof com.clientproto.loginMessage.ResHeart
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ResHeart.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.time != null && message.hasOwnProperty("time"))
                            if (!$util.isInteger(message.time))
                                return "time: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ResHeart message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.clientproto.loginMessage.ResHeart
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.clientproto.loginMessage.ResHeart} ResHeart
                     */
                    ResHeart.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.clientproto.loginMessage.ResHeart)
                            return object;
                        var message = new $root.com.clientproto.loginMessage.ResHeart();
                        if (object.time != null)
                            message.time = object.time | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ResHeart message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.clientproto.loginMessage.ResHeart
                     * @static
                     * @param {com.clientproto.loginMessage.ResHeart} message ResHeart
                     * @param {protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ResHeart.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.time = 0;
                        if (message.time != null && message.hasOwnProperty("time"))
                            object.time = message.time;
                        return object;
                    };
    
                    /**
                     * Converts this ResHeart to JSON.
                     * @function toJSON
                     * @memberof com.clientproto.loginMessage.ResHeart
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ResHeart.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, protobuf.util.toJSONOptions);
                    };
    
                    return ResHeart;
                })();
    
                loginMessage.ResError = (function() {
    
                    /**
                     * Properties of a ResError.
                     * @memberof com.clientproto.loginMessage
                     * @interface IResError
                     * @property {number|null} [code] ResError code
                     */
    
                    /**
                     * Constructs a new ResError.
                     * @memberof com.clientproto.loginMessage
                     * @classdesc Represents a ResError.
                     * @implements IResError
                     * @constructor
                     * @param {com.clientproto.loginMessage.IResError=} [properties] Properties to set
                     */
                    function ResError(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ResError code.
                     * @member {number} code
                     * @memberof com.clientproto.loginMessage.ResError
                     * @instance
                     */
                    ResError.prototype.code = 0;
    
                    /**
                     * Creates a new ResError instance using the specified properties.
                     * @function create
                     * @memberof com.clientproto.loginMessage.ResError
                     * @static
                     * @param {com.clientproto.loginMessage.IResError=} [properties] Properties to set
                     * @returns {com.clientproto.loginMessage.ResError} ResError instance
                     */
                    ResError.create = function create(properties) {
                        return new ResError(properties);
                    };
    
                    /**
                     * Encodes the specified ResError message. Does not implicitly {@link com.clientproto.loginMessage.ResError.verify|verify} messages.
                     * @function encode
                     * @memberof com.clientproto.loginMessage.ResError
                     * @static
                     * @param {com.clientproto.loginMessage.IResError} message ResError message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ResError.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.code != null && message.hasOwnProperty("code"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ResError message, length delimited. Does not implicitly {@link com.clientproto.loginMessage.ResError.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.clientproto.loginMessage.ResError
                     * @static
                     * @param {com.clientproto.loginMessage.IResError} message ResError message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ResError.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ResError message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.clientproto.loginMessage.ResError
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.clientproto.loginMessage.ResError} ResError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResError.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.clientproto.loginMessage.ResError();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.code = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ResError message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.clientproto.loginMessage.ResError
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.clientproto.loginMessage.ResError} ResError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResError.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ResError message.
                     * @function verify
                     * @memberof com.clientproto.loginMessage.ResError
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ResError.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.code != null && message.hasOwnProperty("code"))
                            if (!$util.isInteger(message.code))
                                return "code: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ResError message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.clientproto.loginMessage.ResError
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.clientproto.loginMessage.ResError} ResError
                     */
                    ResError.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.clientproto.loginMessage.ResError)
                            return object;
                        var message = new $root.com.clientproto.loginMessage.ResError();
                        if (object.code != null)
                            message.code = object.code | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ResError message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.clientproto.loginMessage.ResError
                     * @static
                     * @param {com.clientproto.loginMessage.ResError} message ResError
                     * @param {protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ResError.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.code = 0;
                        if (message.code != null && message.hasOwnProperty("code"))
                            object.code = message.code;
                        return object;
                    };
    
                    /**
                     * Converts this ResError to JSON.
                     * @function toJSON
                     * @memberof com.clientproto.loginMessage.ResError
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ResError.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, protobuf.util.toJSONOptions);
                    };
    
                    return ResError;
                })();
    
                loginMessage.ResSubstitute = (function() {
    
                    /**
                     * Properties of a ResSubstitute.
                     * @memberof com.clientproto.loginMessage
                     * @interface IResSubstitute
                     * @property {string|null} [ip] ResSubstitute ip
                     */
    
                    /**
                     * Constructs a new ResSubstitute.
                     * @memberof com.clientproto.loginMessage
                     * @classdesc Represents a ResSubstitute.
                     * @implements IResSubstitute
                     * @constructor
                     * @param {com.clientproto.loginMessage.IResSubstitute=} [properties] Properties to set
                     */
                    function ResSubstitute(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ResSubstitute ip.
                     * @member {string} ip
                     * @memberof com.clientproto.loginMessage.ResSubstitute
                     * @instance
                     */
                    ResSubstitute.prototype.ip = "";
    
                    /**
                     * Creates a new ResSubstitute instance using the specified properties.
                     * @function create
                     * @memberof com.clientproto.loginMessage.ResSubstitute
                     * @static
                     * @param {com.clientproto.loginMessage.IResSubstitute=} [properties] Properties to set
                     * @returns {com.clientproto.loginMessage.ResSubstitute} ResSubstitute instance
                     */
                    ResSubstitute.create = function create(properties) {
                        return new ResSubstitute(properties);
                    };
    
                    /**
                     * Encodes the specified ResSubstitute message. Does not implicitly {@link com.clientproto.loginMessage.ResSubstitute.verify|verify} messages.
                     * @function encode
                     * @memberof com.clientproto.loginMessage.ResSubstitute
                     * @static
                     * @param {com.clientproto.loginMessage.IResSubstitute} message ResSubstitute message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ResSubstitute.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ip != null && message.hasOwnProperty("ip"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ip);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ResSubstitute message, length delimited. Does not implicitly {@link com.clientproto.loginMessage.ResSubstitute.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.clientproto.loginMessage.ResSubstitute
                     * @static
                     * @param {com.clientproto.loginMessage.IResSubstitute} message ResSubstitute message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ResSubstitute.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ResSubstitute message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.clientproto.loginMessage.ResSubstitute
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.clientproto.loginMessage.ResSubstitute} ResSubstitute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResSubstitute.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.clientproto.loginMessage.ResSubstitute();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.ip = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ResSubstitute message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.clientproto.loginMessage.ResSubstitute
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.clientproto.loginMessage.ResSubstitute} ResSubstitute
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResSubstitute.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ResSubstitute message.
                     * @function verify
                     * @memberof com.clientproto.loginMessage.ResSubstitute
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ResSubstitute.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.ip != null && message.hasOwnProperty("ip"))
                            if (!$util.isString(message.ip))
                                return "ip: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a ResSubstitute message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.clientproto.loginMessage.ResSubstitute
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.clientproto.loginMessage.ResSubstitute} ResSubstitute
                     */
                    ResSubstitute.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.clientproto.loginMessage.ResSubstitute)
                            return object;
                        var message = new $root.com.clientproto.loginMessage.ResSubstitute();
                        if (object.ip != null)
                            message.ip = String(object.ip);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ResSubstitute message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.clientproto.loginMessage.ResSubstitute
                     * @static
                     * @param {com.clientproto.loginMessage.ResSubstitute} message ResSubstitute
                     * @param {protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ResSubstitute.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.ip = "";
                        if (message.ip != null && message.hasOwnProperty("ip"))
                            object.ip = message.ip;
                        return object;
                    };
    
                    /**
                     * Converts this ResSubstitute to JSON.
                     * @function toJSON
                     * @memberof com.clientproto.loginMessage.ResSubstitute
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ResSubstitute.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, protobuf.util.toJSONOptions);
                    };
    
                    return ResSubstitute;
                })();
    
                return loginMessage;
            })();
    
            clientproto.userMessage = (function() {
    
                /**
                 * Namespace userMessage.
                 * @memberof com.clientproto
                 * @namespace
                 */
                var userMessage = {};
    
                userMessage.G2CNoticeInfo = (function() {
    
                    /**
                     * Properties of a G2CNoticeInfo.
                     * @memberof com.clientproto.userMessage
                     * @interface IG2CNoticeInfo
                     * @property {string|null} [title] G2CNoticeInfo title
                     * @property {string|null} [content] G2CNoticeInfo content
                     */
    
                    /**
                     * Constructs a new G2CNoticeInfo.
                     * @memberof com.clientproto.userMessage
                     * @classdesc Represents a G2CNoticeInfo.
                     * @implements IG2CNoticeInfo
                     * @constructor
                     * @param {com.clientproto.userMessage.IG2CNoticeInfo=} [properties] Properties to set
                     */
                    function G2CNoticeInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * G2CNoticeInfo title.
                     * @member {string} title
                     * @memberof com.clientproto.userMessage.G2CNoticeInfo
                     * @instance
                     */
                    G2CNoticeInfo.prototype.title = "";
    
                    /**
                     * G2CNoticeInfo content.
                     * @member {string} content
                     * @memberof com.clientproto.userMessage.G2CNoticeInfo
                     * @instance
                     */
                    G2CNoticeInfo.prototype.content = "";
    
                    /**
                     * Creates a new G2CNoticeInfo instance using the specified properties.
                     * @function create
                     * @memberof com.clientproto.userMessage.G2CNoticeInfo
                     * @static
                     * @param {com.clientproto.userMessage.IG2CNoticeInfo=} [properties] Properties to set
                     * @returns {com.clientproto.userMessage.G2CNoticeInfo} G2CNoticeInfo instance
                     */
                    G2CNoticeInfo.create = function create(properties) {
                        return new G2CNoticeInfo(properties);
                    };
    
                    /**
                     * Encodes the specified G2CNoticeInfo message. Does not implicitly {@link com.clientproto.userMessage.G2CNoticeInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.clientproto.userMessage.G2CNoticeInfo
                     * @static
                     * @param {com.clientproto.userMessage.IG2CNoticeInfo} message G2CNoticeInfo message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    G2CNoticeInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.title != null && message.hasOwnProperty("title"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.title);
                        if (message.content != null && message.hasOwnProperty("content"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.content);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified G2CNoticeInfo message, length delimited. Does not implicitly {@link com.clientproto.userMessage.G2CNoticeInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.clientproto.userMessage.G2CNoticeInfo
                     * @static
                     * @param {com.clientproto.userMessage.IG2CNoticeInfo} message G2CNoticeInfo message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    G2CNoticeInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a G2CNoticeInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.clientproto.userMessage.G2CNoticeInfo
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.clientproto.userMessage.G2CNoticeInfo} G2CNoticeInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    G2CNoticeInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.clientproto.userMessage.G2CNoticeInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.title = reader.string();
                                break;
                            case 2:
                                message.content = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a G2CNoticeInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.clientproto.userMessage.G2CNoticeInfo
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.clientproto.userMessage.G2CNoticeInfo} G2CNoticeInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    G2CNoticeInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a G2CNoticeInfo message.
                     * @function verify
                     * @memberof com.clientproto.userMessage.G2CNoticeInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    G2CNoticeInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.title != null && message.hasOwnProperty("title"))
                            if (!$util.isString(message.title))
                                return "title: string expected";
                        if (message.content != null && message.hasOwnProperty("content"))
                            if (!$util.isString(message.content))
                                return "content: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a G2CNoticeInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.clientproto.userMessage.G2CNoticeInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.clientproto.userMessage.G2CNoticeInfo} G2CNoticeInfo
                     */
                    G2CNoticeInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.clientproto.userMessage.G2CNoticeInfo)
                            return object;
                        var message = new $root.com.clientproto.userMessage.G2CNoticeInfo();
                        if (object.title != null)
                            message.title = String(object.title);
                        if (object.content != null)
                            message.content = String(object.content);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a G2CNoticeInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.clientproto.userMessage.G2CNoticeInfo
                     * @static
                     * @param {com.clientproto.userMessage.G2CNoticeInfo} message G2CNoticeInfo
                     * @param {protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    G2CNoticeInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.title = "";
                            object.content = "";
                        }
                        if (message.title != null && message.hasOwnProperty("title"))
                            object.title = message.title;
                        if (message.content != null && message.hasOwnProperty("content"))
                            object.content = message.content;
                        return object;
                    };
    
                    /**
                     * Converts this G2CNoticeInfo to JSON.
                     * @function toJSON
                     * @memberof com.clientproto.userMessage.G2CNoticeInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    G2CNoticeInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, protobuf.util.toJSONOptions);
                    };
    
                    return G2CNoticeInfo;
                })();
    
                userMessage.Gate2ClientServerInfo = (function() {
    
                    /**
                     * Properties of a Gate2ClientServerInfo.
                     * @memberof com.clientproto.userMessage
                     * @interface IGate2ClientServerInfo
                     * @property {number|null} [serverId] Gate2ClientServerInfo serverId
                     * @property {string|null} [serverName] Gate2ClientServerInfo serverName
                     * @property {number|null} [port] Gate2ClientServerInfo port
                     * @property {string|null} [ip] Gate2ClientServerInfo ip
                     * @property {number|null} [state] Gate2ClientServerInfo state
                     */
    
                    /**
                     * Constructs a new Gate2ClientServerInfo.
                     * @memberof com.clientproto.userMessage
                     * @classdesc Represents a Gate2ClientServerInfo.
                     * @implements IGate2ClientServerInfo
                     * @constructor
                     * @param {com.clientproto.userMessage.IGate2ClientServerInfo=} [properties] Properties to set
                     */
                    function Gate2ClientServerInfo(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Gate2ClientServerInfo serverId.
                     * @member {number} serverId
                     * @memberof com.clientproto.userMessage.Gate2ClientServerInfo
                     * @instance
                     */
                    Gate2ClientServerInfo.prototype.serverId = 0;
    
                    /**
                     * Gate2ClientServerInfo serverName.
                     * @member {string} serverName
                     * @memberof com.clientproto.userMessage.Gate2ClientServerInfo
                     * @instance
                     */
                    Gate2ClientServerInfo.prototype.serverName = "";
    
                    /**
                     * Gate2ClientServerInfo port.
                     * @member {number} port
                     * @memberof com.clientproto.userMessage.Gate2ClientServerInfo
                     * @instance
                     */
                    Gate2ClientServerInfo.prototype.port = 0;
    
                    /**
                     * Gate2ClientServerInfo ip.
                     * @member {string} ip
                     * @memberof com.clientproto.userMessage.Gate2ClientServerInfo
                     * @instance
                     */
                    Gate2ClientServerInfo.prototype.ip = "";
    
                    /**
                     * Gate2ClientServerInfo state.
                     * @member {number} state
                     * @memberof com.clientproto.userMessage.Gate2ClientServerInfo
                     * @instance
                     */
                    Gate2ClientServerInfo.prototype.state = 0;
    
                    /**
                     * Creates a new Gate2ClientServerInfo instance using the specified properties.
                     * @function create
                     * @memberof com.clientproto.userMessage.Gate2ClientServerInfo
                     * @static
                     * @param {com.clientproto.userMessage.IGate2ClientServerInfo=} [properties] Properties to set
                     * @returns {com.clientproto.userMessage.Gate2ClientServerInfo} Gate2ClientServerInfo instance
                     */
                    Gate2ClientServerInfo.create = function create(properties) {
                        return new Gate2ClientServerInfo(properties);
                    };
    
                    /**
                     * Encodes the specified Gate2ClientServerInfo message. Does not implicitly {@link com.clientproto.userMessage.Gate2ClientServerInfo.verify|verify} messages.
                     * @function encode
                     * @memberof com.clientproto.userMessage.Gate2ClientServerInfo
                     * @static
                     * @param {com.clientproto.userMessage.IGate2ClientServerInfo} message Gate2ClientServerInfo message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    Gate2ClientServerInfo.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.serverId != null && message.hasOwnProperty("serverId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.serverId);
                        if (message.serverName != null && message.hasOwnProperty("serverName"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.serverName);
                        if (message.port != null && message.hasOwnProperty("port"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.port);
                        if (message.ip != null && message.hasOwnProperty("ip"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.ip);
                        if (message.state != null && message.hasOwnProperty("state"))
                            writer.uint32(/* id 5, wireType 0 =*/40).int32(message.state);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Gate2ClientServerInfo message, length delimited. Does not implicitly {@link com.clientproto.userMessage.Gate2ClientServerInfo.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.clientproto.userMessage.Gate2ClientServerInfo
                     * @static
                     * @param {com.clientproto.userMessage.IGate2ClientServerInfo} message Gate2ClientServerInfo message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    Gate2ClientServerInfo.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Gate2ClientServerInfo message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.clientproto.userMessage.Gate2ClientServerInfo
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.clientproto.userMessage.Gate2ClientServerInfo} Gate2ClientServerInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    Gate2ClientServerInfo.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.clientproto.userMessage.Gate2ClientServerInfo();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.serverId = reader.int32();
                                break;
                            case 2:
                                message.serverName = reader.string();
                                break;
                            case 3:
                                message.port = reader.int32();
                                break;
                            case 4:
                                message.ip = reader.string();
                                break;
                            case 5:
                                message.state = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Gate2ClientServerInfo message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.clientproto.userMessage.Gate2ClientServerInfo
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.clientproto.userMessage.Gate2ClientServerInfo} Gate2ClientServerInfo
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    Gate2ClientServerInfo.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Gate2ClientServerInfo message.
                     * @function verify
                     * @memberof com.clientproto.userMessage.Gate2ClientServerInfo
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Gate2ClientServerInfo.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.serverId != null && message.hasOwnProperty("serverId"))
                            if (!$util.isInteger(message.serverId))
                                return "serverId: integer expected";
                        if (message.serverName != null && message.hasOwnProperty("serverName"))
                            if (!$util.isString(message.serverName))
                                return "serverName: string expected";
                        if (message.port != null && message.hasOwnProperty("port"))
                            if (!$util.isInteger(message.port))
                                return "port: integer expected";
                        if (message.ip != null && message.hasOwnProperty("ip"))
                            if (!$util.isString(message.ip))
                                return "ip: string expected";
                        if (message.state != null && message.hasOwnProperty("state"))
                            if (!$util.isInteger(message.state))
                                return "state: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a Gate2ClientServerInfo message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.clientproto.userMessage.Gate2ClientServerInfo
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.clientproto.userMessage.Gate2ClientServerInfo} Gate2ClientServerInfo
                     */
                    Gate2ClientServerInfo.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.clientproto.userMessage.Gate2ClientServerInfo)
                            return object;
                        var message = new $root.com.clientproto.userMessage.Gate2ClientServerInfo();
                        if (object.serverId != null)
                            message.serverId = object.serverId | 0;
                        if (object.serverName != null)
                            message.serverName = String(object.serverName);
                        if (object.port != null)
                            message.port = object.port | 0;
                        if (object.ip != null)
                            message.ip = String(object.ip);
                        if (object.state != null)
                            message.state = object.state | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Gate2ClientServerInfo message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.clientproto.userMessage.Gate2ClientServerInfo
                     * @static
                     * @param {com.clientproto.userMessage.Gate2ClientServerInfo} message Gate2ClientServerInfo
                     * @param {protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Gate2ClientServerInfo.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.serverId = 0;
                            object.serverName = "";
                            object.port = 0;
                            object.ip = "";
                            object.state = 0;
                        }
                        if (message.serverId != null && message.hasOwnProperty("serverId"))
                            object.serverId = message.serverId;
                        if (message.serverName != null && message.hasOwnProperty("serverName"))
                            object.serverName = message.serverName;
                        if (message.port != null && message.hasOwnProperty("port"))
                            object.port = message.port;
                        if (message.ip != null && message.hasOwnProperty("ip"))
                            object.ip = message.ip;
                        if (message.state != null && message.hasOwnProperty("state"))
                            object.state = message.state;
                        return object;
                    };
    
                    /**
                     * Converts this Gate2ClientServerInfo to JSON.
                     * @function toJSON
                     * @memberof com.clientproto.userMessage.Gate2ClientServerInfo
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Gate2ClientServerInfo.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, protobuf.util.toJSONOptions);
                    };
    
                    return Gate2ClientServerInfo;
                })();
    
                userMessage.ReqCheckVersion = (function() {
    
                    /**
                     * Properties of a ReqCheckVersion.
                     * @memberof com.clientproto.userMessage
                     * @interface IReqCheckVersion
                     * @property {number|null} [checkId] ReqCheckVersion checkId
                     */
    
                    /**
                     * Constructs a new ReqCheckVersion.
                     * @memberof com.clientproto.userMessage
                     * @classdesc Represents a ReqCheckVersion.
                     * @implements IReqCheckVersion
                     * @constructor
                     * @param {com.clientproto.userMessage.IReqCheckVersion=} [properties] Properties to set
                     */
                    function ReqCheckVersion(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReqCheckVersion checkId.
                     * @member {number} checkId
                     * @memberof com.clientproto.userMessage.ReqCheckVersion
                     * @instance
                     */
                    ReqCheckVersion.prototype.checkId = 0;
    
                    /**
                     * Creates a new ReqCheckVersion instance using the specified properties.
                     * @function create
                     * @memberof com.clientproto.userMessage.ReqCheckVersion
                     * @static
                     * @param {com.clientproto.userMessage.IReqCheckVersion=} [properties] Properties to set
                     * @returns {com.clientproto.userMessage.ReqCheckVersion} ReqCheckVersion instance
                     */
                    ReqCheckVersion.create = function create(properties) {
                        return new ReqCheckVersion(properties);
                    };
    
                    /**
                     * Encodes the specified ReqCheckVersion message. Does not implicitly {@link com.clientproto.userMessage.ReqCheckVersion.verify|verify} messages.
                     * @function encode
                     * @memberof com.clientproto.userMessage.ReqCheckVersion
                     * @static
                     * @param {com.clientproto.userMessage.IReqCheckVersion} message ReqCheckVersion message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ReqCheckVersion.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.checkId != null && message.hasOwnProperty("checkId"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.checkId);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReqCheckVersion message, length delimited. Does not implicitly {@link com.clientproto.userMessage.ReqCheckVersion.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.clientproto.userMessage.ReqCheckVersion
                     * @static
                     * @param {com.clientproto.userMessage.IReqCheckVersion} message ReqCheckVersion message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ReqCheckVersion.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReqCheckVersion message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.clientproto.userMessage.ReqCheckVersion
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.clientproto.userMessage.ReqCheckVersion} ReqCheckVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReqCheckVersion.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.clientproto.userMessage.ReqCheckVersion();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.checkId = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ReqCheckVersion message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.clientproto.userMessage.ReqCheckVersion
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.clientproto.userMessage.ReqCheckVersion} ReqCheckVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReqCheckVersion.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReqCheckVersion message.
                     * @function verify
                     * @memberof com.clientproto.userMessage.ReqCheckVersion
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReqCheckVersion.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.checkId != null && message.hasOwnProperty("checkId"))
                            if (!$util.isInteger(message.checkId))
                                return "checkId: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReqCheckVersion message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.clientproto.userMessage.ReqCheckVersion
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.clientproto.userMessage.ReqCheckVersion} ReqCheckVersion
                     */
                    ReqCheckVersion.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.clientproto.userMessage.ReqCheckVersion)
                            return object;
                        var message = new $root.com.clientproto.userMessage.ReqCheckVersion();
                        if (object.checkId != null)
                            message.checkId = object.checkId | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReqCheckVersion message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.clientproto.userMessage.ReqCheckVersion
                     * @static
                     * @param {com.clientproto.userMessage.ReqCheckVersion} message ReqCheckVersion
                     * @param {protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReqCheckVersion.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.checkId = 0;
                        if (message.checkId != null && message.hasOwnProperty("checkId"))
                            object.checkId = message.checkId;
                        return object;
                    };
    
                    /**
                     * Converts this ReqCheckVersion to JSON.
                     * @function toJSON
                     * @memberof com.clientproto.userMessage.ReqCheckVersion
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReqCheckVersion.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, protobuf.util.toJSONOptions);
                    };
    
                    return ReqCheckVersion;
                })();
    
                userMessage.ReqRegisterUser = (function() {
    
                    /**
                     * Properties of a ReqRegisterUser.
                     * @memberof com.clientproto.userMessage
                     * @interface IReqRegisterUser
                     * @property {string|null} [userName] ReqRegisterUser userName
                     * @property {string|null} [userPass] ReqRegisterUser userPass
                     */
    
                    /**
                     * Constructs a new ReqRegisterUser.
                     * @memberof com.clientproto.userMessage
                     * @classdesc Represents a ReqRegisterUser.
                     * @implements IReqRegisterUser
                     * @constructor
                     * @param {com.clientproto.userMessage.IReqRegisterUser=} [properties] Properties to set
                     */
                    function ReqRegisterUser(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReqRegisterUser userName.
                     * @member {string} userName
                     * @memberof com.clientproto.userMessage.ReqRegisterUser
                     * @instance
                     */
                    ReqRegisterUser.prototype.userName = "";
    
                    /**
                     * ReqRegisterUser userPass.
                     * @member {string} userPass
                     * @memberof com.clientproto.userMessage.ReqRegisterUser
                     * @instance
                     */
                    ReqRegisterUser.prototype.userPass = "";
    
                    /**
                     * Creates a new ReqRegisterUser instance using the specified properties.
                     * @function create
                     * @memberof com.clientproto.userMessage.ReqRegisterUser
                     * @static
                     * @param {com.clientproto.userMessage.IReqRegisterUser=} [properties] Properties to set
                     * @returns {com.clientproto.userMessage.ReqRegisterUser} ReqRegisterUser instance
                     */
                    ReqRegisterUser.create = function create(properties) {
                        return new ReqRegisterUser(properties);
                    };
    
                    /**
                     * Encodes the specified ReqRegisterUser message. Does not implicitly {@link com.clientproto.userMessage.ReqRegisterUser.verify|verify} messages.
                     * @function encode
                     * @memberof com.clientproto.userMessage.ReqRegisterUser
                     * @static
                     * @param {com.clientproto.userMessage.IReqRegisterUser} message ReqRegisterUser message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ReqRegisterUser.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.userName != null && message.hasOwnProperty("userName"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
                        if (message.userPass != null && message.hasOwnProperty("userPass"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.userPass);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReqRegisterUser message, length delimited. Does not implicitly {@link com.clientproto.userMessage.ReqRegisterUser.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.clientproto.userMessage.ReqRegisterUser
                     * @static
                     * @param {com.clientproto.userMessage.IReqRegisterUser} message ReqRegisterUser message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ReqRegisterUser.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReqRegisterUser message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.clientproto.userMessage.ReqRegisterUser
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.clientproto.userMessage.ReqRegisterUser} ReqRegisterUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReqRegisterUser.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.clientproto.userMessage.ReqRegisterUser();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.userName = reader.string();
                                break;
                            case 2:
                                message.userPass = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ReqRegisterUser message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.clientproto.userMessage.ReqRegisterUser
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.clientproto.userMessage.ReqRegisterUser} ReqRegisterUser
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReqRegisterUser.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReqRegisterUser message.
                     * @function verify
                     * @memberof com.clientproto.userMessage.ReqRegisterUser
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReqRegisterUser.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.userName != null && message.hasOwnProperty("userName"))
                            if (!$util.isString(message.userName))
                                return "userName: string expected";
                        if (message.userPass != null && message.hasOwnProperty("userPass"))
                            if (!$util.isString(message.userPass))
                                return "userPass: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReqRegisterUser message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.clientproto.userMessage.ReqRegisterUser
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.clientproto.userMessage.ReqRegisterUser} ReqRegisterUser
                     */
                    ReqRegisterUser.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.clientproto.userMessage.ReqRegisterUser)
                            return object;
                        var message = new $root.com.clientproto.userMessage.ReqRegisterUser();
                        if (object.userName != null)
                            message.userName = String(object.userName);
                        if (object.userPass != null)
                            message.userPass = String(object.userPass);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReqRegisterUser message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.clientproto.userMessage.ReqRegisterUser
                     * @static
                     * @param {com.clientproto.userMessage.ReqRegisterUser} message ReqRegisterUser
                     * @param {protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReqRegisterUser.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.userName = "";
                            object.userPass = "";
                        }
                        if (message.userName != null && message.hasOwnProperty("userName"))
                            object.userName = message.userName;
                        if (message.userPass != null && message.hasOwnProperty("userPass"))
                            object.userPass = message.userPass;
                        return object;
                    };
    
                    /**
                     * Converts this ReqRegisterUser to JSON.
                     * @function toJSON
                     * @memberof com.clientproto.userMessage.ReqRegisterUser
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReqRegisterUser.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, protobuf.util.toJSONOptions);
                    };
    
                    return ReqRegisterUser;
                })();
    
                userMessage.ReqUserLogin = (function() {
    
                    /**
                     * Properties of a ReqUserLogin.
                     * @memberof com.clientproto.userMessage
                     * @interface IReqUserLogin
                     * @property {string|null} [userName] ReqUserLogin userName
                     * @property {string|null} [userPass] ReqUserLogin userPass
                     * @property {number|null} [clientId] ReqUserLogin clientId
                     */
    
                    /**
                     * Constructs a new ReqUserLogin.
                     * @memberof com.clientproto.userMessage
                     * @classdesc Represents a ReqUserLogin.
                     * @implements IReqUserLogin
                     * @constructor
                     * @param {com.clientproto.userMessage.IReqUserLogin=} [properties] Properties to set
                     */
                    function ReqUserLogin(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReqUserLogin userName.
                     * @member {string} userName
                     * @memberof com.clientproto.userMessage.ReqUserLogin
                     * @instance
                     */
                    ReqUserLogin.prototype.userName = "";
    
                    /**
                     * ReqUserLogin userPass.
                     * @member {string} userPass
                     * @memberof com.clientproto.userMessage.ReqUserLogin
                     * @instance
                     */
                    ReqUserLogin.prototype.userPass = "";
    
                    /**
                     * ReqUserLogin clientId.
                     * @member {number} clientId
                     * @memberof com.clientproto.userMessage.ReqUserLogin
                     * @instance
                     */
                    ReqUserLogin.prototype.clientId = 0;
    
                    /**
                     * Creates a new ReqUserLogin instance using the specified properties.
                     * @function create
                     * @memberof com.clientproto.userMessage.ReqUserLogin
                     * @static
                     * @param {com.clientproto.userMessage.IReqUserLogin=} [properties] Properties to set
                     * @returns {com.clientproto.userMessage.ReqUserLogin} ReqUserLogin instance
                     */
                    ReqUserLogin.create = function create(properties) {
                        return new ReqUserLogin(properties);
                    };
    
                    /**
                     * Encodes the specified ReqUserLogin message. Does not implicitly {@link com.clientproto.userMessage.ReqUserLogin.verify|verify} messages.
                     * @function encode
                     * @memberof com.clientproto.userMessage.ReqUserLogin
                     * @static
                     * @param {com.clientproto.userMessage.IReqUserLogin} message ReqUserLogin message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ReqUserLogin.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.userName != null && message.hasOwnProperty("userName"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.userName);
                        if (message.userPass != null && message.hasOwnProperty("userPass"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.userPass);
                        if (message.clientId != null && message.hasOwnProperty("clientId"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.clientId);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReqUserLogin message, length delimited. Does not implicitly {@link com.clientproto.userMessage.ReqUserLogin.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.clientproto.userMessage.ReqUserLogin
                     * @static
                     * @param {com.clientproto.userMessage.IReqUserLogin} message ReqUserLogin message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ReqUserLogin.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReqUserLogin message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.clientproto.userMessage.ReqUserLogin
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.clientproto.userMessage.ReqUserLogin} ReqUserLogin
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReqUserLogin.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.clientproto.userMessage.ReqUserLogin();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.userName = reader.string();
                                break;
                            case 2:
                                message.userPass = reader.string();
                                break;
                            case 3:
                                message.clientId = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ReqUserLogin message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.clientproto.userMessage.ReqUserLogin
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.clientproto.userMessage.ReqUserLogin} ReqUserLogin
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReqUserLogin.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReqUserLogin message.
                     * @function verify
                     * @memberof com.clientproto.userMessage.ReqUserLogin
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReqUserLogin.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.userName != null && message.hasOwnProperty("userName"))
                            if (!$util.isString(message.userName))
                                return "userName: string expected";
                        if (message.userPass != null && message.hasOwnProperty("userPass"))
                            if (!$util.isString(message.userPass))
                                return "userPass: string expected";
                        if (message.clientId != null && message.hasOwnProperty("clientId"))
                            if (!$util.isInteger(message.clientId))
                                return "clientId: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReqUserLogin message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.clientproto.userMessage.ReqUserLogin
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.clientproto.userMessage.ReqUserLogin} ReqUserLogin
                     */
                    ReqUserLogin.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.clientproto.userMessage.ReqUserLogin)
                            return object;
                        var message = new $root.com.clientproto.userMessage.ReqUserLogin();
                        if (object.userName != null)
                            message.userName = String(object.userName);
                        if (object.userPass != null)
                            message.userPass = String(object.userPass);
                        if (object.clientId != null)
                            message.clientId = object.clientId | 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReqUserLogin message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.clientproto.userMessage.ReqUserLogin
                     * @static
                     * @param {com.clientproto.userMessage.ReqUserLogin} message ReqUserLogin
                     * @param {protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReqUserLogin.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.userName = "";
                            object.userPass = "";
                            object.clientId = 0;
                        }
                        if (message.userName != null && message.hasOwnProperty("userName"))
                            object.userName = message.userName;
                        if (message.userPass != null && message.hasOwnProperty("userPass"))
                            object.userPass = message.userPass;
                        if (message.clientId != null && message.hasOwnProperty("clientId"))
                            object.clientId = message.clientId;
                        return object;
                    };
    
                    /**
                     * Converts this ReqUserLogin to JSON.
                     * @function toJSON
                     * @memberof com.clientproto.userMessage.ReqUserLogin
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReqUserLogin.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, protobuf.util.toJSONOptions);
                    };
    
                    return ReqUserLogin;
                })();
    
                userMessage.ReqPublicSdkLogin = (function() {
    
                    /**
                     * Properties of a ReqPublicSdkLogin.
                     * @memberof com.clientproto.userMessage
                     * @interface IReqPublicSdkLogin
                     * @property {number|null} [userType] ReqPublicSdkLogin userType
                     * @property {string|null} [openId] ReqPublicSdkLogin openId
                     * @property {string|null} [timestamp] ReqPublicSdkLogin timestamp
                     * @property {string|null} [serverSign] ReqPublicSdkLogin serverSign
                     */
    
                    /**
                     * Constructs a new ReqPublicSdkLogin.
                     * @memberof com.clientproto.userMessage
                     * @classdesc Represents a ReqPublicSdkLogin.
                     * @implements IReqPublicSdkLogin
                     * @constructor
                     * @param {com.clientproto.userMessage.IReqPublicSdkLogin=} [properties] Properties to set
                     */
                    function ReqPublicSdkLogin(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ReqPublicSdkLogin userType.
                     * @member {number} userType
                     * @memberof com.clientproto.userMessage.ReqPublicSdkLogin
                     * @instance
                     */
                    ReqPublicSdkLogin.prototype.userType = 0;
    
                    /**
                     * ReqPublicSdkLogin openId.
                     * @member {string} openId
                     * @memberof com.clientproto.userMessage.ReqPublicSdkLogin
                     * @instance
                     */
                    ReqPublicSdkLogin.prototype.openId = "";
    
                    /**
                     * ReqPublicSdkLogin timestamp.
                     * @member {string} timestamp
                     * @memberof com.clientproto.userMessage.ReqPublicSdkLogin
                     * @instance
                     */
                    ReqPublicSdkLogin.prototype.timestamp = "";
    
                    /**
                     * ReqPublicSdkLogin serverSign.
                     * @member {string} serverSign
                     * @memberof com.clientproto.userMessage.ReqPublicSdkLogin
                     * @instance
                     */
                    ReqPublicSdkLogin.prototype.serverSign = "";
    
                    /**
                     * Creates a new ReqPublicSdkLogin instance using the specified properties.
                     * @function create
                     * @memberof com.clientproto.userMessage.ReqPublicSdkLogin
                     * @static
                     * @param {com.clientproto.userMessage.IReqPublicSdkLogin=} [properties] Properties to set
                     * @returns {com.clientproto.userMessage.ReqPublicSdkLogin} ReqPublicSdkLogin instance
                     */
                    ReqPublicSdkLogin.create = function create(properties) {
                        return new ReqPublicSdkLogin(properties);
                    };
    
                    /**
                     * Encodes the specified ReqPublicSdkLogin message. Does not implicitly {@link com.clientproto.userMessage.ReqPublicSdkLogin.verify|verify} messages.
                     * @function encode
                     * @memberof com.clientproto.userMessage.ReqPublicSdkLogin
                     * @static
                     * @param {com.clientproto.userMessage.IReqPublicSdkLogin} message ReqPublicSdkLogin message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ReqPublicSdkLogin.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.userType != null && message.hasOwnProperty("userType"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.userType);
                        if (message.openId != null && message.hasOwnProperty("openId"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.openId);
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            writer.uint32(/* id 3, wireType 2 =*/26).string(message.timestamp);
                        if (message.serverSign != null && message.hasOwnProperty("serverSign"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.serverSign);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ReqPublicSdkLogin message, length delimited. Does not implicitly {@link com.clientproto.userMessage.ReqPublicSdkLogin.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.clientproto.userMessage.ReqPublicSdkLogin
                     * @static
                     * @param {com.clientproto.userMessage.IReqPublicSdkLogin} message ReqPublicSdkLogin message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ReqPublicSdkLogin.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ReqPublicSdkLogin message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.clientproto.userMessage.ReqPublicSdkLogin
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.clientproto.userMessage.ReqPublicSdkLogin} ReqPublicSdkLogin
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReqPublicSdkLogin.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.clientproto.userMessage.ReqPublicSdkLogin();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.userType = reader.int32();
                                break;
                            case 2:
                                message.openId = reader.string();
                                break;
                            case 3:
                                message.timestamp = reader.string();
                                break;
                            case 4:
                                message.serverSign = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ReqPublicSdkLogin message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.clientproto.userMessage.ReqPublicSdkLogin
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.clientproto.userMessage.ReqPublicSdkLogin} ReqPublicSdkLogin
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ReqPublicSdkLogin.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ReqPublicSdkLogin message.
                     * @function verify
                     * @memberof com.clientproto.userMessage.ReqPublicSdkLogin
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ReqPublicSdkLogin.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.userType != null && message.hasOwnProperty("userType"))
                            if (!$util.isInteger(message.userType))
                                return "userType: integer expected";
                        if (message.openId != null && message.hasOwnProperty("openId"))
                            if (!$util.isString(message.openId))
                                return "openId: string expected";
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            if (!$util.isString(message.timestamp))
                                return "timestamp: string expected";
                        if (message.serverSign != null && message.hasOwnProperty("serverSign"))
                            if (!$util.isString(message.serverSign))
                                return "serverSign: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a ReqPublicSdkLogin message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.clientproto.userMessage.ReqPublicSdkLogin
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.clientproto.userMessage.ReqPublicSdkLogin} ReqPublicSdkLogin
                     */
                    ReqPublicSdkLogin.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.clientproto.userMessage.ReqPublicSdkLogin)
                            return object;
                        var message = new $root.com.clientproto.userMessage.ReqPublicSdkLogin();
                        if (object.userType != null)
                            message.userType = object.userType | 0;
                        if (object.openId != null)
                            message.openId = String(object.openId);
                        if (object.timestamp != null)
                            message.timestamp = String(object.timestamp);
                        if (object.serverSign != null)
                            message.serverSign = String(object.serverSign);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ReqPublicSdkLogin message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.clientproto.userMessage.ReqPublicSdkLogin
                     * @static
                     * @param {com.clientproto.userMessage.ReqPublicSdkLogin} message ReqPublicSdkLogin
                     * @param {protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ReqPublicSdkLogin.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.userType = 0;
                            object.openId = "";
                            object.timestamp = "";
                            object.serverSign = "";
                        }
                        if (message.userType != null && message.hasOwnProperty("userType"))
                            object.userType = message.userType;
                        if (message.openId != null && message.hasOwnProperty("openId"))
                            object.openId = message.openId;
                        if (message.timestamp != null && message.hasOwnProperty("timestamp"))
                            object.timestamp = message.timestamp;
                        if (message.serverSign != null && message.hasOwnProperty("serverSign"))
                            object.serverSign = message.serverSign;
                        return object;
                    };
    
                    /**
                     * Converts this ReqPublicSdkLogin to JSON.
                     * @function toJSON
                     * @memberof com.clientproto.userMessage.ReqPublicSdkLogin
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ReqPublicSdkLogin.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, protobuf.util.toJSONOptions);
                    };
    
                    return ReqPublicSdkLogin;
                })();
    
                userMessage.ResUserCode = (function() {
    
                    /**
                     * Properties of a ResUserCode.
                     * @memberof com.clientproto.userMessage
                     * @interface IResUserCode
                     * @property {number|null} [state] ResUserCode state
                     * @property {string|null} [code] ResUserCode code
                     */
    
                    /**
                     * Constructs a new ResUserCode.
                     * @memberof com.clientproto.userMessage
                     * @classdesc Represents a ResUserCode.
                     * @implements IResUserCode
                     * @constructor
                     * @param {com.clientproto.userMessage.IResUserCode=} [properties] Properties to set
                     */
                    function ResUserCode(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ResUserCode state.
                     * @member {number} state
                     * @memberof com.clientproto.userMessage.ResUserCode
                     * @instance
                     */
                    ResUserCode.prototype.state = 0;
    
                    /**
                     * ResUserCode code.
                     * @member {string} code
                     * @memberof com.clientproto.userMessage.ResUserCode
                     * @instance
                     */
                    ResUserCode.prototype.code = "";
    
                    /**
                     * Creates a new ResUserCode instance using the specified properties.
                     * @function create
                     * @memberof com.clientproto.userMessage.ResUserCode
                     * @static
                     * @param {com.clientproto.userMessage.IResUserCode=} [properties] Properties to set
                     * @returns {com.clientproto.userMessage.ResUserCode} ResUserCode instance
                     */
                    ResUserCode.create = function create(properties) {
                        return new ResUserCode(properties);
                    };
    
                    /**
                     * Encodes the specified ResUserCode message. Does not implicitly {@link com.clientproto.userMessage.ResUserCode.verify|verify} messages.
                     * @function encode
                     * @memberof com.clientproto.userMessage.ResUserCode
                     * @static
                     * @param {com.clientproto.userMessage.IResUserCode} message ResUserCode message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ResUserCode.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.state != null && message.hasOwnProperty("state"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.state);
                        if (message.code != null && message.hasOwnProperty("code"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.code);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ResUserCode message, length delimited. Does not implicitly {@link com.clientproto.userMessage.ResUserCode.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.clientproto.userMessage.ResUserCode
                     * @static
                     * @param {com.clientproto.userMessage.IResUserCode} message ResUserCode message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ResUserCode.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ResUserCode message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.clientproto.userMessage.ResUserCode
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.clientproto.userMessage.ResUserCode} ResUserCode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResUserCode.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.clientproto.userMessage.ResUserCode();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.state = reader.int32();
                                break;
                            case 4:
                                message.code = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ResUserCode message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.clientproto.userMessage.ResUserCode
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.clientproto.userMessage.ResUserCode} ResUserCode
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResUserCode.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ResUserCode message.
                     * @function verify
                     * @memberof com.clientproto.userMessage.ResUserCode
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ResUserCode.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.state != null && message.hasOwnProperty("state"))
                            if (!$util.isInteger(message.state))
                                return "state: integer expected";
                        if (message.code != null && message.hasOwnProperty("code"))
                            if (!$util.isString(message.code))
                                return "code: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a ResUserCode message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.clientproto.userMessage.ResUserCode
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.clientproto.userMessage.ResUserCode} ResUserCode
                     */
                    ResUserCode.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.clientproto.userMessage.ResUserCode)
                            return object;
                        var message = new $root.com.clientproto.userMessage.ResUserCode();
                        if (object.state != null)
                            message.state = object.state | 0;
                        if (object.code != null)
                            message.code = String(object.code);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ResUserCode message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.clientproto.userMessage.ResUserCode
                     * @static
                     * @param {com.clientproto.userMessage.ResUserCode} message ResUserCode
                     * @param {protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ResUserCode.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.state = 0;
                            object.code = "";
                        }
                        if (message.state != null && message.hasOwnProperty("state"))
                            object.state = message.state;
                        if (message.code != null && message.hasOwnProperty("code"))
                            object.code = message.code;
                        return object;
                    };
    
                    /**
                     * Converts this ResUserCode to JSON.
                     * @function toJSON
                     * @memberof com.clientproto.userMessage.ResUserCode
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ResUserCode.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, protobuf.util.toJSONOptions);
                    };
    
                    return ResUserCode;
                })();
    
                userMessage.ResCheckVersion = (function() {
    
                    /**
                     * Properties of a ResCheckVersion.
                     * @memberof com.clientproto.userMessage
                     * @interface IResCheckVersion
                     * @property {number|null} [clientVersion] ResCheckVersion clientVersion
                     * @property {number|null} [isServerType] ResCheckVersion isServerType
                     * @property {number|null} [isVerInfo] ResCheckVersion isVerInfo
                     * @property {number|null} [isServerList] ResCheckVersion isServerList
                     * @property {string|null} [args] ResCheckVersion args
                     */
    
                    /**
                     * Constructs a new ResCheckVersion.
                     * @memberof com.clientproto.userMessage
                     * @classdesc Represents a ResCheckVersion.
                     * @implements IResCheckVersion
                     * @constructor
                     * @param {com.clientproto.userMessage.IResCheckVersion=} [properties] Properties to set
                     */
                    function ResCheckVersion(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ResCheckVersion clientVersion.
                     * @member {number} clientVersion
                     * @memberof com.clientproto.userMessage.ResCheckVersion
                     * @instance
                     */
                    ResCheckVersion.prototype.clientVersion = 0;
    
                    /**
                     * ResCheckVersion isServerType.
                     * @member {number} isServerType
                     * @memberof com.clientproto.userMessage.ResCheckVersion
                     * @instance
                     */
                    ResCheckVersion.prototype.isServerType = 0;
    
                    /**
                     * ResCheckVersion isVerInfo.
                     * @member {number} isVerInfo
                     * @memberof com.clientproto.userMessage.ResCheckVersion
                     * @instance
                     */
                    ResCheckVersion.prototype.isVerInfo = 0;
    
                    /**
                     * ResCheckVersion isServerList.
                     * @member {number} isServerList
                     * @memberof com.clientproto.userMessage.ResCheckVersion
                     * @instance
                     */
                    ResCheckVersion.prototype.isServerList = 0;
    
                    /**
                     * ResCheckVersion args.
                     * @member {string} args
                     * @memberof com.clientproto.userMessage.ResCheckVersion
                     * @instance
                     */
                    ResCheckVersion.prototype.args = "";
    
                    /**
                     * Creates a new ResCheckVersion instance using the specified properties.
                     * @function create
                     * @memberof com.clientproto.userMessage.ResCheckVersion
                     * @static
                     * @param {com.clientproto.userMessage.IResCheckVersion=} [properties] Properties to set
                     * @returns {com.clientproto.userMessage.ResCheckVersion} ResCheckVersion instance
                     */
                    ResCheckVersion.create = function create(properties) {
                        return new ResCheckVersion(properties);
                    };
    
                    /**
                     * Encodes the specified ResCheckVersion message. Does not implicitly {@link com.clientproto.userMessage.ResCheckVersion.verify|verify} messages.
                     * @function encode
                     * @memberof com.clientproto.userMessage.ResCheckVersion
                     * @static
                     * @param {com.clientproto.userMessage.IResCheckVersion} message ResCheckVersion message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ResCheckVersion.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.clientVersion);
                        if (message.isServerType != null && message.hasOwnProperty("isServerType"))
                            writer.uint32(/* id 2, wireType 0 =*/16).int32(message.isServerType);
                        if (message.isVerInfo != null && message.hasOwnProperty("isVerInfo"))
                            writer.uint32(/* id 3, wireType 0 =*/24).int32(message.isVerInfo);
                        if (message.isServerList != null && message.hasOwnProperty("isServerList"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.isServerList);
                        if (message.args != null && message.hasOwnProperty("args"))
                            writer.uint32(/* id 5, wireType 2 =*/42).string(message.args);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ResCheckVersion message, length delimited. Does not implicitly {@link com.clientproto.userMessage.ResCheckVersion.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.clientproto.userMessage.ResCheckVersion
                     * @static
                     * @param {com.clientproto.userMessage.IResCheckVersion} message ResCheckVersion message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ResCheckVersion.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ResCheckVersion message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.clientproto.userMessage.ResCheckVersion
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.clientproto.userMessage.ResCheckVersion} ResCheckVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResCheckVersion.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.clientproto.userMessage.ResCheckVersion();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.clientVersion = reader.int32();
                                break;
                            case 2:
                                message.isServerType = reader.int32();
                                break;
                            case 3:
                                message.isVerInfo = reader.int32();
                                break;
                            case 4:
                                message.isServerList = reader.int32();
                                break;
                            case 5:
                                message.args = reader.string();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ResCheckVersion message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.clientproto.userMessage.ResCheckVersion
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.clientproto.userMessage.ResCheckVersion} ResCheckVersion
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResCheckVersion.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ResCheckVersion message.
                     * @function verify
                     * @memberof com.clientproto.userMessage.ResCheckVersion
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ResCheckVersion.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                            if (!$util.isInteger(message.clientVersion))
                                return "clientVersion: integer expected";
                        if (message.isServerType != null && message.hasOwnProperty("isServerType"))
                            if (!$util.isInteger(message.isServerType))
                                return "isServerType: integer expected";
                        if (message.isVerInfo != null && message.hasOwnProperty("isVerInfo"))
                            if (!$util.isInteger(message.isVerInfo))
                                return "isVerInfo: integer expected";
                        if (message.isServerList != null && message.hasOwnProperty("isServerList"))
                            if (!$util.isInteger(message.isServerList))
                                return "isServerList: integer expected";
                        if (message.args != null && message.hasOwnProperty("args"))
                            if (!$util.isString(message.args))
                                return "args: string expected";
                        return null;
                    };
    
                    /**
                     * Creates a ResCheckVersion message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.clientproto.userMessage.ResCheckVersion
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.clientproto.userMessage.ResCheckVersion} ResCheckVersion
                     */
                    ResCheckVersion.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.clientproto.userMessage.ResCheckVersion)
                            return object;
                        var message = new $root.com.clientproto.userMessage.ResCheckVersion();
                        if (object.clientVersion != null)
                            message.clientVersion = object.clientVersion | 0;
                        if (object.isServerType != null)
                            message.isServerType = object.isServerType | 0;
                        if (object.isVerInfo != null)
                            message.isVerInfo = object.isVerInfo | 0;
                        if (object.isServerList != null)
                            message.isServerList = object.isServerList | 0;
                        if (object.args != null)
                            message.args = String(object.args);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ResCheckVersion message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.clientproto.userMessage.ResCheckVersion
                     * @static
                     * @param {com.clientproto.userMessage.ResCheckVersion} message ResCheckVersion
                     * @param {protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ResCheckVersion.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.clientVersion = 0;
                            object.isServerType = 0;
                            object.isVerInfo = 0;
                            object.isServerList = 0;
                            object.args = "";
                        }
                        if (message.clientVersion != null && message.hasOwnProperty("clientVersion"))
                            object.clientVersion = message.clientVersion;
                        if (message.isServerType != null && message.hasOwnProperty("isServerType"))
                            object.isServerType = message.isServerType;
                        if (message.isVerInfo != null && message.hasOwnProperty("isVerInfo"))
                            object.isVerInfo = message.isVerInfo;
                        if (message.isServerList != null && message.hasOwnProperty("isServerList"))
                            object.isServerList = message.isServerList;
                        if (message.args != null && message.hasOwnProperty("args"))
                            object.args = message.args;
                        return object;
                    };
    
                    /**
                     * Converts this ResCheckVersion to JSON.
                     * @function toJSON
                     * @memberof com.clientproto.userMessage.ResCheckVersion
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ResCheckVersion.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, protobuf.util.toJSONOptions);
                    };
    
                    return ResCheckVersion;
                })();
    
                userMessage.ResServerList = (function() {
    
                    /**
                     * Properties of a ResServerList.
                     * @memberof com.clientproto.userMessage
                     * @interface IResServerList
                     * @property {Array.<com.clientproto.userMessage.IGate2ClientServerInfo>|null} [serverInfoList] ResServerList serverInfoList
                     */
    
                    /**
                     * Constructs a new ResServerList.
                     * @memberof com.clientproto.userMessage
                     * @classdesc Represents a ResServerList.
                     * @implements IResServerList
                     * @constructor
                     * @param {com.clientproto.userMessage.IResServerList=} [properties] Properties to set
                     */
                    function ResServerList(properties) {
                        this.serverInfoList = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ResServerList serverInfoList.
                     * @member {Array.<com.clientproto.userMessage.IGate2ClientServerInfo>} serverInfoList
                     * @memberof com.clientproto.userMessage.ResServerList
                     * @instance
                     */
                    ResServerList.prototype.serverInfoList = $util.emptyArray;
    
                    /**
                     * Creates a new ResServerList instance using the specified properties.
                     * @function create
                     * @memberof com.clientproto.userMessage.ResServerList
                     * @static
                     * @param {com.clientproto.userMessage.IResServerList=} [properties] Properties to set
                     * @returns {com.clientproto.userMessage.ResServerList} ResServerList instance
                     */
                    ResServerList.create = function create(properties) {
                        return new ResServerList(properties);
                    };
    
                    /**
                     * Encodes the specified ResServerList message. Does not implicitly {@link com.clientproto.userMessage.ResServerList.verify|verify} messages.
                     * @function encode
                     * @memberof com.clientproto.userMessage.ResServerList
                     * @static
                     * @param {com.clientproto.userMessage.IResServerList} message ResServerList message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ResServerList.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.serverInfoList != null && message.serverInfoList.length)
                            for (var i = 0; i < message.serverInfoList.length; ++i)
                                $root.com.clientproto.userMessage.Gate2ClientServerInfo.encode(message.serverInfoList[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ResServerList message, length delimited. Does not implicitly {@link com.clientproto.userMessage.ResServerList.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.clientproto.userMessage.ResServerList
                     * @static
                     * @param {com.clientproto.userMessage.IResServerList} message ResServerList message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ResServerList.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ResServerList message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.clientproto.userMessage.ResServerList
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.clientproto.userMessage.ResServerList} ResServerList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResServerList.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.clientproto.userMessage.ResServerList();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.serverInfoList && message.serverInfoList.length))
                                    message.serverInfoList = [];
                                message.serverInfoList.push($root.com.clientproto.userMessage.Gate2ClientServerInfo.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ResServerList message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.clientproto.userMessage.ResServerList
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.clientproto.userMessage.ResServerList} ResServerList
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResServerList.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ResServerList message.
                     * @function verify
                     * @memberof com.clientproto.userMessage.ResServerList
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ResServerList.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.serverInfoList != null && message.hasOwnProperty("serverInfoList")) {
                            if (!Array.isArray(message.serverInfoList))
                                return "serverInfoList: array expected";
                            for (var i = 0; i < message.serverInfoList.length; ++i) {
                                var error = $root.com.clientproto.userMessage.Gate2ClientServerInfo.verify(message.serverInfoList[i]);
                                if (error)
                                    return "serverInfoList." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates a ResServerList message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.clientproto.userMessage.ResServerList
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.clientproto.userMessage.ResServerList} ResServerList
                     */
                    ResServerList.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.clientproto.userMessage.ResServerList)
                            return object;
                        var message = new $root.com.clientproto.userMessage.ResServerList();
                        if (object.serverInfoList) {
                            if (!Array.isArray(object.serverInfoList))
                                throw TypeError(".com.clientproto.userMessage.ResServerList.serverInfoList: array expected");
                            message.serverInfoList = [];
                            for (var i = 0; i < object.serverInfoList.length; ++i) {
                                if (typeof object.serverInfoList[i] !== "object")
                                    throw TypeError(".com.clientproto.userMessage.ResServerList.serverInfoList: object expected");
                                message.serverInfoList[i] = $root.com.clientproto.userMessage.Gate2ClientServerInfo.fromObject(object.serverInfoList[i]);
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ResServerList message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.clientproto.userMessage.ResServerList
                     * @static
                     * @param {com.clientproto.userMessage.ResServerList} message ResServerList
                     * @param {protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ResServerList.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.serverInfoList = [];
                        if (message.serverInfoList && message.serverInfoList.length) {
                            object.serverInfoList = [];
                            for (var j = 0; j < message.serverInfoList.length; ++j)
                                object.serverInfoList[j] = $root.com.clientproto.userMessage.Gate2ClientServerInfo.toObject(message.serverInfoList[j], options);
                        }
                        return object;
                    };
    
                    /**
                     * Converts this ResServerList to JSON.
                     * @function toJSON
                     * @memberof com.clientproto.userMessage.ResServerList
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ResServerList.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, protobuf.util.toJSONOptions);
                    };
    
                    return ResServerList;
                })();
    
                userMessage.ResNotice2Client = (function() {
    
                    /**
                     * Properties of a ResNotice2Client.
                     * @memberof com.clientproto.userMessage
                     * @interface IResNotice2Client
                     * @property {com.clientproto.userMessage.IG2CNoticeInfo|null} [noticeInfo] ResNotice2Client noticeInfo
                     */
    
                    /**
                     * Constructs a new ResNotice2Client.
                     * @memberof com.clientproto.userMessage
                     * @classdesc Represents a ResNotice2Client.
                     * @implements IResNotice2Client
                     * @constructor
                     * @param {com.clientproto.userMessage.IResNotice2Client=} [properties] Properties to set
                     */
                    function ResNotice2Client(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ResNotice2Client noticeInfo.
                     * @member {com.clientproto.userMessage.IG2CNoticeInfo|null|undefined} noticeInfo
                     * @memberof com.clientproto.userMessage.ResNotice2Client
                     * @instance
                     */
                    ResNotice2Client.prototype.noticeInfo = null;
    
                    /**
                     * Creates a new ResNotice2Client instance using the specified properties.
                     * @function create
                     * @memberof com.clientproto.userMessage.ResNotice2Client
                     * @static
                     * @param {com.clientproto.userMessage.IResNotice2Client=} [properties] Properties to set
                     * @returns {com.clientproto.userMessage.ResNotice2Client} ResNotice2Client instance
                     */
                    ResNotice2Client.create = function create(properties) {
                        return new ResNotice2Client(properties);
                    };
    
                    /**
                     * Encodes the specified ResNotice2Client message. Does not implicitly {@link com.clientproto.userMessage.ResNotice2Client.verify|verify} messages.
                     * @function encode
                     * @memberof com.clientproto.userMessage.ResNotice2Client
                     * @static
                     * @param {com.clientproto.userMessage.IResNotice2Client} message ResNotice2Client message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ResNotice2Client.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.noticeInfo != null && message.hasOwnProperty("noticeInfo"))
                            $root.com.clientproto.userMessage.G2CNoticeInfo.encode(message.noticeInfo, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ResNotice2Client message, length delimited. Does not implicitly {@link com.clientproto.userMessage.ResNotice2Client.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof com.clientproto.userMessage.ResNotice2Client
                     * @static
                     * @param {com.clientproto.userMessage.IResNotice2Client} message ResNotice2Client message or plain object to encode
                     * @param {protobuf.Writer} [writer] Writer to encode to
                     * @returns {protobuf.Writer} Writer
                     */
                    ResNotice2Client.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ResNotice2Client message from the specified reader or buffer.
                     * @function decode
                     * @memberof com.clientproto.userMessage.ResNotice2Client
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {com.clientproto.userMessage.ResNotice2Client} ResNotice2Client
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResNotice2Client.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.com.clientproto.userMessage.ResNotice2Client();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.noticeInfo = $root.com.clientproto.userMessage.G2CNoticeInfo.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ResNotice2Client message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof com.clientproto.userMessage.ResNotice2Client
                     * @static
                     * @param {protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {com.clientproto.userMessage.ResNotice2Client} ResNotice2Client
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {protobuf.util.ProtocolError} If required fields are missing
                     */
                    ResNotice2Client.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ResNotice2Client message.
                     * @function verify
                     * @memberof com.clientproto.userMessage.ResNotice2Client
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ResNotice2Client.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.noticeInfo != null && message.hasOwnProperty("noticeInfo")) {
                            var error = $root.com.clientproto.userMessage.G2CNoticeInfo.verify(message.noticeInfo);
                            if (error)
                                return "noticeInfo." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a ResNotice2Client message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof com.clientproto.userMessage.ResNotice2Client
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {com.clientproto.userMessage.ResNotice2Client} ResNotice2Client
                     */
                    ResNotice2Client.fromObject = function fromObject(object) {
                        if (object instanceof $root.com.clientproto.userMessage.ResNotice2Client)
                            return object;
                        var message = new $root.com.clientproto.userMessage.ResNotice2Client();
                        if (object.noticeInfo != null) {
                            if (typeof object.noticeInfo !== "object")
                                throw TypeError(".com.clientproto.userMessage.ResNotice2Client.noticeInfo: object expected");
                            message.noticeInfo = $root.com.clientproto.userMessage.G2CNoticeInfo.fromObject(object.noticeInfo);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ResNotice2Client message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof com.clientproto.userMessage.ResNotice2Client
                     * @static
                     * @param {com.clientproto.userMessage.ResNotice2Client} message ResNotice2Client
                     * @param {protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ResNotice2Client.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.noticeInfo = null;
                        if (message.noticeInfo != null && message.hasOwnProperty("noticeInfo"))
                            object.noticeInfo = $root.com.clientproto.userMessage.G2CNoticeInfo.toObject(message.noticeInfo, options);
                        return object;
                    };
    
                    /**
                     * Converts this ResNotice2Client to JSON.
                     * @function toJSON
                     * @memberof com.clientproto.userMessage.ResNotice2Client
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ResNotice2Client.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, protobuf.util.toJSONOptions);
                    };
    
                    return ResNotice2Client;
                })();
    
                return userMessage;
            })();
    
            return clientproto;
        })();
    
        return com;
    })();
