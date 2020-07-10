/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const N = prices.length;
    if (!N) {
        return 0;
    }
    const dp = new Array(N + 1);
    for (let i = 0; i <= N; i++) {
        dp[i] = new Array(N).fill(0);
    }

    for (let i = 1; i < N; i++) {
        for (let j = 0; j + i < N; j++) {
            dp[j][j + i] = Math.max(dp[j][j + i], prices[i + j] - prices[j], dp[j + 1][i + j], dp[j][j + i - 1]);
            for (let k = j + 1; k < i + j - 1; k++) {
                dp[j][j + i] = Math.max(dp[j][j + i], dp[j][k - 1] + dp[k + 1][j + i]);
            }
        }
    }
    return dp[0][N - 1];
};

var maxProfit = function(prices) {
    const N = prices.length;
    if (!N) {
        return 0;
    }
    const holds = new Array(N);
    const solds = new Array(N);
    const rests = new Array(N);
    holds[0] = -prices[0];
    solds[0] = 0;
    rests[0] = 0;
    for (let i = 1; i < N; i++) {
        solds[i] = holds[i - 1] + prices[i];
        holds[i] = Math.max(holds[i - 1], rests[i - 1] - prices[i]);
        rests[i] = Math.max(rests[i - 1], solds[i - 1]);
    }
    return Math.max(solds[N - 1], rests[N - 1])
}

var maxProfit = function(prices) {
    const N = prices.length;
    if (!N) {
        return 0;
    }
    let hold = -prices[0];
    let sold = 0;
    let rest = 0;
    for (let i = 1; i < N; i++) {
        let preSold = sold;
        sold = hold + prices[i];
        hold = Math.max(hold, rest - prices[i]);
        rest = Math.max(preSold, rest);
    }
    return Math.max(sold, rest);
}

console.log(maxProfit([1, 2, 3, 0, 2]))