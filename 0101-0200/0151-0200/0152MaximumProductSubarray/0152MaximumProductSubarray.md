# 152. Maximum Product Subarray

Given an integer array `nums`, find the contiguous subarray within an array (containing at least one number) which has the largest product.

**Example 1:**

```
Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
```

**Example 2:**

```
Input: [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
```

##### 2019.09.02

##### 	我的思路：

##### 		方法1：

​		首先一发暴力遍历，时间复杂度O(n<sup>2</sup>)

```javascript
var maxProduct = function(nums) {
    if (!nums || nums.length == 0) {
        return;
    }
    let result = -Infinity;
    const N = nums.length;
    for (let i = 0; i < N; i++) {
        let tmp = 1;
        for (let j = i; j < N; j++) {
            tmp *= nums[j];
            result = Math.max(result, tmp);
        }
    }
    return result;
};
```

##### 		方法2：

​		O(n<sup>2</sup>)版的dp，我的思路依次计算1项、2项、...n项连乘积的最大值。但其实这个思路还是蛮垃圾的。

````javascript
var maxProduct = function(nums) {
    const N = nums.length;
    let dp = Array.from(nums);
    let result = Math.max(...nums);
    for (let i = 1; i < N; i++) {
        for (let j = 0; j + i < N; j++) {
            dp[j] = nums[j] * dp[j + 1];
            result = Math.max(result, dp[j]);
        }
    }
    return result;
}
````

##### 别人的写法:

​		O(n)的dp。这题的关键是递推方程里面当前的最大值，应该是当前值，最大值 * 当前值， 最小值 *当前值，这三者中得出。所以需要两个dp数组，一个存储到此最大值，一个存储最小值。又由于dp数组只和前一项有关，所以直接用max和min区分。

````javascript
var maxProduct = function(nums) {
    let result = nums[0];
    let max = result;
    let min = result;
    const N = nums.length;
    for (let i = 1; i < N; i++) {
        let tmp1 = max * nums[i];
        let tmp2 = min * nums[i];
        max = Math.max(...[nums[i], tmp1, tmp2]);
        min = Math.min(...[nums[i], tmp1, tmp2]);
        result = Math.max(result, max);
    }
    return result;
}
````

