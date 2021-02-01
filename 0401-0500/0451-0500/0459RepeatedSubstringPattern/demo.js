"use strict";
function repeatedSubstringPattern22(s) {
    for (var i = s.length >> 1; i > 0; i--) {
        var tmp = s.slice(0, i);
        var reg = new RegExp(tmp, 'g');
        if (s.replace(reg, "") === "") {
            return true;
        }
    }
    return false;
}
;
function repeatedSubstringPattern1(s) {
    var N = s.length;
    for (var i = 0; i * 2 <= N; i++) {
        if (N % i == 0) {
            var match = true;
            for (var j = i; j < N; j++) {
                if (s[j] != s[j - i]) {
                    match = false;
                    break;
                }
            }
            if (match) {
                return true;
            }
        }
    }
    return false;
}
function repeatedSubstringPattern(s) {
    return (s + s).indexOf(s, 1) != s.length;
}
