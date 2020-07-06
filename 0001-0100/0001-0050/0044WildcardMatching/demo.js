/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
    const sLen = s.length;
    const pLen = p.length;
    const dp = Array(sLen + 1);
    for (let i = 0; i <= sLen; i++) {
        dp[i] = Array(pLen + 1).fill(false);
    }
    dp[0][0] = true;

    for (let i = 1; i <= p.length; i++) {
        if (p[i - 1] === '*') {
            dp[0][i] = true;
        }
        else {
            break
        }
    }

    for (let i = 1; i <= sLen; i++) {
        for (let j = 1; j <= pLen; j++) {
            if (p[j - 1] === '*') {
                dp[i][j] = dp[i][j - 1] || dp[i - 1][j];
            }
            else if (p[j - 1] === '?' || s[i - 1] === p[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            }
        }
    }
    return dp[sLen][pLen];
};

console.log(isMatch("aab", "c*a*b")); //false
console.log(isMatch('acdcb', 'a*c?b')); //false

console.log(isMatch('aa', 'a')); //false
console.log(isMatch('aa', '*')); //true
console.log(isMatch('cb', '?a')); //false
console.log(isMatch('adceb', '*a*b')); //true
