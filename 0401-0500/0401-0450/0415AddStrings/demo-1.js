/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const N1 = num1.length;
    const N2 = num2.length;
    let i = N1 - 1;
    let j = N2 - 1;
    let carry = 0;
    let result = "";
    while (i >= 0 && j >= 0) {
        let tmp = +num1[i--] + +num2[j--] + carry;
        result = (tmp % 10) + result;
        carry = Math.floor(tmp / 10);
    }

    while (i >= 0) {
        let tmp = +num1[i--] + carry;
        result = (tmp % 10) + result;
        carry = Math.floor(tmp / 10);
    }

    while (j >= 0) {
        let tmp = +num2[j--] + carry;
        result = (tmp % 10) + result;
        carry = Math.floor(tmp / 10);
    }

    return carry > 0 ? carry + result : result;
};

var addStrings = function(num1, num2) {
    const N1 = num1.length;
    const N2 = num2.length;
    let i = N1 - 1;
    let j = N2 - 1;
    let carry = 0;
    let result = "";
    while (i >= 0 || j >= 0) {
        let a = i >= 0 ? +num1[i] : 0;
        let b = j >= 0 ? +num2[j] : 0;
        let tmp = a + b + carry;
        result = (tmp % 10) + result;
        carry = Math.floor(tmp / 10);
        i--;
        j--;
    }

    return carry > 0 ? carry + result : result;
};

console.log(addStrings('999', '1')); //"1000"
console.log(addStrings('100', '900')); //"1000"
console.log(addStrings('123', '4'));