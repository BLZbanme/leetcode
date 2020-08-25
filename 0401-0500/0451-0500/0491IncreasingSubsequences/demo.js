var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function findSubsequences(nums) {
    var result = [];
    var helper = function (arr, index) {
        var set = new Set();
        for (var i = index + 1; i < nums.length; i++) {
            if (set.has(nums[i])) {
                continue;
            }
            set.add(nums[i]);
            if (arr[arr.length - 1] <= nums[i]) {
                arr.push(nums[i]);
                result.push(__spreadArrays(arr));
                helper(arr, i);
                arr.pop();
            }
        }
    };
    helper([], 0);
    return result;
}
;
console.log(findSubsequences([4, 6, 7, 7]));
console.log(findSubsequences([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 1, 1, 1, 1]));
