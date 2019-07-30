/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    dfs(root);
    return root;
};

function dfs(node) {
    if (!node) {
        return;
    }
    let mid = dfs(node.left);
    let tail = dfs(node.right);
    node.right = mid;
    mid.right = tail;
}
