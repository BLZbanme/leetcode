/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const N = prices.length;
    const dp = Array(N); 
    for (let i = 0; i < N; i++) {
        dp[i] = Array(N).fill(0);
    }

    for (let i = 1; i < N; i++) {
        for (let j = 0; j + i < N; j++) {
            dp[j][j + 1] = Math.max(dp[j][j + i], prices[i + j] - prices[j], dp[j + 1][i + j], dp[j][j + i - 1]);
            for (let k = j + 1; k < i + j - 1; k++) {
                dp[j][j + i] = Math.max(dp[j][j + i], dp[j][k - 1], dp[k + 1][j + i]);
            }
        }
    }

    return dp[0][N - 1];
};

var maxProfit = function(prices) {
    if (!prices.length) {
        return 0;
    }

    const N = prices.length;
    const dp = Array(N);
    for (let i = 0; i < N; i++) {
        dp[i] = Array(3).fill(0);
    }

    dp[0][0] = - prices[0];

    for (let i = 1; i < N; i++) {
        dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][2] - prices[i]);
        dp[i][1] = dp[i - 1][0] + prices[i];
        dp[i][2] = Math.max(dp[i - 1][1], dp[i - 1][2]);
    }

    return Math.max(dp[N - 1][1], dp[N - 1][2]);
}