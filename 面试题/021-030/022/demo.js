/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    let cur = head;
    while (k--) {
        cur = cur.next;
    }

    let now = head;
    while (cur) {
        cur = cur.next;
        now = now.next;
    }

    return now;
};