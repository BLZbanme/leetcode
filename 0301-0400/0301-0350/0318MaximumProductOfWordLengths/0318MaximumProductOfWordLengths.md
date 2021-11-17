# 318. Maximum Product of Word Lengths

Given a string array `words`, find the maximum value of `length(word[i]) * length(word[j])` where the two words do not share common letters. You may assume that each word will contain only lower case letters. If no such two words exist, return 0.

**Example 1:**

```
Input: ["abcw","baz","foo","bar","xtfn","abcdef"]
Output: 16 
Explanation: The two words can be "abcw", "xtfn".
```

**Example 2:**

```
Input: ["a","ab","abc","d","cd","bcd","abcd"]
Output: 4 
Explanation: The two words can be "ab", "cd".
```

**Example 3:**

```
Input: ["a","aa","aaa","aaaa"]
Output: 0 
Explanation: No such pair of words.
```

##### 2019.10.17

##### 	我的思路：

​	暴力循环

```javascript
var maxProduct = function(words) {
    const N = words.length;
    let max = 0;
    for (let i = 0; i < N; i++) {
        for (let j = i + 1; j < N; j++) {
            if (aHasB(words[j], words[i])) {
                continue;
            }
            else {
                max = Math.max(max, words[i].length * words[j].length);
            }
        }
    }
    return max;
};

function aHasB(a, b) {
    for (let i = 0, len = a.length; i < len; i++) {
        if (b.indexOf(a[i]) !== -1) {
            return true;
        }
    }
    return false;
}
```

##### 别人的写法：

​		用很巧妙的方法把每个字符串，根据其中出现的字符编码成一个二进制串，如果两个字符串没有相同的字符，那么他们编码的二进制串应该交为"0"！，牛逼！

```javascript
var maxProduct = function(words) {
    if (!words || !words.length) {
        return 0;
    }
    let len = words.length;
    let value = new Array(len).fill(0);
    const aCode = 'a'.charCodeAt();
    for (let i = 0; i < len; i++) {
        let tmp = words[i];
        for (let j = 0; j < tmp.length; j++) {
            value[i] |= 1 << (tmp[j].charCodeAt() - aCode);
        }
    }
    let max = 0;
    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if ((value[i] & value[j]) === 0 && (words[i].length * words[j].length > max)) {
                max = words[i].length * words[j].length;
            }
        }
    }
    return max;
}
```

#### 2021.11.17

##### redo

做了个缓存，记录同一个掩码最长的字符串长度

```python
class Solution:
    def maxProduct(self, words: List[str]) -> int:
        maskMap = dict()
        if not words or not len(words):
            return 0
        N = len(words)
        valueList = [0] * N
        aCode = ord('a')
        for i in range(N):
            word = words[i]
            for s in word:
                valueList[i] |= 1 << (ord(s) - aCode)
            if (len(word) >= maskMap.get(valueList[i], 0)):
                maskMap[valueList[i]] = len(word)
        
        maxVal = 0
        for mask1 in maskMap:
            for mask2 in maskMap:
                if (mask1 & mask2 == 0) and maskMap[mask1] * maskMap[mask2] > maxVal:
                    maxVal = maskMap[mask1] * maskMap[mask2]

        return maxVal
```

