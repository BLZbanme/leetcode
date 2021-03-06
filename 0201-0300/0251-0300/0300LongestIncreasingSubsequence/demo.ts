function lengthOfLIS(nums: number[]): number {
    const n = nums.length;
    if (n < 2) return n;
    const dp = Array(n).fill(1);
    let max = 1;
    for (let i = 1; i < n; i++) {
        for (let j = i - 1; j >= 0; j--) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(1 + dp[j], dp[i]);
            }
        }
        max = Math.max(dp[i], max);
    }
    return max;
};

console.log(lengthOfLIS([4,10,4,3,8,9])); //3
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); //4
console.log(lengthOfLIS([0,1,0,3,2,3])); //4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); //1