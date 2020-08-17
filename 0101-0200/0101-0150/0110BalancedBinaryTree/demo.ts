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

function isBalanced(root: TreeNode | null): boolean {
    let result = true;
    const dfs = (root: TreeNode | null): number => {
        if (!result) {
            return -1;
        }

        if (!root) {
            return 0;
        }

        let left = dfs(root.left);
        let right = dfs(root.right);
        if (Math.abs(left - right) > 1) {
            result = false;
            return -1;
        }

        return 1 + Math.max(left, right);
    }

    dfs(root);

    return result;
};

function isBalanced2(root: TreeNode | null): boolean {
    const dfs = (root: TreeNode | null): number => {
        if (!root) {
            return 0;
        }

        let left = dfs(root.left);
        let right = dfs(root.right);
        if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
            return -1;
        }
        return 1 + Math.max(left, right);
    }

    return dfs(root) >= 0;
};


class TreeNode {
    val: number
    left: TreeNode | null
    right: TreeNode | null
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
        this.right = (right===undefined ? null : right)
    }
}
