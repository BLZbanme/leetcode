/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    coins = coins.filter(e => e);
    if (!coins.length) {
        return -1;
    }
    if (!amount) {
        return 0;
    }
    let dp = new Array(amount + 1).fill(0);
    for (let i = 1; i <= amount; i++) {
        let min = Infinity;
        for (let e of coins) {
            if (i - e >= 0 && dp[i - e] !== -1) {
                min = Math.min(min, dp[i - e] + 1);
            }
        }
        dp[i] = min === Infinity ? -1 : min;
    }
    return dp[amount];
};

var coinChange = function(coins, amount) {
    if (!amount) {
        return 0;
    }
    let dp = new Array(amount + 1).fill(0);
    for (let i = 1; i <= amount; i++) {
        let min = Infinity;
        for (let e of coins) {
            if (i - e >= 0 && dp[i - e] !== -1) {
                min = Math.min(min, dp[i - e] + 1);
            }
        }
        dp[i] = min === Infinity ? -1 : min;
    }
    return dp[amount];
};

var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let e of coins) {
            if (e <= i) {
                dp[i] = Math.min(dp[i], dp[i - e] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}


console.log(coinChange([0], 1))
console.log(coinChange([0, 1], 1))
console.log(coinChange([1], 1))
console.log(coinChange([1], 2))
console.log(coinChange([2], 1))
console.log(coinChange([1], 0))
console.log(coinChange([1, 2, 5], 11))
console.log(coinChange([2], 3))