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

##### 我的思路：

##### 		疯狂递归

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

# 113. Path Sum II

Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

**Note:** A leaf is a node with no children.

**Example:**

Given the below binary tree and `sum = 22`,

```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
```

Return:

```
[
   [5,4,11,2],
   [5,8,4,5]
]
```

##### 2019.07.30

##### 我的思路：

##### 方法1：

​		非递归

```javascript
var pathSum = function(root, sum) {
    let result = [];
    let stack = [];
    let cur = root;
    let pre = null;
    while (cur || stack.length) {
        while (cur) {
            sum -= cur.val;
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (sum === 0 && !cur.left && !cur.right) {
            result.push(stack.map(e => e.val));
        }
        if (cur.right && pre != cur.right) {
            cur = cur.right;
        }
        else {
            pre = cur;
            stack.pop();
            sum += cur.val;
            cur = null;
        }
    }
    return result;
};
```

##### 方法2：

​		dfs

```javascript
var pathSum = function(root, sum) {
    let result = [];
    let list = [];
    dfs(result, list, root, sum);
    return result;
}

function dfs(result, list, node, sum) {
    if (!node) {
        return;
    }
    list.push(node.val);
    if (node.val === sum && !node.left && !node.right) {
        result.push(Array.from(list));
        list.pop();
        return;
    }
    dfs(result, list, node.left, sum - node.val);
    dfs(result, list, node.right, sum - node.val);
    list.pop();
}
```

