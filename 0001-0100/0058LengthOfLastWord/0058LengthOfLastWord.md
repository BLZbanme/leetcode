# 58.Length of Last Word

Given a string *s* consists of upper/lower-case alphabets and empty space characters `' '`, return the length of last word in the string.

If the last word does not exist, return 0.

**Note:** A word is defined as a character sequence consists of non-space characters only.

**Example:**

```
Input: "Hello World"
Output: 5
```

##### 2019.06.21

##### 	我的思路：

##### 	方法1：

​	 把s按" "来split成数组，判断最后一项的长度

```javascript
var lengthOfLastWord = function(s) {
    s = s.trim()
    let arr = s.split(" ");
    if(arr.length == 1){
        return s.length;
    }
    return arr.pop().length;
};
```

##### 	方法2：

​	从后往前找，找到用length的值来判断遇到的" "是不是字符串尾部的。

```javascript
var lengthOfLastWord = function(s) {
    let length = 0;
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] === " "){
            if(length === 0){
                continue;
            }else{
                return length;
            }
        }else{
            length++;
        }
    }
    return length;
};
```

​	用while写就是：

```javascript
var lengthOfLastWord = function(s) {
    let res = 0;
    let index = s.length - 1;
    while(index >= 0 && s[index] === " "){
        index--;
    }
    while(index >= 0 && s[index] !== " "){
        res++;
        index--;
    }
    return res;
};
```

##### 别人的思路：

​	我都已经想到从后往前找了，我应该能想到的QAQ

```javascript
var lengthOfLastWord = function(s) {
    s = s.trim();
    let i = s.lastIndexOf(" ");
    return s.length - 1 - i;
};
```

