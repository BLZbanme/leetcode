from typing import List
class Solution:
    def colorBorder(self, grid: List[List[int]], row: int, col: int, color: int) -> List[List[int]]:
        M = len(grid)
        N = len(grid[0])
        queue = [(row, col)]
        targetColor = grid[row][col]
        visited = [[0] * N for _ in range(M)]
        while queue:
            (i, j) = queue.pop(0)
            if i < 0 or i == M or j < 0 or j == N or visited[i][j] or grid[i][j] != targetColor:
                continue
            visited[i][j] = 1
            if i == 0 or i == M - 1 or j == 0 or j == N - 1 \
                or (grid[i - 1][j] != targetColor and not visited[i - 1][j]) \
                or (grid[i + 1][j] != targetColor and not visited[i + 1][j])\
                or (grid[i][j + 1] != targetColor and not visited[i][j + 1]) \
                or (grid[i][j - 1] != targetColor and not visited[i][j - 1]):
                grid[i][j] = color
            
            queue.append((i + 1, j))
            queue.append((i - 1, j))
            queue.append((i, j + 1))
            queue.append((i, j - 1))

        return grid

    
print(Solution().colorBorder([[1,2,1,2,1,2],[2,2,2,2,1,2],[1,2,2,2,1,2]], 1, 3, 1))