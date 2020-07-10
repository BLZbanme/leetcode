/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const dp = Array(n);

    dp[0] = 1;
    let two = 0;
    let three = 0;
    let five = 0;

    for (let i = 1; i < n; i++) {
        dp[i] = Math.min(dp[two] * 2, dp[three] * 3, dp[five] * 5);
        debugger
        if (dp[i] == dp[two] * 2) {
            two++;
        }
        if (dp[i] == dp[three] * 3) {
            three++;
        }
        if (dp[i] == dp[five] * 5) {
            five++;
        }
    }
    return dp[n - 1];
};

console.log(nthUglyNumber(10));