/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);

    let result = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let now = target - nums[i];
        let lo = i + 1;
        let hi = nums.length - 1;
        while (lo < hi) {
            let tmp = nums[lo] + nums[hi];
            if (tmp === now) {
                return target
            }
            else if (tmp < now) {
                lo++;
            }
            else {
                hi--;
            }
            if (Math.abs(tmp - now) < Math.abs(result - target)) {
                result = nums[i] + tmp;
            }
        }
    }

    return result;
};

var threeSumClosest = function(nums, target) {
    nums.sort((a, b) => a - b);

    let result = Infinity;
    for (let i = 0; i < nums.length; i++) {
        let lo = i + 1;
        let hi = nums.length - 1;
        while (lo < hi) {
            let tmp = nums[i] + nums[lo] + nums[hi];
            if (tmp === target) {
                return target
            }
            else if (tmp < target) {
                lo++;
            }
            else {
                hi--;
            }
            if (Math.abs(tmp - target) < Math.abs(result - target)) {
                result = tmp;
            }
        }
    }

    return result;
};


console.log(threeSumClosest([1,1,1,1], 1));

console.log(threeSumClosest([-1,2,1,-4], 1));