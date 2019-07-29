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

##### 2019.07.29

##### 	我的思路：

##### 				疯狂递归

​		先写了直接划分数组的，然后写了个根据下标来划的

```javascript
var buildTree = function(inorder, postorder) {
    if (!postorder.length) {
        return null;
    }
    let root = new TreeNode(postorder.pop());
    let index = inorder.indexOf(root.val);

    let inorderLeft = inorder.slice(0, index);
    let inorderRight = inorder.slice(index + 1);

    let postorderLeft = postorder.slice(0, index);
    let postorderRight = postorder.slice(index);

    root.left = buildTree(inorderLeft, postorderLeft);
    root.right = buildTree(inorderRight, postorderRight);
    return root;
};
```

```javascript
var buildTree = function(inorder, postorder) {
    const N = postorder.length;
    if (!postorder.length) {
        return null;
    }
    return buildTreeHelper(inorder, postorder, 0, N - 1, 0, N - 1);
};

var buildTreeHelper = function(inorder, postorder, inorderStart, inorderEnd, postorderStart, postorderEnd) {
    if (inorderStart > inorderEnd) {
        return null;
    }
    let root = new TreeNode(postorder[postorderEnd]);
    let index = inorder.indexOf(root.val);
    root.left = buildTreeHelper(inorder, postorder, inorderStart, index - 1, postorderStart, postorderStart + index - inorderStart - 1);
    root.right = buildTreeHelper(inorder, postorder, index + 1, inorderEnd, postorderStart + index - inorderStart, postorderEnd - 1);
    return root;
}
```
