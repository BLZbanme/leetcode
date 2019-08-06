# 123. Best Time to Buy and Sell Stock III

Say you have an array for which the *i*th element is the price of a given stock on day *i*.

Design an algorithm to find the maximum profit. You may complete at most *two* transactions.

**Note:** You may not engage in multiple transactions at the same time (i.e., you must sell the stock before you buy again).

**Example 1:**

```
Input: [3,3,5,0,0,3,1,4]
Output: 6
Explanation: Buy on day 4 (price = 0) and sell on day 6 (price = 3), profit = 3-0 = 3.
             Then buy on day 7 (price = 1) and sell on day 8 (price = 4), profit = 4-1 = 3.
```

**Example 2:**

```
Input: [1,2,3,4,5]
Output: 4
Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
             Note that you cannot buy on day 1, buy on day 2 and sell them later, as you are
             engaging multiple transactions at the same time. You must sell before buying again.
```

**Example 3:**

```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

##### 2019.08.06

##### 我的方法：

​		失败内存溢出了.

​		我的思路是：用一个二维dp数组存储，```dp[i][j]```表示从i到j的只买卖一次的利润，这样dp里面能存储所以i到j的一次买卖的利润。然后最后一次遍历，把prices划分为两边，得到两边和最大的值就是结果。

```javascript
var maxProfit = function(prices) {
    if (!prices || !prices.length) {
        return 0;
    }
    const N = prices.length;
    let dp = new Array(N);
    for (let i = 0; i < N; i++) {
        dp[i] = new Array(N);
        dp[i][i] = 0;
    }

    for (let i = 1; i < N; i++) {
        for (let j = 0; j + i < N; j++) {
            dp[j][j + i] = Math.max(dp[j][j + i - 1], prices[j + i] - Math.min(...prices.slice(j, j + i))); 
        }
    }

    let result = prices[N - 1] - prices[0];
    for (let i = 0; i < N - 1; i++) {
        result = Math.max(result, dp[0][i] + dp[i + 1][N - 1]);
    }
    return result;
};
```

##### 	别人的写法：

##### 	dp类：

​	递推关系：(我自己写的问题就是判断后半块写的太复杂了)

​	```dp[k, i] = max(dp[k, i-1], prices[i] - prices[j] + dp[k-1, j-1]), j=[0..i-1]```

###### 	写法1：

​		这种写法的min取值非常巧妙

​		时间复杂度O(kn^2)，空间复杂度 O(kn).

````javascript
var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let times = 2;
    let dp = new Array(times + 1);
    for (let i = 0; i <= times; i++) {
        dp[i] = new Array(N).fill(0);
    }
    for (let k = 1; k <= times; k++) {
        for (let i = 1; i < N; i++) {
            let min = prices[0];
            for (let j = 1; j <= i; j++) {
                min = Math.min(min, prices[j] - dp[k - 1][j - 1]);
            }
            dp[k][i] = Math.max(dp[k][i - 1], prices[i] - min);
        }
    }
    return dp[2][N - 1];
}
````

​	写法2：

​		时间复杂度O(kn)，空间复杂度 O(kn).

```javascript


var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let times = 2;
    let dp = new Array(times + 1);
    for (let i = 0; i <= times; i++) {
        dp[i] = new Array(N).fill(0);
    }
    for (let k = 1; k <= times; k++) {
        let min = prices[0];
        for (let i = 1; i < N; i++) {
            min = Math.min(min, prices[i] - dp[k - 1][i - 1]);
            dp[k][i] = Math.max(dp[k][i - 1], prices[i] - min);
        }
    }
    return dp[2][N - 1];
}

```

​	写法3：

````javascript
var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let dp = new Array(3);
    for (let i = 0; i < 3; i++) {
        dp[i] = new Array(N).fill(0);
    }
    let min = new Array(3).fill(prices[0]);
    for (let i = 1; i < N; i++) {
        for (let k = 1; k <= 2; k++) {
            min[k] = Math.min(min[k], prices[i] - dp[k - 1][i - 1]);
            dp[k][i] = Math.max(dp[k][i - 1], prices[i] - min[k]);
        }
    }
    return dp[2][N - 1];
}
````

​	写法4：

````javascript
var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let dp = new Array(3).fill(0);
    let min = new Array(3).fill(prices[0]);
    for (let i = 1; i < N; i++) {
        for (let k = 1; k <= 2; k++) {
            min[k] = Math.min(min[k], prices[i] - dp[k - 1]);
            dp[k] = Math.max(dp[k], prices[i] - min[k]);
        }
    }
    return dp[2];
}
````

​	写法5：终极进化，最优美的

```javascript
var maxProfit = function(prices) {
    let buyOne = -Infinity;
    let butTwo = -Infinity;
    let sellOne = 0;
    let sellTwo = 0;
    for (let price of prices) {
        buyOne = Math.max(buyOne, -price);
        sellOne = Math.max(sellOne, buyOne + price);
        butTwo = Math.max(butTwo, sellOne - price);
        sellTwo = Math.max(sellTwo, butTwo + price);
    }
    return sellTwo;
}
```

#### 总结：这题看完别人的所以写法感觉很怀疑人生，非常沮丧。

##### 遍历划分类：

​		写法1：暴力划分

```javascript
var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let res = 0;
    let cutMax = 0;
    for (let cut = 0; cut < N; cut++) {
        let preMin = prices[0];
        let preMax = 0;
        for (let i = 1; i < cut; i++) {
            preMax = Math.max(preMax, prices[i] - preMin);
            preMin = Math.min(preMin, prices[i]);
        }
        cutMax = preMax;
        
        preMin = prices[cut];
        preMax = 0;
        for (let i = cut + 1; i < N; i++) {
            preMax = Math.max(preMax, prices[i] - preMin);
            preMin = Math.min(preMin, prices[i]);
        }
        cutMax += preMax;
        res = Math.max(res, cutMax);
    }
    return res;
}
```

​		写法2： 先分别缓存从前到后，从后到前的利润。然后遍历一遍把prices划分为前后两边，算出前后两边的最大和

###### 		注：这种写法跟我自己写的思路是一值的，但是由于我这次的dp写的很烂，导致最后内存爆了

```javascript
var maxProfit = function(prices) {
    const N = prices.length;
    if (N <= 1) {
        return 0;
    }
    let maxPre = new Array(N);
    let maxLast = new Array(N);
    maxPre[0] = 0;
    let minCur = prices[0];
    for (let i = 1; i < N; i++) {
        maxPre[i] = Math.max(maxPre[i - 1], prices[i] - minCur);
        minCur = Math.min(minCur, prices[i]);
    }

    maxLast[N - 1] = 0;
    let maxCur = prices[N - 1];
    for (let i = N - 2; i >= 0; i--) {
        maxLast[i] = Math.max(maxLast[i + 1], maxCur - prices[i]);
        maxCur = Math.max(maxCur, prices[i]);
    }

    let res = maxLast[0];
    for (let cut = 1; cut < N; cut++) {
        res = Math.max(res, maxPre[cut - 1] + maxLast[cut]);
    }
    return res;
}
```

​	
