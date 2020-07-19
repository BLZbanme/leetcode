/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != i) {
            return i;
        }
    }
    return nums.length;
};

var missingNumber = function(nums) {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (nums[mid] == mid) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return lo;
};

console.log(missingNumber([0,1,3])) //2
console.log(missingNumber([0,1,2,3,4,5,6,7,9])) //8