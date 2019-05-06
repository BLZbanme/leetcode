#### 问题描述

​	Given a string, find the length of the **longest substring** without repeating characters.

#### **Example**

```
Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
```

```
Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
```

```
Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
             Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
```

#### 我的解决方法	

##### 2019.05.06

​	两层循环遍历字符串，内层循环每次新遍历一个字符时判断之前的字符串是否存在该字符。若存在，则把外层循环跳到该字符上一次出现的下一个字符位。复杂度O(n)	

```javascript
var lengthOfLongestSubstring = function(s) {
    var maxlength = 0;
    let i = 0;
    while(i < s.length){
        let j = i + 1;
        while(j < s.length){
            var sub = s.substring(i, j);
            if(sub.indexOf(s.charAt(j)) == -1){
                j++;
                continue;
            }else{
                maxlength = maxlength > sub.length ? maxlength : sub.length;
                i += sub.indexOf(s.charAt(j));
                break;
            }
        };
        if(j == s.length){
            return maxlength > j - i ? maxlength : j - i;
        }
        i++;
    }
    return maxlength;
};
```

