/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    const dp = Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        let count = 2 * dp[i - 1];
        for (let j = 2; j <= i - 1; j++) {
            count += dp[j - 1] * dp[i - j]; 
        }
        dp[i] = count;
    }

    return dp[n];
};

var numTrees = function(n) {
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j]; 
        }
    }

    return dp[n];
};


console.log(numTrees(2)); //2
console.log(numTrees(3)); //5
console.log(numTrees(4)); //14


