/**
 * @param {number[]} nums
 * @return {number}
 */
var findMagicIndex = function(nums) {
    let lo = 0;
    let hi = nums.length - 1;
    while (lo < hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (nums[mid] > mid) {
            hi = mid - 1;
        }
        else {
            lo = mid + 1;
        }
    }
    return lo - 1;
};

var findMagicIndex = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == i) {
            return i;
        }
    }
    return -1;
}

var findMagicIndex = function(nums) {
    
    const dfs = (nums, lo, hi) => {
        if (lo > hi) {
            return -1;
        }
        let mid = lo + ((hi - lo) >> 1);
        let loAnswer = dfs(nums, lo, mid - 1);
        if (loAnswer != -1) {
            return loAnswer;
        }
        else if (nums[mid] === mid) {
            return mid;
        }

        return dfs(nums, mid + 1, hi);
    }

    return dfs(nums, 0, nums.length - 1);
}

console.log(findMagicIndex([0, 0, 2])) // 0


console.log(findMagicIndex([0, 2, 3, 4, 5])) // 0

console.log(findMagicIndex([1, 1, 1])) // 1