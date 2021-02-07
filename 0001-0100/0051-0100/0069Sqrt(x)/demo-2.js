function mySqrt(x) {
    var lo = 0;
    var hi = x;
    while (lo < hi) {
        var mid = lo + ((hi - lo) >> 1) + 1;
        var cur = mid * mid;
        if (cur === x) {
            return mid;
        }
        else if (cur < x) {
            lo = mid;
        }
        else {
            hi = mid - 1;
        }
    }
    return lo;
}
;
console.log(mySqrt(0)); //0
console.log(mySqrt(1)); //1
console.log(mySqrt(2)); //1
console.log(mySqrt(4)); //2
console.log(mySqrt(8)); //2
