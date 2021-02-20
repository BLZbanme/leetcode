# 697. Degree of an Array

Given a non-empty array of non-negative integers `nums`, the **degree** of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of `nums`, that has the same degree as `nums`.

 

**Example 1:**

```
Input: nums = [1,2,2,3,1]
Output: 2
Explanation: 
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.
```

**Example 2:**

```
Input: nums = [1,2,2,3,1,4,2]
Output: 6
Explanation: 
The degree is 3 because the element 2 is repeated 3 times.
So [2,2,3,1,4,2] is the shortest subarray, therefore returning 6.
```

 

**Constraints:**

- `nums.length` will be between 1 and 50,000.
- `nums[i]` will be an integer between 0 and 49,999.

#### 2021.02.20

#### 	我的思路：

两次遍历，滑动窗口，垃圾！

```javascript
var findShortestSubArray = function(nums) {
    const map = new Map();
    for (let num of nums) {
        map.set(num, (map.get(num) || 0) + 1);
    }
    const degree = Math.max(...Array.from(map.values()));
    map.clear();

    let left = 0;
    const n = nums.length;
    
    let res = Infinity;
    for (let right = 0; right < n; right++) {
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);
        while (Math.max(...Array.from(map.values())) === degree) {
            res = Math.min(res, right - left + 1);
            let pre = map.get(nums[left]);
            map.set(nums[left++], pre - 1);
        }
    }

    return res;
};
```

#### 别人的思路

双指针！

```javascript
var findShortestSubArray = function(nums) {
    const leftMap = new Map();
    const rightMap = new Map();
    const countMap = new Map();
    let degree = 0;
    nums.forEach((e, index) => {
        if (!leftMap.has(e)) {
            leftMap.set(e, index);
        }
        rightMap.set(e, index);
        countMap.set(e, (countMap.get(e) || 0) + 1);
        degree = Math.max(degree, countMap.get(e));
    })

    let res = nums.length;
    for (const [key, value] of countMap) {
        if (value === degree) {
            res = Math.min(res, rightMap.get(key) - leftMap.get(key) + 1);
        }
    }
    return res;
}
```

