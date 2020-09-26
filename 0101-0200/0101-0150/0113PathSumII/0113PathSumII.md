# 113. Path Sum II

Given a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.

**Note:** A leaf is a node with no children.

**Example:**

Given the below binary tree and `sum = 22`,

```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \    / \
7    2  5   1
```

Return:

```
[
   [5,4,11,2],
   [5,8,4,5]
]
```

##### 2019.07.30

##### 	我的思路：

##### 				方法1：

​		非递归

```javascript
var pathSum = function(root, sum) {
    let result = [];
    let stack = [];
    let cur = root;
    let pre = null;
    while (cur || stack.length) {
        while (cur) {
            sum -= cur.val;
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (sum === 0 && !cur.left && !cur.right) {
            result.push(stack.map(e => e.val));
        }
        if (cur.right && pre != cur.right) {
            cur = cur.right;
        }
        else {
            pre = cur;
            stack.pop();
            sum += cur.val;
            cur = null;
        }
    }
    return result;
};
```

##### 				方法2：

​		dfs

```javascript
var pathSum = function(root, sum) {
    let result = [];
    let list = [];
    dfs(result, list, root, sum);
    return result;
}

function dfs(result, list, node, sum) {
    if (!node) {
        return;
    }
    list.push(node.val);
    if (node.val === sum && !node.left && !node.right) {
        result.push(Array.from(list));
        list.pop();
        return;
    }
    dfs(result, list, node.left, sum - node.val);
    dfs(result, list, node.right, sum - node.val);
    list.pop();
}
```

#### 2020.09.26

#### redo

```typescript
function pathSum(root: TreeNode | null, sum: number): number[][] {
    const result: Array<Array<number>> = [];
    const stack: Array<TreeNode> = [];
    let cur = root;
    let pre: TreeNode | null = null;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            sum -= cur.val;
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && cur.right !== pre) {
            cur = cur.right;
        }
        else {
            if (!sum && !cur.left && !cur.right) {
                result.push(stack.map(e => e.val));
            }
            pre = cur;
            sum += cur.val;
            stack.pop();
            cur = null;
        }
    }

    return result;
};
```

