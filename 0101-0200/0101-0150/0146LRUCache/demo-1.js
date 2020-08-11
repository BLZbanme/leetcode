/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.cache = new Map();
    this.size = capacity;
    this.head = new DLinkedNode();
    this.tail = new DLinkedNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let node = this.cache.get(key);
    if (!node) {
        return -1;
    }
    node.prev.next = node.next;
    node.next.prev = node.prev;

    this.head.next.prev = node;
    node.next = this.head.next;
    this.head.next = node;
    node.prev = this.head;

    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    // debugger
    let tmp = this.cache.get(key);
    if (tmp) {
        tmp.val = value;

        tmp.prev.next = tmp.next;
        tmp.next.prev = tmp.prev;

        this.head.next.prev = tmp;
        tmp.next = this.head.next;
        this.head.next = tmp;
        tmp.prev = this.head;
        return;
    }

    if (!this.size) {
        this.cache.delete(this.tail.prev.key);
        this.tail.prev = this.tail.prev.prev;
        this.tail.prev.next = this.tail;
        this.size++;
    }
    this.size--;
    let node = new DLinkedNode(key, value);
    this.cache.set(key, node);
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
    node.prev = this.head;
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

function DLinkedNode(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
}

var cache = new LRUCache(2);
cache.put(1, 1);
cache.put(2, 2);
cache.get(1);
cache.put(3, 3);
cache.get(2);
cache.put(4, 4);
cache.get(1);
cache.get(3);
cache.get(4);