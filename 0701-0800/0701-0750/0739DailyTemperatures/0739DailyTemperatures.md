# 739. Daily Temperatures

Given a list of daily temperatures `T`, return a list such that, for each day in the input, tells you how many days you would have to wait until a warmer temperature. If there is no future day for which this is possible, put `0` instead.

For example, given the list of temperatures `T = [73, 74, 75, 71, 69, 72, 76, 73]`, your output should be `[1, 1, 4, 2, 1, 1, 0, 0]`.

**Note:** The length of `temperatures` will be in the range `[1, 30000]`. Each temperature will be an integer in the range `[30, 100]`.

##### 2020.06.11

##### 	我的思路：

​	暴力循环，时间复杂度O(n<sup>2</sup>)，空间复杂度O(n)

```javascript
var dailyTemperatures = function(T) {
    const result = [];
    for (let i = T.length - 1; i >= 0; i--) {
        let j = i + 1;
        for (; j < T.length; j++) {
            if (T[j] > T[i]) {
                break;
            }
        }
        result.unshift(j === T.length ? 0 : j - i);
    }
    return result;
};
```

##### 高手的写法

​	思路：单调栈。

​	维护一个存储下标的单调栈，从栈底到栈顶的下标对应的温度列表中的温度依次递减。如果一个下标在单调栈里，则表示尚未找到下一次温度更高的下标。

​	时间复杂度O(n)，空间复杂度O(n)

```javascript
var dailyTemperatures = T => {
    const result = new Array(T.length).fill(0);
    const stack = [];
    T.forEach((e, index) => {
        while (stack.length && T[stack[stack.length - 1]] < e) {
            let tmpIndex = stack.pop();
            result[tmpIndex] = index - tmpIndex;
        }
        stack.push(index);
    });
    return result;
}
```
