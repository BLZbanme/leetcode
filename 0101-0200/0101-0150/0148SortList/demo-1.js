var mergeOrderList = function (L1, L2) {
    var fakeHead = new ListNode();
    var cur = fakeHead;
    while (L1 || L2) {
        var now1 = Infinity;
        var now2 = Infinity;
        L1 && (now1 = L1.val);
        L2 && (now2 = L2.val);
        if (now1 < now2) {
            cur.next = L1;
            L1 = L1.next;
        }
        else {
            cur.next = L2;
            L2 = L2.next;
        }
        cur = cur.next;
    }
    return fakeHead.next;
};
var findMid = function (list) {
    var slow = list;
    var fast = list;
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    var res = slow.next;
    slow.next = null;
    return res;
};
function sortList(head) {
    if (!head || !head.next) {
        return head;
    }
    var mid = findMid(head);
    var left = sortList(head);
    var right = sortList(mid);
    return mergeOrderList(left, right);
}
;
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
