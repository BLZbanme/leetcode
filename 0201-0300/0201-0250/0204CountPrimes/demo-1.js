"use strict";
function countPrimes1(n) {
    var arr = Array(n).fill(false);
    arr[0] = true;
    arr[1] = true;
    var count = 0;
    for (var i = 2; i < n; i++) {
        if (!arr[i]) {
            count++;
            for (var j = 1; i * j < n; j++) {
                arr[i * j] = true;
            }
        }
    }
    return count;
}
;
function countPrimes(n) {
    var arr = Array(n).fill(false);
    arr[0] = true;
    arr[1] = true;
    var count = 0;
    for (var i = 2; i < n; i++) {
        if (!arr[i]) {
            count++;
            for (var j = i * i; j < n; j += i) {
                arr[j] = true;
            }
        }
    }
    return count;
}
;
console.log(countPrimes(2)); // 0
console.log(countPrimes(10)); // 4
console.log(countPrimes(0)); // 0
console.log(countPrimes(1)); // 0
