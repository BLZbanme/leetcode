/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let reuslt = [];

    if (!root) {
        return reuslt;
    }
    
    let str = [];

    function DLR(node) {
        if (!node) {
            return;
        }
        str.push(node.val);
        if (!node.left && !node.right) {
            reuslt.push(str.join('->'));
        }
        DLR(node.left);
        DLR(node.right);
        str.pop();
    }

    DLR(root);
    return reuslt;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}


var a = new TreeNode(1);

console.log(binaryTreePaths(a));


var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(3);
var d = new TreeNode(5);
a.left = b;
a.right = c;
b.right = d;

console.log(binaryTreePaths(a));



var a = new TreeNode(37);
var b = new TreeNode(-34);
var c = new TreeNode(-48);
var d = new TreeNode(-100);
var e = new TreeNode(-100);
var f = new TreeNode(48);
var g = new TreeNode(-54);
var h = new TreeNode(-71);
var i = new TreeNode(-22);
var j = new TreeNode(2);
a.left = b;
a.right = c;
b.right = d;
c.left = e;
c.right = f;
f.left = g;
g.left = h;
g.right = i;
i.right = j;

console.log(binaryTreePaths(a));
