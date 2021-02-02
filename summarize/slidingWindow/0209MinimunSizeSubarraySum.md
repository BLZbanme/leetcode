# 209. Minimum Size Subarray Sum

Given an array of **n** positive integers and a positive integer **s**, find the minimal length of a **contiguous** subarray of which the sum ≥ **s**. If there isn't one, return 0 instead.

**Example:** 

```
Input: s = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: the subarray [4,3] has the minimal length under the problem constraint.
```

**Follow up:**

If you have figured out the *O*(*n*) solution, try coding another solution of which the time complexity is *O*(*n* log *n*). 

##### 2019.09.12

##### 	我的思路：

​		用一个数组记录，从某个点开始当前长度的序列的和，然后判断这个和是否大于等于s，若大于等于直接返回当前长度。

```javascript
var minSubArrayLen = function(s, nums) {
    if (!nums) {
        return 0;
    }
    if (nums.some(e => e >= s)) {
        return 1;
    }
    let dp = Array.from(nums);
    for (let i = 1, N = nums.length; i < N; i++) {
        for (let j = 0; j + i < N; j++) {
            dp[j] += nums[j + i];
            if (dp[j] >= s) {
                return i + 1;
            } 
        }
    }
    return 0;
};
```

##### 	别人的方法：

##### 方法1：

​	双指针法，用min记录当前的长度，从0点开始扩张数组的长度，发现数组的和大于等于s后，收缩数组的左边，得到最后大于s的值对应的长度就是当前子序列的长度！

​	时间复杂度O(n)

```javascript
var minSubArrayLen = function(s, nums) {
    if (!nums || !nums.length) {
        return 0;
    }
    let i = 0;
    let j = 0;
    let sum = 0;
    let min = Infinity;
    while (j < nums.length) {
        sum += nums[j++];
        while (sum >= s) {
            min = Math.min(min, j - i);
            sum -= nums[i++];
        }
    }
    return min === Infinity ? 0 : min;
}
```

##### 2020.06.28

redo

学到了新招数，二分查找（标准二分查找可以找到需要找大于等于该值的index！）

```javascript
var minSubArrayLen = function(s, nums) {
    const N = nums.length;
    const sums = new Array(N + 1);
    sums[0] = 0;
    for (let i = 1; i <= N; i++) {
        sums[i] = sums[i - 1] + nums[i - 1];
    }

    let result = Infinity;

    for (let i = 1; i <= N; i++) {
        let target = s + sums[i - 1];
        let index = binarySearch(sums, target);
        if (index === N + 1) {
            break;
        }
        if (index <= N) {
            result = Math.min(result, index - i + 1);
        }
    }

    return result === Infinity ? 0 : result;
}

function binarySearch(arr, target) {
    let lo = 0;
    let hi = arr.length;
    
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (arr[mid] === target) {
            return mid;
        }
        else if (arr[mid] < target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }

    return lo;
}
```

#### 2021.02.02

##### redo

滑动窗口

```typescript
function minSubArrayLen(s: number, nums: number[]): number {
    const n = nums.length;
    let left = 0;
    let sum = 0;
    let res = n + 1;
    for (let right = 0; right < n; right++) {
        sum += nums[right];
        while (sum >= s) {
            res = Math.min(res, right - left + 1);
            sum -= nums[left++];
        }
    }
    return res > n ? 0 : res;
};
```

