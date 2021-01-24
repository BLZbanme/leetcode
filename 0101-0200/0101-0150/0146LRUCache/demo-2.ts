class LRUCache {
    head: DListNode
    tail: DListNode
    size: number = 0
    maxSize: number
    cache: Map<number, DListNode>

    constructor(capacity: number) {
        this.maxSize = capacity;
        this.head = new DListNode();
        this.tail = new DListNode();
        this.cache = new Map<number, DListNode>();
        this.head.next = this.tail;
        this.tail.pre = this.head;
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            const node = this.cache.get(key)!;
            if (node !== this.tail.next) {
                this.removeNode(node);
                this.insertAfterHead(node);
            }
            return node.value!;
        }
        return -1;
    }

    put(key: number, value: number): void {
        if (this.cache.has(key)) {
            const node = this.cache.get(key)!;
            node.value = value;
            this.get(key);
        }
        else {
            const node = new DListNode(key, value);
            this.insertAfterHead(node);
            if (this.size > this.maxSize) {
                const lastNode = this.tail.pre! 
                this.cache.delete(lastNode.key!);
                this.removeNode(lastNode);
            }
            this.cache.set(key, node);
        }
    }

    removeNode(node: DListNode) {
        //取出
        node.pre!.next = node.next;
        node.next!.pre = node.pre;
        this.size--;
    }

    insertAfterHead(node: DListNode) {
        //插到头节点后边
        node.next = this.head.next;
        this.head.next!.pre = node;
        this.head.next = node;
        node.pre = this.head;
        this.size++;
    }
}

class DListNode {
    key?: number
    value?: number
    pre: DListNode | null
    next: DListNode | null

    constructor(key?: number, value?: number) {
        this.key = key;
        this.value = value;
        this.pre = null;
        this.next = null;
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */