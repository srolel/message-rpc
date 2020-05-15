[message-rpc](../README.md) › [Globals](../globals.md) › ["index"](../modules/_index_.md) › [MessageRPC](_index_.messagerpc.md)

# Class: MessageRPC <**T**>

## Type parameters

▪ **T**: *[MessageRPCDef](../modules/_index_.md#messagerpcdef)*

## Hierarchy

* **MessageRPC**

## Index

### Constructors

* [constructor](_index_.messagerpc.md#constructor)

### Properties

* [definition](_index_.messagerpc.md#private-definition)
* [tag](_index_.messagerpc.md#tag)

### Methods

* [client](_index_.messagerpc.md#client)
* [config](_index_.messagerpc.md#config)
* [extend](_index_.messagerpc.md#extend)
* [generateTag](_index_.messagerpc.md#private-generatetag)
* [register](_index_.messagerpc.md#register)

## Constructors

###  constructor

\+ **new MessageRPC**(`definition`: Partial‹[MessageRPCDefWithContext](../modules/_index_.md#messagerpcdefwithcontext)‹T››, `options`: [MessageRPCOptions](../modules/_index_.md#messagerpcoptions)): *[MessageRPC](_index_.messagerpc.md)*

*Defined in [index.ts:38](https://github.com/srolel/message-rpc/blob/76c27ea/src/index.ts#L38)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definition` | Partial‹[MessageRPCDefWithContext](../modules/_index_.md#messagerpcdefwithcontext)‹T›› | {} |
`options` | [MessageRPCOptions](../modules/_index_.md#messagerpcoptions) | {} |

**Returns:** *[MessageRPC](_index_.messagerpc.md)*

## Properties

### `Private` definition

• **definition**: *Partial‹[MessageRPCDefWithContext](../modules/_index_.md#messagerpcdefwithcontext)‹T››*

*Defined in [index.ts:41](https://github.com/srolel/message-rpc/blob/76c27ea/src/index.ts#L41)*

___

###  tag

• **tag**: *[MessageRPCTag](../modules/_index_.md#messagerpctag)* = "__default_tag__"

*Defined in [index.ts:38](https://github.com/srolel/message-rpc/blob/76c27ea/src/index.ts#L38)*

## Methods

###  client

▸ **client**(`sender`: [MessageSender](../modules/_index_.md#messagesender)): *T*

*Defined in [index.ts:105](https://github.com/srolel/message-rpc/blob/76c27ea/src/index.ts#L105)*

Get a client, using a provided sender. The global process object is used by default.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`sender` | [MessageSender](../modules/_index_.md#messagesender) | process |   |

**Returns:** *T*

___

###  config

▸ **config**(`options`: [MessageRPCOptions](../modules/_index_.md#messagerpcoptions)): *this*

*Defined in [index.ts:69](https://github.com/srolel/message-rpc/blob/76c27ea/src/index.ts#L69)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MessageRPCOptions](../modules/_index_.md#messagerpcoptions) |

**Returns:** *this*

___

###  extend

▸ **extend**(`extension`: Partial‹[MessageRPCDefWithContext](../modules/_index_.md#messagerpcdefwithcontext)‹T››): *this*

*Defined in [index.ts:79](https://github.com/srolel/message-rpc/blob/76c27ea/src/index.ts#L79)*

RPC interface methods can be implemented later. This is useful, for example,
for implementations that depend on the master node in the cluster.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`extension` | Partial‹[MessageRPCDefWithContext](../modules/_index_.md#messagerpcdefwithcontext)‹T›› |   |

**Returns:** *this*

___

### `Private` generateTag

▸ **generateTag**(`options`: [MessageRPCOptions](../modules/_index_.md#messagerpcoptions)): *[MessageRPCTag](../modules/_index_.md#messagerpctag)*

*Defined in [index.ts:54](https://github.com/srolel/message-rpc/blob/76c27ea/src/index.ts#L54)*

Generates a tag (identifier) for the RPC interface. This is needed for it
to work across different processes. It can be provided with the options object,
otherwise it is inferred by where the RPC was instantiated or a hash of the
RPC definition object if provided.

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`options` | [MessageRPCOptions](../modules/_index_.md#messagerpcoptions) |   |

**Returns:** *[MessageRPCTag](../modules/_index_.md#messagerpctag)*

___

###  register

▸ **register**(`receiver`: [MessageReceiver](../modules/_index_.md#messagereceiver)): *this*

*Defined in [index.ts:89](https://github.com/srolel/message-rpc/blob/76c27ea/src/index.ts#L89)*

Register an RPC message receiver. The global process object is used by default.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`receiver` | [MessageReceiver](../modules/_index_.md#messagereceiver) | process |   |

**Returns:** *this*
