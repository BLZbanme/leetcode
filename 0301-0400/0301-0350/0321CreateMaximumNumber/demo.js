"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function maxNumber(nums1, nums2, k) {
    var M = nums1.length;
    var N = nums2.length;
    var maxSubsequence = Array(k).fill(0);
    var start = Math.max(0, k - N);
    var end = Math.min(k, M);
    for (var i = start; i <= end; i++) {
        var sub1 = createMaxSubsequence(nums1, i);
        var sub2 = createMaxSubsequence(nums2, k - i);
        var curMaxSubSequence = merge(sub1, sub2);
        if (compare(curMaxSubSequence, 0, maxSubsequence, 0) > 0) {
            maxSubsequence.splice.apply(maxSubsequence, __spreadArrays([0, k], curMaxSubSequence));
        }
    }
    return maxSubsequence;
}
;
var createMaxSubsequence = function (nums, k) {
    var length = nums.length;
    var stack = Array(k).fill(0);
    var top = -1;
    var remain = length - k;
    for (var i = 0; i < length; i++) {
        var num = nums[i];
        while (top >= 0 && stack[top] < num && remain > 0) {
            top--;
            remain--;
        }
        if (top < k - 1) {
            stack[++top] = num;
        }
        else {
            remain--;
        }
    }
    return stack;
};
var merge = function (sub1, sub2) {
    var x = sub1.length;
    var y = sub2.length;
    if (!x) {
        return sub2;
    }
    if (!y) {
        return sub1;
    }
    var mergeLength = x + y;
    var merged = Array(mergeLength).fill(0);
    var index1 = 0;
    var index2 = 0;
    for (var i = 0; i < mergeLength; i++) {
        if (compare(sub1, index1, sub2, index2) > 0) {
            merged[i] = sub1[index1++];
        }
        else {
            merged[i] = sub2[index2++];
        }
    }
    return merged;
};
var compare = function (sub1, index1, sub2, index2) {
    var x = sub1.length;
    var y = sub2.length;
    while (index1 < x && index2 < y) {
        var diff = sub1[index1] - sub2[index2];
        if (diff) {
            return diff;
        }
        index1++;
        index2++;
    }
    return (x - index1) - (y - index2);
};
