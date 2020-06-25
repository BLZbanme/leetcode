/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const sLen = s.length;
    const set = new Set(wordDict);

    function dfs(index, size) {
        if (index === sLen) {
            return true;
        }

        while (index + size <= sLen) {
            let tmp = s.substr(index, size);
            if (set.has(tmp)) {
                if (dfs(index + size, 1)) {
                    return true;
                }
            }
            size++;
        }
        
        return false;
    }

    return dfs(0, 1);
};

var wordBreak = function(s, wordDict) {
    const sLen = s.length;
    const set = new Set(wordDict);
    const dp = new Array(sLen).fill(false);

    for (let i = 0; i < sLen; i++) {
        let j = i;
        while (j >= 0) {
            let tmp = s.slice(j, i + 1);
            if (set.has(tmp)) {
                if (!j || dp[j - 1]) {
                    dp[i] = true;
                    break;
                }
            }
            j--
        }
    }
    return dp[sLen - 1];
};

console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"])); //false

console.log(wordBreak("leetcode", ["leet", "code"]));
console.log(wordBreak("applepenapple", ["apple", "pen"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));