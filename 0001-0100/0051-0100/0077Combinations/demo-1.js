"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function combine(n, k) {
    var result = [];
    var dfs = function (arr, index) {
        if (arr.length === k) {
            result.push(__spreadArrays(arr));
            return;
        }
        for (var i = index; i <= n; i++) {
            arr.push(i);
            dfs(arr, i + 1);
            arr.pop();
        }
    };
    dfs([], 1);
    return result;
}
;
