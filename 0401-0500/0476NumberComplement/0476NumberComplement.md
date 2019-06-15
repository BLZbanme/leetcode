Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

**Note:**

1. The given integer is guaranteed to fit within the range of a 32-bit signed integer.
2. You could assume no leading zero bit in the integer’s binary representation.

**Example 1:**

```
Input: 5
Output: 2
Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.
```

**Example 2:**

```
Input: 1
Output: 0
Explanation: The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.
```

##### 2019.06.13

##### 	我的思路：

​	将num转成2进制字符串（会自动省略前面的0位），所以直接对字符串每一位'1'=>'0', '0'=>'1'处理,再转成数字

​	时间复杂度O(n)

```javascript
var findComplement = function(num) {
    return parseInt(num.toString(2).split("").map(a => a == '1' ? "0" : "1").join(""), 2);
};
```

##### 别人的写法：

​	位处理：先设一个全为'1'的二进制数，然后把mask左移到num的零位以上。

​	For example（这是leetcode上最高亮的答案）

```
num          = 00000101
mask         = 11111000
~mask & ~num = 00000010
```

​	返回num ^ ~mask。

​	时间复杂度O(1),空间复杂度O(1)

```javascript
var findComplement = function(num) {
    let mask = ~0;
    while(mask & num){
        mask <<= 1;
    }
    return ~num & ~mask;
    //return num ^ ~mask;
};
```

