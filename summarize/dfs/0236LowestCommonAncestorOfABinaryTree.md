# 236. Lowest Common Ancestor of a Binary Tree

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow **a node to be a descendant of itself**).”

Given the following binary tree:  root = [3,5,1,6,2,0,8,null,null,7,4]

![img](https://assets.leetcode.com/uploads/2018/12/14/binarytree.png)

**Example 1:**

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
Output: 3
Explanation: The LCA of nodes 5 and 1 is 3.
```

**Example 2:**

```
Input: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 4
Output: 5
Explanation: The LCA of nodes 5 and 4 is 5, since a node can be a descendant of itself according to the LCA definition.
```

 

**Note:**

- All of the nodes' values will be unique.
- p and q are different and both values will exist in the binary tree.

##### 2019.11.01

##### 	我的思路：

没写出来

##### 别人的写法：

##### 递归

​	在每个结点的左右结点中寻找```p,q```，

1. 如果左右子树分别包含p和q，即当前结点就是结果
2. 在1的基础上，返回的结点是在上层迭代中是left或者right，对应了right或者left肯定是空值
3. 所以最后```left === null ? right : left;```

```javascript
var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root == q)  {
        return root;
    }
    let left = lowestCommonAncestor(root.left, p, q);
    let right = lowestCommonAncestor(root.right, p, q);
    if (left && right) {   //情况1
        return root;
    }
    if (!left && !right) {
        return null;
    }
    return left === null ? right : left; //2, 3
};
```
