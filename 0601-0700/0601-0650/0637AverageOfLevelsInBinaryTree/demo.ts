function averageOfLevels(root: TreeNode | null): number[] {
    const result: Array<number> = [];
    if (!root) {
        return result;
    }
    
    const queue = [root];
    while (queue.length) {
        let nowLen = queue.length;
        let now = 0;
        for (let i = 0; i < nowLen; i++) {
            let cur = queue.shift();
            if (cur) {
                now += cur.val;
                if (cur.left) {
                    queue.push(cur.left);
                }
                if (cur.right) {
                    queue.push(cur.right);
                }
            }
        }
        result.push(now / nowLen);
    }
    return result;
};

console.log(averageOfLevels({"val":3,"left":{"val":9,"left":null,"right":null},"right":{"val":20,"left":{"val":15,"left":null,"right":null},"right":{"val":7,"left":null,"right":null}}}));