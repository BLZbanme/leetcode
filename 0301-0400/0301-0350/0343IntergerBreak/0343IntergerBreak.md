# 343. Integer Break

Given a positive integer *n*, break it into the sum of **at least** two positive integers and maximize the product of those integers. Return the maximum product you can get.

**Example 1:**

```
Input: 2
Output: 1
Explanation: 2 = 1 + 1, 1 × 1 = 1.
```

**Example 2:**

```
Input: 10
Output: 36
Explanation: 10 = 3 + 3 + 4, 3 × 3 × 4 = 36.
```

**Note**: You may assume that *n* is not less than 2 and not larger than 58.

##### 2020.01.06

##### 	我的思路：

​	dp状态转移方程是找到当前数值i的对应的dp和数值j对应dp乘积的最大值。这样会出现一个问题，就是当i或j为2或者3时，他们的拆分的乘积是没有他们自身大的，所以我增加了几个比较的判断，导致效率比较低。

```javascript
var integerBreak = function(n) {
    let dp = new Array(n + 1).fill(0);
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j < i; j++) {
            dp[i] = Math.max(dp[i], Math.max(dp[j], j) * Math.max(dp[i - j], i - j));
        }
    }
    return dp[n];
};
```

##### 别人的写：

​	dp，别人有3处精妙的地方

1. 给dp数组赋初始值时，只把```1~n-1```项赋成对应值，最后的第n项置于0
2. ```dp[i] = Math.max(dp[i], dp[j] * dp[i - j]);```直接把dp值这样赋，这样因为1中把dp初值赋成下标值了，所以等于把`dp[2]=2和dp[3]=3`已经赋了。同时由于第n项置于0了，这样输入为2或者3时不会出错。
3. 内层循环中`j <= i - j`，这样可以少遍历一半

```javascript
var integerBreak = function(n) {
    let dp = new Array(n + 1);
    
    for (let i = 1; i < n; i++) {
        dp[i] = i;
    }
    dp[n] = 0;

    for (let i = 2; i <= n; i++) {
        for (let j = 1; j <= i - j; j++) {
            dp[i] = Math.max(dp[i], dp[j] * dp[i - j]);
        }
    }
    return dp[n];
};
```

#### 2020.07.30

##### redo

##### n<sup>2</sup>的dp

```javascript
var integerBreak = function(n) {
    if (n <= 3) {
        return n - 1;
    }
    const dp = Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    dp[3] = 3;
    for (let i = 4; i <= n; i++) {
        for (let j = 1; j <= (i >> 1); j++) {
            dp[i] = Math.max(dp[i], dp[j] * dp[i - j]);
        }
    }

    return dp[n];
};
```

##### n的dp

```javascript
var integerBreak = function(n) {
    if (n < 4) {
        return n - 1;
    }

    const dp = Array(n + 1);
    dp[0] = 0;
    dp[1] = 0;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = Math.max(Math.max(2 * (i - 2),  2 * dp[i - 2]), Math.max(3 * (i - 3), 3 * dp[i - 3]));
    }

    return dp[n];
}
```

##### 数学方法

```javascript
var integerBreak = function(n) {
    if (n < 4) {
        return n - 1;
    }
    let p = Math.floor(n / 3);
    let q = n % 3;
    if (!q) {
        return 3 ** p;
    }
    else if (q == 1) {
        return 3 ** (p - 1) * 4;
    }
    else {
        return 3 ** p * 2;
    }
}
```

