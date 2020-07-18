# 97. Interleaving String

Given *s1*, *s2*, *s3*, find whether *s3* is formed by the interleaving of *s1* and *s2*.

**Example 1:**

```
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac"
Output: true
```

**Example 2:**

```
Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc"
Output: false
```

#### 2020.07.18

#### 	我的思路：

##### 无敌回溯

但是会重算很多次，所以想到dp

```
var isInterleave = function(s1, s2, s3) {
    return dfs(s1, s2, s3, 0, 0);
};

function dfs(s1, s2, s3, i, j) {
    if (i == s1.length && j == s2.length && i + j == s3.length) {
        return true;
    }

    if (i < s1.length && s1[i] === s3[i + j] && dfs(s1, s2, s3, i + 1, j)) {
        return true;
    }

    if (j < s2.length && s2[j] === s3[i + j]) {
        return dfs(s1, s2, s3, i, j + 1);
    }

    return false;
}
```

##### dp

```javascript
var isInterleave = function(s1, s2, s3) {
    const s1Len = s1.length;
    const s2Len = s2.length;
    const s3Len = s3.length;

    if (s1Len + s2Len != s3Len) {
        return false;
    }

    const dp = Array(s1Len + 1);
    for (let i = 0; i <= s1Len; i++) {
        dp[i] = Array(s2Len + 1).fill(false);
    }

    dp[0][0] = true;

    for (let i = 0; i <= s1Len; i++) {
        for (let j = 0; j <= s2Len; j++) {
            let p = i + j - 1;
            if (i > 0) {
                dp[i][j] = dp[i - 1][j] && s1[i - 1] == s3[p];
            }
            if (j > 0) {
                dp[i][j] = dp[i][j] || (dp[i][j - 1] && s2[j - 1] === s3[p]);
            }
        }
    }

    return dp[s1Len][s2Len]
};
```

