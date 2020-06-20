/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    // debugger
    // if (!s) {
    //     if (!p || p === '.*') {
    //         return true;
    //     }
    //     return false;
    // }

    // if (!p) {
    //     return false;
    // }

    const sLen = s.length;
    const pLen = p.length;

    const dp = new Array(sLen + 1);
    for (let i = 0; i <= s.length; i++) {
        dp[i] = new Array(p.length + 1).fill(false);
    }
    dp[0][0] = true;

    for (let i = 0; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            if (p[j - 1] === '*') {
                debugger
                dp[i][j] = dp[i][j - 2];
                if (matched(s, p, i, j - 1)) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
            else if (matched(s, p, i, j)) {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }
    return dp[sLen][pLen];
};

function matched(s, p, i, j) {
    if (!i) {
        return false;
    }

    if (p[j - 1] === '.') {
        return true;
    }

    return s[i - 1] === p[j - 1];
}

var isMatch = function(s, p) {
    const sLen = s.length;
    const pLen = p.length;
    const dp = new Array(sLen + 1);
    for (let i = 0; i <= sLen; i++) {
        dp[i] = new Array(pLen + 1).fill(false);
    }
    dp[0][0] = true;

    for (let i = 0; i < p.length; i++) {
        if (p[i] == "*" && dp[0][i - 1]) {
            dp[0][i + 1] = true;
        }
    }

    for (let i = 0; i < sLen; i++) {
        for (let j = 0; j < pLen; j++) {
            if (p[j] === '.') {
                dp[i + 1][j + 1] = dp[i][j];
            }
            if (p[j] === s[i]) {
                dp[i + 1][j + 1] = dp[i][j];
            }
            if (p[j] === "*") {
                if (p[j - 1] != s[i] && p[j - 1] != '.') {
                    dp[i + 1][j + 1] = dp[i + 1][j - 1];
                }
                else {
                    dp[i + 1][j + 1] = dp[i][j + 1] || dp[i + 1][j] || dp[i + 1][j - 1];
                }
            }
        }
    }
    return dp[sLen][pLen];
}

console.log(isMatch("", "")); //true
console.log(isMatch("", "c*")); //true
console.log(isMatch("", "ac*")); //false
console.log(isMatch("", ".*")); //true
console.log(isMatch("aa", "a")); //false
console.log(isMatch("aa", "a*")); //true
console.log(isMatch("ab", ".*")); //true
console.log(isMatch("aab", "c*a*b")); //true
console.log(isMatch("mississippi", "mis*is*p*.")); //false