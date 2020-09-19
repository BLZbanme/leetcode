function sumOfLeftLeaves(root: TreeNode | null): number {
    let count = 0;

    const dfs = (node: TreeNode | null, isLeft: boolean) => {
        if (!node) return;

        if (isLeft && !node.left && !node.right) {
            count += node.val;
            return;
        }

        dfs(node.left, true);
        dfs(node.right, false);
    }

    dfs(root, false);
    return count;
};