"use strict";
function wiggleMaxLength1(nums) {
    if (!nums)
        return 0;
    var N = nums.length;
    if (N < 2)
        return N;
    var up = Array(N).fill(0);
    var down = Array(N).fill(0);
    up[0] = down[0] = 1;
    for (var i = 1; i < N; i++) {
        if (nums[i] > nums[i - 1]) {
            up[i] = Math.max(up[i - 1], down[i - 1] + 1);
            down[i] = down[i - 1];
        }
        else if (nums[i] < nums[i - 1]) {
            down[i] = Math.max(up[i - 1] + 1, down[i - 1]);
            up[i] = up[i - 1];
        }
        else {
            up[i] = up[i - 1];
            down[i] = down[i - 1];
        }
    }
    return Math.max(up[N - 1], down[N - 1]);
}
;
function wiggleMaxLength(nums) {
    if (!nums)
        return 0;
    var N = nums.length;
    if (N < 2)
        return N;
    var up = 1;
    var down = 1;
    for (var i = 1; i < N; i++) {
        if (nums[i] < nums[i - 1]) {
            down = up + 1;
        }
        else if (nums[i] > nums[i - 1]) {
            up = down + 1;
        }
    }
    return Math.max(up, down);
}
