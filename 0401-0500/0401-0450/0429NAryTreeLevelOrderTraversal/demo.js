"use strict";
function levelOrder(root) {
    var result = [];
    if (!root)
        return [];
    var queue = [root];
    while (queue.length) {
        var len = queue.length;
        var tmp = [];
        for (var i = 0; i < len; i++) {
            var now = queue.shift();
            tmp.push(now.val);
            for (var j = 0; j < now.children.length; j++) {
                queue.push(now.children[j]);
            }
        }
        result.push(tmp);
    }
    return result;
}
;
