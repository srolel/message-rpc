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

### Variables

* [objectHash](_index_.md#const-objecthash)
* [stringHash](_index_.md#const-stringhash)

## Type aliases

###  MessageRPCDef

Ƭ **MessageRPCDef**: *Record‹string | number | symbol, function›*

*Defined in [index.ts:13](https://github.com/srolel/message-rpc/blob/f8420f8/src/index.ts#L13)*

___

###  MessageRPCDefWithContext

Ƭ **MessageRPCDefWithContext**: *object*

*Defined in [index.ts:15](https://github.com/srolel/message-rpc/blob/f8420f8/src/index.ts#L15)*

#### Type declaration:

___

###  MessageRPCMessage

Ƭ **MessageRPCMessage**: *object*

*Defined in [index.ts:6](https://github.com/srolel/message-rpc/blob/f8420f8/src/index.ts#L6)*

#### Type declaration:

* **args**: *Parameters‹T[keyof T]›*

* **context**: *[MessageRPCMethodContext](_index_.md#messagerpcmethodcontext)*

* **method**: *string | number | symbol*

* **tag**: *string | number*

___

###  MessageRPCMethodContext

Ƭ **MessageRPCMethodContext**: *object*

*Defined in [index.ts:4](https://github.com/srolel/message-rpc/blob/f8420f8/src/index.ts#L4)*

#### Type declaration:

* **id**? : *undefined | number*

___

###  MessageRPCOptions

Ƭ **MessageRPCOptions**: *object*

*Defined in [index.ts:33](https://github.com/srolel/message-rpc/blob/f8420f8/src/index.ts#L33)*

#### Type declaration:

* **tag**? : *[MessageRPCTag](_index_.md#messagerpctag)*

___

###  MessageRPCTag

Ƭ **MessageRPCTag**: *string | number*

*Defined in [index.ts:31](https://github.com/srolel/message-rpc/blob/f8420f8/src/index.ts#L31)*

___

###  MessageReceiver

Ƭ **MessageReceiver**: *object*

*Defined in [index.ts:27](https://github.com/srolel/message-rpc/blob/f8420f8/src/index.ts#L27)*

#### Type declaration:

* **on**(`event`: "message", `listener`: function): *any*

___

###  MessageSender

Ƭ **MessageSender**: *object*

*Defined in [index.ts:22](https://github.com/srolel/message-rpc/blob/f8420f8/src/index.ts#L22)*

#### Type declaration:

* **id**? : *undefined | number*

* **send**(`message`: any): *any*

## Variables

### `Const` objectHash

• **objectHash**: *any* = require('object-hash')

*Defined in [index.ts:2](https://github.com/srolel/message-rpc/blob/f8420f8/src/index.ts#L2)*

___

### `Const` stringHash

• **stringHash**: *any* = require('string-hash')

*Defined in [index.ts:1](https://github.com/srolel/message-rpc/blob/f8420f8/src/index.ts#L1)*
