/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let one = head;
    let two = head;
    while (two && two.next) {
        one = one.next;
        two = two.next.next;
    }

    return one;
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
a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(middleNode(a));

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
var f = new ListNode(6);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
console.log(middleNode(a));

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
var f = new ListNode(6);
var g = new ListNode(7);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
console.log(middleNode(a));



