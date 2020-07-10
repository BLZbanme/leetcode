/**
 * @param {number[]} nums
 * @return {number}
 */

var reversePairs = function(nums) {
    const N = nums.length;
    if (N < 2) {
        return 0;
    }

    const copy = Array.from(nums);
    const temp = Array(N);

    return reversePairsHelper(copy, 0, N - 1, temp);
}

function reversePairsHelper(nums, left, right, temp) {
    if (left === right) {
        return 0;
    }

    let mid = left + ((right - left) >> 1);
    const leftPairs = reversePairsHelper(nums, left, mid, temp);
    const rightPairs = reversePairsHelper(nums, mid + 1, right, temp);
    if (nums[mid] <= nums[mid + 1]) {
        return leftPairs + rightPairs;
    }

    let crossPairs = mergeAndCount(nums, left, mid, right, temp);
    return leftPairs + rightPairs + crossPairs;
}

function mergeAndCount(nums, left, mid, right, temp) {
    for (let i = left; i <= right; i++) {
        temp[i] = nums[i];
    }
    
    let i = left;
    let j = mid + 1;
    let count = 0;
    for (let k = left; k <= right; k++) {
        if (i == mid + 1) {
            nums[k] = temp[j++];
        }
        else if (j == right + 1) {
            nums[k] = temp[i++];
        }
        else if (temp[i] <= temp[j]) {
            nums[k] = temp[i++];
        }
        else {
            nums[k] = temp[j++];
            count += (mid - i + 1);
        }
    }

    return count;
}

console.log(reversePairs([7, 5, 6, 4]))