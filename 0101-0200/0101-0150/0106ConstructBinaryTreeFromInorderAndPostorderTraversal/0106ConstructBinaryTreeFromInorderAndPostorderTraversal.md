# 116. Populating Next Right Pointers in Each Node

You are given a **perfect binary tree** where all leaves are on the same level, and every parent has two children. The binary tree has the following definition:

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

![img](https://assets.leetcode.com/uploads/2019/02/14/116_sample.png)

```
Input: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":{"$id":"6","left":null,"next":null,"right":null,"val":6},"next":null,"right":{"$id":"7","left":null,"next":null,"right":null,"val":7},"val":3},"val":1}

Output: {"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":{"$id":"4","left":null,"next":{"$id":"5","left":null,"next":{"$id":"6","left":null,"next":null,"right":null,"val":7},"right":null,"val":6},"right":null,"val":5},"right":null,"val":4},"next":{"$id":"7","left":{"$ref":"5"},"next":null,"right":{"$ref":"6"},"val":3},"right":{"$ref":"4"},"val":2},"next":null,"right":{"$ref":"7"},"val":1}

Explanation: Given the above perfect binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B.
```

**Note:**

- You may only use constant extra space.
- Recursive approach is fine, implicit stack space does not count as extra space for this problem.

##### 2019.08.01

##### 	我的思路：

##### 						层次遍历：

```javascript
var connect = function(root) {
    if (!root) {
        return null;
    }
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        while (len--) {
            let tmp = queue.shift();
            tmp.next = len ? queue[0] : null;
            if (tmp.left) {
                queue.push(tmp.left);
            }
            if (tmp.right) {
                queue.push(tmp.right);
            }
        }
    }
    return root;
};
```

##### 别人的方法：

​		递归

```javascript
var connect = function(root) {
    let tmp = root;
    while (tmp && tmp.left) {
        let cur = tmp;
        while (cur) {
            cur.left.next = cur.right;
            cur.right.next = !cur.next ? null : cur.next.left;
            cur = cur.next;
        }
        tmp = tmp.left;
    }
    return root;
}
```
