# 404. Sum of Left Leaves

Find the sum of all left leaves in a given binary tree.

**Example:**

```
    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
```

##### 2019.12.02

#### 	我的思路：

##### 方法1：

​		递归

```javascript
var sumOfLeftLeaves = function(root) {
    let sum = 0;

    function dfs(node) {
        if (!node) {
            return;
        }
        if (node.left && !node.left.left && !node.left.right) {
            sum += node.left.val;
        }
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return sum;
};

```

​	优化：

```javascript
var sumOfLeftLeaves = function(root) {
    let sum = 0;

    if (!root) {
        return;
    }

    if (root.left && !root.left.left && !root.left.right) {
        sum += root.left.val;
    }

    sum += sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
    return sum;
};
```

##### 方法2：

​		非递归

```javascript
var sumOfLeftLeaves = function(root) {
    if (!root) {
        return 0;
    }
    let sum = 0;
    let stack = [root];
    while (stack.length) {
        let node = stack.pop();
        if (node.left) {
            if (!node.left.left && !node.left.right) {
                sum += node.left.val;
            }
            else {
                stack.push(node.left);
            }
        }

        if (node.right) {
            if (node.right.left || node.right.right) {
                stack.push(node.right);
            }
        }
    }

    return sum;
}
```
