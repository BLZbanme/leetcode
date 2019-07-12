# 74. Search a 2D Matrix

Write an efficient algorithm that searches for a value in an *m* x *n* matrix. This matrix has the following properties:

- Integers in each row are sorted from left to right.
- The first integer of each row is greater than the last integer of the previous row.

**Example 1:**

```
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
```

**Example 2:**

```
Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false
```

##### 2019.07.12

##### 	我的思路：

​	两次二分查找

```javascript
var searchMatrix = function(matrix, target) {
    let len = matrix.length;
    let lo = 0, hi = matrix.length - 1;
    while (lo <= hi) {
        let mid = parseInt((lo + hi) / 2);
        if (matrix[mid][0] == target) {
            return true;
        }
        else if (matrix[mid][0] < target) {
            if (mid == len - 1 || matrix[mid + 1][0] > target) {
                return searchInRow(matrix[mid], target);            
            }   
            else {
                lo = mid + 1;
            }
        }
        else {
            hi = mid - 1;
        }
    }
    return false;
};

function searchInRow (arr, target) {
    let lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
        let mid = parseInt((lo + hi) / 2);
        if (arr[mid] == target) {
            return true;
        }
        else if (arr[mid] < target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return false;
}

```

###### 	改进后：

````javascript
var searchMatrix = function(matrix, target) {
    const height = matrix.length;
    if(height == 0){
        return false;
    }
    let firstCol = [];
    for (let i = 0; i < height; i++) {
        if (matrix[i][0] != undefined) {
            firstCol[i] = matrix[i][0];
        }
        else {
            return false;
        }
    }
    let row = searchInRow(firstCol, target);
    if (row < 0) { 
        return false;
    }
    let col = searchInRow(matrix[row], target);
    return matrix[row][col] == target;
}

function searchInRow (arr, target) {
    let lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
        let mid = parseInt((lo + hi) / 2);
        if (arr[mid] == target) {
            return mid;
        }
        else if (arr[mid] < target) {
            lo = mid + 1;
        }
        else {
            hi = mid - 1;
        }
    }
    return lo - 1;
}
````

