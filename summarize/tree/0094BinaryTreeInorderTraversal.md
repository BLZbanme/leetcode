# 94. Binary Tree Inorder Traversal

Given a binary tree, return the *inorder* traversal of its nodes' values.

**Example:**

```
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]
```

**Follow up:** Recursive solution is trivial, could you do it iteratively?

##### 2019.07.19

##### 	我的思路：

###### 方法1：

​		递归

```javascript
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let result = [];
    inorder(root, result);
    return result;
};

/**
 * 
 * @param {TreeNode} node 
 * @param {number[]} result 
 */
function inorder(node, result) {
    if (!node) {
        return;
    }
    inorder(node.left, result);
    result.push(node.val);
    inorder(node.right, result);
}
```

###### 		方法2：

​		我的思路是用遍历的时候用栈存遍历到哪了，但是由于我这样会在有左子树的地方疯狂循环，所以我设置了一个标志栈，来记录哪些结点的左子树是遍历过了

```javascript
var inorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    let result = [];
    let nodeStack = [];
    let logStack = [];
    nodeStack.push(root);
    logStack.push(0);
    while (nodeStack.length) {
        let len = nodeStack.length;
        let tmp = nodeStack[len - 1];
        let logtmp = logStack[len - 1];
        if (tmp.left && logtmp === 0) {
            nodeStack.push(tmp.left);
            logStack[len - 1] = 1;
            logStack.push(0);
        }
        else {
            result.push(tmp.val);
            nodeStack.pop();
            logStack.pop();
            if (tmp.right) {
                nodeStack.push(tmp.right);
                logStack.push(0);
            }
        }
    }
    return result;
}
```

##### 别人的写法：

​		遍历一个结点就一直找到他的最左结点，这样退栈的时候就不会出现方法2中如果不加标志位，疯狂循环的情况。

```javascript
var inorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let cur = root;
    while (cur != null || stack.length) {
        while (cur != null) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        result.push(cur.val);
        cur = cur.right;
    }
    return result;
}
```

