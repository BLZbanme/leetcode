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

````javascript
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
````

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

##### 别人的写法：

​		终极位运算

​		举例说明：[参考别人的博客解释](https://cloud.tencent.com/developer/article/1131945)

数组为[2,2,2,3]，一共有四个元素，进行四次循环。

第一次循环，b=(0000^0010)&1111=0010=2，a=(0000^0010)&1101=0000=0

第二次循环，b=(0010^0010)&1111=0000=0，a=(0000^0010)&1111=0010=2

第三次循环，b=(0000^0010)&1101=0000=0，a=(0010^0010)&1111=0000=0

第四次循环，b=(0000^0011)&1111=0011=3，a=(0000^0011)&1100=0000=0

某个值nums[i]第一次出现的时候，b把它记录了下来，这时候a=0；接着第二次出现的时候，b被清空了，记录到了a里面；接着第三次出现的时候，b和a都被清空了。

如果一个数组中，所有的元素除了一个特殊的只出现一次，其他都出现了三次，那么根据我们刚刚观察到的结论，最后这个特殊元素必定会被记录在b中。

````javascript
var singleNumber = function(nums) {
    let a = 0;
    let b = 0;
    nums.forEach(e => {
        b = (b ^ e) & ~a;
        a = (a ^ e) & ~b;
    })
    return b;
}
````

