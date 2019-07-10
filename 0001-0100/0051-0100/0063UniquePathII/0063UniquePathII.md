# 63. Unique Paths II

A robot is located at the top-left corner of a *m* x *n* grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

![img](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)

An obstacle and empty space is marked as `1` and `0` respectively in the grid.

**Note:** *m* and *n* will be at most 100.

**Example 1:**

```
Input:
[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
Output: 2
Explanation:
There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
```

##### 2019.07.10

##### 	我的思路：

​	跟0062相同，只是需要判断下所在点是否有障碍物

```javascript
var uniquePathsWithObstacles = function(obstacleGrid) {
    const height = obstacleGrid.length;
    const width = obstacleGrid[0].length;
    const optArr = new Array(height);
    for(let i = 0; i < height; i++){
        optArr[i] = new Array(width);
    }
    optArr[0][0] = obstacleGrid[0][0] == 1 ? 0 : 1;
    for(let i = 1; i < width; i++){
        optArr[0][i] = obstacleGrid[0][i] == 1 ? 0 : optArr[0][i - 1];
    }
    for(let i = 1; i < height; i++){
        optArr[i][0] = obstacleGrid[i][0] == 1 ? 0 : optArr[i - 1][0];
    }
    for(let i = 1; i < height; i++){
        for(let j = 1; j < width; j++){
            optArr[i][j] = obstacleGrid[i][j] == 1 ? 0 : optArr[i - 1][j] + optArr[i][j - 1];
        }
    }
    return optArr[height - 1][width - 1];
};
```

