function longestSubarray(nums: number[], limit: number): number {
    let left = 0;
    const n = nums.length;
    let result = 1;
    const maxQueue = [nums[0]];
    const minQueue = [nums[0]];
    for (let right = 1; right < n; right++) {
        while (maxQueue.length && maxQueue[maxQueue.length - 1] < nums[right]) {
            maxQueue.pop();
        }
        maxQueue.push(nums[right])
        while (minQueue.length && minQueue[minQueue.length - 1] > nums[right]) {
            minQueue.pop();
        }
        minQueue.push(nums[right]);
        let max = maxQueue[0];
        let min = minQueue[0];
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
};

console.log(longestSubarray([8,2,4,7], 4)) //2
console.log(longestSubarray([10,1,2,4,7,2], 5)) //4
console.log(longestSubarray([4,2,2,2,4,4,2,2], 0)) //3