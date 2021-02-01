"use strict";
function summaryRanges(nums) {
    var result = [];
    var N = nums.length;
    var i = 0;
    while (i < N) {
        var j = 1;
        while (nums[i + j] === nums[i + j - 1] + 1) {
            j++;
        }
        if (j === 1) {
            result.push([nums[i]]);
        }
        else {
            result.push([nums[i], nums[i + j - 1]]);
        }
        i += j;
    }
    return result.map(function (e) { return e.join("->"); });
}
;
