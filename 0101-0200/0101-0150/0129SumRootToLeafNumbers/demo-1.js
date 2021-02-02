"use strict";
function sumNumbers(root) {
    if (!root) {
        return 0;
    }
    var res = 0;
    var stack = [];
    var value = [];
    var cur = root;
    var pre = null;
    while (stack.length || cur) {
        while (cur) {
            stack.push(cur);
            value.push(cur.val);
            cur = cur.left;
        }
        cur = stack[stack.length - 1];
        if (cur.right && cur.right != pre) {
            cur = cur.right;
        }
        else {
            if (!cur.left && !cur.right) {
                res += +value.join("");
            }
            pre = cur;
            value.pop();
            stack.pop();
            cur = null;
        }
    }
    return res;
}
;
