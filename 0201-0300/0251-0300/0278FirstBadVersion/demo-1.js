var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let lo = 1;
        let hi = n;
        while (lo < hi) {
            let mid = lo + ((hi - lo) >> 1);
            if (isBadVersion(mid)) {
                hi = mid;
            }
            else {
                lo = mid + 1;
            }
        }
        return lo;
    };
};