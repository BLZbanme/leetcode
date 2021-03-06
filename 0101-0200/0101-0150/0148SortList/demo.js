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
var sortList = function(head) {
    let result = up2downMergeSort(head);
    return result;
};

function up2downMergeSort(head) {
    if (!head || !head.next) {
        return head;
    }
    let cur = head;
    let twoPace = head;
    while (twoPace.next && twoPace.next.next) {
        cur = cur.next;
        twoPace = twoPace.next.next;
    }
    twoPace = cur.next;
    cur.next = null;
    head = up2downMergeSort(head);
    twoPace = up2downMergeSort(twoPace);
    return merge(head, twoPace);
}

function merge(head1, head2) {
    let fakerHead = new ListNode(-Infinity);
    let cur = fakerHead;
    while (head1 && head2) {
        if (head1.val < head2.val) {
            cur.next = head1;
            head1 = head1.next;
        }
        else {
            cur.next = head2;
            head2 = head2.next;
        }
        cur = cur.next;
    }

    if (head1) {
        cur.next = head1;
    }

    if (head2) {
        cur.next = head2;
    }

    return fakerHead.next;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(-1);
var b = new ListNode(5);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(0);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(sortList(a));

var a = new ListNode(4);
var b = new ListNode(2);
var c = new ListNode(1);
var d = new ListNode(3);
a.next = b;
b.next = c;
c.next = d;

console.log(sortList(a));