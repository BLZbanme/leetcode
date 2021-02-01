"use strict";
function subsets(nums) {
    var result = [[]];
    var N = nums.length;
    var arr = [];
    var dfs = function (index) {
        for (var i = index; i < N; i++) {
            arr.push(nums[i]);
            result.push(Array.from(arr));
            dfs(i + 1);
            arr.pop();
        }
        return;
    };
    dfs(0);
    return result;
}
;
