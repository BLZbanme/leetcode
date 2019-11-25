# 367. Valid Perfect Square

Given a positive integer *num*, write a function which returns True if *num* is a perfect square else False.

**Note:** **Do not** use any built-in library function such as `sqrt`.

**Example 1:**

```
Input: 16
Output: true
```

**Example 2:**

```
Input: 14
Output: false
```

##### 2019.11.25

#### 	我的思路：

​	O(n)

```javascript
var isPerfectSquare = function(num) {
    for (let i = 0; i <= num; i++) {
        let tmp = i * i;
        if (tmp < num) {
            continue;
        }
        else if (tmp === num) {
            return true;
        }
        else {
            return false;
        }
    }
};
```

#### 别人的方法：

##### 方法1：

二分查找O(log(n))

```javascript
var isPerfectSquare = function(num) {
    let low = 1;
    let high = num;
    while (low <= high) {
        let mid = (low + high) >>> 1;
        let tmp = mid * mid;
        if (tmp > num) {
            high = mid - 1;
        }
        else if (tmp < num) {
            low = mid + 1;
        }
        else {
            return true;
        }
    }
    return false;
}

```

##### 方法2：

O(sqrt(n))

```1+3+...+(2n-1) = (2n-1 + 1)*n/2 = n*n```

```javascript
var isPerfectSquare = function(num) {
    let i = 1;
    while (num > 0) {
        num -= i;
        i += 2;
    }
    return !num;
}
```

