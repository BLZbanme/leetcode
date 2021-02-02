function minSubArrayLen(s, nums) {
    var n = nums.length;
    var left = 0;
    var sum = 0;
    var res = n;
    for (var right = 0; right < n; right++) {
        sum += nums[right];
        while (sum >= s) {
            res = Math.min(res, right - left + 1);
            sum -= nums[left++];
        }
    }
    return res;
}
;
console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])); //2
