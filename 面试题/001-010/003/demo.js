/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    const numsArr = new Array(10).fill(0);
    for (let num of nums) {
        if (numsArr[num]) {
            return num;
        }
        else {
            numsArr[num] = 1; 
        }
    }
    return null;
};

var findRepeatNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] != i) {
            if (nums[i] === nums[nums[i]]) {
                return nums[i];
            }
            let tmp = nums[nums[i]];
            nums[nums[i]] = nums[i];
            nums[i] = tmp;
        }
    }
    return null;
};

var findRepeatNumber = function(nums) {
    debugger
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] != i) {
            if (nums[i] === nums[nums[i]]) {
                return nums[i];
            }
            let tmp = nums[i];
            [nums[i], nums[tmp]] = [nums[tmp], nums[i]]
        }
    }
    return null;
};
console.log(findRepeatNumber([3]));

console.log(findRepeatNumber([2, 3, 1, 4, 2, 5, 3]));
console.log(findRepeatNumber([0, 0, 0, 0]));
console.log(findRepeatNumber([1]));