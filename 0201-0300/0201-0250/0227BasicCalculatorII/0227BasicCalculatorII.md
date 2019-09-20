# 227. Basic Calculator II

Implement a basic calculator to evaluate a simple expression string.

The expression string contains only **non-negative** integers, `+`, `-`, `*`, `/` operators and empty spaces ``. The integer division should truncate toward zero.

**Example 1:**

```
Input: "3+2*2"
Output: 7
```

**Example 2:**

```
Input: " 3/2 "
Output: 1
```

**Example 3:**

```
Input: " 3+5 / 2 "
Output: 5
```

**Note:**

- You may assume that the given expression is always valid.
- **Do not** use the `eval` built-in library function.

##### 2019.09.20

##### 	我的思路：

1. 先把空白字符去了```s.replace(/\s*/g, "");```

2. 根据几个特殊符号把字符串划分，划分出来的结果就是各个操作数。

3. 然后遍历字符串，碰到一个数字字符就是一个操作数，取出一个操作数，把遍历下标增加这个操作数的长度。碰到```+```和```-```可以放入操作符栈，碰到```*```和```/```直接算。

4. 最后把数字栈和操作符栈遍历一遍计算结果。

   最后，很遗憾我的方法超时了= = 测试用例跑了108/109。。。

```javascript
var calculate = function(s) {
    s.replace(/\s*/g, "");
    let numStack = [];
    let operStack = [];
    let reg = /[+|\-|*|\/]/;
    let arr = s.split(reg);
    const N = s.length;
    let i = 0;
    while (i < N) {
        if (s[i] === "*") {
            let tmp = arr.shift();
            let first = numStack.pop();
            i += tmp.length + 1;
            numStack.push(first * +tmp);
        }
        else if (s[i] === "/") {
            let tmp = arr.shift();
            let first = numStack.pop();
            i += tmp.length + 1;
            numStack.push(Math.floor(first / +tmp));
        }
        else if (s[i] === "+" || s[i] === "-") {
            operStack.push(s[i++]);
        }
        else {
            let tmp = arr.shift();
            numStack.push(+tmp);
            i += tmp.length;
        }
    }

    let result = numStack[0];
    const N1 = numStack.length;
    const N2 = operStack.length;
    for (let i = 1, j = 0; i < N1 && j < N2; i++, j++) {
        if (operStack[j] === "+") {
            result += numStack[i];
        }
        else {
            result -= numStack[i];
        }
    }
    return result;
};
```

##### 别人的方法：

​		我的思路跟别人的大体是一致的，它比我强的地方

1. 我是用split计算出所有操作数的，我的开销很大；而它的```num = num * 10 + +s[i];```很巧妙
2. 它没有去空，我去空了，增加了开销
3. 它增加了一个sign位，使得不需要操作符栈了，这是最牛逼的地方!

```javascript
var calculate = function(s) {
    let N = s.length;
    if (!s) {
        return 0;
    }
    let stack = [];
    let num = 0;
    let sign = "+";
    for (let i = 0; i < N; i++) {
        if (s[i].match(/\d/)) {
            num = num * 10 + +s[i];
        }
        if ((!s[i].match(/\d/)) && (" " !== s[i]) || i === N - 1) {
            if (sign === "-") {
                stack.push(-num);
            }
            if (sign === "+") {
                stack.push(num);
            }
            if (sign === "*") {
                stack.push(stack.pop() * num);
            }
            if (sign === "/") {
                let tmp = stack.pop();
                if (tmp > 0) {
                    stack.push(Math.floor(tmp / num));
                }
                else {
                    stack.push(-Math.floor((-tmp) / num));
                }
            }
            sign = s[i];
            num = 0;
        }
    }
    let result = 0;
    for (let e of stack) {
        result += e;
    }
    return result;
}
```

​		