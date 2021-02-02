"use strict";
var LRUCache = /** @class */ (function () {
    function LRUCache(capacity) {
        this.size = 0;
        this.maxSize = capacity;
        this.head = new DListNode();
        this.tail = new DListNode();
        this.cache = new Map();
        this.head.next = this.tail;
        this.tail.pre = this.head;
    }
    LRUCache.prototype.get = function (key) {
        if (this.cache.has(key)) {
            var node = this.cache.get(key);
            if (node !== this.tail.next) {
                this.removeNode(node);
                this.insertAfterHead(node);
            }
            return node.value;
        }
        return -1;
    };
    LRUCache.prototype.put = function (key, value) {
        if (this.cache.has(key)) {
            var node = this.cache.get(key);
            node.value = value;
            this.get(key);
        }
        else {
            var node = new DListNode(key, value);
            this.insertAfterHead(node);
            if (this.size > this.maxSize) {
                var lastNode = this.tail.pre;
                this.cache.delete(lastNode.key);
                this.removeNode(lastNode);
            }
            this.cache.set(key, node);
        }
    };
    LRUCache.prototype.removeNode = function (node) {
        //取出
        node.pre.next = node.next;
        node.next.pre = node.pre;
        this.size--;
    };
    LRUCache.prototype.insertAfterHead = function (node) {
        //插到头节点后边
        node.next = this.head.next;
        this.head.next.pre = node;
        this.head.next = node;
        node.pre = this.head;
        this.size++;
    };
    return LRUCache;
}());
var DListNode = /** @class */ (function () {
    function DListNode(key, value) {
        this.key = key;
        this.value = value;
        this.pre = null;
        this.next = null;
    }
    return DListNode;
}());
/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */ 
