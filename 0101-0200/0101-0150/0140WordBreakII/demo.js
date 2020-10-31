var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
function wordBreak1(s, wordDict) {
    var result = [];
    var arr = [];
    var dfs = function (str) {
        if (!str) {
            result.push(arr.join(" "));
        }
        for (var _i = 0, wordDict_1 = wordDict; _i < wordDict_1.length; _i++) {
            var word = wordDict_1[_i];
            var i = str.indexOf(word);
            if (i == 0) {
                arr.push(word);
                dfs(str.substr(word.length));
                arr.pop();
            }
        }
        return;
    };
    dfs(s);
    return result;
}
;
function wordBreak2(s, wordDict) {
    var N = s.length;
    var dp = Array(N + 1).fill(0).map(function (e) { return []; });
    dp[0] = [[]];
    for (var i = 1; i <= N; i++) {
        var now = s.substr(0, i);
        var _loop_1 = function (word) {
            if (now.endsWith(word) && i >= word.length) {
                dp[i] = dp[i].concat(dp[i - word.length].map(function (e) {
                    return e.concat([word]);
                }));
            }
        };
        for (var _i = 0, wordDict_2 = wordDict; _i < wordDict_2.length; _i++) {
            var word = wordDict_2[_i];
            _loop_1(word);
        }
    }
    return dp[N].map(function (e) { return e.join(" "); });
}
function wordBreak(s, wordDict) {
    var map = new Map();
    var N = s.length;
    var set = new Set(wordDict);
    var backtrack = function (index) {
        if (map.has(index)) {
            return map.get(index);
        }
        var wordBreaks = [];
        if (index === N) {
            wordBreaks.push([]);
        }
        for (var i = index + 1; i <= N; i++) {
            var word = s.substring(index, i);
            if (set.has(word)) {
                var nextWordBreaks = backtrack(i);
                for (var _i = 0, nextWordBreaks_1 = nextWordBreaks; _i < nextWordBreaks_1.length; _i++) {
                    var nextWordBreak = nextWordBreaks_1[_i];
                    var wordBreak_1 = __spreadArrays([word], nextWordBreak);
                    wordBreaks.push(wordBreak_1);
                }
            }
        }
        map.set(index, wordBreaks);
        return wordBreaks;
    };
    return backtrack(0).map(function (e) { return e.join(" "); });
}
console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));
console.log(wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]));
console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));
