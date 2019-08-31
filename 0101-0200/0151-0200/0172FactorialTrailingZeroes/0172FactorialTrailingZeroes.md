# 172. Factorial Trailing Zeroes

Given an integer *n*, return the number of trailing zeroes in *n*!.

**Example 1:**

```
Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.
```

**Example 2:**

```
Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.
```

**Note:** Your solution should be in logarithmic time complexity.

##### 2019.08.31

##### 	我的思路：

​		没有思路

##### 	别人的方法：

​		要凑尾数0，就是凑有多少个尾数为5的项。

```javascript
var trailingZeroes = function(n) {
    let tmp = Math.floor(n / 5);
    return n == 0 ? 0 : tmp + trailingZeroes(tmp);
};
```
