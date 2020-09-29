function postorderTraversal(root: TreeNode | null): number[] {
    const result = [];
    const stack = [];
    let cur = root;
    let pre = null;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && cur.right != pre) {
            cur = cur.right;
        }
        else {
            result.push(cur.val);
            stack.pop();
            pre = cur;
            cur = null;
        }
    }

    return result;
};