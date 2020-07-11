/**
 * // Definition for a Node.
 * function Node(val, next, random) {
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
    let cur = head;
    let fakeHead = new Node();
    let pre = fakeHead;

    while(cur) {

        let tmp = map.get(cur) || new Node(cur.val);

        map.set(cur, tmp);

        if (cur.random) {
            let random =  map.get(cur.random) || new Node(cur.random.val);
            map.set(cur.random, random);
            tmp.random = random;
        }

        pre.next = tmp;
        pre = pre.next;
        cur = cur.next;
    }

    return fakeHead.next;
};

var copyRandomList = function(head) {
    let map = new Map();
    let cur = head;

    while(cur) {
        let tmp = { ...cur };
        map.set(cur, tmp);
        cur = cur.next;
    }

    cur = head;
    while (cur) {
        cur.next && (map.get(cur).next = map.get(cur.next));
        cur.random && (map.get(cur).random = map.get(cur.random));
        cur = cur.next;
    }

    return map.get(head);
};

var copyRandomList = function(head) {
    let cur = head;
    let next;
    while (cur) {
        next = cur.next;
        let copy = new Node(cur.val);
        cur.next = copy;
        copy.next = next;
        cur = next;
    }

    cur = head;
    while (cur) {
        if (cur.random) {
            cur.next.random = cur.random.next;
        }
        cur = cur.next.next;
    }

    cur = head;
    let fakeHead = new Node();
    let copy = fakeHead;
    let copyCur = fakeHead;
    while (cur) {
        next = cur.next.next;
        copy = cur.next;
        copyCur.next = copy;
        copyCur = copy;

        cur.next = next;
        cur = next;
    }

    return fakeHead.next;
};

function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random ;
};

var a = new Node(7);
var b = new Node(13);
var c = new Node(11);
var d = new Node(10);
var e = new Node(1);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

b.random = a;
c.random = e;
d.random = c;
e.random = a;

console.log(copyRandomList(a))