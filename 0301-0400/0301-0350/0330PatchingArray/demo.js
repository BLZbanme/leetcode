"use strict";
function minPatches(nums, n) {
    var patches = 0;
    var x = 1;
    var length = nums.length;
    var index = 0;
    while (x <= n) {
        if (index < length && nums[index] <= x) {
            x += nums[index];
            index++;
        }
        else {
            x *= 2;
            patches++;
        }
    }
    return patches;
}
;
