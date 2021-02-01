"use strict";
function getPermutation111(n, k) {
    var set = new Set();
    var count = 1;
    var result = null;
    var dfs = function (arr) {
        if (result) {
            return;
        }
        if (arr.length === n) {
            if (count === k) {
                result = arr.join('');
                return;
            }
            count++;
            return;
        }
        for (var i = 1; i <= n; i++) {
            if (set.has(i))
                continue;
            arr.push(i);
            set.add(i);
            dfs(arr);
            set.delete(i);
            arr.pop();
        }
    };
    dfs([]);
    return result;
}
;
function getPermutation(n, k) {
    var dp = Array(n);
    dp[0] = 1;
    for (var i = 1; i < n; i++) {
        dp[i] = dp[i - 1] * i;
    }
    k--;
    var res = [];
    var valid = Array(n + 1).fill(1);
    for (var i = 1; i <= n; i++) {
        var order = Math.floor(k / dp[n - i]) + 1;
        for (var j = 1; j <= n; j++) {
            order -= valid[j];
            if (order === 0) {
                res.push(j);
                valid[j] = 0;
                break;
            }
        }
        k %= dp[n - i];
    }
    return res.join('');
}
console.log(getPermutation(3, 3)); //213
console.log(getPermutation(4, 9)); //2314
