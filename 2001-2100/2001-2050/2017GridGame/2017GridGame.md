# 2017. Grid Game

You are given a **0-indexed** 2D array `grid` of size `2 x n`, where `grid[r][c]` represents the number of points at position `(r, c)` on the matrix. Two robots are playing a game on this matrix.

Both robots initially start at `(0, 0)` and want to reach `(1, n-1)`. Each robot may only move to the **right** (`(r, c)` to `(r, c + 1)`) or **down** (`(r, c)` to `(r + 1, c)`).

At the start of the game, the **first** robot moves from `(0, 0)` to `(1, n-1)`, collecting all the points from the cells on its path. For all cells `(r, c)` traversed on the path, `grid[r][c]` is set to `0`. Then, the **second** robot moves from `(0, 0)` to `(1, n-1)`, collecting the points on its path. Note that their paths may intersect with one another.

The **first** robot wants to **minimize** the number of points collected by the **second** robot. In contrast, the **second** robot wants to **maximize** the number of points it collects. If both robots play **optimally**, return *the **number of points** collected by the **second** robot.*

 

**Example 1:**





```
Input: grid = [[2,5,4],[1,5,1]]
Output: 4
Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
The cells visited by the first robot are set to 0.
The second robot will collect 0 + 0 + 4 + 0 = 4 points.
```

**Example 2:**





```
Input: grid = [[3,3,1],[8,5,2]]
Output: 4
Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
The cells visited by the first robot are set to 0.
The second robot will collect 0 + 3 + 1 + 0 = 4 points.
```

**Example 3:**





```
Input: grid = [[1,3,1,15],[1,3,3,1]]
Output: 7
Explanation: The optimal path taken by the first robot is shown in red, and the optimal path taken by the second robot is shown in blue.
The cells visited by the first robot are set to 0.
The second robot will collect 0 + 1 + 3 + 3 + 0 = 7 points.
```

 

**Constraints:**

- `grid.length == 2`
- `n == grid[r].length`
- `1 <= n <= 5 * 104`
- `1 <= grid[r][c] <= 105`

#### 2021.10.25

#### 	我的思路：

理解错题目意思，我以为是需要A走最大值，与此同时B的最大值

```python
class Solution:
    def gridGame(self, grid: List[List[int]]) -> int:
        N = len(grid[0])
        dp = [0] * N
        dp[0] = grid[0][0]
        for index in range(1, N):
            dp[index] = dp[index - 1] + grid[0][index]
        visitd = [True] * N
        dp[0] = dp[0] + grid[1][0]
        for index in range(1, N):
            if dp[index] > dp[index - 1]:
                dp[index] += grid[1][index]
            else:
                dp[index] = dp[index - 1] + grid[1][index]
                visitd[index] = False
        
        j = N - 1
        while j >= 0:
            if visitd[j]:
                grid[1][j] = 0
                while j >= 0:
                    grid[0][j] = 0
                    j -= 1    
                break
            else:
                grid[1][j] = 0
                j -= 1

        dp = [0] * N
        for index in range(1, N):
            dp[index] = dp[index - 1] + grid[0][index]
        dp[0] = grid[1][0]
        for index in range(1, N):
            dp[index] = max(dp[index - 1], dp[index]) + grid[1][index]

        return dp[N - 1]
```

#### 别人的思路：

[别人的讲解](https://leetcode-cn.com/problems/grid-game/solution/javaqian-zhui-he-by-merickbao-2-nq78/)

实质上是个数学题，A走完之后，B只能走省下两种走法，看哪边更大，使用前缀和

```python
class Solution:
    def gridGame(self, grid: List[List[int]]) -> int:
        N = len(grid[0])
        dp = [[0] * (N + 1) for i in range(2)]
        for index in range(1, N + 1):
            dp[0][index] = dp[0][index - 1] + grid[0][index - 1]
            dp[1][index] = dp[1][index - 1] + grid[1][index - 1]
        res = float('inf')
        for index in range(1, N + 1):
            res = min(res, max(dp[0][N] - dp[0][index], dp[1][index - 1]))

        return res
```
