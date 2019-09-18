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
var removeElements = function(head, val) {
    if (!head) {
        return null;
    }
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let pre = fakeHead;
    let cur = head;
    while (cur) {
        if (cur.val === val) {
            cur = cur.next;
            pre.next = cur;
        }
        else {
            cur = cur.next;
            pre = pre.next;
        }
    }
    return fakeHead.next;
};

var removeElements = function(head, val) {
    if (!head) {
        return null;
    }
    let next = removeElements(head.next, val);
    if (head.val === val) {
        return next;
    }
    head.next = next;
    return head;
}

var removeElements = function(head, val) {
    if (!head) {
        return null;
    }
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let pre = fakeHead;
    while (pre.next) {
        if (pre.next.val === val) {
            pre.next = pre.next.next;
        }
        else {
            pre = pre.next;
        }
    }
    return fakeHead.next;
};