/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const result = [];
    const N = nums.length;

    for (let i = 0; i < N; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    for (let i = 0; i < N; i++) {
        if (nums[i] > 0) {
            result.push(i + 1);
        }
    }
    return result;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));