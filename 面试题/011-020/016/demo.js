/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    if (!n) {
        return 1;
    }

    let symbol = true;
    let over = false;

    if (n < 0) {
        symbol = false;
        if (n == -2147483648) {
            over = true;
            n = 2147483647
        }
        else {
            n = -n;
        }
    }

    let result = 1;

    if (over) {
        result = x;
    }
    

    while (n > 1) {
        if (n % 2) {
            result *= x;
        }

        if (n >> 1) {
            x  *= x;
        }
        n >>= 1;
    }
    result *= x;

    return symbol ? result :  (1 / result);
};

var myPow = function(x, n) {
    if (!n) {
        return 1;
    }

    let symbol = true;
    let over = false;

    if (n < 0) {
        symbol = false;
        if (n == -2147483648) {
            over = true;
            n = 2147483647
        }
        else {
            n = -n;
        }
    }

    let result = 1;

    if (over) {
        result = x;
    }
    

    while (n) {
        if (n & 1) {
            result *= x;
        }

        x  *= x;
        n >>= 1;
    }

    return symbol ? result :  (1 / result);
};


console.log(myPow(2, -2147483648)) //0.0
console.log(myPow(2, 10)) //1024
console.log(myPow(2.1, 3)) //9.261
console.log(myPow(2, -2)) //0.25