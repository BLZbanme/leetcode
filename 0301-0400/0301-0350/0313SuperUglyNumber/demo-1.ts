function nthSuperUglyNumber(n: number, primes: number[]): number {
    const N = primes.length;
    const arr = (Array(N) as any).fill(0);
    const dp = (Array(n) as any).fill(Infinity);
    dp[0] = 1;
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < N; j++) {
            dp[i] = Math.min(dp[i], dp[arr[j]] * primes[j]);
        }
        for (let j = 0; j < N; j++) {
            if (dp[i] == dp[arr[j]] * primes[j]) {
                arr[j]++;
            }
        }
    }

    return dp[n - 1];
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]));