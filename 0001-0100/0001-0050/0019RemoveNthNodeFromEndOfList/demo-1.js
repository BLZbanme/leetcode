"use strict";
function removeNthFromEnd(head, n) {
    var quickNode = head;
    for (var i = 0; i < n; i++) {
        quickNode = quickNode && quickNode.next;
    }
    var fakeHead = new ListNode();
    fakeHead.next = head;
    var cur = fakeHead;
    while (quickNode) {
        cur = cur && cur.next;
        quickNode = quickNode.next;
    }
    if (cur && cur.next) {
        cur.next = cur.next.next;
    }
    return fakeHead.next;
}
;
