"use strict";
function preorderTraversal(root) {
    var result = [];
    var stack = [];
    var cur = root;
    var pre = null;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            result.push(cur.val);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && pre !== cur.right) {
            cur = cur.right;
        }
        else {
            pre = cur;
            stack.pop();
            cur = null;
        }
    }
    return result;
}
;
