"use strict";
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes1(nums) {
    var N = nums.length;
    var i = 0;
    var j = 0;
    while (j < N || i < N) {
        if (j < N) {
            if (nums[j]) {
                nums[i++] = nums[j];
            }
            j++;
        }
        else {
            nums[i++] = 0;
        }
    }
}
;
function moveZeroes(nums) {
    var _a;
    var N = nums.length;
    var i = 0;
    var j = 0;
    while (j < N) {
        if (nums[j]) {
            _a = [nums[i], nums[j]], nums[j] = _a[0], nums[i] = _a[1];
            i++;
        }
        j++;
    }
    return;
}
