[message-rpc](README.md) › [Globals](globals.md)

# message-rpc

![License](https://img.shields.io/github/license/srolel/message-rpc)
![Build](https://img.shields.io/github/workflow/status/srolel/message-rpc/CI/master)
![Coverage](https://img.shields.io/codecov/c/github/srolel/message-rpc)
![Package](https://img.shields.io/npm/v/message-rpc)

# message-rpc

A small, type-safe, convenient RPC wrapper around node.js message passing. Based on a minimal EventEmitter-like interface, and mainly intended for use with the native cluster module.

Requires Node.js >= 6.0.0

[docs](/docs/globals.md)

## Usage through Examples

### Worker to master

```typescript
import { MessageRPC } from 'message-rpc';

// Define a type with methods used for passing messages
type Eventing = {
  response2xx(): void;
  response4xx(): void;
  response5xx(reason: string): void;
};

const eventingRPC = new MessageRPC<Eventing>({
  // Can implement any methods during instantiation or later (or never!)
  response5xx(reason: string): void {
    // Context has an id property with a worker's id (or undefined if the message came from the master node)
    console.log(`Worker ${this.id} returned a 5xx response: ${reason}`);
  },
});

if (cluster.isMaster) {
  // Implement a method anywhere
  eventingRPC.extend({
    response2xx(): void {
      console.log(`Worker ${this.id} returned a 2xx response!`);
      someGlobalMetricsCollecter.response2xxCounter++;
    },
  });

  const workers = [cluster.fork(), cluster.fork()];

  // The RPC implementation will receive messages from both workers
  workers.forEach(worker => eventingRPC.register(worker));
} else {
  // In the worker, serving requests with an express app
  const client = eventingRPC.client();

  app.use((err, req, res, next) => {
    if (err) {
      // Arguments passed to the master node
      eventingRPC.response5xx(err.message);
      res.sendStatus(500);
    } else {
      eventingRPC.response2xx();
      res.send('something');
    }
  });

  app.listen(8080);
}
```

### Master to worker

```typescript
import { MessageRPC } from 'message-rpc';

type Eventing = {
  processMessage(message: string): void;
};

const eventingRPC = new MessageRPC<Eventing>();

if (cluster.isMaster) {
  const workers = [cluster.fork(), cluster.fork()];

  const clients = workers.map(worker => eventingRPC.client(worker));

  messages.forEach((message, i) => {
    // Round robin
    clients[i % clients.length].processMessage(message);
  });
} else {
  // In the worker
  eventingRPC.extend({
    processMessage(message: string) {
      doSomething(message);
    },
  });

  // The RPC implementation will receive messages from the master node
  eventingRPC.register();
}
```
