# 108. Convert Sorted Array to Binary Search Tree

Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of *every* node never differ by more than 1.

**Example:**

```
Given the sorted array: [-10,-3,0,5,9],

One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5
```

##### 2020.07.03

##### 	我的思路：

​		递归

```javascript
var sortedArrayToBST = function(nums) {
    if (!nums || !nums.length) {
        return null;
    }
    return dfs(nums, 0, nums.length - 1);
};

function dfs(nums, lo, hi) {
    if (lo > hi) {
        return null;
    }


    let mid = lo + ((hi - lo + 1) >> 1);
    let node = new TreeNode(nums[mid]);
    node.left = dfs(nums, lo, mid - 1);
    node.right = dfs(nums, mid + 1, hi);
    return node;
}
```
