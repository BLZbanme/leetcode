/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    if (!n) {
        return 1;
    }
    n = n > 10 ? 10 : n;
    const dp = new Array(n + 1).fill(0);
    let sum = 10;
    dp[1] = 9;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] * (11 - i);
        sum += dp[i];
    }
    return sum;
};

var countNumbersWithUniqueDigits = function(n) {
    if (!n) {
        return 1;
    }
    n = n > 10 ? 10 : n;
    let sum = 10;
    let dp = 9;
    for (let i = 2; i <= n; i++) {
        dp *= (11 - i);
        sum += dp;
    }
    return sum;
};

console.log(countNumbersWithUniqueDigits(1))
console.log(countNumbersWithUniqueDigits(2))
console.log(countNumbersWithUniqueDigits(3))
console.log(countNumbersWithUniqueDigits(4))
console.log(countNumbersWithUniqueDigits(6))
console.log(countNumbersWithUniqueDigits(10))
console.log(countNumbersWithUniqueDigits(11))

console.log(countNumbersWithUniqueDigits(100))