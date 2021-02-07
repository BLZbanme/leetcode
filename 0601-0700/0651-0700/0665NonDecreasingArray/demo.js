function checkPossibility1(nums) {
    var n = nums.length;
    var dp = Array(n + 1);
    var len = 1;
    dp[1] = nums[0];
    for (var i = 1; i < n; i++) {
        if (nums[i] >= dp[len]) {
            dp[++len] = nums[i];
        }
        else {
            var lo = 1;
            var hi = len;
            while (lo < hi) {
                var mid = lo + ((hi - lo) >> 1);
                if (dp[mid] <= nums[i]) {
                    lo = mid + 1;
                }
                else {
                    hi = mid;
                }
            }
            dp[lo] = nums[i];
        }
    }
    return n - len <= 1;
}
;
function checkPossibility3(nums) {
    var n = nums.length;
    for (var i = 0; i < n - 1; i++) {
        var x = nums[i];
        var y = nums[i + 1];
        if (x > y) {
            nums[i] = y;
            if (isSorted(nums)) {
                return true;
            }
            nums[i] = x;
            nums[i + 1] = x;
            return isSorted(nums);
        }
    }
    return true;
}
var isSorted = function (nums) {
    var n = nums.length;
    for (var i = 1; i < n; i++) {
        if (nums[i - 1] > nums[i]) {
            return false;
        }
    }
    return true;
};
function checkPossibility2(nums) {
    var n = nums.length;
    var cnt = 0;
    for (var i = 0; i < n - 1; i++) {
        var x = nums[i];
        var y = nums[i + 1];
        if (x > y) {
            cnt++;
            if (cnt > 1) {
                return false;
            }
            if (i > 0 && y < nums[i - 1]) {
                nums[i + 1] = x;
            }
        }
    }
    return true;
}
function checkPossibility(nums) {
    var n = nums.length;
    var count = 0;
    for (var i = 0; i < n - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            count++;
            if (count > 1)
                return false;
            if (i > 0 && nums[i + 1] < nums[i - 1]) {
                nums[i + 1] = nums[i];
            }
            else {
                nums[i] = nums[i + 1];
            }
        }
    }
    return true;
}
console.log(checkPossibility([1, 1, 1])); //true;
console.log(checkPossibility([4, 2, 3])); //true;
console.log(checkPossibility([4, 2, 1])); //false;
console.log(checkPossibility([3, 4, 2, 3])); //false;
