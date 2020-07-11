/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {

    let result = true;

    function dfs(root) {
        if (!result) {
            return;
        }

        if (!root) {
            return 0;
        }

        let left = dfs(root.left);
        let right = dfs(root.right);
        if (Math.abs(left - right) > 1) {
            result = false;
            return;
        }

        return 1 + Math.max(left, right);
    }

    dfs(root);

    return result;
};

var isBalanced = function(root) {
    return dfs(root) !== -1;
};

function dfs(root) {
    if (!root) {
        return 0;
    }

    let left = dfs(root.left);
    if (left == -1) {
        return -1;
    }
    
    let right = dfs(root.right);
    if (right == -1) {
        return -1;
    }

    if (Math.abs(left - right) <= 1) {
        return 1 + Math.max(left, right);
    }
    return -1;
}

console.log(isBalanced({"val":3,"left":{"val":9,"left":null,"right":null},"right":{"val":20,"left":{"val":15,"left":null,"right":null},"right":{"val":7,"left":null,"right":null}}}))
//true

console.log(isBalanced({"val":1,"left":{"val":2,"left":{"val":3,"left":{"val":4,"left":null,"right":null},"right":{"val":4,"left":null,"right":null}},"right":{"val":3,"left":null,"right":null}},"right":{"val":2,"left":null,"right":null}}));
//false

