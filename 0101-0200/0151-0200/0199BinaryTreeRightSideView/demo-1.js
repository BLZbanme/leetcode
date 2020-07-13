/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) {
        return [];
    }

    const result = [];
    const queue = [root];

    while (queue.length) {
        let cur = queue.shift();
        let length = queue.length;

        result.push(cur.val);

        if (cur.right) {
            queue.push(cur.right);
        }
        if (cur.left) {
            queue.push(cur.left);
        }

        while (length--) {
            let node = queue.shift();
            if (node.right) {
                queue.push(node.right);
            }
            if (node.left) {
                queue.push(node.left);
            }
        }
    }

    return result;
};

var rightSideView = function(root) {
    if (!root) {
        return [];
    }

    const result = [];

    function dfs(node, depth) {
        if (!node) {
            return;
        }

        if (!result[depth]) {
            result[depth] = node.val;
        }

        dfs(node.right, depth + 1);
        dfs(node.left, depth + 1);
    }

    dfs(root, 0);

    return result;
};

console.log(rightSideView({"val":1,"left":{"val":2,"left":null,"right":{"val":5,"left":null,"right":null}},"right":{"val":3,"left":null,"right":{"val":4,"left":null,"right":null}}})); //[1, 3, 4]