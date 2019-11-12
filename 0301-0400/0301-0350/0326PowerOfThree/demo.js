/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    while (n > 1) {
        if (n % 3) {
            return false;
        } 
        n /= 3;
    }
    return n === 1;
};

let maxPow3 = Math.pow(3, Math.floor((Math.log(Number.MAX_SAFE_INTEGER) / Math.log(3))));

var isPowerOfThree = function(n) {
    return (n > 0) && (maxPow3 % n == 0);
}

console.log(isPowerOfThree(27))
console.log(isPowerOfThree(0))
console.log(isPowerOfThree(9))
console.log(isPowerOfThree(45))