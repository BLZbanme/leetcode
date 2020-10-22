function isPalindrome(head: ListNode | null): boolean {
    if (!head) {
        return true;
    }
    let fast: ListNode | null = head;
    let slow: ListNode | null = head;
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow && slow.next;
    }
    fast = slow && slow.next;
    slow && (slow.next = null)
    let fakeHead = new ListNode();
    while (fast) {
        let tmp = fast.next;
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
};