# 410. Split Array Largest Sum

Given an array which consists of non-negative integers and an integer *m*, you can split the array into *m* non-empty continuous subarrays. Write an algorithm to minimize the largest sum among these *m* subarrays.

**Note:**
If *n* is the length of array, assume the following constraints are satisfied:

- 1 ≤ *n* ≤ 1000
- 1 ≤ *m* ≤ min(50, *n*)



**Examples:**

```
Input:
nums = [7,2,5,10,8]
m = 2

Output:
18

Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
```

#### 2020.07.25

#### 	我的思路：

没写出来

#### 别人的思路：

##### 动态规划

​		递归

```javascript
var splitArray = function(nums, m) {
    const N = nums.length;
    const dp = Array(N + 1);
    for (let i = 0; i <= N; i++) {
        dp[i] = Array(m + 1).fill(Infinity);
    }

    const sub = Array(N + 1);
    sub[0] = 0;
    for (let i = 0; i < N; i++) {
        sub[i + 1] = sub[i] + nums[i];
    }

    dp[0][0] = 0;

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= Math.min(i, m); j++) {
            for (let k = 0; k < i; k++) {
                dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j - 1], sub[i] - sub[k]))
            }
        }
    }

    return dp[N][m];
};
```
