function findMaxForm(strs, m, n) {
    var dp = Array(m + 1).fill(0).map(function (e) { return Array(n + 1).fill(0); });
    var countZeroAndOne = function (str) {
        var result = [0, 0];
        for (var i = 0; i < str.length; i++) {
            str[i] === '0' ? result[0]++ : result[1]++;
        }
        return result;
    };
    
    for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
        var s = strs_1[_i];
        debugger
        var _a = countZeroAndOne(s), zero = _a[0], one = _a[1];
        for (var i = m; i >= zero; i--) {
            for (var j = n; j >= one; j--) {
                dp[i][j] = Math.max(1 + dp[i - zero][j - one], dp[i][j]);
            }
        }
    }
    return dp[m][n];
}
;
console.log(findMaxForm(["10", "0001", "111001", "1", "0"], 5, 3)); //4
