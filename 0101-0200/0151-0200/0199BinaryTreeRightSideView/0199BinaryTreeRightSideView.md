# 199. Binary Tree Right Side View

Given a binary tree, imagine yourself standing on the *right* side of it, return the values of the nodes you can see ordered from top to bottom.

**Example:**

```
Input: [1,2,3,null,5,null,4]
Output: [1, 3, 4]
Explanation:

   1            <---
 /   \
2     3         <---
 \     \
  5     4       <---
```

##### 2019.09.09

##### 	我的思路：

##### 	方法1:

​		层次遍历

```javascript
var rightSideView = function(root) {
    let result = [];
    if (!root) {
        return result;
    }
    let queue = [root];
    while (queue.length) {
        let len = queue.length;
        result.push(queue[len - 1].val);
        while (len--) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
    return result;
};
```

##### 	方法2:

​		递归

```javascript
var rightSideView = function(root) {
    if (!root) {
        return [];
    }
    let result = [];

    function recursion(node, height) {
        if (!node) {
            return;
        }
        if (!result[height]) {
            result.push(node.val);
        }
        if (node.right) {
            recursion(node.right, height + 1);
        }
        if (node.left) {
            recursion(node.left, height + 1);
        }
    }

    recursion(root, 0);
    return result;
}
```
