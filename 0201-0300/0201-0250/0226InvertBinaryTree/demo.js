/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (!root) {
        return null;
    }
    let left = root.left;
    root.left = invertTree(root.right);
    root.right = invertTree(left);
    return root;
};

var invertTree = function(root) {
    if (!root) {
        return null;
    }
    let stack = [root];
    while (stack.length) {
        let node = stack.pop();
        let left = node.left;
        node.left = node.right;
        node.right = left;

        if (node.right) {
            stack.push(node.right);
        }

        if (node.left) {
            stack.push(node.left);
        }
    }
    return root;
}

var invertTree = function(root) {
    if (!root) {
        return null;
    }

    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        let left = node.left;
        node.left = node.right;
        node.right = left;

        if (node.left) {
            queue.push(node.left);
        }

        if (node.right) {
            queue.push(node.right);
        }
    }
    return root;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a = new TreeNode(4);
var b = new TreeNode(2);
var c = new TreeNode(7);
var d = new TreeNode(1);
var e = new TreeNode(3);
var f = new TreeNode(6);
var g = new TreeNode(9);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;

console.log(invertTree(a));