# 235. Lowest Common Ancestor of a Binary Search Tree

Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the [definition of LCA on Wikipedia](https://en.wikipedia.org/wiki/Lowest_common_ancestor): “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow **a node to be a descendant of itself**).”

Given binary search tree:  root = [6,2,8,0,4,7,9,null,null,3,5]

![img](https://assets.leetcode.com/uploads/2018/12/14/binarysearchtree_improved.png)

**Example 1:**

```
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.
```

**Example 2:**

```
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.
```

 

**Note:**

- All of the nodes' values will be unique.
- p and q are different and both values will exist in the BST.

##### 2019.10.28

##### 	我的思路：

没写出来

1. 设置两个指针，差速遍历，找到中间结点
2. 把后半段头插法逆序
3. 对比前后两段，判断是不是回文的

##### 别人的写法：

来源leetcode官方答案

1. 从根节点开始遍历树
2. 如果节点 pp 和节点 qq 都在右子树上，那么以右孩子为根节点继续 1 的操作
3. 如果节点 pp 和节点 qq 都在左子树上，那么以左孩子为根节点继续 1 的操作
4. 如果条件 2 和条件 3 都不成立，这就意味着我们已经找到节 pp 和节点 qq 的 LCA 了

##### 递归版

```javascript
var lowestCommonAncestor = function(root, p, q) {
    let val = root.val;
    let pVal = p.val;
    let qVal = q.val;
    if (pVal > val && qVal > val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    else if (pVal < val && qVal < val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    else {
        return root;
    }
};
```

##### 迭代版

```javascript
var lowestCommonAncestor = function(root, p, q) {
    let pVal = p.val;
    let qVal = q.val;
    let node = root;
    while (node) {
        let val = node.val;
        if (pVal > val && qVal > val) {
            node = node.right;
        }
        else if (pVal < val && qVal < val) {
            node = node.left;
        }
        else {
            return node;
        }
    }
    return null;
}
```

