[message-rpc](../globals.md) › ["index"](../modules/_index_.md) › [MessageRPC](_index_.messagerpc.md)

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

*Defined in [index.ts:39](https://github.com/srolel/message-rpc/blob/92ac1a9/src/index.ts#L39)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`definition` | Partial‹[MessageRPCDefWithContext](../modules/_index_.md#messagerpcdefwithcontext)‹T›› | {} |
`options` | [MessageRPCOptions](../modules/_index_.md#messagerpcoptions) | {} |

**Returns:** *[MessageRPC](_index_.messagerpc.md)*

## Properties

### `Private` definition

• **definition**: *Partial‹[MessageRPCDefWithContext](../modules/_index_.md#messagerpcdefwithcontext)‹T››*

*Defined in [index.ts:42](https://github.com/srolel/message-rpc/blob/92ac1a9/src/index.ts#L42)*

___

###  tag

• **tag**: *[MessageRPCTag](../modules/_index_.md#messagerpctag)* = "__default_tag__"

*Defined in [index.ts:39](https://github.com/srolel/message-rpc/blob/92ac1a9/src/index.ts#L39)*

## Methods

###  client

▸ **client**(`sender`: [MessageSender](../modules/_index_.md#messagesender)): *T*

*Defined in [index.ts:105](https://github.com/srolel/message-rpc/blob/92ac1a9/src/index.ts#L105)*

Get a client, using a provided sender. The global process object is used by default.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`sender` | [MessageSender](../modules/_index_.md#messagesender) | process |   |

**Returns:** *T*

___

###  config

▸ **config**(`options`: [MessageRPCOptions](../modules/_index_.md#messagerpcoptions)): *this*

*Defined in [index.ts:70](https://github.com/srolel/message-rpc/blob/92ac1a9/src/index.ts#L70)*

**Parameters:**

Name | Type |
------ | ------ |
`options` | [MessageRPCOptions](../modules/_index_.md#messagerpcoptions) |

**Returns:** *this*

___

###  extend

▸ **extend**(`extension`: Partial‹[MessageRPCDefWithContext](../modules/_index_.md#messagerpcdefwithcontext)‹T››): *this*

*Defined in [index.ts:80](https://github.com/srolel/message-rpc/blob/92ac1a9/src/index.ts#L80)*

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

*Defined in [index.ts:55](https://github.com/srolel/message-rpc/blob/92ac1a9/src/index.ts#L55)*

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

*Defined in [index.ts:89](https://github.com/srolel/message-rpc/blob/92ac1a9/src/index.ts#L89)*

Register an RPC message receiver. The global process object is used by default.

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`receiver` | [MessageReceiver](../modules/_index_.md#messagereceiver) | process |   |

**Returns:** *this*
