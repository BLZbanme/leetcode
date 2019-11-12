# 283. Move Zeroes

Given a `pattern` and a string `str`, find if `str` follows the same pattern.

Here **follow** means a full match, such that there is a bijection between a letter in `pattern` and a **non-empty** word in `str`.

**Example 1:**

```
Input: pattern = "abba", str = "dog cat cat dog"
Output: true
```

**Example 2:**

```
Input:pattern = "abba", str = "dog cat cat fish"
Output: false
```

**Example 3:**

```
Input: pattern = "aaaa", str = "dog cat cat dog"
Output: false
```

**Example 4:**

```
Input: pattern = "abba", str = "dog dog dog dog"
Output: false
```

**Notes:**
You may assume `pattern` contains only lowercase letters, and `str` contains lowercase letters that may be separated by a single space.

##### 2019.11.06

##### 	我的思路：

1. 用一个map记录pattern中出现的字符
2. 遍历pattern，对于map中没出现的字符，进行记录对应的str中的字符串，并用一个set记录该字符串
3. 对于出现过的字符就判断对应str中的字符串，是否等于map中的值
4. set中记录出现过的字符串是防止出现Example4中的情况

```javascript
var wordPattern = function(pattern, str) {
    let map = new Map();
    let set = new Set();
    let arr = str.split(" ");
    const N = pattern.length;
    if (arr.length !== N) {
        return false;
    }
    for (let i = 0; i < N; i++) {
        if (!map.has(pattern[i])) {
            if (!set.has(arr[i])) {
                set.add(arr[i]);
                map.set(pattern[i], arr[i]);
            }
            else {
                return false;
            }
        }
        else if (map.get(pattern[i]) !== arr[i]) {
            return false;
        }
    }
    return true;
};
```
