function levelOrder(root: Node | null): number[][] {
    const result = [];
    if (!root) return [];
    const queue =[root];
    while (queue.length) {
        let len = queue.length;
        const tmp = [];
        for (let i = 0; i < len; i++) {
            let now = queue.shift();
            tmp.push(now.val);
            for (let j = 0; j < now.children.length; j++) {
                queue.push(now.children[j]);
            }
        }
        result.push(tmp);
    }
    return result;
};