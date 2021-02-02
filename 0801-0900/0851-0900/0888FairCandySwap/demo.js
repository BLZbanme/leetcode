"use strict";
function fairCandySwap(A, B) {
    var set = new Set(B);
    var aSum = A.reduce(function (pre, cur) { return pre + cur; });
    var bSum = B.reduce(function (pre, cur) { return pre + cur; });
    var diff = ((aSum + bSum) >> 1) - aSum;
    for (var i = 0; i < A.length; i++) {
        if (set.has(A[i] + diff)) {
            return [A[i], A[i] + diff];
        }
    }
    return [];
}
;
