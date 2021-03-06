# 389. Find the Difference

Given two strings **s** and **t** which consist of only lowercase letters.

String **t** is generated by random shuffling string **s** and then add one more letter at a random position.

Find the letter that was added in **t**.

**Example:**

```
Input:
s = "abcd"
t = "abcde"

Output:
e

Explanation:
'e' is the letter that was added.
```

##### 2019.11.26

#### 	我的思路：

​		用字典记录，一加一减，找到出现次数小于0的值，就是多的。

```javascript
var findTheDifference = function(s, t) {
    let arr = new Array(26).fill(0);
    const ACode = 'a'.charCodeAt();
    for (let i = 0; i < s.length; i++) {
        arr[s[i].charCodeAt() - ACode]++;
    }

    for (let i = 0; i < t.length; i++) {
        arr[t[i].charCodeAt() - ACode]--;
        if (arr[t[i].charCodeAt() - ACode] < 0) {
            return t[i];
        }
    }
};
```

#### 别人的方法：

##### 方法1：

​		相当于我的优化，因为这题其实字点不用存具体值，直接计算字符码和，求最后差值。

```javascript
var findTheDifference = function(s, t) {
    let charCode = t[s.length].charCodeAt();
    for (let i = 0; i < s.length; i++) {
        charCode -= s[i].charCodeAt();
        charCode += t[i].charCodeAt();
    }
    return String.fromCharCode(charCode);
}
```

##### 方法2：

​		位运算，要求多余的值的时候，异或总是一个很好的方法！

```javascript
var findTheDifference = function(s, t) {
    const N = t.length;
    let c = t[N - 1].charCodeAt();
    for (let i = 0; i < N - 1; i++) {
        c ^= s[i].charCodeAt();
        c ^= t[i].charCodeAt();
    }
    return String.fromCharCode(c);
}
```

