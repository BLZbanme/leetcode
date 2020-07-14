/**
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
    const dp = Array(N + 1);
    dp[0] = 0;
    dp[1] = 1;
    for (let i = 2; i <= N; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[N];
};

var fib = function(N) {
    if (!N) {
        return 0;
    }
    if (N == 1) {
        return 1;
    }
    let p = 0;
    let q = 1;

    for (let i = 2; i <= N; i++) {
        let sum = p + q;
        p = q;
        q = sum;
    }
    return q;
};