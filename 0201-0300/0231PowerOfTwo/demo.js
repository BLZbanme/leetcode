/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n == 1) {
        return true;
    }

    if (!n || n % 2 !== 0) {
        return false;
    }
    
    return isPowerOfTwo(n / 2);
};

var isPowerOfTwo = function(n) {
    if (!n || n < 0) {
        return false;
    }
    while (n !== 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n /= 2;
    }
    return true;
}

var isPowerOfTwo = function(n) {
    return (n > 0) && !(n & n - 1)
}

console.log(isPowerOfTwo(-8))
console.log(isPowerOfTwo(-16))
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(16))
console.log(isPowerOfTwo(218))