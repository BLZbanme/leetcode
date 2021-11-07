from typing import List

class Solution:
    def maxCount(self, m: int, n: int, ops: List[List[int]]) -> int:
        xMin = m
        yMin = n
        for [x, y] in ops:
            xMin = min(x, xMin)
            yMin = min(y, yMin)
        return  yMin * xMin

print(Solution().maxCount(3, 3, [[2, 2,], [3, 4]]))