"use strict";
function reorganizeString(S) {
    var N = S.length;
    var aCode = 'a'.charCodeAt(0);
    var arr = Array(26).fill(0);
    for (var i = 0; i < N; i++) {
        arr[S.charCodeAt(i) - aCode]++;
    }
    var max = Math.max.apply(Math, arr);
    if (max > ((N + 1) >> 1))
        return '';
    var reorganizeArray = Array(N);
    var evenIndex = 0;
    var oddIndex = 1;
    var half = N >> 1;
    for (var i = 0; i < 26; i++) {
        var c_1 = String.fromCharCode(aCode + i);
        while (arr[i] > 0 && arr[i] <= half && oddIndex < N) {
            reorganizeArray[oddIndex] = c_1;
            arr[i]--;
            oddIndex += 2;
        }
        while (arr[i] > 0) {
            reorganizeArray[evenIndex] = c_1;
            arr[i]--;
            evenIndex += 2;
        }
    }
    return reorganizeArray.join('');
}
;
