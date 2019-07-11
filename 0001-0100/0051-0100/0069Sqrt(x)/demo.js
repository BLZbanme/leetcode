/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return parseInt(Math.sqrt(x));
};

var mySqrt = function(x) {
    if (x <= 1) {
        return x;
    }
    let lo = 0;
    let hi = parseInt(x / 2);
    while (lo <= hi) {
        let mid = parseInt((lo + hi) / 2);
        let mid2 = mid ** 2;
        if (mid2 <= x) {
            if ((mid + 1) ** 2 > x) {
                return mid;
            }
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
}


console.log(mySqrt(1))
console.log(mySqrt(4))
console.log(mySqrt(8))
console.log(mySqrt(9))
console.log(mySqrt(10))
console.log(mySqrt(11))
console.log(mySqrt(12))
console.log(mySqrt(13))
console.log(mySqrt(14))
console.log(mySqrt(15))
console.log(mySqrt(16))