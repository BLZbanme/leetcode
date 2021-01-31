function increasingBST1(root: TreeNode | null): TreeNode | null {
    const stack = [];
    const fakeNode = new TreeNode();
    let pre = fakeNode;
    let cur = root;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop()!;
        pre.right = cur;
        pre = cur;
        cur.left = null; 
        cur = cur.right;
    }
    return fakeNode.right;
};

function increasingBST(root: TreeNode | null): TreeNode | null {
    const fakeNode = new TreeNode();
    let pre = fakeNode;

    const dfsHelper = (root: TreeNode | null) => {
        if (!root) return;
        dfsHelper(root.left);
        root.left = null;
        pre.right = root;
        pre = root;
        dfsHelper(root.right);
        return;
    }
    dfsHelper(root);
    return fakeNode.right;
};
