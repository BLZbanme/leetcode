# 647. Palindromic Substrings

Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

**Example 1:**

```
Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
```

 

**Example 2:**

```
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
```

 

**Note:**

1. The input string length won't exceed 1000.



#### 2020.08.19

#### 	我的思路：

暴力

```javascript
var countSubstrings = function(s) {
    let count = s.length;

    const checkSubStr = (index) => {
        for (let i = 2; index + i <= s.length; i++) {
            let tmp = s.substr(index, i);
            if (isPalindromic(tmp)) {
                count++;
            }
        }
    }

    for (let i = 0; i < s.length; i++) {
        checkSubStr(i);
    }

    return count;
};

function isPalindromic(subStr) {
    let lo = 0;
    let hi = subStr.length - 1;
    while (lo < hi) {
        if (subStr[lo++] !== subStr[hi--]) {
            return false;
        }
    }
    return true;
}
```

#### 别人的思路：

##### 动态规划

```typescript
const countSubstrings = (s: string): number => {
    const n = s.length;
    let count = n;
    const dp: Array<boolean[]> = Array(n)
    for (let i = 0; i < n; i++) {
        dp[i] = (Array(n) as any).fill(false);
        dp[i][i] = true;
    }
    
    for (let j = 1; j < n; j++) {
        for (let i = 0; i + j < n; i++) {
            if (s[i] === s[i + j]) {
                dp[i][i + j] = j === 1 || dp[i + 1][i + j - 1]
            }
            dp[i][i + j] && count++;
        }
    }
    return count;
}
```

##### 中心展开

```typescript
const countSubstrings111 = (s: string): number => {
    const N = s.length;
    let count = 0;
    for (let i = 0; i < 2 * N - 1; i++) {
        let l = i >> 1;
        let r = (i >> 1) + i % 2;
        while (l >= 0 && r < N && s[l] === s[r]) {
            l--;
            r++;
            count++;
        }
    }
    return count;
}
```

