function maximumProduct(nums: number[]): number {
    const N = nums.length;
    if (N === 3) {
        return nums[0] * nums[1] * nums[2];
    }
    nums.sort((a, b) => b - a);
    return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[N - 1] * nums[N - 2])
};