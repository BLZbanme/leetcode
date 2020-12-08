function uniquePaths(m: number, n: number): number {
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[j] += dp[j - 1];
        }
        dp[0] = 0;
    }
    return dp[n];
};

console.log(uniquePaths(3, 2)) //3
console.log(uniquePaths(7, 3)) //28