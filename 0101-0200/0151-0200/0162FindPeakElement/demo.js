/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    nums.unshift(-Infinity);
    nums.push(-Infinity);
    const N = nums.length;
    for (let i = 1; i < N - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i - 1;
        }
    }
    return;
};

var findPeakElement = function(nums) {
    const N = nums.length;
    if (N === 1) {
        return 0;
    }
    if (nums[0] > nums[1]) {
        return 0;
    }
    if (nums[N - 1] > nums[N - 2]) {
        return N - 1;
    }
    for (let i = 1; i < N - 1; i++) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i;
        }
    }
    return;
};

var findPeakElement = function(nums) {
    const N = nums.length;
    for (let i = 1; i < N; i++) {
        if (nums[i] < nums[i - 1]) {
            return i - 1;
        }
    }
    return N - 1;
}

var findPeakElement = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
        let mid1 = Math.floor((low + high) / 2);
        let mid2 = mid1 + 1;
        if (nums[mid1] < nums[mid2]) {
            low = mid2;
        }
        else {
            high = mid1;
        }
    }
    return low;
}

console.log(findPeakElement([1,2,1,3,5,6,4]))

console.log(findPeakElement([1,2,3,1]))