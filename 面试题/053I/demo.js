/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let count = 0;

    let index = binarySearch(nums, target);

    let i = index;
    let j = index + 1;
    
    while (i >= 0 && nums[i--] === target) {
        count++;
    }

    while (j < nums.length && nums[j++] === target) {
        count++;
    }

    return count;
};

function binarySearch(arr, target) {
    let lo = 0;
    let hi = arr.length - 1;

    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }

    return lo;
}

var search = function(nums, target) {
    return binarySearch(nums, target) - binarySearch(nums, target - 1);
};

function binarySearch(arr, target) {
    let lo = 0;
    let hi = arr.length - 1;

    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (arr[mid] <= target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }

    return lo;
}

console.log(search([2, 2], 3)); // 0
console.log(search([5,7,7,8,8,10], 8)); //2
console.log(search([5,7,7,8,8,10], 6)); // 0