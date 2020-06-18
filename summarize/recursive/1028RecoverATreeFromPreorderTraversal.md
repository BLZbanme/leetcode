# 1028. Recover a Tree From Preorder Traversal

We run a preorder depth first search on the `root` of a binary tree.

At each node in this traversal, we output `D` dashes (where `D` is the *depth* of this node), then we output the value of this node.  *(If the depth of a node is D, the depth of its immediate child is D+1.  The depth of the root node is 0.)*

If a node has only one child, that child is guaranteed to be the left child.

Given the output `S` of this traversal, recover the tree and return its `root`.

**Example 1:**

**![img](https://assets.leetcode.com/uploads/2019/04/08/recover-a-tree-from-preorder-traversal.png)**

```
Input: "1-2--3--4-5--6--7"
Output: [1,2,5,3,4,6,7]
```

**Example 2:**

**![img](https://assets.leetcode.com/uploads/2019/04/11/screen-shot-2019-04-10-at-114101-pm.png)**

```
Input: "1-2--3---4-5--6---7"
Output: [1,2,5,3,null,6,null,4,null,7]
```

 

**Example 3:**

![img](https://assets.leetcode.com/uploads/2019/04/11/screen-shot-2019-04-10-at-114955-pm.png)

```
Input: "1-401--349---90--88"
Output: [1,401,null,349,88,90]
```

**Note:**

- The number of nodes in the original tree is between `1` and `1000`.
- Each node will have a value between `1` and `10^9`.

##### 2020.06.18

##### 	我的思路：

就是非递归的先序遍历思路，平平无奇，写完看了官方答案和我大同小异

```javascript
var recoverFromPreorder = function(S) {
    if (!S.length) {
        return null;
    }

    const stack = [];

    let height = 0;
    let underLineCount = 0;
    let num = 0;
    let i = 0;

    while (i < S.length) {

        while (S[i] === '-') {
            underLineCount++;
            i++;
        }

        while (S[i] >= '0' && S[i] <= '9') {
            num = num * 10 + +S[i++];
        }

        while (height != underLineCount) {
            stack.pop();
            height--;
        } 

        let newNode = new TreeNode(num);
        if (stack.length) {
            if (stack[stack.length - 1].left) {
                stack[stack.length - 1].right = newNode;
            }
            else {
                stack[stack.length - 1].left = newNode;
            }
        }
        stack.push(newNode);
        height++;
        underLineCount = 0;
        num = 0;
    }

    return stack[0];
};
```

