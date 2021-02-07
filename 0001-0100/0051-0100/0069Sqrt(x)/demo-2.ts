function mySqrt(x: number): number {
    let lo = 0;
    let hi = x;
    while (lo < hi) {
        let mid = lo + ((hi - lo) >> 1) + 1;
        let cur = mid * mid;
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
};

console.log(mySqrt(0)) //0
console.log(mySqrt(1)) //1
console.log(mySqrt(2)) //1
console.log(mySqrt(4)) //2
console.log(mySqrt(8)) //2