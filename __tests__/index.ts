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

    it('basic', () => {
        let counter = 0;
        const rpc = new MessageRPC<{ count: () => void }>({
            count: (): number => counter++,
        });

        rpc.register(reciever);
        const client = rpc.client(sender);

        client.count();

        expect(counter).toEqual(1);
    });

    it('with extend', () => {
        let counter = 0;
        const rpc = new MessageRPC<{ count: () => void }>();

        rpc.extend({
            count: (): number => counter++,
        });

        rpc.register(reciever);
        const client = rpc.client(sender);

        client.count();

        expect(counter).toEqual(1);
    });

    it('multiple rpcs', () => {
        let counter = 0;
        const rpc1 = new MessageRPC<{ count: () => void }>({
            count: (): number => counter++,
        });
        const rpc2 = new MessageRPC<{ count: () => void }>({
            count: (): number => counter++,
        });

        rpc1.register(reciever);
        rpc1.client(sender).count();

        rpc2.register(reciever);
        rpc2.client(sender).count();

        expect(counter).toEqual(2);
    });

    it('multiple clients', () => {
        let counter = 0;
        const rpc = new MessageRPC<{ count: () => void }>({
            count: (): number => counter++,
        });

        rpc.register(reciever);
        rpc.client(sender).count();
        rpc.client(sender).count();

        expect(counter).toEqual(2);
    });

    it('multiple calls', () => {
        let counter = 0;
        const rpc = new MessageRPC<{ count: () => void }>({
            count: (): number => counter++,
        });

        rpc.register(reciever);
        const client = rpc.client(sender);
        client.count();
        client.count();

        expect(counter).toEqual(2);
    });

    it('setting tag', () => {
        let counter = 0;
        const rpc = new MessageRPC<{ count: () => void }>(
            {
                count: (): number => counter++,
            },
            { tag: 'tag' },
        );

        rpc.register(reciever);
        const client = rpc.client(sender);

        client.count();

        expect(counter).toEqual(1);
    });

    it('method not implemented', () => {
        const counter = 0;
        const rpc = new MessageRPC<{ count: () => void }>();

        rpc.register(reciever);
        const client = rpc.client(sender);

        client.count();

        expect(counter).toEqual(0);
    });
});
