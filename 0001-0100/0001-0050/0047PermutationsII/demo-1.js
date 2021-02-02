"use strict";
function permuteUnique(nums) {
    var result = [];
    var set = new Set();
    var N = nums.length;
    var arr = [];
    nums.sort(function (a, b) { return a - b; });
    var dfs = function (index) {
        if (arr.length == N) {
            result.push(Array.from(arr));
            return;
        }
        for (var i = 0; i < N; i++) {
            if ((i !== index && nums[i] == nums[i - 1] && !set.has(i - 1)) || set.has(i)) {
                continue;
            }
            set.add(i);
            arr.push(nums[i]);
            dfs(i + 1);
            arr.pop();
            set.delete(i);
        }
    };
    dfs(0);
    return result;
}
;
console.log(permuteUnique([1, 1, 2]));
