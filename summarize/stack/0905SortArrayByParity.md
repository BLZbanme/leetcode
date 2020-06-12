# 901. Online Stock Span

Write a class `StockSpanner` which collects daily price quotes for some stock, and returns the *span* of that stock's price for the current day.

The span of the stock's price today is defined as the maximum number of consecutive days (starting from today and going backwards) for which the price of the stock was less than or equal to today's price.

For example, if the price of a stock over the next 7 days were `[100, 80, 60, 70, 60, 75, 85]`, then the stock spans would be `[1, 1, 1, 2, 1, 4, 6]`.

**Example 1:**

```
Input: ["StockSpanner","next","next","next","next","next","next","next"], [[],[100],[80],[60],[70],[60],[75],[85]]
Output: [null,1,1,1,2,1,4,6]
Explanation: 
First, S = StockSpanner() is initialized.  Then:
S.next(100) is called and returns 1,
S.next(80) is called and returns 1,
S.next(60) is called and returns 1,
S.next(70) is called and returns 2,
S.next(60) is called and returns 1,
S.next(75) is called and returns 4,
S.next(85) is called and returns 6.

Note that (for example) S.next(75) returned 4, because the last 4 prices
(including today's price of 75) were less than or equal to today's price.
```

**Note:**

1. Calls to `StockSpanner.next(int price)` will have `1 <= price <= 10^5`.
2. There will be at most `10000` calls to `StockSpanner.next` per test case.
3. There will be at most `150000` calls to `StockSpanner.next` across all test cases.
4. The total time limit for this problem has been reduced by 75% for C++, and 50% for all other languages.

##### 2020.06.12

##### 	我的思路：

1. 用一个count属性来记录next操作的次数。
2. 单调栈stack维护一个递减栈，递减栈中存储的是一个包括它的值（value）和它是多少次next操作的值(count)。
3. 每一次next操作，如果元素比栈顶元素的value值要大，说明他的递增序列还需要继续判断，对栈内元素出栈，直到栈顶元素的值大于当前next操作的当前值。
4. 当栈顶元素大于next操作的当前值时，说明递增序列是从栈顶元素的下一next操作，到当前next操作，所以他们count的差就是递增的天数

​	时间复杂度O(n)，空间复杂度O(n)。

```javascript
var StockSpanner = function() {
    this.stack = [];
    this.count = 0;
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    while (this.stack.length && price >=  this.stack[this.stack.length - 1].value) {
        this.stack.pop();
    }
    let tmp = this.stack.length ? this.stack[this.stack.length - 1].index : 0;
    this.count++;
    this.stack.push({
        index: this.count,
        value: price
    });
    return this.count - tmp;
};
```

##### 别人的思路：

维护两个单调栈，其中weights存放每个栈内元素到它下面的元素的相差天数。

```javascript
var StockSpanner = function() {
    this.prices = [];
    this.weights = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    let w = 1;
    while (this.prices.length && this.prices[this.prices.length - 1] <= price) {
        this.prices.pop();
        w += this.weights.pop();
    }
    this.prices.push(price);
    this.weights.push(w);
    return w;
};
```

