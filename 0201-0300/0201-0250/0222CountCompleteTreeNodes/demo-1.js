"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function countNodes1(root) {
    if (!root) {
        return 0;
    }
    var queue = [root];
    var count = 0;
    while (queue.length) {
        var tmp = queue.length;
        for (var i = 0; i < tmp; i++) {
            var cur = queue.shift();
            count++;
            if (cur.left && cur.right) {
                queue.push(cur.left);
                queue.push(cur.right);
                continue;
            }
            if (!cur.left) {
                return count * 2 - 1;
            }
            if (!cur.right) {
                return count * 2;
            }
        }
    }
    return 0;
}
;
var exists = function (root, level, k) {
    var bits = 1 << (level - 1);
    var node = root;
    while (node && bits > 0) {
        if (!(bits & k)) {
            node = node.left;
        }
        else {
            node = node.right;
        }
        bits >>= 1;
    }
    return node !== null;
};
function countNodes(root) {
    if (!root) {
        return 0;
    }
    var level = 0;
    var node = root;
    while (node.left) {
        level++;
        node = node.left;
    }
    var low = 1 << level;
    var high = (1 << (level + 1)) - 1;
    while (low < high) {
        var mid = low + ((high - low + 1) >> 1);
        if (exists(root, level, mid)) {
            low = mid;
        }
        else {
            high = mid - 1;
        }
    }
    return low;
}
