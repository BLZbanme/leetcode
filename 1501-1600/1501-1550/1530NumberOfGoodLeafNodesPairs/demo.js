"use strict";
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var TreeNode = /** @class */ (function () {
    function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val);
        this.left = (left === undefined ? null : left);
        this.right = (right === undefined ? null : right);
    }
    return TreeNode;
}());
function countPairs(root, distance) {
    //初始满足条件的结点对数为0
    var num = 0;
    var dfs = function (node) {
        if (!node) {
            return [];
        }
        if (!node.left && !node.right) {
            //如果是叶子节点，那么它距离它最近的父结点长度为1
            return [1];
        }
        //左子树的叶子节点数组，数组每一项为那个叶子节点距离当前结点的距离
        var leftArr = dfs(node.left);
        //右子树的叶子节点数组，数组每一项为那个叶子节点距离当前结点的距离
        var rightArr = dfs(node.right);
        for (var i = 0; i < leftArr.length; i++) {
            for (var j = 0; j < rightArr.length; j++) {
                //左边的距离加右边的距离小于等于distance时，为好结点对，num++
                leftArr[i] + rightArr[j] <= distance && num++;
            }
        }
        //当前结点的后序遍历结束，左右子树合并，为上一层结点的左（或右）子树叶子节点数组，并且距离全要加1
        return __spreadArrays(leftArr, rightArr).map(function (e) { return e + 1; });
        ;
    };
    dfs(root);
    return num;
}
;
var a = new TreeNode(1);
var b = new TreeNode(2);
var c = new TreeNode(3);
var d = new TreeNode(4);
a.left = b;
a.right = c;
b.right = d;
console.log(countPairs(a, 3)); // 1
console.log(countPairs({ "val": 1, "left": { "val": 2, "left": { "val": 4, "left": null, "right": null }, "right": { "val": 5, "left": null, "right": null } }, "right": { "val": 3, "left": { "val": 6, "left": null, "right": null }, "right": { "val": 7, "left": null, "right": null } } }, 3)); // 2
console.log(countPairs({ "val": 7, "left": { "val": 1, "left": { "val": 6, "left": null, "right": null }, "right": null }, "right": { "val": 4, "left": { "val": 5, "left": null, "right": { "val": 2, "left": null, "right": null } }, "right": { "val": 3, "left": null, "right": null } } }, 3)); // 1
console.log(countPairs({ "val": 1, "left": { "val": 1, "left": null, "right": null }, "right": { "val": 1, "left": null, "right": null } }, 3)); // 1
console.log(countPairs({ "val": 100, "left": null, "right": null }, 1)); // 0
