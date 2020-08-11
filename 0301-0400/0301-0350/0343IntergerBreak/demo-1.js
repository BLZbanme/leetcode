/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n <= 3) {
        return n - 1;
    }
    const dp = Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    for (let i = 4; i <= n; i++) {
        for (let j = 1; j <= (i >> 1); j++) {
            dp[i] = Math.max(dp[i], dp[j] * dp[i - j]);
        }
    }

    return dp[n];
};

var integerBreak = function(n) {
    if (n < 4) {
        return n - 1;
    }

    const dp = Array(n + 1);
    dp[0] = 0;
    dp[1] = 0;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = Math.max(Math.max(2 * (i - 2),  2 * dp[i - 2]), Math.max(3 * (i - 3), 3 * dp[i - 3]));
    }

    return dp[n];
}

var integerBreak = function(n) {
    if (n < 4) {
        return n - 1;
    }
    let p = Math.floor(n / 3);
    let q = n % 3;
    if (!q) {
        return 3 ** p;
    }
    else if (q == 1) {
        return 3 ** (p - 1) * 4;
    }
    else {
        return 3 ** p * 2;
    }
}

console.log(integerBreak(2)); //1
console.log(integerBreak(10)); //36