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
var addTwoNumbers = function(l1, l2) {
    const stack1 = [];
    const stack2 = [];

    let cur1 = l1;
    let cur2 = l2;
    
    while (cur1) {
        stack1.push(cur1);
        cur1 = cur1.next;
    }

    while (cur2) {
        stack2.push(cur2);
        cur2 = cur2.next;
    }

    let fakeHead = new ListNode();

    let carry = 0;
    while (stack1.length || stack2.length) {
        let a = stack1.length ? stack1.pop().val : 0;
        let b = stack2.length ? stack2.pop().val : 0;
        let sum = a + b + carry;
        carry = Math.floor(sum / 10);
        sum %= 10;
        let node = new ListNode(sum);
        node.next = fakeHead.next;
        fakeHead.next = node;
    }

    if (carry) {
        let node = new ListNode(carry);
        node.next = fakeHead.next;
        fakeHead.next = node;
    }

    return fakeHead.next;
};