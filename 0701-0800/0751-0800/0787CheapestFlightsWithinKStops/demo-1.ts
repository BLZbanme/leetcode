function findCheapestPrice(n: number, flights: number[][], src: number, dst: number, K: number): number {
    const dp = Array(n).fill(0).map(e => Array(K + 1).fill(Infinity));
    for (const [start, end, price] of flights) {
        start === src && (dp[end][0] = Math.min(dp[end][0], price));
    }
    for (let i = 1; i <= K; i++) {
        for (let [start, end, price] of flights) {
            dp[end][i] = Math.min(dp[end][i - 1], dp[end][i], dp[start][i - 1] + price);
        }
    }
    return dp[dst][K] === Infinity ? -1 : dp[dst][K];
};