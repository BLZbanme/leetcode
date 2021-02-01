"use strict";
function maximumGap(nums) {
    var N = nums.length;
    if (N < 2) {
        return 0;
    }
    var minVal = Math.min.apply(Math, nums);
    var maxVal = Math.max.apply(Math, nums);
    var d = Math.max(1, Math.floor(maxVal - minVal) / (N - 1));
    var bucketSize = Math.floor((maxVal - minVal) / d) + 1;
    var bucket = Array(bucketSize).fill(0).map(function (e) { return Array(2).fill(-1); });
    for (var i = 0; i < N; i++) {
        var idx = Math.floor((nums[i] - minVal) / d);
        if (bucket[idx][0] == -1) {
            bucket[idx][0] = bucket[idx][1] = nums[i];
        }
        else {
            bucket[idx][0] = Math.min(bucket[idx][0], nums[i]);
            bucket[idx][1] = Math.max(bucket[idx][1], nums[i]);
        }
    }
    var ret = 0;
    var prev = -1;
    for (var i = 0; i < bucketSize; i++) {
        if (bucket[i][0] == -1) {
            continue;
        }
        if (prev != -1) {
            ret = Math.max(ret, bucket[i][0] - bucket[prev][1]);
        }
        prev = i;
    }
    return ret;
}
;
