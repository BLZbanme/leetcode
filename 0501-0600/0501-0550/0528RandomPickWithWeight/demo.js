"use strict";
var Solution1 = /** @class */ (function () {
    function Solution1(w) {
        this.indexNo = w.length;
        var sum = w.reduce(function (pre, cur) { return pre + cur; });
        var tmp = 0;
        this.ratio = w.map(function (e) {
            tmp += e;
            return tmp / sum;
        });
    }
    Solution1.prototype.pickIndex = function () {
        var random = Math.random();
        for (var i = 0; i < this.indexNo; i++) {
            if (random < this.ratio[i]) {
                return i;
            }
        }
        return 0;
    };
    return Solution1;
}());
var Solution = /** @class */ (function () {
    function Solution(w) {
        var tmp = 0;
        this.preSum = w.map(function (e) {
            tmp += e;
            return tmp;
        });
        this.sum = tmp;
    }
    Solution.prototype.pickIndex = function () {
        var target = Math.floor(this.sum * Math.random());
        return binarySearch(this.preSum, target);
    };
    return Solution;
}());
function binarySearch(arr, target) {
    var lo = 0;
    var hi = arr.length;
    while (lo < hi) {
        var mid = lo + ((hi - lo) >> 1);
        if (arr[mid] > target) {
            hi = mid;
        }
        else if (arr[mid] <= target) {
            lo = mid + 1;
        }
    }
    return lo;
}
/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */ 
