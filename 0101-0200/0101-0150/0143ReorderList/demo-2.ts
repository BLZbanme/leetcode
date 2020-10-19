function reorderList(head: ListNode | null): void {
    //1.找到中间节点
    let fast = head;
    let slow = head;
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow && slow.next;
    }
    fast = slow && slow.next;
    slow && (slow.next = null);

    //2.头插逆序后半段
    let fakeHead = new ListNode();
    while (fast) {
        let tmp = fast.next;
        fast.next = fakeHead.next;
        fakeHead.next = fast;
        fast = tmp;
    }

    //3.交错合并两个链表
    fast = fakeHead.next;
    slow = head;
    while (slow) {
        let tmp = slow.next;
        slow.next = fast;
        let tmp2 = fast && fast.next;
        fast && (fast.next = tmp);
        slow = tmp;
        fast = tmp2;
    }
    return;
};