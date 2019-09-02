/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    if (!nums || nums.length == 0) {
        return;
    }
    let result = -Infinity;
    const N = nums.length;
    for (let i = 0; i < N; i++) {
        let tmp = 1;
        for (let j = i; j < N; j++) {
            tmp *= nums[j];
            result = Math.max(result, tmp);
        }
    }
    return result;
};

var maxProduct = function(nums) {
    const N = nums.length;
    let dp = new Array(N);
    let result = Math.max(...nums);
    for (let i = 0; i < N; i++) {
        dp[i] = new Array(N);
        dp[i][i] = nums[i];
    }
    for (let i = 1; i < N - 1;i++) {
        for (let j = 0; j + i < N; j++) {
            dp[j][j + i] = nums[j + i] * dp[j][j + i - 1];
            result = Math.max(result, dp[j][j + i]);
        }
    }
    return result;
}

var maxProduct = function(nums) {
    const N = nums.length;
    let dp = Array.from(nums);
    let result = Math.max(...nums);
    for (let i = 1; i < N; i++) {
        for (let j = 0; j + i < N; j++) {
            dp[j] = nums[j] * dp[j + 1];
            result = Math.max(result, dp[j]);
        }
    }
    return result;
}

var maxProduct = function(nums) {
    let result = nums[0];
    let max = result;
    let min = result;
    const N = nums.length;
    for (let i = 1; i < N; i++) {
        if (nums[i] < 0) {
            [max, min] = [min, max];
        }
        max = Math.max(nums[i], max * nums[i]);
        min = Math.min(nums[i], min * nums[i]);
        result = Math.max(result, max);
    }
    return result;
}

var maxProduct = function(nums) {
    let result = nums[0];
    let max = result;
    let min = result;
    const N = nums.length;
    for (let i = 1; i < N; i++) {
        let tmp1 = max * nums[i];
        let tmp2 = min * nums[i];
        max = Math.max(...[nums[i], tmp1, tmp2]);
        min = Math.min(...[nums[i], tmp1, tmp2]);
        result = Math.max(result, max);
    }
    return result;
}

console.log(maxProduct([-2, 3, -4]));
console.log(maxProduct([-4, -3]));
console.log(maxProduct([2, 3, -2, 4]));
console.log(maxProduct([-2, 0, -1]));
