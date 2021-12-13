from typing import List
class Solution:
    def maxIncreaseKeepingSkyline(self, grid: List[List[int]]) -> int:
        N = len(grid)
        colMax = [0] * N
        rowMax = [0] * N
        for i in range(N):
            for j in range(N):
                colMax[i] = max(colMax[i], grid[i][j])
                rowMax[i] = max(rowMax[i], grid[j][i])
        count = 0
        for i in range(N):
            for j in range(N):
                count += min(colMax[i], rowMax[j]) - grid[i][j]
        return count

print(Solution().maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]])) #35

print(Solution().maxIncreaseKeepingSkyline([[0,0,0],[0,0,0],[0,0,0]])) #35
