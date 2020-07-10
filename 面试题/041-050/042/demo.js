/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let max = -Infinity;
    const N = nums.length;
    const dp = Array(N + 1);
    dp[0] = -Infinity;

    for (let i = 1; i <= N; i++) {
        dp[i] = Math.max(nums[i - 1], nums[i - 1] + dp[i - 1]);
        max = Math.max(dp[i], max);
    }
    return max;
};

var maxSubArray = function(nums) {
    let max = -Infinity;
    const N = nums.length;
    let tmp = -Infinity;

    for (let i = 1; i <= N; i++) {
        tmp = Math.max(nums[i - 1], nums[i - 1] + tmp);
        max = Math.max(tmp, max);
    }
    return max;
};

var maxSubArray = function(nums) {
    
    let res = nums[0];

    for (let i = 1; i < nums.length; i++) {
        nums[i] += Math.max(nums[i - 1], 0);
        res = Math.max(res, nums[i]);
    }
    return res;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));