function longestSubarray(nums, limit) {
    var left = 0;
    var n = nums.length;
    var result = 1;
    var maxQueue = [nums[0]];
    var minQueue = [nums[0]];
    for (var right = 1; right < n; right++) {
        while (maxQueue.length && maxQueue[maxQueue.length - 1] < nums[right]) {
            maxQueue.pop();
        }
        maxQueue.push(nums[right]);
        while (minQueue.length && minQueue[minQueue.length - 1] > nums[right]) {
            minQueue.pop();
        }
        minQueue.push(nums[right]);
        var max = maxQueue[0];
        var min = minQueue[0];
        if (max - min > limit) {
            max === nums[left] && maxQueue.shift();
            min === nums[left] && minQueue.shift();
            left++;
        }
        else {
            result = right - left + 1;
        }
    }
    return result;
}
;
console.log(longestSubarray([8, 2, 4, 7], 4)); //2
console.log(longestSubarray([10, 1, 2, 4, 7, 2], 5)); //4
console.log(longestSubarray([4, 2, 2, 2, 4, 4, 2, 2], 0)); //3
