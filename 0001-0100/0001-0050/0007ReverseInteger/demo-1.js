"use strict";
function reverse1(x) {
    if (!x)
        return 0;
    var max = Math.pow(2, 31) - 1;
    var flag = x >= 0;
    flag || (x = -x);
    var cur = 0;
    while (x > 0) {
        var tmp = x % 10;
        x = Math.floor(x / 10);
        if (cur > (max - tmp) / 10) {
            return 0;
        }
        else {
            cur = cur * 10 + tmp;
        }
    }
    return flag ? cur : -cur;
}
;
function reverse(x) {
    var max = Math.floor((Math.pow(2, 31) - 1) / 10);
    var min = Math.ceil((-(Math.pow(2, 31))) / 10);
    var res = 0;
    while (x != 0) {
        var tmp = x % 10;
        x = x >= 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
        if (res > max || (res === max && tmp > 7))
            return 0;
        if (res < min || (res === min && tmp < -8))
            return 0;
        res = res * 10 + tmp;
    }
    return res;
}
console.log(reverse(-123));
console.log(reverse(-2147483648));
