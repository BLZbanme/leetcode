/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }

    let p = 0;
    let q = 1;
    while (n >= 2) {
        let sum = p + q;
        p = q;
        q = sum;
        n--;
    }
    return q % 1000000007;
};

var fib = function(n) {
    if (n == 0) {
        return 0;
    }
    if (n == 1) {
        return 1;
    }

    let p = 0;
    let q = 1;
    while (n >= 2) {
        let sum = (p + q)  % 1000000007;
        p = q;
        q = sum;
        n--;
    }
    return q;
};


console.log(fib(81)); // 107920472
console.log(fib(45)); // 134903163
console.log(fib(2));
console.log(fib(5));
