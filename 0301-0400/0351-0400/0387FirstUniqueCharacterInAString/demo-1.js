"use strict";
function firstUniqChar(s) {
    var arr = Array(26).fill(0);
    var aCode = 'a'.charCodeAt(0);
    for (var i = 0; i < s.length; i++) {
        arr[s.charCodeAt(i) - aCode]++;
    }
    var set = new Set();
    for (var i = 0; i < 26; i++) {
        if (arr[i] === 1) {
            set.add(String.fromCharCode(i + aCode));
        }
    }
    for (var i = 0; i < s.length; i++) {
        if (set.has(s[i]))
            return i;
    }
    return -1;
}
;
