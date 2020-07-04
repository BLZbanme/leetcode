# 32. Longest Valid Parentheses

Given a string containing just the characters `'('` and `')'`, find the length of the longest valid (well-formed) parentheses substring.

**Example 1:**

```
Input: "(()"
Output: 2
Explanation: The longest valid parentheses substring is "()"
```

**Example 2:**

```
Input: ")()())"
Output: 4
Explanation: The longest valid parentheses substring is "()()"
```

##### 2020.07.04

##### 	我的思路：

​	动态规划

时间复杂度O(n)，空间复杂度O(n)

​	2.如果找不到，则B变成它前面一位的元素继续步骤1，如果遍历完了整个数组进入4。

​	3.如果找到了，将index右边的数组排序，得到结果。

​	4.说明此时数组已经是逆序了，直接sort（reverse更佳）。

​	时间复杂度O(n<sup>2</sup>)，遍历是n<sup>2</sup>， 排序也是n<sup>2</sup>。排序可以优化但是鉴于我太久没写排序了，写了个冒泡...

```javascript
var longestValidParentheses = function(s) {
    let max = 0;
    const N = s.length;
    const stack = [];
    const dp = new Array(N).fill(0);
    for (let i = 0; i < s.length;i++) {
        if (stack.length && stack[stack.length - 1] === '(' && s[i] === ')') {
            stack.pop();
            let tmp = 2;
            let j = 1;
            if (dp[i - j]) {
                tmp += dp[i - j];
                j += dp[i - j];
            }
            if (i - tmp >= 0 && dp[i - tmp] != 0) {
                dp[i] = dp[i - tmp] + tmp;
            }
            else {
                dp[i] = tmp;
            }
            max = Math.max(max, dp[i]);
        }
        else {
           stack.push(s[i]);
        }
    }
    return max;
};
```

##### 别人的写法

方法1：stack，存储左括号的下标

时间复杂度O(n)，空间复杂度O(n)

```javascript
var longestValidParentheses = function(s) {
    let max = 0;
    const N = s.length;
    const stack = [-1];
    for (let i = 0; i < N; i++) {
        if (s[i] == '(') {
            stack.push(i);
        }
        else {
            stack.pop();
            if (!stack.length) {
                stack.push(i);
            }
            else {
                max = Math.max(max, i - stack[stack.length - 1]);
            }
        }
    }
    
    return max;
};
```

方法2：左右指针，来回遍历

时间复杂度O(n)，空间复杂度O(1)

```javascript
var longestValidParentheses = function(s) {
    let left = 0;
    let right = 0;
    let max = 0;
    for (let i = 0; i < s.length; i ++) {
        if (s[i] == '(') {
            left++;
        }
        else {
            right++;
        }

        if (left === right) {
            max = Math.max(max, 2 * right);
        }
        else if (right > left) {
            left = right = 0;
        }
    }

    left = right = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == '(') {
            left++;
        }
        else {
            right++;
        }
        if (left == right) {
            max = Math.max(max, 2 * left);
        }
        else if (left > right) {
            left = right = 0;
        }
    }

    return max;
}
```

