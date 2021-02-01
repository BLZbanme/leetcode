"use strict";
function convertBST(root) {
    var count = 0;
    var dfs = function (root) {
        if (!root)
            return;
        dfs(root.right);
        root.val += count;
        count = root.val;
        dfs(root.left);
    };
    dfs(root);
    return root;
}
;
