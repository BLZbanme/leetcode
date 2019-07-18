/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function(head, m, n) {
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let p = fakeHead;
    m--;
    n--;
    while (m) {
        p = p.next;
        m--;
        n--;
    }
    let mthPre = p;
    let mthNode = p.next;
    let q = mthNode;
    while (n) {
        let tmp = q.next;
        q.next = tmp.next;
        tmp.next = mthPre.next;
        mthPre.next = tmp;
        n--;
    }
    return fakeHead.next;
};

var reverseBetween = function(head, m, n) {
    if (m === n) {
        return head;
    }
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let p = fakeHead;
    m--;
    while (m) {
        p = p.next;
        m--;
        n--;
    }
    let mthPre = p;
    let mthNode = p.next;
    let q = mthNode;
    let tmpHead = new ListNode(0);
    while (n) {
        let tmp = q;
        q = q.next;
        tmp.next = tmpHead.next;
        tmpHead.next = tmp;
        n--;
    }
    mthNode.next = q;
    mthPre.next = tmpHead.next;
    return fakeHead.next;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(1)
var b = new ListNode(2)
var c = new ListNode(3)
var d = new ListNode(4)
var e = new ListNode(5)
a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(reverseBetween(a, 2, 4));

var a = new ListNode(1)
var b = new ListNode(2)
var c = new ListNode(3)
var d = new ListNode(4)
var e = new ListNode(5)
a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(reverseBetween(a, 5, 5));
