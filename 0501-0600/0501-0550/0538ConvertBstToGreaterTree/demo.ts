function convertBST(root: TreeNode | null): TreeNode | null {
    let count = 0;
    const dfs = (root: TreeNode | null) => {
        if (!root) return;
        dfs(root.right);
        root.val += count;
        count = root.val;
        dfs(root.left);
    }
    dfs(root);
    return root;
};