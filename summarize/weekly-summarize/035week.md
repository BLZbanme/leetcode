# 392. Is Subsequence

Given a string **s** and a string **t**, check if **s** is subsequence of **t**.

You may assume that there is only lower case English letters in both **s** and **t**. **t** is potentially a very long (length ~= 500,000) string, and **s** is a short string (<=100).

A subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, `"ace"` is a subsequence of `"abcde"` while `"aec"` is not).

**Example 1:**
**s** = `"abc"`, **t** = `"ahbgdc"`

Return `true`.

**Example 2:**
**s** = `"axc"`, **t** = `"ahbgdc"`

Return `false`.

**Follow up:**
If there are lots of incoming S, say S1, S2, ... , Sk where k >= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?

**Credits:**
Special thanks to [@pbrother](https://leetcode.com/pbrother/) for adding this problem and creating all test cases.

##### 2019.12.23

#### 	我的思路：

​		判断遍历完t的时候能否遍历完s

```javascript
var isSubsequence = function(s, t) {
    let index = 0;
    let i = 0;
    const sLen = s.length;
    const tLen = t.length;
    while (index < sLen && i < tLen) {
        if (t[i] === s[index]) {
            index++;
        }
        i++;
    }
    return index === sLen;
};
```

#### 别人的方法：

​		对t出现的字符下标进行缓存，然后遍历s时在缓存中二分查找，判断是否能找到一个比当前临时小标大的值。

##### 注意：二分查找可以找到当前查找值在数据中的下一个插入点

```javascript
var isSubsequence = function(s, t) {
    const aCode = 'a'.charCodeAt();
    let mapArr = new Array(26);
    const tLen = t.length;
    for (let i = 0; i < tLen; i++) {
        if (mapArr[t[i].charCodeAt() - aCode]) {
            mapArr[t[i].charCodeAt() - aCode].push(i);
        }
        else {
            mapArr[t[i].charCodeAt() - aCode] = [i];
        }
    }

    let index = 0;
    for (let i = 0, sLen = s.length; i < sLen; i++) {
        let indexArray = mapArr[s[i].charCodeAt() - aCode];
        if (!indexArray) {
            return false;
        }
        let lo = 0;
        let hi = indexArray.length;
        while (lo <= hi) {
            let mid = Math.floor(lo + Math.floor((hi - lo) / 2));
            if (indexArray[mid] < index) {
                lo = mid + 1;
            }
            else {
                hi = mid - 1;
            }
        }
        if (lo === indexArray.length) {
            return false;
        }
        index = indexArray[lo] + 1;
    }
    return true;
}
```

#### 2020.07.27

##### redo

dp

```javascript
var isSubsequence = function(s, t) {
    const N = s.length;
    const M = t.length;
    const aCode = 'a'.charCodeAt();

    const dp = Array(M + 1);
    for (let i = 0; i <= M; i++) {
        dp[i] = Array(26);
    }

    for (let i = 0; i < 26; i++) {
        dp[M][i] = M;
    }

    for (let i = M - 1; i >= 0; i--) {
        for (let j = 0; j < 26; j++) {
            if (t[i].charCodeAt() === j + aCode) {
                dp[i][j] = i;
            }
            else {
                dp[i][j] = dp[i + 1][j];
            }
        }
    }
    let add = 0;
    for (let i = 0; i < N; i++) {
        if (dp[add][s[i].charCodeAt() - aCode] === M) {
            return false;
        }
        add = dp[add][s[i].charCodeAt() - aCode] + 1;
    }
    return true;
}
```

