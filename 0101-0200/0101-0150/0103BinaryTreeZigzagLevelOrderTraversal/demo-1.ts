function zigzagLevelOrder(root: TreeNode | null): number[][] {
    if (!root) return [];
    const result:Array<Array<number>> = [];
    const queue = [root]
    let right = true;
    while (queue.length) {
        let tmp = queue.length;
        const arr: Array<number> = [];
        for (let i = 0; i < tmp; i++) {
            let now = queue.shift();
            now!.left && queue.push(now!.left)
            now!.right && queue.push(now!.right)
            if (right) {
                arr.push(now!.val)
            }
            else {
                arr.unshift(now!.val)
            }
        }
        result.push(arr);
        right = !right;
    }
    return result;
};