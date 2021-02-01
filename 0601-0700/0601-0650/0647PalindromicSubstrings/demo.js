"use strict";
var countSubstrings = function (s) {
    var n = s.length;
    var count = n;
    var dp = Array(n);
    for (var i = 0; i < n; i++) {
        dp[i] = Array(n).fill(false);
        dp[i][i] = true;
    }
    for (var j = 1; j < n; j++) {
        for (var i = 0; i + j < n; i++) {
            if (s[i] === s[i + j]) {
                dp[i][i + j] = j === 1 || dp[i + 1][i + j - 1];
            }
            dp[i][i + j] && count++;
        }
    }
    return count;
};
var countSubstrings111 = function (s) {
    var N = s.length;
    var count = 0;
    for (var i = 0; i < 2 * N - 1; i++) {
        var l = i >> 1;
        var r = (i >> 1) + i % 2;
        while (l >= 0 && r < N && s[l] === s[r]) {
            l--;
            r++;
            count++;
        }
    }
    return count;
};
