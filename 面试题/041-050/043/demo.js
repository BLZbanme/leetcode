/**
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    const N = n.toString().length;
    let sum = 1;
    let tmp = 1;
    debugger
    for (let i = 2; i < N; i++) {
        tmp = tmp * 9 + 10 ** (i - 1);
        sum += tmp;
    }

    let first = n.toString()[0];
    if (first === '1') {
        sum += (+first - 1) * tmp + (+n.toString().slice(1));
    }
    else {
        sum += (+first - 1) * tmp + (+n.toString().slice(1));
    }

    return sum;
};

var countDigitOne = function(n) {
    let digit = 1;
    let res = 0;
    let high = Math.floor(n / 10);
    let cur = n % 10;
    let low = 0;

    while (high || cur) {
        if (!cur) {
            res += high * digit;
        }
        else if (cur === 1) {
            res += high * digit + low +1;
        }
        else {
            res += (high + 1) * digit;
        }

        low += cur * digit;
        cur = high % 10;
        high = Math.floor(high / 10);
        digit *= 10;
    }

    return res;
}

console.log(countDigitOne(12)); // 5
console.log(countDigitOne(13)); // 6