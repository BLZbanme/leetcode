from typing import List
class Solution:
    direct = [[-1, 0], [0, -1]]
    def countBattleships(self, board: List[List[str]]) -> int:
        count = 0
        M = len(board)
        N = len(board[0])
        self.board = board
        for i in range(M):
            for j in range(N):
                if board[i][j] == 'X' and self.check(i, j):
                    count += 1
        return count

    def check(self, i, j):
        for x, y in self.direct:
            if 0 <= i + x and 0 <= j + y:
                if self.board[i + x][j + y] == 'X':
                    return False
        return True

print(Solution().countBattleships([["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]]))#2
print(Solution().countBattleships([["."]]))#0