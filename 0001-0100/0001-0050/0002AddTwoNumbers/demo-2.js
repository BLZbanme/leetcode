function addTwoNumbers(l1, l2) {
    var fakeHead = new ListNode();
    var cur = fakeHead;
    var pre = 0;
    while (l1 || l2 || pre) {
        var a_1 = l1 ? l1.val : 0;
        var b_1 = l2 ? l2.val : 0;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
        var tmp = a_1 + b_1 + pre;
        debugger
        pre = Math.floor(tmp / 10);
        cur.next = new ListNode(tmp % 10);
        cur = cur.next;
    }
    return fakeHead.next;
}
;
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
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
console.log(addTwoNumbers(a, d));
