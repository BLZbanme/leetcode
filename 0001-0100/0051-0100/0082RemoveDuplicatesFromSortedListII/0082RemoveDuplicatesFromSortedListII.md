# 82. Remove Duplicates from Sorted List II

Given a sorted linked list, delete all nodes that have duplicate numbers, leaving only *distinct*numbers from the original list.

**Example 1:**

```
Input: 1->2->3->3->4->4->5
Output: 1->2->5
```

**Example 2:**

```
Input: 1->1->1->2->3
Output: 2->3
```

##### 2019.07.15

##### 	我的思路：

​		遇到重复的元素就一直找到他后面不重复的，并把这些重复的一次性断链。

```javascript
var deleteDuplicates = function(head) {
    let tmpHead = new ListNode(0);
    tmpHead.next = head;
    let pre = tmpHead;
    let tmp = head;
    while (tmp) {
        if (tmp.next && tmp.val === tmp.next.val) {
            tmp = tmp.next;
            while (tmp.next && tmp.val === tmp.next.val) {
                tmp = tmp.next;
            }
            tmp = tmp.next
            if (!tmp) {
                pre.next = tmp;
            }
        }
        else {
            pre.next = tmp;
            pre = tmp;
            tmp = tmp.next;
        }
    }
    return tmpHead.next;
};
```

##### 别人的写法：

​		同样的思路，别人写的比我优美多了

```javascript
var deleteDuplicates = function(head) {
    let tmpHead = new ListNode(0);
    tmpHead.next = head;
    let pre = tmpHead;
    let cur = head;
    while (cur) {
        while (cur.next && cur.val === cur.next.val) {
            cur = cur.next;
        }
        if (pre.next == cur) {
            pre = pre.next;
        }
        else {
            pre.next = cur.next;
        }
        cur = cur.next;
    }
    return tmpHead.next;
};
```

