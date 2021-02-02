"use strict";
function reverseString(s) {
    var _a;
    var lo = 0, hi = s.length - 1;
    while (lo < hi) {
        _a = [s[hi], s[lo]], s[lo++] = _a[0], s[hi--] = _a[1];
    }
    return;
}
;
