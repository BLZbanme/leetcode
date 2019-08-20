# 171. Excel Sheet Column Number

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

```
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
```

**Example 1:**

```
Input: "A"
Output: 1
```

**Example 2:**

```
Input: "AB"
Output: 28
```

**Example 3:**

```
Input: "ZY"
Output: 701
```

##### 2019.08.20

##### 	我的思路：

```javascript
var titleToNumber = function(s) {
    let sum = 0;
    if (!s) {
        return sum;
    }
    let e = 1;    
    const ACode = 'A'.charCodeAt() - 1;
    for (let i = s.length - 1; i >= 0; i--) {
        sum += (s[i].charCodeAt() - ACode) * e;
        e *= 26;
    }
    return sum;
};
```

##### 	别人的方法：

```javascript
var titleToNumber = function(s) {
    let sum = 0;
    if (!s) {
        return sum;
    }
    const ACode = 'A'.charCodeAt() - 1;
    for (let i = 0, len = s.length; i < len; i++) {
        sum = sum * 26 + (s[i].charCodeAt() - ACode);
    }
    return sum;
};
```
