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

# 114. Flatten Binary Tree to Linked List

Given a binary tree, flatten it to a linked list in-place.

For example, given the following tree:

```
    1
   / \
  2   5
 / \   \
3   4   6
```

The flattened tree should look like:

```
1
 \
  2
   \
    3
     \
      4
       \
        5
         \
          6
```

##### 2019.07.30

##### 我的思路：

##### 方法1：

​		铁憨憨版，我这种并不是原地实现，实属铁憨憨

```javascript
var flatten = function(root) {
    if (!root) {
        return null;
    }
    let arr = [];
    dfs(root, arr);
    let n = arr.length - 1;
    while (n--) {
        arr[n].left = null;
        arr[n].right = arr[n + 1];
    }
    return root;
};

function dfs(node, arr) {
    if (!node) {
        return;
    }
    arr.push(node);
    dfs(node.left, arr);
    dfs(node.right, arr);
}
```

##### 别人的方法：

##### 方法1：

​		递归，RLD的后序遍历，一开始是这样写的

```javascript
var pre = null;

var flatten = function(root) {
    if (!root) {
        return;
    }
    flatten(root.right);
    flatten(root.left);
    root.right = pre;
    root.left = null;
    pre = root;
}
```

​		由于运行测试用例时，pre全局声明不会把它重新置为null，导致出现bug。所以我先改了一版下面的。

```javascript
let pre = null;

var flatten = function(root) {
    dfs(root);
    pre = null;
}

function dfs(root) {
    if (!root) {
        return;
    }
    dfs(root.right);
    dfs(root.left);
    root.right = pre;
    root.left = null;
    pre = root;
}
```

​		又由于全局变量并不是一种好的解决方案，我使用了闭包。

```javascript
var flatten = function(root) {
    let pre = null;
    function dfs(root) {
        if (!root) {
            return;
        }
        dfs(root.right);
        dfs(root.left);
        root.right = pre;
        root.left = null;
        pre = root;
    }
    dfs(root);
}
```

​		最后我干脆用非递归写了一遍

```javascript
var flatten = function(root) {
    let stack = [];
    let pre = null;
    let cur = root;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.right;
        }
        cur = stack[stack.length - 1];
        if (cur.left && cur.left !== pre) {
            cur = cur.left;
        }
        else {
            cur.right = pre;
            cur.left = null;
            stack.pop();
            pre = cur;
            cur = null;
        }
    }
    return root;
}
```

##### 注：高亮答案中提到了morris遍历，周末看