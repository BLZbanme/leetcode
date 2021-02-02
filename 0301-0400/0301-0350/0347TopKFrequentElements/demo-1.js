"use strict";
function topKFrequent(nums, k) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }
    var arr = [];
    for (var _i = 0, map_1 = map; _i < map_1.length; _i++) {
        var _a = map_1[_i], key = _a[0], val = _a[1];
        arr.push({
            key: key,
            val: val
        });
    }
    var lo = 0;
    var hi = arr.length - 1;
    while (lo < hi) {
        var mid = partition(arr, lo, hi);
        if (mid === k - 1) {
            return arr.slice(0, k).map(function (e) { return e.key; });
        }
        else if (mid < k - 1) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return [];
}
;
function partition(arr, lo, hi) {
    var _a, _b;
    var i = lo;
    var j = hi + 1;
    while (i <= j) {
        while (arr[++i].val > arr[lo].val && i < j)
            ;
        while (arr[--j].val < arr[lo].val && i < j)
            ;
        if (i >= j) {
            break;
        }
        _a = [arr[j], arr[i]], arr[i] = _a[0], arr[j] = _a[1];
    }
    _b = [arr[i], arr[lo]], arr[lo] = _b[0], arr[i] = _b[1];
    return i;
}
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
console.log(topKFrequent([1], 1));
