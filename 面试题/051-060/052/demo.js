/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p = headA;
    let q = headB;
    while (p != q) {
        p = p ? p.next : headB;
        q = q ? q.next : headA;
    }
    return p;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
var f = new ListNode(6);
a.next = b;
b.next = c;

d.next = e;
e.next = f;

console.log(getIntersectionNode(a, f));


var a = new ListNode(4);
var b = new ListNode(1);
var c = new ListNode(8);
var d = new ListNode(4);
var e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

var f = new ListNode(5);
var g = new ListNode(0);
var h = new ListNode(1);
f.next = g;
g.next = h;
h.next = c;
console.log(getIntersectionNode(a, f));
