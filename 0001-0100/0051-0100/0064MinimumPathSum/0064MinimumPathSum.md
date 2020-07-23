# 64. Minimum Path Sum

Given a *m* x *n* grid filled with non-negative numbers, find a path from top left to bottom right which *minimizes* the sum of all numbers along its path.

**Note:** You can only move either down or right at any point in time.

**Example:**

```
Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.
```

##### 2019.07.10

##### 	我的思路：

###### 	写法1:

​	在用二维数组来记录各点的最小的路径和，给数组加了一行、一列Infinity，把dp(1,0)置为0可以直接从开始循环，不用判断边界。

```javascript
var minPathSum = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    const dp = new Array(height + 1);
    for(let i = 0; i <= height; i++){
        dp[i] = new Array(width + 1);
    }
    for(let i = 1; i <= width; i++){
        dp[0][i] = Infinity;
    }
    for(let j = 2; j <= height; j++){
        dp[j][0] = Infinity;
    }
    dp[1][0] = 0;
    for(let i = 1; i <=height; i++){
        for(let j = 1; j <= width; j++){
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
        }
    }
    return dp[height][width];
};
```

###### 写法2:

​	在用二维数组来记录各点的最小的路径和，把第一行和第一列的值先算出来，再循环。

```javascript
var minPathSum = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    const dp = new Array(height);
    for(let i = 0; i < height; i++){
        dp[i] = new Array(width);
    }
    dp[0][0] = grid[0][0];
    for(let i = 1; i < width; i++){
        dp[0][i] = dp[0][i - 1] + grid[0][i];
    }
    for(let j = 1; j < height; j++){
        dp[j][0] = dp[j - 1][0] + grid[j][0];
    }
    for(let i = 1; i < height; i++){
        for(let j = 1; j < width; j++){
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }
    return dp[height - 1][width - 1];
};
```

##### 别人的写法:

###### 写法3:

​	直接用pre存储上一行的结果，cur存储这一行的结果。空间开销少。

```javascript
var minPathSum = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    let cur = new Array(width);
    let pre = new Array(width);
    pre[0] = grid[0][0];
    for(let i = 1; i < width; i++) {
        pre[i] = pre[i - 1] + grid[0][i]; 
    }
    for(let i = 1; i < height; i++){
        cur[0] = pre[0] + grid[i][0];
        for(let j = 1; j < width; j++){
            cur[j] = Math.min(pre[j], cur[j - 1]) + grid[i][j];
        }
        pre = cur;
    }
    return pre[width - 1];
}
```

###### 写法3:

​	直接用一个数组存储。每次cur[j]还是表示上一行对应列的值，cur[j - 1]，表示的是同一行前一个值。空间开销最小。牛逼！

```javascript
var minPathSum = function(grid) {
    const height = grid.length;
    const width = grid[0].length;
    let cur = new Array(width);
    cur[0] = grid[0][0];
    for(let i = 1; i < width; i++){
        cur[i] = cur[i - 1] + grid[0][i];
    }
    for(let i = 1; i < height; i++){
        cur[0] += grid[i][0]; 
        for(let j = 1; j < width; j++){
            cur[j] = Math.min(cur[j], cur[j - 1]) + grid[i][j];
        }
    }
    return cur[width - 1];
}
```

#### 2020.07.23

redo

```javascript
var minPathSum = function(grid) {
    const M = grid.length;
    const N = grid[0].length;
    
    if (!M && !N) {
        return 0;
    }
    
    const dp = Array(N + 1).fill(0);
    dp[0] = Infinity;

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            if (!i && j) {
                dp[j + 1] = dp[j] + grid[i][j];
            }
            else {
                dp[j + 1] = Math.min(dp[j], dp[j + 1]) + grid[i][j];
            }
            
        }
    }

    return dp[N];
};
```

