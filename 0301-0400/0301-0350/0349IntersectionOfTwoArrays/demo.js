/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1);
    let result = new Set();
    nums2.forEach(e => {
        if (set1.has(e)) {
            result.add(e);
        }
    })
    return Array.from(result);
};

console.log(intersection([1,2,2,1], [2, 2]))
console.log(intersection([4,9,5], [9,4,9,8,4]))