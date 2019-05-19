#### 问题描述

​	Given an array `nums` of *n* integers, are there elements *a*, *b*, *c* in `nums` such that *a* + *b* + *c* = 0? Find all unique triplets in the array which gives the sum of zero.

**Note:**

The solution set must not contain duplicate triplets.

**Example:**

```
Given array nums = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]
```

##### 我的解决方法	

##### 2019.05.19

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

