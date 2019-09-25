/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true;
    }

    //利用差速遍历找到中间的结点
    let one = head;
    let two = head;
    while (two.next && two.next.next) {
        one = one.next;
        two = two.next.next;
    }
    let midHead = one.next;

    //头插法逆序后半段
    let fakerHead = new ListNode(0);
    fakerHead.next = null;
    while (midHead) {
        let tmp = midHead.next;
        midHead.next = fakerHead.next;
        fakerHead.next = midHead;
        midHead = tmp;
    }
    midHead = fakerHead.next;

    //拿逆序后的后半段和前半段相比较
    while (midHead) {
        if (midHead.val !== head.val) {
            return false;
        }
        midHead = midHead.next;
        head = head.next;
    }
    return true;
};


var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true;
    }

    //利用差速遍历找到中间的结点
    let fakerHead = new ListNode(0);
    let one = head;
    let two = head;
    while (two && two.next) {
        two = two.next.next;
        let tmp = one.next;
        one.next = fakerHead.next;
        fakerHead.next = one;
        one = tmp;
    }
    let midHead = two ? one.next : one;
    let newHead = fakerHead.next;
    
    //拿逆序后的后半段和前半段相比较
    while (midHead && newHead) {
        if (midHead.val !== newHead.val) {
            return false;
        }
        midHead = midHead.next;
        newHead = newHead.next;
    }
    return true;
};


function ListNode(val) {
    this.val = val;
    this.next = null;
}

var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(1);
a.next = b;
b.next = c;
console.log(isPalindrome(a));


var a = new ListNode(1);
var b = new ListNode(0);
var c = new ListNode(0);
a.next = b;
b.next = c;
console.log(isPalindrome(a));


var a = new ListNode(1);
var b = new ListNode(2);
var c = new ListNode(2);
var d = new ListNode(1);
a.next = b;
b.next = c;
c.next = d;
console.log(isPalindrome(a));


var a = new ListNode(1);
console.log(isPalindrome(a));

var a = new ListNode(1);
var b = new ListNode(2);
a.next = b;
console.log(isPalindrome(a));



