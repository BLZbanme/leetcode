# 336. Palindrome Pairs

Given a list of **unique** words, find all pairs of **distinct** indices `(i, j)` in the given list, so that the concatenation of the two words, i.e. `words[i] + words[j]` is a palindrome.

**Example 1:**

```
Input: ["abcd","dcba","lls","s","sssll"]
Output: [[0,1],[1,0],[3,2],[2,4]] 
Explanation: The palindromes are ["dcbaabcd","abcddcba","slls","llssssll"]
```

**Example 2:**

```
Input: ["bat","tab","cat"]
Output: [[0,1],[1,0]] 
Explanation: The palindromes are ["battab","tabbat"]
```

#### 2020.08.06

#### 	我的思路：

​		暴力

```javascript
var palindromePairs = function(words) {
    const N = words.length;
    const result = [];

    const dfs = (index) => {
        if (index === N) {
            return;
        }
        let now = words[index];
        for (let i = index + 1; i < N; i++) {
            if (isPalindrome(now + words[i])) {
                result.push([index, i]);
            }
            if (isPalindrome(words[i] + now)) {
                result.push([i, index]);
            }
        }
        dfs(index + 1);
    }

    dfs(0);

    return result;
};

function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i++] !== str[j--]) {
            return false;
        }
    }
    return true;
}
```

#### 别人的写法：

​		每次分割字符串，看看能不能找到对称轴！

复杂度O(nL<sup>2</sup>)

```javascript
function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i++] !== str[j--]) {
            return false;
        }
    }
    return true;
}

var palindromePairs = function(words) {
    const reversedMap = new Map();
    for (let i = 0; i < words.length; i++) {
        const reversed = words[i].split('').reverse().join('');
        reversedMap.set(reversed, i);
    }

    const res = [];

    for (let i = 0; i < words.length; i++) {
        const curWord = words[i];
        if (isPalindrome(curWord) && reversedMap.has('') && curWord !== '') {
            res.push([reversedMap.get(''), i]);
          }
      
        for (let j = 0; j < curWord.length; j++) {
            const left = curWord.substring(0, j);
            const right = curWord.substring(j);
            if (isPalindrome(left) && reversedMap.has(right) && reversedMap.get(right) !== i) {
                res.push([reversedMap.get(right), i]);
            }

            if (isPalindrome(right) && reversedMap.has(left) && reversedMap.get(left) !== i) {
                res.push([i, reversedMap.get(left)]);
            }
        }
    }

    return res;
}
```
