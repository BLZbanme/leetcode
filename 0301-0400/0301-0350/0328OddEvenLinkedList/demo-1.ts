function oddEvenList1(head: ListNode | null): ListNode | null {
    let oddFakeHead = new ListNode();
    let evenFakeHead = new ListNode();
    let cur = head;
    let oddCur = oddFakeHead;
    let evenCur = evenFakeHead;
    let flag = true
    while (cur) {
        if (flag) {
            oddCur.next = cur;
            oddCur = oddCur.next;
        }
        else {
            evenCur.next = cur;
            evenCur = evenCur.next;
        }
        cur = cur.next;
        flag = !flag;
    }
    evenCur.next = null;
    oddCur.next = evenFakeHead.next;
    return oddFakeHead.next;
};

function oddEvenList(head: ListNode | null): ListNode | null {
    if (!head) {
        return null;
    }
    let odd = head;
    let even = head.next;
    let evenHead = even;
    while (even && even.next) {
        odd.next = even.next;
        odd = odd.next;
        even.next = odd.next;
        even = even.next;
    }
    odd.next = evenHead;
    return head;
}