# 25. Reverse Nodes in k-Group

Given a linked list, reverse the nodes of a linked list *k* at a time and return its modified list.

*k* is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of *k* then left-out nodes in the end should remain as it is.



**Example:**

Given this linked list: `1->2->3->4->5`

For *k* = 2, you should return: `2->1->4->3->5`

For *k* = 3, you should return: `3->2->1->4->5`

**Note:**

- Only constant extra memory is allowed.
- You may not alter the values in the list's nodes, only nodes itself may be changed.



#### 2020.07.13

#### 	我的思路：

##### 方法1：

​	用栈，其实空间复杂度不算O(1)

```javascript
var reverseKGroup = function(head, k) {
    const stack = [];
    let fakeHead = new ListNode();
    let cur = fakeHead;
    let now = head;
    while (now) {
        while (now && stack.length < k) {
            stack.push(now)
            now = now.next;
        }
        if (stack.length == k) {
            while (stack.length) {
                cur.next = stack.pop();
                cur = cur.next;
            }
        }
        else {
            while (stack.length) {
                cur.next = stack.shift();
                cur = cur.next;
            }
        }
        cur.next = null;
    }

    return fakeHead.next;
};
```

##### 方法2：

迭代

```javascript
var reverseKGroup = function(head, k) {
    let fakeHead = new ListNode();
    let cur = fakeHead;
    let start;
    let count = 0;
    let now = head;
    while(now) {
        if (!count) {
            start = now;
        }
        now = now.next;
        count++;
        if (count == k) {
            cur.next = reverseList(start, now);
            cur = start;
            count = 0;

            continue;
        }
    }

    if (count) {
        cur.next = start;
    }
    
    return fakeHead.next;
}

function reverseList(head, tail) {
    let fakeHead = new ListNode();
    let cur = head;
    while (cur != tail) {
        let tmp = cur.next;
        cur.next = fakeHead.next;
        fakeHead.next = cur;
        cur = tmp;
    }
    return fakeHead.next;
}
```

