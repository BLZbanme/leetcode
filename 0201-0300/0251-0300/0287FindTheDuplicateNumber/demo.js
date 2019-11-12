/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0, N = nums.length - 1; i < N; i++) {
        if (nums[i] === nums[i + 1]) {
            return nums[i];
        }
    }
};

var findDuplicate = function(nums) {
    if (nums.length > 1) {
        let slow = nums[0];
        let fast = nums[nums[0]];
        while (slow !== fast) {
            slow = nums[slow];
            fast = nums[nums[fast]];
        }
        fast = 0;
        while (fast !== slow) {
            fast = nums[fast];
            slow = nums[slow];
        }
        return slow;
    }
    return -1;
}

console.log(findDuplicate([1,3,4,2,2]))
console.log(findDuplicate([3,1,3,4,2]))
console.log(findDuplicate([2,2,2,2,2]))