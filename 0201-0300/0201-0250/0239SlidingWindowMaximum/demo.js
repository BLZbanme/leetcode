"use strict";
function maxSlidingWindow(nums, k) {
    var result = [];
    var queue = [];
    var N = nums.length;
    for (var i = 0; i < k; i++) {
        while (queue.length && queue[queue.length - 1] < nums[i]) {
            queue.pop();
        }
        queue.push(nums[i]);
    }
    result.push(queue[0]);
    for (var i = k; i < N; i++) {
        if (nums[i - k] === queue[0]) {
            queue.shift();
        }
        while (queue.length && queue[queue.length - 1] < nums[i]) {
            queue.pop();
        }
        queue.push(nums[i]);
        result.push(queue[0]);
    }
    return result;
}
;
console.log(maxSlidingWindow([-7, -8, 7, 5, 7, 1, 6, 0], 4)); //[7,7,7,7,7]
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); //[3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); //[1]
console.log(maxSlidingWindow([1, -1], 1)); //[1, -1]
console.log(maxSlidingWindow([9, 11], 2)); //[11]
console.log(maxSlidingWindow([4, -2], 2)); //[4]
