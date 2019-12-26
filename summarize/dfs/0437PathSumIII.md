# 437. Path Sum III

You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

**Example:**

```
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
```

##### 2019.12.26

#### 	我的思路：

##### 方法1：

​		递归，为了判断中间结点开始的路径，我在遍历每个结点的时候额外进行了一个从这开始的dfs操作，防止无限递归，用set存储了已经从遍历过的结点。

```javascript
var pathSum = function(root, sum) {
    let count = 0;
    let set = new Set([root]);

    function dfs(node, val) {
        if (!node) {
            return;
        }
        if (val === node.val) {
            count++;
        }

        if (!set.has(node)) {
            set.add(node);
            dfs(node, sum);
        }
        
        dfs(node.left, val - node.val);
        dfs(node.right, val - node.val);
        return;
    }

    dfs(root, sum);
    return count;
};
```

##### 方法2：

​    实质是我的方法的优化，双递归，很优美

```javascript
var pathSum = function(root, sum) {
    if (!root) {
        return 0;
    }
    return dfs(root, sum) + pathSum(root.left, sum) + pathSum(root.right, sum);
}

function dfs(node, val) {
    if (!node) {
        return 0;
    }
    return (node.val == val ? 1 : 0) + dfs(node.left, val - node.val) + dfs(node.right, val - node.val);
}
```

#### 别人的方法：

​     用pathSum记录了到当前结点，存在长度为n的路径m条，判断是否存在```curSum - target```的路径，存在的数量可用新增为满足条件路径的数量。

```javascript
var pathSum = function(root, sum) {
    let count = 0;
    let preSum = new Map();
    preSum.set(0, 1);

    function dfs(root, curSum, target) {
        if (!root) {
            return;
        }

        curSum += root.val;

        if (preSum.has(curSum - target)) {
            count += preSum.get(curSum - target);
        }

        if (!preSum.has(curSum)) {
            preSum.set(curSum, 1);
        }
        else {
            preSum.set(curSum, preSum.get(curSum) + 1);
        }

        dfs(root.left, curSum, target);
        dfs(root.right, curSum, target);
        preSum.set(curSum, preSum.get(curSum) - 1);
    }

    dfs(root, 0, sum);
    return count;
}
```



