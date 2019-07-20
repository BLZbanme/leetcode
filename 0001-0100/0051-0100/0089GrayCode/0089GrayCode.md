# 89. Gray Code

The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer *n* representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

**Example 1:**

```
Input: 2
Output: [0,1,3,2]
Explanation:
00 - 0
01 - 1
11 - 3
10 - 2

For a given n, a gray code sequence may not be uniquely defined.
For example, [0,2,3,1] is also a valid gray code sequence.

00 - 0
10 - 2
11 - 3
01 - 1
```

**Example 2:**

```
Input: 0
Output: [0]
Explanation: We define the gray code sequence to begin with 0.
             A gray code sequence of n has size = 2n, which for n = 0 the size is 20 = 1.
             Therefore, for n = 0 the gray code sequence is [0].
```

##### 2019.07.20

##### 	我的思路：

​		使用镜射排列生成格雷码的，即：n位元的格雷码可以从n-1位元的格雷码以上下镜射后加上新位元的方式快速的得到。

###### 		写法1：

​		等于是每次迭代，result的项数翻倍，前半个数组就是上一轮迭代result本身，后半部分是就像依次出栈，然后再最高位加个1。

​		在写法1里面我是直接对result里面每项最高位+1，然后再逆序接到result后边。

```javascript
var grayCode = function(n) {
    if (n == 0) {
        return [0];
    }
    let result = [0, 1];
    for (let i = 0; i < n - 1; i++) {
        let tmp = result.map(e => e + (2 << i));
        tmp.reverse();
        result = result.concat(tmp);
    }
    return result;
}
```

###### 	写法2：

​		写完写法2我就感觉这样很蠢，直接从后往前遍历result，把每一项最高位+1再push进去。

```javascript
var grayCode = function(n) {
    if (n == 0) {
        return [0];
    }
    let result = [0, 1];
    for (let i = 0; i < n - 1; i++) {
        let len = result.length;
        while (len--) {
            result.push(result[len] + (2 << i));
        }
    }
    return result;
}
```

##### 		别人的方法：

​		计算格雷码的公式

```javascript
var grayCode = function(n) {
    const N = 1 << n;
    let result = [];
    for (let i = 0; i < N; i++) {
        result.push(i >> 1 ^ i);
    }
    return result;
};
```

