# 203. Remove Linked List Elements

Remove all elements from a linked list of integers that have value **val**.

**Example:**

```
Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
```

##### 2019.09.07

##### 	我的思路：

​		两个指针的迭代

```javascript
var removeElements = function(head, val) {
    if (!head) {
        return null;
    }
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let pre = fakeHead;
    let cur = head;
    while (cur) {
        if (cur.val === val) {
            cur = cur.next;
            pre.next = cur;
        }
        else {
            cur = cur.next;
            pre = pre.next;
        }
    }
    return fakeHead.next;
};
```

##### 	别人的方法：

##### 	方法1：递归

```javascript
var removeElements = function(head, val) {
    if (!head) {
        return null;
    }
    let next = removeElements(head.next, val);
    if (head.val === val) {
        return next;
    }
    head.next = next;
    return head;
}
```

##### 	方法2：迭代

​	一个指针的迭代

````javascript
var removeElements = function(head, val) {
    if (!head) {
        return null;
    }
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let pre = fakeHead;
    while (pre.next) {
        if (pre.next.val === val) {
            pre.next = pre.next.next;
        }
        else {
            pre = pre.next;
        }
    }
    return fakeHead.next;
};
````

