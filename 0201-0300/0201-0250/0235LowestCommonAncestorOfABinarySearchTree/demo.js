/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let val = root.val;
    let pVal = p.val;
    let qVal = q.val;
    if (pVal > val && qVal > val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    else if (pVal < val && qVal < val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    else {
        return root;
    }
};

var lowestCommonAncestor = function(root, p, q) {
    let pVal = p.val;
    let qVal = q.val;
    let node = root;
    while (node) {
        let val = node.val;
        if (pVal > val && qVal > val) {
            node = node.right;
        }
        else if (pVal < val && qVal < val) {
            node = node.left;
        }
        else {
            return node;
        }
    }
    return null;
}