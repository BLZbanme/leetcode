/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const N = nums.length;
    let lo = 0;
    let hi = N - 1;

    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (nums[mid] === target) {
            return mid;
        }
        else if (nums[0] <= nums[mid]) {
            if (nums[0] <= target && target < nums[mid]) {
                hi = mid - 1;
            }
            else {
                lo = mid + 1;
            }
        }
        else {
            if (nums[mid] < target && target <= nums[N - 1]) {
                lo = mid + 1;
            }
            else {
                hi = mid - 1;
            }
        }
    }

    return -1;
};

console.log(search([4,5,6,7,0,1,2], 0)) //4
console.log(search([4,5,6,7,0,1,2], 3)) //-1