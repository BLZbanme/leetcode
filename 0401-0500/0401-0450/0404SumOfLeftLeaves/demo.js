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
var sumOfLeftLeaves = function(root) {
    let sum = 0;

    function dfs(node) {
        if (!node) {
            return;
        }
        if (node.left && !node.left.left && !node.left.right) {
            sum += node.left.val;
        }
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return sum;
};

var sumOfLeftLeaves = function(root) {
    let sum = 0;

    if (!root) {
        return;
    }

    if (root.left && !root.left.left && !root.left.right) {
        sum += root.left.val;
    }

    sum += sumOfLeftLeaves(root.left) + sumOfLeftLeaves(root.right);
    return sum;
};

var sumOfLeftLeaves = function(root) {
    if (!root) {
        return 0;
    }
    let sum = 0;
    let stack = [root];
    while (stack.length) {
        let node = stack.pop();
        if (node.left) {
            if (!node.left.left && !node.left.right) {
                sum += node.left.val;
            }
            else {
                stack.push(node.left);
            }
        }

        if (node.right) {
            if (node.right.left || node.right.right) {
                stack.push(node.right);
            }
        }
    }

    return sum;
}