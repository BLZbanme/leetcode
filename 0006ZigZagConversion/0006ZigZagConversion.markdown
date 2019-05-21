#### 问题描述

​	The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

​	And then read line by line: `"PAHNAPLSIIGYIR"`

#### Example

```
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

```
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:

P     I    N
A   L S  I G
Y A   H R
P     I
```

#### 我的解决方法	

##### 2019.05.11

​	我的思路，以![img](./picDemo.png)为每次要回来最高处为一个循环，以数组起点为0开始，一个循环就是2 * (numRows - 1)个数。根据每个循环中的数mod（2 * (numRows - 1)）的值可以判断，该字符在第几行中，并放到二维数组的对应行中。最后遍历二维数组。

​	时间复杂度O(n）,空间复杂度O(n)

​	最后记录下第一次达到100%，第一次报错是没考虑numRows为1的情况 = =

![img](./pic100.png)



```javascript
var convert = function(s, numRows) {
    if(numRows == 1){
        return s;
    }
    var tmpArray = [];
    for(let i = 0; i < numRows; i++){
        tmpArray.push(new Array());
    }
    var charArray = s.split('');
    var divNum = numRows * 2 - 2; 
    for(let i = 0; i < charArray.length; i++){
        var tmp = i % divNum;
        if(tmp < numRows){
            tmpArray[tmp].push(charArray[i]);
        }else{
            tmpArray[divNum - tmp].push(charArray[i]); 
        }
    }
    var result = '';
    for(let i = 0; i < tmpArray.length; i++){
        for(let j = 0; j < tmpArray[i].length; j++){
            result += tmpArray[i][j];
        }
    }
    return result;
};
```

#### 别人的solution

​	时间复杂度上，思路是一样的，里面根据下标判断应该是第几行的

​	空间复杂度，最佳解法没有使用数组存储每个行，而是直接按照行数学凑的字符串，值得学习。
