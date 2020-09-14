function inorderTraversal(root: TreeNode | null): number[] {
    const result: Array<number> = [];
    const stack: Array<TreeNode> = [];
    let cur: TreeNode | undefined | null = root;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        result.push(cur.val);
        cur = cur.right;
    }
    return result;
};

