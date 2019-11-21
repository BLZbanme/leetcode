/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const result = [];
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);
    let i = 0;
    let j = 0;
    const N1 = nums1.length;
    const N2 = nums2.length;
    while (i < N1 && j < N2) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++;
            j++;
        }
        else if (nums1[i] < nums2[j]) {
            i++;
        }
        else {
            j++;
        }
    }
    return result;
};

console.log(intersect([1,2,2,1], [2, 2]))
console.log(intersect([4,9,5], [9,4,9,8,4]))