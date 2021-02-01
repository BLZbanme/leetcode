"use strict";
function binaryTreePaths(root) {
    var result = [];
    if (!root) {
        return result;
    }
    var stack = [];
    var cur = root;
    var pre = null;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && cur.right !== pre) {
            cur = cur.right;
        }
        else {
            if (!cur.left && !cur.right) {
                result.push(stack.map(function (e) { return e.val; }).join('->'));
            }
            pre = cur;
            stack.pop();
            cur = null;
        }
    }
    return result;
}
;
