/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const result = [];

    let map = new Map();
    nums1.forEach(e => {
        map.set(e, (map.get(e) || 0) + 1); 
    })

    nums2.forEach(e => {
        if (map.get(e)) {
            map.set(e, map.get(e) - 1);
            result.push(e);
        }
    })

    return result;
};


var intersect = function(nums1, nums2) {
    const result = [];
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let i = 0; 
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            i++;
        }
        else if (nums1[i] > nums2[j]) {
            j++;
        }
        else {
            result.push(nums1[i]);
            i++;
            j++;
        }
    }

    return result;
};


console.log(intersect([1, 2, 2, 1], [2, 2])) //[2, 2]
console.log(intersect([4,9,5], [9,4,9,8,4])) //[9, 4]