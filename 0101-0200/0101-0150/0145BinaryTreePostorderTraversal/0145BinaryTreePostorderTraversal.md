# 145. Binary Tree Postorder Traversal

Given the `root` of a binary tree, return *the postorder traversal of its nodes' values*.

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2020/08/28/pre1.jpg)

**Example 2:**

```
Input: root = []
Output: []
```

**Example 3:**

```
Input: root = [1]
Output: [1]
```

**Example 4:**

![img](https://assets.leetcode.com/uploads/2020/08/28/pre3.jpg)

**Example 5:**

![img](https://assets.leetcode.com/uploads/2020/08/28/pre2.jpg)

 

**Constraints:**

- The number of the nodes in the tree is in the range `[0, 100]`.
- `-100 <= Node.val <= 100`

 

**Follow up:**

Recursive solution is trivial, could you do it iteratively?

 

#### 2020.09.29

#### 我的方法：

​		非递归

```javascript
function postorderTraversal(root: TreeNode | null): number[] {
    const result = [];
    const stack = [];
    let cur = root;
    let pre = null;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && cur.right != pre) {
            cur = cur.right;
        }
        else {
            result.push(cur.val);
            stack.pop();
            pre = cur;
            cur = null;
        }
    }

    return result;
};
```

