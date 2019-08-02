# 117. Populating Next Right Pointers in Each Node II

Given a binary tree

```
struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
```

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to `NULL`.

Initially, all next pointers are set to `NULL`.



**Example:**

![img](https://assets.leetcode.com/uploads/2019/02/15/117_sample.png)

```
Input: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":null,"next":null,"right":{"$id":"6","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}

Output: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":{"$id":"4","left":null,"next":{"$id":"5","left":null,"next":null,"right":null,"val":7},"right":null,"val":5},"right":null,"val":4},"next":{"$id":"6","left":null,"next":null,"right":{"$ref":"5"},"val":3},"right":{"$ref":"4"},"val":2},"next":null,"right":{"$ref":"6"},"val":1}

Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.
```

**Note:**

- You may only use constant extra space.
- Recursive approach is fine, implicit stack space does not count as extra space for this problem.

##### 2019.08.02

##### 	我的思路：

##### 				方法1：

​		思路写在代码中了，写的有点丑

```javascript
var connect = function(root) {
    //记录每一层的第一个节点
    let first = root;
    //记录当前节点
    let cur;
    //记录下一层的第一个节点记录
    let pre = null;
    //记录下一层第二个节点记录
    let aft = null;
    while (first) {
        //每一层cur初始化为first
        cur = first;
        //first置空，判断下一层还有没有结点，用来跳出循环
        first = null;

        //此while用来找到下一层第一个节点
        while (cur) {
            if (cur.left) {
                pre = cur.left;
                first = pre;
                break;
            }
            else if (cur.right) {
                pre = cur.right;
                first = pre;
                cur = cur.next;
                break;
            }
            else {
                cur = cur.next;
            }
        }

        //此while用来找到下一层第二个节点， 并把pre的next指向aft
        //并把pre赋值为aft，循环可以把整层的next连接完
        //cur.left !== pre防止重新计算
        while (cur) {
            if (cur.left && cur.left !== pre) {
                aft = cur.left;
                pre.next = aft;
                pre = aft;
            }
            if (cur.right && cur.right !== pre) {
                aft = cur.right;
                pre.next = aft;
                pre = aft;
            }
            cur = cur.next;
        }
    }
    return root;
};
```

##### 				别人的方法：

##### 方法1：

​		他比我优化的部分就是在循环中增加条件prev是否为空，用来判断是否找到了下一层的第一个结点，并且去掉了我写的aft冗余变量。

````javascript
var connect = function(root) {
    let head = null;
    let prev = null;
    let cur = root;
    while (cur) {
        while (cur) {
            if (cur.left) {
                if (prev) {
                    prev.next = cur.left;
                }
                else {
                    head = cur.left;
                }
                prev = cur.left;
            }
            if (cur.right) {
                if (prev) {
                    prev.next = cur.right;
                }
                else {
                    head  = cur.right;
                }
                prev = cur.right;
            }
            cur = cur.next;
        }
        cur = head;
        prev = null;
        head = null;
    }
    return root;
}
````

##### 方法2：

​		最牛逼的，思路就是增加一个临时调节点（就如在链表的题中常做的），这样就不用找下一层的第一个结点，直接就是怼！

```javascript
var connect = function(root) {
    let result = root;
    while (root) {
        let tmp = new Node(0);
        let cur = tmp;
        while (root) {
            if (root.left) {
                cur.next = root.left;
                cur = cur.next;
            }
            if (root.right) {
                cur.next = root.right;
                cur = cur.next;
            }
            root = root.next;
        }
        root = tmp.next;
    }
    return result;
}
```

