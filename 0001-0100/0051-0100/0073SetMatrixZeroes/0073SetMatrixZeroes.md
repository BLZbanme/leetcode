# 73. Rotate List

Given a *m* x *n* matrix, if an element is 0, set its entire row and column to 0. Do it [**in-place**](https://en.wikipedia.org/wiki/In-place_algorithm).

**Example 1:**

```
Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
```

**Example 2:**

```
Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
```

**Follow up:**

- A straight forward solution using O(*mn*) space is probably a bad idea.
- A simple improvement uses O(*m* + *n*) space, but still not the best solution.
- Could you devise a constant space solution?

##### 2019.07.04

##### 	我的思路：

##### 		方法1：

​	先遍历一遍，用两个set，分别存储含0的行和列。

​	把两个set中含有的行和列置为0。

​	时间复杂度O(mn),空间复杂度O(m+n)。

```javascript
var setZeroes = function(matrix) {
    let rowSet = new Set();
    let colSet = new Set();
    matrix.forEach((arr, i) => {
        arr.forEach((v, j) => {
            if(v == 0){
                rowSet.add(i);
                colSet.add(j);
            }
        })
    });
    for(let r of rowSet){
        matrix[r].fill(0);
    }
    for(let c of colSet){
        for(let i = 0; i < matrix.length; i++){
            matrix[i][c] = 0;
        }
    }
    return matrix;
};
```

##### 	方法2:

​	遍历一遍数组，用各行各列的第一项是否为0来表示该行该列是否全为0。因为(0,0)项即表示第0行和第0列，所以我们设置让它代表第0行，再单独用个col0来表示第0列。

​	然后遍历除去第一行第一列的矩阵，把里面的项该置0的置0。

​	最后把第0行，第0列该置0的置0.	

​	时间复杂度O(mn),空间复杂度O(1).

```javascript
var setZeroes = function(matrix) {
    let col0 = 1, rows = matrix.length, cols = matrix[0].length;
    for(let i = 0; i < rows; i++){
        if(matrix[i][0] == 0){
            col0 = 0;
        }
        for(let j = 1; j < cols; j++){
            if(matrix[i][j] == 0){
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for(let i = 1; i < rows; i++){
        for(let j = 1; j < cols; j++){
            if(matrix[i][0] == 0 || matrix[0][j] == 0){
                matrix[i][j] = 0;
            }
        }
    }
    if(matrix[0][0] == 0) {
        for(let i = 1; i < cols; i++){
            matrix[0][i] = 0;
        }
    }
    if(col0 == 0){
        for(let i = 0; i < rows; i++){
            matrix[i][0] = 0;
        }
    }
    return matrix;
}
```

##### 	方法3：

​	这是方法2的写法优化的一下，代码行数变少了，但是可读性也变差了很多。

​	时间复杂度O(mn),空间复杂度O(1).

```javascript
var setZeroes = function(matrix) {
    let col0 = 1;
    for(let i = 0; i < rows; i++){
        if(matrix[i][0] == 0){
            col0 = 0;
        }
        for(let j = 1; j < cols; j++){
            if(matrix[i][j] == 0){
                matrix[i][0] = matrix[0][j] = 0;
            }
        }
    }
    for(let i = matrix.length - 1; i >= 0; i--){
        for(let j = matrix[0].length - 1; j >= 1; j--){
            if(matrix[i][0] == 0 || matrix[0][j] == 0) {
                matrix[i][j] = 0;
            }
        }
        if(col0 == 0) {
            matrix[i][0] = 0;
        }
    }
    return matrix;
}
```

