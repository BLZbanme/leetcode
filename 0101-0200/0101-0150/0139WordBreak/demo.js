/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (!s) {
        return true;
    }

    for (let word of wordDict) {
        let index = s.startsWith(word);
        if (index) {
            if (wordBreak(s.substring(word.length), wordDict)) {
                return true;
            }
        }
    }

    return false;
};

var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict);
    const N = s.length;
    let dp = new Array(N + 1);
    dp[0] = true;
    for (let i = 1; i <= N; i++) {
        for (let j = i - 1; j >= 0; j--) {
            dp[i] = dp[j] && set.has(s.substring(j, i));
            if (dp[i]) {
                break;
            }
        }
    }
    return dp[N];
}

var wordBreak = function(s, wordDict) {
    let set = new Set(wordDict);
    if (set.has(s)) {
        return true;
    }
    let queue = [];
    let visited = new Set();
    queue.push(0);
    visited.add(0);
    while (queue.length) {
        let cur = queue.shift();
        for (let i = cur + 1; i <= s.length; i++) {
            if (visited.has(i)) {
                continue;
            }
            if (set.has(s.substring(cur, i))) {
                if (i === s.length) {
                    return true;
                }
                queue.push(i);
                visited.add(i);
            }
        }
    }
    return false;
}


console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]))

console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
    ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))

console.log(wordBreak("cars", ["car","ca","rs"]))

console.log(wordBreak("leetcode1", ["leet", "code"]))
console.log(wordBreak("leetcode", ["leet", "code"]))
console.log(wordBreak("applepenapple", ["apple", "pen"]))