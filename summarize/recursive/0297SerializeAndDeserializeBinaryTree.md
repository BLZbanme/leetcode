# 297. Serialize and Deserialize Binary Tree

Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

**Example:** 

```
You may serialize the following tree:

    1
   / \
  2   3
     / \
    4   5

as "[1,2,3,null,null,4,5]"
```

**Clarification:** The above format is the same as [how LeetCode serializes a binary tree](https://leetcode.com/faq/#binary-tree). You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.

**Note:** Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.

##### 2020.06.16

##### 	我的思路：

##### 	（错解1）

序列化：层次遍历每一项放入一个链表中，存储的下标等同于他们的完全二叉树形式。

反序列化：遍历数组，还是按照完全二叉树的规律，连接他们的左右子树。

很遗憾，超时！

```javascript
var serialize = function(root) {
    const result = [];
    let queue = [root];
    while (queue.length) {
        let n = queue.length;
        let hasOne = false;
        for (let i = 0; i < n; i++) {
            let tmp = queue.shift();
            result.push(tmp ? tmp.val : 'null');
            if (!tmp) {
                queue.push(null);
                queue.push(null);
            }
            else {
                if (tmp.left || tmp.right) {
                    hasOne = true;
                }
                queue.push(tmp.left);
                queue.push(tmp.right);
                
            }
        }
        if (!hasOne) {
            break;
        }
    }
    return `[${result.join(',')}]`;
};

var deserialize = function(data) {
    let rootArr = JSON.parse(data);
    if (!rootArr) {
        return null;
    }
    rootArr.unshift(null);
    const map = new Map();
    let rootVal = rootArr[1];
    if (typeof rootVal !== 'number') {
        return null;
    }
    let root = new TreeNode(rootVal);
    map.set(1, root);
    for (let i = 1;  i < rootArr.length / 2; i++) {
        let tmp = rootArr[i];
        if (typeof tmp === 'number') {
            let newTreeNode = map.get(i) || new TreeNode(tmp);
            let leftVal = rootArr[i * 2];
            let rightVal = rootArr[i * 2 + 1];
            if (typeof leftVal === "number") {
                let left = new TreeNode(leftVal);
                map.set(i * 2, left);
                newTreeNode.left = left;
            }
            if (typeof rightVal === "number") {
                let right = new TreeNode(rightVal);
                map.set(i * 2 + 1, right);
                newTreeNode.right = right;
            }
        }
    }
    return root;
};
```

##### （错解2）

递归写的，可能是由于我的思路局限在用数组存储完全二叉树了，再次超时

```javascript
var serialize = function(root) {
    const result = [];

    function dfs(root, i) {
        result[i] = root.val;
        if (root.left) {
            dfs(root.left, i * 2);
        }
        if (root.right) {
            dfs(root.right, i * 2 + 1);
        }
    }

    if (root) {
        dfs(root, 1);
    }
    result.shift();
    return JSON.stringify(result);
};

var deserialize = function(data) {
    let rootArr = JSON.parse(data);
    if (!rootArr) {
        return null;
    }
    rootArr.unshift(null);

    let rootVal = rootArr[1];
    if (typeof rootVal !== 'number') {
        return null;
    }
    let root = new TreeNode(rootVal);

    function dfs(parent, i) {
        if (typeof rootArr[i * 2] === 'number') {
            parent.left = new TreeNode(rootArr[i * 2]);
            dfs(parent.left, i * 2);
        }
        if (typeof rootArr[i * 2 + 1] === 'number') {
            parent.right = new TreeNode(rootArr[i * 2 + 1]);
            dfs(parent.right, i * 2 + 1);
        }
    }
    dfs(root, 1);

    return root;
};
```

#### 别人的写法：

##### dfs：

```javascript
const serialize = root => {
    if (!root) {
        return "X,"
    }
    const leftSerialized = serialize(root.left);
    const rightSerialized = serialize(root.right);
    return root.val + "," + leftSerialized + rightSerialized;
}

const buildTree = list => {
    const nodeVal = list.shift();
    if (nodeVal === "X") {
        return null;
    }
    const node = new TreeNode(nodeVal);
    node.left = buildTree(list);
    node.right = buildTree(list);
    return node;
}

const deserialize = data => {
    const list = data.split(",");
    return buildTree(list);
}
```

##### bfs:

```javascript
const deserialize = data => {
    const list = data.split(",");
    return buildTree(list);
}

const serialize = root => {
    const queue = [root];
    let res = [];
    while (queue.length) {
        const node = queue.shift();
        if (node) {
            res.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        }
        else {
            res.push("X");
        }
    }
    return res.join(",")
}

const deserialize = data => {
    if (data == "X") {
        return null;
    }
    const list = data.split(",");
    const root = new TreeNode(list[0]);
    const queue = [root];
    let cursor = 1;
    while (cursor < list.length) {
        const node = queue.shift();
        const leftVal = list[cursor];
        const rightVal = list[cursor + 1];
        if (leftVal !== "X") {
            const leftNode = new TreeNode(leftVal);
            node.left = leftNode;
            queue.push(leftNode);
        }
        if (rightVal !== "X") {
            const rightNode = new TreeNode(rightVal);
            node.right = rightNode;
            queue.push(rightNode);
        }
        cursor += 2;
    }
    return root;
}
```

