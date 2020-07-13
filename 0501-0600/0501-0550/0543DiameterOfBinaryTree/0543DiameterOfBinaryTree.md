# 543. Diameter of Binary Tree

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the **longest** path between any two nodes in a tree. This path may or may not pass through the root.

**Example:**
Given a binary tree 

```
          1
         / \
        2   3
       / \     
      4   5    
```



Return **3**, which is the length of the path [4,2,1,3] or [5,2,1,3].

**Note:** The length of path between two nodes is represented by the number of edges between them.



##### 2020.07.14

##### 	我的思路：

```javascript
var diameterOfBinaryTree = function(root) {
    let max = 0;

    function dfs(root) {
        if (!root) {
            return 0;
        }

        let left = dfs(root.left);
        let right = dfs(root.right);
        max = Math.max(left + right, max);

        return 1 + Math.max(left, right);
    }

    dfs(root);

    return max;
};
```

