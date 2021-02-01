"use strict";
function increasingBST1(root) {
    var stack = [];
    var fakeNode = new TreeNode();
    var pre = fakeNode;
    var cur = root;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        pre.right = cur;
        pre = cur;
        cur.left = null;
        cur = cur.right;
    }
    return fakeNode.right;
}
;
function increasingBST(root) {
    var fakeNode = new TreeNode();
    var pre = fakeNode;
    var dfsHelper = function (root) {
        if (!root)
            return;
        dfsHelper(root.left);
        root.left = null;
        pre.right = root;
        pre = root;
        dfsHelper(root.right);
        return;
    };
    dfsHelper(root);
    return fakeNode.right;
}
;
