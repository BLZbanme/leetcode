"use strict";
function findTheDifference1(s, t) {
    var map = Array(26).fill(0);
    var aCode = 'a'.charCodeAt(0);
    var N = s.length;
    for (var i = 0; i < N; i++) {
        map[s.charCodeAt(i) - aCode]--;
        map[t.charCodeAt(i) - aCode]++;
    }
    map[t.charCodeAt(N) - aCode]++;
    for (var i = 0; i < 26; i++) {
        if (map[i]) {
            return String.fromCharCode(i + aCode);
        }
    }
    return '';
}
;
function findTheDifference(s, t) {
    var ret = 0;
    for (var _i = 0, s_1 = s; _i < s_1.length; _i++) {
        var ch = s_1[_i];
        ret ^= ch.charCodeAt(0);
    }
    for (var _a = 0, t_1 = t; _a < t_1.length; _a++) {
        var ch = t_1[_a];
        ret ^= ch.charCodeAt(0);
    }
    return String.fromCharCode(ret);
}
;
console.log(findTheDifference('abcd', 'abcde')); //e
