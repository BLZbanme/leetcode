#  50. Pow(x, n)

Implement [pow(*x*, *n*)](http://www.cplusplus.com/reference/valarray/pow/), which calculates *x* raised to the power *n* (xn).

**Example 1:**

```
Input: 2.00000, 10
Output: 1024.00000
```

**Example 2:**

```
Input: 2.10000, 3
Output: 9.26100
```

**Example 3:**

```
Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
```

**Note:**

- -100.0 < *x* < 100.0
- *n* is a 32-bit signed integer, within the range [−2<sup>31</sup>, 2<sup>31</sup> − 1]

##### 2019.06.26

##### 	我的思路：

##### 	方法1：

​	直接调幂运算。。

```javascript
var myPow = function(x, n) {
    return x ** n;
};
```

##### 别人的思路：

##### 	方法2：

​	递归，把幂运算x的n次幂转换成的 x*2 的n/2次幂之类的，n/2不能整除就提出一个x来

​	时间复杂度O(logn)

```javascript
var myPow = function(x, n){
    if(n == 0){
        return 1;
    }
    if(n < 0){
        n = -n;
        x = 1 / x;
    }
    return (n % 2 == 0) ? myPow(x * x, n / 2) : x * myPow(x * x, parseInt(n / 2));
}
```

```javascript
var myPow = function(x, n){
    if(n == 0){
        return 1;
    }
    let res = myPow(x, parseInt(n / 2));
    return (n % 2 == 0) ? res * res : n < 0 ? res * res * (1 / x) : res * res * x;
}
```

##### 	方法3：

​	位运算，实际上也是用位运算来实现判断N是奇数还是偶数，把x慢慢翻倍。由于取n的绝对值时会整形移除，所以单独判断了-2147483648

```javascript
var myPow = function(x, n){
    if(n == 0){
        return 1;
    }
    if(n == -2147483648){
        x = Math.abs(x);
        n = 2147483647;
        let res = 1;
        while(n > 0){
            if(n & 1){
                res *= x;
            }
            x *= x;
            n >>= 1;
        }
        return 1 / (res * x);
    }
    let N = Math.abs(n);
    let res = 1;
    while(N > 0){
        if(N & 1){
            res *= x;
        }
        x *= x;
        N >>= 1;
    }
    return n < 0 ? 1 / res : res;
}
```

