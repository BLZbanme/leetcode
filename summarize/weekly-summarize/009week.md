# 139. Word Break

Given a **non-empty** string *s* and a dictionary *wordDict* containing a list of **non-empty** words, determine if *s* can be segmented into a space-separated sequence of one or more dictionary words.

**Note:**

- The same word in the dictionary may be reused multiple times in the segmentation.
- You may assume the dictionary does not contain duplicate words.

**Example 1:**

```
Input: s = "leetcode", wordDict = ["leet", "code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
```

**Example 2:**

```
Input: s = "applepenapple", wordDict = ["apple", "pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
             Note that you are allowed to reuse a dictionary word.
```

**Example 3:**

```
Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
Output: false
```

##### 2019.08.12

##### 我的方法：

​		dfs，在如下测试用例中，很遗憾超时了

```javascript
console.log(wordBreak("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab",
 ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]))
```

```javascript
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
```

##### 别人的方法：

##### 		方法1：

​		dp，dp数组记录到i位置位置能否被拆分。

​		（没想到用dp，我属实菜逼）

```javascript
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
```

##### 		方法2：

​		BFS，这也是个很杰出的方法，队列中存的都是能被划分的位置。与我的dfs相比，在那种极端情况下，bfs明显能够很快运行完毕。

```javascript
var singleNumber = function(nums) {
    let a = 0;
    let b = 0;
    nums.forEach(e => {
        b = (b ^ e) & ~a;
        a = (a ^ e) & ~b;
    })
    return b;
}
```

