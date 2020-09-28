var connect = function(root) {
    if (!root){
        return root;
    }
    const queue = [root];
    while (queue.length) {
        let tmp = queue.length;
        for (let i = 0; i < tmp; i++) {
            let now = queue.shift();
            if (i != tmp - 1) {
                now.next = queue[0];
            }
            if (now.left) {
                queue.push(now.left);
            }
            if (now.right) {
                queue.push(now.right);
            }
        }
    }
    return root;
};