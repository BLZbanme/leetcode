"use strict";
function findComplement111(num) {
    return parseInt(num.toString(2).split('').map(function (e) { return e == '1' ? '0' : '1'; }).join(''), 2);
}
;
function findComplement(num) {
    var maxBitNum = 0;
    var tmpNum = num;
    while (tmpNum > 0) {
        maxBitNum++;
        tmpNum >>= 1;
    }
    return num ^ ((1 << maxBitNum) - 1);
}
;
console.log(findComplement(5)); //2
console.log(findComplement(1)); //0
