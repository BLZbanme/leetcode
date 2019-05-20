/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let tmp = head;
    let arr =[];
    while(tmp != null){
        arr.push(tmp);
        tmp = tmp.next;
    }
    let length = arr.length;
    if(length - n > 0){
        arr[length - n - 1].next = arr[length - n].next;
    }else{
        head = arr[0].next;
    }
    return head;
};

var removeNthFromEnd = function(head, n) {
    let virNode = new ListNode(0);
    virNode.next = head;
    let tmp = virNode;
    let arr =[];
    while(tmp != null){
        arr.push(tmp);
        tmp = tmp.next;
    }
    let length = arr.length;
    arr[length - n - 1].next = arr[length - n].next;
    return virNode.next;
};

var removeNthFromEnd = function(head, n) {
    let virNode = new ListNode(0);
    virNode.next = head;
    let tmp = virNode;
    let length = 0;
    while(tmp != null){
        length++;
        tmp = tmp.next;
    }
    let pre = length - n - 1;
    tmp = virNode;
    while(pre > 0){
        tmp = tmp.next;
        pre--;
    }
    tmp.next = tmp.next.next;
    return virNode.next;
}

var removeNthFromEnd = function(head, n) {
    let virNode = new ListNode(0);
    virNode.next = head;
    let fir = virNode;
    while(n > 0){
        fir = fir.next
        n--;
    }
    let sec = virNode;
    while(fir.next != null){
        fir = fir.next;
        sec = sec.next;
    }
    sec.next = sec.next.next;
    return virNode.next;
}


console.log(removeNthFromEnd(one, 2))

function ListNode(n){
    this.val = n;
    this.next = null;
}

var one = new ListNode(1);
var two = new ListNode(2);
var three = new ListNode(3);
var four = new ListNode(4);
var five = new ListNode(5);
one.next = two;
two.next = three;
three.next = four;
four.next = five;

