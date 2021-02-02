"use strict";
function pathSum(root, sum) {
    var result = [];
    var stack = [];
    var cur = root;
    var pre = null;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            sum -= cur.val;
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && cur.right !== pre) {
            cur = cur.right;
        }
        else {
            if (!sum && !cur.left && !cur.right) {
                result.push(stack.map(function (e) { return e.val; }));
            }
            pre = cur;
            sum += cur.val;
            stack.pop();
            cur = null;
        }
    }
    return result;
}
;
