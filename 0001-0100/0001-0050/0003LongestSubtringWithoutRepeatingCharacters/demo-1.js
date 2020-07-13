/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }

    let max = 1;

    const map = new Map();

    let left = 0;
    let right = 1;
    map.set(s[0], 0);

    while (right < s.length) {
        let tmp = map.get(s[right]);
        let index = tmp != null ? tmp : -1;
        if (index >= left) {
            left = index + 1;
        }
        map.set(s[right], right);
        max = Math.max(right - left + 1, max);
        right++;
    }

    return max;
};

var lengthOfLongestSubstring = function(s) {
    if (!s) {
        return 0;
    }

    const map = new Map();

    const N = s.length;
    const dp = Array(N);
    dp[0] = 1;

    let max = 1;

    map.set(s[0], 0);
    for (let i = 1; i < N; i++) {
        let tmp = map.get(s[i]);
        let pre = tmp != null ? tmp : -1;
        if (i - 1 - dp[i - 1] > pre) {
            dp[i] = dp[i - 1] + 1;
        }
        else {
            dp[i] = i - pre;
        }
        map.set(s[i], i);
        max = Math.max(max, dp[i]);
    }
    
    return max;
};


console.log(lengthOfLongestSubstring("au")); //2

console.log(lengthOfLongestSubstring("abcabcbb")); //3
console.log(lengthOfLongestSubstring("bbbbb")); //1
console.log(lengthOfLongestSubstring("pwwkew")); //3