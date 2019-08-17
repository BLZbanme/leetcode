# 144. Binary Tree Preorder Traversal

Given a binary tree, return the *preorder* traversal of its nodes' values.

**Example:**

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,2,3]
```

**Follow up:** Recursive solution is trivial, could you do it iteratively?

##### 2019.08.14

##### 我的方法：

​		递归

````javascript
var preorderTraversal = function(root) {
    let result = [];

    function DLR(node) {
        if (!node) {
            return;
        }
        result.push(node.val);
        DLR(node.left);
        DLR(node.right);
    }

    DLR(root);
    return result;
};
````

​		非递归

```javascript
var preorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let cur = root;
    let pre = null;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            result.push(cur.val);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && pre !== cur.right) {
            cur = cur.right;
        }
        else {
            stack.pop();
            pre = cur;
            cur = null;
        }
    }
    return result;
}
```

##### 别人的方法：

​		非递归

````javascript
var preorderTraversal = function(root) {
    let result = [];
    let rights = [];
    while (root) {
        result.push(root.val);
        if (root.right) {
            rights.push(root.right);
        }
        root = root.left;
        if (!root && rights.length) {
            root = rights.pop();
        }
    }
    return result;
}
````

