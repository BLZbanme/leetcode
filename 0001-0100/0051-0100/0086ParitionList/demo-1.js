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
function partition(head, x) {
    var fakeHead = new ListNode();
    fakeHead.next = head;
    var pre = fakeHead;
    var cur = head;
    var smallFakeHead = new ListNode();
    var fakeCur = smallFakeHead;
    var firstBig = null;
    while (cur) {
        if (cur.val < x) {
            pre.next = pre.next.next;
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
}
;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
var a = new ListNode(1);
var b = new ListNode(1);
a.next = b;
console.log(partition(a, 2));
