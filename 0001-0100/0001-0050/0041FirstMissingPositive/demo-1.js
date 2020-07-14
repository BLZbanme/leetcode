/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    const N = nums.length;
    for (let i = 0; i < N; i++) {
        while (nums[i] > 0 && nums[i] < N && nums[nums[i] - 1] !== nums[i]) {
            let tmp = nums[i] - 1;
            [nums[tmp], nums[i]] = [nums[i], nums[tmp]];
        }
    }

    for (let i = 0; i < N; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    return N + 1;
};

var firstMissingPositive = function(nums) {
    const N = nums.length;

    for (let i = 0; i < N; i++) {
        if (nums[i] <= 0) {
            nums[i] = N + 1;
        }
    }

    for (let i = 0; i < N; i++) {
        let num = Math.abs(nums[i]);
        if (num <= N ) {
            nums[num - 1] = -Math.abs(nums[num - 1]);
        }
    }

    for (let i = 0; i < N; i++) {
        if (nums[i] > 0) {
            return i + 1;
        }
    }

    return N + 1;
}