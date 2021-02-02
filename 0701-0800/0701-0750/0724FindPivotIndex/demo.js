"use strict";
function pivotIndex1(nums) {
    var n = nums.length;
    var lo = 0;
    var hi = n - 1;
    var loSum = 0;
    var hiSum = 0;
    while (lo < hi) {
        if (loSum < hiSum) {
            loSum += nums[lo++];
        }
        else {
            hiSum += nums[hi--];
        }
    }
    if (loSum === hiSum && lo === hi)
        return lo;
    return -1;
}
;
function pivotIndex(nums) {
    var n = nums.length;
    if (!n)
        return -1;
    var sum = nums.reduce(function (pre, cur) { return pre + cur; });
    var tmp = 0;
    for (var i = 0; i < n; i++) {
        if ((tmp << 1) === sum - nums[i])
            return i;
        tmp += nums[i];
    }
    return -1;
}
;
console.log(pivotIndex([1, 7, 3, 6, 5, 6])); //3
console.log(pivotIndex([1, 2, 3])); //-1
