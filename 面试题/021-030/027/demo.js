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
var mirrorTree = function(root) {
    if (!root) {
        return null;
    }

    let left = root.left;
    let right = root.right;
    root.left = right;
    root.right = left;

    mirrorTree(root.left);
    mirrorTree(root.right);

    return root;
};

var mirrorTree = function(root) {
    if (!root) {
        return null;
    }

    [root.left, root.right] = [root.right, root.left]

    mirrorTree(root.left);
    mirrorTree(root.right);

    return root;
};

console.log(mirrorTree({"val":4,"left":{"val":2,"left":{"val":1,"left":null,"right":null},"right":{"val":3,"left":null,"right":null}},"right":{"val":7,"left":{"val":6,"left":null,"right":null},"right":{"val":9,"left":null,"right":null}}}))