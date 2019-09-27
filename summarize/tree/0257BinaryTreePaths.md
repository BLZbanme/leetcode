# 257.Binary Tree Paths

Given a binary tree, return all root-to-leaf paths.

**Note:** A leaf is a node with no children.

**Example:**

```
Input:

   1
 /   \
2     3
 \
  5

Output: ["1->2->5", "1->3"]

Explanation: All root-to-leaf paths are: 1->2->5, 1->3
```

##### 2019.09.27

##### 	我的思路：

​		递归的先序遍历

```javascript
var binaryTreePaths = function(root) {
    let reuslt = [];

    if (!root) {
        return reuslt;
    }
    
    let str = [];

    function DLR(node) {
        if (!node) {
            return;
        }
        str.push(node.val);
        if (!node.left && !node.right) {
            reuslt.push(str.join('->'));
        }
        DLR(node.left);
        DLR(node.right);
        str.pop();
    }

    DLR(root);
    return reuslt;
};
```
