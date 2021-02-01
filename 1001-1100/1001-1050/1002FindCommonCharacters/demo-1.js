"use strict";
function commonChars(A) {
    var tmpArr = A.map(function (e) { return e.split(""); });
    return tmpArr.reduce(function (pre, cur) {
        return pre.filter(function (e) {
            var index = cur.indexOf(e);
            if (index == -1) {
                return false;
            }
            else {
                cur[index] = "#";
                return true;
            }
        });
    });
}
;
