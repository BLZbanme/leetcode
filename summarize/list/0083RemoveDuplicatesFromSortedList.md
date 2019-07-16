# 83. Remove Duplicates from Sorted List

Given a sorted linked list, delete all duplicates such that each element appear only *once*.

**Example 1:**

```
Input: 1->1->2
Output: 1->2
```

**Example 2:**

```
Input: 1->1->2->3->3
Output: 1->2->3
```

##### 2019.07.16

##### 	我的思路：

​		遇到重复的数值就一直找到不重复为止。

```javascript
var deleteDuplicates = function(head) {
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let pre = fakeHead;
    let tmp = head;
    while (tmp) {
        while (tmp.next && tmp.next.val === tmp.val) {
            tmp = tmp.next;
        }
        pre.next = tmp;
        pre = tmp;
        tmp = tmp.next;
    }
    return fakeHead.next;
};
```
