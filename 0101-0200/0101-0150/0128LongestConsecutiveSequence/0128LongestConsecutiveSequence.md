# 128. Longest Consecutive Sequence

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in O(*n*) complexity.

**Example:**

```
Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
```

#### 2020.07.13

#### 我的方法:

我本来想用一个大数组来代替set的，可惜觉得空间复杂度太高就放弃了，是我想太多了，直接set就好了。

（另此题还可以用并查集做，但是时间关系就没做）

#### 别人的方法：

##### set

```javascript
var longestConsecutive = function(nums) {
    let max = 0;

    const set = new Set(nums);
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i] - 1)) {
            let cur = nums[i];
            let count = 1;
            while (set.has(cur + 1)) {
                cur++;
                count++;
            }
            max = Math.max(max, count);
        }
    }

    return max;
};
```

##### map

```javascript
var longestConsecutive = function(nums) {
    const map = new Map();
    let max = 0;
    for (const num of nums) {
        if (!map.has(num)) {
            let preLen = map.get(num - 1) || 0;
            let nextLen = map.get(num + 1) || 0;
            let curLen = preLen + 1 + nextLen;
            map.set(num, curLen);
            max = Math.max(max, curLen);
            map.set(num - preLen, curLen);
            map.set(num + nextLen, curLen);
        }
    }

    return max;
}
```

