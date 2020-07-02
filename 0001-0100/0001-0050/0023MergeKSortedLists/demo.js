/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    let len = lists.length;
    lists.unshift(null);

    for (let k = len; k >= 1; k--) {
        if (!lists[k]) {
            [lists[k], lists[len--]] = [lists[len], lists[k]];
        }
        sink(k, len, lists);
    }

    let fakeHead = new ListNode();
    let cur = fakeHead;
    while (true) {
        if (!lists[1]) {
            break;
        }
        cur.next = lists[1];
        cur = cur.next;
        lists[1] = lists[1].next;
        if (!lists[1]) {
            [lists[1], lists[len--]] = [lists[len], lists[1]];
        }
        sink(1, len, lists);
    }
    return fakeHead.next;
};

function sink(i, length, list) {
    while (i << 1 <= length) {
        let j = i << 1;
        if (j < length && list[j].val > list[j + 1].val) {
            j++;
        }
        if (list[i].val <= list[j].val) {
            break;
        }
        [list[i], list[j]] = [list[j], list[i]];
        i = j;
    }
}


class MinPQ {

    constructor() {
        this.size = 0;
        this.pq = [];
    }

    isEmpty() {
        return this.size === 0;
    }

    get length() {
        return this.size;
    }

    insert(obj) {
        this.pq[++this.size] = obj;
        this.swim(this.size);
    }

    delMin() {
        if (!this.isEmpty()) {
            let result =  this.pq[1];
            this.exch(1, this.size);
            this.pq[this.size--] = null;
            this.sink(1);
            return result;
        }
    }

    swim(k) {
        while (k > 1 && this.pq[k].val < this.pq[Math.floor(k / 2)].val) {
            let khalf = Math.floor(k / 2);
            this.exch(k, khalf);
            k = khalf;
        }
    }

    sink(k) {
        while (2 * k <= this.size) {
            let j = 2 * k;
            if (j < this.size && this.pq[j].val > this.pq[j + 1].val) {
                j++;
            }
            if (this.pq[k].val <= this.pq[j].val) {
                break;
            }
            this.exch(k, j);
            k = j;
        }
    }

    exch(i, j) {
        [this.pq[i], this.pq[j]] = [this.pq[j], this.pq[i]];
    }
}

var mergeKLists = function(lists) {
    let fakeHead = new ListNode();
    let cur = fakeHead;
    const pq = new MinPQ();

    for (let list of lists) {
        if (list) {
            pq.insert(list);
        }   
    }

    while (!pq.isEmpty()) {
        cur.next = pq.delMin();
        cur = cur.next;
        if (cur.next) {
            pq.insert(cur.next);
        }
    }

    return fakeHead.next;
}

var mergeKLists = function(lists) {
    if (!lists || !lists.length) {
        return null;
    }

    return merge(lists, 0, lists.length - 1);
}

function merge(lists, left, right) {
    if (left == right) {
        return lists[left];
    }
    if (left > right) {
        return null;
    }
    let mid = left + ((right - left) >> 1);
    let l1 = merge(lists, left, mid);
    let l2 = merge(lists, mid + 1, right);
    return mergeTwoLists(l1, l2);
}

function mergeTwoLists(l1, l2) {
    let fakeHead = new ListNode();
    let cur = fakeHead;
    while (l1 && l2) {
        if (l1.val <= l2.val) {
            cur.next = l1;
            l1 = l1.next;
        }
        else {
            cur.next = l2;
            l2 = l2.next;  
        }
        cur = cur.next;
    }
    while (l1) {
        cur.next = l1;
        l1 = l1.next;
        cur = cur.next;
    }

    while (l2) {
        cur.next = l2;
        l2 = l2.next;
        cur = cur.next;
    }
    return fakeHead.next;
}

var a = new ListNode(2);
var b = new ListNode(-1);


function ListNode(val) {
    this.val = val;
    this.next = null;
}

console.log(mergeKLists([a, null, b]));

console.log(mergeKLists([null]));

var a = new ListNode(1);


function ListNode(val) {
    this.val = val;
    this.next = null;
}

console.log(mergeKLists([null, a]));

var a = new ListNode(1);
var b = new ListNode(4);
var c = new ListNode(5);
a.next = b;
b.next = c;

var d = new ListNode(1);
var e = new ListNode(3);
var f = new ListNode(4);
d.next = e;
e.next = f;

var g = new ListNode(2);
var h = new ListNode(6);
g.next = h;

function ListNode(val) {
    this.val = val;
    this.next = null;
}

console.log(mergeKLists([a, d, g]));