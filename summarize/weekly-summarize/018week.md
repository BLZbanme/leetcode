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

# 238.Product of Array Except Self

Given an array `nums` of *n* integers where *n* > 1,  return an array `output` such that `output[i]` is equal to the product of all the elements of `nums` except `nums[i]`.

**Example:**

```
Input:  [1,2,3,4]
Output: [24,12,8,6]
```

**Note:** Please solve it **without division** and in O(*n*).

**Follow up:**
Could you solve it with constant space complexity? (The output array **does not** count as extra space for the purpose of space complexity analysis.)

##### 2019.10.29

##### 我的思路：

不用除法我没思路

##### 别人的方法：

​	先用一个数组存储从左到右，到各个下标的乘积，然后存储一个从右到左乘积的值	

```javascript
var productExceptSelf = function(nums) {
    const N = nums.length;
    let res = new Array(N);
    res[0] = 1;
    for (let i = 1; i < N; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    let right = 1;
    for (let i = N - 1; i >= 0; i--) {
        res[i] *= right;
        right *= nums[i];
    }
    return res;
};
```

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

##### 我的思路：

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