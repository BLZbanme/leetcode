"use strict";
function eraseOverlapIntervals1(intervals) {
    if (!intervals.length) {
        return 0;
    }
    intervals.sort(function (a, b) { return a[0] - b[0]; });
    var N = intervals.length;
    var f = Array(N).fill(1);
    for (var i = 1; i < N; i++) {
        for (var j = 0; j < i; j++) {
            if (intervals[j][1] <= intervals[i][0]) {
                f[i] = Math.max(f[i], f[j] + 1);
            }
        }
    }
    return N - Math.max.apply(Math, f);
}
;
function eraseOverlapIntervals(intervals) {
    if (!intervals.length)
        return 0;
    intervals.sort(function (a, b) { return a[1] - b[1]; });
    var N = intervals.length;
    var right = intervals[0][1];
    var ans = 1;
    for (var i = 1; i < N; i++) {
        if (intervals[i][0] >= right) {
            ++ans;
            right = intervals[i][1];
        }
    }
    return N - ans;
}
