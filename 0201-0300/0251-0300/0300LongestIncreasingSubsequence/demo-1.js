function lengthOfLIS(nums) {
    var n = nums.length;
    if (n < 2)
        return n;
    var len = 1;
    var dp = Array(n + 1);
    dp[1] = nums[0];
    for (var i = 1; i < n; i++) {
        if (nums[i] > dp[len]) {
            dp[++len] = nums[i];
        }
        else {
            var lo = 1;
            var hi = len;
            var pos = 0;
            while (lo <= hi) {
                var mid = lo + ((hi - lo) >> 1);
                if (dp[mid] < nums[i]) {
                    pos = mid;
                    lo = mid + 1;
                }
                else {
                    hi = mid - 1;
                }
            }
            dp[pos + 1] = nums[i];
        }
    }
    return len;
}
;
console.log(lengthOfLIS([4, 10, 4, 3, 8, 9])); //3
console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])); //4
console.log(lengthOfLIS([0, 1, 0, 3, 2, 3])); //4
console.log(lengthOfLIS([7, 7, 7, 7, 7, 7, 7])); //1
