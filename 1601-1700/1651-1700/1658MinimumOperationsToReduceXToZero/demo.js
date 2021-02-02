function minOperations1(nums, x) {
    var n = nums.length;
    var lo = -1;
    var hi = n;
    var depth = 0;
    var queue = [[lo, hi, 0]];
    while (queue.length && depth <= n) {
        var len = queue.length;
        for (var i = 0; i < len; i++) {
            var _a = queue.shift(), j = _a[0], k = _a[1], sum = _a[2];
            if (sum === x)
                return depth;
            if (j >= k) {
                break;
            }
            if (nums[j + 1] + sum <= x) {
                queue.push([j + 1, k, sum + nums[j + 1]]);
            }
            if (nums[k - 1] + sum <= x) {
                queue.push([j, k - 1, sum + nums[k - 1]]);
            }
        }
        depth++;
    }
    return -1;
}
;
function minOperations(nums, x) {
    var sum = nums.reduce(function (pre, cur) { return pre + cur; });
    var target = sum - x;
    var n = nums.length;
    var left = 0;
    var win = -1;
    var cur = 0;
    for (var right = 0; right < n; right++) {
        cur += nums[right];
        while (cur > target) {
            cur -= nums[left];
            left++;
        }
        if (cur === target) {
            win = Math.max(win, right - left + 1);
        }
    }
    return win === -1 ? -1 : n - win;
}
console.log(minOperations([1, 1], 3)); //-1
console.log(minOperations([1, 1, 1, 1, 1], 5)); //5
console.log(minOperations([1, 1, 4, 2, 3], 5)); //2
console.log(minOperations([5, 6, 7, 8, 9], 4)); //-1
console.log(minOperations([3, 2, 20, 1, 1, 3], 10)); //5
