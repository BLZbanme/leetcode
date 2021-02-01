"use strict";
function sortArrayByParityII(A) {
    var _a;
    var N = A.length;
    var j = 1;
    for (var i = 0; i < N; i += 2) {
        if (A[i] & 1) {
            while (A[j] & 1) {
                j += 2;
            }
            _a = [A[j], A[i]], A[i] = _a[0], A[j] = _a[1];
        }
    }
    return A;
}
;
console.log(sortArrayByParityII([4, 2, 5, 7])); //[4, 5, 2, 7]
