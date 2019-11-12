/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let lo = 0;
        let hi = n;
        while (lo <= hi) {
            // let mid = Math.floor((lo + hi) / 2);
            let mid = Math.floor((lo + (hi - lo) / 2));
            if (!isBadVersion(mid)) {
                if (isBadVersion(mid + 1)) {
                    return mid + 1;
                }
                else {
                    lo = mid + 1;
                }
            }
            else {
                hi = mid - 1;
            }
        }
    };
};

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let lo = 1;
        let hi = n;
        while (lo < hi) {
            let mid = Math.floor((lo + hi) / 2);
            if (!isBadVersion(mid)) {
                lo = mid + 1;
            }
            else {
                hi = mid;
            }
        }
        return lo;
    };
};