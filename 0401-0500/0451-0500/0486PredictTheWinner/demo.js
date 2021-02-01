"use strict";
function PredictTheWinner11(nums) {
    return total(nums, 0, nums.length - 1, 1) >= 0;
}
;
function total(nums, start, end, turn) {
    if (start === end) {
        return nums[start] * turn;
    }
    var scoreStart = nums[start] * turn + total(nums, start + 1, end, -turn);
    var scoreEnd = nums[end] * turn + total(nums, start, end - 1, -turn);
    return Math.max(scoreStart * turn, scoreEnd * turn) * turn;
}
function PredictTheWinner(nums) {
    var N = nums.length;
    var dp = Array(N);
    for (var i = 0; i < N; i++) {
        dp[i] = Array(N);
        dp[i][i] = nums[i];
    }
    for (var i = N - 2; i >= 0; i--) {
        for (var j = i + 1; j < N; j++) {
            dp[i][j] = Math.max(nums[i] - dp[i + 1][j], nums[j] - dp[i][j - 1]);
        }
    }
    return dp[0][N - 1] >= 0;
}
