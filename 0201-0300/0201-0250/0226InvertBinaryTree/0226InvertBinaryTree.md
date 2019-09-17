# 219. Contains Duplicate II

Invert a binary tree.

**Example:**

Input:

```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```

Output:

```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```

**Trivia:**
This problem was inspired by [this original tweet](https://twitter.com/mxcl/status/608682016205344768) by [Max Howell](https://twitter.com/mxcl):

> Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so f*** off.

##### 2019.09.17

##### 	我的思路：

​		递归dfs

```javascript
var invertTree = function(root) {
    if (!root) {
        return null;
    }
    let left = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(left);
    return root;
};
```

​		bfs

```javascript
var invertTree = function(root) {
    if (!root) {
        return null;
    }

    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        let left = node.left;
        node.left = node.right;
        node.right = left;

        if (node.left) {
            queue.push(node.left);
        }

        if (node.right) {
            queue.push(node.right);
        }
    }
    return root;
}
```

##### 别人的方法：

​		非递归dfs

```javascript
var invertTree = function(root) {
    if (!root) {
        return null;
    }
    let stack = [root];
    while (stack.length) {
        let node = stack.pop();
        let left = node.left;
        node.left = node.right;
        node.right = left;

        if (node.right) {
            stack.push(node.right);
        }

        if (node.left) {
            stack.push(node.left);
        }
    }
    return root;
}
```

​		