"use strict";
function canConstruct1(ransomNote, magazine) {
    var aCode = 'a'.charCodeAt(0);
    var arr = Array(26).fill(0);
    for (var i = 0; i < magazine.length; i++) {
        arr[magazine.charCodeAt(i) - aCode]++;
    }
    for (var i = 0; i < ransomNote.length; i++) {
        arr[ransomNote.charCodeAt(i) - aCode]--;
    }
    return arr.every(function (e) { return e >= 0; });
}
;
function canConstruct(ransomNote, magazine) {
    var aCode = 'a'.charCodeAt(0);
    var arr = Array(26).fill(0);
    for (var i = 0; i < magazine.length; i++) {
        arr[magazine.charCodeAt(i) - aCode]++;
    }
    for (var i = 0; i < ransomNote.length; i++) {
        if (arr[ransomNote.charCodeAt(i) - aCode] > 0) {
            arr[ransomNote.charCodeAt(i) - aCode]--;
        }
        else {
            return false;
        }
    }
    return true;
}
;
