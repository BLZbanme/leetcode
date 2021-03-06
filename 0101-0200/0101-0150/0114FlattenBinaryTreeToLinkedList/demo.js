/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) {
        return null;
    }
    let arr = [];
    dfs(root, arr);
    let n = arr.length - 1;
    while (n--) {
        arr[n].left = null;
        arr[n].right = arr[n + 1];
    }
    return root;
};

function dfs(node, arr) {
    if (!node) {
        return;
    }
    arr.push(node);
    dfs(node.left, arr);
    dfs(node.right, arr);
}

let pre = null;

var flatten = function(root) {
    dfs(root);
    pre = null;
}

function dfs(root) {
    if (!root) {
        return;
    }
    dfs(root.right);
    dfs(root.left);
    root.right = pre;
    root.left = null;
    pre = root;
}



var flatten = function(root) {
    let pre = null;
    function dfs(root) {
        if (!root) {
            return;
        }
        dfs(root.right);
        dfs(root.left);
        root.right = pre;
        root.left = null;
        pre = root;
    }
    dfs(root);
}

var flatten = function(root) {
    let stack = [];
    let pre = null;
    let cur = root;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.right;
        }
        cur = stack[stack.length - 1];
        if (cur.left && cur.left !== pre) {
            cur = cur.left;
        }
        else {
            cur.right = pre;
            cur.left = null;
            stack.pop();
            pre = cur;
            cur = null;
        }
    }
    return root;
}




function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(5);

var d = new TreeNode(3);
var e = new TreeNode(4);
var f = new TreeNode(6);


a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(flatten(a))