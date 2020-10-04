function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let fakeHead = new ListNode();
    let cur = fakeHead;
    let pre = 0;
    while (l1 || l2 || pre) {
        let a = l1 ? l1.val : 0;
        let b = l2 ? l2.val : 0;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
        let tmp = a + b + pre;
        pre = Math.floor(tmp / 10);
        cur.next = new ListNode(tmp % 10);
        cur = cur.next;
    }
    return fakeHead.next;
};

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

var a = new ListNode(2);
var b = new ListNode(4);
var c = new ListNode(3);
a.next = b;
b.next = c;

var d = new ListNode(5);
var e = new ListNode(6);
var f = new ListNode(4);

d.next = e;
e.next = f;

console.log(addTwoNumbers(a, d));