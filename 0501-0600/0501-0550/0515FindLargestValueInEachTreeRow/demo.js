"use strict";
function largestValues(root) {
    var result = [];
    if (!root)
        return result;
    var queue = [root];
    while (queue.length) {
        var len = queue.length;
        var max = -Infinity;
        for (var i = 0; i < len; i++) {
            var cur = queue.shift();
            max = Math.max(cur.val, max);
            cur.left && queue.push(cur.left);
            cur.right && queue.push(cur.right);
        }
        result.push(max);
    }
    return result;
}
;
