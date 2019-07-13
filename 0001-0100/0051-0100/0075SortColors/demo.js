/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    let i = 0, j = nums.length - 1;
    let index = 0;
    while (index <= j) {
        if (nums[index] == 0 && index != i) {
            [nums[index], nums[i++]] = [nums[i], nums[index]];
        }
        else if (nums[index] == 2) {
            [nums[index], nums[j--]] = [nums[j], nums[index]];
        }
        else {
            index++;
        }
    }
    return;
};

var sortColors = function(nums) {
    let tmpArr = new Array(3).fill(0)
    nums.forEach(e => tmpArr[e]++);
    let i = 0;
    tmpArr.forEach((e, index) => {
        for (let j = 0; j < e; j++) {
            nums[i++] = index;
        }
    })
    return;
}


console.log(sortColors([2, 0, 1]));

console.log(sortColors([2,0,2,1,1,0]));

console.log(sortColors([2,2,1,1,0,0]));

console.log(sortColors([2,2,1,1,1,1]));

console.log(sortColors([2,0,1,0,2,1]));

console.log(sortColors([0]));

console.log(sortColors([1]));

console.log(sortColors([2]));

console.log(sortColors([2, 0]));
