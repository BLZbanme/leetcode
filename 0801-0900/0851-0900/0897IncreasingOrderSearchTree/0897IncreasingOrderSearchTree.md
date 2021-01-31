# 897. Increasing Order Search Tree

Given the `root` of a binary search tree, rearrange the tree in **in-order** so that the leftmost node in the tree is now the root of the tree, and every node has no left child and only one right child.

 

**Example 1:**





```
Input: root = [5,3,6,2,4,null,8,1,null,null,null,7,9]
Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]
```

**Example 2:**





```
Input: root = [5,1,7]
Output: [1,null,5,null,7]
```

 

**Constraints:**

- The number of nodes in the given tree will be in the range `[1, 100]`.
- `0 <= Node.val <= 1000`

#### 2021.01.31

#### 	我的思路：

非递归

```javascript
function increasingBST1(root: TreeNode | null): TreeNode | null {
    const stack = [];
    const fakeNode = new TreeNode();
    let pre = fakeNode;
    let cur = root;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop()!;
        pre.right = cur;
        pre = cur;
        cur.left = null; 
        cur = cur.right;
    }
    return fakeNode.right;
};

```

递归

```typescript
function increasingBST(root: TreeNode | null): TreeNode | null {
    const fakeNode = new TreeNode();
    let pre = fakeNode;

    const dfsHelper = (root: TreeNode | null) => {
        if (!root) return;
        dfsHelper(root.left);
        root.left = null;
        pre.right = root;
        pre = root;
        dfsHelper(root.right);
        return;
    }
    dfsHelper(root);
    return fakeNode.right;
};

```

