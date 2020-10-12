# 530. Minimum Absolute Difference in BST

Given a binary search tree with non-negative values, find the minimum [absolute difference](https://en.wikipedia.org/wiki/Absolute_difference) between values of any two nodes.

**Example:**

```
Input:

   1
    \
     3
    /
   2

Output:
1

Explanation:
The minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).
```

 

**Note:**

- There are at least two nodes in this BST.
- This question is the same as 783: https://leetcode.com/problems/minimum-distance-between-bst-nodes/



#### 2020.10.12

#### 	我的思路：

无情dfs，拿下双百

```javascript
function getMinimumDifference(root: TreeNode | null): number {
    let pre: TreeNode | null = null;
    let min = Infinity;
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return;
        }
        dfs(node.left);
        pre && (min = Math.min(node.val - pre.val, min));
        pre = node;
        dfs(node.right);
    }
    dfs(root);
    return min;
};
```

