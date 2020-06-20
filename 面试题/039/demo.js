/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums.sort();
    return nums[(nums.length - 1) >> 1];
};

var majorityElement = function(nums) {
    const N = nums.length >> 1;
    const map = new Map();
    for (let num of nums) {
        let tmp = map.get(num) || 0;
        if (tmp + 1 > N) {
            return num;
        }
        map.set(num, tmp + 1);
    }
};

var majorityElement = function(nums) {
    let vote = 0;
    let num;
    for (let i = 0; i < nums.length; i++) {
        if (!vote) {
            num = nums[i];
            vote = 1;
        }
        else {
            vote += num === nums[i] ? 1 : -1;
        }
    }
    return num;
};

var majorityElement = function(nums) {
    debugger
    const middle = nums.length >> 1;
    let lo = 0;
    let hi = nums.length - 1;
    let index = partition(nums, lo, hi);
    while (index !== middle) {
        if (index > middle) {
            hi = index - 1;
            index = partition(nums, lo, hi);
        }
        else {
            lo = index + 1;
            index = partition(nums, lo, hi);
        }
    }
    return nums[middle];
}

function partition(arr, lo, hi) {
    let i = lo, j = hi + 1;
    let tmp = arr[lo];
    while (true) {
        while (arr[++i] < tmp && i !== hi) {
        }
        while (arr[--j] > tmp && j !== lo) {
        }
        if (i >= j) {
            break;
        }
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    [arr[j], arr[lo]] = [arr[lo], arr[j]];
    return j;
}

console.log(majorityElement([1, 2, 3, 2, 2, 2, 5, 4, 2])) // 2
console.log(majorityElement([6, 5, 5])) // 5
console.log(majorityElement([1])) // 1
console.log(majorityElement([1, 1, 2])) // 1
console.log(majorityElement([1, 1, 1, 3])) // 1
