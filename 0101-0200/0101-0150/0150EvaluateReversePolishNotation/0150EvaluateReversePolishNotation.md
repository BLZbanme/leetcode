# 150. Evaluate Reverse Polish Notation

Evaluate the value of an arithmetic expression in [Reverse Polish Notation](http://en.wikipedia.org/wiki/Reverse_Polish_notation).

Valid operators are `+`, `-`, `*`, `/`. Each operand may be an integer or another expression.

**Note:**

- Division between two integers should truncate toward zero.
- The given RPN expression is always valid. That means the expression would always evaluate to a result and there won't be any divide by zero operation.

**Example 1:**

```
Input: ["2", "1", "+", "3", "*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
```

**Example 2:**

```
Input: ["4", "13", "5", "/", "+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
```

**Example 3:**

```
Input: ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"]
Output: 22
Explanation: 
  ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22
```

##### 2019.08.29

##### 我的方法：

​		简简单单的栈处理，此题不配medium

````javascript
var evalRPN = function(tokens) {
    let stack = [];
    let set = new Set(["*", "/", "+", "-"]);
    tokens.forEach(v => {
        if (!set.has(v)) {
            stack.push(v);
        }
        else {
            let two = +stack.pop();
            let one = +stack.pop();
            stack.push(operation(one, two, v));
        }
    })
    return stack[0];
};

function operation(one, two, oper) {
    switch(oper) {
        case "+":
            return one + two;
        case "-":
            return one - two;
        case "*":
            return one * two;
        case "/":
            let tmp = Math.floor(one / two);
            return tmp < 0 ? -Math.floor(Math.abs(one / two)) : tmp;
        default:
            return;
    }
}
````
