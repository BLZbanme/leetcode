/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo < hi) {
        if (nums[lo] + nums[hi] > target) {
            hi--;
        }
        else if (nums[lo] + nums[hi] < target) {
            lo++;
        }
        else {
            return [nums[lo], nums[hi]];
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9))