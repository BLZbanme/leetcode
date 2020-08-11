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
    if (!root) {
        return true;
    }

    return dfs(root.left, root.right);
};

function dfs(node1, node2) {
    if (!node1 && !node2) {
        return true;
    }

    if (!node1 || !node2 || node1.val !== node2.val) {
        return false;
    }

    return dfs(node1.left, node2.right) && dfs(node1.right, node2.left);
}