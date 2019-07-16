# 86. Partition List

Given a linked list and a value *x*, partition it such that all nodes less than *x* come before nodes greater than or equal to *x*.

You should preserve the original relative order of the nodes in each of the two partitions.

**Example:**

```
Input: head = 1->4->3->2->5->2, x = 3
Output: 1->2->2->4->3->5
```

##### 2019.07.16

##### 	我的思路：

##### 		方法1：

​		增加两个专门用来记录前一项的变量。preTmp记录当前遍历到的那一项的前一项，preAll记录插到前面去的最后一项，这样发现新的小于x的值，直接从preTmp后面断链，然后插到preAll前面。

​		值得注意的时候，当preAll == preTmp，需要判断，不然会产生bug。

```javascript
var partition = function(head, x) {
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let tmp = head;
    let preTmp = fakeHead;
    let preAll = fakeHead;
    while (tmp) {
        if (tmp.val < x) {
            if (preAll != preTmp) {
                preTmp.next = tmp.next;
                tmp.next = preAll.next;
                preAll.next = tmp;
                preAll = tmp;
                tmp = preTmp.next;
            }
            else {
                preAll = tmp;
                preTmp = tmp;
                tmp = tmp.next;
            }
        }
        else {
            preTmp = tmp;
            tmp = tmp.next;
        }
    }
    return fakeHead.next;
};
```

##### 		方法2：

​		用两个链表，一个存小于x的结点，一个存不小于x的结点，然后把它们连起来

```javascript
var partition = function(head, x) {
    let head1 = new ListNode(0);
    let head2 = new ListNode(0);
    let p1 = head1;
    let p2 = head2;
    while (head) {
        if (head.val < x) {
            p1.next = head;
            p1 = head;
        }
        else {
            p2.next = head;
            p2 = head;
        }
        head = head.next;
    }
    p2.next = null;
    p1.next = head2.next;
    return head1.next;
};
```

