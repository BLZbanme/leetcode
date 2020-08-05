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

var rob = function(root) {
    const f = new Map();
    const g = new Map();
    const dfs = node => {
        if (!node) {
            return;
        }
        dfs(node.left);
        dfs(node.right);
        f.set(node, node.val + (g.get(node.left) || 0) + (g.get(node.right) || 0));
        g.set(node, Math.max(f.get(node.left) || 0, g.get(node.left) || 0) +  Math.max(f.get(node.right) || 0, g.get(node.right) || 0))
    }
    dfs(root);
    return Math.max(f.get(root) || 0, g.get(root) || 0);
}

var rob = function(root) {
    
    const dfs = node => {
        if (!node) {
            return [0, 0];
        }

        const left = dfs(node.left);
        const right = dfs(node.right);
        const selected = node.val + left[1] + right[1];
        const notSelected = Math.max(left[0], left[1]) + Math.max(right[0], right[1]);
        return [selected, notSelected];
    }

    const rootStatus = dfs(root);
    return Math.max(...rootStatus);
};

var rob = function(root) {
    
    if (!root) {
        return 0;
    }

    let sum1 = 0;
    if (root.left) {
        sum1 = rob(root.left.left) + rob(root.left.right);
    }

    let sum2 = 0;
    if (root.right) {
        sum2 = rob(root.right.left) + rob(root.right.right);
    }

    return Math.max(root.val + sum1 + sum2, rob(root.left) + rob(root.right));
};