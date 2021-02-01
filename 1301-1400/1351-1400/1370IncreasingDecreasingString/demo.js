"use strict";
function sortString(s) {
    var arr = Array(26).fill(0);
    var aCode = 'a'.charCodeAt(0);
    var N = s.length;
    for (var i_1 = 0; i_1 < N; i_1++) {
        arr[s.charCodeAt(i_1) - aCode]++;
    }
    var i = 0;
    var result = '';
    while (i < N) {
        for (var j = 0; j < 26; j++) {
            if (arr[j]) {
                arr[j]--;
                result += String.fromCharCode(j + aCode);
                i++;
            }
        }
        for (var j = 25; j >= 0; j--) {
            if (arr[j]) {
                arr[j]--;
                result += String.fromCharCode(j + aCode);
                i++;
            }
        }
    }
    return result;
}
;
