# 240. Search a 2D Matrix II

Write an efficient algorithm that searches for a `target` value in an `m x n` integer `matrix`. The `matrix` has the following properties:

- Integers in each row are sorted in ascending from left to right.
- Integers in each column are sorted in ascending from top to bottom.

 

**Example 1:**





```
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
Output: true
```

**Example 2:**





```
Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
Output: false
```

 

**Constraints:**

- `m == matrix.length`
- `n == matrix[i].length`
- `1 <= n, m <= 300`
- `-109 <= matrix[i][j] <= 109`
- All the integers in each row are **sorted** in ascending order.
- All the integers in each column are **sorted** in ascending order.
- `-109 <= target <= 109`

#### 2021.10.25

##### 	我的思路：

想到了二分，但是没写出来

##### 别人的思路：

##### 方法1：

```python
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        M = len(matrix)
        N = len(matrix[0])
        x, y = 0, N - 1
        while x < M and y >= 0:
            if matrix[x][y] == target:
                return True
            elif matrix[x][y] < target:
                x += 1
            else:
                y -=  1
        return False
```

方法2:

```python
class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        M = len(matrix)
        N = len(matrix[0])
        
        def binarySdSearch(x1, y1, x2, y2, xMax, yMax):
            if (x1 > xMax or y1 > yMax):
                return False
            if (x1 == x2 and y1 == y2):
                return matrix[y1][x1] == target

            xMid = x1 + (x2 - x1) // 2
            yMid = y1 + (y2 - y1) // 2
            if matrix[yMid][xMid] == target:
                return True
            elif matrix[yMid][xMid] < target and binarySdSearch(xMid + 1, yMid + 1, x2, y2, x2, y2):
                return True
            elif binarySdSearch(x1, y1, xMid, yMid, x2, y2):
                return True
            return binarySdSearch(xMid + 1, y1, x2, yMid, x2, y2) \
                    or binarySdSearch(x1, yMid + 1, xMid, y2, x2, y2) 
        
        return binarySdSearch(0, 0, N - 1, M - 1, N - 1, M - 1)
```

