"use strict";
function combinationSum(candidates, target) {
    var dp = Array(1 + target);
    dp[0] = [[0]];
    candidates.sort(function (a, b) { return a - b; });
    for (var i = 1; i <= target; i++) {
        dp[i] = [];
        for (var j = 0; j < candidates.length; j++) {
            if (i < candidates[j]) {
                break;
            }
            var tmp = dp[i - candidates[j]];
            for (var k = 0; k < tmp.length; k++) {
                dp[i].push(Array.from(tmp[k]).concat([candidates[j]]));
            }
        }
    }
    return dp[target];
}
;
console.log(combinationSum([2, 3, 6, 7], 7)); //[[7], [2,2,3]]
console.log(combinationSum([2, 3, 5], 8)); //[[2,2,2,2], [2,3,3], [3,5]]
