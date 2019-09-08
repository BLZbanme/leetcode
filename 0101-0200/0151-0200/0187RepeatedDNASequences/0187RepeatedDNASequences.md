# 187. Repeated DNA Sequences

All DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.

Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.

**Example:**

```
Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"

Output: ["AAAAACCCCC", "CCCCCAAAAA"]
```

##### 2019.09.08

##### 	我的思路：

​		我一开始的思路，超时了

```javascript
var findRepeatedDnaSequences = function(s) {
    let result = [];
    let set = new Set();
    const N = s.length;
    for (let i = 0; i + 10 < N; i++) {
        let tmp = s.substring(i, i + 10);
        if (set.has(tmp)) {
            continue;
        }
        else {
            set.add(tmp);
            let index = s.lastIndexOf(tmp);
            if (index > i) {
                result.push(tmp);
            }
        }
    }
    return result;
};
```

##### 方法2：

​		然后我突然想到这题就像之前刷过的找出重复数字的题，思路几乎是一样的

```javascript
var findRepeatedDnaSequences = function(s) {
    let result = new Set();
    let set = new Set();
    const N = s.length;
    for (let i = 0; i + 10 <= N; i++) {
        let tmp = s.substring(i, i + 10);
        if (set.has(tmp)) {
            if (!result.has(tmp)) {
                result.add(tmp);
            }
        }
        else {
            set.add(tmp);
        }
    }
    return Array.from(result);
};
```

##### 	别人的方法：

​		和我方法2的思路一样，有一点优化就是```!result.has(tmp)```这个判断不需要

```javascript
var findRepeatedDnaSequences = function(s) {
    let result = new Set();
    let set = new Set();
    const N = s.length;
    for (let i = 0; i + 10 <= N; i++) {
        let tmp = s.substring(i, i + 10);
        if (set.has(tmp)) {
            result.add(tmp);
        }
        else {
            set.add(tmp);
        }
    }
    return Array.from(result);
};
```
