/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    if (!root) {
        return 0;
    }

    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};

var maxDepth = function(root) {
    const stack = [];
    let max = 0;
    let cur = root;
    let pre = null;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur =  stack[stack.length - 1];
        if (cur.right && cur.right != pre) {
            cur = cur.right;
        }
        else {
            if (!cur.left && !cur.right) {
                max = Math.max(max, stack.length);
            }
            pre = cur;
            stack.pop();
            cur = null;
        }
    }

    return max;
}

var maxDepth = function(root) {
    if (!root) {
        return 0;
    }
    
    const queue = [root];

    let height = 0;

    while (queue.length) {
        let tmp = queue.length;
        while (tmp--) {
            let cur = queue.shift();
            if (cur.left) {
                queue.push(cur.left);
            }
            if (cur.right) {
                queue.push(cur.right);
            }
        }

        height++;
    }

    return height;
}