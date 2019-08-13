# 141. Linked List Cycle

Given a linked list, determine if it has a cycle in it.

To represent a cycle in the given linked list, we use an integer `pos` which represents the position (0-indexed) in the linked list where tail connects to. If `pos` is `-1`, then there is no cycle in the linked list.

 

**Example 1:**

```
Input: head = [3,2,0,-4], pos = 1
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the second node.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist.png)

**Example 2:**

```
Input: head = [1,2], pos = 0
Output: true
Explanation: There is a cycle in the linked list, where tail connects to the first node.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test2.png)

**Example 3:**

```
Input: head = [1], pos = -1
Output: false
Explanation: There is no cycle in the linked list.
```

![img](https://assets.leetcode.com/uploads/2018/12/07/circularlinkedlist_test3.png)

 

**Follow up:**

Can you solve it using *O(1)* (i.e. constant) memory?

##### 2019.08.13

##### 我的方法：

​		用一个set存放遍历过的节点，若新遍历的节点已经存在于set中，就说明有环

````javascript
var hasCycle = function(head) {
    let set = new Set();
    while (head) {
        if (set.has(head)) {
            return true;
        }
        set.add(head);
        head = head.next;
    }
    return false;
};
````

##### 别人的方法：

##### 		方法1：

​		用两个指针，差速便利，如果有环的话，两个指针终究会碰到

```javascript
var hasCycle = function(head) {
    if (!head) {
        return false;
    }
    let walker = head;
    let runner = head;
    while (runner.next && runner.next.next) {
        walker = walker.next;
        runner = runner.next.next;
        if (walker === runner) {
            return true;
        }
    }
    return false;
}
```

