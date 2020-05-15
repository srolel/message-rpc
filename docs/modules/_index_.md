[message-rpc](../README.md) › [Globals](../globals.md) › ["index"](_index_.md)

# Module: "index"

## Index

### Classes

* [MessageRPC](../classes/_index_.messagerpc.md)

### Type aliases

* [MessageRPCDef](_index_.md#messagerpcdef)
* [MessageRPCDefWithContext](_index_.md#messagerpcdefwithcontext)
* [MessageRPCMessage](_index_.md#messagerpcmessage)
* [MessageRPCMethodContext](_index_.md#messagerpcmethodcontext)
* [MessageRPCOptions](_index_.md#messagerpcoptions)
* [MessageRPCTag](_index_.md#messagerpctag)
* [MessageReceiver](_index_.md#messagereceiver)
* [MessageSender](_index_.md#messagesender)

## Type aliases

###  MessageRPCDef

Ƭ **MessageRPCDef**: *Record‹string | number | symbol, function›*

*Defined in [index.ts:14](https://github.com/srolel/message-rpc/blob/b446f0c/src/index.ts#L14)*

___

###  MessageRPCDefWithContext

Ƭ **MessageRPCDefWithContext**: *object*

*Defined in [index.ts:16](https://github.com/srolel/message-rpc/blob/b446f0c/src/index.ts#L16)*

#### Type declaration:

___

###  MessageRPCMessage

Ƭ **MessageRPCMessage**: *object*

*Defined in [index.ts:7](https://github.com/srolel/message-rpc/blob/b446f0c/src/index.ts#L7)*

#### Type declaration:

* **args**: *Parameters‹T[keyof T]›*

* **context**: *[MessageRPCMethodContext](_index_.md#messagerpcmethodcontext)*

* **method**: *string | number | symbol*

* **tag**: *string | number*

___

###  MessageRPCMethodContext

Ƭ **MessageRPCMethodContext**: *object*

*Defined in [index.ts:5](https://github.com/srolel/message-rpc/blob/b446f0c/src/index.ts#L5)*

#### Type declaration:

* **id**? : *undefined | number*

___

###  MessageRPCOptions

Ƭ **MessageRPCOptions**: *object*

*Defined in [index.ts:34](https://github.com/srolel/message-rpc/blob/b446f0c/src/index.ts#L34)*

#### Type declaration:

* **tag**? : *[MessageRPCTag](_index_.md#messagerpctag)*

___

###  MessageRPCTag

Ƭ **MessageRPCTag**: *string | number*

*Defined in [index.ts:32](https://github.com/srolel/message-rpc/blob/b446f0c/src/index.ts#L32)*

___

###  MessageReceiver

Ƭ **MessageReceiver**: *object*

*Defined in [index.ts:28](https://github.com/srolel/message-rpc/blob/b446f0c/src/index.ts#L28)*

#### Type declaration:

* **on**(`event`: "message", `listener`: function): *any*

___

###  MessageSender

Ƭ **MessageSender**: *object*

*Defined in [index.ts:23](https://github.com/srolel/message-rpc/blob/b446f0c/src/index.ts#L23)*

#### Type declaration:

* **id**? : *undefined | number*

* **send**(`message`: any): *any*
