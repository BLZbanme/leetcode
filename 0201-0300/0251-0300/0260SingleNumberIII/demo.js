/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let oneMore = new Set();
    let one = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (one.has(nums[i])) {
            oneMore.add(nums[i]);
        }
        else {
            one.add(nums[i]);
        }
    }
    Array.from(oneMore).forEach(e => {
        one.delete(e);
    })
    return Array.from(one);
};

var singleNumber = function(nums) {
    let oneMore = new Set();
    let one = new Set();
    nums.forEach(e => {
        if (one.has(e)) {
            oneMore.add(e);
        }
        else {
            one.add(e);
        }
    })
    Array.from(oneMore).forEach(e => {
        one.delete(e);
    })
    return Array.from(one);
};

var singleNumber = function(nums) {
    let diff = 0;
    nums.forEach(num => {
        diff ^= num;
    })
    diff &= -diff;
    let res = [0, 0];
    nums.forEach(num => {
        if (num & diff) {
            res[1] ^= num;
        }
        else{
            res[0] ^= num;
        }
    })
    return res;
}

console.log(singleNumber([1,2,1,3,2,5]))
