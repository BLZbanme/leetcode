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
    return (1 + N) * N / 2 - nums.reduce((total, num) => total + num);
};

var missingNumber = function(nums) {
    let xor = 0;
    let i = 0;
    for (; i < nums.length; i++) {
        xor = xor ^ i ^ nums[i];
    }
    return xor ^ i;
}

console.log(missingNumber([0]));
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9,6,4,2,3,5,7,0,1]));