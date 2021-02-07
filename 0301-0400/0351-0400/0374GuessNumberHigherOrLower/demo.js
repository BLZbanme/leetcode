var guessNumber = function(n) {
    let lo = 1;
    let hi = n;
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (guess(mid) === -1) {
            hi = mid - 1;
        }
        else if (guess(mid) === 1) {
            lo = mid + 1;
        }
        else {
            return mid;
        }
    }
    return lo;
};