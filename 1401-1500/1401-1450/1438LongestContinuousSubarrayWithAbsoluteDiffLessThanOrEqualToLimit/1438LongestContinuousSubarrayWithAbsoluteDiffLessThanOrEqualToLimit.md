# 1438. Longest Continuous Subarray With Absolute Diff Less Than or Equal to Limit

Given an array of integers `nums` and an integer `limit`, return the size of the longest **non-empty** subarray such that the absolute difference between any two elements of this subarray is less than or equal to `limit`*.*

 

**Example 1:**

```
Input: nums = [8,2,4,7], limit = 4
Output: 2 
Explanation: All subarrays are: 
[8] with maximum absolute diff |8-8| = 0 <= 4.
[8,2] with maximum absolute diff |8-2| = 6 > 4. 
[8,2,4] with maximum absolute diff |8-2| = 6 > 4.
[8,2,4,7] with maximum absolute diff |8-2| = 6 > 4.
[2] with maximum absolute diff |2-2| = 0 <= 4.
[2,4] with maximum absolute diff |2-4| = 2 <= 4.
[2,4,7] with maximum absolute diff |2-7| = 5 > 4.
[4] with maximum absolute diff |4-4| = 0 <= 4.
[4,7] with maximum absolute diff |4-7| = 3 <= 4.
[7] with maximum absolute diff |7-7| = 0 <= 4. 
Therefore, the size of the longest subarray is 2.
```

**Example 2:**

```
Input: nums = [10,1,2,4,7,2], limit = 5
Output: 4 
Explanation: The subarray [2,4,7,2] is the longest since the maximum absolute diff is |2-7| = 5 <= 5.
```

**Example 3:**

```
Input: nums = [4,2,2,2,4,4,2,2], limit = 0
Output: 3
```

 

**Constraints:**

- `1 <= nums.length <= 10^5`
- `1 <= nums[i] <= 10^9`
- `0 <= limit <= 10^9`

#### 2021.02.05

#### 	我的思路：

滑动窗口 + 两个单调队列

**两种滑动窗口**

**第一种：**性能较差，因为第4步的时候会一直把窗口左边界收缩

1. 一个单调队列maxQueue记录当前窗口内的最大值max
2. 一个单调队列minQueue记录当前窗口内的最小值min
3. 当max - min <=  limit时滑动窗口大小加1，表现为right++
4. 当max - min > limit时滑动窗口整体向右平移一步，表现为left++
5. result = Math.max(right - left + 1, result)

```javascript
var longestSubarray = function(nums, limit) {
    const n = nums.length;
    const maxQueue = [];
    const minQueue = [];
    let left = 0;
    let res = 0;
    for (let right = 0; right < n; right++) {
        while (maxQueue.length && maxQueue[maxQueue.length - 1] < nums[right]) {
            maxQueue.pop();
        }
        maxQueue.push(nums[right]);

        while (minQueue.length && minQueue[minQueue.length - 1] > nums[right]) {
            minQueue.pop();
        }
        minQueue.push(nums[right]);
        while (Math.abs(maxQueue[0] - minQueue[0]) > limit) {
            if (nums[left] === maxQueue[0]) {
                maxQueue.shift();
            }
            if (nums[left] === minQueue[0]) {
                minQueue.shift();
            }
            left++;
        }
        res = Math.max(res, right - left + 1);
    }
    return res;
};

```



**第二种：**性能较好，因为第4步的时候会把保持窗口大小，5-6步只记录满足条件的窗口大小

1. 一个单调队列maxQueue记录当前窗口内的最大值max
2. 一个单调队列minQueue记录当前窗口内的最小值min
3. 当max - min <=  limit时滑动窗口大小加1，表现为right++
4. 当max - min > limit时滑动窗口整体向右平移一步，表现为left++，right++
5. result中记录的是满足条件的最大窗口长度
6. 为什么可以直接```res = right - left + 1;```而不是```res = Math.max(right - left + 1, res);```是因为我们写法的滑动窗口大小是不回收缩的！

```typescript
var longestSubarray = function(nums, limit) {
    const n = nums.length;
    const maxQueue = [];
    const minQueue = [];
    let left = 0;
    let res = 0;
    for (let right = 0; right < n; right++) {
        while (maxQueue.length && maxQueue[maxQueue.length - 1] < nums[right]) {
            maxQueue.pop();
        }
        maxQueue.push(nums[right]);

        while (minQueue.length && minQueue[minQueue.length - 1] > nums[right]) {
            minQueue.pop();
        }
        minQueue.push(nums[right]);
        if (Math.abs(maxQueue[0] - minQueue[0]) > limit) {
            if (nums[left] === maxQueue[0]) {
                maxQueue.shift();
            }
            if (nums[left] === minQueue[0]) {
                minQueue.shift();
            }
            left++;
        }
        else {
            //res = Math.max(res, right - left + 1);
            res = res = right - left + 1;
        }
    }
    return res;
};
```

