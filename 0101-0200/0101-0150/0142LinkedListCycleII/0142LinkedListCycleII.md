# 142. Linked List Cycle II

Given a linked list, return the node where the cycle begins. If there is no cycle, return `null`.

To represent a cycle in the given linked list, we use an integer `pos` which represents the position (0-indexed) in the linked list where tail connects to. If `pos` is `-1`, then there is no cycle in the linked list.

**Note:** Do not modify the linked list.

 

**Example 1:**

```
Input: head = [3,2,0,-4], pos = 1
Output: tail connects to node index 1
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

**Example 2:**

```
Input: head = [1,2], pos = 0
Output: tail connects to node index 0
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png)

**Example 3:**

```
Input: head = [1], pos = -1
Output: no cycle
Explanation: There is no cycle in the linked list.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png)

 

**Follow-up**:
Can you solve it without using extra space?

##### 2019.08.13

##### 我的方法：

​		用一个set存放遍历过的节点，若新遍历的节点已经存在于set中，就说明这个节点是环的起始

````javascript
var detectCycle = function(head) {
    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return head;
        }
        set.add(head);
        head = head.next;
    }
    return null;
};

````

##### 别人的方法：

​		用两个指针，差速便利，如果有环的话，两个指针终究会碰到。

​		判断出有环后，假设从头结点到环的起点长度为x1，从环的起点到最后相遇的节点长度是x2，从最后相遇的节点跑回环的起点距离是x3。

​		可以得到```2 * (x1 + x2 ) === x1 + x2 + x3 + x2```

​		所以x1 = x3，所以把步进慢的指针置为头节点，和步进快的节点同速为1遍历，最后相遇就是环的头节点。

```javascript
var detectCycle = function(head) {
    if (!head) {
        return null;
    }
    let fast = head;
    let slow = head;
    let isCycle = false;
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (fast === slow) {
            isCycle = true;
            break;
        }
    }
    if (!isCycle) {
        return null;
    }
    slow = head;
    while (slow !== fast) {
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}
```

