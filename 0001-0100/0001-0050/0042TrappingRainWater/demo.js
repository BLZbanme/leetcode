"use strict";
function trap(height) {
    var res = 0;
    var N = height.length;
    for (var i = 1; i < N - 1; i++) {
        var maxLeft = 0;
        var maxRight = 0;
        for (var j = i; j >= 0; j--) {
            maxLeft = Math.max(maxLeft, height[j]);
        }
        for (var j = i; j < N; j++) {
            maxRight = Math.max(maxRight, height[j]);
        }
        res += Math.min(maxLeft, maxRight) - height[i];
    }
    return res;
}
;
