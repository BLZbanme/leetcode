# 119. Pascal's Triangle II

Given a non-negative index *k* where *k* ≤ 33, return the *k*th index row of the Pascal's triangle.

Note that the row index starts from 0.

![img](https://upload.wikimedia.org/wikipedia/commons/0/0d/PascalTriangleAnimated2.gif)
In Pascal's triangle, each number is the sum of the two numbers directly above it.

**Example:**

```
Input: 3
Output: [1,3,3,1]
```

**Follow up:**

Could you optimize your algorithm to use only *O*(*k*) extra space?

##### 2019.07.31

##### 	我的思路：

##### 		方法1：

​		数学方法：

```javascript
var getRow = function(rowIndex) {
    let result = [1];
    if (!rowIndex) {
        return result;
    }
    for (let i = 1; i < rowIndex; i++) {
        result.push(Cmn(rowIndex, i));
    }
    result.push(1);
    return result;
};

// function Cmn(m, n) {
//     let result = 1;
//     let down = 1;
//     while (n) {
//         result *= m--;
//         down *= n--;
//     }
//     return result / down;
// }

//优化后Cmn
function Cmn(m, n) {
    if (n > m / 2) {
        n = m - n;
    }
    let result = 1;
    let down = 1;
    while (n) {
        result *= m--;
        down *= n--;
    }
    return result / down;
}
```

##### 		方法二：

​		dp

```javascript
var getRow = function(rowIndex) {
    if (!rowIndex) {
        return [1];
    }
    let pre = [1];
    let level = 1;
    while (level <= rowIndex) {
        let tmp = [1];
        for (let i = 0; i < level - 1; i++) {
            tmp.push(pre[i] + pre[i + 1]);
        }
        tmp.push(1);
        pre = tmp;
        level++;
    }
    return pre;
}
```

##### 别人的方法

​		最给力的dp：

````javascript
var getRow = function(rowIndex) {
    let result = [];
    for (let i = 0; i < rowIndex + 1; i++) {
        result.unshift(1);
        for (let j = 1; j < result.length - 1; j++) {
            result[j] = result[j + 1] + result[j];
        }
    }
    return result;
}
````

