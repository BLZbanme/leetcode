# 121. Best Time to Buy and Sell Stock

Say you have an array for which the *i*th element is the price of a given stock on day *i*.

If you were only permitted to complete at most one transaction (i.e., buy one and sell one share of the stock), design an algorithm to find the maximum profit.

Note that you cannot sell a stock before you buy one.

**Example 1:**

```
Input: [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
             Not 7-1 = 6, as selling price needs to be larger than buying price.
```

**Example 2:**

```
Input: [7,6,4,3,1]
Output: 0
Explanation: In this case, no transaction is done, i.e. max profit = 0.
```

##### 2019.08.04

##### 	我的思路：

​		很简单，没啥好说的。Kadane's Algorithm

```javascript
var maxProfit = function(prices) {
    let min = Infinity;
    let result = 0;
    prices.forEach(price => {
        if (price < min) {
            min = price;
        }
        else {
            let tmp = price - min;
            if (tmp > result) {
                result = tmp;
            }
        }
    })
    return result;
};
```

##### 别人的写法：

​		本质和我是一样的

````javascript
var maxProfit = function(prices) {
    let maxCur = 0;
    let maxSoFar = 0;
    for (let i = 1, len = prices.length; i < len; i++) {
        maxCur = Math.max(0, maxCur += prices[i] - prices[i - 1]);
        maxSoFar = Math.max(maxCur, maxSoFar);
    }
    return maxSoFar;
}
````

