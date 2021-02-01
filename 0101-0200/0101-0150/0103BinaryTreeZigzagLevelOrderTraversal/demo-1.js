"use strict";
function zigzagLevelOrder(root) {
    if (!root)
        return [];
    var result = [];
    var queue = [root];
    var right = true;
    while (queue.length) {
        var tmp = queue.length;
        var arr = [];
        for (var i = 0; i < tmp; i++) {
            var now = queue.shift();
            now.left && queue.push(now.left);
            now.right && queue.push(now.right);
            if (right) {
                arr.push(now.val);
            }
            else {
                arr.unshift(now.val);
            }
        }
        result.push(arr);
        right = !right;
    }
    return result;
}
;
