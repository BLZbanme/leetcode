/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root) {
    if (!root) {
        return 0;
    }
    let stack = [];
    let numStack = [];
    let cur = root;
    let pre = null;
    let sum = 0;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            numStack.push(cur.val);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        
        if (cur.right && cur.right !== pre) {
            pre = cur;
            cur = cur.right;
            continue;
        }
        if (!cur.right && !cur.left) {
            sum += +numStack.join("");
        }
        pre = cur;
        stack.pop();
        numStack.pop();
        cur = null;
    }
    return sum;
};

var sumNumbers = function(root) {
    if (!root) {
        return 0;
    }
    let sum = 0;
    function helper(node, stack) {
        stack.push(node.val);
        if (node.left) {
            helper(node.left, stack);
            stack.pop();
        }
        if (node.right) {
            helper(node.right, stack);
            stack.pop();
        }
        if (!node.left && !node.right) {
            sum += +stack.join("");
        }
    }

    helper(root, []);
    return sum;
}

var sumNumbers = function(root) {
    return sum(root, 0);
}

function sum(node, s) {
    if (!node) {
        return 0;
    }
    if (!node.right && !node.left) {
        return s * 10 + node.val;
    }
    return sum(node.left, s * 10 + node.val) + sum(node.right, s * 10 + node.val);
}

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(3);
a.left = b;
a.right = c;

console.log(sumNumbers(a))