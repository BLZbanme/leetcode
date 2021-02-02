"use strict";
function shortestPalindrome11(s) {
    if (!s) {
        return '';
    }
    var N = s.length;
    var mid = (N - 1) >> 1;
    var thePoint = 0;
    var isOdd = true;
    for (var i = mid; i >= 0; i--) {
        var j = 0;
        for (; j <= i; j++) {
            if (s[i - j] !== s[i + j + 1]) {
                break;
            }
        }
        if (j === i + 1) {
            thePoint = i;
            isOdd = false;
            break;
        }
        j = 1;
        for (; j <= i; j++) {
            if (s[i - j] !== s[i + j]) {
                break;
            }
        }
        if (j === i + 1) {
            thePoint = i;
            break;
        }
    }
    var res = s;
    for (var i = thePoint * 2 + (isOdd ? 1 : 2); i < s.length; i++) {
        res = s[i] + res;
    }
    return res;
}
;
function shortestPalindrome(s) {
    var N = s.length;
    for (var i = N; i >= 0; i--) {
        var prefix = s.substring(0, i);
        if (isPalindrome(prefix)) {
            var add = s.substring(i).split('').reverse().join('');
            return add + s;
        }
    }
    return "";
}
function isPalindrome(s) {
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}
console.log(shortestPalindrome("aabba")); //abbaabba
console.log(shortestPalindrome("aacecaaa")); //aaacecaaa
console.log(shortestPalindrome("abcd")); //dcbabcd
