function detectCycle(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return null;
    }
    let one: ListNode | null = head;
    let two: ListNode | null = head.next;
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
};