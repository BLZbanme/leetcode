/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.keys = [];
    this.vals = [];
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    let index = this.keys.indexOf(key);
    if (index === -1) {
        return -1;
    }
    else {
        this.keys.splice(index, 1);
        let val = this.vals.splice(index, 1);
        this.keys.push(key);
        this.vals.push(val);
        return val;
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let index = this.keys.indexOf(key);
    if (index === -1) {
        if (this.capacity === this.keys.length) {
            this.keys.shift();
            this.vals.shift();
        }
        this.keys.push(key);
        this.vals.push(value);
    }
    else {
        this.keys.splice(index, 1);
        this.vals.splice(index, 1);
        this.keys.push(key);
        this.vals.push(value);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

 /**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
    this.count = 0;
    this.head = new DLinkedNode();
    this.head.pre = null;

    this.tail = new DLinkedNode();
    this.tail.post = null;

    this.head.post = this.tail;
    this.tail.pre = this.head;
};

function DLinkedNode(key, val) {
    this.key = key;
    this.val = val;
    this.pre = null;
    this.post = null;
}

LRUCache.prototype.addNode = function(node) {
    node.pre = this.head;
    node.post = this.head.post;

    this.head.post.pre = node;
    this.head.post = node;
};

LRUCache.prototype.removeNode = function(node) {
    let pre = node.pre;
    let post = node.post;

    pre.post = post;
    post.pre = pre;
};

LRUCache.prototype.move2Head = function(node) {
    this.removeNode(node);
    this.addNode(node);
};

LRUCache.prototype.popTail = function() {
    let res = this.tail.pre;
    this.removeNode(res);
    return res;
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
    this.move2Head(node);
    return node.val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.cache.get(key);
    if (!node) {
        let newNode = new DLinkedNode(key, value);
        this.cache.set(key, newNode);
        this.addNode(newNode);
        ++count;
        if (count > this.capacity) {
            let tail = this.popTail();
            this.cache.delete(tail.key);
            --count;
        }
    }
    else {
        node.val = value;
        this.move2Head(node);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */