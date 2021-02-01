"use strict";
function validMountainArray(A) {
    if (!A || !A.length) {
        return false;
    }
    var inc = false;
    var dec = false;
    var flag = false;
    var tmp = A[0];
    for (var i = 1; i < A.length; i++) {
        if (tmp === A[i]) {
            return false;
        }
        if (flag) {
            if (A[i] < tmp) {
                dec = true;
            }
            else {
                return false;
            }
        }
        else {
            if (A[i] > tmp) {
                inc = true;
            }
            else {
                flag = true;
            }
        }
        tmp = A[i];
    }
    return inc && dec;
}
;
console.log(validMountainArray([2, 1])); //false
console.log(validMountainArray([3, 5, 5])); //false
console.log(validMountainArray([0, 3, 2, 1])); //true
