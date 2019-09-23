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
var kthSmallest = function(root, k) {
    let stack = [];
    let cur = root;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        if (!--k) {
            return cur.val;
        }
        cur = cur.right;
    }
};

var kthSmallest = function(root, k) {
    let stack = [];
    while (root) {
        stack.push(root);
        root = root.left;
    }
    while (k) {
        let node = stack.pop();
        k--;
        if (!k) {
            return node.val;
        }
        let right = node.right;
        while (right) {
            stack.push(right);
            right = right.left;
        }
    }
    return -1;
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
console.log(kthSmallest(a, 1));


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
console.log(kthSmallest(a, 3));