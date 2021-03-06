# 106. Construct Binary Tree from Inorder and Postorder Traversal

Given inorder and postorder traversal of a tree, construct the binary tree.

**Note:**
You may assume that duplicates do not exist in the tree.

For example, given

```
inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
```

Return the following binary tree:

```
    3
   / \
  9  20
    /  \
   15   7
```

#### 2020.09.25

#### 	我的思路：

递归

```javascript
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
    const helper = (inLeft: number, inRight: number, postLeft: number, postRight: number): TreeNode | null => {
        if (inLeft > inRight || postLeft > postRight) {
            return null;
        }
        let node = new TreeNode(postorder[postRight]);
        let inOrderIndex = inorder.indexOf(postorder[postRight]);
        node.left = helper(inLeft, inOrderIndex - 1, postLeft, inOrderIndex - inLeft + postLeft - 1)
        node.right = helper(inOrderIndex + 1, inRight, inOrderIndex - inLeft + postLeft, postRight - 1);

        return node;
    }

    return helper(0, inorder.length - 1, 0, postorder.length - 1);
};
```
