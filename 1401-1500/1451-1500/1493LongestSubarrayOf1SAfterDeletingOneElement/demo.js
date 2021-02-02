function longestSubarray(nums) {
    var n = nums.length;
    var left = 0;
    var res = 0;
    var zeroCount = 0;
    for (var right = 0; right < n; right++) {
        nums[right] || zeroCount++;
        if (zeroCount > 1) {
            nums[left++] || zeroCount--;
        }
        res = Math.max(res, right - left);
    }
    return res;
}
;
console.log(longestSubarray([1, 0])); //1
console.log(longestSubarray([0, 0])); //0
console.log(longestSubarray([1, 1])); //1
console.log(longestSubarray([1, 1, 0, 1])); //3
console.log(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1])); //5
console.log(longestSubarray([1, 1, 1])); //2
console.log(longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1])); //4
console.log(longestSubarray([0, 0, 0])); //0
