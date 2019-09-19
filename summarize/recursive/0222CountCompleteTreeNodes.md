# 222. Count Complete Tree Nodes

Given a **complete** binary tree, count the number of nodes.

**Note:**

**Definition of a complete binary tree from Wikipedia:**
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

**Example:**

```
Input: 
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6
```

##### 2019.09.19

##### 	我的思路：

​		我的思路都是没考虑到完全二叉树的思路

##### 方法1：

​		dfs

```javascript
var countNodes = function(root) {
    if (!root) {
        return 0;
    }
    return 1 + countNodes(root.left) + countNodes(root.right);
}
```

##### 方法2：

​		bfs

```javascript
var countNodes = function(root) {
    if (!root) {
        return 0;
    }
    let queue = [root];
    let count = 1;
    while (queue.length) {
        let node = queue.shift();

        if (node.left) {
            queue.push(node.left);
            count++;
        }

        if (node.right) {
            queue.push(node.right);
            count++;
        }
    }
    return count;
};
```

##### 方法3：

​		中序遍历非递归

```javascript
var countNodes = function(root) {
    let count = 0;
    let stack = [];
    let cur = root;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        count++;
        cur = cur.right;
    }
    return count;
}

```

##### 别人的方法：

​		计算整个树高和右子树高

1. 如果右子树高等于整个树高减1，说明左子树是满二叉树，满二叉树的结点数就是```2^h - 1```，再加上跟结点，就是```2^h```，再递归计算右子树结点数。

2. 如果右子树不等于整个树高减一，说明右子树是满二叉树，同理递归计算左子树结点数

   复杂度O(logN)

```javascript
var countNodes = function(root) {
    if (!root) {
        return 0;
    }
    let totalDepth = getDepth(root);
    let rightDepth = getDepth(root.right);
    if (rightDepth + 1 === totalDepth) {
        return (1 << totalDepth - 1) + countNodes(root.right);
    }
    return (1 << totalDepth - 2) + countNodes(root.left);
}

function getDepth(root) {
    if (!root) {
        return 0;
    }
    return 1 + getDepth(root.left);
}
```

