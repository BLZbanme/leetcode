function countRangeSum1(nums, lower, upper) {
    var N = nums.length;
    var count = 0;
    var dp = Array(N);
    for (var i = 0; i < N; i++) {
        dp[i] = Array(N);
        dp[i][i] = nums[i];
        if (nums[i] >= lower && nums[i] <= upper) {
            count++;
        }
    }
    for (var i = 1; i < N; i++) {
        for (var j = 0; j + i < N; j++) {
            dp[j][j + i] = dp[j][j + i - 1] + nums[i];
            if (dp[j][j + i] >= lower && dp[j][j + i] <= upper) {
                count++;
            }
        }
    }
    return count;
}
;
var countRangeSunRecursive = function (sum, lower, upper, left, right) {
    if (left === right) {
        return 0;
    }
    var mid = left + ((right - left) >> 1);
    var n1 = countRangeSunRecursive(sum, lower, upper, left, mid);
    var n2 = countRangeSunRecursive(sum, lower, upper, mid + 1, right);
    var ret = n1 + n2;
    var i = left;
    var l = mid + 1;
    var r = mid + 1;
    while (i <= mid) {
        while (l <= right && sum[l] - sum[i] < lower)
            l++;
        while (r <= right && sum[r] - sum[i] <= upper)
            r++;
        ret += r - l;
        i++;
    }
    var sorted = Array(right - left + 1);
    var p1 = left;
    var p2 = mid + 1;
    var p = 0;
    while (p1 <= mid || p2 <= right) {
        if (p1 > mid) {
            sorted[p++] = sum[p2++];
        }
        else if (p2 > right) {
            sorted[p++] = sum[p1++];
        }
        else {
            sorted[p++] = sum[p2++];
        }
    }
    for (var i_1 = 0; i_1 < sorted.length; i_1++) {
        sum[left + i_1] = sorted[i_1];
    }
    return ret;
};
function countRangeSum(nums, lower, upper) {
    var s = 0;
    var sum = [0];
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var v = nums_1[_i];
        s += v;
        sum.push(s);
    }
    return countRangeSunRecursive(sum, lower, upper, 0, sum.length - 1);
}
console.log(countRangeSum([-2, 5, -1], -2, 2)); // 3
