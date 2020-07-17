/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let lo = 0;
    let hi = nums.length - 1;
    
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (nums[mid] < target) {
            lo = mid + 1;
        }
        else if (nums[mid] > target) {
            hi = mid - 1;
        }
        else {
            return mid;
        }
    }

    return lo;
};

console.log(searchInsert([1,3,5,6], 5));//2
console.log(searchInsert([1,3,5,6], 2));//1
console.log(searchInsert([1,3,5,6], 7));//4
console.log(searchInsert([1,3,5,6], 0));//0