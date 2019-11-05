/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let dp = new Array(n);
    dp[0] = 1;
    let twoNum = 0;
    let threeNum = 0;
    let fiveNum = 0;
    for (let i = 1; i < n; i++) {
        dp[i] = Math.min(dp[twoNum] * 2, dp[threeNum] * 3, dp[fiveNum] * 5);
        if (dp[i] === dp[twoNum] * 2) {
            twoNum++;
        }
        if (dp[i] === dp[threeNum] * 3) {
            threeNum++;
        }
        if (dp[i] === dp[fiveNum] * 5) {
            fiveNum++;
        }
    }
    return dp[n - 1];
};

console.log(nthUglyNumber(10));
console.log(nthUglyNumber(11));
console.log(nthUglyNumber(15));