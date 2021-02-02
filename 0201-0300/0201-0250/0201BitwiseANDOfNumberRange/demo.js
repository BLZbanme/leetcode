"use strict";
var rangeBitwiseAnd1 = function (m, n) {
    var shift = 0;
    while (m < n) {
        m >>= 1;
        n >>= 1;
        shift++;
    }
    return m << shift;
};
var rangeBitwiseAnd = function (m, n) {
    while (m < n) {
        n = n & (n - 1);
    }
    return n;
};
