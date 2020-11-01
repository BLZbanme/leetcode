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

function sufficientSubset(root: TreeNode | null, limit: number): TreeNode | null {
    const map = new Map();

    const dfs = (node: TreeNode | null): number => {
        if (!node) {
            return -Infinity;
        }
        let left = dfs(node.left);
        let right = dfs(node.right);

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
    }

    dfs(root);

    const helper = (node: TreeNode | null, sum: number) => {
        if (!node) {
            return;
        }
        sum += node.val;
        let leftSum = map.get(node.left) || 0;
        let rightSum = map.get(node.right) || 0;
        (sum + leftSum < limit) && (node.left = null);
        (sum + rightSum < limit) && (node.right = null);
        helper(node.left, sum);
        helper(node.right, sum);
    }

    const fakeNode = new TreeNode(0);
    fakeNode.right = root;

    helper(fakeNode, 0);

    return fakeNode.right;
};

console.log(sufficientSubset({"val":1,"left":{"val":2,"left":{"val":-5,"left":null,"right":null},"right":null},"right":{"val":-3,"left":{"val":4,"left":null,"right":null},"right":null}}, -1));