/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function(head, val) {
    let fakeHead = new ListNode();
    fakeHead.next = head;
    let pre = fakeHead;
    let cur = head;

    while (cur && cur.val != val) {
        pre = cur;
        cur = cur.next;
    }

    if (cur) {
        pre.next = cur.next;
    }
    return fakeHead.next;
};

var deleteNode = function(head, val) {

    if (!head) {
        return null;
    }

    if (head.val == val) {
        return head.next;
    }

    let cur = head;
    while (cur.next && cur.next.val != val) {
        cur = cur.next;
    }
    if (cur.next) {
        cur.next = cur.next.next;
    }
    return head;
};