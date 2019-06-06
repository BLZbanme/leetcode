#### 问题描述

​	Given a 32-bit signed integer, reverse digits of an integer.

#### Example

```
Input: 123
Output: 321
```

```
Input: -123
Output: -321
```

```
Input: 120
Output: 21
```

**Note:**
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−2<sup >31</sup >,  2<sup >31</sup > − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

#### 我的解决方法	

##### 2019.05.14

​	我的思路：输入数学x每次对10取模，依次得到的结果拼起来就是这个数字。然后再拼正负号，最后判断是否越界。

​	时间复杂度O(log<sub>10</sub>n) = O(logn)。

```javascript
var reverse = function(x) {
    let result = '';
    let pos = '';
    if(x < 0){
        x = -x;
        pos = '-';
    }
    while(x >= 10){
        result += x % 10;
        x = Math.floor(x / 10);
    }
    result += x;
    let num = Number(pos + result);
    if(num > 2147483647 || num < -2147483648){
        return 0;
    }
    return num;
};
```

