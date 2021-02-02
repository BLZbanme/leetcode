"use strict";
function inorderTraversal(root) {
    var result = [];
    var stack = [];
    var cur = root;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop();
        result.push(cur.val);
        cur = cur.right;
    }
    return result;
}
;
