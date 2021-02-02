"use strict";
function subarraySum(nums, k) {
    var map = new Map();
    var n = nums.length;
    var count = 0;
    var tmp = 0;
    map.set(0, 1);
    for (var i = 0; i < n; i++) {
        tmp += nums[i];
        var diff = tmp - k;
        count += map.get(diff) || 0;
        map.set(tmp, (map.get(tmp) || 0) + 1);
    }
    return count;
}
;
console.log(subarraySum([1, 1, 1], 2)); // 2
console.log(subarraySum([1, 2, 3], 3)); // 2
