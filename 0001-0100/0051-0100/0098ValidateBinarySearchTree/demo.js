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
var isValidBST = function(root) {
    return valid(root, -Infinity, Infinity);
};

function valid(node, lo, hi) {
    if (!node) {
        return true;
    }
    if (node.val <= lo || node.val >= hi) {
        return false;
    }
    if ((!node.left || (node.val > node.left.val))
        && (!node.right || (node.val < node.right.val))
    ) {
        return valid(node.left, lo, node.val) && valid(node.right, node.val, hi);
    }
    return false;
}

var isValidBST = function(root) {
    return valid(root, -Infinity, Infinity);
};

function valid(node, lo, hi) {
    if (!node) {
        return true;
    }
    if (node.val <= lo || node.val >= hi) {
        return false;
    }
    return valid(node.left, lo, node.val) && valid(node.right, node.val, hi);
}

var isValidBST = function(root) {
    let stack = [];
    let tmp = -Infinity;
    while (root || stack.length) {
        while (root) {
            stack.push(root);
            root = root.left;
        }
        root = stack.pop();
        if (root.val <= tmp) {
            return false;
        }
        tmp = root.val;
        root = root.right;
    }
    return true;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var a = new TreeNode(3);
var b = new TreeNode(1);
var c = new TreeNode(5);
var d = new TreeNode(0);
var e = new TreeNode(2);
var f = new TreeNode(4);
var g = new TreeNode(6);
var h = new TreeNode(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
e.right = h

console.log(isValidBST(a));



var a = new TreeNode(10);
var b = new TreeNode(5);
var c = new TreeNode(15);
var d = new TreeNode(6);
var e = new TreeNode(20);

a.left = b;
a.right = c;
c.left = d;
c.right = e;

console.log(isValidBST(a));


[10,5,15,null,null,6,20];
[3,1,5,0,2,4,6,null,null,null,3]