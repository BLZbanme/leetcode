/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let lo = 0;
    let hi = nums.length;
    const N = nums.length - 1;
    while (lo < hi) {
        let mid = Math.floor((lo + hi) / 2);
        if ((mid == 0 && nums[0] < nums[N]) || (nums[mid] < nums[mid - 1])) {
            return nums[mid];
        }
        else if (nums[mid] > nums[N]) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return nums[lo];
};


console.log(findMin([2, 1]))
console.log(findMin([1]))

console.log(findMin([3,4,5,1,2]))
console.log(findMin([4,5,6,7,0,1,2]))