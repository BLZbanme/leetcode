/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
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
    return -1;
};

console.log(search([-1,0,3,5,9,12], 9)) //4
console.log(search([-1,0,3,5,9,12], 2)) //-1