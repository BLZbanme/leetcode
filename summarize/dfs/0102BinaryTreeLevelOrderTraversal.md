# 102. Binary Tree Level Order Traversal

Given a binary tree, return the *level order* traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree `[3,9,20,null,null,15,7]`,

```
    3
   / \
  9  20
    /  \
   15   7
```

return its level order traversal as:

```
[
  [3],
  [9,20],
  [15,7]
]
```

##### 2019.07.25

##### 	我的思路：

​		利用队列层次遍历bfs，为了判断是哪一层的，我采取的是增加一个下标队列，用来记录结点的对应完全二叉树的下标。真是野路子！

```javascript
var levelOrder = function(root) {
    let result = [];
    if (!root) {
        return result;
    }
    let tmp = 0;
    let queue = [root];
    let indexQueue = [1];
    while (queue.length) {
        let node = queue.shift();
        let index = indexQueue.shift();
        if (index >= (2 ** (tmp + 1))) {
            tmp++;
        }
        if (!result[tmp]) {
            result[tmp] = [node.val];
        }
        else {
            result[tmp].push(node.val);
        }
        if (node.left) {
            queue.push(node.left);
            indexQueue.push(index * 2);
        }
        if (node.right) {
            queue.push(node.right);
            indexQueue.push(index * 2 + 1);
        }
    }
    return result;
};
```

##### 别人的写法：

###### 		写法1：

​		也是利用队列bfs，但不同的是它每次换层的时候都会记录当前队列的长度，这样可以区分层次，比我的优秀。

```javascript
var levelOrder = function(root) {
    let result = [];
    if (!root) {
        return result;
    }
    let queue = [root];
    while (queue.length) {
        let level = queue.length;
        let tmp = [];
        while (level--) {
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            tmp.push(node.val);
        }
        result.push(tmp);
    }
    return result;
}
```

###### 				写法2：

​		dfs，用level参数来标注属于哪一层，也是精致！

````javascript
var levelOrder = function(root) {
    let result = [];
    levelHelper(result, root, 0);
    return result;
}

function levelHelper(list, node, level) {
    if (!node) {
        return;
    }
    if (level >= list.length) {
        list.push([]);
    }
    list[level].push(node.val);

    levelHelper(list, node.left, level + 1);
    levelHelper(list, node.right, level + 1);
}
````
