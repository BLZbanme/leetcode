# 62. Unique Paths

A robot is located at the top-left corner of a *m* x *n* grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

![img](https://assets.leetcode.com/uploads/2018/10/22/robot_maze.png)
Above is a 7 x 3 grid. How many possible unique paths are there?

**Note:** *m* and *n* will be at most 100.

**Example 1:**

```
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
```

**Example 2:**

```
Input: m = 7, n = 3
Output: 28
```

##### 2019.07.09

##### 	我的思路：

​	dp: 用一个名字为opArr的二维数据来存储坐标(i,j)的路径数。

```javascript
	opArr[i][j] = opArr[i - 1][j] + opArr[i][j - 1]
```

​	最优子结构就是上面这行代码。

​	时间复杂度O(mn)，空间复杂度O(mn)

```javascript
var uniquePaths = function(m, n) {
    let opArr = new Array(m);
    for(let i = 0; i < m; i++){
        opArr[i] = new Array(n);
    }
    for(let i = 0; i < n; i++){
        opArr[0][i] = 1;
    }
    for(let i = 0; i < m; i++){
        opArr[i][0] = 1;
    }
    for(let i = 1; i < n; i++){
        for(let j = 1; j < m; j++){
            opArr[j][i] = opArr[j - 1][i] + opArr[j][i - 1]; 
        }
    }
    return opArr[m - 1][n - 1];
};
```

#### 2020.12.09

##### redo

##### 滚动数组

```typescript
function uniquePaths(m: number, n: number): number {
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[j] += dp[j - 1];
        }
        dp[0] = 0;
    }
    return dp[n];
};
```

