#### 问题描述

​	Given a string **s**, find the longest palindromic substring in **s**. You may assume that the maximum length of **s** is 1000.

#### Example

```
Input: "babad"
Output: "bab"
Note: "aba" is also a valid answer.
```

```
Input: "cbbd"
Output: "bb"
```

#### 我的解决方法	

##### 2019.05.11

​	我的思路，从左往右遍历字符串

（1）每个字符串同时往左右两边延长半径，若左右两边同距离的值不等或者超过数组边界，就停止，否则延长半径+1。

（2）如果遍历到的字符与它左边的字符相同，就以这两个字符为中点，进行（1）操作。

时间复杂度O(n^2）,空间复杂度O(n)

```javascript
var longestPalindrome = function(s) {
    var charArray = s.split("");
    var max = 0;
    var mid = 0;
    for(let i = 1 ; i < s.length; i++){
        if(charArray[i] == charArray[i - 1]){
            let cha = 1;
            let len = 2;
            while(i - cha >= 1 && i + cha + 1 <= s.length ){
                if(charArray[i - cha - 1] != charArray[i + cha]){
                    break;
                }
                len += 2;
                cha++;
            }
            if(max < len){
                max = len;
                mid = i;
            }
        }
        let cha = 1;
        let len = 1;
        while(i - cha >= 0 && i + cha + 1 <= s.length ){
            if(charArray[i - cha] != charArray[i + cha]){
                break;
            }
            len += 2;
            cha++;
        }   
        if(max < len){
            max = len;
            mid = i;
        }
    }
    if(max == 0){
        return s.charAt(0);
    }
    if(max % 2 == 0){
        return s.substring(mid - max / 2 , mid + max / 2);
    }
    return s.substring(mid - Math.floor(max / 2), mid + 1 + Math.floor(max / 2));
};

```

#### 别人的solution

​	马拉车算法，还没看懂。。。

​	空间复杂度，最佳解法没有使用数组存储每个行，而是直接按照行数学凑的字符串，值得学习。