/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
//错误解法，没写出来
var nextGreaterElement = function(nums1, nums2) {
    const result = new Array(nums1.length).fill(-1);
    const stack = [];
    const length = nums2.length;
    nums1.forEach((e, index) => {
        let j = 0;
        while (stack.length && index + j < length && stack[stack.length - 1].value < nums2[index + j]) {
            let tmp = stack.pop();
            result[tmp.index] = nums2[index + j];
            j++;
        }
        stack.push({
            index: index,
            value: e
        });
    })
    return result;
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const result = new Array(nums1.length);
    const map = new Map();
    const stack = [];
    nums2.forEach(e => {
        while (stack.length && stack[stack.length - 1] < e) {
            map.set(stack.pop(), e);
        }
        stack.push(e);
    })

    nums1.forEach((e, index) => {
        result[index] = map.get(e) || -1;
    })
    return result;
};

console.log(nextGreaterElement([4,1,2], [1,3,4,2])) // [-1,3,-1]
console.log(nextGreaterElement([2,4], [1,2,3,4])) // [3,-1]