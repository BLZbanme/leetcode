# 383. Ransom Note

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

**Note:**
You may assume that both strings contain only lowercase letters.

```
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true
```

##### 2019.12.01

#### 	我的思路：

##### 方法1：

​	map

```javascript
var canConstruct = function(ransomNote, magazine) {
    let map = new Map();
    for (let i = 0; i < magazine.length; i++) {
        let tmp = map.get(magazine[i]);
        if (!tmp) {
            map.set(magazine[i], 1);
        }
        else {
            map.set(magazine[i], tmp + 1);
        }
    }

    for (let i = 0; i < ransomNote.length; i++) {
        let tmp = map.get(ransomNote[i]);
        if (!tmp) {
            return false;
        }
        else {
            map.set(ransomNote[i], tmp - 1);
        }
    }
    return true;
};
```

##### 方法2：

​	用数组做字典（实质和方法1一样）

```javascript
var canConstruct = function(ransomNote, magazine) {
    const arr = new Array(26).fill(0);
    const ACode = 'a'.charCodeAt();
    for (let i = 0; i < magazine.length; i++) {
        arr[magazine[i].charCodeAt() - ACode]++;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        if (!arr[ransomNote[i].charCodeAt() - ACode]--) {
            return false;
        }
    }
    return true;
};
```

