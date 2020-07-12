/**
 * @param {number} n
 * @return {number}
 */
var numWays = function(n) {
    const dp = Array(n + 1);
    dp[0] = 1;
    dp[1] = 1;
    for (let i = 2; i <= n; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
    }
    return dp[n];
};

var numWays = function(n) {
    let p = 1;
    let q = 1;
    let sum;
    for (let i = 2; i <= n; i++) {
        sum = (p + q) % 1000000007;
        p = q;
        q = sum;
    }
    return q;
};

console.log(numWays(1)) //1
console.log(numWays(2)) //2
console.log(numWays(3)) //3