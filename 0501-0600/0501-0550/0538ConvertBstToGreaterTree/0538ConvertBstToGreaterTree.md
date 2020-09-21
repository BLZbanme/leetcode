# 538. Convert BST to Greater Tree

Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.

**Example:**

```
Input: The root of a Binary Search Tree like this:
              5
            /   \
           2     13

Output: The root of a Greater Tree like this:
             18
            /   \
          20     13
```

**Note:** This question is the same as 1038: https://leetcode.com/problems/binary-search-tree-to-greater-sum-tree/



#### 2020.09.21

#### 	我的思路：

RDL遍历

```javascript
function convertBST(root: TreeNode | null): TreeNode | null {
    let count = 0;
    const dfs = (root: TreeNode | null) => {
        if (!root) return;
        dfs(root.right);
        root.val += count;
        count = root.val;
        dfs(root.left);
    }
    dfs(root);
    return root;
};
```

