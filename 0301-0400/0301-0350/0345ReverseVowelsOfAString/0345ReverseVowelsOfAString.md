# 345.Reverse Vowels of a String

Write a function that takes a string as input and reverse only the vowels of a string.

**Example 1:**

```
Input: "hello"
Output: "holle"
```

**Example 2:**

```
Input: "leetcode"
Output: "leotcede"
```

**Note:**
The vowels does not include the letter "y".

##### 2019.10.24

##### 	我的思路：

头尾指针法

```javascript
var reverseVowels = function(s) {
    if (!s.length) {
        return s;
    }
    const N = s.length;
    let i = 0;
    let j = N - 1;
    let set = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let arr = s.split("");
    while (i < j) {
        while (i < j) {
            if (set.has(s[i])) {
                break;
            }
            i++;
        }

        while (i < j) {
            if (set.has(s[j])) {
                break;
            }
            j--;
        }
        [arr[i++], arr[j--]] = [arr[j], arr[i]];
    }
    return arr.join("");
};
```
