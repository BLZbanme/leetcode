function maxProfit(prices: number[]): number {
    const N = prices.length;
    if (N <= 1) return 0;
    const dp = Array(3).fill(0).map(e => Array(N).fill(0))
    for (let k = 1; k <= 2; k++) {
        let min = prices[0];
        for (let i = 1; i < N;i++) {
            min = Math.min(min, prices[i] - dp[k - 1][i - 1]);
            dp[k][i] = Math.max(dp[k][i - 1], prices[i] - min);
        }
    }
    return dp[2][N - 1];
};