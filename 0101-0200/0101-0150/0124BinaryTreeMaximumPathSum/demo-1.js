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
var maxPathSum = function(root) {
    let max = -Infinity;

    function dfs(root) {
        if (!root) {
            return 0;
        }

        let left = dfs(root.left);
        let right = dfs(root.right);

        max = Math.max(root.val + left + right, root.val, root.val + left, root.val + right, max);

        let tmp = Math.max(left, right);
        return tmp > 0 ? tmp + root.val : root.val;
    }

    dfs(root);
    
    return max;
};

var maxPathSum = function(root) {
    let max = -Infinity;

    function dfs(node) {
        if (!node) {
            return -Infinity;
        }

        let left = Math.max(dfs(node.left), 0);
        let right =  Math.max(dfs(node.right), 0);
        let now = node.val;
        max = Math.max(max, now + left + right)
        return node.val + Math.max(left, right);
    }

    dfs(root);
    return max;
};

console.log(maxPathSum({"val":1,"left":{"val":2,"left":null,"right":null},"right":{"val":3,"left":null,"right":null}})); //6
console.log(maxPathSum({"val":-10,"left":{"val":9,"left":null,"right":null},"right":{"val":20,"left":{"val":15,"left":null,"right":null},"right":{"val":7,"left":null,"right":null}}})); //42