/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) {
        return null;
    }

    let p = headA;
    let q = headB;
    while (p !== q) {
        p = p ? p.next : headB;
        q = q ? q.next : headA;
    }
    return p;
};