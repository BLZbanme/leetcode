function maxNumber(nums1, nums2, k) {
    var m = nums1.length;
    var n = nums2.length;
    var maxSubsequence = Array(k).fill(0);
    var start = Math.max(0, k - n);
    var end = Math.min(k, m);
    for (var i = start; i <= end; i++) {
        var sub1 = getMaxSubsequence(nums1, i);
        var sub2 = getMaxSubsequence(nums2, k - i);
        var curMaxSubsequence = merge(sub1, sub2);
        if (compare(curMaxSubsequence, 0, maxSubsequence, 0)) {
            maxSubsequence = curMaxSubsequence;
        }
    }
    return maxSubsequence;
}
;
var getMaxSubsequence = function (nums, k) {
    var len = nums.length;
    var stack = [];
    var remain = len - k;
    for (var i = 0; i < len; i++) {
        var num = nums[i];
        while (stack.length && stack[stack.length - 1] < num && remain > 0) {
            stack.pop();
            remain--;
        }
        if (stack.length < k) {
            stack.push(num);
        }
        else {
            remain--;
        }
    }
    return stack;
};
var merge = function (arr1, arr2) {
    var result = [];
    var m = arr1.length;
    var n = arr2.length;
    var i = 0;
    var j = 0;
    while (i < m || j < n) {
        if (!compare(arr1, i, arr2, j)) {
            result.push(arr2[j++]);
        }
        else {
            result.push(arr1[i++]);
        }
    }
    return result;
};
var compare = function (arr1, index1, arr2, index2) {
    var m = arr1.length;
    var n = arr2.length;
    var i = index1;
    var j = index2;
    while (i < m || j < n) {
        var num1 = i < m ? arr1[i] : -1;
        var num2 = j < n ? arr2[j] : -1;
        if (num1 < num2) {
            return false;
        }
        else if (num1 > num2) {
            return true;
        }
        i++;
        j++;
    }
    return true;
};
console.log(maxNumber([2, 5, 6, 4, 4, 0], [7, 3, 8, 0, 6, 5, 7, 6, 2], 15));
console.log(maxNumber([3, 4, 6, 5], [9, 1, 2, 5, 8, 3], 5));
