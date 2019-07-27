# 107. Binary Tree Level Order Traversal

Given a binary tree, return the *bottom-up level order* traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its bottom-up level order traversal as:

```
[
  [15,7],
  [9,20],
  [3]
]
```

##### 2019.07.27

##### 	我的思路：

##### 				方法1：

​		递归dfs

```javascript
var levelOrderBottom = function(root) {
    let result = [];
    levelHelper(root, result, 0);
    return result;
};

function levelHelper(node, list, level) {
    if (!node) {
        return;
    }
    let depth = list.length;
    if (depth === level) {
        list.unshift([]);
        depth += 1;
    }
    list[depth - level - 1].push(node.val);
    levelHelper(node.left, list, level + 1);
    levelHelper(node.right, list, level + 1);
}
```

##### 				方法2：

​		利用队列bfs

```javascript
var levelOrderBottom = function(root) {
    let queue = [root];
    let result = [];
    if (!root) {
        return result;
    }
    while (queue.length) {
        let len = queue.length;
        let tmp = [];
        while (len--) {
            let node = queue.shift();
            tmp.push(node.val);
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
        }
        result.unshift(tmp);
    }
    return result;
}
```

