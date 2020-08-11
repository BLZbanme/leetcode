# 410. Split Array Largest Sum

Given an array which consists of non-negative integers and an integer *m*, you can split the array into *m* non-empty continuous subarrays. Write an algorithm to minimize the largest sum among these *m* subarrays.

**Note:**
If *n* is the length of array, assume the following constraints are satisfied:

- 1 ≤ *n* ≤ 1000
- 1 ≤ *m* ≤ min(50, *n*)



**Examples:**

```
Input:
nums = [7,2,5,10,8]
m = 2

Output:
18

Explanation:
There are four ways to split nums into two subarrays.
The best way is to split it into [7,2,5] and [10,8],
where the largest sum among the two subarrays is only 18.
```

#### 2020.07.25

#### 	我的思路：

没写出来

#### 别人的思路：

##### 动态规划

​		递归

```javascript
var splitArray = function(nums, m) {
    const N = nums.length;
    const dp = Array(N + 1);
    for (let i = 0; i <= N; i++) {
        dp[i] = Array(m + 1).fill(Infinity);
    }

    const sub = Array(N + 1);
    sub[0] = 0;
    for (let i = 0; i < N; i++) {
        sub[i + 1] = sub[i] + nums[i];
    }

    dp[0][0] = 0;

    for (let i = 1; i <= N; i++) {
        for (let j = 1; j <= Math.min(i, m); j++) {
            for (let k = 0; k < i; k++) {
                dp[i][j] = Math.min(dp[i][j], Math.max(dp[k][j - 1], sub[i] - sub[k]))
            }
        }
    }

    return dp[N][m];
};
```

# 329. Longest Increasing Path in a Matrix

Given an integer matrix, find the length of the longest increasing path.

From each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).

**Example 1:**

```
Input: nums = 
[
  [9,9,4],
  [6,6,8],
  [2,1,1]
] 
Output: 4 
Explanation: The longest increasing path is [1, 2, 6, 9].
```

**Example 2:**

```
Input: nums = 
[
  [3,4,5],
  [3,2,6],
  [2,2,1]
] 
Output: 4 
Explanation: The longest increasing path is [3, 4, 5, 6]. Moving diagonally is not allowed.
```

#### 2020.07.26

#### 我的思路：

​		没有记忆化的dfs，超时

```javascript
var longestIncreasingPath = function(matrix) {
    if (!matrix || !matrix.length) {
        return 0;
    }

    let result = 0;

    const M = matrix.length;
    const N = matrix[0].length;
    const visited = Array(M);
    for (let i = 0; i < M; i++) {
        visited[i] = Array(N).fill(false);
    }

    function dfs(i, j, length) {

        if (j < N - 1 && !visited[i][j + 1] && matrix[i][j] < matrix[i][j + 1]) {
            visited[i][j + 1] = true;
            dfs(i, j + 1, length + 1);
            visited[i][j + 1] = false;
        }

        if (i < M - 1 && !visited[i + 1][j] && matrix[i][j] < matrix[i + 1][j]) {
            visited[i + 1][j] = true;
            dfs(i + 1, j, length + 1);
            visited[i + 1][j] = false;
        }

        if (j > 0 && !visited[i][j - 1] && matrix[i][j] < matrix[i][j - 1]) {
            visited[i][j - 1] = true;
            dfs(i, j - 1, length + 1);
            visited[i][j - 1] = false;
        }

        if (i > 0 && !visited[i - 1][j] && matrix[i][j] < matrix[i - 1][j]) {
            visited[i - 1][j] = true;
            dfs(i - 1, j, length + 1);
            visited[i - 1][j] = false;
        }

        result = Math.max(result, length);
    }

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            dfs(i, j, 1);
        }
    }

    return result;
}
```

#### 别人的写法：

带记忆化的dfs

```javascript
var longestIncreasingPath = function(matrix) {
    if (!matrix || !matrix.length) {
        return 0;
    }

    let result = 0;

    const M = matrix.length;
    const N = matrix[0].length;
    const visited = Array(M);
    for (let i = 0; i < M; i++) {
        visited[i] = Array(N).fill(0);
    }

    function dfs(i, j) {
        if (visited[i][j]) {
            return visited[i][j];
        }

        let right = 0;
        let down = 0;
        let left = 0;
        let up = 0;

        if (j < N - 1 && matrix[i][j] < matrix[i][j + 1]) {
            right = dfs(i, j + 1);
        }

        if (i < M - 1 && matrix[i][j] < matrix[i + 1][j]) {
            down = dfs(i + 1, j);
        }

        if (j > 0 && matrix[i][j] < matrix[i][j - 1]) {
            left = dfs(i, j - 1);
        }

        if (i > 0 && matrix[i][j] < matrix[i - 1][j]) {
            up = dfs(i - 1, j);
        }
        visited[i][j] = 1 + Math.max(right, down, left, up);
        return visited[i][j];
    }

    for (let i = 0; i < M; i++) {
        for (let j = 0; j < N; j++) {
            result = Math.max(result, dfs(i, j));
        }
    }

    return result;
}
```