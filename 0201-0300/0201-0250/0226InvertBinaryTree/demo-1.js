"use strict";
function invertTree(root) {
    var _a;
    if (!root) {
        return null;
    }
    _a = [root.right, root.left], root.left = _a[0], root.right = _a[1];
    invertTree(root.left);
    invertTree(root.right);
    return root;
}
;
