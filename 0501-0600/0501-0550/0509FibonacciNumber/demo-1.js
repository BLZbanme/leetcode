"use strict";
function fib(n) {
    if (n < 2)
        return n;
    var p = 0;
    var q = 1;
    for (var i = 2; i <= n; i++) {
        var tmp = p + q;
        p = q;
        q = tmp;
    }
    return q;
}
;
