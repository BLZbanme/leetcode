/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
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

var isInterleave = function(s1, s2, s3) {

    const s1Len = s1.length;
    const s2Len = s2.length;
    const s3Len = s3.length;

    function dfs(i, j) {
        if (i == s1Len && j == s2Len && i + j == s3Len) {
            return true;
        }
    
        if (i < s1Len && s1[i] === s3[i + j] && dfs(i + 1, j)) {
            return true;
        }
    
        if (j < s2Len && s2[j] === s3[i + j]) {
            return dfs(i, j + 1);
        }
    
        return false;
    }

    return dfs(0, 0);
};

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




console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac")); //true

console.log(isInterleave("", "", "a")); //false

console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc")); //false

