function largestValues(root: TreeNode | null): number[] {
    const result: Array<number> = [];
    if (!root) return result;
    const queue = [root];
    while (queue.length) {
        const len = queue.length;
        let max = -Infinity;
        for (let i = 0; i < len; i++) {
            const cur = queue.shift()!;
            max = Math.max(cur.val, max)
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        result.push(max);
    }
    return result;
};