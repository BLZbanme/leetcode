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

#### 2020.09.04

##### redo

```typescript
function binaryTreePaths(root: TreeNode | null): string[] {
    const result: Array<string> = [];
    if (!root) {
        return result;
    }

    const stack: Array<TreeNode> = [];
    let cur: TreeNode | null = root;
    let pre: TreeNode | null = null;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && cur.right !== pre) {
            cur = cur.right;
        }
        else {
            if (!cur.left && !cur.right) {
                result.push(stack.map(e => e.val).join('->'));
            }
            pre = cur;
            stack.pop();
            cur = null;
        }
    }

    return result;
};
```

