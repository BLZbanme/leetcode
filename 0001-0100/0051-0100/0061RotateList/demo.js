/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(k == 0 || !head){
        return head;
    }
    let p = head, pre = null, len = 1;
    while(!!p.next){
        pre = p;
        p = p.next;
        len++;
    }
    k %= len;
    if(k == 0){
        return head;
    }
    let index = len - k + 1, res;
    p = head, len = 1;
    while(!!p.next){
        pre = p;
        p = p.next;
        len++;
        if(len == index){
            res = pre;
        }
    }
    p.next = head;
    head = res.next;
    res.next = null;
    return head;
};

var rotateRight = function(head, k){
    if(k == 0 || !head){
        return head;
    }
    let nodeArr = [];
    let p = head, i = 0;
    while(!!p){
        nodeArr[i++] = p;
        p = p.next;
    }
    k %= i;
    if(k == 0){
        return head;
    }
    let index = i - k;
    nodeArr[i - 1].next = head;
    head = nodeArr[index];
    nodeArr[index - 1].next = null;
    return head;

}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(0);
var b = new ListNode(1);
var c = new ListNode(2);
a.next = b;
b.next = c;
c.next = null;

console.log(rotateRight(a, 4))

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;
console.log(rotateRight(a, 1))

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;
console.log(rotateRight(a, 2))

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;
console.log(rotateRight(a, 3))

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;
console.log(rotateRight(a, 4))

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;
console.log(rotateRight(a, 5))

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(3);
var d = new ListNode(4);
var e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = null;
console.log(rotateRight(a, 6))
