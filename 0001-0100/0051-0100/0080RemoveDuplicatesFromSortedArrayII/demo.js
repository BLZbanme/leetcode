/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let index = 0, trigger = 0, num = Infinity;
    for (let i = 0; i < nums.length; i++) {
        if (num != nums[i]) {
            trigger = 1;
            nums[index++] = num = nums[i];
        }
        else {
            if (trigger == 2) {
                continue;
            }
            else {
                trigger++
                nums[index++] = num;
            }
        }
    }
    return index;
};

var removeDuplicates = function(nums) {
    let i = 0;
    for (let n of nums) {
        if (n > nums[i - 2] || i < 2) {
            nums[i++] = n;
        }
    }
    return i;
}



console.log(removeDuplicates([0]))

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))

console.log(removeDuplicates([1, 1, 1, 2, 2, 3]))

