import { MessageRPC, MessageSender, MessageReceiver } from '../src';

describe('MessageRPC', () => {
    const listeners: Function[] = [];
    const reciever: MessageReceiver = {
        on(_message, listener) {
            listeners.push(listener);
        },
    };
    const sender: MessageSender = {
        send(message) {
            listeners.forEach(fn => fn(message));
        },
    };

    it('should  pass the message to receiver', () => {
        let counter = 0;
        const rpc = new MessageRPC<{ count: () => void }>({
            count: (): number => counter++,
        });

        rpc.register(reciever);
        const client = rpc.client(sender);

        client.count();

        expect(counter).toEqual(1);
    });
});
