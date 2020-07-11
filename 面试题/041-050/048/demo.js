/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }

    const N = s.length;
    const dp = Array(N);
    dp[0] = 1;

    let max = 1;

    for (let i = 1; i < N; i++) {
        let preCount = dp[i - 1];
        let tmp = findSubStr(s, i - preCount, i - 1, s[i]);
        if (tmp == -1) {
            dp[i] = dp[i - 1] + 1;
        } 
        else {
            dp[i] = i - tmp;
        }
        max = Math.max(max, dp[i]);
    }

    return max;
};

function findSubStr(str, lo, hi, target) {
    while (lo <= hi) {
        if (str[lo] == target) {
            return lo;
        }
        lo++;
    }
    return -1;
}


var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }

    const N = s.length;
    const dp = Array(N);

    const map = new Map();

    dp[0] = 1;

    map.set(s[0], 0)
    
    let max = 1;

    for (let i = 1; i < N; i++) {
        let preCount = dp[i - 1];

        let length;
        if (map.get(s[i]) != null) {
            length = i - map.get(s[i]);
        }
        else {
            length = i + 1;
        }

        if (length > preCount) {
            dp[i] = dp[i - 1] + 1;
        } 
        else {
            dp[i] = length;
        }
        map.set(s[i], i);
        max = Math.max(max, dp[i]);
    }

    return max;
};

console.log(lengthOfLongestSubstring('abcabcbb')); //3
console.log(lengthOfLongestSubstring('bbbbb')); //1
console.log(lengthOfLongestSubstring('pwwkew')); //3