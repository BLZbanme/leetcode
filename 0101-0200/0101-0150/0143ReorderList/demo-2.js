"use strict";
function reorderList(head) {
    //1.找到中间节点
    var fast = head;
    var slow = head;
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow && slow.next;
    }
    fast = slow && slow.next;
    slow && (slow.next = null);
    //2.头插逆序后半段
    var fakeHead = new ListNode();
    while (fast) {
        var tmp = fast.next;
        fast.next = fakeHead.next;
        fakeHead.next = fast;
        fast = tmp;
    }
    //3.交错合并两个链表
    fast = fakeHead.next;
    slow = head;
    while (slow) {
        var tmp = slow.next;
        slow.next = fast;
        var tmp2 = fast && fast.next;
        fast && (fast.next = tmp);
        slow = tmp;
        fast = tmp2;
    }
    return;
}
;
