/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        if (map.has(nums[i])) {
            let tmp = map.get(nums[i]);
            for (let e of tmp) {
                if (i - e <= k) {
                    return true;
                }
            }
            tmp.push(i);
        }
        else {
            map.set(nums[i], [i])
        }
    }
    return false;
};

var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        if (map.has(nums[i])) {
            if (i - map.get(nums[i]) <= k) {
                return true;
            }
            map.set(nums[i], i);
        }
        else {
            map.set(nums[i], i)
        }
    }
    return false;
};

var containsNearbyDuplicate = function(nums, k) {
    let map = new Map();
    for (let i = 0, len = nums.length; i < len; i++) {
        if (map.has(nums[i]) && (i - map.get(nums[i]) <= k)) {
            return true;
        }
        map.set(nums[i], i)
    }
    return false;
};

var containsNearbyDuplicate = function(nums, k) {
    let set = new Set();
    for (let i = 0, len = nums.length; i < len; i++) {
        if (i > k) {
            set.delete(nums[i - k - 1]);
        }
        if (set.has(nums[i])) {
            return true;
        }
        else {
            set.add(nums[i]);
        }
    }
    return false;
}



console.log(containsNearbyDuplicate([99, 99], 2))

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.log(containsNearbyDuplicate([1, 0, 1, 1], 1))
console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2))