/**
 * @param {number} n
 * @return {number[]}
 */
var twoSum = function(n) {
    const result = [];
    
    const dp = Array(12);
    for (let i = 1; i < 12; i++) {
        dp[i] = Array(67).fill(0);
    }

    for (let i = 1; i <= 6; i++) {
        dp[1][i] = 1;
    }

    for (let i = 2; i <= n; i++) {
        for (let j = i; j <= 6 * i; j++) {
            for (let cur = 1; cur <= 6; cur++) {
                if (j - cur <= 0) {
                    break;
                }
                dp[i][j] += dp[i - 1][j - cur];
            }
        }
    }

    let all = 6 ** n;
    
    for (let i = n; i <= 6 * n; i++) {
        result.push(dp[n][i] / all);
    }

    return result;
};

console.log(twoSum(2))
console.log(twoSum(3))