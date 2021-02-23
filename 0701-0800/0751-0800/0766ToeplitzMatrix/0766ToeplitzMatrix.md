# 766. Toeplitz Matrix

Given an `m x n` `matrix`, return *true if the matrix is Toeplitz. Otherwise, return false.*

A matrix is **Toeplitz** if every diagonal from top-left to bottom-right has the same elements.

 

**Example 1:**

![img](https://assets.leetcode.com/uploads/2020/11/04/ex1.jpg)

**Example 2:**

![img](https://assets.leetcode.com/uploads/2020/11/04/ex2.jpg)

 

**Constraints:**

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= m, n <= 20`
- `0 <= matrix[i][j] <= 99`

 

**Follow up:**

- What if the `matrix` is stored on disk, and the memory is limited such that you can only load at most one row of the matrix into the memory at once?
- What if the `matrix` is so large that you can only load up a partial row into the memory at once?

#### 2021.02.22

#### 	我的思路：

```javascript
var isToeplitzMatrix = function(matrix) {
    const m = matrix.length;
    const n = matrix[0].length;
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] !== matrix[i - 1][j - 1]) {
                return false;
            }
        }
    }

    return true;
};
```

