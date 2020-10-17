function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let quickNode = head;
    for (let i = 0; i < n; i++) {
        quickNode = quickNode && quickNode.next;
    }
    let fakeHead: ListNode | null = new ListNode();
    fakeHead.next = head;
    let cur: ListNode | null = fakeHead;

    while (quickNode) {
        cur = cur && cur.next;
        quickNode = quickNode.next;
    }
    if (cur && cur.next) {
        cur.next = cur.next.next;
    }
    return fakeHead.next;
};

