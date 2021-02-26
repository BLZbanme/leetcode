# 395. Longest Substring with At Least K Repeating Characters

Given a string `s` and an integer `k`, return *the length of the longest substring of* `s` *such that the frequency of each character in this substring is greater than or equal to* `k`.

 

**Example 1:**

```
Input: s = "aaabb", k = 3
Output: 3
Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.
```

**Example 2:**

```
Input: s = "ababbc", k = 2
Output: 5
Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
```

 

**Constraints:**

- `1 <= s.length <= 104`
- `s` consists of only lowercase English letters.
- `1 <= k <= 105`

#### 2021.02.27

#### 我的思路：

​	没做出来

#### 别人的思路：

```javascript
var longestSubstring = function(s, k) {
    const n = s.length;
    const aCode = 'a'.charCodeAt();
    const dfs = (l, r) => {
        const map = Array(26).fill(0);
        for (let i = l; i <= r; i++) {
            map[s.charCodeAt(i) - aCode]++;
        }
        let split = 0;
        for (let i = 0; i < 26; i++) {
            if (map[i] > 0 && map[i] < k) {
                split = String.fromCharCode(i + aCode);
                break;
            }
        }
        if (split === 0) {
            return r - l + 1;
        }
        let i = l;
        let res = 0;
        while (i <= r) {
            while (i <= r && s[i] === split) {
                i++;
            }
            if (i > r) {
                break;
            }
            let start = i;
            while (i <= r && s[i] !== split) {
                i++;
            }
            const length = dfs(start, i - 1);
            res = Math.max(res, length);
        }
        return res;
    }

    return dfs(0, n - 1);
};
```



