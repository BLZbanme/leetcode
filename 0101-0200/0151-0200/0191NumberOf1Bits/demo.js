/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let ones = 0;
    while (n != 0) {
        ones = ones + (n & 1);
        n >>>= 1;
    }
    return ones;
};

var hammingWeight = function(n) {
    let ones = 0;
    while (n != 0) {
        n &= n - 1;
        ones++;
    }
    return ones;
}

console.log(hammingWeight(00000000000000000000000000001011))
console.log(hammingWeight(00000000000000000000000010000000)) // 1
console.log(hammingWeight(11111111111111111111111111111101)) // 31