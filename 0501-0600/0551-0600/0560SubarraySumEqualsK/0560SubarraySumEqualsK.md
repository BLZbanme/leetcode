# 560.Subarray Sum Equals K

Given an array of integers `nums` and an integer `k`, return *the total number of continuous subarrays whose sum equals to k*.

 

**Example 1:**

```
Input: nums = [1,1,1], k = 2
Output: 2
```

**Example 2:**

```
Input: nums = [1,2,3], k = 3
Output: 2
```

 

**Constraints:**

- `1 <= nums.length <= 2 * 104`
- `-1000 <= nums[i] <= 1000`
- `-107 <= k <= 107`

#### 2021.01.26

##### 	我的思路：

```javascript
function subarraySum(nums: number[], k: number): number {
    const map = new Map();
    const n = nums.length;
    let count = 0;
    let tmp = 0;
    map.set(0, 1);
    for (let i = 0; i < n; i++) {
        tmp += nums[i];
        let diff = tmp - k;
        count += map.get(diff) || 0;
        map.set(tmp, (map.get(tmp) || 0) + 1);
    }
    return count;
};
```
