var maxSubArray = function(nums) {
    let res = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1] < 0 ? 0 : nums[i - 1];
        res = Math.max(nums[i], res);
    }
    return res;
}