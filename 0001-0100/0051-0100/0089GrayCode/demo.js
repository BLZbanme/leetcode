/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function(n) {
    const N = 1 << n;
    let result = [];
    for (let i = 0; i < N; i++) {
        result.push(i >> 1 ^ i);
    }
    return result;
};
console.log(grayCode(3));

var grayCode = function(n) {
    if (n == 0) {
        return [0];
    }
    let result = [0, 1];
    for (let i = 0; i < n - 1; i++) {
        let tmp = result.map(e => e + (2 << i));
        tmp.reverse();
        result = result.concat(tmp);
    }
    return result;
}

var grayCode = function(n) {
    if (n == 0) {
        return [0];
    }
    let result = [0, 1];
    for (let i = 0; i < n - 1; i++) {
        let len = result.length;
        while (len--) {
            result.push(result[len] + (2 << i));
        }
    }
    return result;
}

console.log(grayCode(4));
console.log(grayCode(3));