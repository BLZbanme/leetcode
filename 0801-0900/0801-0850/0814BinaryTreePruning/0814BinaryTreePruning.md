# 814. Binary Tree Pruning

We are given the head node `root` of a binary tree, where additionally every node's value is either a 0 or a 1.

Return the same tree where every subtree (of the given tree) not containing a 1 has been removed.

(Recall that the subtree of a node X is X, plus every node that is a descendant of X.)

```
Example 1:
Input: [1,null,0,0,1]
Output: [1,null,0,null,1]
 
Explanation: 
Only the red nodes satisfy the property "every subtree not containing a 1".
The diagram on the right represents the answer.
Example 2:
Input: [1,0,1,0,0,0,1]
Output: [1,null,1,null,1]
Example 3:
Input: [1,1,0,1,1,0,1,0]
Output: [1,1,0,1,1,null,1]
```

**Note:**

- The binary tree will have at most `100 nodes`.
- The value of each node will only be `0` or `1`.



#### 2020.07.13

#### 	我的思路：

​	把每个数组项的前面和后面交换。

​	时间复杂度O(M*N)M是数组长度，N是数组中的数组长度

```javascript
var pruneTree = function(root) {

    function dfs(node) {
        if (!node) {
            return false
        }

        let left = dfs(node.left);
        let right = dfs(node.right);

        if (!left) {
            node.left = null;
        }

        if (!right) {
            node.right = null;
        }

        return node.val === 1 || left || right;
    }

    dfs(root);

    return root;
};
```


