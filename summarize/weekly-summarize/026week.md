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

##### 我的思路：

##### 方法1（超时了）：

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

##### 方法2：

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

# 331. Verify Preorder Serialization of a Binary Tree

One way to serialize a binary tree is to use pre-order traversal. When we encounter a non-null node, we record the node's value. If it is a null node, we record using a sentinel value such as `#`.

```
     _9_
    /   \
   3     2
  / \   / \
 4   1  #  6
/ \ / \   / \
# # # #   # #
```

For example, the above binary tree can be serialized to the string `"9,3,4,#,#,1,#,#,2,#,6,#,#"`, where `#` represents a null node.

Given a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree. Find an algorithm without reconstructing the tree.

Each comma separated value in the string must be either an integer or a character `'#'` representing `null` pointer.

You may assume that the input format is always valid, for example it could never contain two consecutive commas such as `"1,,3"`.

**Example 1:**

```
Input: "9,3,4,#,#,1,#,#,2,#,6,#,#"
Output: true
```

**Example 2:**

```
Input: "1,#"
Output: false
```

**Example 3:**

```
Input: "9,#,#,1"
Output: false
```

##### 2020.01.04

##### 我的思路：

​		利用的是栈来进行先序遍历，基础！

```javascript
var isValidSerialization = function(preorder) {
    let orderArray = preorder.split(',');
    let cur = orderArray[0];
    let stack = [];
    let i = 0;
    while (stack.length || (cur != '#' && cur)) {
        while (cur != '#' && cur) {
            stack.push(cur);
            cur = orderArray[++i];
        }
        stack.pop();
        if (i < orderArray.length - 1) {
            cur = orderArray[++i];
        }
        else {
            return false;
        }
    }
    return i == orderArray.length - 1 || i == orderArray.length;
};
```

##### 别人的写法：

​		根据二叉树的入度等于出度，因为此题的场景中，所有非空结点的出度都是2

```javascript
var isValidSerialization = function(preorder) {
    let orderArray = preorder.split(',');
    let diff = 1;
    orderArray.forEach(e => {
        if (--diff < 0) {
            return false;
        }
        if (e != '#') {
            diff += 2;
        }
    });
    return !diff;
}
```