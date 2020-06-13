/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    const dp = new Array(n);
    dp[0] = 1;
    dp[1] = 2;
    for (let i = 2; i < n; i++) {
        dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n - 1];
};

var climbStairs = function(n) {
    let preTwo = 1;
    let preOne = 1;
    
    for (let i = 1; i < n; i++) {
        let tmp = preOne + preTwo;
        preTwo = preOne;
        preOne = tmp;
    }
    return preOne;
};

console.log(climbStairs(3))

console.log(climbStairs(4))