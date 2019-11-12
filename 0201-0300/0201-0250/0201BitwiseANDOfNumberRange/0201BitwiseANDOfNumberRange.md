# 201. Bitwise AND of Numbers Range

Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

**Example 1:**

```
Input: [5,7]
Output: 4
```

**Example 2:**

```
Input: [0,1]
Output: 0
```

##### 2019.10.26

##### 	我的思路：

​		我的方法，空间复杂度O(n)，就是疯狂迭代，直到进入循环

```javascript
var rangeBitwiseAnd = function(m, n) {
    let result = m;
    for (let i = m + 1; i <= n; i++) {
        result &= i;
    }
    return result;
};
```

##### 	别人的方法：

[leetcode上的别人的解释](https://leetcode-cn.com/problems/bitwise-and-of-numbers-range/solution/shu-zi-fan-wei-an-wei-yu-qu-qi-gao-wei-wu-bian-hua/)

判断m、n是否相等，如果不相等，m+1会使m的二进制数末位进位，有进位说明m的末位肯定有0的情况，0与任何数相与皆得0，所以结果的末位肯定是0。同理，不断右移1位进行比较，直到最终 m=n 时，说明找到了[m,n]这个范围内高位没有变化的数，左移相同位数得到的结果就是所求的值。

```javascript
var rangeBitwiseAnd = function(m, n) {
    if (!m) {
        return 0;
    }
    let moveFactor = 1;
    while (m !== n) {
        m >>= 1;
        n >>= 1;
        moveFactor <<= 1;
    }
    return m * moveFactor;
}
```

