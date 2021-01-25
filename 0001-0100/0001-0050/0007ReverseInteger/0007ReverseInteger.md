# 7.Reverse Integer

Given a signed 32-bit integer `x`, return `x` *with its digits reversed*. If reversing `x` causes the value to go outside the signed 32-bit integer range `[-231, 231 - 1]`, then return `0`.

**Assume the environment does not allow you to store 64-bit integers (signed or unsigned).**

 

**Example 1:**

```
Input: x = 123
Output: 321
```

**Example 2:**

```
Input: x = -123
Output: -321
```

**Example 3:**

```
Input: x = 120
Output: 21
```

**Example 4:**

```
Input: x = 0
Output: 0
```

 

**Constraints:**

- `-231 <= x <= 231 - 1`

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

#### 2021.01.25

##### redo

注意正负数 取整的区别！

```typescript
function reverse(x: number): number {
    const max = Math.floor((2 ** 31 - 1) / 10);
    const min = Math.ceil((-(2 ** 31)) / 10);
    let res = 0;
    while (x != 0) {
        let tmp = x % 10;
        x = x >= 0 ? Math.floor(x / 10) : Math.ceil(x / 10);
        if (res > max || (res === max && tmp > 7)) return 0;
        if (res < min || (res === min && tmp < -8)) return 0;
        res = res * 10 + tmp;
    }
    return res;
}
```

