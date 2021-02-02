"use strict";
function buildTree(inorder, postorder) {
    var helper = function (inLeft, inRight, postLeft, postRight) {
        if (inLeft > inRight || postLeft > postRight) {
            return null;
        }
        var node = new TreeNode(postorder[postRight]);
        var inOrderIndex = inorder.indexOf(postorder[postRight]);
        node.left = helper(inLeft, inOrderIndex - 1, postLeft, inOrderIndex - inLeft + postLeft - 1);
        node.right = helper(inOrderIndex + 1, inRight, inOrderIndex - inLeft + postLeft, postRight - 1);
        return node;
    };
    return helper(0, inorder.length - 1, 0, postorder.length - 1);
}
;
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
console.log(buildTree([2, 3, 1], [3, 2, 1])); //[1,2,null,null,3]
console.log(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
