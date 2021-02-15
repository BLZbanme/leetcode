/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    const n = nums.length;
    let left = 0;
    let res = 0;
    for (let right = 0; right < n; right++) {
        if (nums[right] === 0) {
            left = right + 1;
        }
        res = Math.max(res, right - left + 1);
    }
    return res;
};