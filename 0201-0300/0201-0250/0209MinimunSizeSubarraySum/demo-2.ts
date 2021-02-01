function minSubArrayLen(s: number, nums: number[]): number {
    const n = nums.length;
    let left = 0;
    let sum = 0;
    let res = n + 1;
    for (let right = 0; right < n; right++) {
        sum += nums[right];
        while (sum >= s) {
            res = Math.min(res, right - left + 1);
            sum -= nums[left++];
        }
    }
    return res > n ? 0 : res;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]))//2