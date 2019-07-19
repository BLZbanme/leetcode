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
var inorderTraversal = function(root) {
    let result = [];
    inorder(root, result);
    return result;
};

/**
 * 
 * @param {TreeNode} node 
 * @param {number[]} result 
 */
function inorder(node, result) {
    if (!node) {
        return;
    }
    inorder(node.left, result);
    result.push(node.val);
    inorder(node.right, result);
}

var inorderTraversal = function(root) {
    if (!root) {
        return [];
    }
    let result = [];
    let nodeStack = [];
    let logStack = [];
    nodeStack.push(root);
    logStack.push(0);
    while (nodeStack.length) {
        let len = nodeStack.length;
        let tmp = nodeStack[len - 1];
        let logtmp = logStack[len - 1];
        if (tmp.left && logtmp === 0) {
            nodeStack.push(tmp.left);
            logStack[len - 1] = 1;
            logStack.push(0);
        }
        else {
            result.push(tmp.val);
            nodeStack.pop();
            logStack.pop();
            if (tmp.right) {
                nodeStack.push(tmp.right);
                logStack.push(0);
            }
        }
    }
    return result;
}

var inorderTraversal = function(root) {
    let result = [];
    let stack = [];
    let cur = root;
    while (cur != null || stack.length) {
        while (cur != null) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        result.push(cur.val);
        cur = cur.right;
    }
    return result;
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

console.log(inorderTraversal());

var a = new TreeNode(1);
var e = new TreeNode(0);
var b = new TreeNode(2);
var c = new TreeNode(3);
a.right = b;
a.left = e;
b.left = c;
console.log(inorderTraversal(a));

