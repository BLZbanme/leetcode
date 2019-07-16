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
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let pre = fakeHead;
    let tmp = head;
    while (tmp) {
        while (tmp.next && tmp.next.val === tmp.val) {
            tmp = tmp.next;
        }
        pre.next = tmp;
        pre = tmp;
        tmp = tmp.next;
    }
    return fakeHead.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(1);
var b = new ListNode(1);
var c = new ListNode(1);

a.next = b;
b.next = c;
console.log(deleteDuplicates(a));

var a = new ListNode(1);
var b = new ListNode(1);
var c = new ListNode(2);
var d = new ListNode(2);
var e = new ListNode(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(deleteDuplicates(a));

var a = new ListNode(1);
var b = new ListNode(1);
var c = new ListNode(2);

a.next = b;
b.next = c;

console.log(deleteDuplicates(a));
