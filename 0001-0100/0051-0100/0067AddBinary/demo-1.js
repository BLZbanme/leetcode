/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let i = a.length - 1;
    let j = b.length - 1;
    let carry = 0;
    let tmp = 0;
    let result = "";

    while (i >= 0 || j >= 0) {
        if (i >= 0) {
            tmp += +a[i];
        }
        if (j >= 0) {
            tmp += +b[j];
        }
        tmp += carry;
        if (tmp >= 2) {
            carry = 1;
            tmp -= 2;
        }
        else {
            carry = 0;
        }
        i--;
        j--;
        result = tmp + result;
        tmp = 0;
    }
    if (carry) {
        result = carry + result;
    }
    return result;
};

console.log(addBinary("1010", "1011")) //"10101"

console.log(addBinary("11", "1")) //"100"
