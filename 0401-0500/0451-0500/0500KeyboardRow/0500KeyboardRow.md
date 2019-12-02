Given a List of words, return the words that can be typed using letters of **alphabet** on only one row's of American keyboard like the image below.

![img](https://assets.leetcode.com/uploads/2018/10/12/keyboard.png)

**Example:**

```
Input: ["Hello", "Alaska", "Dad", "Peace"]
Output: ["Alaska", "Dad"]
```

**Note:**

1. You may use one character in the keyboard more than once.
2. You may assume the input string will only contain letters of alphabet.

##### 2019.06.15

##### 	我的思路：

​	声明3个set，分别判断每个字符串中的每个字符串是否属于同一个集合。

​	时间复杂度O(n)

```javascript
var findWords = function(words) {
    const one = new Set(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']);
    const two = new Set(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l']);
    const three = new Set(['z', 'x', 'c', 'v', 'b', 'n', 'm']);
    return words.filter(arr => 
        {
            let charArr = arr.toLowerCase().split("");
            return charArr.every(e => one.has(e)) || charArr.every(e => two.has(e)) || charArr.every(e => three.has(e))
        }
    );
};
```

##### 别人的写法：

​	使用正则匹配（这块内容等把基础过完好好学习下）

```javascript
var findWords = function(words) {
    return words.filter(arr => /^[qwertyuiop]*$/i.test(arr) || 		/^[asdfghjkl]*$/i.test(arr) || /^[zxcvbnm]*$/i.test(arr));                    
};              
```

