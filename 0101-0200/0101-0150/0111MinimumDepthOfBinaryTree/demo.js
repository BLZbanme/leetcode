"use strict";
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
function minDepth(root) {
    if (!root) {
        return 0;
    }
    var left = minDepth(root.left);
    var right = minDepth(root.right);
    return (!left || !right) ? left + right + 1 : Math.min(left, right) + 1;
}
;
