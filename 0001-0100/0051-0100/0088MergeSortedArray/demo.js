/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let index1 = 0;
    let index2 = 0;
    let tmp = [...nums1];
    for (let i = 0, len = nums1.length; i < len; i++) {
        if (index1 >= m) {
            nums1[i] = nums2[index2++];
        }
        else if (index2 >= n) {
            nums1[i] = tmp[index1++];
        }
        else if (tmp[index1] < nums2[index2]) {
            nums1[i] = tmp[index1++];
        }
        else {
            nums1[i] = nums2[index2++];
        }
    }
    return nums1;
};

var merge = function (nums1, m, nums2, n) {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (j >= 0 && i >= 0) {
        if (nums1[i] > nums2[j]){
            nums1[k--] = nums1[i--]; 
        }
        else {
            nums1[k--] = nums2[j--];
        }
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
    return nums1;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))

console.log(merge([], 3, [2, 5, 6], 3))