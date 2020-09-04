function binaryTreePaths(root: TreeNode | null): string[] {
    const result: Array<string> = [];
    if (!root) {
        return result;
    }

    const stack: Array<TreeNode> = [];
    let cur: TreeNode | null = root;
    let pre: TreeNode | null = null;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && cur.right !== pre) {
            cur = cur.right;
        }
        else {
            if (!cur.left && !cur.right) {
                result.push(stack.map(e => e.val).join('->'));
            }
            pre = cur;
            stack.pop();
            cur = null;
        }
    }

    return result;
};