/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function(n) {
    let tmp = Math.floor(n / 5);
    return n == 0 ? 0 : tmp + trailingZeroes(tmp);
};

console.log(trailingZeroes(30))


console.log(trailingZeroes(3))

console.log(trailingZeroes(5))
