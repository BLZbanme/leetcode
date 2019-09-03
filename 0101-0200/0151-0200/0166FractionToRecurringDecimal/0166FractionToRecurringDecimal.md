# 166. Fraction to Recurring Decimal

Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.

If the fractional part is repeating, enclose the repeating part in parentheses.

**Example 1:**

```
Input: numerator = 1, denominator = 2
Output: "0.5"
```

**Example 2:**

```
Input: numerator = 2, denominator = 1
Output: "2"
```

**Example 3:**

```
Input: numerator = 2, denominator = 3
Output: "0.(6)"
```

##### 2019.09.03

##### 	我的思路：

​		用数组记录被次的被除数，如果被除数为0说明运算结束了，直接拼出结果来。如果被除数重复了，找到被除数在数组中的下标，循环就从这个下标开始！

​		看了下这个思路就是官方解法的思路。

```javascript
var fractionToDecimal = function(numerator, denominator) {
    let pre = numerator / denominator;
    let aft = numerator % denominator;
    if (!aft) {
        return `${pre}`;
    }

    let isPosstive = true;
    if (pre < 0) {
        isPosstive = false;
        aft = Math.abs(aft);
        denominator = Math.abs(denominator);
    }
    pre = Math.floor(Math.abs(pre));

    let arr = [];
    let str = "";
    while (aft !== 0 && arr.indexOf(aft) === -1) {
        arr.push(aft);
        aft *= 10;
        str += Math.floor(aft / denominator);
        aft %= denominator;
    }
    
    if (!aft) {
        return `${isPosstive ? "" : "-"}${pre}.${str}`; 
    }
    let index = arr.indexOf(aft);
    return `${isPosstive ? "" : "-"}${pre}.${str.slice(0, index)}(${str.slice(index)})`;
};

```

