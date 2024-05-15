type Node<T> = {
    val: T,
    prev?: Node<T>
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        this.length++;
        const node = { val: item } as Node<T>;
        
        if (!this.head) {
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
    }

    pop(): T | undefined {
        this.length = Math.max(0, this.length - 1);

        if (!this.head) {
            return undefined;
        }

        const head = this.head;
        this.head = head.prev;
        head.prev = undefined;
        return head.val;

    }

    peek(): T | undefined {
        return this.head?.val;
    }
}