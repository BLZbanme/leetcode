"use strict";
function characterReplacement1(s, k) {
    var n = s.length;
    if (n < 2)
        return n;
    var left = 0;
    var right = 0;
    var res = 0;
    var maxCount = 0;
    var arr = Array(26).fill(0);
    var ACode = 'A'.charCodeAt(0);
    while (right < n) {
        arr[s.charCodeAt(right) - ACode]++;
        maxCount = Math.max(maxCount, arr[s.charCodeAt(right) - ACode]);
        right++;
        if (right - left > maxCount + k) {
            arr[s.charCodeAt(left) - ACode]--;
            left++;
        }
        res = Math.max(res, right - left);
    }
    return res;
}
;
function characterReplacement(s, k) {
    var n = s.length;
    if (n < 2)
        return n;
    var left = 0;
    var right = 0;
    var max = 0;
    var map = Array(26).fill(0);
    var ACode = 'A'.charCodeAt(0);
    while (right < n) {
        var index = s.charCodeAt(right) - ACode;
        map[index]++;
        max = Math.max(max, map[index]);
        if (right - left + 1 > max + k) {
            map[s.charCodeAt(left) - ACode]--;
            left++;
        }
        right++;
    }
    return right - left;
}
