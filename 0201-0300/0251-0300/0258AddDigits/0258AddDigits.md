# 258. Add Digits

Given a non-negative integer `num`, repeatedly add all its digits until the result has only one digit.

**Example:**

```
Input: 38
Output: 2 
Explanation: The process is like: 3 + 8 = 11, 1 + 1 = 2. 
             Since 2 has only one digit, return it.
```

**Follow up:**
Could you do it without any loop/recursion in O(1) runtime?

##### 2019.09.28

##### 	我的思路：

​		递归的写法

```javascript
var addDigits = function(num) {
    if (num < 10) {
        return num;
    }
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return addDigits(sum);
};
```

##### 别人的方法：

 O(1)，和有如下几种可能

1. dr(n) = 0，当数字为0时
2. 当数字为9的非0倍数时，dr(n) = 9；
3. 当数组为其他数时，dr(n) = n mod 9

所以得到如下结果：

```javascript
var addDigits = function(num) {
    return 1 + (num - 1) % 9;
}
```

