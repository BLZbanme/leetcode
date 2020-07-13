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
var diameterOfBinaryTree = function(root) {
    let max = 0;

    function dfs(root) {
        if (!root) {
            return 0;
        }

        let left = dfs(root.left);
        let right = dfs(root.right);
        max = Math.max(left + right, max);

        return 1 + Math.max(left, right);
    }

    dfs(root);

    return max;
};
