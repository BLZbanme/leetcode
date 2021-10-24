from typing import List

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

print(Solution().gridGame([[20,3,20,17,2,12,15,17,4,15],[20,10,13,14,15,5,2,3,14,3]])) #63
print(Solution().gridGame([[2,5,4],[1,5,1]])) #4
print(Solution().gridGame([[3,3,1],[8,5,2]])) #4
print(Solution().gridGame([[1,3,1,15],[1,3,3,1]])) #7
        