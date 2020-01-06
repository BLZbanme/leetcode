/**
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], j * Math.max(dp[i - j], i - j));
        }
    }
    return dp[n];
};

var integerBreak = function(n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], Math.max(dp[j], j) * Math.max(dp[i - j], i - j));
        }
    }
    console.log(dp);
    return dp[n];
};

var integerBreak = function(n) {
    let dp = new Array(n + 1);
    
    for (let i = 1; i < n; i++) {
        dp[i] = i;
    }
    dp[n] = 0;

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i - j; j++) {
            dp[i] = Math.max(dp[i], dp[j] * dp[i - j]);
        }
    }
    return dp[n];
};

console.log(integerBreak(6));
console.log(integerBreak(10));
console.log(integerBreak(2));
