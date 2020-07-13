/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let j = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }
};

console.log(moveZeroes([1, 2, 3, 0])); //[1, 2, 3, 0]
console.log(moveZeroes([2, 1])); //[2,1]
console.log(moveZeroes([0,1,0,3,12])); //[1,3,12,0,0]