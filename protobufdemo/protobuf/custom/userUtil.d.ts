// import * as protobuf from "../library/protobuf";
// export as namespace protobuf;
/** Namespace com. */
declare namespace com {

    /** Namespace clientproto. */
    namespace clientproto {

        /** Namespace loginMessage. */
        namespace loginMessage {

            /** Properties of a ReqLogin. */
            interface IReqLogin {

                /** ReqLogin code */
                code?: (string|null);

                /** ReqLogin serverId */
                serverId?: (number|null);

                /** ReqLogin agentId */
                agentId?: (number|null);

                /** ReqLogin clientId */
                clientId?: (number|null);
            }

            /** Represents a ReqLogin. */
            class ReqLogin implements IReqLogin {

                /**
                 * Constructs a new ReqLogin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.clientproto.loginMessage.IReqLogin);

                /** ReqLogin code. */
                public code: string;

                /** ReqLogin serverId. */
                public serverId: number;

                /** ReqLogin agentId. */
                public agentId: number;

                /** ReqLogin clientId. */
                public clientId: number;

                /**
                 * Creates a new ReqLogin instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReqLogin instance
                 */
                public static create(properties?: com.clientproto.loginMessage.IReqLogin): com.clientproto.loginMessage.ReqLogin;

                /**
                 * Encodes the specified ReqLogin message. Does not implicitly {@link com.clientproto.loginMessage.ReqLogin.verify|verify} messages.
                 * @param message ReqLogin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.clientproto.loginMessage.IReqLogin, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ReqLogin message, length delimited. Does not implicitly {@link com.clientproto.loginMessage.ReqLogin.verify|verify} messages.
                 * @param message ReqLogin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.clientproto.loginMessage.IReqLogin, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ReqLogin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReqLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.clientproto.loginMessage.ReqLogin;

                /**
                 * Decodes a ReqLogin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReqLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.clientproto.loginMessage.ReqLogin;

                /**
                 * Verifies a ReqLogin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReqLogin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReqLogin
                 */
                public static fromObject(object: { [k: string]: any }): com.clientproto.loginMessage.ReqLogin;

                /**
                 * Creates a plain object from a ReqLogin message. Also converts values to other types if specified.
                 * @param message ReqLogin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.clientproto.loginMessage.ReqLogin, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReqLogin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReqHeart. */
            interface IReqHeart {
            }

            /** Represents a ReqHeart. */
            class ReqHeart implements IReqHeart {

                /**
                 * Constructs a new ReqHeart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.clientproto.loginMessage.IReqHeart);

                /**
                 * Creates a new ReqHeart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReqHeart instance
                 */
                public static create(properties?: com.clientproto.loginMessage.IReqHeart): com.clientproto.loginMessage.ReqHeart;

                /**
                 * Encodes the specified ReqHeart message. Does not implicitly {@link com.clientproto.loginMessage.ReqHeart.verify|verify} messages.
                 * @param message ReqHeart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.clientproto.loginMessage.IReqHeart, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ReqHeart message, length delimited. Does not implicitly {@link com.clientproto.loginMessage.ReqHeart.verify|verify} messages.
                 * @param message ReqHeart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.clientproto.loginMessage.IReqHeart, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ReqHeart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReqHeart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.clientproto.loginMessage.ReqHeart;

                /**
                 * Decodes a ReqHeart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReqHeart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.clientproto.loginMessage.ReqHeart;

                /**
                 * Verifies a ReqHeart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReqHeart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReqHeart
                 */
                public static fromObject(object: { [k: string]: any }): com.clientproto.loginMessage.ReqHeart;

                /**
                 * Creates a plain object from a ReqHeart message. Also converts values to other types if specified.
                 * @param message ReqHeart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.clientproto.loginMessage.ReqHeart, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReqHeart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReqCreatePlayer. */
            interface IReqCreatePlayer {

                /** ReqCreatePlayer gender */
                gender?: (number|null);

                /** ReqCreatePlayer type */
                type?: (number|null);

                /** ReqCreatePlayer playerName */
                playerName?: (string|null);
            }

            /** Represents a ReqCreatePlayer. */
            class ReqCreatePlayer implements IReqCreatePlayer {

                /**
                 * Constructs a new ReqCreatePlayer.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.clientproto.loginMessage.IReqCreatePlayer);

                /** ReqCreatePlayer gender. */
                public gender: number;

                /** ReqCreatePlayer type. */
                public type: number;

                /** ReqCreatePlayer playerName. */
                public playerName: string;

                /**
                 * Creates a new ReqCreatePlayer instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReqCreatePlayer instance
                 */
                public static create(properties?: com.clientproto.loginMessage.IReqCreatePlayer): com.clientproto.loginMessage.ReqCreatePlayer;

                /**
                 * Encodes the specified ReqCreatePlayer message. Does not implicitly {@link com.clientproto.loginMessage.ReqCreatePlayer.verify|verify} messages.
                 * @param message ReqCreatePlayer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.clientproto.loginMessage.IReqCreatePlayer, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ReqCreatePlayer message, length delimited. Does not implicitly {@link com.clientproto.loginMessage.ReqCreatePlayer.verify|verify} messages.
                 * @param message ReqCreatePlayer message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.clientproto.loginMessage.IReqCreatePlayer, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ReqCreatePlayer message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReqCreatePlayer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.clientproto.loginMessage.ReqCreatePlayer;

                /**
                 * Decodes a ReqCreatePlayer message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReqCreatePlayer
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.clientproto.loginMessage.ReqCreatePlayer;

                /**
                 * Verifies a ReqCreatePlayer message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReqCreatePlayer message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReqCreatePlayer
                 */
                public static fromObject(object: { [k: string]: any }): com.clientproto.loginMessage.ReqCreatePlayer;

                /**
                 * Creates a plain object from a ReqCreatePlayer message. Also converts values to other types if specified.
                 * @param message ReqCreatePlayer
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.clientproto.loginMessage.ReqCreatePlayer, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReqCreatePlayer to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ResHeart. */
            interface IResHeart {

                /** ResHeart time */
                time?: (number|null);
            }

            /** Represents a ResHeart. */
            class ResHeart implements IResHeart {

                /**
                 * Constructs a new ResHeart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.clientproto.loginMessage.IResHeart);

                /** ResHeart time. */
                public time: number;

                /**
                 * Creates a new ResHeart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResHeart instance
                 */
                public static create(properties?: com.clientproto.loginMessage.IResHeart): com.clientproto.loginMessage.ResHeart;

                /**
                 * Encodes the specified ResHeart message. Does not implicitly {@link com.clientproto.loginMessage.ResHeart.verify|verify} messages.
                 * @param message ResHeart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.clientproto.loginMessage.IResHeart, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ResHeart message, length delimited. Does not implicitly {@link com.clientproto.loginMessage.ResHeart.verify|verify} messages.
                 * @param message ResHeart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.clientproto.loginMessage.IResHeart, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ResHeart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResHeart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.clientproto.loginMessage.ResHeart;

                /**
                 * Decodes a ResHeart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResHeart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.clientproto.loginMessage.ResHeart;

                /**
                 * Verifies a ResHeart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResHeart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResHeart
                 */
                public static fromObject(object: { [k: string]: any }): com.clientproto.loginMessage.ResHeart;

                /**
                 * Creates a plain object from a ResHeart message. Also converts values to other types if specified.
                 * @param message ResHeart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.clientproto.loginMessage.ResHeart, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResHeart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ResError. */
            interface IResError {

                /** ResError code */
                code?: (number|null);
            }

            /** Represents a ResError. */
            class ResError implements IResError {

                /**
                 * Constructs a new ResError.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.clientproto.loginMessage.IResError);

                /** ResError code. */
                public code: number;

                /**
                 * Creates a new ResError instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResError instance
                 */
                public static create(properties?: com.clientproto.loginMessage.IResError): com.clientproto.loginMessage.ResError;

                /**
                 * Encodes the specified ResError message. Does not implicitly {@link com.clientproto.loginMessage.ResError.verify|verify} messages.
                 * @param message ResError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.clientproto.loginMessage.IResError, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ResError message, length delimited. Does not implicitly {@link com.clientproto.loginMessage.ResError.verify|verify} messages.
                 * @param message ResError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.clientproto.loginMessage.IResError, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ResError message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.clientproto.loginMessage.ResError;

                /**
                 * Decodes a ResError message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.clientproto.loginMessage.ResError;

                /**
                 * Verifies a ResError message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResError message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResError
                 */
                public static fromObject(object: { [k: string]: any }): com.clientproto.loginMessage.ResError;

                /**
                 * Creates a plain object from a ResError message. Also converts values to other types if specified.
                 * @param message ResError
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.clientproto.loginMessage.ResError, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResError to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ResSubstitute. */
            interface IResSubstitute {

                /** ResSubstitute ip */
                ip?: (string|null);
            }

            /** Represents a ResSubstitute. */
            class ResSubstitute implements IResSubstitute {

                /**
                 * Constructs a new ResSubstitute.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.clientproto.loginMessage.IResSubstitute);

                /** ResSubstitute ip. */
                public ip: string;

                /**
                 * Creates a new ResSubstitute instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResSubstitute instance
                 */
                public static create(properties?: com.clientproto.loginMessage.IResSubstitute): com.clientproto.loginMessage.ResSubstitute;

                /**
                 * Encodes the specified ResSubstitute message. Does not implicitly {@link com.clientproto.loginMessage.ResSubstitute.verify|verify} messages.
                 * @param message ResSubstitute message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.clientproto.loginMessage.IResSubstitute, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ResSubstitute message, length delimited. Does not implicitly {@link com.clientproto.loginMessage.ResSubstitute.verify|verify} messages.
                 * @param message ResSubstitute message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.clientproto.loginMessage.IResSubstitute, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ResSubstitute message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResSubstitute
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.clientproto.loginMessage.ResSubstitute;

                /**
                 * Decodes a ResSubstitute message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResSubstitute
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.clientproto.loginMessage.ResSubstitute;

                /**
                 * Verifies a ResSubstitute message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResSubstitute message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResSubstitute
                 */
                public static fromObject(object: { [k: string]: any }): com.clientproto.loginMessage.ResSubstitute;

                /**
                 * Creates a plain object from a ResSubstitute message. Also converts values to other types if specified.
                 * @param message ResSubstitute
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.clientproto.loginMessage.ResSubstitute, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResSubstitute to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Namespace userMessage. */
        namespace userMessage {

            /** Properties of a G2CNoticeInfo. */
            interface IG2CNoticeInfo {

                /** G2CNoticeInfo title */
                title?: (string|null);

                /** G2CNoticeInfo content */
                content?: (string|null);
            }

            /** Represents a G2CNoticeInfo. */
            class G2CNoticeInfo implements IG2CNoticeInfo {

                /**
                 * Constructs a new G2CNoticeInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.clientproto.userMessage.IG2CNoticeInfo);

                /** G2CNoticeInfo title. */
                public title: string;

                /** G2CNoticeInfo content. */
                public content: string;

                /**
                 * Creates a new G2CNoticeInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns G2CNoticeInfo instance
                 */
                public static create(properties?: com.clientproto.userMessage.IG2CNoticeInfo): com.clientproto.userMessage.G2CNoticeInfo;

                /**
                 * Encodes the specified G2CNoticeInfo message. Does not implicitly {@link com.clientproto.userMessage.G2CNoticeInfo.verify|verify} messages.
                 * @param message G2CNoticeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.clientproto.userMessage.IG2CNoticeInfo, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified G2CNoticeInfo message, length delimited. Does not implicitly {@link com.clientproto.userMessage.G2CNoticeInfo.verify|verify} messages.
                 * @param message G2CNoticeInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.clientproto.userMessage.IG2CNoticeInfo, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a G2CNoticeInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns G2CNoticeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.clientproto.userMessage.G2CNoticeInfo;

                /**
                 * Decodes a G2CNoticeInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns G2CNoticeInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.clientproto.userMessage.G2CNoticeInfo;

                /**
                 * Verifies a G2CNoticeInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a G2CNoticeInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns G2CNoticeInfo
                 */
                public static fromObject(object: { [k: string]: any }): com.clientproto.userMessage.G2CNoticeInfo;

                /**
                 * Creates a plain object from a G2CNoticeInfo message. Also converts values to other types if specified.
                 * @param message G2CNoticeInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.clientproto.userMessage.G2CNoticeInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this G2CNoticeInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Gate2ClientServerInfo. */
            interface IGate2ClientServerInfo {

                /** Gate2ClientServerInfo serverId */
                serverId?: (number|null);

                /** Gate2ClientServerInfo serverName */
                serverName?: (string|null);

                /** Gate2ClientServerInfo port */
                port?: (number|null);

                /** Gate2ClientServerInfo ip */
                ip?: (string|null);

                /** Gate2ClientServerInfo state */
                state?: (number|null);
            }

            /** Represents a Gate2ClientServerInfo. */
            class Gate2ClientServerInfo implements IGate2ClientServerInfo {

                /**
                 * Constructs a new Gate2ClientServerInfo.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.clientproto.userMessage.IGate2ClientServerInfo);

                /** Gate2ClientServerInfo serverId. */
                public serverId: number;

                /** Gate2ClientServerInfo serverName. */
                public serverName: string;

                /** Gate2ClientServerInfo port. */
                public port: number;

                /** Gate2ClientServerInfo ip. */
                public ip: string;

                /** Gate2ClientServerInfo state. */
                public state: number;

                /**
                 * Creates a new Gate2ClientServerInfo instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Gate2ClientServerInfo instance
                 */
                public static create(properties?: com.clientproto.userMessage.IGate2ClientServerInfo): com.clientproto.userMessage.Gate2ClientServerInfo;

                /**
                 * Encodes the specified Gate2ClientServerInfo message. Does not implicitly {@link com.clientproto.userMessage.Gate2ClientServerInfo.verify|verify} messages.
                 * @param message Gate2ClientServerInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.clientproto.userMessage.IGate2ClientServerInfo, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified Gate2ClientServerInfo message, length delimited. Does not implicitly {@link com.clientproto.userMessage.Gate2ClientServerInfo.verify|verify} messages.
                 * @param message Gate2ClientServerInfo message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.clientproto.userMessage.IGate2ClientServerInfo, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a Gate2ClientServerInfo message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Gate2ClientServerInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.clientproto.userMessage.Gate2ClientServerInfo;

                /**
                 * Decodes a Gate2ClientServerInfo message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Gate2ClientServerInfo
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.clientproto.userMessage.Gate2ClientServerInfo;

                /**
                 * Verifies a Gate2ClientServerInfo message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Gate2ClientServerInfo message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Gate2ClientServerInfo
                 */
                public static fromObject(object: { [k: string]: any }): com.clientproto.userMessage.Gate2ClientServerInfo;

                /**
                 * Creates a plain object from a Gate2ClientServerInfo message. Also converts values to other types if specified.
                 * @param message Gate2ClientServerInfo
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.clientproto.userMessage.Gate2ClientServerInfo, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Gate2ClientServerInfo to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReqCheckVersion. */
            interface IReqCheckVersion {

                /** ReqCheckVersion checkId */
                checkId?: (number|null);
            }

            /** Represents a ReqCheckVersion. */
            class ReqCheckVersion implements IReqCheckVersion {

                /**
                 * Constructs a new ReqCheckVersion.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.clientproto.userMessage.IReqCheckVersion);

                /** ReqCheckVersion checkId. */
                public checkId: number;

                /**
                 * Creates a new ReqCheckVersion instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReqCheckVersion instance
                 */
                public static create(properties?: com.clientproto.userMessage.IReqCheckVersion): com.clientproto.userMessage.ReqCheckVersion;

                /**
                 * Encodes the specified ReqCheckVersion message. Does not implicitly {@link com.clientproto.userMessage.ReqCheckVersion.verify|verify} messages.
                 * @param message ReqCheckVersion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.clientproto.userMessage.IReqCheckVersion, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ReqCheckVersion message, length delimited. Does not implicitly {@link com.clientproto.userMessage.ReqCheckVersion.verify|verify} messages.
                 * @param message ReqCheckVersion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.clientproto.userMessage.IReqCheckVersion, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ReqCheckVersion message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReqCheckVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.clientproto.userMessage.ReqCheckVersion;

                /**
                 * Decodes a ReqCheckVersion message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReqCheckVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.clientproto.userMessage.ReqCheckVersion;

                /**
                 * Verifies a ReqCheckVersion message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReqCheckVersion message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReqCheckVersion
                 */
                public static fromObject(object: { [k: string]: any }): com.clientproto.userMessage.ReqCheckVersion;

                /**
                 * Creates a plain object from a ReqCheckVersion message. Also converts values to other types if specified.
                 * @param message ReqCheckVersion
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.clientproto.userMessage.ReqCheckVersion, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReqCheckVersion to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReqRegisterUser. */
            interface IReqRegisterUser {

                /** ReqRegisterUser userName */
                userName?: (string|null);

                /** ReqRegisterUser userPass */
                userPass?: (string|null);
            }

            /** Represents a ReqRegisterUser. */
            class ReqRegisterUser implements IReqRegisterUser {

                /**
                 * Constructs a new ReqRegisterUser.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.clientproto.userMessage.IReqRegisterUser);

                /** ReqRegisterUser userName. */
                public userName: string;

                /** ReqRegisterUser userPass. */
                public userPass: string;

                /**
                 * Creates a new ReqRegisterUser instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReqRegisterUser instance
                 */
                public static create(properties?: com.clientproto.userMessage.IReqRegisterUser): com.clientproto.userMessage.ReqRegisterUser;

                /**
                 * Encodes the specified ReqRegisterUser message. Does not implicitly {@link com.clientproto.userMessage.ReqRegisterUser.verify|verify} messages.
                 * @param message ReqRegisterUser message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.clientproto.userMessage.IReqRegisterUser, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ReqRegisterUser message, length delimited. Does not implicitly {@link com.clientproto.userMessage.ReqRegisterUser.verify|verify} messages.
                 * @param message ReqRegisterUser message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.clientproto.userMessage.IReqRegisterUser, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ReqRegisterUser message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReqRegisterUser
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.clientproto.userMessage.ReqRegisterUser;

                /**
                 * Decodes a ReqRegisterUser message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReqRegisterUser
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.clientproto.userMessage.ReqRegisterUser;

                /**
                 * Verifies a ReqRegisterUser message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReqRegisterUser message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReqRegisterUser
                 */
                public static fromObject(object: { [k: string]: any }): com.clientproto.userMessage.ReqRegisterUser;

                /**
                 * Creates a plain object from a ReqRegisterUser message. Also converts values to other types if specified.
                 * @param message ReqRegisterUser
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.clientproto.userMessage.ReqRegisterUser, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReqRegisterUser to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReqUserLogin. */
            interface IReqUserLogin {

                /** ReqUserLogin userName */
                userName?: (string|null);

                /** ReqUserLogin userPass */
                userPass?: (string|null);

                /** ReqUserLogin clientId */
                clientId?: (number|null);
            }

            /** Represents a ReqUserLogin. */
            class ReqUserLogin implements IReqUserLogin {

                /**
                 * Constructs a new ReqUserLogin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.clientproto.userMessage.IReqUserLogin);

                /** ReqUserLogin userName. */
                public userName: string;

                /** ReqUserLogin userPass. */
                public userPass: string;

                /** ReqUserLogin clientId. */
                public clientId: number;

                /**
                 * Creates a new ReqUserLogin instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReqUserLogin instance
                 */
                public static create(properties?: com.clientproto.userMessage.IReqUserLogin): com.clientproto.userMessage.ReqUserLogin;

                /**
                 * Encodes the specified ReqUserLogin message. Does not implicitly {@link com.clientproto.userMessage.ReqUserLogin.verify|verify} messages.
                 * @param message ReqUserLogin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.clientproto.userMessage.IReqUserLogin, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ReqUserLogin message, length delimited. Does not implicitly {@link com.clientproto.userMessage.ReqUserLogin.verify|verify} messages.
                 * @param message ReqUserLogin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.clientproto.userMessage.IReqUserLogin, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ReqUserLogin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReqUserLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.clientproto.userMessage.ReqUserLogin;

                /**
                 * Decodes a ReqUserLogin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReqUserLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.clientproto.userMessage.ReqUserLogin;

                /**
                 * Verifies a ReqUserLogin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReqUserLogin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReqUserLogin
                 */
                public static fromObject(object: { [k: string]: any }): com.clientproto.userMessage.ReqUserLogin;

                /**
                 * Creates a plain object from a ReqUserLogin message. Also converts values to other types if specified.
                 * @param message ReqUserLogin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.clientproto.userMessage.ReqUserLogin, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReqUserLogin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReqPublicSdkLogin. */
            interface IReqPublicSdkLogin {

                /** ReqPublicSdkLogin userType */
                userType?: (number|null);

                /** ReqPublicSdkLogin openId */
                openId?: (string|null);

                /** ReqPublicSdkLogin timestamp */
                timestamp?: (string|null);

                /** ReqPublicSdkLogin serverSign */
                serverSign?: (string|null);
            }

            /** Represents a ReqPublicSdkLogin. */
            class ReqPublicSdkLogin implements IReqPublicSdkLogin {

                /**
                 * Constructs a new ReqPublicSdkLogin.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.clientproto.userMessage.IReqPublicSdkLogin);

                /** ReqPublicSdkLogin userType. */
                public userType: number;

                /** ReqPublicSdkLogin openId. */
                public openId: string;

                /** ReqPublicSdkLogin timestamp. */
                public timestamp: string;

                /** ReqPublicSdkLogin serverSign. */
                public serverSign: string;

                /**
                 * Creates a new ReqPublicSdkLogin instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReqPublicSdkLogin instance
                 */
                public static create(properties?: com.clientproto.userMessage.IReqPublicSdkLogin): com.clientproto.userMessage.ReqPublicSdkLogin;

                /**
                 * Encodes the specified ReqPublicSdkLogin message. Does not implicitly {@link com.clientproto.userMessage.ReqPublicSdkLogin.verify|verify} messages.
                 * @param message ReqPublicSdkLogin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.clientproto.userMessage.IReqPublicSdkLogin, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ReqPublicSdkLogin message, length delimited. Does not implicitly {@link com.clientproto.userMessage.ReqPublicSdkLogin.verify|verify} messages.
                 * @param message ReqPublicSdkLogin message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.clientproto.userMessage.IReqPublicSdkLogin, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ReqPublicSdkLogin message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReqPublicSdkLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.clientproto.userMessage.ReqPublicSdkLogin;

                /**
                 * Decodes a ReqPublicSdkLogin message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReqPublicSdkLogin
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.clientproto.userMessage.ReqPublicSdkLogin;

                /**
                 * Verifies a ReqPublicSdkLogin message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReqPublicSdkLogin message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReqPublicSdkLogin
                 */
                public static fromObject(object: { [k: string]: any }): com.clientproto.userMessage.ReqPublicSdkLogin;

                /**
                 * Creates a plain object from a ReqPublicSdkLogin message. Also converts values to other types if specified.
                 * @param message ReqPublicSdkLogin
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.clientproto.userMessage.ReqPublicSdkLogin, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReqPublicSdkLogin to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ResUserCode. */
            interface IResUserCode {

                /** ResUserCode state */
                state?: (number|null);

                /** ResUserCode code */
                code?: (string|null);
            }

            /** Represents a ResUserCode. */
            class ResUserCode implements IResUserCode {

                /**
                 * Constructs a new ResUserCode.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.clientproto.userMessage.IResUserCode);

                /** ResUserCode state. */
                public state: number;

                /** ResUserCode code. */
                public code: string;

                /**
                 * Creates a new ResUserCode instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResUserCode instance
                 */
                public static create(properties?: com.clientproto.userMessage.IResUserCode): com.clientproto.userMessage.ResUserCode;

                /**
                 * Encodes the specified ResUserCode message. Does not implicitly {@link com.clientproto.userMessage.ResUserCode.verify|verify} messages.
                 * @param message ResUserCode message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.clientproto.userMessage.IResUserCode, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ResUserCode message, length delimited. Does not implicitly {@link com.clientproto.userMessage.ResUserCode.verify|verify} messages.
                 * @param message ResUserCode message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.clientproto.userMessage.IResUserCode, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ResUserCode message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResUserCode
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.clientproto.userMessage.ResUserCode;

                /**
                 * Decodes a ResUserCode message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResUserCode
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.clientproto.userMessage.ResUserCode;

                /**
                 * Verifies a ResUserCode message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResUserCode message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResUserCode
                 */
                public static fromObject(object: { [k: string]: any }): com.clientproto.userMessage.ResUserCode;

                /**
                 * Creates a plain object from a ResUserCode message. Also converts values to other types if specified.
                 * @param message ResUserCode
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.clientproto.userMessage.ResUserCode, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResUserCode to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ResCheckVersion. */
            interface IResCheckVersion {

                /** ResCheckVersion clientVersion */
                clientVersion?: (number|null);

                /** ResCheckVersion isServerType */
                isServerType?: (number|null);

                /** ResCheckVersion isVerInfo */
                isVerInfo?: (number|null);

                /** ResCheckVersion isServerList */
                isServerList?: (number|null);

                /** ResCheckVersion args */
                args?: (string|null);
            }

            /** Represents a ResCheckVersion. */
            class ResCheckVersion implements IResCheckVersion {

                /**
                 * Constructs a new ResCheckVersion.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.clientproto.userMessage.IResCheckVersion);

                /** ResCheckVersion clientVersion. */
                public clientVersion: number;

                /** ResCheckVersion isServerType. */
                public isServerType: number;

                /** ResCheckVersion isVerInfo. */
                public isVerInfo: number;

                /** ResCheckVersion isServerList. */
                public isServerList: number;

                /** ResCheckVersion args. */
                public args: string;

                /**
                 * Creates a new ResCheckVersion instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResCheckVersion instance
                 */
                public static create(properties?: com.clientproto.userMessage.IResCheckVersion): com.clientproto.userMessage.ResCheckVersion;

                /**
                 * Encodes the specified ResCheckVersion message. Does not implicitly {@link com.clientproto.userMessage.ResCheckVersion.verify|verify} messages.
                 * @param message ResCheckVersion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.clientproto.userMessage.IResCheckVersion, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ResCheckVersion message, length delimited. Does not implicitly {@link com.clientproto.userMessage.ResCheckVersion.verify|verify} messages.
                 * @param message ResCheckVersion message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.clientproto.userMessage.IResCheckVersion, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ResCheckVersion message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResCheckVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.clientproto.userMessage.ResCheckVersion;

                /**
                 * Decodes a ResCheckVersion message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResCheckVersion
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.clientproto.userMessage.ResCheckVersion;

                /**
                 * Verifies a ResCheckVersion message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResCheckVersion message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResCheckVersion
                 */
                public static fromObject(object: { [k: string]: any }): com.clientproto.userMessage.ResCheckVersion;

                /**
                 * Creates a plain object from a ResCheckVersion message. Also converts values to other types if specified.
                 * @param message ResCheckVersion
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.clientproto.userMessage.ResCheckVersion, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResCheckVersion to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ResServerList. */
            interface IResServerList {

                /** ResServerList serverInfoList */
                serverInfoList?: (com.clientproto.userMessage.IGate2ClientServerInfo[]|null);
            }

            /** Represents a ResServerList. */
            class ResServerList implements IResServerList {

                /**
                 * Constructs a new ResServerList.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.clientproto.userMessage.IResServerList);

                /** ResServerList serverInfoList. */
                public serverInfoList: com.clientproto.userMessage.IGate2ClientServerInfo[];

                /**
                 * Creates a new ResServerList instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResServerList instance
                 */
                public static create(properties?: com.clientproto.userMessage.IResServerList): com.clientproto.userMessage.ResServerList;

                /**
                 * Encodes the specified ResServerList message. Does not implicitly {@link com.clientproto.userMessage.ResServerList.verify|verify} messages.
                 * @param message ResServerList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.clientproto.userMessage.IResServerList, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ResServerList message, length delimited. Does not implicitly {@link com.clientproto.userMessage.ResServerList.verify|verify} messages.
                 * @param message ResServerList message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.clientproto.userMessage.IResServerList, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ResServerList message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResServerList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.clientproto.userMessage.ResServerList;

                /**
                 * Decodes a ResServerList message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResServerList
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.clientproto.userMessage.ResServerList;

                /**
                 * Verifies a ResServerList message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResServerList message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResServerList
                 */
                public static fromObject(object: { [k: string]: any }): com.clientproto.userMessage.ResServerList;

                /**
                 * Creates a plain object from a ResServerList message. Also converts values to other types if specified.
                 * @param message ResServerList
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.clientproto.userMessage.ResServerList, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResServerList to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ResNotice2Client. */
            interface IResNotice2Client {

                /** ResNotice2Client noticeInfo */
                noticeInfo?: (com.clientproto.userMessage.IG2CNoticeInfo|null);
            }

            /** Represents a ResNotice2Client. */
            class ResNotice2Client implements IResNotice2Client {

                /**
                 * Constructs a new ResNotice2Client.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: com.clientproto.userMessage.IResNotice2Client);

                /** ResNotice2Client noticeInfo. */
                public noticeInfo?: (com.clientproto.userMessage.IG2CNoticeInfo|null);

                /**
                 * Creates a new ResNotice2Client instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ResNotice2Client instance
                 */
                public static create(properties?: com.clientproto.userMessage.IResNotice2Client): com.clientproto.userMessage.ResNotice2Client;

                /**
                 * Encodes the specified ResNotice2Client message. Does not implicitly {@link com.clientproto.userMessage.ResNotice2Client.verify|verify} messages.
                 * @param message ResNotice2Client message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: com.clientproto.userMessage.IResNotice2Client, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Encodes the specified ResNotice2Client message, length delimited. Does not implicitly {@link com.clientproto.userMessage.ResNotice2Client.verify|verify} messages.
                 * @param message ResNotice2Client message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: com.clientproto.userMessage.IResNotice2Client, writer?: protobuf.Writer): protobuf.Writer;

                /**
                 * Decodes a ResNotice2Client message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ResNotice2Client
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: (protobuf.Reader|Uint8Array), length?: number): com.clientproto.userMessage.ResNotice2Client;

                /**
                 * Decodes a ResNotice2Client message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ResNotice2Client
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: (protobuf.Reader|Uint8Array)): com.clientproto.userMessage.ResNotice2Client;

                /**
                 * Verifies a ResNotice2Client message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ResNotice2Client message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ResNotice2Client
                 */
                public static fromObject(object: { [k: string]: any }): com.clientproto.userMessage.ResNotice2Client;

                /**
                 * Creates a plain object from a ResNotice2Client message. Also converts values to other types if specified.
                 * @param message ResNotice2Client
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: com.clientproto.userMessage.ResNotice2Client, options?: protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ResNotice2Client to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
