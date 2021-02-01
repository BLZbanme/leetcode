"use strict";
function maxSubArray(nums) {
    if (!nums || !nums.length)
        return 0;
    var min = 0;
    var max = -Infinity;
    var tmp = 0;
    for (var i = 0; i < nums.length; i++) {
        tmp += nums[i];
        max = Math.max(max, tmp - min);
        min = Math.min(tmp, min);
    }
    return max;
}
;
console.log(maxSubArray([1, 2])); //3
