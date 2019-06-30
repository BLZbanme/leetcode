# 67. Add Binary

Given two binary strings, return their sum (also a binary string).

The input strings are both **non-empty** and contains only characters `1` or `0`.

**Example 1:**

```
Input: a = "11", b = "1"
Output: "100"
```

**Example 2:**

```
Input: a = "1010", b = "1011"
Output: "10101"
```

##### 2019.06.28

##### 	我的思路：

​	代码重复率较高

```javascript
var addBinary = function(a, b) {
    let tmp = 0, res = "";
    let la = a.length - 1;
    let lb = b.length - 1;
    for(; la >= 0 && lb >= 0; la--, lb--){
        tmp += parseInt(a[la]) + parseInt(b[lb]);
        if(tmp > 1){
            res =  tmp % 2 + res;
            tmp = parseInt(tmp / 2);
        }else{
            res = tmp + res;
            tmp = 0;
        }
    }
    while(la >= 0){
        tmp += parseInt(a[la]);
        if(tmp > 1){
            res = tmp % 2 + res;
            tmp = parseInt(tmp / 2);
            la--;
        }else{
            return a.substring(0, la) + tmp + res;
        }
    }
    while(lb >= 0){
        tmp += parseInt(b[lb]);
        if(tmp > 1){
            res = tmp % 2 + res;
            tmp = parseInt(tmp / 2);
            lb--;
        }else{
            return b.substring(0, lb) + tmp + res;
        }
    }
    return tmp == 0 ? res : 1 + res;
};
```

##### 别人的写法：

​	很简洁，但我觉得我的写法虽然冗长，但也有一处可取之处，就是判断不再进位，且还有字符串没加完时，直接把没加完的字符串substring，然后与res拼起来。不过这样的话循环的时候不断要判断if，导致没有这个快了。

```javascript
var addBinary = function(a, b) {
    let i = a.length - 1, j = b.length - 1, tmp = 0;
    let res = "";
    while(i >= 0 || j >= 0){
        if(i >= 0){
            tmp += parseInt(a[i--]);
        }
        if(j >= 0){
            tmp += parseInt(b[j--]);
        }
        res = tmp % 2 + res;
        tmp = parseInt(tmp / 2);
    }
    return tmp == 0 ? res : 1 + res;
}
```

