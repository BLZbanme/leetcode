# 104. Maximum Depth of Binary Tree

Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

**Note:** A leaf is a node with no children.

**Example:**

Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its depth = 3.

##### 2019.07.26

##### 	我的思路：

​		递归dfs，但我这个递归写的挺特么丑的。

```javascript
var maxDepth = function(root) {
    return computedHeight(root, 0);
};

function computedHeight(node, height) {
    if (!node) {
        return height;
    }
    return Math.max(computedHeight(node.left, height + 1), computedHeight(node.right, height + 1));
}
```

##### 				别人的写法：

​		递归dfs

````javascript
var maxDepth = function(root) {
    return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
````
