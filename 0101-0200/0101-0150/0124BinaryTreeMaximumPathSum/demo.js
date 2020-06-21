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
var maxPathSum = function(root) {
    let max = -Infinity;

    // debugger
    function dfs(node) {
        if (!node) {
            return -Infinity;
        }

        let left = dfs(node.left);
        let right = dfs(node.right);
        let now = node.val;
        if (left > 0) {
            now += left;
        }
        if (right > 0) {
            now += right;
        }
        max = Math.max(max, now);
        if (left > right) {
            if (left > 0) {
                return node.val + left;
            }
        }
        else {
            if (right > 0) {
                return node.val + right;
            }
        }
        return node.val;
    }

    dfs(root);
    return max;
};

var maxPathSum = function(root) {
    let max = -Infinity;

    function dfs(node) {
        if (!node) {
            return -Infinity;
        }

        let left = Math.max(dfs(node.left), 0);
        let right =  Math.max(dfs(node.right), 0);
        let now = node.val;
        max = Math.max(max, now + left + right)
        return node.val + Math.max(left, right);
    }

    dfs(root);
    return max;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var a = new TreeNode(-10);
console.log(maxPathSum(a));

var a = new TreeNode(-10);
var b = new TreeNode(9);
var c = new TreeNode(20);
var d = new TreeNode(15);
var e = new TreeNode(7);
a.left = b;
a.right = c;
c.left = d;
c.right = e;

console.log(maxPathSum(a));

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(3);
a.left = b;
a.right = c;

console.log(maxPathSum(a));