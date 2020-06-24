/**
 * @param {number} n
 * @return {number}
 */
var cuttingRope = function(n) {
    if (n <= 2) {
        return 1;
    }
    if (n === 3) {
        return 2;
    }

    //存储当前最大乘积，dp[i]表示长为i的绳子的最大乘积
    const dp = new Array(n + 1);
    //1, 2, 3进过分析，不分割的时候是最大的
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;

    for (let i = 4; i <= n; i++) {
        let max = 0;
        //判断划分i里面乘积最大的值，记为max;
        //只需要判断j小于等于 i / 2即可，所以i右移一位
        for (let j = 1; j <= i >> 1; j++) {
            max = Math.max(dp[j] * dp[i - j], max);
        }
        dp[i] = max;
    }

    return dp[n];
};

console.log(cuttingRope(10)) // 36;
console.log(cuttingRope(8)) // 18;

console.log(cuttingRope(2)) // 1;

