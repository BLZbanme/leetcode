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

function levelOrderBottom(root: TreeNode | null): Array<Array<number | null>> {
    const result: number[][] = [];
    const queue = [root];

    while (queue.length) {
        let length = queue.length;
        result.unshift(queue.map(e => e.val));
        while (length--) {
            let cur = queue.shift();    
            
            if (cur && cur.left) {
                queue.push(cur.left);
            }
            if (cur && cur.right) {
                queue.push(cur.right);
            }
        }
    }

    return result;
};