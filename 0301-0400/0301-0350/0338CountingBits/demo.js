/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    let result = new Array(num + 1);
    result[0] = 0;
    for (let i = 1; i <= num; i++) {
        result[i] = result[i >> 1] + (i & 1);
    }
    return result;
};

console.log(countBits(2))
console.log(countBits(5))