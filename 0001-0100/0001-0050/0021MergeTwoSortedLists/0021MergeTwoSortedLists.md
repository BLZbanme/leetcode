​	Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

**Example:**

```
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
```

##### 2019.05.22

##### 	我的思路：

​	 从t两个链表头结点比起，把更小的放入新链表中。时间复杂度O(l<sub>1</sub>)+O(l<sub>2</sub>),空间复杂度O(1)。小套路，增加一个虚拟头结点，就无须在循环外判断新链表的头结点是l<sub>1</sub>还是l<sub>2</sub>(从0019RemoveNthNodeFromEndOfList学到的)

```javascript
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
```

​	改进，在js中最后一个判断l<sub>1</sub>还是l<sub>2</sub>为空，直接用js的语法糖tmp.next = l1 || l2

```javascript
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
```

##### 别人的写法

​	学习的新套路：

​	递归，写出来的代码极其简洁

```javascript
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
```

​	
