/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let arr = [];

    function dfs(node) {
        if (!node) {
            arr.push("#");
            return;
        }
        arr.push(node.val) ;
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);

    return arr.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    
    let arr = data.split(',');

    let i = 0;

    function dfs() {
        if (i < arr.length && arr[i] != '#') {
            let node = new TreeNode(+arr[i]);
            node.left = dfs(i++);
            node.right = dfs(i++);
            return node;
        }
        return null;
    }

    return dfs();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(3);
var d = new TreeNode(4);
var e = new TreeNode(5);
a.left = b;
a.right = c;
c.left = d;
c.right = e;

var a = new TreeNode(-1);
var b = new TreeNode(0);
var c = new TreeNode(1);

a.left = b;
a.right = c;

console.log(serialize(a));
console.log(deserialize(serialize(a)));