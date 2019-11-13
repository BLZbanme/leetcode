/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let str = n.toString(2);
    let len = str.length;
    while (len < 32) {
        str = "0" + str;
        len++;
    }
    let arr = str.split("");
    let i = 0, j = 31;
    while (i < j) {
        [arr[i++], arr[j--]] = [arr[j], arr[i]];
    }
    return parseInt(arr.join(""), 2);
};

var reverseBits = function(n) {
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result <<= 1;
        result += n & 1;
        n >>>= 1;
    }
    return result >>> 0;
}

console.log(reverseBits(4294967293));

console.log(reverseBits(43261596));