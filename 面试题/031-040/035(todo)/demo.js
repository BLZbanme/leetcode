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