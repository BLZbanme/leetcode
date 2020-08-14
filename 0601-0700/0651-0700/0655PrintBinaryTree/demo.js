/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
var printTree = function(root) {
    let h = getHeight(root);
    const result = Array(h);
    let len = (1 << h) - 1;

    for (let i = 0; i < h; i++) {
        result[i] = Array(len).fill("");
    }

    function dfs(node, depth ,lo , hi) {
        if (!node) {
            return;
        }
        let mid = (lo + hi) >> 1;
        result[depth][mid] = node.val.toString();
        dfs(node.left, depth + 1, lo, mid - 1);
        dfs(node.right, depth + 1, mid + 1, hi);
    }

    dfs(root, 0, 0, len);
    return result;
};

function getHeight(root) {
    if (!root) {
        return 0;
    }
    return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

console.log(printTree());
console.log(printTree({"val":1,"left":{"val":2,"left":null,"right":null},"right":null}));
console.log(printTree({"val":1,"left":{"val":2,"left":null,"right":{"val":4,"left":null,"right":null}},"right":{"val":3,"left":null,"right":null}}));
console.log(printTree({"val":1,"left":{"val":2,"left":{"val":3,"left":{"val":4,"left":null,"right":null},"right":null},"right":null},"right":{"val":5,"left":null,"right":null}}));

