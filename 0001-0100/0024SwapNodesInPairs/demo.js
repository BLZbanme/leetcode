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
var swapPairs = function(head) {
    let tmp = head;
    let arr = [];
    while(tmp != null){
        arr.push(tmp);
        tmp = tmp.next;
    }
    if(arr.length == 0){
        return "";
    }
    if(arr.length == 1){
        return head;
    }
    for(let i = 0; i < arr.length; i += 2){
        if(i + 3 < arr.length){
            arr[i].next = arr[i + 3];
            arr[i + 1].next = arr[i];
        }else if(i <= arr.length - 2){
            arr[i].next = arr[i + 2];
            arr[i + 1].next = arr[i];
        }
    }
    return arr[1];
};

var swapPairs = function(head) {
    let one = head;
    if(one == null){
        return "";
    }
    let two = head.next;
    if(two == null){
        return head;
    }
    head = two;
    let tmp = head;
    while(one != null && two != null){
        if(two.next != null){
            if(two.next.next != null){
                tmp = two.next;
                two.next = one;
                one.next = tmp.next;
                one = tmp;
                two = tmp.next;
            }else{
                one.next = two.next;
                two.next = one;
                break;
            }
        }else{
            two.next = one;
            one.next = null;
            break;
        }
    }
    return head;
}

var swapPairs = function(head) {
    let virNode = new ListNode(0);
    virNode.next = head;
    let now = virNode;
    while(now.next != null && now.next.next != null){
        let one = now.next;
        let two = now.next.next;
        one.next = two.next;
        now.next = two;
        now.next.next = one;
        now = now.next.next;
    }
    return virNode.next;
}

var swapPairs = function(head){
    if(head == null || head.next == null){
        return head;
    }
    let tmp = head.next;
    head.next = swapPairs(tmp.next);
    tmp.next = head;
    return tmp;
}

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);

a.next = b;
b.next = c;
c.next = d;
console.log(swapPairs(a));