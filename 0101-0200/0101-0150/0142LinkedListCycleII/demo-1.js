function detectCycle(head) {
    if (!head || !head.next) {
        return null;
    }
    var one = head;
    var two = head;
    while (two && two.next) {
        one = one.next;
        two = two.next.next;
        if (one == two) {
            one = head;
            while (one != two) {
                one = one.next;
                two = two.next;
            }
            return one;
        }
    }
    return null;
}
;

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let a = new ListNode(3);
let b = new ListNode(2);
let c = new ListNode(0);
let d = new ListNode(-4);
a.next = b;
b.next = c;
c.next = d;
d.next = b;

console.log(detectCycle(a));