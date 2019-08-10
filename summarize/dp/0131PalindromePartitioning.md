# 131. Palindrome Partitioning

Given a string *s*, partition *s* such that every substring of the partition is a palindrome.

Return all possible palindrome partitioning of *s*.

**Example:**

```
Input: "aab"
Output:
[
  ["aa","b"],
  ["a","a","b"]
]
```

##### 2019.08.09

##### 我的方法：

​		回溯

````javascript
var partition = function(s) {
    let result = [];
    let arr = [];
    helper(arr, 0, 0, s.length, s, result);  
    return result;
};

function helper(array, start, end, length, s, result) {
    if (end > length) {
        return;
    }
    if (start === length) {
        result.push(Array.from(array));
        return;
    }

    let tmp = s.slice(start, end + 1);
    let palindrome = isPalindrome(tmp);
    if (palindrome) {
        helper(array, start, end + 1, length, s, result);
        array.push(tmp);
        helper(array, end + 1, end + 1, length, s, result);
        array.pop();
    }
    else {
        helper(array, start, end + 1, length, s, result);
        return;
    }
}

function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i++] !== str[j--]) {
            return false;
        }
    }
    return true;
}
````

​		由于几个本来可以用全局变量传递的参数，在递归里面传了很多次，所以我选择使用闭包来写

```javascript
var partition = function(s) {
    let result = [];
    let arr = [];
    const N = s.length;

    function helper(array, start, end) {
        if (end > N) {
            return;
        }
        if (start === N) {
            result.push(Array.from(array));
            return;
        }
    
        let tmp = s.slice(start, end + 1);
        let palindrome = isPalindrome(tmp);
        if (palindrome) {
            helper(array, start, end + 1);
            array.push(tmp);
            helper(array, end + 1, end + 1);
            array.pop();
        }
        else {
            helper(array, start, end + 1);
            return;
        }
    }

    helper(arr, 0, 0);  
    return result;
};

function isPalindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while (i < j) {
        if (str[i++] !== str[j--]) {
            return false;
        }
    }
    return true;
}
```

##### 别人的方法：

​		dp，二维```dp[i][j]```来存储字符串的i到j是不是回文串

```javascript
var partition = function(s) {
    const N = s.length;
    let result = [];
    result[0] = [];
    result[0].push([]);
    let pair = new Array(N);
    for (let i = 0; i < N; i++) {
        pair[i] = new Array(N);
    }

    for (let i = 0; i < N; i++) {
        result[i + 1] = [];
        for (let left = 0; left <= i; left++) {
            if ((s[left] === s[i]) && (i - left <= 1 || pair[left + 1][i - 1])) {
                pair[left][i] = pair[left][i] = true;
                let str = s.substring(left, i + 1);
                for (let r of result[left]) {
                    let tmp = Array.from(r);
                    tmp.push(str);
                    result[i + 1].push(tmp);
                }
            }
        }
    }
    return result[N];
}
```
