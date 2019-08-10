/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = nums[0];
    for (let i = 1, len = nums.length; i < len; i++) {
        result ^= nums[i]; 
    }
    return result;
};

var singleNumber = function(nums) {
    let result = 0;
    for (let i = 0, len = nums.length; i < len; i++) {
        result ^= nums[i]; 
    }
    return result;
};

console.log(singleNumber([2, 2, 1]))
console.log(singleNumber([4, 1, 2, 1, 2]))