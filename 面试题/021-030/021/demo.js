/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
    let i = 0;

    for (j = 0; j < nums.length; j++) {
        if (nums[j] & 1) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
        }
    }
    return nums;
};

var exchange = function(nums) {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo < hi) {
        while (lo < nums.length && nums[lo] & 1) {
            lo++;
        }
        while (hi >= 0 && !(nums[hi] & 1)) {
            hi--;
        }
        if (lo >= hi) {
            break;
        }
        [nums[lo], nums[hi]] = [nums[hi], nums[lo]];
        lo++;
        hi--;
    }
    return nums;
};

console.log(exchange([2, 4, 6])) //[2, 4, 6]
console.log(exchange([1, 3, 5]))
console.log(exchange([1, 2, 3, 4]))