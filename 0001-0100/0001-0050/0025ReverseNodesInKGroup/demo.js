/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function(head, k) {
    const stack = [];
    let fakeHead = new ListNode();
    let cur = fakeHead;
    let now = head;
    while (now) {
        while (now && stack.length < k) {
            stack.push(now)
            now = now.next;
        }
        if (stack.length == k) {
            while (stack.length) {
                cur.next = stack.pop();
                cur = cur.next;
            }
        }
        else {
            while (stack.length) {
                cur.next = stack.shift();
                cur = cur.next;
            }
        }
        cur.next = null;
    }

    return fakeHead.next;
};


var reverseKGroup = function(head, k) {
    let fakeHead = new ListNode();
    let cur = fakeHead;
    let start;
    let count = 0;
    let now = head;
    while(now) {
        if (!count) {
            start = now;
        }
        now = now.next;
        count++;
        if (count == k) {
            cur.next = reverseList(start, now);
            cur = start;
            count = 0;

            continue;
        }
    }

    if (count) {
        cur.next = start;
    }
    
    return fakeHead.next;
}

function reverseList(head, tail) {
    let fakeHead = new ListNode();
    let cur = head;
    while (cur != tail) {
        let tmp = cur.next;
        cur.next = fakeHead.next;
        fakeHead.next = cur;
        cur = tmp;
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
console.log(reverseKGroup(a, 2)); // 2,1,4,3,5

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
console.log(reverseKGroup(a, 3)); // 3,2,1,4,5

var a = new ListNode(1);
var b = new ListNode(2);
a.next = b;
console.log(reverseKGroup(a, 2));