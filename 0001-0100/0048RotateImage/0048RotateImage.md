#  48. Rotate Image

You are given an *n* x *n* 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

**Note:**

You have to rotate the image [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm), which means you have to modify the input 2D matrix directly. **DO NOT** allocate another 2D matrix and do the rotation.

**Example 1:**

```
Given input matrix = 
[
  [1,2,3],
  [4,5,6],
  [7,8,9]
],

rotate the input matrix in-place such that it becomes:
[
  [7,4,1],
  [8,5,2],
  [9,6,3]
]
```

**Example 2:**

```
Given input matrix =
[
  [ 5, 1, 9,11],
  [ 2, 4, 8,10],
  [13, 3, 6, 7],
  [15,14,12,16]
], 

rotate the input matrix in-place such that it becomes:
[
  [15,13, 2, 5],
  [14, 3, 4, 1],
  [12, 6, 8, 9],
  [16, 7,10,11]
]
```

##### 2019.06.29

##### 	我的思路：

​	从最里层开始直接旋转，如果这个矩阵长度是奇数，最里层是一个点，不需要转，从此外层开始转。

​	时间复杂度O(n<sup>2</sup>)

```javascript
var rotate = function(matrix) {
    let len = matrix.length;
    if(len == 1){
        return matrix;
    }
    let index = parseInt(len / 2) - 1;
    let nowLen = len % 2 == 0 ? 2 : 3;
    while(nowLen <= len){
        let tmp = new Array(nowLen);
        for(let i = 0; i < nowLen; i++){
            tmp[i] = matrix[index][index + i];
        }
        for(let i = 0; i < nowLen; i++){
            matrix[index][index + i] = matrix[index + nowLen - 1 - i][index];
        }
        for(let i = 0; i < nowLen; i++){
            matrix[index + i][index] = matrix[index + nowLen - 1][index + i];
        }
        for(let i = 0; i < nowLen; i++){
            matrix[index + nowLen - 1][index + i] = matrix[index + nowLen - 1 - i][index + nowLen - 1];
        }
        for(let i = 0; i < nowLen; i++){
            matrix[index + i][index + nowLen - 1] = tmp[i];
        }
        nowLen += 2;
        index--;
    }
    return matrix;
};
```

##### 别人的思路：

​	顺时针旋转矩阵可以通过把矩阵按行颠倒，然后求转置。

```
/*
 * clockwise rotate
 * first reverse up to down, then swap the symmetry 
 * 1 2 3     7 8 9     7 4 1
 * 4 5 6  => 4 5 6  => 8 5 2
 * 7 8 9     1 2 3     9 6 3
*/
```

```javascript
var rotate = function(matrix){
    matrix.reverse();
    for(let i = 0; i < matrix.length; i++){
        for(let j = i + 1; j < matrix.length; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    return matrix;
}
```

##### 	注:

​	逆时针旋转矩阵可以通过把矩阵按列颠倒，然后求转置

```javascript
var rotate = function(matrix){
    for(let arr of matrix){
        arr.reverse();
    }
    for(let i = 0; i < matrix.length; i++){
        for(let j = i + 1; j < matrix.length; j++){
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    return matrix;
}
```

