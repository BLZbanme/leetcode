class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function swapPairs1(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    let next = head?.next;
    let nextNext = null;
    if (next) {
        nextNext = next?.next;
        next.next = head;
        head.next = swapPairs(nextNext);
        return next;
    }
    return head;
};

function swapPairs(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }
    let next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
};