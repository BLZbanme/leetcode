"use strict";
function fourSum(nums, target) {
    var result = [];
    var N = nums.length;
    nums.sort(function (a, b) { return a - b; });
    var threeSum = function (index, now) {
        for (var i = index; i < N; i++) {
            if (i > index && nums[i] == nums[i - 1]) {
                continue;
            }
            var lo = i + 1;
            var hi = N - 1;
            while (lo < hi) {
                if (lo > i + 1 && nums[lo] == nums[lo - 1]) {
                    lo++;
                    continue;
                }
                if (hi < N - 1 && nums[hi] == nums[hi + 1]) {
                    hi--;
                    continue;
                }
                if (nums[lo] + nums[hi] + nums[i] + now > target) {
                    hi--;
                }
                else if (nums[lo] + nums[hi] + nums[i] + now < target) {
                    lo++;
                }
                else {
                    result.push([now, nums[i], nums[lo], nums[hi]]);
                    lo++;
                    hi--;
                }
            }
        }
    };
    for (var i = 0; i < N; i++) {
        if (i > 0 && nums[i] == nums[i - 1]) {
            continue;
        }
        threeSum(i + 1, nums[i]);
    }
    return result;
}
;
console.log(fourSum([-2, -1, -1, 1, 1, 2, 2], 0));
console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
