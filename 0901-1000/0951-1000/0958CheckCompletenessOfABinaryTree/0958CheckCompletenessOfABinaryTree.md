# 958. Check Completeness of a Binary Tree

Given a binary tree, determine if it is a *complete binary tree*.

**Definition of a complete binary tree from Wikipedia:**
In a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2h nodes inclusive at the last level h.

 

**Example 1:**

**![img](https://assets.leetcode.com/uploads/2018/12/15/complete-binary-tree-1.png)**

```
Input: [1,2,3,4,5,6]
Output: true
Explanation: Every level before the last is full (ie. levels with node-values {1} and {2, 3}), and all nodes in the last level ({4, 5, 6}) are as far left as possible.
```

**Example 2:**

**![img](https://assets.leetcode.com/uploads/2018/12/15/complete-binary-tree-2.png)**

```
Input: [1,2,3,4,5,null,7]
Output: false
Explanation: The node with value 7 isn't as far left as possible.
```

 

**Note:**

1. The tree will have between 1 and 100 nodes.



#### 2020.07.13

#### 	我的思路：

##### 方法1：

层次遍历，碰到第一个有子树为空的结点后，直接用一个变量标识，后边遍历的结点不可有子树了

```javascript
var isCompleteTree = function(root) {
    const queue = [root];
    let hasEnd = false;
    while (queue.length) {
        let cur = queue.shift();
        if (!hasEnd) {
            if (cur.left) {
                queue.push(cur.left);
            }
            else {
                hasEnd = true;
            }

            if (cur.right) {
                if (hasEnd) {
                    return false;
                }
                queue.push(cur.right);
            }
            else {
                hasEnd = true;
            }
        }
        else {
            if (cur.left || cur.right) {
                return false;
            }
        }
    }

    return true;
};
```

##### 	方法2：

根据完全二叉树用数组存的下标性质判断。

```javascript
var isCompleteTree = function(root) {
    let tmp = new CompleteNode(root, 1);
    const queue = [null, tmp];
    let i = 1;
    while (i < queue.length) {
        tmp = queue[i];
        if (tmp.node) {
            let left = new CompleteNode(tmp.node.left, tmp.index * 2);
            queue.push(left);
            let right = new CompleteNode(tmp.node.right, tmp.index * 2 + 1);
            queue.push(right);
        }
        i++;
    }

    return queue[i - 1].index == queue.length - 1;
};

function CompleteNode(node, index) {
    this.node = node;
    this.index = index;
}
```

