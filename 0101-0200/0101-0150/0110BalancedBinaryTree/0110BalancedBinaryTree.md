# 110. Balanced Binary Tree

Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

> a binary tree in which the left and right subtrees of *every* node differ in height by no more than 1.

 

**Example 1:**

Given the following tree `[3,9,20,null,null,15,7]`:

```
    3
   / \
  9  20
    /  \
   15   7
```

Return true.

**Example 2:**

Given the following tree `[1,2,2,3,3,null,null,4,4]`:

```
       1
      / \
     2   2
    / \
   3   3
  / \
 4   4
```

Return false.

#### 2020.08.17

#### 	我的思路：

​		递归

```typescript
function isBalanced(root: TreeNode | null): boolean {
    let result = true;
    const dfs = (root: TreeNode | null): number => {
        if (!result) {
            return -1;
        }

        if (!root) {
            return 0;
        }

        let left = dfs(root.left);
        let right = dfs(root.right);
        if (Math.abs(left - right) > 1) {
            result = false;
            return -1;
        }

        return 1 + Math.max(left, right);
    }

    dfs(root);

    return result;
};
```

优化一下：

```typescript
function isBalanced2(root: TreeNode | null): boolean {
    const dfs = (root: TreeNode | null): number => {
        if (!root) {
            return 0;
        }

        let left = dfs(root.left);
        let right = dfs(root.right);
        if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
            return -1;
        }
        return 1 + Math.max(left, right);
    }

    return dfs(root) >= 0;
};
```

