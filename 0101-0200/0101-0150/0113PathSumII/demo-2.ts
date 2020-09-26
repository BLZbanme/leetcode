function pathSum(root: TreeNode | null, sum: number): number[][] {
    const result: Array<Array<number>> = [];
    const stack: Array<TreeNode> = [];
    let cur = root;
    let pre: TreeNode | null = null;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            sum -= cur.val;
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && cur.right !== pre) {
            cur = cur.right;
        }
        else {
            if (!sum && !cur.left && !cur.right) {
                result.push(stack.map(e => e.val));
            }
            pre = cur;
            sum += cur.val;
            stack.pop();
            cur = null;
        }
    }

    return result;
};