/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
    let res = [];
    nums.sort((a, b) => a - b);
    addResult(res, [], 0, nums);
    return res;
};

function addResult(res, arr, index, nums) {
    let tmp = [...arr];
    res.push(tmp);
    for (let i = index, len = nums.length; i < len; i++) {
        if (i == index || nums[i] !== nums[i - 1]) {
            arr.push(nums[i]);
            addResult(res, arr, i + 1, nums);
            arr.pop();
        }
    }
}

var subsetsWithDup = function(nums) {
    let res = [];
    let empty = [];
    res.push(empty);
    nums.sort((a, b) => a - b);
    for (let i = 0, len = nums.length; i < len; i++) {
        let duplicateCount = 1;
        while (((i + 1) < len) && nums[i + 1] === nums[i]) {
            duplicateCount++;
            i++;
        }
        for (let j = 0, preNum = res.length; j < preNum; j++) {
            let ele = [...res[j]];
            for (let k = 0; k < duplicateCount; k++) {
                ele.push(nums[i]);
                res.push([...ele]);
            } 
        }
    }
    return res;
}

console.log(subsetsWithDup([4,4,4,1,4]))
console.log(subsetsWithDup([1, 2, 2]))

