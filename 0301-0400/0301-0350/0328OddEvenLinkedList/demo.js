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
var oddEvenList = function(head) {
    if (!head) {
        return head;
    }

    let oddHead = new ListNode(0);
    let evenHead = new ListNode(0);
    let oddCur = oddHead;
    let evenCur = evenHead;
    let p = head;
    let q = head.next;
    while (p && q) {
        oddCur.next = p;
        oddCur = p;
        p = q.next;
        
        evenCur.next = q;
        evenCur = q;
        if (q.next) {
            q = q.next.next;
        }
    }
    if (p) {
        oddCur.next = p;
        oddCur = p;
        evenCur.next = null;
    }
    oddCur.next = evenHead.next;
    return oddHead.next;
};

var oddEvenList = function(head) {
    if (head) {
        let odd = head;
        let even = head.next;
        let evenHead = even;
        while (even && even.next) {
            odd.next = odd.next.next;
            even.next = even.next.next;
            odd = odd.next;
            even = even.next;
        }
        odd.next = evenHead;
    }
    return head;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(1)
var b = new ListNode(2)
var c = new ListNode(3)
var d = new ListNode(4)
var e = new ListNode(5)
var f = new ListNode(6)
var g = new ListNode(7)
var h = new ListNode(8)
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
g.next = h;
console.log(oddEvenList(a));

var a = new ListNode(1)
var b = new ListNode(2)
var c = new ListNode(3)
var d = new ListNode(4)
var e = new ListNode(5)
a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(oddEvenList(a));

var a = new ListNode(2)
var b = new ListNode(1)
var c = new ListNode(3)
var d = new ListNode(5)
var e = new ListNode(6)
var f = new ListNode(4)
var g = new ListNode(7)
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(oddEvenList(a));