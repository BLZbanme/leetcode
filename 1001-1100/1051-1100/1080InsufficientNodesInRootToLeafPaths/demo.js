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
function sufficientSubset(root, limit) {
    var map = new Map();
    var dfs = function (node) {
        if (!node) {
            return -Infinity;
        }
        var left = dfs(node.left);
        var right = dfs(node.right);
        var now = node.val;
        if (left == -Infinity && right == -Infinity) {
        }
        else if (left == -Infinity) {
            now += right;
        }
        else if (right == -Infinity) {
            now += left;
        }
        else {
            now += Math.max(left, right);
        }
        map.set(node, now);
        return now;
    };
    dfs(root);
    var helper = function (node, sum) {
        if (!node) {
            return;
        }
        sum += node.val;
        var leftSum = map.get(node.left) || 0;
        var rightSum = map.get(node.right) || 0;
        (sum + leftSum < limit) && (node.left = null);
        (sum + rightSum < limit) && (node.right = null);
        helper(node.left, sum);
        helper(node.right, sum);
    };
    var fakeNode = new TreeNode(0);
    fakeNode.right = root;
    helper(fakeNode, 0);
    return fakeNode.right;
}
;
console.log(sufficientSubset({ "val": 1, "left": { "val": 2, "left": { "val": -5, "left": null, "right": null }, "right": null }, "right": { "val": -3, "left": { "val": 4, "left": null, "right": null }, "right": null } }, -1));
