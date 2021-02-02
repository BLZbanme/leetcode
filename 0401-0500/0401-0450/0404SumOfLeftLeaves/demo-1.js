"use strict";
function sumOfLeftLeaves(root) {
    var count = 0;
    var dfs = function (node, isLeft) {
        if (!node)
            return;
        if (isLeft && !node.left && !node.right) {
            count += node.val;
            return;
        }
        dfs(node.left, true);
        dfs(node.right, false);
    };
    dfs(root, false);
    return count;
}
;
