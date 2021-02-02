"use strict";
var ListNode = /** @class */ (function () {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
    return ListNode;
}());
function swapPairs1(head) {
    if (!head) {
        return null;
    }
    var next = head === null || head === void 0 ? void 0 : head.next;
    var nextNext = null;
    if (next) {
        nextNext = next === null || next === void 0 ? void 0 : next.next;
        next.next = head;
        head.next = swapPairs(nextNext);
        return next;
    }
    return head;
}
;
function swapPairs(head) {
    if (!head || !head.next) {
        return head;
    }
    var next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
}
;
