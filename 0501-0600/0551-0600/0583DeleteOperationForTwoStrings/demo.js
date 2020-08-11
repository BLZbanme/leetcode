/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
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