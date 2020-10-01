function minimumOperations(leaves: string): number {
    const N = leaves.length;
    const dp = Array(N);
    for (let i = 0; i < N; i++) {
        dp[i] = Array(3);
    }
    dp[0][0] = leaves[0] == 'y' ? 1 : 0;
    dp[0][1] = dp[0][2] = dp[1][2] = Infinity;
    for (let i = 1; i < N; i++) {
        let isRed = leaves[i] == 'r' ? 1 : 0;
        let isYellow = leaves[i] == 'y' ? 1 : 0;
        dp[i][0] = dp[i - 1][0] + isYellow;
        dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + isRed;
        if (i >= 2) {
            dp[i][2] = Math.min(dp[i - 1][1], dp[i - 1][2]) + isYellow;
        }
    }
    return dp[N - 1][2];
};

console.log(minimumOperations("rrryyyrryyyrr")); // 2

console.log(minimumOperations("ryr")); // 0
console.log(minimumOperations("yry")); // 3