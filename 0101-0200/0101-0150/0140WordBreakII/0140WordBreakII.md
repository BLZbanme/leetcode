# 140. Word Break II

Given a **non-empty** string *s* and a dictionary *wordDict* containing a list of **non-empty** words, add spaces in *s* to construct a sentence where each word is a valid dictionary word. Return all such possible sentences.

**Note:**

- The same word in the dictionary may be reused multiple times in the segmentation.
- You may assume the dictionary does not contain duplicate words.

**Example 1:**

```
Input:
s = "catsanddog"
wordDict = ["cat", "cats", "and", "sand", "dog"]
Output:
[
  "cats and dog",
  "cat sand dog"
]
```

**Example 2:**

```
Input:
s = "pineapplepenapple"
wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
Output:
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
Explanation: Note that you are allowed to reuse a dictionary word.
```

**Example 3:**

```
Input:
s = "catsandog"
wordDict = ["cats", "dog", "sand", "and", "cat"]
Output:
[]
```



#### 2020.11.01

##### 我的方法：

​		dfs，在如下测试用例中，很遗憾超时了

```javascript
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
 ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))
```

````javascript
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
````

##### 别人的方法：

```javascript
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
```

