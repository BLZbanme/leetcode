/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let tmp = head;
    let preTmp = fakeHead;
    let preAll = fakeHead;
    while (tmp) {
        if (tmp.val < x) {
            if (preAll != preTmp) {
                preTmp.next = tmp.next;
                tmp.next = preAll.next;
                preAll.next = tmp;
                preAll = tmp;
                tmp = preTmp.next;
            }
            else {
                preAll = tmp;
                preTmp = tmp;
                tmp = tmp.next;
            }
        }
        else {
            preTmp = tmp;
            tmp = tmp.next;
        }
    }
    return fakeHead.next;
};

var partition = function(head, x) {
    let head1 = new ListNode(0);
    let head2 = new ListNode(0);
    let p1 = head1;
    let p2 = head2;
    while (head) {
        if (head.val < x) {
            p1.next = head;
            p1 = head;
        }
        else {
            p2.next = head;
            p2 = head;
        }
        head = head.next;
    }
    p2.next = null;
    p1.next = head2.next;
    return head1.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(1);
var b = new ListNode(4);
var c = new ListNode(3);
var d = new ListNode(2);
var e = new ListNode(5);
var f = new ListNode(2);

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
console.log(partition(a, 3));
