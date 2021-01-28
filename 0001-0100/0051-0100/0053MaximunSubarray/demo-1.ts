function maxSubArray(nums: number[]): number {
    if (!nums || !nums.length) return 0;
    let min = 0;
    let max = -Infinity;
    let tmp = 0;
    for (let i = 0; i < nums.length; i++) {
        tmp += nums[i];
        max = Math.max(max, tmp - min);
        min = Math.min(tmp, min);
    }
    return max;
};

console.log(maxSubArray([1, 2])) //3