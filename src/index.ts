/* eslint-disable @typescript-eslint/no-explicit-any */
import stringHash from 'string-hash';
import objectHash from 'object-hash';

type MessageRPCMethodContext = { id?: number };

type MessageRPCMessage<T extends MessageRPCDef> = {
    tag: string | number;
    method: string | number | symbol;
    args: Parameters<T[keyof T]>;
    context: MessageRPCMethodContext;
};

type MessageRPCDef = Record<string | number | symbol, (...args: any[]) => void>;

type MessageRPCDefWithContext<U extends MessageRPCDef> = {
    [K in keyof U]: (
        this: MessageRPCMethodContext,
        ...args: Parameters<U[K]>
    ) => void;
};

export type MessageSender = {
    id?: number;
    send?(message: any): any;
};

export type MessageReceiver = {
    on(event: 'message', listener: (...args: any[]) => void): any;
};

type MessageRPCTag = string | number;

type MessageRPCOptions = {
    tag?: MessageRPCTag;
};

export class MessageRPC<T extends MessageRPCDef> {
    tag: MessageRPCTag = '__default_tag__';

    constructor(
        private definition: Partial<MessageRPCDefWithContext<T>> = {},
        options: MessageRPCOptions = {},
    ) {
        this.config(options);
    }

    private generateTag(options: MessageRPCOptions): MessageRPCTag {
        const error = new Error();
        if (options.tag) {
            return options.tag;
        } else if (error.stack) {
            return stringHash(error.stack);
        } else if (Object.keys(this.definition).length > 0) {
            return objectHash(this.definition);
        } else {
            throw new Error(
                'Error stack is not supported in this environment, so MessageRPC relies on a provided tag option or an implementation of the RPC definition during instantiation.',
            );
        }
    }

    config(options: MessageRPCOptions): this {
        this.tag = this.generateTag(options);
        return this;
    }

    extend(extension: Partial<MessageRPCDefWithContext<T>>): this {
        this.definition = { ...this.definition, ...extension };
        return this;
    }

    register(receiver: MessageReceiver): this {
        receiver.on('message', (message: MessageRPCMessage<T>) => {
            if (message && message.tag === this.tag) {
                const method = Reflect.get(this.definition, message.method);
                if (method) {
                    method.apply(message.context, message.args);
                }
            }
        });
        return this;
    }

    client(sender: MessageSender = process): T {
        return new Proxy({} as T, {
            get: (obj, prop): ((...args: any[]) => void) => {
                if (!Reflect.has(obj, prop)) {
                    const method = (...args: any[]): void => {
                        if (sender.send) {
                            const message: MessageRPCMessage<T> = {
                                tag: this.tag,
                                method: prop,
                                args: args as Parameters<T[keyof T]>,
                                context: { id: sender.id },
                            };
                            sender.send(message);
                        }
                    };
                    Reflect.set(obj, prop, method);
                }
                return Reflect.get(obj, prop);
            },
        });
    }
}
