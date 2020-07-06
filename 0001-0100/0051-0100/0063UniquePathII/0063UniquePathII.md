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

##### 别人的写法：

​	改良，在dp存储每个的路径数的数组中，加一行一列，这样就不用初始化的时候给第一排，第一列置1了。

```javascript
var uniquePathsWithObstacles = function(obstacleGrid) {
    const height = obstacleGrid.length, width = obstacleGrid[0].length;
    let dp = new Array(height + 1);
    for(let i = 0; i <= height; i++){
        dp[i] = new Array(width + 1).fill(0);
    }
    dp[0][1] = 1;
    for(let i = 1; i <= height; i++){
        for(let j = 1; j <= width; j++){
            if(!obstacleGrid[i - 1][j - 1]){
                dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
            }
        }
    }
    return dp[height][width];
}
```

##### 2020.07.06

redo

```javascript
var uniquePathsWithObstacles = function(obstacleGrid) {
    const M = obstacleGrid.length;
    const N = obstacleGrid[0].length;
    const dp = Array(N + 1).fill(0);

    dp[0] = 1;

    for (let i = 1; i <= M; i++) {
        for (let j = 1; j <= N; j++) {
            dp[j] = obstacleGrid[i - 1][j - 1] ? 0 : (dp[j - 1] + dp[j]);
        }
        dp[0] = 0;
    }
    return dp[N];
};
```

