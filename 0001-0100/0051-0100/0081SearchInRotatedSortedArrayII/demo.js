/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let len = nums.length;
    let lo = 0, hi = len - 1;
    while (lo < hi) {
        let mid = parseInt((lo + hi) / 2);
        if (nums[mid] > nums[hi]) {
            lo = mid + 1;
        }
        else {
            hi = mid;
        }
    }
    let offset = lo;
    debugger
    lo = 0, hi = len - 1;
    while (lo <= hi) {
        let mid = parseInt((lo + hi) / 2);
        let realMid = (mid + offset) % len;
        if (nums[realMid] == target) {
            return true;
        }
        else if (nums[realMid] < target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return false;
};


console.log(search([2,2,2,0,2,2], 3))

console.log(search([2,5,6,0,0,1,2], 3))

console.log(search([2,5,6,0,0,1,2], 0))
