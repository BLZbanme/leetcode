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
var preorderTraversal = function(root) {
    let result = [];

    function DLR(node) {
        if (!node) {
            return;
        }
        result.push(node.val);
        DLR(node.left);
        DLR(node.right);
    }

    DLR(root);
    return result;
};

var preorderTraversal = function(root) {
    let reuslt = [];
    let stack = [];
    let cur = root;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
    }
}