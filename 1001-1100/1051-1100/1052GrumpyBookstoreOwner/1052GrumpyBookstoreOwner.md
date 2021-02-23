# 1052. Grumpy Bookstore Owner

Today, the bookstore owner has a store open for `customers.length` minutes.  Every minute, some number of customers (`customers[i]`) enter the store, and all those customers leave after the end of that minute.

On some minutes, the bookstore owner is grumpy.  If the bookstore owner is grumpy on the i-th minute, `grumpy[i] = 1`, otherwise `grumpy[i] = 0`.  When the bookstore owner is grumpy, the customers of that minute are not satisfied, otherwise they are satisfied.

The bookstore owner knows a secret technique to keep themselves not grumpy for `X` minutes straight, but can only use it once.

Return the maximum number of customers that can be satisfied throughout the day.

 

**Example 1:**

```
Input: customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], X = 3
Output: 16
Explanation: The bookstore owner keeps themselves not grumpy for the last 3 minutes. 
The maximum number of customers that can be satisfied = 1 + 1 + 1 + 1 + 7 + 5 = 16.
```

 

**Note:**

- `1 <= X <= customers.length == grumpy.length <= 20000`
- `0 <= customers[i] <= 1000`
- `0 <= grumpy[i] <= 1`

#### 2021.02.04

##### 	我的思路：

两次遍历的滑动窗口

```javascript
function maxSatisfied1(customers: number[], grumpy: number[], X: number): number {
    let cur = 0;
    const n = customers.length;
    for (let i = 0; i < n; i++) {
        if (i < X || i >= X && !grumpy[i]) {
            cur += customers[i];
        }
    }

    let max = cur;
    for (let i = X; i < customers.length; i++) {
        grumpy[i - X] && (cur -= customers[i - X]);
        grumpy[i] && (cur += customers[i]);
        max = Math.max(max, cur);
    }
    return max;
};
```

##### 别人的思路：

一次遍历的滑动窗口

```typescript
var maxSatisfied = (customers, grumpy, X) => {
    let res = 0;
    let max = 0;
    let tmp = 0;
    let left = 0;
    for (let right = 0; right < customers.length; right++) {
        grumpy[right] || (res += customers[right]);
        grumpy[right] && (tmp += customers[right]);
        if (right - left + 1 > X) {
            grumpy[left] && (tmp -= customers[left]);
            left++;
        }
        max = Math.max(max, tmp);
    }
    return res + max;
}
```

