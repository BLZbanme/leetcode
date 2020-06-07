# 357. Count Numbers with Unique Digits

Given a **non-negative** integer n, count all numbers with unique digits, x, where 0 ≤ x < 10n.

**Example:**

```
Input: 2
Output: 91 
Explanation: The answer should be the total numbers in the range of 0 ≤ x < 100, 
             excluding 11,22,33,44,55,66,77,88,99
```

##### 2020.06.07

#### 	我的思路：

很无聊的题，解题思路略，一开始我用dp数组存储各个n的不重复字符的数，写完发现不需要数组，只需要一个变量，遂改进了下。

```javascript
var countNumbersWithUniqueDigits = function(n) {
    if (!n) {
        return 1;
    }
    n = n > 10 ? 10 : n;
    const dp = new Array(n + 1).fill(0);
    let sum = 10;
    dp[1] = 9;
    for (let i = 2; i <= n; i++) {
        dp[i] = dp[i - 1] * (11 - i);
        sum += dp[i];
    }
    return sum;
};
```

```javascript
var countNumbersWithUniqueDigits = function(n) {
    if (!n) {
        return 1;
    }
    n = n > 10 ? 10 : n;
    let sum = 10;
    let dp = 9;
    for (let i = 2; i <= n; i++) {
        dp *= (11 - i);
        sum += dp;
    }
    return sum;
};
```
