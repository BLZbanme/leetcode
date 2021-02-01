"use strict";
function canPartition11(nums) {
    var sum = nums.reduce(function (pre, cur) { return pre + cur; });
    if (sum & 1) {
        return false;
    }
    var N = nums.length;
    var half = sum >> 1;
    nums.sort(function (a, b) { return b - a; });
    var check = function (target, index) {
        if (target == 0) {
            return true;
        }
        if (index == N) {
            return false;
        }
        for (var i = index; i < N; i++) {
            if (check(target - nums[i], i + 1)) {
                return true;
            }
        }
        return false;
    };
    return check(half, 0);
}
;
function canPartition(nums) {
    var max = 0;
    var sum = nums.reduce(function (pre, cur) {
        max = Math.max(max, cur);
        return pre + cur;
    });
    if (sum & 1) {
        return false;
    }
    var target = sum >> 1;
    if (max > target) {
        return false;
    }
    var N = nums.length;
    var dp = Array(N).fill(0).map(function (e) { return Array(target + 1).fill(false); });
    for (var i = 0; i < N; i++) {
        dp[i][0] = true;
    }
    for (var i = 1; i < N; i++) {
        var num = nums[i];
        for (var j = 1; j <= target; j++) {
            if (j >= num) {
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - num];
            }
            else {
                dp[i][j] = dp[i - 1][j];
            }
        }
    }
    return dp[N - 1][target];
}
console.log(canPartition([1, 5, 11, 5])); // true
console.log(canPartition([1, 2, 3, 5])); // false
