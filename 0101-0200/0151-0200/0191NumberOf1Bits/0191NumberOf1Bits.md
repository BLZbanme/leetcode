# 191. Number of 1 Bits

Write a function that takes an unsigned integer and return the number of '1' bits it has (also known as the [Hamming weight](http://en.wikipedia.org/wiki/Hamming_weight)).

 

**Example 1:**

```
Input: 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
```

**Example 2:**

```
Input: 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.
```

**Example 3:**

```
Input: 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.
```

 

**Note:**

- Note that in some languages such as Java, there is no unsigned integer type. In this case, the input will be given as signed integer type and should not affect your implementation, as the internal binary representation of the integer is the same whether it is signed or unsigned.
- In Java, the compiler represents the signed integers using [2's complement notation](https://en.wikipedia.org/wiki/Two's_complement). Therefore, in **Example 3** above the input represents the signed integer `-3`.

 

**Follow up**:

If this function is called many times, how would you optimize it?

##### 2019.11.12

##### 	我的思路：

当时理解错了输入，没写出来

##### 	别人的方法：

##### 方法1：

​	判断从最低位开始有多少位1

```javascript
var hammingWeight = function(n) {
    let ones = 0;
    while (n != 0) {
        ones = ones + (n & 1);
        n >>>= 1;
    }
    return ones;
};
```

##### 方法2：

```n  &= n - 1```可以把n的最低为1位置为0，直到n==0，置了多少次，就是有多少个1

```javascript
var hammingWeight = function(n) {
    let ones = 0;
    while (n != 0) {
        n &= n - 1;
        ones++;
    }
    return ones;
}
```

