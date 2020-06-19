/**
 * @param {number} n - a positive integer
 * @return {number}
 */

 //tmp左移的写法整型溢出了！错！
var hammingWeight = function(n) {
    // debugger
    let tmp = 1;
    let result = 0;
    while (n >= tmp) {
        if ((n & tmp) == tmp) {
            result++;
        }
        tmp <<= 1;
    }
    return result;
};

var hammingWeight = function(n) {
    let result = 0;
    while (n != 0) {
        if (n & 1) {
            result++;
        }
        n >>>= 1;
    }
    return result;
}

console.log(hammingWeight(00000000000000000000000000001011)) //3
console.log(hammingWeight(00000000000000000000000010000000)) // 1
console.log(hammingWeight(11111111111111111111111111111101)) // 31