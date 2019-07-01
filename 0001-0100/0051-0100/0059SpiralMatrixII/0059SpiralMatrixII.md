# 59. Spiral Matrix II

Given a positive integer *n*, generate a square matrix filled with elements from 1 to *n*2 in spiral order.

**Example:**

```
Input: 3
Output:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]
```

##### 2019.07.01

##### 	我的思路：

​	老规矩递归

```javascript
var generateMatrix = function(n) {
    let res = new Array(n);
    for(let i = 0; i < n; i++){
        res[i] = new Array(n);
    }
    circle(res, 0, n, 1);
    return res;
};

function circle(res, index, width, num){
    for(let i = 0; i < width; i++){
        res[index][index + i] = num++;
    }
    for(let i = 1; i < width; i++){
        res[index + i][index + width - 1] = num++;
    }
    for(let i = width + index - 2; i > index; i--){
        res[index + width - 1][i] = num++;
    }
    for(let i = index + width - 1; i > index; i--){
        res[i][index] = num++;
    }
    width -= 2;
    if(width > 0){
        circle(res, index + 1, width, num);
    }
}
```
