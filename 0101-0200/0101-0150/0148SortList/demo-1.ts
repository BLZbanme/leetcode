const mergeOrderList = (L1: ListNode | null, L2: ListNode | null) => {
    let fakeHead = new ListNode();
    let cur: ListNode | null = fakeHead;
    while (L1 || L2) {
        let now1 = Infinity;
        let now2 = Infinity;
        L1 && (now1 = L1.val);
        L2 && (now2 = L2.val);
        if (now1 < now2) {
            cur!.next = L1;
            L1 = L1!.next;
        }
        else {
            cur!.next = L2;
            L2 = L2!.next;
        }
        cur = cur!.next;
    }
    return fakeHead.next;
}

const findMid = (list: ListNode | null) => {
    let slow: ListNode | null = list;
    let fast = list;
    while (fast && fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow!.next;
    }
    let res = slow!.next;
    slow!.next = null;
    return res;
}

function sortList(head: ListNode | null): ListNode | null {
    if (!head || !head.next) {
        return head;
    }

    let mid = findMid(head);
    let left = sortList(head);
    let right = sortList(mid);
    return mergeOrderList(left, right);
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(-1);
var b = new ListNode(5);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(0);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
