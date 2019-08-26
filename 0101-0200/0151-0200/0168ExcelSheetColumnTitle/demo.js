/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
    let codeA = 'A'.charCodeAt() - 1;
    let result = '';
    while (n) {
        let tmp = n % 26;
        result = String.fromCharCode((!tmp ? 26 : tmp) + codeA)  + result;
        n = n === 26 ? 0 : Math.floor(n / 26);
    }
    return result;
};

var convertToTitle = function(n) {
    let codeA = 'A'.charCodeAt();
    let result = '';
    while (n) {
        result = String.fromCharCode(--n % 26 + codeA)  + result;
        n = Math.floor(n / 26);
    }
    return result;
};


console.log(convertToTitle(701))

console.log(convertToTitle(1))
console.log(convertToTitle(28))
console.log(convertToTitle(701))