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
var removeDuplicateNodes = function(head) {
    let set = new Set();
    let fakeHead = new ListNode();
    fakeHead.next = head;
    let pre = fakeHead;
    while (head) {
        if (!set.has(head.val)) {
            set.add(head.val);
            pre = head;
        }
        else {
            pre.next = head.next;
        }
        head = head.next;
    }
    return fakeHead.next;
};

var removeDuplicateNodes = function(head) {
    let cur = head;

    while (cur) {
        let temp = cur;
        while (temp.next) {
            if (temp.next.val === cur.val) {
                temp.next = temp.next.next;
            }
            else {
                temp = temp.next;
            }
        }
        cur = cur.next
    }
    
    return head;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(3);
var e = new ListNode(2);
var f = new ListNode(1);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log(removeDuplicateNodes(a));


var a = new ListNode(1);
var b = new ListNode(1);
var c = new ListNode(1);
var d = new ListNode(1);
var e = new ListNode(2);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(removeDuplicateNodes(a));