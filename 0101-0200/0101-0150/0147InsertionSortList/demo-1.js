"use strict";
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
function insertionSortList(head) {
    var cur = head;
    var fakeHead = new ListNode();
    while (cur) {
        var next = cur.next;
        var thePre = fakeHead;
        while (thePre.next && thePre.next.val < cur.val) {
            thePre = thePre.next;
        }
        cur.next = thePre.next;
        thePre.next = cur;
        cur = next;
    }
    return fakeHead.next;
}
;
