# 127. Word Ladder

Given two words (*beginWord* and *endWord*), and a dictionary's word list, find the length of shortest transformation sequence from *beginWord* to *endWord*, such that:

1. Only one letter can be changed at a time.
2. Each transformed word must exist in the word list. Note that *beginWord* is *not* a transformed word.

**Note:**

- Return 0 if there is no such transformation sequence.
- All words have the same length.
- All words contain only lowercase alphabetic characters.
- You may assume no duplicates in the word list.
- You may assume *beginWord* and *endWord* are non-empty and are not the same.

**Example 1:**

```
Input:
beginWord = "hit",
endWord = "cog",
wordList = ["hot","dot","dog","lot","log","cog"]

Output: 5

Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
return its length 5.
```

**Example 2:**

```
Input:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]

Output: 0

Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.
```

##### 2019.08.07

##### 别人的方法：

​		这题由于我BFS的题目练习的比较少，并且一开始理解错题目意思了，没写出来，就直接学习了别人的思路。

巧妙地是永远都是把beginSet交换成beginSet和endSet中较少元素的那一个。

```javascript
var ladderLength = function(beginWord, endWord, wordList) {
    if (wordList.indexOf(endWord) === -1) {
        return 0;
    }
    let beginSet = new Set();
    let endSet = new Set();

    let len = 1;
    let visited = new Set();
    let a = 'a'.charCodeAt();
    let z = 'z'.charCodeAt();
    let dict = new Set(wordList);

    beginSet.add(beginWord);
    endSet.add(endWord);

    while (beginSet.size) {
        if (beginSet.size > endSet.size) {
            let set = beginSet;
            beginSet = endSet;
            endSet = set;
        }

        let tmp = new Set();
        for (let word of beginSet) {
            let chs = word.split("");
            for (let i = 0; i < chs.length; i++) {
                for (let c = a; c <= z; c++) {
                    let old = chs[i];
                    chs[i] = String.fromCharCode(c);
                    let target = chs.join("");
                    if (endSet.has(target)) {
                        return len + 1;
                    }
                    if (!visited.has(target) && dict.has(target)) {
                        tmp.add(target);
                        visited.add(target);
                    }
                    chs[i] = old;
                }
            }
        }
        beginSet = tmp;
        len++;
    }
    return 0;
}
```
