"use strict";
function fourSumCount(A, B, C, D) {
    var countAB = new Map();
    A.forEach(function (u) { return B.forEach(function (v) { return countAB.set(u + v, (countAB.get(u + v) || 0) + 1); }); });
    var ans = 0;
    for (var _i = 0, C_1 = C; _i < C_1.length; _i++) {
        var u = C_1[_i];
        for (var _a = 0, D_1 = D; _a < D_1.length; _a++) {
            var v = D_1[_a];
            if (countAB.has(-u - v)) {
                ans += countAB.get(-u - v);
            }
        }
    }
    return ans;
}
;
