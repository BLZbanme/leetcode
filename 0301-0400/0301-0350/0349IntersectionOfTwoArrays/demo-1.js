"use strict";
function intersection(nums1, nums2) {
    var set1 = new Set(nums1);
    var set2 = new Set(nums2);
    return Array.from(set1).filter(function (e) { return set2.has(e); });
}
;
