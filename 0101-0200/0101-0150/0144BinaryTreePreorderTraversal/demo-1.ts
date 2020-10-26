function preorderTraversal(root: TreeNode | null): number[] {
    const result = [];
    const stack = [];
    let cur: TreeNode | null = root;
    let pre = null;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            result.push(cur.val);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && pre !== cur.right) {
            cur = cur.right;
        }
        else {
            pre = cur;
            stack.pop();
            cur = null;
        }
        
    }
    return result;
};