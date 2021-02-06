function lengthOfLIS(nums: number[]): number {
    const n = nums.length;
    if (n < 2) return n;
    let len = 1;
    const dp = Array(n + 1);
    dp[1] = nums[0];
    for (let i = 1; i < n; i++) {
        if (nums[i] > dp[len]) {
            dp[++len] = nums[i];
        }
        else {
            let lo = 1;
            let hi = len;
            while (lo <= hi) {
                let mid = lo + ((hi - lo) >> 1);
                if (dp[mid] < nums[i]) {
                    lo = mid + 1;
                }
                else {
                    hi = mid - 1;
                }
            }
            dp[lo] = nums[i];
        }
    }
    return len;
};

console.log(lengthOfLIS([4,10,4,3,8,9])); //3
console.log(lengthOfLIS([10,9,2,5,3,7,101,18])); //4
console.log(lengthOfLIS([0,1,0,3,2,3])); //4
console.log(lengthOfLIS([7,7,7,7,7,7,7])); //1