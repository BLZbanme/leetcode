/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const HALF = Math.ceil(nums.length / 2);
    let map = new Map();
    for (let num of nums) {
        let tmp = map.get(num) || 0;
        if (tmp + 1 >= HALF) {
            return num;
        }
        if (tmp) {
            map.set(num, tmp + 1);
        }
        else {
            map.set(num, 1);
        }
    }
};

var majorityElement = function(nums) {
    let major = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (count == 0) {
            count++;
            major = nums[i];
        }
        else if (major === nums[i]) {
            count++;
        }
        else {
            count--;
        }
    }
    return major;
}

console.log(majorityElement([1]))


console.log(majorityElement([3, 2, 3]))

console.log(majorityElement([2,2,1,1,1,2,2]))