# 112. Path Sum

Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

**Note:** A leaf is a node with no children.

**Example:**

Given the below binary tree and `sum = 22`,

```
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
```

return true, as there exist a root-to-leaf path `5->4->11->2` which sum is 22.

##### 2019.07.27

##### 	我的思路：

##### 				方法1：

​		递归dfs

```javascript
var hasPathSum = function(root, sum) {
    return dfs(root, sum);
};

function dfs(node, num) {
    if (!node) {
        return false;
    }
    if (!node.left && !node.right) {
        return node.val === num;
    }
    num = num - node.val;
    return dfs(node.left, num) || dfs(node.right, num);
}
```

##### 				方法2：

​		利用队列bfs

```javascript
var hasPathSum = function(root, sum) {
    if (!root) {
        return false;
    }
    let sumQueue = [sum - root.val];
    let queue = [root];
    while(queue.length) {
        let node = queue.shift();
        let num = sumQueue.shift();
        if (num === 0 && !node.left && !node.right) {
            return true;
        }
        if (node.left) {
            queue.push(node.left);
            sumQueue.push(num - node.left.val);
        }
        if (node.right) {
            queue.push(node.right);
            sumQueue.push(num - node.right.val);
        }
    }
    return false;
}
```

##### 别人的写法：

​		非递归后序遍历

```javascript
var hasPathSum = function(root, sum) {
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
        if (sum == 0 && !cur.left && !cur.right) {
            return true;
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
    return false;
}
```

#### 2020.07.07

非递归后序

```javascript
var hasPathSum = function(root, sum) {
    const stack = [];
    let cur = root;
    let pre = null;
    while (cur || stack.length) {
        while (cur) {
            sum -= cur.val;
            stack.push(cur);
            cur = cur.left
        }
        
        cur = stack[stack.length - 1];
        if (!sum && !cur.left && !cur.right) {
            return true;
        }
        if (cur.right && cur.right != pre) {
            cur = cur.right;
        }
        else {
            stack.pop();
            pre = cur;
            sum += cur.val;
            cur = null;
        }
    }
    return false;
};
```

