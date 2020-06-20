# 10. Regular Expression Matching

Given an input string (`s`) and a pattern (`p`), implement regular expression matching with support for `'.'` and `'*'`.

```
'.' Matches any single character.
'*' Matches zero or more of the preceding element.
```

The matching should cover the **entire** input string (not partial).

**Note:**

- `s` could be empty and contains only lowercase letters `a-z`.
- `p` could be empty and contains only lowercase letters `a-z`, and characters like `.` or `*`.

**Example 1:**

```
Input:
s = "aa"
p = "a"
Output: false
Explanation: "a" does not match the entire string "aa".
```

**Example 2:**

```
Input:
s = "aa"
p = "a*"
Output: true
Explanation: '*' means zero or more of the preceding element, 'a'. Therefore, by repeating 'a' once, it becomes "aa".
```

**Example 3:**

```
Input:
s = "ab"
p = ".*"
Output: true
Explanation: ".*" means "zero or more (*) of any character (.)".
```

**Example 4:**

```
Input:
s = "aab"
p = "c*a*b"
Output: true
Explanation: c can be repeated 0 times, a can be repeated 1 time. Therefore, it matches "aab".
```

**Example 5:**

```
Input:
s = "mississippi"
p = "mis*is*p*."
Output: false
```

#### 2020.06.20

#### 我的解决方法	

我没写出来

#### 别人的答案

我的理解写在注释中

```javascript
var isMatch = function(s, p) {
    const sLen = s.length;
    const pLen = p.length;
    
    //dp数组 dp[i][j]表示s[i - 1]和p[j - 1]的匹配情况
    const dp = new Array(sLen + 1);
    for (let i = 0; i <= sLen; i++) {
        dp[i] = new Array(pLen + 1).fill(false);
    }
    dp[0][0] = true;

    //这个循环是判断是否存在s=""，同时p=".*a*c*"这类的情况
    for (let i = 0; i < p.length; i++) {
        if (p[i] == "*" && dp[0][i - 1]) {
            dp[0][i + 1] = true;
        }
    }

    for (let i = 0; i < sLen; i++) {
        for (let j = 0; j < pLen; j++) {
            //p[j] === '.'时，p[j]可以匹配任何s[i]，所以直接dp[i + 1][j + 1] = dp[i][j];
            if (p[j] === '.') {
                dp[i + 1][j + 1] = dp[i][j];
            }
             //p[j] === s[i]时,所以直接dp[i + 1][j + 1] = dp[i][j];
            if (p[j] === s[i]) {
                dp[i + 1][j + 1] = dp[i][j];
            }
            if (p[j] === "*") {
                //下个if表示p[j] === '*'，但是会忽略掉前面一个字符的情况
                if (p[j - 1] != s[i] && p[j - 1] != '.') {
                    dp[i + 1][j + 1] = dp[i + 1][j - 1];
                }
                //重点
                //dp[i + 1][j + 1] = dp[i][j + 1] //in this case, a* counts as multiple a
				//dp[i + 1][j + 1] = dp[i + 1][j] // in this case, a* counts as single a
				//dp[i + 1][j + 1] = dp[i + 1][j-1] // in this case, a* counts as empty
                else {
                    dp[i + 1][j + 1] = dp[i][j + 1] || dp[i + 1][j] || dp[i + 1][j - 1];
                }
            }
        }
    }
    return dp[sLen][pLen];
}
```

