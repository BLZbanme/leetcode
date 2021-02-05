# 567. Permutation in String

Given two strings **s1** and **s2**, write a function to return true if **s2** contains the permutation of **s1**. In other words, one of the first string's permutations is the **substring** of the second string.

 

**Example 1:**

```
Input: s1 = "ab" s2 = "eidbaooo"
Output: True
Explanation: s2 contains one permutation of s1 ("ba").
```

**Example 2:**

```
Input:s1= "ab" s2 = "eidboaoo"
Output: False
```

 

**Constraints:**

- The input strings only contain lower case letters.
- The length of both given strings is in range [1, 10,000].

#### 2021.02.05

##### 	我的思路：

```javascript
function checkInclusion(s1: string, s2: string): boolean {
    const arr = Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
    const m = s1.length;
    const n = s2.length;
    for (let i = 0; i < m; i++) {
        arr[s1.charCodeAt(i) - aCode]++;
    }
    for (let i = 0; i < n; i++) {
        if (i < m) {
            arr[s2.charCodeAt(i) - aCode]--;
            if (i == m - 1) {
                if (arr.every(e => !e)) return true;
            }
        }
        else {
            arr[s2.charCodeAt(i - m) - aCode]++;
            arr[s2.charCodeAt(i) - aCode]--;
            if (arr.every(e => !e)) return true;
        }
    }
    return false;
};
```
