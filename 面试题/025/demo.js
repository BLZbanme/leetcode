/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let fakeHead = new ListNode();
    let cur = fakeHead;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        }
        else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }

    while (l1) {
        cur.next = l1;
        cur = cur.next;
        l1 = l1.next;
    }

    while (l2) {
        cur.next = l2;
        cur = cur.next;
        l2 = l2.next;
    }

    return fakeHead.next;
};

var mergeTwoLists = function(l1, l2) {
    let fakeHead = new ListNode();
    let cur = fakeHead;
    while (l1 && l2) {
        if (l1.val < l2.val) {
            cur.next = l1;
            l1 = l1.next;
        }
        else {
            cur.next = l2;
            l2 = l2.next;
        }
        cur = cur.next;
    }

    cur.next = l1 ? l1 : l2;

    return fakeHead.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}