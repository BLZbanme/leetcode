# 322. Coin Change

You are given coins of different denominations and a total amount of money *amount*. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return `-1`.

**Example 1:**

```
Input: coins = [1, 2, 5], amount = 11
Output: 3 
Explanation: 11 = 5 + 5 + 1
```

**Example 2:**

```
Input: coins = [2], amount = 3
Output: -1
```

**Note**:
You may assume that you have an infinite number of each kind of coin.

##### 2020.01.02

##### 	我的思路：

​		dp，一开始我把问题想复杂了，我想着可能还存在coins中有0的存在，做了一次去0处理

```javascript
var coinChange = function(coins, amount) {
    coins = coins.filter(e => e);
    if (!coins.length) {
        return -1;
    }
    if (!amount) {
        return 0;
    }
    let dp = new Array(amount + 1).fill(0);
    for (let i = 1; i <= amount; i++) {
        let min = Infinity;
        for (let e of coins) {
            if (i - e >= 0 && dp[i - e] !== -1) {
                min = Math.min(min, dp[i - e] + 1);
            }
        }
        dp[i] = min === Infinity ? -1 : min;
    }
    return dp[amount];
};
```

 		最后改了后：

```javascript
var coinChange = function(coins, amount) {
    if (!amount) {
        return 0;
    }
    let dp = new Array(amount + 1).fill(0);
    for (let i = 1; i <= amount; i++) {
        let min = Infinity;
        for (let e of coins) {
            if (i - e >= 0 && dp[i - e] !== -1) {
                min = Math.min(min, dp[i - e] + 1);
            }
        }
        dp[i] = min === Infinity ? -1 : min;
    }
    return dp[amount];
};
```

##### 别人的写法：

​     别人的dp比我好一点，我是每一步都判断了是否为-1，别人直接在dp数组赋初值的时候就想好通过判断`dp[amount] > amount ? -1 : dp[amount]`来判断是否

```javascript
var coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let e of coins) {
            if (e <= i) {
                dp[i] = Math.min(dp[i], dp[i - e] + 1);
            }
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
}
```

