# 467. Unique Substrings in Wraparound String

Consider the string `s` to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so `s` will look like this: "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".

Now we have another string `p`. Your job is to find out how many unique non-empty substrings of `p` are present in `s`. In particular, your input is the string `p` and you need to output the number of different non-empty substrings of `p` in the string `s`.

**Note:** `p` consists of only lowercase English letters and the size of p might be over 10000.

**Example 1:**

```
Input: "a"
Output: 1

Explanation: Only the substring "a" of string "a" is in the string s.
```



**Example 2:**

```
Input: "cac"
Output: 2
Explanation: There are two substrings "a", "c" of string "cac" in the string s.
```



**Example 3:**

```
Input: "zab"
Output: 6
Explanation: There are six substrings "z", "a", "b", "za", "ab", "zab" of string "zab" in the string s.
```

#### 2021.02.04

##### 我的写法

没有去重！失败！

##### 别人的写法

用一个dp数组存储以当前字符结尾的子串个数！

```typescript
function findSubstringInWraproundString(p: string): number {
    let left = 0;
    const n = p.length;
    const dp = Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
    for (let right = 0; right < n; right++) {
        if (!(left == right 
            || (p[right] === 'a' && p[right - 1] === 'z') || (p.charCodeAt(right)- p.charCodeAt(right - 1) === 1))) {
                left = right;        
            }
        dp[p.charCodeAt(right) - aCode] = Math.max(dp[p.charCodeAt(right) - aCode], right - left + 1);
    }
    return dp.reduce((cur, pre) => cur + pre);
};
```

##### 优化

只用一个变量来记录窗口长度

##### 心得：

这种窗口左边界可以直接跳动的，只需要一个变量来记录窗口长度！

```typescript
function findSubstringInWraproundString(p: string): number {
    const n = p.length;
    const dp = Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);
    let pre = 0;
    for (let i = 0; i < n; i++) {
        if (i === 0
            || (p[i] === 'a' && p[i - 1] === 'z') || (p.charCodeAt(i)- p.charCodeAt(i - 1) === 1)) {
                pre++;
            }
            else {
                pre = 1;
            }
        dp[p.charCodeAt(i) - aCode] = Math.max(dp[p.charCodeAt(i) - aCode], pre);
    }
    return dp.reduce((cur, pre) => cur + pre);
};
```

