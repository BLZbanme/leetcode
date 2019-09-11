# 206. Reverse Linked List

Reverse a singly linked list.

**Example:**

```
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
```

**Follow up:**

A linked list can be reversed either iteratively or recursively. Could you implement both?

##### 2019.09.11

##### 	我的思路：

​		迭代，头插法逆序

```javascript
var reverseList = function(head) {
    let fakeHead = new ListNode(0);
    let cur = head;
    while (cur) {
        let tmp = cur.next;
        cur.next = fakeHead.next;
        fakeHead.next = cur;
        cur = tmp;
    }
    return fakeHead.next;
};
```

##### 	别人的方法：

##### 方法1：

​	优化一下的迭代

```javascript
var reverseList = function(head) {
    let fakeHead = null;
    while (head) {
        let tmp = head.next;
        head.next = fakeHead;
        fakeHead = head;
        head = tmp;
    }
    return fakeHead;
};
```

##### 方法2：

​	递归

```java
var reverseList = function(head) {
    return reverseListInt(head, null);
}

function reverseListInt(node, newNode) {
    if (!node) {
        return newNode;
    }
    let next = node.next;
    node.next = newNode;
    return reverseListInt(next, node);
}
```

