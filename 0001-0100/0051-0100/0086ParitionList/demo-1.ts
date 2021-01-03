/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function partition(head: ListNode | null, x: number): ListNode | null {
    let fakeHead = new ListNode();
    fakeHead.next = head;
    let pre = fakeHead;
    let cur = head;
    let smallFakeHead = new ListNode();
    let fakeCur = smallFakeHead;
    let firstBig = null;
    while (cur) {
        if (cur.val < x) {
            pre.next = pre.next!.next;
            fakeCur.next = cur;
            fakeCur = fakeCur.next;
        }
        else {
            if (!firstBig) {
                firstBig = cur;
            }
            pre = cur;
        }
        cur = cur.next;
    }
    fakeCur.next = firstBig;
    return smallFakeHead.next;
};

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

var a = new ListNode(1);
var b = new ListNode(1);
a.next = b;
console.log(partition(a, 2))