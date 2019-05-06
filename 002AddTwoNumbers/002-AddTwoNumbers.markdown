#### 问题描述

​	You are given two **non-empty** linked lists representing two non-negative integers. The digits are stored in **reverse order** and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

​	You may assume the two numbers do not contain any leading zero, except the number 0 itself.

#### **Example**

```
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
```

#### 我的解决方法	

##### 2019.05.06

思路是遍历l1和l2，判断遍历的两个链表项的值的和是否大于9，大于的话则近卫，时间复杂度为O(n)。

新建了一个链表存储结果，额外使用了两个对象存储链表的非空尾对象，空间复杂度为O(n)

```javascript
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
```

