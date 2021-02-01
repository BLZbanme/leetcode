"use strict";
function largeGroupPositions(s) {
    var result = [];
    var N = s.length;
    var i = 0;
    while (i < N) {
        var j = 1;
        while (i + j < N && s[i + j] === s[i]) {
            j++;
        }
        if (j >= 3) {
            result.push([i, i + j - 1]);
        }
        i += j;
    }
    return result;
}
;
console.log(largeGroupPositions('abbxxxxzzy')); //[[3, 6]]
console.log(largeGroupPositions('abc')); //[]
console.log(largeGroupPositions('abcdddeeeeaabbbcd')); //[[3,5],[6,9],[12,14]]
console.log(largeGroupPositions('aba')); //[]
