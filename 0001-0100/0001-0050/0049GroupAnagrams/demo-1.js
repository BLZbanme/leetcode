"use strict";
function groupAnagrams(strs) {
    var map = new Map();
    var aCode = 'a'.charCodeAt(0);
    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var str = strs_1[_i];
        var arr = Array(26).fill(0);
        for (var i = 0; i < str.length; i++) {
            arr[str.charCodeAt(i) - aCode]++;
        }
        var strSet = '';
        for (var i = 0; i < 26; i++) {
            strSet += String.fromCharCode(i + aCode) + arr[i];
        }
        var tmp = map.get(strSet);
        if (tmp) {
            tmp.push(str);
        }
        else {
            map.set(strSet, [str]);
        }
    }
    var keys = Array.from(map.keys());
    var result = [];
    for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
        var key = keys_1[_a];
        result.push(map.get(key));
    }
    return result;
}
;
console.log(groupAnagrams(["bdddddddddd", "bbbbbbbbbbc"])); //[["bdddddddddd","bbbbbbbbbbc"]]
