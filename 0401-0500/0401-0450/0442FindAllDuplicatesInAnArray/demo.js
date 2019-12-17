/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let result = [];
    debugger
    for (let i = 0; i < nums.length; i++) {
        let index = Math.abs(nums[i]) - 1;
        if (nums[index] < 0) {
            result.push(Math.abs(index + 1));
        }
        nums[index] = -nums[index];
    }
    return result;
};

var findAllNumbers = function(nums) {
    let result = [];
    for (let num of nums) {
        let index = Math.abs(num) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 0) {
            result.push(i + 1);
        }
    }
    return result;
}

console.log(findAllNumbers([4,3,2,7,8,2,3,1]))