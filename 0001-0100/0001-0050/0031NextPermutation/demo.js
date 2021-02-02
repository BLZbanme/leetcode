"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {
    var _a, _b, _c;
    var N = nums.length;
    var i = N - 1;
    while (i > 0) {
        if (nums[i] > nums[i - 1]) {
            break;
        }
        i--;
    }
    if (!i) {
        for (var i_1 = 0; i_1 < N >> 1; i_1++) {
            _a = [nums[N - i_1 - 1], nums[i_1]], nums[i_1] = _a[0], nums[N - i_1 - 1] = _a[1];
        }
    }
    else {
        var index = binarySearch(nums, nums[i - 1], i, N - 1);
        _b = [nums[i - 1], nums[index]], nums[index] = _b[0], nums[i - 1] = _b[1];
        var j = N - 1;
        while (i < j) {
            _c = [nums[j], nums[i]], nums[i] = _c[0], nums[j] = _c[1];
            j--;
            i++;
        }
    }
    return;
}
;
function binarySearch(arr, target, lo, hi) {
    while (lo <= hi) {
        var mid = lo + ((hi - lo) >> 1);
        if (arr[mid] > target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return hi;
}
console.log(nextPermutation([1, 5, 1])); //[5, 1, 1]
console.log(nextPermutation([1, 3, 2])); //[2, 1, 3]
console.log(nextPermutation([2, 3, 1])); //[3, 1, 2]
console.log(nextPermutation([1, 2, 3])); //[1, 3, 2]
console.log(nextPermutation([3, 2, 1])); //[1, 2, 3]
console.log(nextPermutation([1, 1, 5])); //[1, 5, 1]
