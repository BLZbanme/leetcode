# 441. Arranging Coins

You have a total of *n* coins that you want to form in a staircase shape, where every *k*-th row must have exactly *k* coins.

Given *n*, find the total number of **full** staircase rows that can be formed.

*n* is a non-negative integer and fits within the range of a 32-bit signed integer.

**Example 1:**

```
n = 5

The coins can form the following rows:
¤
¤ ¤
¤ ¤

Because the 3rd row is incomplete, we return 2.
```



**Example 2:**

```
n = 8

The coins can form the following rows:
¤
¤ ¤
¤ ¤ ¤
¤ ¤

Because the 4th row is incomplete, we return 3.
```

##### 2019.12.17

#### 	我的思路：

##### 	无敌二分查找！我的思路是，需要找的行数肯定在我写的```0~sqrt(n * 2)```之间，然后二分查找

复杂度O(logn)

```javascript
var arrangeCoins = function(n) {
    let lo = 0;
    let hi = Math.floor(Math.sqrt(n * 2));
    while (lo <= hi) {
        let mid = Math.floor(lo + Math.floor((hi - lo) / 2));
        let tmpSum = mid * (mid + 1) / 2;
        let tmp = tmpSum + mid + 1;
        if (n === tmp) {
            return mid + 1;
        }
        else if (n > tmpSum && n < tmp) {
            return mid;
        }
        else if (n < tmpSum) {
            hi = mid - 1;
        }
        else {
            lo = mid + 1;
        }
    }
    return lo - 1;
};
```

#### 别人的思路：

数学方法，我懒得写了