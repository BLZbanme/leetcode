function findLengthOfLCIS(nums: number[]): number {
    if (!nums.length) return 0;
    let max = 1;
    let cur = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            cur++;
            max = Math.max(max, cur);
        }
        else {
            cur = 1;
        }
    }
    return max;
};