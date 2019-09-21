/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    let result = [];
    if (!nums || !nums.length) {
        return result;
    }
    let start = nums[0];
    let pre = nums[0];
    let str = `${nums[0]}`;
    nums.push(Infinity);
    for (let i = 1 , len = nums.length; i < len; i++) {
        if (nums[i] === pre + 1) {
            pre = nums[i];
            continue;
        }
        else {
            if (start !== pre) {
                str += "->" + pre;
            }
            result.push(str);
            start = nums[i];
            pre = nums[i];
            str = `${nums[i]}`;
        }
    }
    return result;
};

var summaryRanges = function(nums) {
    let result = [];
    if (!nums || !nums.length) {
        return result;
    }
    let start = nums[0];
    let pre = nums[0];
    let str = `${nums[0]}`;
    for (let i = 1 , len = nums.length; i < len; i++) {
        if (nums[i] === pre + 1) {
            pre = nums[i];
            continue;
        }
        else {
            if (start !== pre) {
                str += "->" + pre;
            }
            result.push(str);
            start = nums[i];
            pre = nums[i];
            str = `${nums[i]}`;
        }
    }
    if (start === pre) {
        result.push(str);
    }
    else {
        result.push(str + '->' + pre);
    }
    return result;
};

console.log(summaryRanges([0,2,3,4,6,8,9]));

console.log(summaryRanges([0,1,2,4,5,7]));