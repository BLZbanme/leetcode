"use strict";
function partitionLabels(S) {
    var result = [];
    var arr = Array(26).fill(-1);
    var aCode = 'a'.charCodeAt(0);
    var strArr = S.split("");
    strArr.forEach(function (e, index) {
        arr[e.charCodeAt(0) - aCode] = index;
    });
    var i = 0;
    while (i < S.length) {
        var start = i;
        var tmp = arr[S.charCodeAt(i) - aCode];
        while (i < tmp) {
            if (arr[S.charCodeAt(i) - aCode] > tmp) {
                tmp = arr[S.charCodeAt(i) - aCode];
            }
            i++;
        }
        i++;
        result.push(i - start);
    }
    return result;
}
console.log(partitionLabels("ababcbacadefegdehijhklij")); //[9, 7, 8]
console.log(partitionLabels("abc")); //[1, 1, 1]
