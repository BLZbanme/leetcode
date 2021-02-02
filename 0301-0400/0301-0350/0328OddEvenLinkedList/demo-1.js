"use strict";
function oddEvenList1(head) {
    var oddFakeHead = new ListNode();
    var evenFakeHead = new ListNode();
    var cur = head;
    var oddCur = oddFakeHead;
    var evenCur = evenFakeHead;
    var flag = true;
    while (cur) {
        if (flag) {
            oddCur.next = cur;
            oddCur = oddCur.next;
        }
        else {
            evenCur.next = cur;
            evenCur = evenCur.next;
        }
        cur = cur.next;
        flag = !flag;
    }
    evenCur.next = null;
    oddCur.next = evenFakeHead.next;
    return oddFakeHead.next;
}
;
function oddEvenList(head) {
    if (!head) {
        return null;
    }
    var odd = head;
    var even = head.next;
    var evenHead = even;
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
}
