# 111. Minimum Depth of Binary Tree

Given a binary tree, find its minimum depth.

The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

**Note:** A leaf is a node with no children.

**Example:**

Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its minimum depth = 2.

##### 2019.07.28

##### 	我的思路：

##### 		方法1：

​		我知道可以递归但是递归这种场景远慢与bfs层次遍历，所以直接写bfs了

```javascript
var minDepth = function(root) {
    if (!root) {
        return 0;
    }
    let queue = [root];
    let height = 0;
    while (queue.length) {
        height++;
        let len = queue.length;
        while (len--) {
            let node = queue.shift();
            if (!node.left && !node.right) {
                return height;
            }
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
    }
};
```

##### 		方法2：

​		顺手写下递归

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
