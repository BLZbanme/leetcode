# 98. Validate Binary Search Tree

Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

- The left subtree of a node contains only nodes with keys **less than** the node's key.
- The right subtree of a node contains only nodes with keys **greater than** the node's key.
- Both the left and right subtrees must also be binary search trees.

**Example 1:**

```
    2
   / \
  1   3

Input: [2,1,3]
Output: true
```

**Example 2:**

```
    5
   / \
  1   4
     / \
    3   6

Input: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

##### 2019.07.24

##### 	我的思路：

##### 		方法1：

​		我先想到的是递归

###### 		第一版：有错误，错误原因是只判断了每个结点和直接左右子节点的大小差异

```javascript
var isValidBST = function(root) {
    if (!node) {
        return true;
    }
    if ((!node.left || (node.val > node.left.val))
        && (!node.right || (node.val < node.right.val))
    ) {
        return isValidBST(node.left, lo, node.val) && isValidBST(node.right, node.val, hi);
    }
    return false;
};
```

###### 		第二版：增加了一个上下限值判断，然后我发现可以优化就有了第三版

```javascript
var isValidBST = function(root) {
    return valid(root, -Infinity, Infinity);
};

function valid(node, lo, hi) {
    if (!node) {
        return true;
    }
    if (node.val <= lo || node.val >= hi) {
        return false;
    }
    if ((!node.left || (node.val > node.left.val))
        && (!node.right || (node.val < node.right.val))
    ) {
        return valid(node.left, lo, node.val) && valid(node.right, node.val, hi);
    }
    return false;
}
```

###### 		第三版：

```javascript
var isValidBST = function(root) {
    return valid(root, -Infinity, Infinity);
};

function valid(node, lo, hi) {
    if (!node) {
        return true;
    }
    if (node.val <= lo || node.val >= hi) {
        return false;
    }
    return valid(node.left, lo, node.val) && valid(node.right, node.val, hi);
}
```

##### 		方法2：

​		中序遍历，判断是否严格递增序列

```javascript
var isValidBST = function(root) {
    let tmp = -Infinity;
    let stack = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= tmp) {
            return false;
        }
        tmp = root.val;
        root = root.right;
    }
    return true;
}
```

