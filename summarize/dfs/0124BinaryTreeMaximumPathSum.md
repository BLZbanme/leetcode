# 124. Binary Tree Maximum Path Sum

Given a **non-empty** binary tree, find the maximum path sum.

For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain **at least one node** and does not need to go through the root.

**Example 1:**

```
Input: [1,2,3]

       1
      / \
     2   3

Output: 6
```

**Example 2:**

```
Input: [-10,9,20,null,null,15,7]

   -10
   / \
  9  20
    /  \
   15   7

Output: 42
```

##### 2020.06.21

##### 我的方法：

​		阿该秒杀了一道hard，阿该你太猛了！跟标准答案思路一致。为什么用-Infinity，因为如果全是负数的时候，0会有bug。

​		**思路：**后序递归遍历，判断每个子树的根结点和左右两边子树的和的最大值，然后返回根节点到左/右子树中的某一棵的最大值！如果左右子树都小于0，就不走它们！

​		我的思路是：用一个二维dp数组存储，```dp[i][j]```表示从i到j的只买卖一次的利润，这样dp里面能存储所以i到j的一次买卖的利润。然后最后一次遍历，把prices划分为两边，得到两边和最大的值就是结果。

```javascript
var maxPathSum = function(root) {
    let max = -Infinity;

    function dfs(node) {
        if (!node) {
            return -Infinity;
        }

        let left = Math.max(dfs(node.left), 0);
        let right =  Math.max(dfs(node.right), 0);
        let now = node.val;
        max = Math.max(max, now + left + right)
        return node.val + Math.max(left, right);
    }

    dfs(root);
    return max;
};
```


