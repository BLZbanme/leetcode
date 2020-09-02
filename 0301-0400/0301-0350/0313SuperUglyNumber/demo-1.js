function nthSuperUglyNumber(n, primes) {
    var N = primes.length;
    var arr = Array(N).fill(0);
    var dp = Array(n).fill(Infinity);
    dp[0] = 1;
    for (var i = 1; i < n; i++) {
        for (var j = 0; j < N; j++) {
            dp[i] = Math.min(dp[i], dp[arr[j]] * primes[j]);
        }
        for (var j = 0; j < N; j++) {
            if (dp[i] == dp[arr[j]] * primes[j]) {
                arr[j]++;
            }
        }
    }
    return dp[n - 1];
}
;
console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]));
