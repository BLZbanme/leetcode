# 309. Best Time to Buy and Sell Stock with Cooldown

Say you have an array for which the *i*th element is the price of a given stock on day *i*.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times) with the following restrictions:

- You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).
- After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)

**Example:**

```
Input: [1,2,3,0,2]
Output: 3 
Explanation: transactions = [buy, sell, cooldown, buy, sell]
```

##### 2019.01.03

##### 	我的思路：

##### 	方法1（超时了）：

​	主要用的是矩阵连乘动态规划的思想，用二维动态数组，来存储从i到j的各种情况最大值

```javascript
var maxProfit = function(prices) {
    const N = prices.length;
    if (!N) {
        return 0;
    }
    const dp = new Array(N - 1);
    for (let i = 0; i <= N; i++) {
        dp[i] = new Array(N).fill(0);
    }

    for (let i = 1; i < N; i++) {
        for (let j = 0; j + i < N; j++) {
            dp[j][j + i] = Math.max(dp[j][j + i], prices[i + j] - prices[j], dp[j + 1][i + j], dp[j][j + i - 1]);
            for (let k = j + 1; k < i + j - 1; k++) {
                dp[j][j + i] = Math.max(dp[j][j + i], dp[j][k - 1] + dp[k + 1][j + i]);
            }
        }
    }
    return dp[0][N - 1];
};
```

##### 别人的写法：

##### 	方法2：

​	利用状态机和动态规划思想，具体解释见[leetcode](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/discuss/75928/Share-my-DP-solution-(By-State-Machine-Thinking))

```javascript
var maxProfit = function(prices) {
    const N = prices.length;
    if (!N) {
        return 0;
    }
    const holds = new Array(N);
    const solds = new Array(N);
    const rests = new Array(N);
    holds[0] = -prices[0];
    solds[0] = 0;
    rests[0] = 0;
    for (let i = 1; i < N; i++) {
        solds[i] = holds[i - 1] + prices[i];
        holds[i] = Math.max(holds[i - 1], rests[i - 1] - prices[i]);
        rests[i] = Math.max(rests[i - 1], solds[i - 1]);
    }
    return Math.max(solds[N - 1], rests[N - 1])
}
```

##### 方法2的简化：

​      就是常见的一维动态规划的优化方法，用一个变量代替一个dp数组。

```javascript
var maxProfit = function(prices) {
    const N = prices.length;
    if (!N) {
        return 0;
    }
    let hold = -prices[0];
    let sold = 0;
    let rest = 0;
    for (let i = 1; i < N; i++) {
        let preSold = sold;
        sold = hold + prices[i];
        hold = Math.max(hold, rest - prices[i]);
        rest = Math.max(preSold, rest);
    }
    return Math.max(sold, rest);
}
```

