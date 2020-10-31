function wordBreak1(s: string, wordDict: string[]): string[] {
    const result: Array<string> = [];
    const arr: Array<string> = [];

    const dfs = (str: string) => {
        if (!str) {
            result.push(arr.join(" "));
        }
        for (let word of wordDict) {
            let i = str.indexOf(word);
            if (i == 0) {
                arr.push(word);
                dfs(str.substr(word.length));
                arr.pop();
            }
        }
        return;
    }

    dfs(s);

    return result;
};

function wordBreak2(s: string, wordDict: string[]): string[] {
    const N = s.length;
    const dp: Array<Array<Array<String>>> = Array(N + 1).fill(0).map(e => []);
    dp[0] = [[]];
    for (let i = 1; i <= N; i++) {
        let now = s.substr(0, i);
        for (let word of wordDict) {
            if (now.endsWith(word) && i >= word.length) {
                dp[i] = dp[i].concat(
                    dp[i - word.length].map(e => {
                        return e.concat([word]);
                    })
                )
            }
        }
    }
    return dp[N].map(e => e.join(" "))
}

function wordBreak(s: string, wordDict: string[]): string[] {
    const map = new Map();
    const N = s.length;
    const set = new Set(wordDict);

    const backtrack = (index: number): Array<Array<string>> => {
        if (map.has(index)) {
            return map.get(index);
        }

        const wordBreaks: Array<Array<string>> = [];
        if (index === N) {
            wordBreaks.push([]);
        }

        for (let i = index + 1; i <= N; i++) {
            const word = s.substring(index, i);
            if (set.has(word)) {
                const nextWordBreaks = backtrack(i);
                for (const nextWordBreak of nextWordBreaks) {
                    const wordBreak = [word, ...nextWordBreak];
                    wordBreaks.push(wordBreak)
                }
            }
        }
        map.set(index, wordBreaks);
        return wordBreaks;
    }
    
    return backtrack(0).map(e => e.join(" "))
}

console.log(wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"]));

console.log(wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]));

console.log(wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"]));