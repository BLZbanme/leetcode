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

    let after = reverseList(head.next);
    let cur = after;
    while (cur.next) {
        cur = cur.next;
    }
    cur.next = head;

    head.next = null;

    return after;
};

var reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
}


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(1);


console.log(reverseList(a));

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(reverseList(a));