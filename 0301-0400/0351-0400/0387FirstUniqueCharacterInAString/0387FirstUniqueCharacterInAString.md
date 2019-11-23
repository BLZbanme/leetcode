# 387. First Unique Character in a String

Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

**Examples:**

```
s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
```

**Note:** You may assume the string contain only lowercase letters.

##### 2019.11.23

#### 	我的思路：

##### 方法1：

​		用set，遍历两趟

```javascript
var firstUniqChar = function(s) {
    const map = new Map();
    for (let c of s) {
        let tmp = map.get(c);
        if (tmp) {
            map.set(c, tmp + 1);
        }
        else {
            map.set(c, 1);
        }
    }

    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};
```

##### 方法2：

用数组两次遍历

```javascript
var firstUniqChar = function(s) {
    const array = new Array(26).fill(0);
    const ANum = 'a'.charCodeAt();
    for (let c of s) {
        array[c.charCodeAt() - ANum]++;
    }
    for (let i = 0; i < s.length; i++) {
        if (array[s[i].charCodeAt() - ANum] === 1) {
            return i;
        }
    }

    return -1;
};
```
