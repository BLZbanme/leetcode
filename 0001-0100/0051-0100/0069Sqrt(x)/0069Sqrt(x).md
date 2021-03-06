# 69. Sqrt(x)

Implement `int sqrt(int x)`.

Compute and return the square root of *x*, where *x* is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

**Example 1:**

```
Input: 4
Output: 2
```

**Example 2:**

```
Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.
```

#### 2019.07.11

##### 	我的思路：

​	二分查找

```javascript
var mySqrt = function(x) {
    if (x <= 1) {
        return x;
    }
    let lo = 0;
    let hi = parseInt(x / 2);
    while (lo <= hi) {
        let mid = parseInt((lo + hi) / 2);
        let mid2 = mid ** 2;
        if (mid2 <= x) {
            if ((mid + 1) ** 2 > x) {
                return mid;
            }
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
}
```

#### 2020.07.13

##### redo

二分查找

```javascript
var mySqrt = function(x) {
    let lo = 0;
    let hi = x;
    let result = 0;
    while (lo <= hi) {
        let mid = lo + ((hi - lo) >> 1);
        if (mid * mid <= x) {
            result = mid;
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }

    return result;
};
```

#### 2021.02.07

##### redo

```typescript
function mySqrt(x: number): number {
    let lo = 0;
    let hi = x;
    while (lo < hi) {
        let mid = lo + ((hi - lo) >> 1) + 1;
        let cur = mid * mid;
        if (cur === x) {
            return mid;
        }
        else if (cur < x) {
            lo = mid;
        }
        else {
            hi = mid - 1;
        }
    }
    return lo;
};
```

