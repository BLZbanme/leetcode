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
var detectCycle = function(head) {
    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return head;
        }
        set.add(head);
        head = head.next;
    }
    return null;
};

var detectCycle = function(head) {
    let fast = head;
    let slow = head;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            return fast;
        }
    }
    return null;
}

var detectCycle = function(head) {
    if (!head) {
        return null;
    }
    let fast = head;
    let slow = head;
    let isCycle = false;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            isCycle = true;
            break;
        }
    }
    if (!isCycle) {
        return null;
    }
    slow = head;
    while (slow !== fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}