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

var intersect = function(nums1, nums2) {
    const result = [];
    const map1 = new Map();
    const map2 = new Map();
    nums1.forEach(e => {
        let tmp = map1.get(e);
        if (tmp) {
            map1.set(e, tmp + 1);
        }
        else {
            map1.set(e, 1);
        }
    });

    nums2.forEach(e => {
        let tmp = map2.get(e);
        if (tmp) {
            map2.set(e, tmp + 1);
        }
        else {
            map2.set(e, 1);
        }
    });

    map1.forEach((v, k) => {
        let v2 = map2.get(k) || 0;
        for (let i = 0; i < Math.min(v, v2); i++) {
            result.push(k);
        }
    })

    return result;
}

var intersect = function(nums1, nums2) {
    const result = [];
    const map = new Map();
    nums1.forEach(e => {
        let tmp = map.get(e);
        if (tmp) {
            map.set(e, tmp + 1);
        }
        else {
            map.set(e, 1);
        }
    });

    nums2.forEach(e => {
        let tmp = map.get(e);
        if (tmp) {
            map.set(e, tmp - 1);
            result.push(e);
        }
    });

    return result;
}

console.log(intersect([1,2,2,1], [2, 2]))
console.log(intersect([4,9,5], [9,4,9,8,4]))