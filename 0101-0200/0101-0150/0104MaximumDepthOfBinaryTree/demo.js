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
var maxDepth = function(root) {
    return computedHeight(root, 0);
};

function computedHeight(node, height) {
    if (!node) {
        return height;
    }
    return Math.max(computedHeight(node.left, height + 1), computedHeight(node.right, height + 1));
}

var maxDepth = function(root) {
    return !root ? 0 : 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}