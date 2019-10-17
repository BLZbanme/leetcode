Write a function that reverses a string. The input string is given as an array of characters `char[]`.

Do not allocate extra space for another array, you must do this by **modifying the input array in-place** with O(1) extra memory.

You may assume all the characters consist of [printable ascii characters](https://en.wikipedia.org/wiki/ASCII#Printable_characters).

**Example 1:**

```
Input: ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
```

**Example 2:**

```
Input: ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]
```

##### 2019.06.15

##### 	我的思路：

​	头尾交换

​	时间复杂度O(n)

```javascript
var reverseString = function(s) {
    for(let i = 0; i < s.length / 2; i++){
        let tmp = s[i];
        s[i] = s[s.length - i - 1];
        s[s.length - i - 1] = tmp; 
    }
    return s;
};
```

##### 别人的写法：

​	和我大同小异
