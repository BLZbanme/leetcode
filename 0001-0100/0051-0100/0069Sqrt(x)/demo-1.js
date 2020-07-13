/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return Math.floor(Math.sqrt(x));
};

var mySqrt = function(x) {
    if (!x) {
        return 0;
    }

    let i = 1;
    while ((i + 1) ** 2 <= x ){
        i++;
    }

    return i;
};

var mySqrt = function(x) {
    let lo = 0;
    let hi = x;
    let result = 0;
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (mid * mid <= x) {
            result = mid;
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }

    return result;
};

console.log(mySqrt(1));//1
console.log(mySqrt(3));//1
console.log(mySqrt(4));//2
console.log(mySqrt(8));//2
console.log(mySqrt(9));//3
console.log(mySqrt(10));//3