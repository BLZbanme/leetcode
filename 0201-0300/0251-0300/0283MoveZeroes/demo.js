/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i = 0;
    const N = nums.length;
    for (let j = 0; j < N; j++) {
        if (nums[j]) {
            nums[i++] = nums[j];
        }
    }
    while (i < N) {
        nums[i++] = 0;
    }
    return nums;
};

var moveZeroes = function(nums) {
    let i = 0;
    let j = 0;
    const N = nums.length;
    while (i < N) {
        if (j < N) {
            if (nums[j]) {
                nums[i++] = nums[j];
            }
            j++;
        }
        else {
            nums[i++] = 0;
        }
    }
    return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));