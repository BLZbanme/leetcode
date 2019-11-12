# 326. Power of Three

Given an integer, write a function to determine if it is a power of three.

**Example 1:**

```
Input: 27
Output: true
```

**Example 2:**

```
Input: 0
Output: false
```

**Example 3:**

```
Input: 9
Output: true
```

**Example 4:**

```
Input: 45
Output: false
```

**Follow up:**
Could you do it without using any loop / recursion?

##### 2019.10.16

##### 	我的思路：

循环

```javascript
var isPowerOfThree = function(n) {
    while (n > 1) {
        if (n % 3) {
            return false;
        } 
        n /= 3;
    }
    return n === 1;
};
```

##### 别人的写法：

用最大的3的幂除当前值

```javascript
let maxPow3 = Math.pow(3, Math.floor((Math.log(Number.MAX_SAFE_INTEGER) / Math.log(3))));

var isPowerOfThree = function(n) {
    return (n > 0) && (maxPow3 % n == 0);
}
```