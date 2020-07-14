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
var pruneTree = function(root) {

    function dfs(node) {
        if (!node) {
            return false
        }

        let left = dfs(node.left);
        let right = dfs(node.right);

        if (!left && !right && node.val !== 1) {
            return false;
        }

        if (!left) {
            node.left = null;
        }

        if (!right) {
            node.right = null;
        }

        return node.val === 1 || left || right;
    }

    dfs(root);

    return root;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a = new TreeNode(1);
var b = new TreeNode(0);
var c = new TreeNode(0);
var d = new TreeNode(1);
a.right = b;
b.left = c;
b.right = d;

console.log(pruneTree(a));