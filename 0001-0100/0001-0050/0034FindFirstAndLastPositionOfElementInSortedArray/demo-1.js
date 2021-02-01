"use strict";
function searchRange(nums, target) {
    if (!nums.length) {
        return [-1, -1];
    }
    var lo = loBinarySearch(nums, target);
    var hi = hiBinarySearch(nums, target);
    if (nums[lo] === target && nums[hi - 1] === target) {
        return [lo, hi - 1];
    }
    return [-1, -1];
}
;
function loBinarySearch(nums, target) {
    var lo = 0;
    var hi = nums.length - 1;
    while (lo <= hi) {
        var mid = lo + ((hi - lo) >> 1);
        if (nums[mid] < target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return lo;
}
function hiBinarySearch(nums, target) {
    var lo = 0;
    var hi = nums.length - 1;
    while (lo <= hi) {
        var mid = lo + ((hi - lo) >> 1);
        if (nums[mid] <= target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return lo;
}
console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); //[3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); //[-1, -1]
console.log(searchRange([], 0)); //[-1, -1]
console.log(searchRange([1], 1)); //[0, 0]
