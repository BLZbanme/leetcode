"use strict";
function isAnagram(s, t) {
    if (s.length != t.length) {
        return false;
    }
    var N = s.length;
    var arr = Array(26).fill(0);
    var aCode = 'a'.charCodeAt(0);
    for (var i = 0; i < N; i++) {
        arr[s.charCodeAt(i) - aCode]++;
        arr[t.charCodeAt(i) - aCode]--;
    }
    return arr.every(function (e) { return !e; });
}
;
