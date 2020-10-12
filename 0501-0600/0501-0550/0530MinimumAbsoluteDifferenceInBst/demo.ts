function getMinimumDifference(root: TreeNode | null): number {
    let pre: TreeNode | null = null;
    let min = Infinity;
    const dfs = (node: TreeNode | null) => {
        if (!node) {
            return;
        }
        dfs(node.left);
        pre && (min = Math.min(node.val - pre.val, min));
        pre = node;
        dfs(node.right);
    }
    dfs(root);
    return min;
};

console.log(getMinimumDifference({"val":5,"left":{"val":4,"left":null,"right":null},"right":{"val":7,"left":null,"right":null}}));