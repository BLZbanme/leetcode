"use strict";
function detectCycle(head) {
    if (!head || !head.next) {
        return null;
    }
    var one = head;
    var two = head.next;
    while (one != two) {
        if (!one || !two) {
            return null;
        }
        one = one.next;
        two = two.next.next;
    }
    one = head;
    while (one != two) {
        one = one.next;
        two = two.next;
    }
    return one;
}
;
