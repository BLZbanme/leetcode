/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    let result = [];

    function DLR(node) {
        if (!node) {
            return;
        }
        result.push(node.val);
        DLR(node.left);
        DLR(node.right);
    }

    DLR(root);
    return result;
};


var preorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let cur = root;
    let pre = null;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            result.push(cur.val);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && pre !== cur.right) {
            cur = cur.right;
        }
        else {
            stack.pop();
            pre = cur;
            cur = null;
        }
    }
    return result;
}

var preorderTraversal = function(root) {
    let result = [];
    let rights = [];
    while (root) {
        result.push(root.val);
        if (root.right) {
            rights.push(root.right);
        }
        root = root.left;
        if (!root && rights.length) {
            root = rights.pop();
        }
    }
    return result;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(3);

a.right = b;
b.left = c;

console.log(preorderTraversal(a));