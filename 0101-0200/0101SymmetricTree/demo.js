/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    let list = [null];
    valid(root, list, 1);
    const len = list.length;
    const mid = Math.floor(len / 2);
    for (let i = 2; i < mid; i <<= 1) {
        for(let j = 0; j < i / 2; j++) {
            if (list[i + j] != list[2 * i - j - 1]) {
                return false;
            }
        }
    }
    return true;
};

function valid(node, list, index) {
    if (node) {
        list[index] = node.val;
    }
    else {
        list[index] = undefined;
        return;
    }
    valid(node.left, list, index * 2);
    valid(node.right, list, 2 * index + 1);
}

var isSymmetric = function(root) {
    return !root || isMirror(root.left, root.right);
}

function isMirror(node1, node2) {
    if (!node1 && !node2) {
        return true;
    }
    if (!node1 || !node2) {
        return false;
    }
    if (node1.val === node2.val) {
        return isMirror(node1.left, node2.right)
        && isMirror(node1.right, node2.left);
    }
    return false;
}

var isSymmetric = function(root) {
    if (!root) {
        return true
    }
    let queue = [];
    queue.push(root.left);
    queue.push(root.right);
    while (queue.length) {
        let t1 = queue.shift();
        let t2 = queue.shift();
        if (!t1 && !t2) {
            continue;
        }
        if (!t1 || !t2) {
            return false;
        }
        if (t1.val !== t2.val) {
            return false;
        }
        queue.push(t1.left);
        queue.push(t2.right);
        queue.push(t1.right);
        queue.push(t2.left);
    }
    return true;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(2);
var d = new TreeNode(3);
var e = new TreeNode(3);

a.left = b;
a.right = c;
b.right = d;
c.right = e;


console.log(isSymmetric(a))

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(2);
var d = new TreeNode(2);
var e = new TreeNode(2);

a.left = b;
a.right = c;
b.left = d;
c.left = e;


console.log(isSymmetric(a))

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(2);
var d = new TreeNode(2);
var e = new TreeNode(2);

a.left = b;
a.right = c;
b.left = d;
c.left = e;


console.log(isSymmetric(a))

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(2);
var d = new TreeNode(3);
var e = new TreeNode(4);
var f = new TreeNode(4);
var g = new TreeNode(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

console.log(isSymmetric(a))


var isSymmetric = function(root) {
    let list = [];
    let stack = [];
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root) {
            list.push(root.val);
        }
        root = root.right;
    }
    const N = list.length - 1;
    const mid = Math.floor(list.length / 2);
    for(let i = 0; i < mid; i++) {
        if (list[i] !== list[N - i]) {
            return false;
        }
    }
    return true;
};
