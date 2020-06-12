/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    
    function dfs(index, arr, sum) {
        // debugger
        for (let i = index; i < nums.length; i++) {
            if (nums[i] == nums[i - 1] && i > index) {
                continue;
            }
            if (arr.length === 2) {
                if (!(sum + nums[i])) {
                    let newArr = Array.from(arr);
                    newArr.push(nums[i]);
                    result.push(newArr);
                }
            }
            else {
                let newArr = Array.from(arr);
                newArr.push(nums[i]);
                dfs(i + 1, newArr, sum + nums[i])
            }
        }
    }

    dfs(0, [], 0);
    return result;
};

var threeSum = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        // debugger
        let map = twoSum(nums, i + 1, -nums[i]);
        if (map.size) {
            map.forEach((value, key) => {
                result.push([nums[i], value, key]);
            })
        }
    }

    return result;
};

function twoSum(nums, index, sum) {
    let set = new Set();
    let map = new Map();
    for (let i = index; i < nums.length; i++) {
        if (set.has(nums[i])) {
            map.set(nums[i], sum - nums[i]);
        }
        else {
            set.add(sum - nums[i]);
        }
    }
    return map;
}

var threeSum = function(nums) {
    const result = [];
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let sum = 0 - nums[i];
        let lo = i + 1;
        let hi = nums.length - 1;
        while (lo < hi) {
            if (nums[lo] + nums[hi] < sum) {
                lo++;
            }
            else if (nums[lo] + nums[hi] > sum) {
                hi--;
            }
            else {
                result.push([nums[i], nums[lo], nums[hi]]);
                while (lo < hi && nums[lo + 1] === nums[lo]) {
                    lo++;
                }
                while (hi > lo && nums[hi - 1] === nums[hi]) {
                    hi--;
                }
                lo++;
                hi--;
            }
        }
    }
    return result;
};

console.log(threeSum([-2,0,0,2,2]))//[[-2,0,2]]


console.log(threeSum([-1, 0, 1, 2, -1, -4]))

console.log(threeSum([0, 0]))

