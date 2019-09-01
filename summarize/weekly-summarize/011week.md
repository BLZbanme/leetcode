# 147. Insertion Sort List

Sort a linked list in *O*(*n* log *n*) time using constant space complexity.

**Example 1:**

```
Input: 4->2->1->3
Output: 1->2->3->4
```

**Example 2:**

```
Input: -1->5->3->4->0
Output: -1->0->3->4->5
```

##### 2019.08.27

##### 我的方法：

​		*O*(*n* log *n*)满足要求的只要快排，归并和堆排序，由于快排和堆排序在链表中的不是很好操作。所以我第一反应就是用归并排序。而自底向上的归并排序我感觉边界条件不是很好写，所以我选择写的自顶向下的递归版，效果还不错。

##### 注：思路基本跟高亮答案一样，可喜可贺，使用了之前刷题学到的用两个指针，其中一个每次遍历两步长，来找到中间结点。然后我把中间结点的next置为null，这样递归的时候边界容易判断是否遍历到终点了

```javascript
var sortList = function(head) {
    let result = up2downMergeSort(head);
    return result;
};

function up2downMergeSort(head) {
    if (!head || !head.next) {
        return head;
    }
    let cur = head;
    let twoPace = head;
    while (twoPace.next && twoPace.next.next) {
        cur = cur.next;
        twoPace = twoPace.next.next;
    }
    twoPace = cur.next;
    cur.next = null;
    head = up2downMergeSort(head);
    twoPace = up2downMergeSort(twoPace);
    return merge(head, twoPace);
}

function merge(head1, head2) {
    let fakerHead = new ListNode(-Infinity);
    let cur = fakerHead;
    while (head1 && head2) {
        if (head1.val < head2.val) {
            cur.next = head1;
            head1 = head1.next;
        }
        else {
            cur.next = head2;
            head2 = head2.next;
        }
        cur = cur.next;
    }

    if (head1) {
        cur.next = head1;
    }

    if (head2) {
        cur.next = head2;
    }

    return fakerHead.next;
}
```

# 146. LRU Cache

Design and implement a data structure for [Least Recently Used (LRU) cache](https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU). It should support the following operations: `get` and `put`.

`get(key)` - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
`put(key, value)` - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.

The cache is initialized with a **positive** capacity.

**Follow up:**
Could you do both operations in **O(1)** time complexity?

**Example:**

```
LRUCache cache = new LRUCache( 2 /* capacity */ );

cache.put(1, 1);
cache.put(2, 2);
cache.get(1);       // returns 1
cache.put(3, 3);    // evicts key 2
cache.get(2);       // returns -1 (not found)
cache.put(4, 4);    // evicts key 1
cache.get(1);       // returns -1 (not found)
cache.get(3);       // returns 3
cache.get(4);       // returns 4
```

##### 2019.08.14

##### 我的方法：

​		用数组实现的，很多操作复杂度是O(n)，不给力

```javascript
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
```

##### 别人的方法：

​	带头、尾结点的双向链表 + 一个HashMap

```javascript
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
```

# 153. Find Minimum in Rotated Sorted Array

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e.,  `[0,1,2,4,5,6,7]` might become  `[4,5,6,7,0,1,2]`).

Find the minimum element.

You may assume no duplicate exists in the array.

**Example 1:**

```
Input: [3,4,5,1,2] 
Output: 1
```

**Example 2:**

```
Input: [4,5,6,7,0,1,2]
Output: 0
```

##### 2019.09.01

##### 我的思路：

​		这种题必是二分查找

```javascript
var findMin = function(nums) {
    let lo = 0;
    let hi = nums.length;
    const N = nums.length - 1;
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        if ((mid == 0 && nums[0] < nums[N]) || (nums[mid] < nums[mid - 1])) {
            return nums[mid];
        }
        else if (nums[mid] > nums[N]) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return nums[lo];
};

```

##### 别人的写法:

​		改良的二分查找

```javascript
var findMin = function(nums) {
    let start = 0;
    let end = nums.length - 1;
    while (start < end) {
        if (nums[start] < nums[end]) {
            return nums[start];
        }
        let mid = Math.floor((start + end) / 2);
        if (nums[mid] >= nums[start]) {
            start = mid + 1;
        }
        else {
            end = mid;
        }
    }
    return nums[start];
};
```

