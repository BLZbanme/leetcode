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
    let fakeHead = new ListNode();
    let cur = fakeHead;
    let carry = 0;
    while (l1 || l2) {
        let a = l1 ? l1.val : 0;
        let b = l2 ? l2.val : 0;
        let tmp = a + b + carry;
        carry = Math.floor(tmp / 10);
        tmp %= 10;
        cur.next = new ListNode(tmp);
        cur = cur.next;

        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    
    if (carry) {
        cur.next = new ListNode(carry);
    }
    
    return fakeHead.next;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(2);
var b = new ListNode(4);
var c = new ListNode(3);
a.next = b;
b.next = c;


var d = new ListNode(5);
var e = new ListNode(6);
var f = new ListNode(6);


d.next = e;
e.next = f;

console.log(addTwoNumbers(a, d)); // 7 0 0 1 

var a = new ListNode(2);
var b = new ListNode(4);
var c = new ListNode(3);
a.next = b;
b.next = c;


var d = new ListNode(5);
var e = new ListNode(6);
var f = new ListNode(4);


d.next = e;
e.next = f;

console.log(addTwoNumbers(a, d)); // 7 0 8 