function sumNumbers(root: TreeNode | null): number {
    if (!root) {
        return 0;
    }
    let res = 0;

    const stack: Array<TreeNode> = [];
    const value: Array<number> = [];
    let cur: TreeNode | null = root;
    let pre: TreeNode | null = null
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            value.push(cur.val);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && cur.right != pre) {
            cur = cur.right;
        }
        else {
            if (!cur.left && !cur.right) {
                res += +value.join("");
            }
            pre = cur;
            value.pop();
            stack.pop();
            cur = null;
        }
    }

    return res;
};