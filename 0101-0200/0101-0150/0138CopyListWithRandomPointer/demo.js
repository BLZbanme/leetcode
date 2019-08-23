/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    let map = new Map();
    let fakerHead = new Node(0);
    let cur = head;
    let fakerCur = fakerHead;
    while (cur) {
        let newNode;
        if (!map.has(cur)) {
            newNode = new Node(cur.val);
            map.set(cur, newNode);
        }
        else {
            newNode = map.get(cur);
        }
        if (cur.random) {
            if (!map.has(cur.random)) {
                let newRandomNode = new Node(cur.random.val);
                map.set(cur.random, newRandomNode);
                newNode.random = newRandomNode;
            }
            else {
                newNode.random = map.get(cur.random);
            }
        }
        fakerCur.next = newNode;
        fakerCur = fakerCur.next;
        cur = cur.next;
    }
    return fakerHead.next;
};

var copyRandomList = function(head) {
    let map = new Map();
    let fakerHead = new Node(0);
    let cur = head;
    let fakerCur = fakerHead;
    while (cur) {
        let newNode;
        if (!map.has(cur.val)) {
            newNode = new Node(cur.val);
            map.set(cur.val, newNode);
        }
        else {
            newNode = map.get(cur.val);
        }
        if (cur.random) {
            if (!map.has(cur.random.val)) {
                let newRandomNode = new Node(cur.random.val);
                map.set(cur.random.val, newRandomNode);
                newNode.random = newRandomNode;
            }
            else {
                newNode.random = map.get(cur.random.val);
            }
        }
        fakerCur.next = newNode;
        fakerCur = fakerCur.next;
        cur = cur.next;
    }
    return fakerHead.next;
};

var copyRandomList = function(head) {
    if (!head) {
        return null;
    }
    let map = new Map();
    let cur = head;
    while (cur) {
        map.set(cur, new Node(cur.val));
        cur = cur.next;
    }

    cur = head;
    while (cur) {
        if (cur.next) {
            map.get(cur).next = map.get(cur.next);
        }
        if (cur.random){
            map.get(cur).random = map.get(cur.random);
        }
        cur = cur.next;
    }
    return map.get(head);
}

var copyRandomList = function(head) {
    let iter = head;
    let next;
    while (iter) {
        next = iter.next;

        let copy = new Node(iter.val);
        iter.next = copy;
        copy.next = next;

        iter = next;
    }

    iter = head;
    while (iter) {
        if (iter.random) {
            iter.next.random = iter.random.next;
        }
        iter = iter.next.next;
    }

    iter = head;
    let fakerHead = new Node(0);
    let copy = fakerHead;
    let copyIter = fakerHead;
    while (iter) {
        next = iter.next.next;

        copy = iter.next;
        copyIter.next = copy;
        copyIter = copy;
        
        iter.next = next;
        iter = next;
    }
    return fakerHead.next;
}

function Node(val,next,random) {
    this.val = val;
    this.next = next;
    this.random = random;
};

var a = new Node(1);
var b = new Node(2);

a.next = b;
a.random = b;
b.random = b;

console.log(copyRandomList(a));