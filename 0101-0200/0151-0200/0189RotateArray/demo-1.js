"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums, k) {
    var _a, _b;
    var N = nums.length;
    k %= N;
    nums.reverse();
    for (var i = 0; i < k >> 1; i++) {
        _a = [nums[k - i - 1], nums[i]], nums[i] = _a[0], nums[k - i - 1] = _a[1];
    }
    for (var i = 0; i < (N - k) >> 1; i++) {
        _b = [nums[N - 1 - i], nums[i + k]], nums[i + k] = _b[0], nums[N - 1 - i] = _b[1];
    }
}
;
