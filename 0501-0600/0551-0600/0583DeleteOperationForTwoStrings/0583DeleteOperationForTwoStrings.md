# 583. Delete Operation for Two Strings

Given two words *word1* and *word2*, find the minimum number of steps required to make *word1* and *word2* the same, where in each step you can delete one character in either string.

**Example 1:**

```
Input: "sea", "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
```



**Note:**

1. The length of given words won't exceed 500.

2. Characters in given words can only be lower-case letters.

   

#### 2020.07.29

#### 	我的思路：

​	nums排序 然后把奇数位的和加起来

​	时间复杂度O(n)

​	第一种简写的写法是为了练下reduce()的用法= =

#### 别人的写法：

主要的思路就是找到两个字符串的最长公共子序列，出去公共子序列后剩下的长度就是要被删除的字符数量。

##### 递归

```javascript
var minDistance = function(word1, word2) {
    return word1.length + word2.length - 2 * lcs(word1, word2, word1.length, word2.length);
};

function lcs(word1, word2, m, n) {
    if (m == 0 || n == 0) {
        return 0;
    }
    if (word1[m - 1] == word2[n - 1]) {
        return 1 + lcs(word1, word2, m - 1, n - 1)
    }
    else {
        return Math.max(lcs(word1, word2, m, n - 1), lcs(word1, word2, m - 1, n));
    }
}
```

##### 带记忆数组的递归

```javascript
var minDistance = function(s1, s2) {
    const M = s1.length;
    const N = s2.length;
    const memo = Array(M + 1);
    for (let i = 0; i <= M; i++) {
        memo[i] = Array(N + 1).fill(0);
    }

    function dfs(i, j) {
        if (i == 0 || j == 0) {
            return 0;
        }
        if (memo[i][j] > 0) {
            return memo[i][j];
        }
        if (s1[i - 1] === s2[j - 1]) {
            memo[i][j] = 1 + dfs(i - 1, j - 1);
        }
        else {
            memo[i][j] = Math.max(dfs(i, j - 1), dfs(i - 1, j));
        }
        return memo[i][j];
    }

    return M + N - 2 * dfs(M, N);
}
```

##### 动态规划1

求最长公共子序列的思路

```javascript
var minDistance = function(s1, s2) {
    const M = s1.length;
    const N = s2.length;
    const dp = Array(M + 1);
    for (let i = 0; i <= M; i++) {
        dp[i] = Array(N + 1).fill(0);
    }

    for(let i = 0; i <= M; i++) {
        for (let j = 0; j <= N; j++) {
            if (!i || !j) {
                continue;
            }
            if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = 1 + dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return M + N - 2 * dp[M][N];
}
```

##### 动态规划2

直接硬怼

```javascript
var minDistance = function(s1, s2) {
    const M = s1.length;
    const N = s2.length;
    const dp = Array(M + 1);
    for (let i = 0; i <= M; i++) {
        dp[i] = Array(N + 1).fill(0);
    }

    for (let i = 0; i <= M; i++) {
        for (let j = 0; j <= N; j++) {
            if (!i || !j) {
                dp[i][j] = i + j;
            }
            else if (s1[i - 1] == s2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
            else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
            }
        }
    }

    return dp[M][N];
}
```

