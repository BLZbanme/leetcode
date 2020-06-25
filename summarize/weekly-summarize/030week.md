# [剑指 Offer 38. 字符串的排列](https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof/)

 输入一个字符串，打印出该字符串中字符的所有排列。

 

你可以以任意顺序返回这个字符串数组，但里面不能有重复元素。

 

示例:

输入：s = "abc"
输出：["abc","acb","bac","bca","cab","cba"]


限制：

1 <= s 的长度 <= 8

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/zi-fu-chuan-de-pai-lie-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

##### 2020.06.24

#### 我的方法

##### 经典回朔！

```javascript
var permutation = function(s) {
    let strArr = s.split("");
   
    strArr.sort((a, b) => a.localeCompare(b));

    const result = new Set();

    let i = 0;
    const sLen = s.length;
    
    while (i < sLen) {
        if (i > 0  && strArr[i] === strArr[i - 1]) {
            i++;
            continue;
        }
        dfs(strArr[i], i);
        i++
    }

    function dfs(str, index) {
        if (str.length === sLen) {
            result.add(str);
            return;
        }

        
        let tmp = strArr[index];
        strArr[index] = "";
        for (let i = 0; i < sLen; i++) {
            if (!strArr[i]) {
                continue;
            }
            dfs(str + strArr[i], i);
        }
        strArr[index] = tmp;
    }

    return Array.from(result);
};
```

改进，如何去重的方式，在每一个dfs中增加set判断

```javascript
var permutation = function(s) {
    let strArr = s.split("");
   
    strArr.sort((a, b) => a.localeCompare(b));

    const result = [];

    let i = 0;
    const sLen = s.length;
    
    while (i < sLen) {
        if (i > 0  && strArr[i] === strArr[i - 1]) {
            i++;
            continue;
        }
        dfs(strArr[i], i);
        i++
    }

    function dfs(str, index) {
        if (str.length === sLen) {
            result.push(str);
            return;
        }

        const set = new Set();
        
        let tmp = strArr[index];
        strArr[index] = "";
        for (let i = 0; i < sLen; i++) {
            if (!strArr[i] || set.has(strArr[i])) {
                continue;
            }
            set.add(strArr[i])
            dfs(str + strArr[i], i);
        }
        strArr[index] = tmp;
    }

    return result;
};
```

#### 别人的写法：

##### 经典交换字符（值得学！）

```javascript
var permutation = function(s) {
    const result = [];
    let strArr = s.split("");

    dfs(0);
    
    function dfs(index) {

        if (index === s.length - 1) {
            result.push(strArr.join(""));
            return;
        }

        const set = new Set();

        for (let i = index; i < s.length; i++) {
            if (set.has(strArr[i])) {
                continue;
            }
            set.add(strArr[i]);
            [strArr[i], strArr[index]] = [strArr[index], strArr[i]]
            dfs(index + 1);
            [strArr[i], strArr[index]] = [strArr[index], strArr[i]]
        }
    }

    return result;
};
```

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

##### 方法1：

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

#### 2020.06.25 redo

```javascript
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
```

##### 别人的方法：

BFS，visited数组记录遍历访问到的下标

```javascript
var wordBreak = function(s, wordDict) {
    const set = new Set(wordDict);
    
    const queue = [0];
    const visited = new Set([0]);
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
```

