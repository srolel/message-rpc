# message-rpc

A type-safe, convenient RPC wrapper around node.js message passing. Based on a minimal EventEmitter-like interface, and mainly intended for use with the native cluster module.

Requires Node.js >= 6.0.0

[docs](docs/globals.md)

## Examples

### Worker to master

```typescript
type Eventing = {
  response2xx(): void;
  response4xx(): void;
  response5xx(reason: string): void;
};

const eventingRPC = new MessageRPC<Eventing>({
  // Can implement any methods during instantiation or later (or never!)
  response5xx(reason: string): void {
    console.log(`Worker ${this.id} returned a 5xx response: ${reason}`);
  },
});

if (cluster.isMaster) {
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
