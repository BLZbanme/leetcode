/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let result = null;

    function dfs(node) {
        if (result) {
            return false;
        }

        if (!node) {
            return false;
        }

        let left = dfs(node.left);
        let right = dfs(node.right);
        if (node.val === p.val || node.val === q.val) {
            if (left || right) {
                result = node;
                return false;
            }
            return true;
        }

        if (left && right) {
            result = node;
            return false;
        }

        return left || right;
    }

    dfs(root);

    return result;
};


function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var a = new TreeNode(3);
var b = new TreeNode(5);
var c = new TreeNode(1);
var d = new TreeNode(6);
var e = new TreeNode(2);
var f = new TreeNode(0);
var g = new TreeNode(8);
var h = new TreeNode(7);
var i = new TreeNode(4);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
c.right = g;
e.left = h;
e.right = i;

console.log(lowestCommonAncestor(a, b, c)); //3
console.log(lowestCommonAncestor(a, b, i)); //5