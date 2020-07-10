/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
    if (!a || !a.length) {
        return [];
    }

    const N = a.length;

    const result = new Array(N);
    const dp = new Array(N);
    for (let i = 0; i < N; i++) {
        dp[i] = new Array(N);
        dp[i][i] = a[i];
    }

    for (let i = 1; i < N - 1; i++) {
        for (let j = 0; j + i < N; j++) {
            dp[j][j + i] = dp[j][j + i - 1] * a[j + i];
        }
    }

    result[0] = dp[1][N - 1];
    result[N - 1] = dp[0][N - 2];
    for (let i = 1; i < N - 1; i++) {
        result[i] = dp[0][i - 1] * dp[i + 1][N - 1];
    }

    return result;
};

var constructArr = function(nums) {
    if (!nums || !nums.length) {
        return [];
    }

    const N = nums.length;
    const result = new Array(N);
    result[0] = 1
    for (let i = 1; i < N; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    let right = 1;
    for (let i = N - 1; i >= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    return result;
};

console.log(constructArr([1,2,3,4,5]))