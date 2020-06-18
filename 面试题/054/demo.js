/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthLargest = function(root, k) {
    let result = null;

    function dfs(root) {
        if (!root || k <= 0) {
            return;
        }
        dfs(root.right)
        k--;
        if (!k) {
            result = root.val;
            return;
        }
        dfs(root.left);
    }

    dfs(root);

    return result;
};

var kthLargest = function(root, k) {
    const stack = [];
    let cur = root;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.right;
        }
        cur = stack.pop();
        k--;
        if (!k) {
            return cur.val;
        }
        cur = cur.left;
    }

    return null;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a = new TreeNode(3);
var b = new TreeNode(1);
var c = new TreeNode(4);
var d = new TreeNode(2);

a.left = b;
a.right = c;
b.right = d;

console.log(kthLargest(a, 1))

var a = new TreeNode(5);
var b = new TreeNode(3);
var c = new TreeNode(6);
var d = new TreeNode(2);
var e = new TreeNode(4);
var f = new TreeNode(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
d.left = f;

console.log(kthLargest(a, 3))
