function reorderList(head) {
    if (!head) {
        return null;
    }
    //1.找到中间节点
    let fast = head;
    let slow = head;
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    fast = slow.next;
    //1.1记得断链
    slow.next = null;

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
    //3.1不用判断fast，因为我在第1.一步的写法中，判断了fast.next.next
    //所以断链后的前半段长度必定大于等于后半段
    while (slow) {
        let tmp1 = slow.next;
        slow.next = fast;
        //fast为null时，tmp2就是null
        let tmp2 = fast && fast.next;
        fast && (fast.next = tmp1);
        slow = tmp1;
        fast = tmp2;
    }
    return;
};