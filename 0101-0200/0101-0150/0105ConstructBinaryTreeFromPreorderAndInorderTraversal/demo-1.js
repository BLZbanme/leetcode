"use strict";
function buildTree1(preorder, inorder) {
    if (!preorder || !preorder.length)
        return null;
    var helper = function (preLeft, preRight, inLeft, inRight) {
        if (preLeft > preRight || inLeft > inRight)
            return null;
        var curVal = preorder[preLeft];
        var newTreeNode = new TreeNode(curVal);
        if (preLeft === preRight)
            return newTreeNode;
        var index = inorder.indexOf(curVal);
        var diff = index - inLeft;
        newTreeNode.left = helper(preLeft + 1, preLeft + diff, inLeft, index - 1);
        newTreeNode.right = helper(preLeft + diff + 1, preRight, index + 1, inRight);
        return newTreeNode;
    };
    return helper(0, preorder.length - 1, 0, inorder.length - 1);
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
function buildTree(preorder, inorder) {
    if (!preorder || !preorder.length)
        return null;
    var root = new TreeNode(preorder[0]);
    var stack = [root];
    var inorderIndex = 0;
    for (var i = 1; i < preorder.length; i++) {
        var preorderVal = preorder[i];
        var node = stack[stack.length - 1];
        if (node.val !== inorder[inorderIndex]) {
            node.left = new TreeNode(preorderVal);
            stack.push(node.left);
        }
        else {
            while (stack.length && stack[stack.length - 1].val === inorder[inorderIndex]) {
                node = stack.pop();
                inorderIndex++;
            }
            node.right = new TreeNode(preorderVal);
            stack.push(node.right);
        }
    }
    return root;
}
console.log(buildTree([1, 2, 3], [3, 2, 1])); //
console.log(buildTree([1, 2], [2, 1]));
