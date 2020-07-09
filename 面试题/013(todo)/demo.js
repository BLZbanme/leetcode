/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
    let count = 0;
    for (let i = 0; i < m; i++) {
        if (i + n <= k + 1) {
            count += n;
        }
        else {
            count += Math.max(k - i + 1, 0);
        }
    }
    return count;
};

console.log(movingCount(11, 8, 16)) // 88

console.log(movingCount(2, 3, 1)) // 3
console.log(movingCount(3, 1, 0)) // 1