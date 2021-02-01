"use strict";
function averageOfLevels(root) {
    var result = [];
    if (!root) {
        return result;
    }
    var queue = [root];
    while (queue.length) {
        var nowLen = queue.length;
        var now = 0;
        for (var i = 0; i < nowLen; i++) {
            var cur = queue.shift();
            if (cur) {
                now += cur.val;
                if (cur.left) {
                    queue.push(cur.left);
                }
                if (cur.right) {
                    queue.push(cur.right);
                }
            }
        }
        result.push(now / nowLen);
    }
    return result;
}
;
console.log(averageOfLevels({ "val": 3, "left": { "val": 9, "left": null, "right": null }, "right": { "val": 20, "left": { "val": 15, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } }));
