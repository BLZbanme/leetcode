#### 问题描述

​	Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string `""`.

**Example 1:**

```
Input: ["flower","flow","flight"]
Output: "fl"
```

**Example 2:**

```
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

**Note:**

All given inputs are in lowercase letters `a-z`.

##### 我的解决方法	

##### 2019.05.16

##### 	我的思路：

​	从字符串数组中的每个字符串第一个字符开始对比起，如果全部相同就扫下一个字符，循环终结的条件是某个字符串被扫完了 ，即strs[j] == i 。时间复杂度O(S)，S是所有字符串的长度和。

```javascript
var longestCommonPrefix = function(strs) {
    if(strs.length == 0){
        return "";
    }
    let i = 0;
    let now ="";
    let str = strs[0];
    while(true){
        if(i == str.length){
            return str;
        }
        now = str[i]
        for(let j = 1; j < strs.length; j++){
            if(i == strs[j].length || strs[j][i] != now){
                return str.substring(0, i);
            }
        }
        i++;
    }
};
```

##### 	别人的思路：

​	方法1：先找到第一个字符串和第二个字符串最长公共前缀，然后用这个前缀依次和后面每个字符串对比。时间复杂度，空间复杂度同我的方法。

```javascript
var longestCommonPrefix = function(strs) {
    if(strs.length == 0){
        return "";
    }
    let now = strs[0];
    for(let i = 1; i < strs.length; i++){
        while(strs[i].indexOf(now) != 0){
            now = now.substring(0, now.length - 1);
            if(now == ""){
                return now;
            }
        }
    }
    return now;
}
```

