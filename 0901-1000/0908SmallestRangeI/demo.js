/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
    let max = Math.max(...A), min = Math.min(...A);
    return max - min - 2 * K > 0 ?  max - min - 2 * K : 0;
};


smallestRangeI([1], 0);
smallestRangeI([1, 3, 6], 3)