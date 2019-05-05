var addTwoNumbers = function(l1, l2) {
    var result = new ListNode((l1.val + l2.val) % 10);
    var now = result;
    var tmp = (l1.val + l2.val) >= 10 ? 1 : 0;
    var l1pre = l1;
    var l2pre = l2;
    l1 = l1.next;
    l2 = l2.next;   
    while(l1 != null && l2 != null){
        now.next = new ListNode((l1.val + l2.val + tmp) % 10);
        tmp = (l1.val + l2.val + tmp) >= 10 ? 1 : 0;
        now = now.next;
        l1pre = l1;
        l2pre = l2;
        l1 = l1.next;
        l2 = l2.next;
    }
    if(l1 == null){
        addTmp(l2pre, l2, tmp);
        now.next = l2;
    }
    if(l2 == null){
        addTmp(l1pre, l1, tmp);
        now.next = l1;
    }
    if(l1 == null && l2 == null && tmp == 1){
        now.next = new ListNode(1);
    }
    return result;
};

function addTmp(lpre,l, tmp){
    if(l == null){
        if(tmp == 1){
            lpre.next = new ListNode(1);
        }
        return;
    }
    if(l.val == 9 && tmp == 1){
        l.val = 0;
        addTmp(l, l.next, tmp);
    }else{
        l.val += tmp;
    }
}