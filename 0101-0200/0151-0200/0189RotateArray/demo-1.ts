/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const N = nums.length;
    k %= N;
    nums.reverse();
    for (let i = 0; i < k >> 1; i++) {
        [nums[i], nums[k - i - 1]] = [nums[k - i - 1], nums[i]]
    }
    for (let i = 0; i < (N - k) >> 1; i++) {
        [nums[i + k], nums[N - 1 - i]] = [nums[N - 1 - i], nums[i + k]]
    }
};