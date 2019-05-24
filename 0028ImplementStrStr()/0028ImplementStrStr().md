​	Implement [strStr()](http://www.cplusplus.com/reference/cstring/strstr/).

Return the index of the first occurrence of needle in haystack, or **-1** if needle is not part of haystack.

**Example 1:**

```
Input: haystack = "hello", needle = "ll"
Output: 2
```

**Example 2:**

```
Input: haystack = "aaaaa", needle = "bba"
Output: -1
```

**Clarification:**

​	What should we return when `needle` is an empty string? This is a great question to ask during an interview.

​	For the purpose of this problem, we will return 0 when `needle` is an empty string. This is consistent to C's [strstr()](http://www.cplusplus.com/reference/cstring/strstr/) and Java's [indexOf()](https://docs.oracle.com/javase/7/docs/api/java/lang/String.html#indexOf(java.lang.String)).

##### 2019.05.24

##### 	我的思路：

​	 方法1：

​	暴力循环

```javascript
var strStr = function(haystack, needle) {
    if(needle == ""){
        return 0;
    }
    let i = 0, j = 0;
    let l = needle.length;
    while(i < haystack.length){
        while(j < l){
            if(i + j < haystack.length){
                if(haystack[i + j] == needle[j]){
                    j++;
                }else{
                    break;
                }
            }else{
                return -1;
            }
        }
        if(j == l){
            return i;
        }
        i++;
        j = 0;
    }
    if(i == haystack.length){
        return -1;
    }
};
```

​	方法2：

​	改进，好看版的暴力循环

```javascript
var removeDuplicates = function(nums) {
    let l = 0;
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[i - 1]){
            nums[++l] = nums[i];
        }
    }
    return l + 1;
};
```

##### 别人的写法

​	[KMP算法介绍](https://blog.csdn.net/v_july_v/article/details/7041827)

```javascript
var strStr = function(s, p){
    let next = getNext(p);
    let i = 0;
    let j = 0;
    let sLen = s.length;
    let pLen = p.length;
    while(i < sLen && j < pLen){
        if(j == -1 || s[i] == p[j]){
            i++;
            j++;
        }else{
            j = next[j];
        }
    }
    if(j == pLen){
        return i - j;
    }else{
        return -1;
    }
}

function getNext(str){
    let next = new Array(str.length);
    let i = 0, j = -1;
    next[0] = -1;
    while(i < str.length - 1){
        if(j == -1 || str[i] == str[j]){
            ++i;
            ++j;
            next[i] = j;
        }else{
            j = next[j];
        }
    }
    return next;
}
```

