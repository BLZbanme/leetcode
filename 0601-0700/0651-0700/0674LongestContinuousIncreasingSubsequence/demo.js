"use strict";
function findLengthOfLCIS(nums) {
    if (!nums.length)
        return 0;
    var max = 1;
    var cur = 1;
    for (var i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            cur++;
            max = Math.max(max, cur);
        }
        else {
            cur = 1;
        }
    }
    return max;
}
;
