# 168. Excel Sheet Column Title

Given a positive integer, return its corresponding column title as appear in an Excel sheet.

For example:

```
    1 -> A
    2 -> B
    3 -> C
    ...
    26 -> Z
    27 -> AA
    28 -> AB 
    ...
```

**Example 1:**

```
Input: 1
Output: "A"
```

**Example 2:**

```
Input: 28
Output: "AB"
```

**Example 3:**

```
Input: 701
Output: "ZY"
```

##### 2019.08.26

##### 	我的思路：

​		没啥好写的，就是这个```--n```有点小精妙

```javascript
var convertToTitle = function(n) {
    let codeA = 'A'.charCodeAt();
    let result = '';
    while (n) {
        result = String.fromCharCode(--n % 26 + codeA)  + result;
        n = Math.floor(n / 26);
    }
    return result;
};
```

