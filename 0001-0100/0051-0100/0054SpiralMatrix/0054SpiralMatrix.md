# 54.  Spiral Matrix

Given a matrix of *m* x *n* elements (*m* rows, *n* columns), return all elements of the matrix in spiral order.

**Example 1:**

```
Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
```

**Example 2:**

```
Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]
```

##### 2019.06.30

##### 	我的思路：

​	 从最外圈开始，一次递归遍历整个外圈

```javascript
var spiralOrder = function(matrix) {
    let height = matrix.length;
    if(height == 0){
        return matrix;
    }
    let width = matrix[0].length;
    let res = [];
    addCircle(res, matrix, 0, width, height);
    return res;
};

function addCircle(res, matrix, index, width, height){
    for(let i = 0; i < width; i++){
        res.push(matrix[index][index + i]);
    }
    for(let i = 1; i < height; i++){
        res.push(matrix[index + i][index + width - 1]);
    }
    if(width > 1 && height > 1){
        for(let i = width - 2; i > 0; i--){
            res.push(matrix[index + height - 1][i + index]);
        }
        for(let i = height - 1; i > 0; i--){
            res.push(matrix[i + index][index]);
        }
    }
    width -= 2;
    height -= 2;
    if(height < 1 || width < 1){
        return;
    }else{
        addCircle(res, matrix, index + 1, width, height);
    }
}
```

