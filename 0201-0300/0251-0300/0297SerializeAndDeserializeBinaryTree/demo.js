/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
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
    // return `[${result.join(',')}]`;
    return JSON.stringify(result);
};


// var serialize = function(root) {
//     const result = [];
//     let queue = [root];
//     while (queue.length) {
//         let n = queue.length;
//         let hasOne = false;
//         for (let i = 0; i < n; i++) {
//             let tmp = queue.shift();
//             result.push(tmp ? tmp.val : 'null');
//             if (!tmp) {
//                 queue.push(null);
//                 queue.push(null);
//             }
//             else {
//                 if (tmp.left || tmp.right) {
//                     hasOne = true;
//                 }
//                 queue.push(tmp.left);
//                 queue.push(tmp.right);
                
//             }
//         }
//         if (!hasOne) {
//             break;
//         }
//     }
//     return `[${result.join(',')}]`;
//     // return JSON.stringify(result);
// };

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
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

// var deserialize = function(data) {
//     let rootArr = JSON.parse(data);
//     if (!rootArr) {
//         return null;
//     }
//     rootArr.unshift(null);
//     const map = new Map();
//     let rootVal = rootArr[1];
//     if (typeof rootVal !== 'number') {
//         return null;
//     }
//     // debugger
//     let root = new TreeNode(rootVal);
//     map.set(1, root);
//     for (let i = 1;  i < rootArr.length / 2; i++) {
//         let tmp = rootArr[i];
//         if (typeof tmp === 'number') {
//             let newTreeNode = map.get(i) || new TreeNode(tmp);
//             let leftVal = rootArr[i * 2];
//             let rightVal = rootArr[i * 2 + 1];
//             if (typeof leftVal === "number") {
//                 let left = new TreeNode(leftVal);
//                 map.set(i * 2, left);
//                 newTreeNode.left = left;
//             }
//             if (typeof rightVal === "number") {
//                 let right = new TreeNode(rightVal);
//                 map.set(i * 2 + 1, right);
//                 newTreeNode.right = right;
//             }
//         }
//     }
//     return root;
// };


// var deserialize = function(data) {
//     let rootArr = JSON.parse(data);
//     if (!rootArr) {
//         return null;
//     }
//     rootArr.unshift(null);
//     const map = new Map();
//     let rootVal = rootArr[1];
//     if (typeof rootVal !== 'number') {
//         return null;
//     }
//     let root = new TreeNode(rootVal);
//     map.set(1, root);
//     for (let i = 2;  i < rootArr.length; i++) {
//         let tmp = rootArr[i];
//         if (typeof tmp === 'number') {
//             let newTreeNode = new TreeNode(tmp);
//             map.set(i, newTreeNode);
//             let parent = null;
//             if (!(i % 2)) {
//                 parent = map.get(i / 2);
//                 parent.left = newTreeNode;
//             }
//             else {
//                 parent = map.get((i - 1) / 2);
//                 parent.right = newTreeNode;
//             }
//         }
//     }
//     return root;
// };

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */


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

  
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var a = new TreeNode(1);
var b = new TreeNode(-1);
var c = new TreeNode(2);
var d = new TreeNode(-2);

a.left = b;
a.right = c;
b.left = d;


console.log(serialize(a));
console.log(deserialize(serialize(a)));

console.log(serialize());
console.log(deserialize(serialize()));


var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(3);
var d = new TreeNode(4);
var e = new TreeNode(5);
a.left = b;
a.right = c;
c.left = d;
c.right = e;

console.log(serialize(a));
console.log(deserialize(serialize(a)));

var a = new TreeNode(-1);
var b = new TreeNode(0);
var c = new TreeNode(1);

a.left = b;
a.right = c;
console.log(serialize(a));
console.log(deserialize(serialize(a)));
