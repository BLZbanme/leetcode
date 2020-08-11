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
    let str = '';
    while (i >= 0 || j >= 0 || carry) {
        let s1 = i >= 0 ? +num1[i--] : 0;
        let s2 = j >= 0 ? +num2[j--] : 0;
        let tmp = s1 + s2 + carry;
        carry = Math.floor(tmp / 10);
        tmp = tmp % 10;
        str = tmp + str;
    }

    return str;
};

console.log(addStrings('123', '456')) //579
console.log(addStrings('1', '999')) //1000
console.log(addStrings('999', '1')) //1000
console.log(addStrings('999', '0')) //999