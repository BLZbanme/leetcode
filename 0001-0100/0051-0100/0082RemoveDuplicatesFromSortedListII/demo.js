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
var deleteDuplicates = function(head) {
    let tmpHead = new ListNode(0);
    tmpHead.next = head;
    let pre = tmpHead;
    let tmp = head;
    while (tmp) {
        if (tmp.next && tmp.val === tmp.next.val) {
            tmp = tmp.next;
            while (tmp.next && tmp.val === tmp.next.val) {
                tmp = tmp.next;
            }
            tmp = tmp.next
            if (!tmp) {
                pre.next = tmp;
            }
        }
        else {
            pre.next = tmp;
            pre = tmp;
            tmp = tmp.next;
        }
    }
    return tmpHead.next;
};

var deleteDuplicates = function(head) {
    let tmpHead = new ListNode(0);
    tmpHead.next = head;
    let pre = tmpHead;
    let cur = head;
    while (cur) {
        while (cur.next && cur.val === cur.next.val) {
            cur = cur.next;
        }
        if (pre.next == cur) {
            pre = pre.next;
        }
        else {
            pre.next = cur.next;
        }
        cur = cur.next;
    }
    return tmpHead.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(3);
var e = new ListNode(4);
var f = new ListNode(4);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(deleteDuplicates(a));

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(3);
var e = new ListNode(4);
var f = new ListNode(4);
var g = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

console.log(deleteDuplicates(a));


var a = new ListNode(1);
var b = new ListNode(1);
var c = new ListNode(1);
var d = new ListNode(2);
var e = new ListNode(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(deleteDuplicates(a));

var a = new ListNode(1);
var b = new ListNode(1);
var c = new ListNode(1);
a.next = b;
b.next = c;
console.log(deleteDuplicates(a));