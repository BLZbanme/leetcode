"use strict";
function maxProfit(prices) {
    var N = prices.length;
    if (N <= 1)
        return 0;
    var dp = Array(3).fill(0).map(function (e) { return Array(N).fill(0); });
    for (var k = 1; k <= 2; k++) {
        var min = prices[0];
        for (var i = 1; i < N; i++) {
            min = Math.min(min, prices[i] - dp[k - 1][i - 1]);
            dp[k][i] = Math.max(dp[k][i - 1], prices[i] - min);
        }
    }
    return dp[2][N - 1];
}
;
