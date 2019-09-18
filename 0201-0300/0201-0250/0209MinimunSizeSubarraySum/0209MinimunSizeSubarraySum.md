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
