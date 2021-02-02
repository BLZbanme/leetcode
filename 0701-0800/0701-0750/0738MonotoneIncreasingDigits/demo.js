"use strict";
function monotoneIncreasingDigits(N) {
    var arr = N.toString().split('').map(function (e) { return +e; });
    var numMap = Array(10).fill(-1);
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        numMap[arr[i]] == -1 && (numMap[arr[i]] = i);
        if (arr[i] > arr[i + 1]) {
            var j = numMap[arr[i]];
            arr[j]--;
            while (j + 1 < n) {
                arr[j + 1] = 9;
                j++;
            }
            break;
        }
    }
    return +arr.join('');
}
;
console.log(monotoneIncreasingDigits(10)); // 9
console.log(monotoneIncreasingDigits(1234)); // 1234
console.log(monotoneIncreasingDigits(332)); // 299
