/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    let result = m;
    for (let i = m + 1; i <= n; i++) {
        result &= i;
    }
    return result;
};

var rangeBitwiseAnd = function(m, n) {
    if (!m) {
        return 0;
    }
    let moveFactor = 1;
    while (m !== n) {
        m >>= 1;
        n >>= 1;
        moveFactor <<= 1;
    }
    return m * moveFactor;
}

console.log(rangeBitwiseAnd(5, 8))
console.log(rangeBitwiseAnd(5, 7))
console.log(rangeBitwiseAnd(0, 1))