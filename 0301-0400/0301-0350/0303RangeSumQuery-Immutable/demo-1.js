"use strict";
var NumArray = /** @class */ (function () {
    function NumArray(nums) {
        var n = nums.length;
        this.dp = Array(n + 1);
        this.dp[0] = 0;
        for (var i = 1; i <= n; i++) {
            this.dp[i] = this.dp[i - 1] + nums[i - 1];
        }
    }
    NumArray.prototype.sumRange = function (i, j) {
        return this.dp[j + 1] - this.dp[i];
    };
    return NumArray;
}());
