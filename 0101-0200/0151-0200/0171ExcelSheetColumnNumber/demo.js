/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    let sum = 0;
    if (!s) {
        return sum;
    }
    let arr = s.split("").reverse();
    let e = 1;    
    const ACode = 'A'.charCodeAt() - 1;
    for (let i = 0, len = arr.length; i < len; i++) {
        sum += (arr[i].charCodeAt() - ACode) * e;
        e *= 26;
    }
    return sum;
};

var titleToNumber = function(s) {
    let sum = 0;
    if (!s) {
        return sum;
    }
    let e = 1;    
    const ACode = 'A'.charCodeAt() - 1;
    for (let i = s.length - 1; i >= 0; i--) {
        sum += (s[i].charCodeAt() - ACode) * e;
        e *= 26;
    }
    return sum;
};

var titleToNumber = function(s) {
    let sum = 0;
    if (!s) {
        return sum;
    }
    const ACode = 'A'.charCodeAt() - 1;
    for (let i = 0, len = s.length; i < len; i++) {
        sum = sum * 26 + (s[i].charCodeAt() - ACode);
    }
    return sum;
};

console.log(titleToNumber("A"))
console.log(titleToNumber("AB"))
console.log(titleToNumber("ZY"))