"use strict";
function longestOnes1(A, K) {
    var n = A.length;
    if (n < 2)
        return n;
    var oneCount = 0;
    var oneMax = 0;
    var left = 0;
    var right = 0;
    while (right < n) {
        A[right] && oneCount++;
        oneMax = Math.max(oneMax, oneCount);
        if (right - left + 1 > oneCount + K) {
            A[left] && oneCount--;
            left++;
        }
        right++;
    }
    return right - left;
}
;
function longestOnes(A, K) {
    var n = A.length;
    if (n < 2)
        return n;
    var zeroCount = 0;
    var left = 0;
    var right = 0;
    var res = 0;
    while (right < n) {
        A[right] || zeroCount++;
        if (zeroCount > K) {
            A[left] || zeroCount--;
            left++;
        }
        res = Math.max(res, right - left + 1);
        right++;
    }
    return res;
}
;
