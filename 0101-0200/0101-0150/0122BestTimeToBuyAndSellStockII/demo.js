/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let res = 0;
    const N = prices.length;
    for (let i = 1; i < N; i++) {
        res += Math.max(prices[i] - prices[i - 1], 0);
    }
    return res;
};


var maxProfit = function(prices) {
    if (!prices || !prices.length) {
        return 0;
    }
    const N = prices.length;
    let dp = new Array(N);
    for (let i = 0; i < N; i++) {
        dp[i] = new Array(N);
        dp[i][i] = 0;
    }
    // debugger
    for (let i = 1; i < N; i++) {
        for (let j = 0; j + i < N; j++) {
            let tmp = prices[j + i] - prices[j];
            for (let k = j; k < i + j; k++) {
                tmp = Math.max(tmp, dp[j][k] + Math.max(dp[k + 1][i + j], prices[j + i] - prices[k + 1]));
            }
            dp[j][j + i] = tmp; 
        }
    }
    return dp[0][N - 1];
};