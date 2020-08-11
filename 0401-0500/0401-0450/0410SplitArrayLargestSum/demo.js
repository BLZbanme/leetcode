/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
var splitArray = function(nums, m) {
    const N = nums.length;
    const dp = Array(N + 1);
    for (let i = 0; i <= N; i++) {
        dp[i] = Array(m + 1).fill(Infinity);
    }

    const sub = Array(N + 1);
    sub[0] = 0;
    for (let i = 0; i < N; i++) {
        sub[i + 1] = sub[i] + nums[i];
    }

    dp[0][0] = 0;

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= Math.min(i, m); j++) {
            for (let k = 0; k < i; k++) {
                dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j - 1], sub[i] - sub[k]))
            }
        }
    }

    return dp[N][m];
};

console.log(splitArray([7,2,5,10,8], 2)); //18