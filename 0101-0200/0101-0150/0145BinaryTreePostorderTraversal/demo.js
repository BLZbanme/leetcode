"use strict";
function postorderTraversal(root) {
    var result = [];
    var stack = [];
    var cur = root;
    var pre = null;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && cur.right != pre) {
            cur = cur.right;
        }
        else {
            result.push(cur.val);
            stack.pop();
            pre = cur;
            cur = null;
        }
    }
    return result;
}
;
