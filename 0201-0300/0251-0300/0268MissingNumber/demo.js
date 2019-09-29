/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] !== i) {
            return i;
        }
    }
};

var missingNumber = function(nums) {
    const N = nums.length;
    // let sum = 0;
    // nums.forEach(e => {
    //     sum += e;
    // });
    return (1 + N) * N / 2 - nums.reduce((total, num) => total + num);
};

console.log(missingNumber([0]));
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));