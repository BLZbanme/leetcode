/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const arr = [];
    while (head) {
        arr.push(head);
        head = head.next;
    }
    let i = 0;
    let j = arr.length - 1;
    let fakeHead = new ListNode();
    let cur = fakeHead;
    while (i < j) {
        cur.next = arr[i++];
        cur.next.next = arr[j--];
        cur = cur.next.next;
    }
    if (i == j) {
        cur.next = arr[i];
        cur = cur.next;
    }
    cur.next = null;

    return fakeHead.next;
};

var reorderList = function(head) {
    if (!head) {
        return null;
    }

    let one = head;
    let two = head;
    let pre = null;
    while (two && two.next) {
        pre = one;
        one = one.next;
        two = two.next.next;
    }

    if (!pre) {
        return head;
    }
    
    //中间断链
    pre.next = null;

    two = reverse(one);

    one = head;

    let fakeHead = new ListNode();
    let cur = fakeHead;

    while (one && two) {
        let oneNext = one.next;
        cur.next = one;
        cur.next.next = two;
        cur = two;
        one = oneNext;
        two = two.next;
    }

    if (two) {
        cur.next = two;
    }

    return fakeHead.next;
}

function reverse(head) {
    let fakeHead = new ListNode();

    while (head) {
        let tmp = head.next;
        head.next = fakeHead.next;
        fakeHead.next = head;
        head = tmp;
    }

    return fakeHead.next;
}


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(reorderList(a));

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
a.next = b;
b.next = c;
c.next = d;


console.log(reorderList(a));