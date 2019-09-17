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
    let fakeHead = new ListNode(0);
    let cur = head;
    while (cur) {
        let tmp = cur.next;
        cur.next = fakeHead.next;
        fakeHead.next = cur;
        cur = tmp;
    }
    return fakeHead.next;
};

var reverseList = function(head) {
    let fakeHead = null;
    while (head) {
        let tmp = head.next;
        head.next = fakeHead;
        fakeHead = head;
        head = tmp;
    }
    return fakeHead;
};

var reverseList = function(head) {
    return reverseListInt(head, null);
}

function reverseListInt(node, newNode) {
    if (!node) {
        return newNode;
    }
    let next = node.next;
    node.next = newNode;
    return reverseListInt(next, node);
}