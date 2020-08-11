/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
    if (!nums || !nums.length) {
        return [];
    }

    const result = [];
    const stack = [];
    for (let i = 0; i < k; i++) {
        while (stack.length && stack[stack.length - 1] < nums[i]) {
            stack.pop();
        }
        stack.push(nums[i]);
    }

    result.push(stack[0]);

    for (let i = k; i < nums.length; i++) {
        let inTmp = nums[i];
        let tmp = nums[i - k];
        while (stack.length && stack[stack.length - 1] < nums[i]) {
            stack.pop();
        }
        stack.push(inTmp);

        if (stack.length && stack[0] === tmp) {
            stack.shift();
        }

        result.push(stack[0]);
    }

    return result;
};


console.log(maxSlidingWindow([1, -1], 1));

console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));