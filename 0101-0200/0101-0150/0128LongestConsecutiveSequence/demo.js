/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let max = 0;

    const set = new Set(nums);
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i] - 1)) {
            let cur = nums[i];
            let count = 1;
            while (set.has(cur + 1)) {
                cur++;
                count++;
            }
            max = Math.max(max, count);
        }
    }

    return max;
};

var longestConsecutive = function(nums) {
    const map = new Map();
    let max = 0;
    for (const num of nums) {
        if (!map.has(num)) {
            let preLen = map.get(num - 1) || 0;
            let nextLen = map.get(num + 1) || 0;
            let curLen = preLen + 1 + nextLen;
            map.set(num, curLen);
            max = Math.max(max, curLen);
            map.set(num - preLen, curLen);
            map.set(num + nextLen, curLen);
        }
    }

    return max;
}