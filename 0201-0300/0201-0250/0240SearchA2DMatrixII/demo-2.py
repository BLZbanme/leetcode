class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        M = len(matrix)
        N = len(matrix[0])
        
        def binarySdSearch(x1, y1, x2, y2, xMax, yMax):
            if (x1 > xMax or y1 > yMax):
                return False
            if (x1 == x2 and y1 == y2):
                return matrix[y1][x1] == target

            xMid = x1 + (x2 - x1) // 2
            yMid = y1 + (y2 - y1) // 2
            if matrix[yMid][xMid] == target:
                return True
            elif matrix[yMid][xMid] < target and binarySdSearch(xMid + 1, yMid + 1, x2, y2, x2, y2):
                return True
            elif binarySdSearch(x1, y1, xMid, yMid, x2, y2):
                return True
            return binarySdSearch(xMid + 1, y1, x2, yMid, x2, y2) \
                    or binarySdSearch(x1, yMid + 1, xMid, y2, x2, y2) 
        
        return binarySdSearch(0, 0, N - 1, M - 1, N - 1, M - 1)
        