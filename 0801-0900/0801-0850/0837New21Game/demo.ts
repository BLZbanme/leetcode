function new21Game1(N: number, K: number, W: number): number {
    if (K == 0) {
        return 1.0;
    }
    const dp = Array(K + W).fill(0);
    for (let i = K; i <= N && i < K + W; i++) {
        dp[i] = 1.0;
    }
    for (let i = K - 1; i >= 0; i--) {
        for (let j = 1; j <= W; j++) {
            dp[i] += dp[i + j] / W;
        }
    }
    return dp[0];
};

function new21Game(N: number, K: number, W: number): number {
    if (K == 0) {
        return 1.0;
    }
    const dp = Array(K + W).fill(0);
    for (let i = K; i <= N && i < K + W; i++) {
        dp[i] = 1.0;
    }
    dp[K - 1] = Math.min(N - K + 1, W) / W;
    for (let i = K - 2; i >= 0; i--) {
        dp[i] = dp[i + 1] - (dp[i + W + 1] - dp[i + 1]) / W;
    }
    return dp[0];
};