# 231. Power of Two

Given an integer, write a function to determine if it is a power of two.

**Example 1:**

```
Input: 1
Output: true 
Explanation: 20 = 1
```

**Example 2:**

```
Input: 16
Output: true
Explanation: 24 = 16
```

**Example 3:**

```
Input: 218
Output: false
```

##### 2019.09.18

##### 	我的思路：

##### 方法1：

​	递归

```javascript
var isPowerOfTwo = function(n) {
    if (n == 1) {
        return true;
    }

    if (!n || n % 2 !== 0) {
        return false;
    }
    
    return isPowerOfTwo(n / 2);
};
```

##### 方法2：

​	迭代

````javascript
var isPowerOfTwo = function(n) {
    if (!n || n < 0) {
        return false;
    }
    while (n !== 1) {
        if (n % 2 !== 0) {
            return false;
        }
        n /= 2;
    }
    return true;
}
````

##### 别人的方法：

​		位运算，2的幂肯定是正数，并且只有一位是1，所以n-1为下面每一位都是1，交的结果就是0

````javascript
var isPowerOfTwo = function(n) {
    return (n > 0) && !(n & n - 1)
}
````

