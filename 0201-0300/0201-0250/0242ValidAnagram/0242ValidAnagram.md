# 242. Valid Anagram

Given two strings *s* and *t* , write a function to determine if *t* is an anagram of *s*.

**Example 1:**

```
Input: s = "anagram", t = "nagaram"
Output: true
```

**Example 2:**

```
Input: s = "rat", t = "car"
Output: false
```

**Note:**
You may assume the string contains only lowercase alphabets.

**Follow up:**
What if the inputs contain unicode characters? How would you adapt your solution to such case?

##### 2019.09.26

##### 	我的思路：

​	利用数组记录每句话的词频，比较这两个数组的各个元素是否相同

```javascript
var isAnagram = function(s, t) {
    if ((!s && t) || (s && !t) || s.length !== t.length) {
        return false;
    }
    let arr1 = new Array(26).fill(0);
    let arr2 = new Array(26).fill(0);
    const N = s.length;
    let codeA = 'a'.charCodeAt();
    for (let i = 0; i < N; i++) {
        arr1[s[i].charCodeAt() - codeA]++;
        arr2[t[i].charCodeAt() - codeA]++;
    }
    for (let i = 0; i < 26; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
};

```

##### 别人的方法：

​	看了眼别人的方法，自己写的，一个辅助数组完成。

```javascript
var isAnagram = function(s, t) {
    if ((!s && t) || (s && !t) || s.length !== t.length) {
        return false;
    }
    let arr = new Array(26).fill(0);
    const N = s.length;
    let codeA = 'a'.charCodeAt();
    for (let i = 0; i < N; i++) {
        arr[s[i].charCodeAt() - codeA]++;
        arr[t[i].charCodeAt() - codeA]--;
    }
    return arr.every(e => e === 0);
};
```

