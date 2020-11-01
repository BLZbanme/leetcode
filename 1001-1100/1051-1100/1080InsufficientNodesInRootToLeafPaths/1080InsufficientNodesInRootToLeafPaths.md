# 1080. Insufficient Nodes in Root to Leaf Paths

Given the `root` of a binary tree, consider all *root to leaf paths*: paths from the root to any leaf. (A leaf is a node with no children.)

A `node` is *insufficient* if **every** such root to leaf path intersecting this `node` has sum strictly less than `limit`.

Delete all insufficient nodes simultaneously, and return the root of the resulting binary tree.

 

**Example 1:**

```
Input: root = [1,2,3,4,-99,-99,7,8,9,-99,-99,12,13,-99,14], limit = 1

Output: [1,2,3,4,null,null,7,8,9,null,14]
```

**Example 2:**

```
Input: root = [5,4,8,11,null,17,4,7,1,null,null,5,3], limit = 22

Output: [5,4,8,11,null,17,4,7,null,null,null,5]
```

 

**Example 3:**

```
Input: root = [1,2,-3,-5,null,4,null], limit = -1

Output: [1,null,-3,4]
```

 

**Note:**

1. The given tree will have between `1` and `5000` nodes.
2. `-10^5 <= node.val <= 10^5`
3. `-10^9 <= limit <= 10^9`



#### 2010.11.02

##### 	我的思路：

```javascript
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sufficientSubset(root: TreeNode | null, limit: number): TreeNode | null {
    const map = new Map();

    const dfs = (node: TreeNode | null): number => {
        if (!node) {
            return -Infinity;
        }
        let left = dfs(node.left);
        let right = dfs(node.right);

        var now = node.val;
        if (left == -Infinity && right == -Infinity) {
            
        }
        else if (left == -Infinity) {
            now += right;
        }
        else if (right == -Infinity) {
            now += left;
        }
        else {
            now += Math.max(left, right);
        }
        
        map.set(node, now);
        return now;
    }

    dfs(root);

    const helper = (node: TreeNode | null, sum: number) => {
        if (!node) {
            return;
        }
        sum += node.val;
        let leftSum = map.get(node.left) || 0;
        let rightSum = map.get(node.right) || 0;
        (sum + leftSum < limit) && (node.left = null);
        (sum + rightSum < limit) && (node.right = null);
        helper(node.left, sum);
        helper(node.right, sum);
    }

    const fakeNode = new TreeNode(0);
    fakeNode.right = root;

    helper(fakeNode, 0);

    return fakeNode.right;
};
```
