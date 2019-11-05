# 263. Ugly Number

Write a program to find the `n`-th ugly number.

Ugly numbers are **positive numbers** whose prime factors only include `2, 3, 5`. 

**Example:**

```
Input: n = 10
Output: 12
Explanation: 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.
```

**Note:**  

1. `1` is typically treated as an ugly number.
2. `n` **does not exceed 1690**.

##### 2019.11.05

##### 	我的思路：

没写出来

##### 别人的方法：

动态规划，每次判断2，3，5指针分别只向的那个丑数的倍数的最小值。

时间复杂度O(n)

```javascript
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let dp = new Array(n);
    dp[0] = 1;
    let twoNum = 0;
    let threeNum = 0;
    let fiveNum = 0;
    for (let i = 1; i < n; i++) {
        dp[i] = Math.min(dp[twoNum] * 2, dp[threeNum] * 3, dp[fiveNum] * 5);
        if (dp[i] === dp[twoNum] * 2) {
            twoNum++;
        }
        if (dp[i] === dp[threeNum] * 3) {
            threeNum++;
        }
        if (dp[i] === dp[fiveNum] * 5) {
            fiveNum++;
        }
    }
    return dp[n - 1];
};
```

