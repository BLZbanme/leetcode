from typing import List

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

print(Solution().gridGame([[20,3,20,17,2,12,15,17,4,15],[20,10,13,14,15,5,2,3,14,3]])) #63
print(Solution().gridGame([[2,5,4],[1,5,1]])) #4
print(Solution().gridGame([[3,3,1],[8,5,2]])) #4
print(Solution().gridGame([[1,3,1,15],[1,3,3,1]])) #7
        