# 92. Reverse Linked List II

Reverse a linked list from position *m* to *n*. Do it in one-pass.

**Note:** 1 ≤ *m* ≤ *n* ≤ length of list.

**Example:**

```
Input: 1->2->3->4->5->NULL, m = 2, n = 4
Output: 1->4->3->2->5->NULL
```

##### 2019.07.18

##### 	我的思路：

###### 方法1：

​		找到第m个结点mth的前一项mthPre，然后遍历m到n的结点，遍历的时候把这个结点插到mthPre与mth之间。

```javascript
var reverseBetween = function(head, m, n) {
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let p = fakeHead;
    m--;
    n--;
    while (m) {
        p = p.next;
        m--;
        n--;
    }
    let mthPre = p;
    let mthNode = p.next;
    let q = mthNode;
    while (n) {
        let tmp = q.next;
        q.next = tmp.next;
        tmp.next = mthPre.next;
        mthPre.next = tmp;
        n--;
    }
    return fakeHead.next;
};
```

###### 		方法2：

​		找到第m个结点mth的前一项mthPre，然后遍历m到n的结点。新建一个tmpNode,遍历的时候把m-n个结点采用头插法，插到tmpNode后面，实现倒序，然后一次性插到mthPre后面。

```javascript
var reverseBetween = function(head, m, n) {
    if (m === n) {
        return head;
    }
    let fakeHead = new ListNode(0);
    fakeHead.next = head;
    let p = fakeHead;
    m--;
    while (m) {
        p = p.next;
        m--;
        n--;
    }
    let mthPre = p;
    let mthNode = p.next;
    let q = mthNode;
    let tmpHead = new ListNode(0);
    while (n) {
        let tmp = q;
        q = q.next;
        tmp.next = tmpHead.next;
        tmpHead.next = tmp;
        n--;
    }
    mthNode.next = q;
    mthPre.next = tmpHead.next;
    return fakeHead.next;
};
```

