/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head) {
        return;
    }
    let len = 0;
    let nodeArray = [];
    let cur = head;
    while (cur) {
        nodeArray[len++] = cur;
        cur = cur.next;
    }
    for (let i = 0, end = Math.floor(len / 2); i < end; i++) {
        nodeArray[i].next = nodeArray[len - 1 - i];
        nodeArray[len - 1 - i].next = nodeArray[i + 1]; 
    }
    nodeArray[Math.floor(len / 2)].next = null;
    return;
};

var reorderList = function(head) {
    if (!head || !head.next) {
        return;
    }
    let p1 = head;
    let p2 = head;
    while (p2.next && p2.next.next) {
        p1 = p1.next;
        p2 = p2.next.next;
    }

    let preCur = p1.next;
    p1.next = null;
    p2 = null;
    while (preCur) {
        let tmp = preCur.next;
        preCur.next = p2;
        p2 = preCur;
        preCur = tmp;
    }

    p1 = head;
    while (p1 && p2) {
        let tmpPre = p1.next;
        p1.next = p2;
        let tmpAft = p2.next;
        p2.next = tmpPre;
        p1 = tmpPre;
        p2 = tmpAft;
    }
    return;
}

var reorderList = function(head) {
    if (!head || !head.next) {
        return;
    }
    let stack = [];
    let cur = head;
    while (cur) {
        stack.push(cur);
        cur = cur.next;
    }
    let mid = Math.floor((stack.length - 1) / 2);
    cur = head;
    while (mid--) {
        let top = stack.pop();
        let tmp = cur.next;
        cur.next = top;
        top.next = tmp;
        cur = tmp;
    }
    stack.pop().next = null;
    return;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(reorderList(a));

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
a.next = b;
b.next = c;
c.next = d;

console.log(reorderList(a));
