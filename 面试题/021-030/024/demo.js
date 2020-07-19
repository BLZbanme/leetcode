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
var reverseList = function(head) {
    let fakeHead = new ListNode();

    while (head) {
        let tmp = head.next;
        head.next = fakeHead.next;
        fakeHead.next = head;
        head = tmp;
    }

    return fakeHead.next;
};

var reverseList = function(head) {
    let cur = null;
    
    while (head) {
        let tmp = head.next;
        head.next = cur;
        cur = head;
        head = tmp;
    }

    return cur;
};

var reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let next = reverseList(head.next);
    head.next.next = head;
    head.next = null;

    return next;;
};