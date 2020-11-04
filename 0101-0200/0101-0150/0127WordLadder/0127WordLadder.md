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

#### 2020.10.05

##### redo

1. 队列queue中存储当前步伐所能对应的字符串
2. 初始化count为1步	
3. count++
4. 每次循环把当前步数能走到的字符串now，now = queue.shift()全部拿出来走一走
5. 判断wordList中是否存在字符是可以由now一步走到，
   1. 如果得到了endWord可以直接return count；
   2. 把满足置换一个字符但不是endWord的wordList[i]全部push进queue，并且把wordList[i]置为空，防止重走
   3. 之后重复2-4
6. 如果没有，说明走不到endWord了，queue为空时，跳出循环，return 0

```typescript
function ladderLength(beginWord: string, endWord: string, wordList: string[]): number {
  	//队列queue中存储当前步伐所能对应的字符串
    const queue: Array<string> = [beginWord];
    //初始化为1步	
    let count = 1;
    while (queue.length) {
      	//步数，当前队列的个数
        let tmp = queue.length;
      	//步数加1
        count++;
        while (tmp--) {
            //拿出一个字符串now
            let now = queue.shift();
            for (let i = 0; i < wordList.length; i++) {
                //判断wordList中是否有该字符串转一个字符可以变成的字符串
                if (checkTwoStr(now, wordList[i])) {
                    //如果直接能得到endWord则返回步数
                    if (wordList[i] === endWord) {
                        return count;
                    }
                    //否则，queue中新增能到达的字符
                    queue.push(wordList[i]);
                    //易知，所需要的最短的步数是不可能走回头路的，所以把走过的wordList[i]直接置空，防止重走
                    wordList[i] = "";
                }
            }
        }
    }

    return 0;
};

function checkTwoStr(str1: string | undefined, str2: string) {
    if (!str1 || !str2 || str1.length !== str2.length) {
        return false;
    }
    let result = false;
    for (let i = 0; i < str1.length; i++) {
        if (str1[i] != str2[i]) {
            if (!result) {
                result = true;
            }else {
                return false;
            }
        }
    }
    return result;
}
```

