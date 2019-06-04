Implement function ToLowerCase() that has a string parameter str, and returns the same string in lowercase.

**Example 1:**

```
Input: "Hello"
Output: "hello"
```

**Example 2:**

```
Input: "here"
Output: "here"
```

**Example 3:**

```
Input: "LOVELY"
Output: "lovely"
```

##### 2019.06.04

##### 	我的思路：

​	 之前忘了js也用用编码的差来算，本来这题就是经典的用'A'和'a'的差来转换大小写的题目

​	时间复杂度O(n)，遍历一边s。

##### 注意：

​	我一开始写的时候直接写的str[i]下标来赋值，发现没成功，想起来String属于特别的操作，直接用下标赋值不行。

```javascript
 const map = new Map(
        [
            ["A", "a"],
            ["B", "b"],
            ["C", "c"],
            ["D", "d"],
            ["E", "e"],
            ["F", "f"],
            ["G", "g"],
            ["H", "h"],
            ["I", "i"],
            ["J", "j"],
            ["K", "k"],
            ["L", "l"],
            ["M", "m"],
            ["N", "n"],
            ["O", "o"],
            ["P", "p"],
            ["Q", "q"],
            ["R", "r"],
            ["S", "s"],
            ["T", "t"],
            ["U", "u"],
            ["V", "v"],
            ["W", "w"],
            ["X", "x"],
            ["Y", "y"],
            ["Z", "z"]
        ]
    );
    let strArr = str.split("");
    for(let i = 0; i < strArr.length; i++){
        if(map.has(strArr[i])){
            strArr[i] = map.get(strArr[i]);
        }
    }
    return strArr.join("");
```

##### 别人的思路：

##### 	注意:

​	箭头函数结果如果不打{}的话是默认带了return的。我之前加了{}却没加return，导致一直返回undefined的，都不知道为什么

```javascript
const toLowerCase = (str) => {
    //Calculate Ascii diff from a to A
    const DIFF = ('a'.charCodeAt(0) - 'A'.charCodeAt(0));
    return Array
        .from(str).map( ch => ( ch >= 'A' && ch <= 'Z' ) ? 	String.fromCharCode(ch.charCodeAt(0) + DIFF) : ch )
        .join('');
};
```

##### 自己写一遍

```javascript
var toLowerCase = function(str) {
    const Diff = ('a'.charCodeAt(0) - 'A'.charCodeAt(0));
    return str.split("").map(e => {return (e >= 'A' && e <= 'Z') ? String.fromCharCode(e.charCodeAt(0) + Diff) : e}).join("");
}
```

