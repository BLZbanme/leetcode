"use strict";
function containsDuplicate(nums) {
    var set = new Set();
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var num = nums_1[_i];
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }
    return false;
}
;
