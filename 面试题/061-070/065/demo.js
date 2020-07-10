/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var add = function(a, b) {

    let sum;
    let carry;
    do {
        sum = a ^ b;
        carry = (a & b) << 1;
        a = sum;
        b = carry;
    }
    while (b);

    return a;
};

console.log(add(1, 1));