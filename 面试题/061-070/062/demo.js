/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var lastRemaining = function(n, m) {
    debugger
    return f(n, m);
};

function f(n, m) {
    if (n == 1) {
        return 0;
    }
    let x = f(n - 1, m);
    return (m + x) % n;
}

var lastRemaining = function(n, m) {
    if (n == 1) {
        return 0;
    }

    return (m + lastRemaining(n - 1, m)) % n;
}

var lastRemaining = function(n, m) {
    let last = 0;
    for (let i = 2; i <= n; i++) {
        last = (last + m) % i;
    }
    return last;
}

console.log(lastRemaining(10, 17));