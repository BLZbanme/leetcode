/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if (nums1.length > nums2.length) {
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let lo = 0;
    let hi = m;
    while (lo <= hi) {
        const i = lo + ((hi - lo) >> 1);
        const j = ((m + n + 1) >> 1) - i;
        const maxLeftA = i === 0 ? -Infinity : nums1[i - 1];
        const minRightA = i === m ? Infinity : nums1[i];
        const maxLeftB = j === 0 ? -Infinity : nums2[j - 1];
        const minRightB = j === n ? Infinity : nums2[j];

        if (maxLeftA <= minRightB && minRightA >= maxLeftB) {
            return (m + n) % 2 === 1 ? Math.max(maxLeftA, maxLeftB) : (Math.max(maxLeftA, maxLeftB) + Math.min(minRightA, minRightB)) / 2;
        }
        else if (maxLeftA > minRightB) {
            hi = i - 1;
        }
        else {
            lo = i + 1;
        }
    }
};