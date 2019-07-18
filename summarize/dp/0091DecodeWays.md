# 91. Decode Ways

A message containing letters from `A-Z` is being encoded to numbers using the following mapping:

```
'A' -> 1
'B' -> 2
...
'Z' -> 26
```

Given a **non-empty** string containing only digits, determine the total number of ways to decode it.

**Example 1:**

```
Input: "12"
Output: 2
Explanation: It could be decoded as "AB" (1 2) or "L" (12).
```

**Example 2:**

```
Input: "226"
Output: 3
Explanation: It could be decoded as "BZ" (2 26), "VF" (22 6), or "BBF" (2 2 6).
```

##### 2019.07.18

##### 	我的思路：

​		dp，单单纯纯的一个动态规划的题，但是我一开始写的判断过程很复杂。值得注意的是dp的临时数组声明的下标是对应字符串下一位的，方便初始化dpArr[0]，dpArr[1]。

```javascript
var numDecodings = function(s) {
    const N = s.length;
    let dpArr = new Array(N + 1);
    dpArr[0] = dpArr[1] = +s[0] > 0 ? 1 : 0;
    for (let i = 2; i <= N; i++) {
        if (s[i - 1] === '0' 
            && (s[i - 2] === '0' || +s[i - 2] > 2)
        ) {
            return 0;
        }
        else if (+s.slice(i - 2, i) <= 26) {
            if (s[i - 1] === '0' || s[i - 2] === '0') {
                dpArr[i] = dpArr[i - 2];
            }
            else {
                dpArr[i] = dpArr[i - 1] + dpArr[i - 2];
            }
        }   
        else {
            dpArr[i] = dpArr[i - 1];
        }
    }
    return dpArr[N];
};
```

##### 		优化后：

​		上面写完之后，思路更清晰了。但这样跑出来并没有上面快，可能因为上面我写了什么情况下直接返回'0'。

```javascript
var numDecodings = function(s) {
    const N = s.length;
    let dpArr = new Array(N + 1).fill(0);
    dpArr[0] = dpArr[1] = s[0] === '0' ? 0 : 1;
    for (let i = 2; i <= N; i++) {
        const now = +s[i - 1];
        const pre = +s.slice(i - 2, i);
        dpArr[i] += now > 0 ? dpArr[i - 1] : 0;
        dpArr[i] += pre >= 10 && pre <= 26 ? dpArr[i - 2] : 0;
    }
    return dpArr[N];
};
```

