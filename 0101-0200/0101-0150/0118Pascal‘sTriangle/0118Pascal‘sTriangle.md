# 118. Pascal's Triangle

Given a non-negative integer *numRows*, generate the first *numRows* of Pascal's triangle.

![img](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)
In Pascal's triangle, each number is the sum of the two numbers directly above it.

**Example:**

```
Input: 5
Output:
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
```

##### 2019.07.31

##### 	我的思路：

​		很无聊的一题

```javascript
var generate = function(numRows) {
    if (!numRows) {
        return [];
    }
    let one = [1];
    let result = [one];
    if (numRows === 1) {
        return result;
    }
    let level = 2;
    while (level <= numRows) {
        let tmp = [1];
        for (let i = 0; i < level - 2; i++) {
            tmp.push(result[level - 2][i] + result[level - 2][i + 1]);
        }
        tmp.push(1);
        result.push(tmp);
        level++;
    }
    return result;
};
```
