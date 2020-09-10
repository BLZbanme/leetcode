var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function combinationSum2(candidates, target) {
    var result = [];
    candidates.sort(function (a, b) { return a - b; });
    var dfs = function (arr, sum, index) {
        if (sum === target) {
            result.push(__spreadArrays(arr));
            return;
        }
        debugger
        for (var i = index; i < candidates.length; i++) {
            if (i != index && candidates[i] == candidates[i - 1])
                continue;
            arr.push(candidates[i]);
            dfs(arr, sum + candidates[i], i + 1);
            arr.pop();
        }
        return;
    };
    dfs([], 0, 0);
    return result;
}
;
console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8)); //[[1, 7],[1, 2, 5],[2, 6],[1, 1, 6]]
console.log(combinationSum2([2, 5, 2, 1, 2], 5)); //[[1,2,2],[5]]
