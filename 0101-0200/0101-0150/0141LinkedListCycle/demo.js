/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return true;
        }
        set.add(head);
        head = head.next;
    }
    return false;
};

var hasCycle = function(head) {
    if (!head) {
        return false;
    }
    let walker = head;
    let runner = head;
    while (runner.next && runner.next.next) {
        walker = walker.next;
        runner = runner.next.next;
        if (walker === runner) {
            return true;
        }
    }
    return false;
}