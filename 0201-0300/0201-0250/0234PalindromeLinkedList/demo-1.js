"use strict";
function isPalindrome(head) {
    if (!head) {
        return true;
    }
    var fast = head;
    var slow = head;
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow && slow.next;
    }
    fast = slow && slow.next;
    slow && (slow.next = null);
    var fakeHead = new ListNode();
    while (fast) {
        var tmp = fast.next;
        fast.next = fakeHead.next;
        fakeHead.next = fast;
        fast = tmp;
    }
    slow = head;
    fast = fakeHead.next;
    while (fast && slow) {
        if (fast.val != slow.val) {
            return false;
        }
        fast = fast.next;
        slow = slow.next;
    }
    return true;
}
;
