/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    let fakerHead = new ListNode(-Infinity);
    fakerHead.next = head;
    let cur = head;
    let curPre = fakerHead;
    while (cur) {
        let pre = fakerHead;
        let start = fakerHead;
        while (start) {
            if (start === curPre) {
                if (start.val < cur.val) {
                    curPre = cur;
                }
                else {
                    curPre.next = cur.next;
                    pre.next = cur;
                    cur.next = start;
                }
                break;
            }
            if (start.val < cur.val) {
                pre = start;
                start = start.next;
            }
            else {
                curPre.next = cur.next;
                pre.next = cur;
                cur.next = start;
                break;
            }
        }
        cur = curPre.next;
    }
    return fakerHead.next;
};

var insertionSortList = function(head) {
    let fakerHead = new ListNode(-Infinity);
    fakerHead.next = head;
    let cur = head;
    let curPre = fakerHead;
    while (cur) {
        let pre = fakerHead;
        let start = fakerHead.next;
        while (start != cur) {
            if (start.val < cur.val) {
                pre = start;
                start = start.next;
            }
            else {
                curPre.next = cur.next;
                pre.next = cur;
                cur.next = start;
                break;
            }
        }
        if (start === cur) {
            curPre = cur;
        }
        cur = curPre.next;
    }
    return fakerHead.next;
};

var insertionSortList = function(head) {
    if (!head) {
        return head;
    }
    let fakerHead = new ListNode(0);
    let cur = head;
    let pre = fakerHead;
    let next = null;
    while (cur) {
        next = cur.next;
        while (pre.next && pre.next.val < cur.val) {
            pre = pre.next;
        }
        cur.next = pre.next;
        pre.next = cur;
        pre = fakerHead;
        cur = next;
    }
    return fakerHead.next;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(4);
var b = new ListNode(2);
var c = new ListNode(1);
var d = new ListNode(3);
a.next = b;
b.next = c;
c.next = d;
console.log(insertionSortList(a));