# 143. Reorder List

Given a singly linked list *L*: *L*0→*L*1→…→*L**n*-1→*L*n,
reorder it to: *L*0→*L**n*→*L*1→*L**n*-1→*L*2→*L**n*-2→…

You may **not** modify the values in the list's nodes, only nodes itself may be changed.

**Example 1:**

```
Given 1->2->3->4, reorder it to 1->4->2->3.
```

**Example 2:**

```
Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
```

##### 2019.08.17

##### 我的方法：

​		用数组把list中的项全部存起来，奇蠢无比

````javascript
var reorderList = function(head) {
    if (!head) {
        return;
    }
    let len = 0;
    let nodeArray = [];
    let cur = head;
    while (cur) {
        nodeArray[len++] = cur;
        cur = cur.next;
    }
    for (let i = 0, end = Math.floor(len / 2); i < end; i++) {
        nodeArray[i].next = nodeArray[len - 1 - i];
        nodeArray[len - 1 - i].next = nodeArray[i + 1]; 
    }
    nodeArray[Math.floor(len / 2)].next = null;
    return;
};
````

##### 别人的方法：

##### 方法1：

##### 		新套路：也不完全算新套路了，list中常见利用两个指针，一个步进，一个步进两下，利用差异来进行一些操作。这里利用两个指针，一个每次走一个项，一个每次走两个项，来找到中心节点！

​		具体思路是：

1. 找到中心节点，把中心节点的next置空
2. 把后半段利用头插法逆序
3. 然后把前半段和逆序后的后半段合并起来！

​		判断出有环后，假设从头结点到环的起点长度为x1，从环的起点到最后相遇的节点长度是x2，从最后相遇的节点跑回环的起点距离是x3。

​		可以得到```2 * (x1 + x2 ) === x1 + x2 + x3 + x2```

​		所以x1 = x3，所以把步进慢的指针置为头节点，和步进快的节点同速为1遍历，最后相遇就是环的头节点。

```javascript
var reorderList = function(head) {
    if (!head || !head.next) {
        return;
    }
    let p1 = head;
    let p2 = head;
    while (p2.next && p2.next.next) {
        p1 = p1.next;
        p2 = p2.next.next;
    }

    let preCur = p1.next;
    p1.next = null;
    p2 = null;
    while (preCur) {
        let tmp = preCur.next;
        preCur.next = p2;
        p2 = preCur;
        preCur = tmp;
    }

    p1 = head;
    while (p1 && p2) {
        let tmpPre = p1.next;
        p1.next = p2;
        let tmpAft = p2.next;
        p2.next = tmpPre;
        p1 = tmpPre;
        p2 = tmpAft;
    }
    return;
}
```

##### 方法2：

​		利用栈

```javascript
var reorderList = function(head) {
    if (!head || !head.next) {
        return;
    }
    let stack = [];
    let cur = head;
    while (cur) {
        stack.push(cur);
        cur = cur.next;
    }
    let mid = Math.floor((stack.length - 1) / 2);
    cur = head;
    while (mid--) {
        let top = stack.pop();
        let tmp = cur.next;
        cur.next = top;
        top.next = tmp;
        cur = tmp;
    }
    stack.pop().next = null;
    return;
}
```

