/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let tmp1 = l1;
    let tmp2 = l2;
    let tmp = virHead = new ListNode(0);
    while(tmp1 != null && tmp2 != null){
        if(tmp1.val < tmp2.val){
            tmp.next = tmp1;
            tmp = tmp1;
            tmp1 = tmp1.next;
        }else{
            tmp.next = tmp2;
            tmp = tmp2;
            tmp2 = tmp2.next;
        }
    }
    if(tmp1){
        tmp.next = tmp1;
    }else{
        tmp.next = tmp2;
    }
    return virHead.next;
};

var mergeTwoLists = function(l1, l2) {
    let tmp = virHead = new ListNode(0);
    while(l1 != null && l2 != null){
        if(l1.val < l2.val){
            tmp.next = l1;
            l1 = l1.next;
        }else{
            tmp.next = l2;
            l2 = l2.next;
        }
        tmp = tmp.next;
    }
    tmp.next = l1 || l2;
    return virHead.next;
};

var mergeTwoLists = function(l1, l2) {
    if(l1 == null){
        return l2;
    }
    if(l2 == null){
        return l1;
    }
    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let l1 = new ListNode(1);
let l2 = new ListNode(2);
let l3 = new ListNode(4);
l1.next = l2
l2.next = l3

let m1 = new ListNode(1);
let m2 = new ListNode(3);
let m3 = new ListNode(4);
m1.next = m2
m2.next = m3
console.log(mergeTwoLists(l1, m1));