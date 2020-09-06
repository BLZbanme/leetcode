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
function levelOrderBottom(root) {
    if (!root) {
        return [];
    }
    var result = [];
    var queue = [root];
    while (queue.length) {
        var length_1 = queue.length;
        result.unshift(queue.map(function (e) { return e && e.val; }));
        while (length_1--) {
            var cur = queue.shift();
            if (cur && cur.left) {
                queue.push(cur.left);
            }
            if (cur && cur.right) {
                queue.push(cur.right);
            }
        }
    }
    return result;
}
;
